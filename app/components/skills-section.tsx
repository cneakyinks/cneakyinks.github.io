"use client"

import { motion } from "framer-motion"
import { NotebookPen, MousePointerClick, Compass, WandSparkles } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"
import { fadeUp, staggerContainer } from "@/lib/animations"

const specialties = [
  {
    title: "UX Research",
    icon: NotebookPen,
    description: "Uncovering insights to drive design decisions",
  },
  {
    title: "Interactive Design",
    icon: MousePointerClick,
    description: "Creating engaging digital experiences",
  },
  {
    title: "Design Strategy",
    icon: Compass,
    description: "Aligning design with business goals",
  },
  {
    title: "New Media Art",
    icon: WandSparkles,
    description: "Exploring the intersection of art and technology",
  },
]

export default function SkillsSection() {
  return (
    <section className="py-6 sm:py-10">
      <div className="container mx-auto px-4">
        {/* Gradient used to stroke the skill icons (cyan → dark purple) */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="55%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="text-center mb-10">
            <LayeredText className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              Skills
            </LayeredText>
          </motion.div>
          <div className="mx-auto flex max-w-6xl flex-col divide-y divide-cyan-400/30 sm:flex-row sm:divide-x sm:divide-y-0">
            {specialties.map((specialty) => (
              <motion.div
                key={specialty.title}
                variants={fadeUp}
                className="flex-1 px-8 py-8 text-center sm:py-6"
              >
                <specialty.icon className="mx-auto mb-4 h-10 w-10" stroke="url(#skill-gradient)" strokeWidth={2} />
                <h3 className="mb-2 text-lg font-semibold text-white">{specialty.title}</h3>
                <p className="text-base text-gray-400">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
