"use client"

import { MotionConfig } from "framer-motion"
import type React from "react"

// Honors the OS "reduce motion" setting globally: framer-motion strips
// transforms/scale for those users while keeping opacity fades.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
