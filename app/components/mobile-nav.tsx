"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm w-10 h-10 flex items-center justify-center"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-4 z-40 w-64 bg-black/60 backdrop-blur-md rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-start p-6">
              <ul className="space-y-4 w-full divide-y divide-cyan-400/30">
                <li className="py-2">
                  <Link
                    href="/"
                    className="text-lg font-medium text-white hover:text-cyan-400 block w-full text-left"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/about"
                    className="text-lg font-medium text-white hover:text-cyan-400 block w-full text-left"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/projects"
                    className="text-lg font-medium text-white hover:text-cyan-400 block w-full text-left"
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/resume"
                    className="text-lg font-medium text-white hover:text-cyan-400 block w-full text-left"
                    onClick={toggleMenu}
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
