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
  { model: "CNN", accuracy: 53.7, f1_score: 52.8, recall: 69},
  { model: "Mask-R CNN", accuracy: 41.34, f1_score: 58.5, recall: 41.34 },
  { model: "Vision Transformer", accuracy: 98.9, f1_score: 99.8, recall: 98.6},
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
          <h2 className="text-4xl font-bold text-primary mb-2">Metricas del mejor modelo</h2>
          <p className="text-muted-foreground">RSNA 2022 Cervical Spine Fracture Detection - Comprehensive Analysis</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <Target className="w-4 h-4" />
                 Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">98.9%</div>
              <p className="text-xs text-muted-foreground mt-1">Vision Transformer Ensemble</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-accent text-sm">
                <Activity className="w-4 h-4" />
                Sensitivity              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">98.8%</div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <TrendingUp className="w-4 h-4" />
                Tamaño de la muestra
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">2,196+</div>
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
                    <Bar dataKey="f1_score" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="recall" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
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

            
          </div>
          {/* 🔹 Matrices de confusión por modelo */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Matrices de confusión por modelo</CardTitle>
              <CardDescription>Comparación visual del desempeño entre CNN y Mask R-CNN</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* 🔸 CNN */}
                <div className="border border-primary/10 rounded-lg bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <p className="text-center text-sm font-semibold bg-primary/5 text-primary py-2">
                    Matriz de Confusión – CNN
                  </p>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="p-2"></th>
                        <th className="text-center text-primary p-2">Pred: No Fx</th>
                        <th className="text-center text-primary p-2">Pred: Fx</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 font-semibold text-foreground">Real: No Fx</td>
                        <td className="text-center p-2 bg-accent/10 font-semibold">81</td>
                        <td className="text-center p-2 bg-red-500/10 text-red-600 font-semibold">126</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold text-foreground">Real: Fx</td>
                        <td className="text-center p-2 bg-red-500/10 text-red-600 font-semibold">61</td>
                        <td className="text-center p-2 bg-accent/10 font-semibold">136</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 🔸 Mask R-CNN */}
                <div className="border border-primary/10 rounded-lg bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <p className="text-center text-sm font-semibold bg-primary/5 text-primary py-2">
                    Matriz de Confusión – Mask R-CNN
                  </p>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="p-2"></th>
                        <th className="text-center text-primary p-2">Pred: Background</th>
                        <th className="text-center text-primary p-2">Pred: Fractured Vertebra</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 font-semibold text-foreground">True: Background</td>
                        <td className="text-center p-2 bg-accent/10 font-semibold">759</td>
                        <td className="text-center p-2 bg-red-500/10 text-red-600 font-semibold">535</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </CardContent>
          </Card>


          {/* 🔹 Matrices de confusión por nivel cervical */}
          <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary text-lg">Matrices de confusión del ViT (C1–C7)</CardTitle>
              <CardDescription>Rendimiento a detalle de cada vértebra</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { level: "C1", TN: 1644, FP: 10, FN: 0, TP: 512 },
                  { level: "C2", TN: 1332, FP: 2, FN: 25, TP: 807 },
                  { level: "C3", TN: 1623, FP: 1, FN: 20, TP: 522 },
                  { level: "C4", TN: 1412, FP: 0, FN: 26, TP: 728 },
                  { level: "C5", TN: 1245, FP: 15, FN: 35, TP: 871 },
                  { level: "C6", TN: 1148, FP: 12, FN: 3, TP: 1003 },
                  { level: "C7", TN: 1148, FP: 6, FN: 15, TP: 997 },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="border border-primary/10 rounded-lg bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <p className="text-center text-sm font-semibold bg-primary/5 text-primary py-2">
                      Confusion Matrix – {m.level}
                    </p>
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 text-left"></th>
                          <th className="p-2 text-center text-primary">Pred: Neg</th>
                          <th className="p-2 text-center text-primary">Pred: Pos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 font-semibold text-foreground">Actual: Neg</td>
                          <td className="p-2 text-center bg-accent/10 font-semibold">{m.TN}</td>
                          <td className="p-2 text-center bg-red-500/10 text-red-600 font-semibold">{m.FP}</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold text-foreground">Actual: Pos</td>
                          <td className="p-2 text-center bg-red-500/10 text-red-600 font-semibold">{m.FN}</td>
                          <td className="p-2 text-center bg-accent/10 font-semibold">{m.TP}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 🔹 Métricas por vértebra y curva de entrenamiento */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Tabla de métricas por vértebra */}
  <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
    <CardHeader>
      <CardTitle className="text-primary text-lg">Rendimiento por vértebra en el Vision Transformer</CardTitle>
      <CardDescription>Precision, Recall, F1-score y Accuracy</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-primary/10">
            <tr>
              <th className="p-3 text-left font-semibold text-primary">Vértebra</th>
              <th className="p-3 text-center font-semibold text-primary">Precision (%)</th>
              <th className="p-3 text-center font-semibold text-primary">Recall (%)</th>
              <th className="p-3 text-center font-semibold text-primary">F1-score (%)</th>
              <th className="p-3 text-center font-semibold text-primary">Accuracy (%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { v: "C1", p: 99.55, r: 99.54, f: 99.54, a: 99.54 },
              { v: "C2", p: 98.77, r: 98.75, f: 98.75, a: 98.75 },
              { v: "C3", p: 99.04, r: 99.03, f: 99.02, a: 99.03 },
              { v: "C4", p: 98.82, r: 98.80, f: 98.79, a: 98.80 },
              { v: "C5", p: 97.70, r: 97.69, f: 97.69, a: 97.69 },
              { v: "C6", p: 99.31, r: 99.31, f: 99.31, a: 99.31 },
              { v: "C7", p: 99.03, r: 99.03, f: 99.03, a: 99.03 },
            ].map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-primary/5" : ""}
              >
                <td className="p-2 font-semibold">{row.v}</td>
                <td className="text-center p-2">{row.p.toFixed(2)}</td>
                <td className="text-center p-2">{row.r.toFixed(2)}</td>
                <td className="text-center p-2">{row.f.toFixed(2)}</td>
                <td className="text-center p-2">{row.a.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>

            {/* Curva de entrenamiento (Train vs Validation Loss) */}
            <Card className="border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Curva de Entrenamiento - DeiT</CardTitle>
                <CardDescription>Train vs Validation Loss</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { epoch: 1, train: 0.44, val: 0.22 },
                      { epoch: 2, train: 0.29, val: 0.15 },
                      { epoch: 3, train: 0.20, val: 0.10 },
                      { epoch: 4, train: 0.14, val: 0.07 },
                      { epoch: 5, train: 0.12, val: 0.06 },
                      { epoch: 6, train: 0.10, val: 0.05 },
                      { epoch: 7, train: 0.09, val: 0.04 },
                      { epoch: 8, train: 0.08, val: 0.04 },
                      { epoch: 9, train: 0.07, val: 0.03 },
                      { epoch: 10, train: 0.07, val: 0.035 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="epoch" stroke="#374151" label={{ value: "Época", position: "insideBottom", offset: -5 }} />
                    <YAxis stroke="#374151" label={{ value: "Pérdida (Loss)", angle: -90, position: "insideLeft" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="train"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={{ r: 3 }}
                      name="Train Loss"
                    />
                    <Line
                      type="monotone"
                      dataKey="val"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 3 }}
                      name="Validation Loss"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>


          

        </div>

      </div>
    </div>
  )
}
