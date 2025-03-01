"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SparklesCore } from "@/components/sparkles"
import { Bot, CheckCircle, Upload, AlertCircle, Info } from "lucide-react"
import Link from "next/link"

export default function GrammarCheckPage() {
  const [text, setText] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<null | {
    corrected: string
    errors: Array<{
      type: string
      original: string
      correction: string
      explanation: string
    }>
  }>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleCheck = () => {
    setIsChecking(true)

    // Simulate API call to grammar checking service
    setTimeout(() => {
      setResults({
        corrected:
          "The impact of climate change on global ecosystems is profound. Research indicates that rising temperatures affect biodiversity and disrupt ecological balance. Scientists have observed these effects across various biomes.",
        errors: [
          {
            type: "grammar",
            original: "The impact of climate change on global ecosystems are profound.",
            correction: "The impact of climate change on global ecosystems is profound.",
            explanation: "Subject-verb agreement error. 'Impact' is singular and requires the singular verb 'is'.",
          },
          {
            type: "clarity",
            original: "Research indicate that rising temperatures affect biodiversity.",
            correction: "Research indicates that rising temperatures affect biodiversity.",
            explanation:
              "Subject-verb agreement error. 'Research' is a singular noun requiring the singular verb 'indicates'.",
          },
          {
            type: "style",
            original: "Scientists have been observing these effects across various biomes.",
            correction: "Scientists have observed these effects across various biomes.",
            explanation: "Simplified verb tense for more direct and concise expression.",
          },
        ],
      })
      setIsChecking(false)
    }, 2000)
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // In a real implementation, you would parse the file
      // For now, we'll just simulate loading some text
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        setText(
          text ||
            "The impact of climate change on global ecosystems are profound. Research indicate that rising temperatures affect biodiversity. Scientists have been observing these effects across various biomes.",
        )
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-purple-500" />
            <span className="text-white font-medium text-xl">Peerbud</span>
          </Link>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Grammar & Style Checker</h1>

          <Card className="border border-white/10 bg-black/50 backdrop-blur-md max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Check Your Research Paper</CardTitle>
              <CardDescription className="text-gray-400">
                Our AI will analyze your text for grammar, clarity, style, and academic tone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="input">
                <TabsList className="grid w-full grid-cols-2 bg-black/50 mb-6">
                  <TabsTrigger value="input">Input Text</TabsTrigger>
                  <TabsTrigger value="upload">Upload Document</TabsTrigger>
                </TabsList>

                <TabsContent value="input">
                  <Textarea
                    placeholder="Paste your research paper text here..."
                    className="min-h-[200px] bg-black/30 border-white/20 text-white"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </TabsContent>

                <TabsContent value="upload">
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-purple-500/50 transition-colors">
                    <input id="file-upload" type="file" accept=".pdf" className="hidden" onChange={handleUpload} />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center gap-2"
                    >
                      <Upload className="h-10 w-10 text-purple-500" />
                      <span className="text-white font-medium">
                        {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                      </span>
                      <span className="text-sm text-gray-400">PDF files only (max. 20MB)</span>
                    </label>
                  </div>

                  {selectedFile && (
                    <div className="mt-4 p-4 rounded-lg border border-white/10 bg-black/30">
                      <h4 className="text-white font-medium mb-2">PDF Processing Options</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="extract-all"
                            className="rounded border-white/20 bg-black/30 text-purple-500"
                            defaultChecked
                          />
                          <label htmlFor="extract-all" className="text-gray-300">
                            Extract all text
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="maintain-formatting"
                            className="rounded border-white/20 bg-black/30 text-purple-500"
                            defaultChecked
                          />
                          <label htmlFor="maintain-formatting" className="text-gray-300">
                            Maintain formatting
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="check-citations"
                            className="rounded border-white/20 bg-black/30 text-purple-500"
                            defaultChecked
                          />
                          <label htmlFor="check-citations" className="text-gray-300">
                            Check citations
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="analyze-structure"
                            className="rounded border-white/20 bg-black/30 text-purple-500"
                            defaultChecked
                          />
                          <label htmlFor="analyze-structure" className="text-gray-300">
                            Analyze document structure
                          </label>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-white font-medium mb-2">Language & Style Settings</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div>
                            <label htmlFor="language-style" className="text-gray-300 block mb-1">
                              Academic Style
                            </label>
                            <select
                              id="language-style"
                              className="w-full rounded border-white/20 bg-black/30 text-white p-2"
                              defaultValue="academic"
                            >
                              <option value="academic">Academic (Formal)</option>
                              <option value="technical">Technical</option>
                              <option value="scientific">Scientific</option>
                              <option value="medical">Medical</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="citation-style" className="text-gray-300 block mb-1">
                              Citation Style
                            </label>
                            <select
                              id="citation-style"
                              className="w-full rounded border-white/20 bg-black/30 text-white p-2"
                              defaultValue="apa"
                            >
                              <option value="apa">APA</option>
                              <option value="mla">MLA</option>
                              <option value="chicago">Chicago</option>
                              <option value="harvard">Harvard</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700" onClick={() => handleCheck()}>
                        Process PDF & Check Grammar
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              {results && (
                <div className="mt-8 space-y-6">
                  <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                    <h3 className="text-lg font-semibold text-white mb-2">Corrected Text</h3>
                    <p className="text-gray-300">{results.corrected}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Detected Issues</h3>
                    <div className="space-y-4">
                      {results.errors.map((error, index) => (
                        <div key={index} className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className={
                                error.type === "grammar"
                                  ? "text-red-400 border-red-400/50"
                                  : error.type === "clarity"
                                    ? "text-yellow-400 border-yellow-400/50"
                                    : "text-blue-400 border-blue-400/50"
                              }
                            >
                              {error.type}
                            </Badge>
                            <span className="text-gray-400 text-sm">Line {index + 1}</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-3 rounded bg-red-500/10 border border-red-500/20">
                              <div className="flex items-center gap-2 mb-1">
                                <AlertCircle className="h-4 w-4 text-red-400" />
                                <span className="text-sm font-medium text-red-400">Original</span>
                              </div>
                              <p className="text-gray-300">{error.original}</p>
                            </div>

                            <div className="p-3 rounded bg-green-500/10 border border-green-500/20">
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-sm font-medium text-green-400">Correction</span>
                              </div>
                              <p className="text-gray-300">{error.correction}</p>
                            </div>
                          </div>

                          <div className="mt-3 p-3 rounded bg-blue-500/10 border border-blue-500/20">
                            <div className="flex items-center gap-2 mb-1">
                              <Info className="h-4 w-4 text-blue-400" />
                              <span className="text-sm font-medium text-blue-400">Explanation</span>
                            </div>
                            <p className="text-gray-300">{error.explanation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={handleCheck}
                disabled={isChecking || !text}
              >
                {isChecking ? "Analyzing..." : "Check Grammar & Style"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

