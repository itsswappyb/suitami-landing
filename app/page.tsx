import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Image from "next/image";

/**
 * Changelog:
 * - Removed "powered by" section and associated logos from header
 * - Added footer with Suiside squad attribution and skull icon
 * - Introduced mini-orbits of AI bot icons around each social media icon
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#011829] via-[#030f1c] to-black">
      <header className="fixed top-0 w-full bg-[#011829]/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/aiden-logo.png"
                alt="Aiden Logo"
                width={120}
                height={60}
                priority
                className="h-24 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://aiden.so">
              <Button className="bg-sky-600 hover:bg-sky-500 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 border border-sky-400/20">
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
                Aiden AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 bg-clip-text text-transparent">
              Aiden - The Management System for all your AI Agents
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Deploy, train, manage and nurture your AI agents. Automate DAO workflows.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Link href="https://aiden.so">
                <Button
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-500 hover:scale-105 transition-all duration-300 text-white font-semibold tracking-wide shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 border border-sky-400/20 px-8"
                >
                  Launch App
                </Button>
              </Link>
            </div>

            {/* Powered By Section */}
            <div className="mb-4 -mt-12 overflow-hidden">
              <span className="text-sm text-gray-400/70 block mb-0">Powered by:</span>
              <div className="flex items-center justify-center">
                <Image
                  src="/eliza.png"
                  alt="Eliza Logo"
                  width={1000}
                  height={400}
                  className="h-96 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity"
                />
              </div>
            </div>

            <div className="relative flex h-[500px] w-full flex-col items-center justify-center -mt-32">
              {/* Ring-shaped hover area between orbits */}
              <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full group/outer hover:bg-[#011829]/5 transition-colors">
                {/* Inner cutout to prevent hover in center */}
                <div className="absolute w-[184px] h-[184px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#030f1c]"></div>
                <span className="absolute text-gray-500/50 text-sm font-medium left-1/2 translate-y-[420px] -translate-x-1/2 opacity-0 group-hover/outer:opacity-100 transition-opacity duration-300 whitespace-nowrap">Community Engagement</span>
              </div>

              {/* Center Logo with inner hover area */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-[#011829]/50 group/inner hover:bg-[#011829]/60 transition-colors">
                  <Image
                    src="/aiden-logo.png"
                    alt="Aiden Logo"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover opacity-25 group-hover/inner:opacity-0 transition-opacity duration-300"
                  />
                  <span className="absolute text-gray-500/50 text-sm font-medium left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-300 whitespace-nowrap">Community Management</span>
                </div>
              </div>
              
              <OrbitingCircles iconSize={15} radius={92}>
                <div className="relative group w-6 h-6 flex items-center justify-center">
                  <div className="scale-[0.35] relative">
                    <Icons.telegram />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#011829]/90 text-sky-400/90 text-sm px-3 py-1 rounded-full border border-sky-500/10">
                    Telegram Agent
                  </span>
                </div>
                <div className="relative group w-6 h-6 flex items-center justify-center">
                  <div className="scale-[0.35] relative">
                    <Icons.x />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#011829]/90 text-sky-400/90 text-sm px-3 py-1 rounded-full border border-sky-500/10">
                    X Agent
                  </span>
                </div>
                <div className="relative group w-6 h-6 flex items-center justify-center">
                  <div className="scale-[0.35] relative">
                    <Icons.discord />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#011829]/90 text-sky-400/90 text-sm px-3 py-1 rounded-full border border-sky-500/10">
                    Discord Agent
                  </span>
                </div>
              </OrbitingCircles>

              <OrbitingCircles iconSize={15} radius={198} reverse speed={2}>
                <div className="relative group w-6 h-6 flex items-center justify-center">
                  <div className="scale-[0.35] relative">
                    <Icons.telegram />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#011829]/90 text-sky-400/90 text-sm px-3 py-1 rounded-full border border-sky-500/10">
                    Telegram Engagement
                  </span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OrbitingCircles iconSize={15} radius={45} speed={4}>
                      <Bot className="text-sky-400/50" />
                      <Bot className="text-blue-400/40 rotate-180" />
                    </OrbitingCircles>
                  </div>
                </div>
                <div className="relative group w-6 h-6 flex items-center justify-center">
                  <div className="scale-[0.35] relative">
                    <Icons.x />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#011829]/90 text-sky-400/90 text-sm px-3 py-1 rounded-full border border-sky-500/10">
                    X Engagement
                  </span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OrbitingCircles iconSize={15} radius={45} speed={4}>
                      <Bot className="text-sky-400/50" />
                      <Bot className="text-blue-400/40 rotate-120" />
                      <Bot className="text-sky-400/45 rotate-240" />
                    </OrbitingCircles>
                  </div>
                </div>
                <div className="relative group w-6 h-6 flex items-center justify-center">
                  <div className="scale-[0.35] relative">
                    <Icons.discord />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#011829]/90 text-sky-400/90 text-sm px-3 py-1 rounded-full border border-sky-500/10">
                    Discord Engagement
                  </span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OrbitingCircles iconSize={15} radius={45} speed={4}>
                      <Bot className="text-sky-400/50" />
                    </OrbitingCircles>
                  </div>
                </div>
              </OrbitingCircles>
            </div>
          </div>

          {/* How it Works Section */}
          <section className="pt-32 pb-16 relative">
            <div className="container mx-auto px-4 text-center">
              {/* Architecture Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                  Architecture Overview
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  A comprehensive platform for creating, training, and managing AI agents
                </p>
                <div className="max-w-4xl mx-auto">
                  <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <Image
                      src="/Screenshot 2025-02-16 at 7.15.51.png"
                      alt="Aiden Architecture"
                      width={1200}
                      height={675}
                      className="w-[110%] h-auto scale-110 object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 bg-clip-text text-transparent">
                  Demo Video
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Watch how Aiden transforms Web3 community management
                </p>
                <div className="max-w-4xl mx-auto bg-[#001324]/50 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/placeholder_video_id"
                      title="Aiden Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
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
