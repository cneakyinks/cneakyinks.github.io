"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"
import { useState } from "react"
import ContactModal from "./ContactModal"
import { fadeUp, staggerContainer } from "@/lib/animations"

export default function HomeChatSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <LayeredText className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Let's Chat</LayeredText>
          </motion.div>
          <motion.p variants={fadeUp} className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Have an idea or project in mind? Let's talk about it!
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col items-center space-y-4">
            <a
              href="mailto:celestenmy23@gmail.com"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
            >
              <Mail className="h-6 w-6 mr-2" />
              cneakyinks@gmail.com
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="radius-button radius-button--deep"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  )
}
