"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { SparklesCore } from "@/components/sparkles"
import { Bot, Building, Upload, CheckCircle, Users, GraduationCap, Globe } from "lucide-react"
import Link from "next/link"

export default function BecomeInstituteBudPage() {
  const [instituteName, setInstituteName] = useState("")
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [logo, setLogo] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLogo(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Your institution application has been submitted! We'll review and get back to you soon.")
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
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Become an InstituteBud</h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="sticky top-20">
                <Card className="border border-white/10 bg-black/50 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-white">Why Partner With Us?</CardTitle>
                    <CardDescription className="text-gray-400">
                      Join our network of prestigious institutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <GraduationCap className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Academic Recognition</h3>
                        <p className="text-gray-400">
                          Enhance your institution's visibility in the academic community.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <Users className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Expert Network</h3>
                        <p className="text-gray-400">Connect your faculty with researchers worldwide.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Global Impact</h3>
                        <p className="text-gray-400">Contribute to advancing research quality globally.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Revenue Sharing</h3>
                        <p className="text-gray-400">Earn from reviews conducted by your faculty members.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Building className="mr-2 h-5 w-5 text-purple-400" />
                    Our Current Partners
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-white">IIT</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Indian Institute of Technology</h4>
                        <p className="text-sm text-gray-400">Partner since 2022</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-white">IIM</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Indian Institute of Management</h4>
                        <p className="text-sm text-gray-400">Partner since 2022</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-white">MIT</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Massachusetts Institute of Technology</h4>
                        <p className="text-sm text-gray-400">Partner since 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="border border-white/10 bg-black/50 backdrop-blur-md">
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle className="text-white">Institution Application</CardTitle>
                    <CardDescription className="text-gray-400">
                      Fill out the form below to apply as a reviewing institution
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Institution Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your institution's full name"
                        className="bg-black/30 border-white/20 text-white"
                        value={instituteName}
                        onChange={(e) => setInstituteName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-white">
                        Institution Website
                      </Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://www.yourinstitution.edu"
                        className="bg-black/30 border-white/20 text-white"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Contact Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="contact@yourinstitution.edu"
                          className="bg-black/30 border-white/20 text-white"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Contact Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (123) 456-7890"
                          className="bg-black/30 border-white/20 text-white"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Institution Type</Label>
                      <RadioGroup defaultValue="university" className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="university" id="university" className="text-purple-500" />
                          <Label htmlFor="university" className="text-gray-300">
                            University
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="college" id="college" className="text-purple-500" />
                          <Label htmlFor="college" className="text-gray-300">
                            College
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="research" id="research" className="text-purple-500" />
                          <Label htmlFor="research" className="text-gray-300">
                            Research Institute
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" className="text-purple-500" />
                          <Label htmlFor="other" className="text-gray-300">
                            Other
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-white">
                        Institution Description
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Tell us about your institution, its expertise, and why you want to join Peerbud..."
                        className="bg-black/30 border-white/20 text-white min-h-[120px]"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="logo" className="text-white">
                        Institution Logo
                      </Label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors">
                        <input
                          id="logo"
                          type="file"
                          accept=".jpg,.jpeg,.png,.svg"
                          className="hidden"
                          onChange={handleLogoChange}
                        />
                        <label
                          htmlFor="logo"
                          className="cursor-pointer flex flex-col items-center justify-center gap-2"
                        >
                          <Upload className="h-8 w-8 text-purple-500" />
                          <span className="text-white font-medium">
                            {logo ? logo.name : "Upload your institution logo"}
                          </span>
                          <span className="text-sm text-gray-400">JPG, PNG or SVG (max. 2MB)</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <Label className="text-white">Areas of Expertise</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="science" className="text-purple-500 border-white/20" />
                          <Label htmlFor="science" className="text-gray-300">
                            Science & Technology
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medicine" className="text-purple-500 border-white/20" />
                          <Label htmlFor="medicine" className="text-gray-300">
                            Medicine & Healthcare
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="social" className="text-purple-500 border-white/20" />
                          <Label htmlFor="social" className="text-gray-300">
                            Social Sciences
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="business" className="text-purple-500 border-white/20" />
                          <Label htmlFor="business" className="text-gray-300">
                            Business & Economics
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="arts" className="text-purple-500 border-white/20" />
                          <Label htmlFor="arts" className="text-gray-300">
                            Arts & Humanities
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="engineering" className="text-purple-500 border-white/20" />
                          <Label htmlFor="engineering" className="text-gray-300">
                            Engineering
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 pt-4">
                      <Checkbox id="terms" className="text-purple-500 border-white/20 mt-1" required />
                      <Label htmlFor="terms" className="text-gray-300 text-sm">
                        I confirm that I am authorized to represent this institution and that all information provided
                        is accurate. I agree to Peerbud's terms and conditions for institutional partners.
                      </Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                      {isSubmitting ? "Processing Application..." : "Submit Application"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

