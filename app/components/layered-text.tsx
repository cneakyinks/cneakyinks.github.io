"use client"

import { motion } from "framer-motion"
import type React from "react" // Added import for React

interface LayeredTextProps {
  children: React.ReactNode
  className?: string
}

export function LayeredText({ children, className = "" }: LayeredTextProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 ${className}`}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 4, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`absolute left-0 top-0 z-0 text-cyan-400 ${className}`}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  )
}
