import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Brain, Workflow, Settings, Users } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function Features() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-[#d90429]"></div>
            <h2 className="text-4xl font-medium">HOW IT WORKS</h2>
          </div>
          <p className="text-gray-400 max-w-xl">
            See how easy it is to transform your auto shop with MotorMinds - your all-in-one management solution with ready-to-use tools and AI technology
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-[#212529] text-6xl font-bold">01</span>
              <div className="h-[1px] flex-grow bg-[#212529]"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">GET IN TOUCH:</h3>
            <p className="text-gray-400">
              Contact us to discover how we can help transform your auto shop operations
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-[#212529] text-6xl font-bold">02</span>
              <div className="h-[1px] flex-grow bg-[#212529]"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">INTEGRATE YOUR WORKFLOW:</h3>
            <p className="text-gray-400">
              Easily connect your shop's operations - from inventory and scheduling to customer management and invoicing
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-[#212529] text-6xl font-bold">03</span>
              <div className="h-[1px] flex-grow bg-[#212529]"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">LAUNCH YOUR SOLUTION:</h3>
            <p className="text-gray-400">
              Start managing your auto shop more efficiently with MotorMinds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 