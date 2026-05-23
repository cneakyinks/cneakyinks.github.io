"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Outfit } from "next/font/google"
import Link from "next/link"
import MediaShowcase from "../../components/media-showcase"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Project } from "../../data/projects"

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(outfit.className, "mb-8 text-4xl font-bold text-cyan-400 md:text-5xl")}
        >
          {project.title}
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <MediaShowcase items={projectMedia} />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-cyan-400">{project.category}</span>
              <span>{project.year}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            {project.link && (
              <Link
                href={
                  project.title === "Roots to Results"
                    ? "https://youtu.be/1pjTybNCEjw"
                    : project.title === "Moments of 間"
                      ? "https://youtu.be/79zCfRSITQY"
                      : project.title === "Synapse"
                        ? "https://youtu.be/lK9vCyffKPU?si=pnOoItphr_gLtVWk"
                        : project.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-cyan-400 px-6 py-2 text-black transition-colors hover:bg-cyan-300 mb-6"
              >
                View Project
              </Link>
            )}
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
            <h3 className="mb-4 text-xl font-semibold text-cyan-400">Process</h3>
            <Accordion type="single" collapsible className="mb-6">
              {project.process.map((step, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{step.title}</AccordionTrigger>
                  <AccordionContent>{step.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <h3 className="mb-2 text-xl font-semibold text-cyan-400">Outcome</h3>
            <p className="mb-6">{project.outcome}</p>
            {project.specialMentions && (
              <>
                <h3 className="mb-2 text-xl font-semibold text-cyan-400">Project Highlights</h3>
                <p className="mb-4">{project.specialMentions}</p>
              </>
            )}
            {project.videoLink && (
              <div className="mt-4">
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-cyan-400 px-6 py-2 text-black transition-colors hover:bg-cyan-300"
                >
                  View Event Highlights
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
