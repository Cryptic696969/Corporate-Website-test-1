"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataFlowAnimation } from "./components/data-flow-animation"
import { StrategyAnimation } from "./components/strategy-animation"
import { EngineAnimation } from "./components/engine-animation"

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Hero Section - Keep Original Size */}
      <motion.section className="min-h-screen flex items-center justify-center relative px-6" style={{ opacity }}>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Where Vision Becomes Execution.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-300"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              Step into a space where ideas evolve,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              where complexity is simplified,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              and where your future is already in motion.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="text-white font-medium"
            >
              This isn't just innovation. It's transformation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              And it starts with a message.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.5 }}
              className="text-2xl font-light text-white pt-4"
            >
              Welcome to The Corporate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5 }}
              className="text-gray-400"
            >
              Where your ideas are safe, your ambition is fuel,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5.5 }}
              className="text-gray-400"
            >
              and your vision has a home.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6 }}
          className="absolute bottom-8 right-8 text-sm text-gray-500"
        >
          Coming Soon
        </motion.div>
      </motion.section>

      {/* About Section - Smaller Text + Animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">The Vision</h2>
              <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-300">
                <p>The Corporate is more than a company.</p>
                <p>
                  It's a silent engine for the future—operating behind the curtain, turning bold ideas into powerful
                  realities.
                </p>
                <p>Built for velocity, clarity, and scale, our structure allows innovation to move without friction.</p>
                <p className="text-white font-medium pt-2">
                  We exist for the thinkers, the dreamers, the leaders, and the builders—those who know their ideas
                  deserve more than hesitation.
                </p>
              </div>
            </div>

            {/* Animation - Right Side */}
            <div className="flex justify-center">
              <DataFlowAnimation />
            </div>
          </div>
        </div>
      </motion.section>

      {/* How We Think Section - Smaller Text + Animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animation - Left Side */}
            <div className="flex justify-center order-2 lg:order-1">
              <StrategyAnimation />
            </div>

            {/* Text Content - Right Side */}
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">Strategy in Motion</h2>
              <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-300">
                <p>We don't just observe the future—we design it.</p>
                <p>Every decision is calculated. Every move intentional.</p>
                <p>Where others offer features, we craft outcomes. Where others react, we anticipate.</p>
                <p>
                  We work at the intersection of intelligence, innovation, and execution—transforming raw ideas into
                  evolving systems that adapt, scale, and lead.
                </p>
                <div className="pt-4 space-y-2 text-white">
                  <p className="font-medium">Our philosophy is simple:</p>
                  <p>Clarity over complexity. Execution over explanation. Results over recognition.</p>
                </div>
                <p className="pt-3 text-base font-light text-white">
                  We build in silence—until the impact is too big to ignore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Engine Section - Smaller Text + Animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">The Structure Behind The Impact</h2>
              <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-300">
                <p className="text-white font-medium">What you see is only the surface.</p>
                <p>
                  Beneath it lies a system—quiet, intelligent, and built for velocity. A process refined through
                  precision, powered by unseen hands, and designed to transform vision into movement.
                </p>
                <p>
                  It begins with deep clarity—where intent is translated into direction. From there, something takes
                  shape: not just a concept, but a structure that adapts, responds, and scales.
                </p>
                <p>Silently, a team aligns. Patterns emerge. Frameworks are laid. Complexity dissolves.</p>
                <p>
                  Innovation pulses in the background—always one step ahead, always refining the edge. As momentum
                  builds, new layers unfold. Expansion is not forced—it's inevitable.
                </p>
                <p>Support doesn't react. It anticipates. And what starts as a whisper becomes execution at scale.</p>
                <p className="text-white font-medium pt-3">
                  You won't see the inner workings. You'll only feel the effect.
                </p>
                <p className="text-base font-light text-white">
                  This is not development. This is orchestration. A living engine where intelligence meets intention—and
                  where your vision becomes something unstoppable.
                </p>
              </div>
            </div>

            {/* Animation - Right Side */}
            <div className="flex justify-center">
              <EngineAnimation />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer / CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-t from-black to-gray-900/50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">The Corporate is launching soon.</h2>
          <p className="text-xl text-gray-300 mb-12">Be the first to connect.</p>

          {/* Waitlist Form */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-black hover:bg-gray-200">Notify Me</Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">📞 WhatsApp: +971 50 144 99 03</p>
              <p>Handle: @thecorporate.ai</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
