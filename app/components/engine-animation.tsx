"use client"

import { motion } from "framer-motion"

export function EngineAnimation() {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Core Engine */}
      <motion.div
        className="absolute w-20 h-20 bg-white rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />

      {/* Engine Rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute border-2 rounded-full border-white/40`}
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Processing Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-6 h-6 bg-white rounded-full"
          style={{
            left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`,
            top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`,
            transformOrigin: "center center",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data Streams Between Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-1 h-16 bg-gradient-to-t from-transparent via-white to-transparent"
          style={{
            left: `${50 + 25 * Math.cos((i * Math.PI * 2) / 8)}%`,
            top: `${50 + 25 * Math.sin((i * Math.PI * 2) / 8)}%`,
            transformOrigin: "center bottom",
            transform: `rotate(${(i * 360) / 8}deg)`,
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Outer Processing Layer */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`outer-${i}`}
          className="absolute w-3 h-3 bg-white rounded-full"
          style={{
            left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 12)}%`,
            top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 12)}%`,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Pulses */}
      <motion.div
        className="absolute w-full h-full border-2 border-white/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
