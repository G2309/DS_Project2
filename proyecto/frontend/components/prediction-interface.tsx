"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, AlertCircle, CheckCircle, Loader, Info, TrendingUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RegionalAnalysis {
  region: string
  vertebra: string
  fractureProb: number
  confidence: number
}

interface DetailedPrediction {
  fracture: boolean
  confidence: number
  severity?: string
  regionalAnalysis: RegionalAnalysis[]
  recommendedAction: string
  clinicalNotes: string
}

export default function PredictionInterface() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [prediction, setPrediction] = useState<DetailedPrediction | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setPrediction(null)
    }
  }

  const handlePredict = async () => {
    if (!selectedFile) return

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))

    // Mock prediction with detailed regional analysis
    const isFracture = Math.random() > 0.65
    setPrediction({
      fracture: isFracture,
      confidence: Math.random() * 0.1 + 0.88,
      severity: isFracture ? (Math.random() > 0.6 ? "Severe" : "Moderate") : "None",
      regionalAnalysis: [
        { region: "Upper", vertebra: "C1-C2", fractureProb: 0.12, confidence: 0.94 },
        { region: "Mid-Upper", vertebra: "C3-C4", fractureProb: isFracture ? 0.78 : 0.08, confidence: 0.91 },
        { region: "Mid-Lower", vertebra: "C5-C6", fractureProb: 0.15, confidence: 0.93 },
        { region: "Lower", vertebra: "C7", fractureProb: 0.09, confidence: 0.95 },
      ],
      recommendedAction: isFracture
        ? "Immediate clinical review recommended. Consider CT confirmation and neurosurgery consultation."
        : "No acute findings. Continue routine monitoring.",
      clinicalNotes: isFracture
        ? "Presence of cortical disruption with associated soft tissue swelling. Recommend immobilization pending further evaluation."
        : "Normal cervical spine alignment. No acute fracture lines identified.",
    })
    setLoading(false)
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
          <h2 className="text-4xl font-bold text-primary mb-2">Spine Fracture Prediction</h2>
          <p className="text-muted-foreground">Upload a cervical spine imaging study for AI-assisted analysis</p>
        </div>

        <div className="grid gap-6">
          {/* Upload Area */}
          <Card className="border-primary/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-primary">Upload Image</CardTitle>
              <CardDescription>DICOM, JPG, or PNG format</CardDescription>
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
                  accept="image/*,.dcm"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Upload className="w-12 h-12 text-primary/50 mx-auto mb-3" />
                <p className="text-foreground font-medium">Drag and drop your image here</p>
                <p className="text-muted-foreground text-sm mt-1">or click to browse</p>
              </div>

              {selectedFile && (
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-foreground/75">
                    Selected: <span className="text-primary font-semibold">{selectedFile.name}</span>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preview and Results Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Image Preview */}
            {preview && (
              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Image Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-80 bg-muted rounded-lg overflow-hidden border border-primary/20">
                    <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-contain" />
                  </div>
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
                        <span className="text-red-600">Fracture Detected</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-accent">No Fracture</span>
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-primary/20">
                    <p className="text-foreground/70 text-sm mb-2 font-medium">Model Confidence</p>
                    <div className="flex items-end gap-3">
                      <div className="text-3xl font-bold text-primary">{(prediction.confidence * 100).toFixed(1)}%</div>
                      <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-full transition-all"
                          style={{ width: `${prediction.confidence * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {prediction.severity && (
                    <div className="bg-white p-4 rounded-lg border border-primary/20">
                      <p className="text-foreground/70 text-sm mb-2 font-medium">Severity Level</p>
                      <div
                        className={`inline-block px-4 py-2 rounded-lg ${
                          prediction.severity === "Severe"
                            ? "bg-red-100 border border-red-300"
                            : prediction.severity === "Moderate"
                              ? "bg-orange-100 border border-orange-300"
                              : "bg-accent/20 border border-accent/40"
                        }`}
                      >
                        <p
                          className={`font-semibold ${
                            prediction.severity === "Severe"
                              ? "text-red-700"
                              : prediction.severity === "Moderate"
                                ? "text-orange-700"
                                : "text-accent"
                          }`}
                        >
                          {prediction.severity}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="bg-white p-3 rounded-lg border border-primary/20">
                    <p className="text-foreground/70 text-xs mb-2 font-medium">Key Metrics</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Model:</span>
                        <span className="text-foreground/90 font-semibold">Vision Transformer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Sensitivity:</span>
                        <span className="text-foreground/90 font-semibold">93.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Specificity:</span>
                        <span className="text-foreground/90 font-semibold">98.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Time:</span>
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
                  Regional Analysis by Vertebra
                </CardTitle>
                <CardDescription>Fracture probability by spinal region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {prediction.regionalAnalysis.map((region, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-primary">{region.region}</p>
                          <p className="text-xs text-muted-foreground">{region.vertebra}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-primary">{(region.fractureProb * 100).toFixed(1)}%</p>
                          <p className="text-xs text-muted-foreground">
                            Confidence: {(region.confidence * 100).toFixed(0)}%
                          </p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            region.fractureProb > 0.5
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
                  <p className="font-semibold mb-1">Recommended Action:</p>
                  {prediction.recommendedAction}
                </AlertDescription>
              </Alert>

              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Clinical Notes</CardTitle>
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
                  Analyzing...
                </>
              ) : (
                "Run Prediction"
              )}
            </Button>
            <Button
              onClick={() => {
                setSelectedFile(null)
                setPreview(null)
                setPrediction(null)
              }}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5"
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
