"use client"

import { Brain, BarChart3, FileText, Upload, AlertTriangle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home, color: "blue" },
    { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "emerald" },
    { id: "fractures", label: "Fractures", icon: AlertTriangle, color: "amber" },
    { id: "predict", label: "Predictions", icon: Upload, color: "cyan" },
    { id: "research", label: "Research", icon: FileText, color: "purple" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg">
              <Brain className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-white">Spine AI</h1>
              <p className="text-xs text-slate-400">RSNA 2022 Research</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex gap-1 md:gap-2 flex-wrap justify-end">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id

              return (
                <Button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`gap-1.5 px-2 md:px-4 transition-all ${
                    isActive
                      ? `bg-${item.color}-500/20 text-${item.color}-300 hover:bg-${item.color}-500/30 border border-${item.color}-500/40`
                      : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm">{item.label}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
