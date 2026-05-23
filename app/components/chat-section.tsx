"use client"

import { motion } from "framer-motion"
import { Mail, Sparkles, Search, Lightbulb, Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import { Outfit } from "next/font/google"
import { useState } from "react"
import ContactModal from "./ContactModal"

const outfit = Outfit({ subsets: ["latin"] })

const specialties = [
  {
    title: "UX Research",
    icon: Search,
    description: "User studies, insights & strategies",
  },
  {
    title: "Interactive Design",
    icon: Sparkles,
    description: "Engaging digital experiences",
  },
  {
    title: "Design Strategy",
    icon: Lightbulb,
    description: "Innovation & problem solving",
  },
  {
    title: "New Media Art",
    icon: Palette,
    description: "Creative technological solutions",
  },
]

export default function ChatSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-cyan-400/20 p-2">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>
              <h2 className={cn(outfit.className, "text-3xl font-bold tracking-tight text-cyan-400 md:text-4xl")}>
                Let's Chat
              </h2>
            </div>
            <p className="mb-8 text-lg text-gray-400">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to create
              something amazing.
            </p>
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-black transition-all hover:bg-cyan-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <Mail className="h-4 w-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
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
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  )
}
