"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { fadeUp, staggerContainerTight } from "@/lib/animations"

type Step = { title: string; description: string }

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <motion.ol
      className="relative"
      variants={staggerContainerTight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Vertical timeline rail */}
      <div className="absolute bottom-3 left-4 top-3 w-px bg-cyan-400/30" aria-hidden="true" />

      {steps.map((step, i) => {
        const isOpen = open.has(i)
        return (
          <motion.li key={i} variants={fadeUp} className="relative pb-6 pl-14 last:pb-0">
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-4 text-left"
            >
              {/* Node */}
              <span
                className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                  isOpen
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-cyan-400/50 bg-black text-cyan-400 group-hover:border-cyan-400"
                }`}
              >
                {i + 1}
              </span>
              <span className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-400">
                {step.title}
              </span>
              <Plus
                className={`ml-auto h-5 w-5 flex-shrink-0 text-cyan-400 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 leading-relaxed text-gray-400">{step.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        )
      })}
    </motion.ol>
  )
}
