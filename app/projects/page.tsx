"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { projects } from "../data/projects"
import { fadeUp, staggerContainer } from "@/lib/animations"

import { Outfit } from "next/font/google"
import { LayeredText } from "../about/components/layered-text"

const outfit = Outfit({ subsets: ["latin"] })

const FILTERS = ["All", "Collaborations", "UIUX", "Personal Exploration"] as const
type Filter = (typeof FILTERS)[number]

// Which group each project belongs to.
const projectGroups: Record<string, Exclude<Filter, "All">> = {
  ECHO: "Collaborations",
  "Precinct of Good": "Collaborations",
  "Wander's Enigma": "Collaborations",
  "Path of Familiarity": "Collaborations",
  "Roots to Results": "UIUX",
  "Nandos App Redesigned": "UIUX",
  Synapse: "UIUX",
  "Giordano Redesigned": "UIUX",
  "Moments of 間": "Personal Exploration",
  "Take a Shot!": "Personal Exploration",
}

const groupOf = (title: string): Exclude<Filter, "All"> => projectGroups[title] ?? "Personal Exploration"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const sortedProjects = [...projects].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
  const visibleProjects =
    activeFilter === "All" ? sortedProjects : sortedProjects.filter((p) => groupOf(p.title) === activeFilter)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mb-10 text-center">
          <LayeredText className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">Projects</LayeredText>
        </div>

        {/* Filter pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => {
            const active = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-cyan-400 text-black" : "bg-transparent text-white hover:bg-cyan-400/10"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {visibleProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link href={`/projects/${project.id}`}>
                <Card className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="relative p-6">
                      <h3
                        className={cn(
                          outfit.className,
                          "mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400",
                        )}
                      >
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">{project.role}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.subRoles.map((subRole, index) => (
                            <span key={index} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-gray-400">
                              {subRole}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
