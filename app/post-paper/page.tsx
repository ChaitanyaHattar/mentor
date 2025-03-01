"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { SparklesCore } from "@/components/sparkles"
import { Bot, Upload, Clock, DollarSign, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PostPaperPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [keywords, setKeywords] = useState("")
  const [reviewTime, setReviewTime] = useState(7) // Default 7 days
  const [price, setPrice] = useState(30) // Default $30
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calculate price based on review time
  const calculatePrice = (days: number) => {
    // Price range: $30 (slowest) to $50 (fastest)
    // 14 days = $30, 1 day = $50
    const maxPrice = 50
    const minPrice = 30
    const maxDays = 14
    const minDays = 1

    // Linear interpolation
    return Math.round(maxPrice - ((days - minDays) / (maxDays - minDays)) * (maxPrice - minPrice))
  }

  const handleReviewTimeChange = (value: number[]) => {
    const days = value[0]
    setReviewTime(days)
    setPrice(calculatePrice(days))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Your paper has been submitted for review!")
      // Reset form or redirect
    }, 2000)
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
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Post Your Paper for Review</h1>

          <Card className="border border-white/10 bg-black/50 backdrop-blur-md max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle className="text-white">Submit Your Research Paper</CardTitle>
                <CardDescription className="text-gray-400">
                  Your paper will be reviewed by experts from our partner institutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Paper Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter the title of your research paper"
                    className="bg-black/30 border-white/20 text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="abstract" className="text-white">
                    Abstract
                  </Label>
                  <Textarea
                    id="abstract"
                    placeholder="Enter the abstract of your paper"
                    className="bg-black/30 border-white/20 text-white min-h-[120px]"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords" className="text-white">
                    Keywords
                  </Label>
                  <Input
                    id="keywords"
                    placeholder="Enter keywords separated by commas"
                    className="bg-black/30 border-white/20 text-white"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Research Category
                  </Label>
                  <RadioGroup defaultValue="science" className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="science" id="science" className="text-purple-500" />
                      <Label htmlFor="science" className="text-gray-300">
                        Science & Technology
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medicine" id="medicine" className="text-purple-500" />
                      <Label htmlFor="medicine" className="text-gray-300">
                        Medicine & Healthcare
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="social" id="social" className="text-purple-500" />
                      <Label htmlFor="social" className="text-gray-300">
                        Social Sciences
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" className="text-purple-500" />
                      <Label htmlFor="business" className="text-gray-300">
                        Business & Economics
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file" className="text-white">
                    Upload Paper (PDF)
                  </Label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-purple-500/50 transition-colors">
                    <input
                      id="file"
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />
                    <label htmlFor="file" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                      <Upload className="h-10 w-10 text-purple-500" />
                      <span className="text-white font-medium">
                        {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                      </span>
                      <span className="text-sm text-gray-400">PDF only (max. 20MB)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-medium">Review Time</h3>
                      <p className="text-sm text-gray-400">Select how quickly you need your review</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-400" />
                      <span className="text-white font-medium">
                        {reviewTime} {reviewTime === 1 ? "day" : "days"}
                      </span>
                    </div>
                  </div>

                  <div className="px-2">
                    <Slider defaultValue={[7]} max={14} min={1} step={1} onValueChange={handleReviewTimeChange} />
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>Faster (Higher Price)</span>
                      <span>Standard</span>
                      <span>Slower (Lower Price)</span>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-medium">Total Price</h3>
                      <p className="text-sm text-gray-400">Based on your selected review time</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-400" />
                      <span className="text-white text-2xl font-bold">${price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={isSubmitting || !selectedFile}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Submit Paper for Review
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="max-w-4xl mx-auto mt-12 p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
              Why Choose Peerbud for Your Paper Review?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Expert Reviewers</h3>
                  <p className="text-gray-400">
                    All papers are reviewed by experts from top institutions like IIT, IIM, and MIT.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Flexible Timing</h3>
                  <p className="text-gray-400">Choose your review timeline based on your publication deadlines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Comprehensive Feedback</h3>
                  <p className="text-gray-400">Receive detailed comments on methodology, structure, and content.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Transparent Pricing</h3>
                  <p className="text-gray-400">Clear pricing based on review time with no hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

