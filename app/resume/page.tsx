"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ResumePage1 from "./components/ResumePage1"
import ResumePage2 from "./components/ResumePage2"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ResumePage() {
  const [currentPage, setCurrentPage] = useState(1)

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

        {/* Resume Content */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {currentPage === 1 ? <ResumePage1 /> : <ResumePage2 />}
        </motion.div>

        {/* Page Navigation */}
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 md:gap-4 z-50">
          <button
            onClick={() => setCurrentPage(1)}
            className={`p-2 rounded-full ${currentPage === 1 ? "bg-cyan-400 text-black" : "bg-gray-800 text-white"} shadow-lg`}
            aria-label="Page 1"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`p-2 rounded-full ${currentPage === 2 ? "bg-cyan-400 text-black" : "bg-gray-800 text-white"} shadow-lg`}
            aria-label="Page 2"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
