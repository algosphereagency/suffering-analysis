"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { MessageCircle, Brain, Lightbulb, GitBranch } from "lucide-react"

const SufferingAnalysisApp = () => {
  const [query, setQuery] = useState("")
  const [analysis, setAnalysis] = useState<null | {
    type: string
    scale: string
    immediacy: string
    connections: string[]
    interventions: string[]
  }>(null)

  const analyzeQuery = () => {
    // Demo only — replace with real analysis later
    const demoAnalysis = {
      type: "Physical & Economic",
      scale: "Community",
      immediacy: "Urgent",
      connections: ["Healthcare Access", "Income Inequality", "Social Support"],
      interventions: [
        "Expand local healthcare facilities",
        "Implement job training programs",
        "Create community support networks",
      ],
    }
    setAnalysis(demoAnalysis)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Suffering Analysis Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Input Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Describe the suffering-related situation
            </label>
            <div className="flex gap-2">
              <textarea
                className="w-full p-2 border rounded-md h-24"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Example: How can we address food insecurity in urban areas?"
              />
            </div>
            <div>
              <button
                onClick={analyzeQuery}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Analyze
              </button>
            </div>
          </div>

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Classification */}
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Classification</h3>
                  </div>
                  <p>Type: {analysis.type}</p>
                  <p>Scale: {analysis.scale}</p>
                  <p>Immediacy: {analysis.immediacy}</p>
                </div>

                {/* Connections */}
                <div className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold">Connected Factors</h3>
                  </div>
                  <ul className="list-disc list-inside">
                    {analysis.connections.map((connection, index) => (
                      <li key={index}>{connection}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interventions */}
              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Suggested Interventions</h3>
                </div>
                <ul className="list-disc list-inside">
                  {analysis.interventions.map((intervention, index) => (
                    <li key={index} className="mb-1">
                      {intervention}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default SufferingAnalysisApp
