"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function DataFlowAnimation() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 400,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        className="absolute w-16 h-16 bg-white rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Data Streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            height: "200px",
            transformOrigin: "bottom center",
            bottom: "50%",
            left: "50%",
            marginLeft: "-2px",
          }}
          animate={{
            rotate: [i * 45, i * 45 + 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Data Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Outer Ring */}
      <motion.div
        className="absolute w-80 h-80 border border-white/30 rounded-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute w-60 h-60 border border-white/30 rounded-full"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
