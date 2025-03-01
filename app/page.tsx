import type React from "react"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import Link from "next/link"
import { Bot, FileText, Sparkles, CheckCircle, Upload } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/format-guide" className="text-gray-300 hover:text-white transition-colors">
              Format Guide
            </Link>
            
            <Link href="/become-institutebud" className="text-gray-300 hover:text-white transition-colors">
              Become an InstituteBud
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-purple-400">
                Sign In
              </Button>
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Get Your papers  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Peer Reviewed
              by top Institutes
            </span>
          </h1>

          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Enhance your academic papers with AI-powered grammar correction, formatting guidance, and reviewer feedback
            analysis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/grammar-check">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <CheckCircle className="mr-2 h-5 w-5" />
                Grammar Check
              </Button>
            </Link>
            <Link href="/format-guide">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <FileText className="mr-2 h-5 w-5" />
                Format Guide
              </Button>
            </Link>
            <Link href="/post-paper">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <Upload className="mr-2 h-5 w-5" />
                Post a Paper
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-purple-400" />}
              title="Get Papers Peer Reviewed"
              description="Have your research reviewed by experts from top institutions with quick turnaround times and detailed feedback."
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8 text-purple-400" />}
              title="Top Institute Collaboration"
              description="Work with reviewers from prestigious institutions like IIT, IIM, and MIT to enhance your research quality."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-purple-400" />}
              title="Boost Your Profile"
              description="Build your academic portfolio, track citations, and increase your research visibility in the community."
            />
          </div>

          {/* Institutes Collaboration Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Trusted by Top Institutions</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              We collaborate with prestigious institutions to ensure the highest quality of peer reviews
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm flex flex-col items-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">IIT</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Indian Institute of Technology</h3>
                <p className="text-gray-400">
                  Premier technical education institution known for excellence in research and innovation.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm flex flex-col items-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">IIM</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Indian Institute of Management</h3>
                <p className="text-gray-400">
                  Leading business school providing world-class management education and research.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm flex flex-col items-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">MIT</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Massachusetts Institute of Technology</h3>
                <p className="text-gray-400">
                  World-renowned research university dedicated to advancing knowledge and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

