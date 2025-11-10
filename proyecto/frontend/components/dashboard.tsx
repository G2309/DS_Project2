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
        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 mb-6">

          {/* 🔹 Análisis exploratorio - fila completa */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Análisis exploratorio</CardTitle>
              <CardDescription>Visualización interactiva con Plotly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[750px] rounded-md overflow-hidden border border-primary/10">
                <iframe
                  src="/dashboard_lesiones_final.html"
                  title="Análisis exploratorio de lesiones"
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

          {/* 🔹 Gráficos de rendimiento y dataset */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Comparación de precisión de modelos */}
            <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Model Accuracy Comparison</CardTitle>
                <CardDescription>Performance across three leading architectures</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={modelAccuracyData} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="model" stroke="#374151" />
                    <YAxis stroke="#374151" />
                    <Tooltip
                      formatter={(value) => [`${value.toFixed(1)}%`, ""]}
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                      }}
                    />
                    <Legend wrapperStyle={{ color: "#111827" }} />
                    <Bar dataKey="accuracy" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="sensitivity" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="specificity" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Curva ROC */}
            <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-lg">ROC Curve Analysis</CardTitle>
                <CardDescription>Best performing model - AUC: 0.981</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={rocCurveData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="fpr" stroke="#374151" />
                    <YAxis stroke="#374151" domain={[0, 1]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                      }}
                    />
                    <Legend wrapperStyle={{ color: "#111827" }} />
                    {/* Diagonal de referencia */}
                    <Line
                      type="linear"
                      dataKey="fpr"
                      stroke="#9ca3af"
                      strokeDasharray="5 5"
                      dot={false}
                      name="Baseline (random)"
                    />
                    {/* Curva ROC principal */}
                    <Line
                      type="monotone"
                      dataKey="tpr"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 2 }}
                      name="ROC Curve"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Distribución del dataset */}
            <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Dataset Split</CardTitle>
                <CardDescription>Training, validation, and test distribution</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={datasetDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {datasetDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Entrenamiento a lo largo de épocas */}
            <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Training Performance</CardTitle>
                <CardDescription>Accuracy and loss across 50 epochs</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="epoch" stroke="#374151" />
                    <YAxis stroke="#374151" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" dot={false} />
                    <Line type="monotone" dataKey="loss" stroke="#ef4444" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* 🔹 Matriz de confusión - fila completa */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
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
        </div>

      </div>
    </div>
  )
}
