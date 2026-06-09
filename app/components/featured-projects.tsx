"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"
import { projects, type Project } from "../data/projects"
import { fadeUp } from "@/lib/animations"

export default function FeaturedProjects() {
  const latestProjects = [
    projects.find((p) => p.title === "Moments of 間"),
    projects.find((p) => p.title === "Precinct of Good"),
    projects.find((p) => p.title === "Roots to Results"),
  ].filter(Boolean) as Project[]

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 pt-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <LayeredText className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              My Latest Works
            </LayeredText>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {latestProjects.map((project, index) => {
              const imageRight = index % 2 === 1
              return (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
                    imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image */}
                  <Link href={`/projects/${project.id}`} className="block lg:w-3/5">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-cyan-500/20 transition-shadow duration-500 hover:shadow-cyan-500/40">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </Link>

                  {/* Text / short summary */}
                  <div className="lg:w-2/5">
                    <h3 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                    <p className="mb-6 text-base leading-relaxed text-gray-400">{project.description}</p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan-400"
                    >
                      View project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-20 flex justify-center">
            <Link href="/projects">
              <button className="radius-button radius-button--bright">
                <span>All Projects</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
