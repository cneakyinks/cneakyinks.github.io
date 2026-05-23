"use client"

import { motion } from "framer-motion"
import { Mail, Sparkles, Search, Lightbulb, Palette } from "lucide-react"
import { Outfit } from "next/font/google"
import { LayeredText } from "../about/components/layered-text"
import { useState } from "react"
import ContactModal from "./ContactModal"

const outfit = Outfit({ subsets: ["latin"] })

const specialties = [
  {
    title: "UX Research",
    icon: Search,
    description: "Uncovering insights to drive design decisions",
  },
  {
    title: "Interactive Design",
    icon: Sparkles,
    description: "Creating engaging digital experiences",
  },
  {
    title: "Design Strategy",
    icon: Lightbulb,
    description: "Aligning design with business goals",
  },
  {
    title: "New Media Art",
    icon: Palette,
    description: "Exploring the intersection of art and technology",
  },
]

export default function HomeChatSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <LayeredText className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Let's Chat</LayeredText>
          <p className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Have an idea or project in mind? Let's talk about it!
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:celestenmy23@gmail.com"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
            >
              <Mail className="h-6 w-6 mr-2" />
              cneakyinks@gmail.com
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-lg text-cyan-400 hover:text-cyan-300 underline decoration-2 underline-offset-4"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <specialty.icon className="mb-3 h-6 w-6 text-cyan-400" />
              <h3 className="mb-2 font-semibold text-white">{specialty.title}</h3>
              <p className="text-sm text-gray-400">{specialty.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  )
}
