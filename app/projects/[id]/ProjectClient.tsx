"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Outfit } from "next/font/google"
import MediaShowcase from "../../components/media-showcase"
import ProcessTimeline from "./ProcessTimeline"
import type { Project } from "../../data/projects"
import { fadeUp, springSoft } from "@/lib/animations"

const outfit = Outfit({ subsets: ["latin"] })

// Note: Interactive hearts are disabled on this page to reduce distraction
export default function ProjectClient({ project }: { project?: Project }) {
  if (!project) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Project not found</div>
  }

  const projectMedia = [
    {
      type: "image" as const,
      src: project.image,
      alt: project.title,
    },
    ...(project.additionalImages?.map((img, index) => ({
      type: "image" as const,
      src: img,
      alt: `${project.title} - Additional View ${index + 1}`,
    })) || []),
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className={cn(outfit.className, "mb-8 text-4xl font-bold text-cyan-400 md:text-5xl")}
        >
          {project.title}
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ...springSoft, delay: 0.1 }}
            className="md:w-1/2"
          >
            <MediaShowcase items={projectMedia} />
            <div className="mt-4 flex items-center justify-end">
              <span>{project.year}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ ...springSoft, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="mb-4 text-2xl font-semibold text-cyan-400">Project Overview</h2>
            <p className="mb-6">{project.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span key={index} className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-400">
                  {category}
                </span>
              ))}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-cyan-400">Role</h3>
            <p className="mb-4">{project.role}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.subRoles.map((subRole, index) => (
                <span key={index} className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-400">
                  {subRole}
                </span>
              ))}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-cyan-400">Challenge</h3>
            <p className="mb-6">{project.challenge}</p>
          </motion.div>
        </div>

        {/* Full-width Process timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="mb-8 text-2xl font-semibold text-cyan-400">Process</h3>
          <ProcessTimeline steps={project.process} />
        </motion.div>

        {/* Full-width, left-aligned Outcome */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 max-w-4xl text-left"
        >
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">Outcome</h3>
          <p className="mb-6 leading-relaxed">{project.outcome}</p>
          {project.specialMentions && (
            <>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">Project Highlights</h3>
              <p className="mb-4 leading-relaxed">{project.specialMentions}</p>
            </>
          )}
          {project.videoLink && (
            <div className="mt-4">
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="radius-button radius-button--bright"
              >
                <span>View Event Highlights</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
