"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SparklesCore } from "@/components/sparkles"
import { Bot, FileText, Upload, CheckCircle, AlertTriangle, Info, BarChart } from "lucide-react"
import Link from "next/link"

export default function ReviewSummaryPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [hasUploaded, setHasUploaded] = useState(false)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Simulate processing
      setTimeout(() => {
        setIsUploading(false)
        setHasUploaded(true)
      }, 2000)
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
            <span className="text-white font-medium text-xl">ResearchAI</span>
          </Link>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Review Summary</h1>

          <Card className="border border-white/10 bg-black/50 backdrop-blur-md max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Reviewer Feedback Analysis</CardTitle>
              <CardDescription className="text-gray-400">
                Upload your paper with reviewer comments to get a comprehensive summary of all feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!hasUploaded ? (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-purple-500/50 transition-colors">
                  <input
                    id="file-upload"
                    type="file"
                    accept=".doc,.docx,.pdf"
                    className="hidden"
                    onChange={handleUpload}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center gap-2"
                  >
                    <Upload className="h-10 w-10 text-purple-500" />
                    <span className="text-white font-medium">
                      {isUploading ? "Analyzing feedback..." : "Upload your paper with reviewer comments"}
                    </span>
                    <span className="text-sm text-gray-400">
                      Supports DOC, DOCX, PDF with tracked changes or comments
                    </span>
                    {isUploading && <Progress value={45} className="w-64 mt-2" />}
                  </label>
                </div>
              ) : (
                <Tabs defaultValue="summary">
                  <TabsList className="grid w-full grid-cols-3 bg-black/50 mb-6">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="categories">Categories</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary">
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                        <h3 className="text-lg font-semibold text-white mb-4">Feedback Overview</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-300">Total Comments</span>
                              <Badge variant="outline" className="text-purple-400 border-purple-400/50">
                                32
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Info className="h-4 w-4 text-purple-400" />
                              <span className="text-sm text-gray-400">From 3 reviewers</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-300">Major Issues</span>
                              <Badge variant="outline" className="text-red-400 border-red-400/50">
                                8
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-400" />
                              <span className="text-sm text-gray-400">Require significant revision</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-300">Minor Issues</span>
                              <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                                24
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Info className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm text-gray-400">Quick fixes needed</span>
                            </div>
                          </div>
                        </div>

                        <h4 className="text-white font-medium mb-3">Key Findings</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-400 mt-1 shrink-0" />
                            <span>
                              The methodology section lacks sufficient detail on participant selection criteria.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-400 mt-1 shrink-0" />
                            <span>Literature review is missing key recent studies (2020-2023) in the field.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Info className="h-4 w-4 text-yellow-400 mt-1 shrink-0" />
                            <span>Results section would benefit from additional visual representations of data.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Info className="h-4 w-4 text-yellow-400 mt-1 shrink-0" />
                            <span>Discussion does not adequately address limitations of the study.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-1 shrink-0" />
                            <span>The research question is well-formulated and clearly presented.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                        <h3 className="text-lg font-semibold text-white mb-4">Sentiment Analysis</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-300">Overall Sentiment</span>
                              <span className="text-yellow-400">Neutral to Positive</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-300">Reviewer #1</span>
                              <span className="text-green-400">Positive</span>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-300">Reviewer #2</span>
                              <span className="text-yellow-400">Neutral</span>
                            </div>
                            <Progress value={52} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-300">Reviewer #3</span>
                              <span className="text-yellow-400">Neutral</span>
                            </div>
                            <Progress value={58} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="categories">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <div className="flex items-center gap-2 mb-4">
                            <BarChart className="h-5 w-5 text-purple-400" />
                            <h3 className="text-lg font-semibold text-white">Feedback by Section</h3>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Introduction</span>
                                <span className="text-gray-400">4 comments</span>
                              </div>
                              <Progress value={12} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Literature Review</span>
                                <span className="text-gray-400">7 comments</span>
                              </div>
                              <Progress value={22} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Methodology</span>
                                <span className="text-gray-400">9 comments</span>
                              </div>
                              <Progress value={28} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Results</span>
                                <span className="text-gray-400">6 comments</span>
                              </div>
                              <Progress value={19} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Discussion</span>
                                <span className="text-gray-400">5 comments</span>
                              </div>
                              <Progress value={16} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Conclusion</span>
                                <span className="text-gray-400">1 comment</span>
                              </div>
                              <Progress value={3} className="h-2" />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                          <div className="flex items-center gap-2 mb-4">
                            <BarChart className="h-5 w-5 text-purple-400" />
                            <h3 className="text-lg font-semibold text-white">Feedback by Type</h3>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Content Issues</span>
                                <span className="text-gray-400">12 comments</span>
                              </div>
                              <Progress value={38} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Methodology Concerns</span>
                                <span className="text-gray-400">8 comments</span>
                              </div>
                              <Progress value={25} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Grammar & Style</span>
                                <span className="text-gray-400">6 comments</span>
                              </div>
                              <Progress value={19} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Citation Issues</span>
                                <span className="text-gray-400">4 comments</span>
                              </div>
                              <Progress value={12} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">Positive Feedback</span>
                                <span className="text-gray-400">2 comments</span>
                              </div>
                              <Progress value={6} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                        <h3 className="text-lg font-semibold text-white mb-4">Common Themes in Feedback</h3>
                        <div className="space-y-4">
                          <div className="p-3 rounded bg-red-500/10 border border-red-500/20">
                            <h4 className="text-white font-medium mb-2">Methodology Concerns</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-400 mt-1 shrink-0" />
                                <span>
                                  Sample size is too small for the conclusions being drawn. All three reviewers
                                  highlighted this issue.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-400 mt-1 shrink-0" />
                                <span>Statistical analysis methods need more justification and explanation.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-400 mt-1 shrink-0" />
                                <span>Control group design has potential confounding variables.</span>
                              </li>
                            </ul>
                          </div>

                          <div className="p-3 rounded bg-yellow-500/10 border border-yellow-500/20">
                            <h4 className="text-white font-medium mb-2">Literature Review Gaps</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-yellow-400 mt-1 shrink-0" />
                                <span>
                                  Missing several key studies from 2020-2023 that directly relate to your research
                                  question.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-yellow-400 mt-1 shrink-0" />
                                <span>Over-reliance on older sources when newer research exists.</span>
                              </li>
                            </ul>
                          </div>

                          <div className="p-3 rounded bg-blue-500/10 border border-blue-500/20">
                            <h4 className="text-white font-medium mb-2">Presentation & Structure</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                                <span>Results would benefit from additional visualizations (graphs, charts).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                                <span>Discussion section is too brief compared to other sections.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="recommendations">
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                        <h3 className="text-lg font-semibold text-white mb-4">Priority Revisions</h3>
                        <div className="space-y-4">
                          <div className="p-3 rounded bg-red-500/10 border border-red-500/20">
                            <h4 className="text-white font-medium mb-2">High Priority</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <span className="bg-red-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  1
                                </span>
                                <span>
                                  <strong>Expand methodology section</strong> with detailed participant selection
                                  criteria, power analysis justifying sample size, and more robust description of
                                  control measures.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-red-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  2
                                </span>
                                <span>
                                  <strong>Update literature review</strong> to include recent studies (2020-2023),
                                  particularly those by Chen et al. (2022) and Williams (2021) that directly address
                                  your research question.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-red-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  3
                                </span>
                                <span>
                                  <strong>Revise statistical analysis</strong> with clearer justification for chosen
                                  methods and address concerns about p-value interpretation.
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="p-3 rounded bg-yellow-500/10 border border-yellow-500/20">
                            <h4 className="text-white font-medium mb-2">Medium Priority</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <span className="bg-yellow-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  4
                                </span>
                                <span>
                                  <strong>Enhance results visualization</strong> with additional charts showing
                                  correlation between key variables.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-yellow-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  5
                                </span>
                                <span>
                                  <strong>Expand discussion section</strong> to better address limitations and
                                  implications of findings.
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-yellow-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  6
                                </span>
                                <span>
                                  <strong>Fix citation inconsistencies</strong> throughout the paper, particularly in
                                  sections 3.2 and 4.1.
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="p-3 rounded bg-green-500/10 border border-green-500/20">
                            <h4 className="text-white font-medium mb-2">Low Priority</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <span className="bg-green-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  7
                                </span>
                                <span>
                                  <strong>Address minor grammatical issues</strong> throughout the paper (see detailed
                                  list in grammar check section).
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="bg-green-400 text-black font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                  8
                                </span>
                                <span>
                                  <strong>Improve formatting consistency</strong> in tables and figures.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-white/10 bg-black/30">
                        <h3 className="text-lg font-semibold text-white mb-4">Revision Action Plan</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-medium mb-2">Step 1: Address Methodology Concerns</h4>
                            <p className="text-gray-300 mb-2">Estimated time: 3-4 hours</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                              <li>Expand participant selection criteria with clear inclusion/exclusion parameters</li>
                              <li>Add power analysis to justify sample size</li>
                              <li>Enhance description of control measures and variables</li>
                              <li>Clarify statistical methods with appropriate citations</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-medium mb-2">Step 2: Update Literature Review</h4>
                            <p className="text-gray-300 mb-2">Estimated time: 4-5 hours</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                              <li>Conduct new literature search focusing on 2020-2023 publications</li>
                              <li>Incorporate at least 8-10 recent studies</li>
                              <li>Specifically address works by Chen et al. and Williams</li>
                              <li>Rebalance historical context with current research</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-medium mb-2">Step 3: Enhance Results & Discussion</h4>
                            <p className="text-gray-300 mb-2">Estimated time: 3-4 hours</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                              <li>Create 2-3 additional visualizations of key findings</li>
                              <li>Expand discussion section by at least 500 words</li>
                              <li>Add dedicated subsection on limitations</li>
                              <li>Strengthen connections between your findings and existing literature</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-medium mb-2">Step 4: Final Polish</h4>
                            <p className="text-gray-300 mb-2">Estimated time: 2-3 hours</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                              <li>Run comprehensive grammar check</li>
                              <li>Standardize formatting of tables and figures</li>
                              <li>Verify all citations match reference list</li>
                              <li>Proofread entire document</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
            <CardFooter>
              {hasUploaded && (
                <div className="w-full flex flex-col sm:flex-row gap-4 justify-between">
                  <Button variant="outline" className="text-white border-white/20">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Full Report
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Apply AI Corrections
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

