"use client"

import { Brain, BarChart3, FileText, Upload, AlertTriangle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home, color: "text-primary" },
    { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-primary" },
    { id: "fractures", label: "Fractures", icon: AlertTriangle, color: "text-accent" },
    { id: "predict", label: "Predictions", icon: Upload, color: "text-primary" },
    { id: "research", label: "Research", icon: FileText, color: "text-accent" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-primary">Spine Fracture Detection</h1>
              <p className="text-xs text-muted-foreground">RSNA 2022 Research</p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3 flex-wrap justify-end">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id

              return (
                <Button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`gap-1.5 px-3 md:px-4 transition-all font-medium ${
                    isActive
                      ? "bg-primary text-white shadow-sm hover:shadow-md"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
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
