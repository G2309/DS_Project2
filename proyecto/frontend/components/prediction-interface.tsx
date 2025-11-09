"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, AlertCircle, CheckCircle, Loader, Info, TrendingUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Dynamic import para cornerstone
let cornerstone: any = null
let cornerstoneWADOImageLoader: any = null

if (typeof window !== 'undefined') {
  import('cornerstone-core').then((cs) => {
    cornerstone = cs.default
  })
  import('cornerstone-wado-image-loader').then((loader) => {
    cornerstoneWADOImageLoader = loader.default
    import('dicom-parser').then((dicomParser) => {
      if (cornerstoneWADOImageLoader && cornerstone) {
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone
        cornerstoneWADOImageLoader.external.dicomParser = dicomParser.default
      }
    })
  })
}

interface VertebraePrediction {
  prob: number
  label: number
}

interface BackendResponse {
  predictions: {
    [key: string]: VertebraePrediction
  }
  status: string
}

interface RegionalAnalysis {
  region: string
  vertebra: string
  fractureProb: number
  confidence: number
  hasFracture: boolean
}

interface DetailedPrediction {
  fracture: boolean
  fractureCount: number
  regionalAnalysis: RegionalAnalysis[]
  recommendedAction: string
  clinicalNotes: string
}

const BACKEND_URL = "http://localhost:8000"

export default function PredictionInterface() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingPreview, setLoadingPreview] = useState(false)
  const [prediction, setPrediction] = useState<DetailedPrediction | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const processDicomFile = async (file: File) => {
    setLoadingPreview(true)
    try {
      // Esperar a que cornerstone esté cargado
      await new Promise(resolve => setTimeout(resolve, 500))
      
      if (!cornerstone || !cornerstoneWADOImageLoader) {
        throw new Error('Cornerstone not loaded')
      }

      const arrayBuffer = await file.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)
      const blob = new Blob([uint8Array], { type: 'application/dicom' })
      const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(blob)
      
      const image = await cornerstone.loadImage(imageId)
      
      if (canvasRef.current) {
        const canvas = canvasRef.current
        canvas.width = image.width
        canvas.height = image.height
        
        const context = canvas.getContext('2d')
        if (context) {
          const imageData = context.createImageData(image.width, image.height)
          const pixelData = image.getPixelData()
          
          // Normalizar y convertir a escala de grises
          let min = Infinity
          let max = -Infinity
          for (let i = 0; i < pixelData.length; i++) {
            if (pixelData[i] < min) min = pixelData[i]
            if (pixelData[i] > max) max = pixelData[i]
          }
          
          const range = max - min
          for (let i = 0; i < pixelData.length; i++) {
            const normalizedValue = ((pixelData[i] - min) / range) * 255
            const index = i * 4
            imageData.data[index] = normalizedValue
            imageData.data[index + 1] = normalizedValue
            imageData.data[index + 2] = normalizedValue
            imageData.data[index + 3] = 255
          }
          
          context.putImageData(imageData, 0, 0)
          
          const dataUrl = canvas.toDataURL('image/png')
          setPreview(dataUrl)
        }
      }
    } catch (err) {
      console.error('Error processing DICOM:', err)
      setPreview('dicom-placeholder')
    } finally {
      setLoadingPreview(false)
    }
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setPrediction(null)
      setError(null)
      
      if (file.name.endsWith('.dcm')) {
        await processDicomFile(file)
      } else {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const processBackendResponse = (data: BackendResponse): DetailedPrediction => {
    const vertebraeOrder = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']
    const regionalAnalysis: RegionalAnalysis[] = []
    let fractureCount = 0

    vertebraeOrder.forEach((vertebra, idx) => {
      const pred = data.predictions[vertebra]
      const hasFracture = pred.label === 1
      if (hasFracture) fractureCount++

      let region = ''
      if (idx <= 1) region = 'Upper Cervical'
      else if (idx <= 3) region = 'Mid-Upper Cervical'
      else if (idx <= 5) region = 'Mid-Lower Cervical'
      else region = 'Lower Cervical'

      regionalAnalysis.push({
        region,
        vertebra,
        fractureProb: pred.prob,
        confidence: pred.prob,
        hasFracture
      })
    })

    const fracture = fractureCount > 0

    let recommendedAction = ''
    let clinicalNotes = ''

    if (!fracture) {
      recommendedAction = "No fracturas detectadas. Continuar con monitoreo de rutina."
      clinicalNotes = "Alineación cervical normal. No se identificaron líneas de fractura aguda en ninguna vértebra."
    } else if (fractureCount === 1) {
      const fracturedVertebra = regionalAnalysis.find(r => r.hasFracture)?.vertebra
      recommendedAction = `Fractura detectada en ${fracturedVertebra}. Se recomienda revisión clínica inmediata y considerar confirmación por TC.`
      clinicalNotes = `Presencia de disrupción cortical en ${fracturedVertebra} con posible edema de tejidos blandos asociado. Recomendar inmovilización pendiente de evaluación adicional.`
    } else {
      const fracturedVertebrae = regionalAnalysis.filter(r => r.hasFracture).map(r => r.vertebra).join(', ')
      recommendedAction = `Múltiples fracturas detectadas (${fracturedVertebrae}). Atención urgente requerida. Consulta con neurocirugía inmediata.`
      clinicalNotes = `Fracturas múltiples identificadas en ${fracturedVertebrae}. Patrón de lesión compleja que requiere evaluación multidisciplinaria urgente. Alto riesgo de inestabilidad cervical.`
    }

    return {
      fracture,
      fractureCount,
      regionalAnalysis,
      recommendedAction,
      clinicalNotes
    }
  }

  const handlePredict = async () => {
    if (!selectedFile) return

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('threshold', '0.5')

      const response = await fetch(`${BACKEND_URL}/predict`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`)
      }

      const data: BackendResponse = await response.json()

      if (data.status !== 'success') {
        throw new Error('Error en la predicción')
      }

      const processedPrediction = processBackendResponse(data)
      setPrediction(processedPrediction)

    } catch (err) {
      console.error('Error:', err)
      setError(err instanceof Error ? err.message : 'Error al procesar la imagen')
    } finally {
      setLoading(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    if (files[0]) {
      const fakeEvent = {
        target: { files },
      } as React.ChangeEvent<HTMLInputElement>
      handleFileSelect(fakeEvent)
    }
  }

  return (
    <div className="min-h-screen bg-white p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-primary mb-2">Predicción de Fractura Cervical</h2>
          <p className="text-muted-foreground">Sube una imagen DICOM de la columna cervical para identificar fracturas</p>
        </div>

        <div className="grid gap-6">
          {/* Upload Area */}
          <Card className="border-primary/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">Subir Imagen DICOM</CardTitle>
              <CardDescription>Formato .dcm solamente</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center cursor-pointer hover:border-primary/60 hover:bg-primary/5 transition-all"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".dcm"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Upload className="w-12 h-12 text-primary/50 mx-auto mb-3" />
                <p className="text-foreground font-medium">Arrastra tu archivo DICOM aquí</p>
                <p className="text-muted-foreground text-sm mt-1">o haz clic para buscar</p>
              </div>

              {selectedFile && (
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-foreground/75">
                    Archivo seleccionado: <span className="text-primary font-semibold">{selectedFile.name}</span>
                  </p>
                </div>
              )}

              {error && (
                <Alert className="mt-4 bg-red-50 border-red-300">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Preview and Results Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Image Preview */}
            {preview && (
              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Vista Previa</CardTitle>
                </CardHeader>
                <CardContent>
                  {loadingPreview ? (
                    <div className="relative w-full h-80 bg-muted rounded-lg overflow-hidden border border-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <Loader className="w-10 h-10 text-primary animate-spin mx-auto mb-3" />
                        <p className="text-muted-foreground">Procesando DICOM...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-80 bg-muted rounded-lg overflow-hidden border border-primary/20 flex items-center justify-center">
                      {preview === 'dicom-placeholder' ? (
                        <div className="text-center p-6">
                          <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p className="text-primary font-semibold text-lg mb-2">Archivo DICOM Cargado</p>
                          <p className="text-muted-foreground text-sm">{selectedFile?.name}</p>
                          <p className="text-muted-foreground text-xs mt-2">
                            Tamaño: {((selectedFile?.size || 0) / 1024).toFixed(2)} KB
                          </p>
                          <p className="text-xs text-primary/60 mt-4">
                            No se pudo procesar la vista previa
                          </p>
                        </div>
                      ) : (
                        <img src={preview} alt="Preview" className="w-full h-full object-contain" />
                      )}
                    </div>
                  )}
                  {/* Canvas oculto para procesar DICOM */}
                  <canvas ref={canvasRef} style={{ display: 'none' }} />
                </CardContent>
              </Card>
            )}

            {/* Main Results */}
            {prediction && (
              <Card
                className={`border-2 shadow-sm ${
                  prediction.fracture ? "border-red-300 bg-red-50/50" : "border-accent/40 bg-accent/5"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {prediction.fracture ? (
                      <>
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span className="text-red-600">Fractura Detectada</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-accent">Sin Fracturas</span>
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-primary/20">
                    <p className="text-foreground/70 text-sm mb-2 font-medium">Resultado del Análisis</p>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-primary">
                        {prediction.fracture ? `${prediction.fractureCount} Fractura${prediction.fractureCount > 1 ? 's' : ''}` : 'Normal'}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-primary/20">
                    <p className="text-foreground/70 text-xs mb-2 font-medium">Información del Modelo</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Modelo:</span>
                        <span className="text-foreground/90 font-semibold">DeiT Base</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Vértebras:</span>
                        <span className="text-foreground/90 font-semibold">C1-C7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Umbral:</span>
                        <span className="text-foreground/90 font-semibold">0.5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Hora:</span>
                        <span className="text-foreground/90 font-semibold">{new Date().toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Regional Analysis */}
          {prediction && (
            <Card className="border-primary/20 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  Análisis por Vértebra
                </CardTitle>
                <CardDescription>Probabilidad de fractura en cada vértebra cervical</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {prediction.regionalAnalysis.map((region, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border ${
                      region.hasFracture 
                        ? 'bg-red-50 border-red-300' 
                        : 'bg-white border-primary/20'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className={`font-semibold ${region.hasFracture ? 'text-red-600' : 'text-primary'}`}>
                            {region.vertebra}
                            {region.hasFracture && <span className="ml-2 text-xs font-bold">⚠️ FRACTURA</span>}
                          </p>
                          <p className="text-xs text-muted-foreground">{region.region}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-bold ${region.hasFracture ? 'text-red-600' : 'text-primary'}`}>
                            {(region.fractureProb * 100).toFixed(1)}%
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Probabilidad
                          </p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            region.hasFracture
                              ? "bg-gradient-to-r from-red-500 to-orange-500"
                              : "bg-gradient-to-r from-primary to-accent"
                          }`}
                          style={{ width: `${region.fractureProb * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Clinical Recommendations */}
          {prediction && (
            <div className="space-y-4">
              <Alert
                className={`${prediction.fracture ? "bg-red-50 border-red-300" : "bg-accent/10 border-accent/30"}`}
              >
                <Info className={`h-4 w-4 ${prediction.fracture ? "text-red-600" : "text-accent"}`} />
                <AlertDescription className={`${prediction.fracture ? "text-red-800" : "text-accent/90"}`}>
                  <p className="font-semibold mb-1">Acción Recomendada:</p>
                  {prediction.recommendedAction}
                </AlertDescription>
              </Alert>

              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Notas Clínicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed text-sm">{prediction.clinicalNotes}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handlePredict}
              disabled={!selectedFile || loading}
              className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-sm"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Analizando...
                </>
              ) : (
                "Ejecutar Predicción"
              )}
            </Button>
            <Button
              onClick={() => {
                setSelectedFile(null)
                setPreview(null)
                setPrediction(null)
                setError(null)
              }}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5"
            >
              Limpiar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}