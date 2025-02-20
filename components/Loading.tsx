"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

