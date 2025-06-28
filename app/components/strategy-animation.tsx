"use client"

import { motion } from "framer-motion"

export function StrategyAnimation() {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Strategic Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-20">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-white/10 rounded-sm"
            animate={{
              opacity: [0.1, 0.5, 0.1],
              backgroundColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 8) * 0.1 + Math.floor(i / 8) * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Strategic Paths */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${25 + i * 16.67}%`,
            transformOrigin: "left center",
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertical Strategic Paths */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-white to-transparent"
          style={{
            left: `${25 + i * 16.67}%`,
            transformOrigin: "center top",
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5 + 1.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Strategy Node */}
      <motion.div
        className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full"
          animate={{
            scale: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Strategic Decision Points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`decision-${i}`}
          className="absolute w-4 h-4 bg-white rounded-full"
          style={{
            left: `${20 + (i % 3) * 30}%`,
            top: `${20 + Math.floor(i / 3) * 60}%`,
          }}
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
