import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] bg-black overflow-hidden">
      {/* Abstract light trail */}
      {/* Commented out background image for now
      <div className="absolute left-0 top-0 h-full w-full z-0">
        <Image
          src="/Motorminds Website Background.png"
          alt="Abstract light trails"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      */}

      <div className="container relative z-10 mx-auto px-4 py-12 flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="mb-16 mt-8">
          <h2 className="text-white text-lg font-medium tracking-wider">MOTORMINDS</h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Accelerate Your
              <br />
              Auto Shop
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Revolutionize your auto shop with our AI-powered management tool. From lead generation to customer
              management and shop operations, Motorminds simplifies every aspect of your business.
            </p>
            <Button className="bg-[#d90429] hover:bg-[#ba181b] text-white px-8 py-6 text-lg transition-all duration-200">
              GET STARTED NOW
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="hidden md:block relative">
            <div className="vignette">
              <Image
                src="/wmremove-transformed (1).png"
                width={600}
                height={500}
                alt="Auto mechanics working on an engine"
                className="rounded-lg opacity-80"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 