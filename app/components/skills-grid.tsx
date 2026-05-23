"use client"

import { motion } from "framer-motion"
import { Search, Users, Layout, Code, Lightbulb, Palette, Brain, Shapes, Workflow, Laptop } from "lucide-react"

const skills = [
  { name: "UX Research", icon: Search },
  { name: "User Testing", icon: Users },
  { name: "UI Design", icon: Layout },
  { name: "Prototyping", icon: Code },
  { name: "Design Strategy", icon: Lightbulb },
  { name: "Visual Design", icon: Palette },
  { name: "Design Thinking", icon: Brain },
  { name: "3D Design", icon: Shapes },
  { name: "Design Systems", icon: Workflow },
  { name: "Digital Media", icon: Laptop },
]

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <skill.icon className="h-6 w-6 text-cyan-400" />
          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
