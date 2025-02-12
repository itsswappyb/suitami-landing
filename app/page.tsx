import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#001324]">
      <header className="fixed top-0 w-full bg-[#001324]/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/suitami-nav-logo-transparent.png"
                alt="Suitami Logo"
                width={120}
                height={60}
                priority
                className="h-24 w-auto"
              />
            </Link>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm opacity-70">powered by:</span>
              <Image
                src="/eliza.png"
                alt="Eliza Logo"
                width={200}
                height={80}
                className="h-24 w-auto object-contain"
              />
              <Image
                src="/sui.png"
                alt="Sui Logo"
                width={200}
                height={80}
                className="h-24 w-auto object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://x.com/suitami_AI" 
              target="_blank"
              className="text-gray-400 hover:text-sky-400 transition-colors flex items-center h-10"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="scale-[0.35]">
                  <Icons.x />
                </div>
              </div>
            </Link>
            <Link href="https://suitami.vercel.app">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-sky-500/10 rounded-full px-4 py-1 mb-8">
              <Bot className="w-4 h-4 text-sky-500 mr-2" />
              <span className="text-sm text-sky-400 font-medium">
                Suitami AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              AI Agents for Autonomous Web3 Communities
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              The intelligence layer that empowers your Web3 communities with
              autonomous AI agents, trained to manage, engage, and grow your
              ecosystem.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Link href="https://suitami.vercel.app">
                <Button
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-600 text-white"
                >
                  Launch App
                </Button>
              </Link>
            </div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
              <OrbitingCircles iconSize={40}>
                <Icons.telegram />
                <Icons.x />
                <Icons.discord />
              </OrbitingCircles>
              <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                <Icons.telegram />
                <Icons.x />
                <Icons.discord />
              </OrbitingCircles>
            </div>
          </div>

          {/* How it Works Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                How it Works
              </h2>
              <div className="max-w-4xl mx-auto bg-[#001324]/50 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/Jd1-VmyZilk"
                    title="How Suitami Works"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Floating Icons */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <Globe className="w-8 h-8 text-sky-500" />
            </div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-delayed">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <Languages className="w-8 h-8 text-sky-500" />
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/3 animate-float">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <LayoutDashboard className="w-8 h-8 text-sky-500" />
            </div>
          </div>
        </div> */}

        {/* Dashboard Preview */}
        {/* <section className="py-16">
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
        </section> */}
      </main>
    </div>
  );
}
