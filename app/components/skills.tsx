"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "UX Design", level: 90 },
  { name: "UI Design", level: 85 },
  { name: "User Research", level: 80 },
  { name: "Prototyping", level: 75 },
]

export default function Skills() {
  return (
    <div className="mt-12">
      <h3 className={`text-2xl font-bold mb-4 text-cyan-400`}>Skills</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-white">{skill.name}</span>
              <span className="text-sm font-medium text-white">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
