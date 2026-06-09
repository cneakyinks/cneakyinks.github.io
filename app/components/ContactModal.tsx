"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, X } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"
import { fadeUp, staggerContainer, springSoft } from "@/lib/animations"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={springSoft}
            className="w-full max-w-[90vw] sm:max-w-lg bg-zinc-900 p-4 sm:p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-cyan-400/20 max-h-[90vh] overflow-y-auto mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <LayeredText className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl mb-4 sm:mb-6 text-center">
              Let's Connect
            </LayeredText>

            <motion.div
              className="flex justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8 mt-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.a
                variants={fadeUp}
                href="https://www.linkedin.com/in/celeste-ng-40537528b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">Connect on LinkedIn</span>
              </motion.a>
              <motion.a
                variants={fadeUp}
                href="mailto:cneakyinks@gmail.com"
                className="text-cyan-400 hover:text-cyan-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email me</span>
              </motion.a>
            </motion.div>

            <p className="text-center text-sm sm:text-base text-gray-400">
              Whether you want to chat, collaborate, or just say hi, I'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
