"use client"

import { motion } from "framer-motion"
import type React from "react"

interface LayeredTextProps {
  /** The text or elements to display */
  children: React.ReactNode
  /** Optional additional classes */
  className?: string
}

/**
 * LayeredText
 *
 * Previously this component created several overlapping coloured layers for a “glitch” effect.
 * The user requested that the overlapping text be removed, so we now render **just one** animated span.
 *
 * NOTE: We keep the **named export** to avoid breaking existing imports:
 *   import { LayeredText } from '@/about/components/layered-text'
 */
export function LayeredText({ children, className = "" }: LayeredTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.span>
  )
}
