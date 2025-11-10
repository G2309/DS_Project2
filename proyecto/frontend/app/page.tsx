"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ProjectOverview from "@/components/project-overview"
import Dashboard from "@/components/dashboard"
import FractureAnalysis from "@/components/fracture-analysis"
import PredictionInterface from "@/components/prediction-interface"


import ResearchInfo from "@/components/research-info"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-12">
        {currentPage === "home" && <ProjectOverview />}
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "fractures" && <FractureAnalysis />}
        {currentPage === "predict" && <PredictionInterface />}
       
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">About</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                An AI-powered research platform for detecting cervical spine fractures using deep learning models and
                medical imaging analysis.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Features</h3>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Project Overview & Challenge Info</li>
                <li>• Model Analytics Dashboard</li>
                <li>• Fracture Statistics & Analysis</li>
                <li>• AI Prediction Interface</li>
                <li>• Research Documentation</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Resources</h3>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>
                  •{" "}
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    RSNA Challenge
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Dataset Docs
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    GitHub Repo
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">© 2025 Spine AI Research. Medical AI Research Center.</p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
