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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-emerald-400 mb-2">Model Analytics Dashboard</h2>
          <p className="text-emerald-300/70">RSNA 2022 Cervical Spine Fracture Detection</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-emerald-400 text-sm">
                <Target className="w-4 h-4" />
                Best Model Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-300">96.1%</div>
              <p className="text-xs text-emerald-300/50 mt-1">Vision Transformer</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-cyan-400 text-sm">
                <Activity className="w-4 h-4" />
                Average Sensitivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-300">93.9%</div>
              <p className="text-xs text-cyan-300/50 mt-1">Across all models</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-purple-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                Total Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-300">5,000+</div>
              <p className="text-xs text-purple-300/50 mt-1">In dataset</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Model Accuracy Comparison */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-emerald-400">Model Accuracy Comparison</CardTitle>
              <CardDescription className="text-emerald-300/50">Three leading models evaluated</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelAccuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="model" stroke="rgba(16, 185, 129, 0.5)" />
                  <YAxis stroke="rgba(16, 185, 129, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#10b981" }}
                  />
                  <Legend wrapperStyle={{ color: "rgba(16, 185, 129, 0.7)" }} />
                  <Bar dataKey="accuracy" fill="#10b981" />
                  <Bar dataKey="sensitivity" fill="#06b6d4" />
                  <Bar dataKey="specificity" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Fracture Distribution by Vertebra */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-emerald-400">Fracture Distribution by Vertebra</CardTitle>
              <CardDescription className="text-emerald-300/50">C1-C7 vertebrae</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fractureCasesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="name" stroke="rgba(16, 185, 129, 0.5)" />
                  <YAxis stroke="rgba(16, 185, 129, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#10b981" }}
                  />
                  <Legend wrapperStyle={{ color: "rgba(16, 185, 129, 0.7)" }} />
                  <Bar dataKey="fractures" fill="#ef4444" />
                  <Bar dataKey="healthy" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ROC Curve */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-emerald-400">ROC Curve (Best Model)</CardTitle>
              <CardDescription className="text-emerald-300/50">AUC: 0.981</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={rocCurveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis
                    dataKey="fpr"
                    stroke="rgba(16, 185, 129, 0.5)"
                    label={{
                      value: "False Positive Rate",
                      position: "insideBottomRight",
                      offset: -5,
                      fill: "rgba(16, 185, 129, 0.7)",
                    }}
                  />
                  <YAxis
                    stroke="rgba(16, 185, 129, 0.5)"
                    label={{
                      value: "True Positive Rate",
                      angle: -90,
                      position: "insideLeft",
                      fill: "rgba(16, 185, 129, 0.7)",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#10b981" }}
                  />
                  <Line type="monotone" dataKey="tpr" stroke="#10b981" dot={false} strokeWidth={2} />
                  <Line
                    type="linear"
                    dataKey="fpr"
                    stroke="rgba(16, 185, 129, 0.3)"
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Dataset Distribution */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-emerald-400">Dataset Split</CardTitle>
              <CardDescription className="text-emerald-300/50">5,000 total images</CardDescription>
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
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#10b981" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Training Performance Over Epochs */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-emerald-400">Training Performance</CardTitle>
              <CardDescription className="text-emerald-300/50">Accuracy and Loss over 50 epochs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceOverTime}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="epoch" stroke="rgba(16, 185, 129, 0.5)" />
                  <YAxis stroke="rgba(16, 185, 129, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#10b981" }}
                  />
                  <Legend wrapperStyle={{ color: "rgba(16, 185, 129, 0.7)" }} />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="#10b981"
                    dot={false}
                    strokeWidth={2}
                    yAxisId="left"
                  />
                  <Line type="monotone" dataKey="loss" stroke="#ef4444" dot={false} strokeWidth={2} yAxisId="right" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Confusion Matrix Heatmap */}
          <Card className="bg-slate-800/50 border-emerald-500/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-emerald-400">Confusion Matrix (Test Set)</CardTitle>
              <CardDescription className="text-emerald-300/50">Vision Transformer Model Performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-emerald-500/20">
                      <th className="text-left p-3 text-emerald-400">Actual / Predicted</th>
                      <th className="text-center p-3 text-emerald-300/70">Fracture</th>
                      <th className="text-center p-3 text-emerald-300/70">Healthy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-emerald-500/10">
                      <td className="p-3 text-emerald-300/70">Fracture</td>
                      <td className="text-center p-3 bg-emerald-500/10 text-emerald-300 font-semibold">187</td>
                      <td className="text-center p-3 bg-red-500/10 text-red-300">13</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-emerald-300/70">Healthy</td>
                      <td className="text-center p-3 bg-red-500/10 text-red-300">8</td>
                      <td className="text-center p-3 bg-emerald-500/10 text-emerald-300 font-semibold">692</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/20">
                  <p className="text-emerald-300/70">Sensitivity (Recall)</p>
                  <p className="text-2xl font-bold text-emerald-400">93.5%</p>
                </div>
                <div className="bg-cyan-500/10 p-3 rounded border border-cyan-500/20">
                  <p className="text-cyan-300/70">Specificity</p>
                  <p className="text-2xl font-bold text-cyan-400">98.9%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
