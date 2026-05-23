"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, X } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"

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
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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

            <p className="mb-4 sm:mb-8 text-center text-sm sm:text-base text-gray-400 px-2 sm:px-0">
              I'm always excited to collaborate on new projects or discuss ideas. Feel free to reach out through any of
              the following channels:
            </p>

            <div className="flex justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <motion.a
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
                href="https://www.behance.net/celeste3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
                <span className="sr-only">View my Behance Portfolio</span>
              </motion.a>
              <motion.a
                href="mailto:cneakyinks@gmail.com"
                className="text-cyan-400 hover:text-cyan-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email me</span>
              </motion.a>
            </div>

            <p className="text-center text-sm sm:text-base text-gray-400">
              Whether you want to chat, collaborate, or just say hi, I'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
