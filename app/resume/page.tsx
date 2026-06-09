"use client"

import { motion } from "framer-motion"
import ResumePage1 from "./components/ResumePage1"
import ResumePage2 from "./components/ResumePage2"
import { fadeUp } from "@/lib/animations"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-4 md:py-8 px-2 sm:px-4 relative">
      <div className="max-w-[1000px] mx-auto">
        {/* Geometric Elements */}
        <div className="absolute top-0 right-0 opacity-30 md:opacity-50">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="md:w-[100px] md:h-[100px]">
            <path d="M80 20L90 10M60 40L70 30M40 60L50 50" stroke="#00f2fe" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-30 md:opacity-50">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="md:w-[100px] md:h-[100px]">
            <path d="M20 80L10 90M40 60L30 70M60 40L50 50" stroke="#00f2fe" strokeWidth="2" />
          </svg>
        </div>

        {/* Full resume on one continuous page */}
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <ResumePage1 />
          <ResumePage2 />
        </motion.div>
      </div>
    </div>
  )
}
