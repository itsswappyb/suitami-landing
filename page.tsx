import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot, Globe, Languages, LayoutDashboard } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-purple-600" />
            <span className="font-bold text-xl">Suitami</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Features
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Solutions
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Integrations
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Log in</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Sign up</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-1 mb-8">
              <Bot className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm text-purple-600 font-medium">Suitami AI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Unlock the Power of AI for Your Web3 Project
            </h1>
            <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
              Autonomous AI agents that manage your social presence and go-to-market strategy, designed specifically for
              Web3 projects
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8 text-lg">Get Started</Button>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float-delayed">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <Languages className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="absolute bottom-1/4 right-1/3 animate-float">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <LayoutDashboard className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202025-02-10%20at%205.14.16%20PM-VVuZcssArHD9ToLgHMkSmYw8roMiHt.png"
                alt="Suitami Dashboard Preview"
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

