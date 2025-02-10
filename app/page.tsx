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
          <Link href="https://suitami.vercel.app">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">Launch App</Button>
          </Link>
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
              Unlock the Power of AI for Your Web3 Project
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Empower your Web3 project with intelligent automation, seamless
              integrations, and advanced AI capabilities.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Link href="https://suitami.vercel.app">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
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
        </section>

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
