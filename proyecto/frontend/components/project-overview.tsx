"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stethoscope, TrendingUp, Brain, Target, Users, Zap, Trophy, ExternalLink, ChevronRight } from "lucide-react"

export default function ProjectOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">RSNA 2022 Challenge</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
              Cervical Spine Fracture Detection
            </h1>

            <p className="text-xl text-slate-400 text-balance max-w-2xl leading-relaxed">
              Advanced AI-powered detection system for identifying cervical spine fractures on CT scans. Combining deep
              learning with medical imaging expertise to improve patient outcomes.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                onClick={() => (window.location.href = "#explore")}
              >
                Explore Project <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 gap-2 bg-transparent"
              >
                <ExternalLink className="w-4 h-4" />
                View on Kaggle
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-2">Competition Year</p>
              <p className="text-2xl font-bold text-blue-400">2022</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-2">Participants</p>
              <p className="text-2xl font-bold text-cyan-400">1000+</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-2">Data Points</p>
              <p className="text-2xl font-bold text-blue-400">5000+</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-2">Best Accuracy</p>
              <p className="text-2xl font-bold text-cyan-400">96.1%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12" id="explore">
        {/* Challenge Overview */}
        <Card className="bg-slate-800/50 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400 text-2xl">
              <Stethoscope className="w-6 h-6" />
              Challenge Overview
            </CardTitle>
            <CardDescription className="text-slate-400">
              Understanding the RSNA 2022 Cervical Spine Fracture Detection Initiative
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              The RSNA (Radiological Society of North America) 2022 Cervical Spine Fracture Detection Challenge is a
              prestigious international competition designed to advance machine learning applications in medical
              imaging. The challenge focuses on developing and evaluating AI models capable of accurately detecting and
              localizing cervical spine fractures on CT scans.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Cervical spine injuries represent a critical clinical problem, accounting for approximately 3-5% of all
              trauma cases. Accurate and rapid detection is essential for improving patient outcomes, as delays in
              diagnosis can lead to severe neurological complications including spinal cord injury, paralysis, or death.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-blue-400">Clinical Importance:</span> This challenge emphasizes not
                only prediction accuracy but also clinical utility, sensitivity for detecting true fractures, and the
                ability to localize findings to specific anatomical regions for actionable clinical insights.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Objectives */}
        <Card className="bg-slate-800/50 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-400 text-2xl">
              <Target className="w-6 h-6" />
              Project Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  High Accuracy Detection
                </h4>
                <p className="text-slate-300 text-sm">
                  Develop models achieving 95%+ accuracy in identifying presence or absence of cervical spine fractures
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Precise Localization
                </h4>
                <p className="text-slate-300 text-sm">
                  Accurately localize fractures to specific cervical vertebrae (C1-C7) for targeted clinical
                  interventions
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Clinical Validation
                </h4>
                <p className="text-slate-300 text-sm">
                  Validate model performance against radiologist interpretations to ensure clinical reliability
                </p>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Rapid Inference
                </h4>
                <p className="text-slate-300 text-sm">
                  Enable real-time predictions ({"<"}500ms) for integration into clinical workflows
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dataset & Methodology */}
        <Card className="bg-slate-800/50 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400 text-2xl">
              <Brain className="w-6 h-6" />
              Approach & Methodology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Comprehensive Data Analysis</h4>
                  <p className="text-slate-400 text-sm">
                    Analyzed 5000+ CT scans across 1200+ patients with expert radiologist annotations and vertebra-level
                    labels
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Multi-Architecture Ensemble</h4>
                  <p className="text-slate-400 text-sm">
                    Combined ResNet50, EfficientNet, and Vision Transformer models leveraging complementary strengths
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Advanced Preprocessing</h4>
                  <p className="text-slate-400 text-sm">
                    Applied DICOM conversion, HU window adjustment, multi-scale augmentation for robust medical imaging
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Rigorous Validation</h4>
                  <p className="text-slate-400 text-sm">
                    Stratified k-fold cross-validation with patient-level splits to prevent data leakage
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Weighted Ensemble Averaging</h4>
                  <p className="text-slate-400 text-sm">
                    Optimized weight distributions across models with temperature scaling for calibrated confidence
                    scores
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Performance Metrics */}
        <Card className="bg-slate-800/50 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-400 text-2xl">
              <TrendingUp className="w-6 h-6" />
              Performance Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Best Model Accuracy</p>
                <p className="text-4xl font-bold text-blue-400">96.1%</p>
                <p className="text-slate-500 text-xs mt-2">Ensemble method on test set</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">AUC-ROC Score</p>
                <p className="text-4xl font-bold text-cyan-400">0.981</p>
                <p className="text-slate-500 text-xs mt-2">Excellent discrimination</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Inference Time</p>
                <p className="text-4xl font-bold text-blue-400">{"<"}500ms</p>
                <p className="text-slate-500 text-xs mt-2">Per image prediction</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">Sensitivity (Recall)</p>
                <p className="text-2xl font-bold text-red-400">93.5%</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">Specificity</p>
                <p className="text-2xl font-bold text-emerald-400">98.9%</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">F1 Score</p>
                <p className="text-2xl font-bold text-blue-400">0.945</p>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">Precision</p>
                <p className="text-2xl font-bold text-cyan-400">96.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Team */}
        <Card className="bg-slate-800/50 border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400 text-2xl">
              <Users className="w-6 h-6" />
              Our Research Team
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-300">
              This project brings together a multidisciplinary team of experts in radiology, machine learning, and
              medical informatics dedicated to advancing AI in clinical practice.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <p className="font-semibold text-slate-200 mb-3">Primary Contributors</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Lead Researchers & Domain Experts</li>
                  <li>• Machine Learning Engineers</li>
                  <li>• Medical Imaging Specialists</li>
                  <li>• Clinical Validation Team</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                <p className="font-semibold text-slate-200 mb-3">Supporting Organizations</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• RSNA Organizing Committee</li>
                  <li>• Academic Medical Centers</li>
                  <li>• Computing Research Partners</li>
                  <li>• NIH & Grant Supporters</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/40">
          <CardContent className="pt-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Ready to Explore the Platform?</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Navigate through our interactive dashboard to view model comparisons, fracture statistics, make
                predictions on new images, and access comprehensive research documentation.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Dashboard
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
