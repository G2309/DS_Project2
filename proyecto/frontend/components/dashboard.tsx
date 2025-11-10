"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, TrendingUp, Target } from "lucide-react"

// Sample data - Replace with your actual data
const modelAccuracyData = [
  { model: "ResNet50", accuracy: 94.2, sensitivity: 92.1, specificity: 95.8 },
  { model: "EfficientNet", accuracy: 95.7, sensitivity: 94.3, specificity: 96.8 },
  { model: "Vision Transformer", accuracy: 96.1, sensitivity: 95.2, specificity: 97.1 },
]

const fractureCasesData = [
  { name: "C1", fractures: 45, healthy: 155 },
  { name: "C2", fractures: 52, healthy: 148 },
  { name: "C3", fractures: 38, healthy: 162 },
  { name: "C4", fractures: 48, healthy: 152 },
  { name: "C5", fractures: 55, healthy: 145 },
  { name: "C6", fractures: 41, healthy: 159 },
  { name: "C7", fractures: 35, healthy: 165 },
]

const rocCurveData = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.02, tpr: 0.85 },
  { fpr: 0.05, tpr: 0.92 },
  { fpr: 0.08, tpr: 0.94 },
  { fpr: 0.12, tpr: 0.96 },
  { fpr: 0.18, tpr: 0.97 },
  { fpr: 0.25, tpr: 0.98 },
  { fpr: 1, tpr: 1 },
]

const datasetDistribution = [
  { name: "Training", value: 3500, color: "#10b981" },
  { name: "Validation", value: 800, color: "#06b6d4" },
  { name: "Test", value: 700, color: "#8b5cf6" },
]

const performanceOverTime = [
  { epoch: 1, accuracy: 0.72, loss: 0.68 },
  { epoch: 5, accuracy: 0.81, loss: 0.52 },
  { epoch: 10, accuracy: 0.88, loss: 0.35 },
  { epoch: 20, accuracy: 0.92, loss: 0.22 },
  { epoch: 30, accuracy: 0.94, loss: 0.15 },
  { epoch: 40, accuracy: 0.96, loss: 0.09 },
  { epoch: 50, accuracy: 0.961, loss: 0.08 },
]

const confusionMatrixData = [
  { actual: "Fracture", predicted: "Fracture", value: 187 },
  { actual: "Fracture", predicted: "Healthy", value: 13 },
  { actual: "Healthy", predicted: "Fracture", value: 8 },
  { actual: "Healthy", predicted: "Healthy", value: 692 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-primary mb-2">Model Performance Analytics</h2>
          <p className="text-muted-foreground">RSNA 2022 Cervical Spine Fracture Detection - Comprehensive Analysis</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <Target className="w-4 h-4" />
                Best Model Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">96.1%</div>
              <p className="text-xs text-muted-foreground mt-1">Vision Transformer Ensemble</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-accent text-sm">
                <Activity className="w-4 h-4" />
                Average Sensitivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">93.9%</div>
              <p className="text-xs text-muted-foreground mt-1">Across all models</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <TrendingUp className="w-4 h-4" />
                Test Set Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <p className="text-xs text-muted-foreground mt-1">CT scan images</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Model Accuracy Comparison */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Model Accuracy Comparison</CardTitle>
              <CardDescription>Performance across three leading architectures</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelAccuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="model" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
                  <Bar dataKey="accuracy" fill="hsl(var(--primary))" />
                  <Bar dataKey="sensitivity" fill="hsl(var(--accent))" />
                  <Bar dataKey="specificity" fill="hsl(var(--muted))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Fracture Distribution by Vertebra */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Fracture Distribution by Vertebra</CardTitle>
              <CardDescription>Cervical vertebrae C1-C7 analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fractureCasesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
                  <Bar dataKey="fractures" fill="hsl(var(--destructive))" />
                  <Bar dataKey="healthy" fill="hsl(var(--accent))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ROC Curve */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">ROC Curve Analysis</CardTitle>
              <CardDescription>Best performing model - AUC: 0.981</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={rocCurveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="fpr" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Line type="monotone" dataKey="tpr" stroke="hsl(var(--primary))" dot={false} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Dataset Distribution */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Dataset Split</CardTitle>
              <CardDescription>Training, validation, and test distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={datasetDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {datasetDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Training Performance Over Epochs */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Training Performance</CardTitle>
              <CardDescription>Accuracy and loss across 50 epochs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceOverTime}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
                  <Line type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" dot={false} strokeWidth={2} />
                  <Line type="monotone" dataKey="loss" stroke="hsl(var(--destructive))" dot={false} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Confusion Matrix */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Confusion Matrix - Test Set</CardTitle>
              <CardDescription>Vision Transformer Ensemble Model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-primary font-semibold">Actual / Predicted</th>
                      <th className="text-center p-3 text-primary font-semibold">Fracture</th>
                      <th className="text-center p-3 text-primary font-semibold">No Fracture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold text-foreground">Fracture</td>
                      <td className="text-center p-3 bg-accent/10 text-accent font-semibold rounded">187</td>
                      <td className="text-center p-3 bg-red-500/10 text-red-600 dark:text-red-400 font-semibold">13</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-foreground">No Fracture</td>
                      <td className="text-center p-3 bg-red-500/10 text-red-600 dark:text-red-400 font-semibold">8</td>
                      <td className="text-center p-3 bg-accent/10 text-accent font-semibold rounded">692</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="border border-primary/20 rounded p-4 bg-primary/5">
                  <p className="text-muted-foreground text-xs font-medium">Sensitivity (Recall)</p>
                  <p className="text-2xl font-bold text-primary">93.5%</p>
                </div>
                <div className="border border-accent/20 rounded p-4 bg-accent/5">
                  <p className="text-muted-foreground text-xs font-medium">Specificity</p>
                  <p className="text-2xl font-bold text-accent">98.9%</p>
                </div>
                <div className="border border-primary/20 rounded p-4 bg-primary/5">
                  <p className="text-muted-foreground text-xs font-medium">Precision</p>
                  <p className="text-2xl font-bold text-primary">96.8%</p>
                </div>
                <div className="border border-accent/20 rounded p-4 bg-accent/5">
                  <p className="text-muted-foreground text-xs font-medium">F1 Score</p>
                  <p className="text-2xl font-bold text-accent">0.945</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Análisis exploratorio*/}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow lg:col-span-3">
            <CardHeader>
                <CardTitle className="text-primary text-lg">Análisis exploratorio</CardTitle>
                <CardDescription>Plotly interactive visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[750px] rounded-md overflow-hidden border border-primary/10">
                  <iframe
                    src="/dashboard_lesiones_final.html" // 👈 debe estar en /public/
                    title="Confusion Matrices"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </CardContent>

          </Card>
          
        </div>
      </div>
    </div>
  )
}
