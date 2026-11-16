"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"
import { springSoft } from "@/lib/animations"
import ContactForm from "./ContactForm"

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
            className="relative w-full max-w-[90vw] sm:max-w-lg bg-zinc-900 p-5 sm:p-8 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-cyan-400/20 max-h-[90vh] overflow-y-auto mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex justify-center">
              <LayeredText className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl mb-3 text-center">
                Let's Connect
              </LayeredText>
            </div>
            <p className="mb-6 text-center text-sm sm:text-base text-gray-400">
              Leave a message and your number, and let's chat about your ideas!
            </p>

            <ContactForm onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
