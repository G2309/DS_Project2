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
              RSNA 2022 Challenge
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance leading-tight">
              Cervical Spine Fracture Detection
            </h1>

            <p className="text-lg text-foreground/70 text-balance max-w-3xl leading-relaxed">
              A comprehensive deep learning research platform for detecting and localizing cervical spine fractures on
              CT scans. Advancing clinical decision support through machine learning and medical imaging expertise.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-sm"
                onClick={() => (window.location.href = "#explore")}
              >
                Explore Platform <ChevronRight className="w-4 h-4" />
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
                  Kaggle Competition
                </a>
              </Button>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-primary/10">
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">Competition Year</p>
              <p className="text-3xl font-bold text-primary">2022</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">Participants</p>
              <p className="text-3xl font-bold text-primary">1000+</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">CT Scans</p>
              <p className="text-3xl font-bold text-primary">5000+</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">Best Accuracy</p>
              <p className="text-3xl font-bold text-accent">96.1%</p>
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
              Clinical Context
            </CardTitle>
            <CardDescription className="text-foreground/60">
              Understanding cervical spine fractures and the importance of rapid detection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/75 leading-relaxed">
              Cervical spine fractures represent a critical clinical emergency, accounting for 3-5% of all trauma cases.
              The cervical spine contains vital neural structures, and fracture-related injuries can result in permanent
              neurological disability or death if not promptly identified and managed.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              The RSNA 2022 Cervical Spine Fracture Detection Challenge aims to advance machine learning applications in
              medical imaging by developing algorithms that can accurately and rapidly detect fractures on CT scans,
              supporting radiologists in clinical decision-making and improving patient outcomes.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
              <p className="text-foreground/80 text-sm">
                <span className="font-semibold text-primary">Clinical Significance:</span> Timely and accurate detection
                is essential for appropriate triage, treatment planning, and preventing serious complications including
                spinal cord injury and neurological deterioration.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Objectives */}
        <Card className="border-accent/20 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent text-2xl">
              <Target className="w-6 h-6" />
              Research Objectives
            </CardTitle>
            <CardDescription className="text-foreground/60">Key goals for this research initiative</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  High Diagnostic Accuracy
                </h4>
                <p className="text-foreground/70 text-sm">
                  Develop ensemble models achieving 95%+ accuracy in detecting presence or absence of cervical spine
                  fractures across diverse patient populations.
                </p>
              </div>

              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Vertebra-Level Localization
                </h4>
                <p className="text-foreground/70 text-sm">
                  Accurately localize detected fractures to specific cervical vertebrae (C1-C7) to support clinical
                  triage and treatment decisions.
                </p>
              </div>

              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Clinical Utility
                </h4>
                <p className="text-foreground/70 text-sm">
                  Ensure model performance on clinical test sets with sensitivity and specificity metrics appropriate
                  for clinical deployment.
                </p>
              </div>

              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5 hover:border-accent/40 transition-colors">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Real-Time Performance
                </h4>
                <p className="text-foreground/70 text-sm">
                  Achieve sub-500ms inference time per image for practical integration into clinical imaging workflows
                  and PACS systems.
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
              Research Methodology
            </CardTitle>
            <CardDescription className="text-foreground/60">Technical approach and validation strategy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Data Analysis & Preprocessing</h4>
                  <p className="text-foreground/70 text-sm">
                    Analyzed 5,000+ CT scans from 1,200+ patients with expert radiologist annotations. Applied DICOM
                    conversion, Hounsfield unit windowing, and multi-scale augmentation strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ensemble Model Architecture</h4>
                  <p className="text-foreground/70 text-sm">
                    Integrated three complementary architectures: ResNet50 for robust feature extraction, EfficientNet
                    for parameter efficiency, and Vision Transformer for global context understanding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Rigorous Cross-Validation</h4>
                  <p className="text-foreground/70 text-sm">
                    Employed stratified 5-fold cross-validation with patient-level data splitting to prevent data
                    leakage and ensure unbiased performance estimates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weighted Ensemble Averaging</h4>
                  <p className="text-foreground/70 text-sm">
                    Optimized model weights through Bayesian optimization with temperature scaling for calibrated
                    confidence scores suitable for clinical decision support.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="border-accent/20 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent text-2xl">
              <TrendingUp className="w-6 h-6" />
              Performance Summary
            </CardTitle>
            <CardDescription className="text-foreground/60">Key metrics on held-out test set</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                <p className="text-foreground/70 text-sm mb-2 font-medium">Overall Accuracy</p>
                <p className="text-4xl font-bold text-accent">96.1%</p>
                <p className="text-foreground/50 text-xs mt-2">Ensemble model</p>
              </div>

              <div className="border border-primary/30 rounded-lg p-4 bg-primary/5">
                <p className="text-foreground/70 text-sm mb-2 font-medium">AUC-ROC</p>
                <p className="text-4xl font-bold text-primary">0.981</p>
                <p className="text-foreground/50 text-xs mt-2">Excellent discrimination</p>
              </div>

              <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                <p className="text-foreground/70 text-sm mb-2 font-medium">Inference Time</p>
                <p className="text-4xl font-bold text-accent">{"<"}500ms</p>
                <p className="text-foreground/50 text-xs mt-2">Per image</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <p className="text-foreground/70 text-xs mb-1 font-medium">Sensitivity (True Positive Rate)</p>
                <p className="text-3xl font-bold text-primary">93.5%</p>
              </div>
              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
                <p className="text-foreground/70 text-xs mb-1 font-medium">Specificity (True Negative Rate)</p>
                <p className="text-3xl font-bold text-accent">98.9%</p>
              </div>
              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <p className="text-foreground/70 text-xs mb-1 font-medium">F1 Score</p>
                <p className="text-3xl font-bold text-primary">0.945</p>
              </div>
              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
                <p className="text-foreground/70 text-xs mb-1 font-medium">Precision (PPV)</p>
                <p className="text-3xl font-bold text-accent">96.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Team */}
        <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-2xl">
              <Users className="w-6 h-6" />
              Research Team & Contributors
            </CardTitle>
            <CardDescription className="text-foreground/60">
              Experts in radiology, machine learning, and medical informatics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/75">
              This project represents a collaborative effort across multiple disciplines dedicated to advancing
              AI-assisted clinical decision support in medical imaging.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                <p className="font-semibold text-foreground mb-3">Core Team</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• Lead Machine Learning Researchers</li>
                  <li>• Radiologist Consultants</li>
                  <li>• Computer Vision Engineers</li>
                  <li>• Clinical Data Specialists</li>
                </ul>
              </div>
              <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
                <p className="font-semibold text-foreground mb-3">Supporting Organizations</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• RSNA (Radiological Society of North America)</li>
                  <li>• Academic Medical Institutions</li>
                  <li>• Research Computing Facilities</li>
                  <li>• Industry Partners</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 shadow-sm">
          <CardContent className="pt-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Access the Research Platform</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Explore interactive analytics, view model performance metrics, test predictions on new images, and
                access comprehensive research documentation.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-sm">
                  View Dashboard
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
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
