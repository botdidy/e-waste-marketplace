"use client"

import { motion } from "framer-motion"

const recycleSymbols = ["♻️", "🔄", "📱", "💻", "🖨️", "🔋", "🖥️", "⌚", "🎧", "🎮"]

export default function RecycleAnimation() {
  return (
    <div className="relative h-60 w-full max-w-2xl mx-auto overflow-hidden mb-12">
      {recycleSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl"
          initial={{
            opacity: 0,
            scale: 0,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 6,
            times: [0, 0.2, 0.8, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  )
}

