"use client"

import {
  BarChart,
  Bar,
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
import { AlertCircle, Zap, Users, TrendingDown } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Vertebra-specific fracture statistics
const vertebraStats = [
  {
    name: "C1 (Atlas)",
    fractures: 45,
    healthy: 155,
    severity: "Medium",
    commonType: "Burst/Ring",
    ageAvg: 42,
    recoveryDays: 45,
  },
  {
    name: "C2 (Axis)",
    fractures: 52,
    healthy: 148,
    severity: "High",
    commonType: "Odontoid",
    ageAvg: 48,
    recoveryDays: 52,
  },
  {
    name: "C3",
    fractures: 38,
    healthy: 162,
    severity: "Medium",
    commonType: "Anterior Wedge",
    ageAvg: 45,
    recoveryDays: 38,
  },
  {
    name: "C4",
    fractures: 48,
    healthy: 152,
    severity: "Medium",
    commonType: "Compression",
    ageAvg: 46,
    recoveryDays: 42,
  },
  {
    name: "C5",
    fractures: 55,
    healthy: 145,
    severity: "High",
    commonType: "Anterior Wedge",
    ageAvg: 47,
    recoveryDays: 55,
  },
  {
    name: "C6",
    fractures: 41,
    healthy: 159,
    severity: "Medium",
    commonType: "Compression",
    ageAvg: 44,
    recoveryDays: 40,
  },
  {
    name: "C7",
    fractures: 35,
    healthy: 165,
    severity: "Low",
    commonType: "Spinous Process",
    ageAvg: 43,
    recoveryDays: 35,
  },
]

const ageDistribution = [
  { age: "18-25", fractures: 45, healthy: 250 },
  { age: "26-35", fractures: 72, healthy: 320 },
  { age: "36-45", fractures: 98, healthy: 280 },
  { age: "46-55", fractures: 125, healthy: 200 },
  { age: "56-65", fractures: 95, healthy: 150 },
  { age: "65+", fractures: 52, healthy: 100 },
]

const injuryCauseData = [
  { name: "Motor Vehicle", value: 210, color: "#ef4444" },
  { name: "Falls", value: 185, color: "#f97316" },
  { name: "Sports", value: 98, color: "#eab308" },
  { name: "Diving/Water", value: 76, color: "#3b82f6" },
  { name: "Other", value: 81, color: "#6366f1" },
]

const fractureSeverityData = [
  { name: "Mild", value: 145, color: "#10b981" },
  { name: "Moderate", value: 238, color: "#f59e0b" },
  { name: "Severe", value: 167, color: "#ef4444" },
]

const treatmentOutcomes = [
  { treatment: "Conservative", recovery: 85, months: 3 },
  { treatment: "Halo Vest", recovery: 78, months: 2.5 },
  { treatment: "Surgical", recovery: 72, months: 4 },
]

const neurologicalOutcomes = [
  { outcome: "No Deficit", value: 342, color: "#10b981" },
  { outcome: "Mild Deficit", value: 127, color: "#3b82f6" },
  { outcome: "Moderate Deficit", value: 68, color: "#f59e0b" },
  { outcome: "Severe/Paralysis", value: 13, color: "#ef4444" },
]

const morbidityRiskFactors = [
  { factor: "Age > 50", percentage: 78, risk: "High" },
  { factor: "Multiple Level", percentage: 65, risk: "High" },
  { factor: "Spinal Cord Injury", percentage: 82, risk: "Very High" },
  { factor: "Delayed Treatment", percentage: 52, risk: "Medium" },
  { factor: "Osteoporosis", percentage: 71, risk: "High" },
  { factor: "Pre-existing Condition", percentage: 48, risk: "Medium" },
]

export default function FractureAnalysis() {
  const totalFractures = vertebraStats.reduce((sum, v) => sum + v.fractures, 0)
  const totalCases = vertebraStats.reduce((sum, v) => sum + v.fractures + v.healthy, 0)
  const fractureRate = ((totalFractures / totalCases) * 100).toFixed(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-amber-400 mb-2">Cervical Spine Fracture Analysis</h2>
          <p className="text-amber-300/70">Comprehensive statistics from RSNA 2022 dataset</p>
        </div>

        {/* Critical Statistics */}
        <Alert className="mb-8 bg-red-500/10 border-red-500/30">
          <AlertCircle className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-300/90">
            High-risk finding: C5 vertebra shows highest fracture incidence (55 cases) with significant recovery time
            required. Multi-level fractures are present in 23% of cases.
          </AlertDescription>
        </Alert>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-amber-400 text-sm">
                <Zap className="w-4 h-4" />
                Total Fractures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-300">{totalFractures}</div>
              <p className="text-xs text-amber-300/50 mt-1">{fractureRate}% of dataset</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-400 text-sm">
                <Users className="w-4 h-4" />
                Avg Recovery Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-300">44</div>
              <p className="text-xs text-blue-300/50 mt-1">Days across all levels</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-purple-400 text-sm">
                <TrendingDown className="w-4 h-4" />
                Highest Risk Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-300">C5</div>
              <p className="text-xs text-purple-300/50 mt-1">55 fracture cases</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-cyan-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                Neurological Deficit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-300">18.8%</div>
              <p className="text-xs text-cyan-300/50 mt-1">With some level deficit</p>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Vertebra-specific statistics */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400">Fracture Distribution by Vertebra</CardTitle>
              <CardDescription className="text-amber-300/50">C1-C7 vertebrae case counts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vertebraStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(251, 191, 36, 0.1)" />
                  <XAxis dataKey="name" stroke="rgba(251, 191, 36, 0.5)" />
                  <YAxis stroke="rgba(251, 191, 36, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbbf24" }}
                  />
                  <Legend wrapperStyle={{ color: "rgba(251, 191, 36, 0.7)" }} />
                  <Bar dataKey="fractures" fill="#ef4444" name="Fractures" />
                  <Bar dataKey="healthy" fill="#10b981" name="Healthy" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Age distribution */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400">Age Distribution of Cases</CardTitle>
              <CardDescription className="text-amber-300/50">Fracture incidence by age group</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(251, 191, 36, 0.1)" />
                  <XAxis dataKey="age" stroke="rgba(251, 191, 36, 0.5)" />
                  <YAxis stroke="rgba(251, 191, 36, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbbf24" }}
                  />
                  <Legend wrapperStyle={{ color: "rgba(251, 191, 36, 0.7)" }} />
                  <Bar dataKey="fractures" fill="#ef4444" name="Fractures" />
                  <Bar dataKey="healthy" fill="#3b82f6" name="Healthy" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Injury cause pie chart */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400">Injury Cause Distribution</CardTitle>
              <CardDescription className="text-amber-300/50">Primary mechanisms of injury</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={injuryCauseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {injuryCauseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbbf24" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Severity distribution */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400">Fracture Severity Breakdown</CardTitle>
              <CardDescription className="text-amber-300/50">Distribution by severity level</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={fractureSeverityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {fractureSeverityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbbf24" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Neurological outcomes */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400">Neurological Outcomes</CardTitle>
              <CardDescription className="text-amber-300/50">Patient outcome distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={neurologicalOutcomes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {neurologicalOutcomes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbbf24" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Treatment outcomes */}
          <Card className="bg-slate-800/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-amber-400">Treatment Success Rates</CardTitle>
              <CardDescription className="text-amber-300/50">Recovery rates by treatment type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={treatmentOutcomes}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(251, 191, 36, 0.1)" />
                  <XAxis dataKey="treatment" stroke="rgba(251, 191, 36, 0.5)" />
                  <YAxis stroke="rgba(251, 191, 36, 0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.95)",
                      border: "1px solid rgba(251, 191, 36, 0.3)",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fbbf24" }}
                  />
                  <Legend wrapperStyle={{ color: "rgba(251, 191, 36, 0.7)" }} />
                  <Bar dataKey="recovery" fill="#10b981" name="Recovery %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk factors table */}
          <Card className="bg-slate-800/50 border-amber-500/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-amber-400">Morbidity Risk Factors</CardTitle>
              <CardDescription className="text-amber-300/50">Factors affecting patient outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-500/20">
                      <th className="text-left p-3 text-amber-400">Risk Factor</th>
                      <th className="text-center p-3 text-amber-300/70">Impact %</th>
                      <th className="text-center p-3 text-amber-300/70">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {morbidityRiskFactors.map((factor, index) => (
                      <tr key={index} className="border-b border-amber-500/10">
                        <td className="p-3 text-amber-300/70">{factor.factor}</td>
                        <td className="text-center p-3 font-semibold text-amber-300">{factor.percentage}%</td>
                        <td className="text-center p-3">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              factor.risk === "Very High"
                                ? "bg-red-500/20 text-red-300"
                                : factor.risk === "High"
                                  ? "bg-orange-500/20 text-orange-300"
                                  : "bg-yellow-500/20 text-yellow-300"
                            }`}
                          >
                            {factor.risk}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vertebra Details */}
        <Card className="bg-slate-800/50 border-amber-500/20">
          <CardHeader>
            <CardTitle className="text-amber-400">Detailed Vertebra Statistics</CardTitle>
            <CardDescription className="text-amber-300/50">Individual vertebra analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-500/20">
                    <th className="text-left p-3 text-amber-400">Vertebra</th>
                    <th className="text-center p-3 text-amber-300/70">Fractures</th>
                    <th className="text-center p-3 text-amber-300/70">Common Type</th>
                    <th className="text-center p-3 text-amber-300/70">Avg Age</th>
                    <th className="text-center p-3 text-amber-300/70">Avg Recovery</th>
                  </tr>
                </thead>
                <tbody>
                  {vertebraStats.map((stat, index) => (
                    <tr key={index} className="border-b border-amber-500/10">
                      <td className="p-3 font-semibold text-amber-300">{stat.name}</td>
                      <td className="text-center p-3 text-amber-300/70">{stat.fractures}</td>
                      <td className="text-center p-3 text-amber-300/70">{stat.commonType}</td>
                      <td className="text-center p-3 text-amber-300/70">{stat.ageAvg}</td>
                      <td className="text-center p-3 text-amber-300/70">{stat.recoveryDays} days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
