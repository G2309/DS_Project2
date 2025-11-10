"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Stethoscope,
  TrendingUp,
  Brain,
  Target,
  Users,
  Activity,
  Award,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

export default function ProjectOverview() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="border-b bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm font-semibold">
              <Activity className="w-4 h-4" />
              Desafio RSNA 
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance leading-tight">
              Detencion de Fracturas en Columna Cervical
            </h1>

            <p className="text-lg text-foreground/70 text-balance max-w-3xl leading-relaxed">
              El objetivo principal de este proyecto es desarrollar un sistema capaz de identificar
fracturas cervicales a partir de imágenes médicas, con el fin de determinar de manera
automática si existe o no una fractura. Este enfoque busca reducir la dependencia
exclusiva del diagnóstico médico manual, proporcionando una herramienta de apoyo
que pueda asistir a los especialistas en la toma de decisiones clínicas y agilizar el
proceso de diagnóstico
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-sm"
                onClick={() => (window.location.href = "#explore")}
              >
                Ver la plataforma <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
                asChild
              >
                <a
                  href="https://www.kaggle.com/competitions/rsna-2022-cervical-spine-fracture-detection/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Competicion de Kaggle
                </a>
              </Button>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-primary/10">
            
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">Participants</p>
              <p className="text-3xl font-bold text-primary">1000+</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">CT Scans</p>
              <p className="text-3xl font-bold text-primary">5000+</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">Mejor Accuracy</p>
              <p className="text-3xl font-bold text-accent">98.9%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12" id="explore">
        {/* Clinical Overview */}
        <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-2xl">
              <Stethoscope className="w-6 h-6" />

              Situación problemática

            </CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/75 leading-relaxed">
            Las fracturas de las vértebras cervicales son lesiones graves que pueden causar discapacidad permanente o incluso la muerte si no se diagnostican a tiempo.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Los hospitales reciben grandes volúmenes de radiografías de pacientes con trauma cervical, pero el diagnóstico depende del criterio humano del radiólogo, lo que genera:
              <ul>
                <li>Retrasos en la atención</li>
                <li>Subjetividad en la interpretación.</li>
                <li>Riesgo de pasar por alto fracturas sutiles.</li>
              </ul>
              
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="text-foreground/80 text-sm">
                <span className="font-semibold text-primary">Problema científico:</span> ¿Es posible entrenar un modelo de visión artificial que detecte y clasifique fracturas en radiografías cervicales de forma confiable, reduciendo el tiempo de diagnóstico y los errores humanos?

              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Objectives */}
        <Card className="border-accent/20 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent text-2xl">
              <Target className="w-6 h-6" />
              Objetivos
            </CardTitle>
            <CardDescription className="text-foreground/60">Desarrollar un modelo de aprendizaje automático que identifique fracturas en radiografías de vértebras cervicales, para apoyar diagnósticos más rápidos y precisos.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                   Dataset RSNA
                </h4>
                <p className="text-foreground/70 text-sm">
                  Explorar y describir las características del dataset de radiografías cervicales, identificando patrones, limitaciones y posibles sesgos.
                </p>
              </div>

              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Preprocesamiento
                </h4>
                <p className="text-foreground/70 text-sm">
                  Aplicar técnicas de preprocesamiento (reducción de ruido, estandarización de tamaños, balanceo de clases) para optimizar el modelo.

                </p>
              </div>

              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Redes Neuronales
                </h4>
                <p className="text-foreground/70 text-sm">
                  Comparar diferentes arquitecturas de redes neuronales y seleccionar la más prometedora mediante métricas de desempeño relevantes..
                </p>
              </div>

           
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-2xl">
              <Brain className="w-6 h-6" />
               Algoritmos Utilizados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Vision Transformer (ViT)</h4>
                  <p className="text-foreground/70 text-sm">
                    Un Vision Transformer (ViT) es una arquitectura de deep learning que adapta el
Transformer diseñado originalmente para texto al campo de visión de imágenes. En
lugar de convoluciones, un ViT divide la imagen en parches, aplana cada parche y lo
proyecta linealmente a un espacio de embeddings
                  </p>
                </div>
              </div>

          
         

            </div>
          </CardContent>
        </Card>


     
      </div>

      <footer className="bg-primary/5 border-t border-primary/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-primary mb-3">About</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Predictions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Credits
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8">
            <p className="text-center text-sm text-foreground/60">
              © 2025 RSNA Cervical Spine Fracture Detection Research. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
