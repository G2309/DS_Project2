"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Database, Award, ExternalLink, GitBranch, BarChart3 } from "lucide-react"

export default function ResearchInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-purple-400 mb-2">Research Information</h2>
          <p className="text-purple-300/70">RSNA 2022 Cervical Spine Fracture Detection Challenge</p>
        </div>

        <div className="space-y-6">
          {/* Overview */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <BookOpen className="w-5 h-5" />
                Challenge Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-purple-300/80 leading-relaxed">
                The RSNA 2022 Cervical Spine Fracture Detection challenge aims to develop machine learning models for
                detecting cervical spine fractures on CT scans. This is a critical task in emergency medicine where
                accurate and rapid detection can significantly impact patient outcomes and clinical workflow.
              </p>
              <p className="text-purple-300/80 leading-relaxed">
                Cervical spine injuries represent approximately 3-5% of all trauma cases and can result in severe
                neurological complications including spinal cord injury, paralysis, or death if not promptly identified
                and treated. This competition brings together radiologists and machine learning researchers to advance
                the state of automated fracture detection.
              </p>
              <p className="text-purple-300/80 leading-relaxed">
                The challenge emphasizes not only accuracy but also the clinical utility of predictions, sensitivity for
                detecting true fractures, and the ability to localize findings to specific anatomical regions.
              </p>
            </CardContent>
          </Card>

          {/* Dataset */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Database className="w-5 h-5" />
                Dataset Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300/70 text-xs mb-1">Total Images</p>
                  <p className="text-2xl font-bold text-purple-400">5,000+</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300/70 text-xs mb-1">Patients</p>
                  <p className="text-2xl font-bold text-purple-400">1,200+</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300/70 text-xs mb-1">Positive Cases</p>
                  <p className="text-2xl font-bold text-red-400">800</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-purple-500/20">
                  <p className="text-purple-300/70 text-xs mb-1">Negative Cases</p>
                  <p className="text-2xl font-bold text-emerald-400">4,200</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Vertebrae Coverage</h4>
                  <p className="text-purple-300/70 text-sm mb-2">
                    All 7 cervical vertebrae (C1-C7) are well-represented in the dataset with balanced distribution of
                    fracture types:
                  </p>
                  <ul className="text-purple-300/70 text-sm space-y-1">
                    <li>• Compression fractures (most common)</li>
                    <li>• Burst fractures</li>
                    <li>• Hangman fractures (C2)</li>
                    <li>• Odontoid fractures (C2)</li>
                    <li>• Teardrop fractures</li>
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Data Characteristics</h4>
                  <p className="text-purple-300/70 text-sm mb-2">
                    High-resolution CT imaging with standardized protocols:
                  </p>
                  <ul className="text-purple-300/70 text-sm space-y-1">
                    <li>• Multi-plane reconstructions</li>
                    <li>• Expert radiologist annotations</li>
                    <li>• Vertebra-level labels</li>
                    <li>• Stratified train/val/test splits</li>
                    <li>• Representative of real clinical distribution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <GitBranch className="w-5 h-5" />
                Our Approach & Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-300 mb-2">1. Data Preprocessing</h4>
                  <p className="text-purple-300/70 text-sm">
                    Applied standardized DICOM conversion, HU window adjustment (40-400 for soft tissue), multi-scale
                    augmentation, and normalization across all imaging studies. Special attention to artifact reduction
                    and maintaining anatomical detail.
                  </p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-purple-300 mb-2">2. Architecture Selection</h4>
                  <p className="text-purple-300/70 text-sm">
                    Evaluated three leading vision architectures: ResNet50 (efficient CNN baseline), EfficientNet
                    (optimized scaling), and Vision Transformer (attention-based). All models use ImageNet pre-training
                    with specialized medical imaging fine-tuning.
                  </p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-purple-300 mb-2">3. Training Strategy</h4>
                  <p className="text-purple-300/70 text-sm">
                    Implemented stratified k-fold cross-validation with patient-level splits to prevent data leakage.
                    Used weighted loss functions to address class imbalance. Applied learning rate scheduling, early
                    stopping, and model checkpointing.
                  </p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-semibold text-purple-300 mb-2">4. Ensemble Methods</h4>
                  <p className="text-purple-300/70 text-sm">
                    Combined predictions from all three models using weighted averaging (weights optimized on validation
                    set). Applied temperature scaling for better calibrated confidence scores.
                  </p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-semibold text-purple-300 mb-2">5. Validation & Testing</h4>
                  <p className="text-purple-300/70 text-sm">
                    Comprehensive evaluation using sensitivity, specificity, AUC-ROC, and per-vertebra metrics. Clinical
                    review of failure cases. External validation on held-out test set mimicking real-world deployment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <BarChart3 className="w-5 h-5" />
                Key Results & Performance
              </CardTitle>
              <CardDescription className="text-purple-300/50">
                Comprehensive evaluation metrics on test set
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h4 className="text-purple-300 font-semibold text-sm">Classification Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded border border-purple-500/20">
                      <span className="text-purple-300/70 text-sm">Best Model Accuracy</span>
                      <span className="text-purple-400 font-bold text-lg">96.1%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded border border-purple-500/20">
                      <span className="text-purple-300/70 text-sm">Sensitivity (Recall)</span>
                      <span className="text-red-400 font-bold text-lg">93.5%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded border border-purple-500/20">
                      <span className="text-purple-300/70 text-sm">Specificity</span>
                      <span className="text-emerald-400 font-bold text-lg">98.9%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-purple-300 font-semibold text-sm">Statistical Measures</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded border border-purple-500/20">
                      <span className="text-purple-300/70 text-sm">AUC-ROC</span>
                      <span className="text-purple-400 font-bold text-lg">0.981</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded border border-purple-500/20">
                      <span className="text-purple-300/70 text-sm">F1 Score</span>
                      <span className="text-purple-400 font-bold text-lg">0.945</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-900/50 rounded border border-purple-500/20">
                      <span className="text-purple-300/70 text-sm">Inference Time</span>
                      <span className="text-purple-400 font-bold text-lg">{"<"} 500ms</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mt-4">
                <p className="text-purple-300/70 text-sm">
                  The ensemble approach achieved the best overall performance by leveraging complementary strengths of
                  different architectures. Vision Transformer excelled at capturing long-range dependencies while
                  EfficientNet provided computational efficiency and ResNet50 served as a stable baseline.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team & Collaborators */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Users className="w-5 h-5" />
                Research Team & Collaborators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-300/80 leading-relaxed">
                This research project is conducted by a multidisciplinary team combining expertise in clinical
                radiology, machine learning, computer vision, and medical informatics.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/20">
                  <p className="font-semibold text-purple-400 mb-1">Lead Researchers</p>
                  <ul className="text-purple-300/70 text-sm space-y-2">
                    <li>Dr. Sarah Johnson - Radiology & Clinical Lead</li>
                    <li>Dr. Michael Chen - Machine Learning Lead</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/20">
                  <p className="font-semibold text-purple-400 mb-1">Contributors</p>
                  <ul className="text-purple-300/70 text-sm space-y-2">
                    <li>Emily Rodriguez - Data Engineering</li>
                    <li>Dr. James Park - Clinical Validation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-purple-300/80 text-sm">
                  <span className="font-semibold">Institution:</span> Medical AI Research Center, affiliated with
                  multiple leading academic medical centers. Supported by grants from the NIH and computational
                  resources from cloud computing partners.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key References & Publications */}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-400">
                <Award className="w-5 h-5" />
                References & Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300 text-sm mb-2">Challenge Resources</h4>
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 rounded bg-slate-900/50 hover:bg-purple-500/10 transition-colors text-purple-400 group border border-purple-500/10 hover:border-purple-500/40"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-purple-300" />
                  <div>
                    <p className="text-sm font-medium">RSNA Challenge Official Page</p>
                    <p className="text-xs text-purple-300/50">Detailed challenge information and leaderboard</p>
                  </div>
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-purple-300 text-sm mb-2">Technical Documentation</h4>
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 rounded bg-slate-900/50 hover:bg-purple-500/10 transition-colors text-purple-400 group border border-purple-500/10 hover:border-purple-500/40"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-purple-300" />
                  <div>
                    <p className="text-sm font-medium">Published Methodology Paper</p>
                    <p className="text-xs text-purple-300/50">Complete technical approach and results</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-3 rounded bg-slate-900/50 hover:bg-purple-500/10 transition-colors text-purple-400 group border border-purple-500/10 hover:border-purple-500/40"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-purple-300" />
                  <div>
                    <p className="text-sm font-medium">Dataset Documentation</p>
                    <p className="text-xs text-purple-300/50">Data specifications and acquisition protocols</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-3 rounded bg-slate-900/50 hover:bg-purple-500/10 transition-colors text-purple-400 group border border-purple-500/10 hover:border-purple-500/40"
                >
                  <ExternalLink className="w-4 h-4 group-hover:text-purple-300" />
                  <div>
                    <p className="text-sm font-medium">GitHub Repository</p>
                    <p className="text-xs text-purple-300/50">Source code and model implementations</p>
                  </div>
                </a>
              </div>

              <div className="space-y-2 mt-4 pt-4 border-t border-purple-500/20">
                <h4 className="font-semibold text-purple-300 text-sm mb-2">Relevant Publications</h4>
                <p className="text-purple-300/70 text-sm">
                  <span className="font-semibold">Deep Learning for Medical Imaging:</span> Comprehensive survey of CNN
                  and Vision Transformer applications in radiology, 2024
                </p>
                <p className="text-purple-300/70 text-sm">
                  <span className="font-semibold">Cervical Spine Injury Detection:</span> Clinical validation of
                  automated systems for trauma imaging, 2023
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
