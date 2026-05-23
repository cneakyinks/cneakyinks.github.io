"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { LayeredText } from "../about/components/layered-text"
import { projects, type Project } from "../data/projects"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const latestProjects = [
    projects.find((p) => p.title === "Moments of 間"),
    projects.find((p) => p.title === "Precinct of Good"),
    projects.find((p) => p.title === "Roots to Results"),
  ].filter(Boolean) as Project[]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % latestProjects.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + latestProjects.length) % latestProjects.length)
  }

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + latestProjects.length) % latestProjects.length
  }

  // Handle responsive sizing after component mounts
  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex((prev) => prev) // Force re-render with current index
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative py-16 sm:py-24">
      <div ref={ref} className="container mx-auto px-4 pt-8">
        <div className="relative mx-auto max-w-6xl pb-16">
          <div className="text-center mb-12">
            <LayeredText className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              My Latest Works
            </LayeredText>
          </div>
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence initial={false}>
                {[-1, 0, 1].map((offset) => {
                  const project = latestProjects[getProjectIndex(offset)]
                  return (
                    <motion.div
                      key={`${project.id}-${offset}`}
                      className="absolute w-[250px] sm:w-[300px]"
                      initial={{ opacity: 0, x: offset * 320 }}
                      animate={{
                        opacity: 1,
                        x: offset * 320,
                        scale: offset === 0 ? 1.1 : 0.8,
                        zIndex: offset === 0 ? 10 : 0,
                      }}
                      exit={{ opacity: 0, x: offset * -320 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Link href={`/projects/${project.id}`} className="block w-full h-full">
                        <div
                          className={`group relative aspect-[4/3] overflow-hidden rounded-lg ${
                            offset === 0 ? "shadow-lg shadow-cyan-500/50" : ""
                          }`}
                        >
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.categories.map((category, index) => (
                                <span
                                  key={index}
                                  className="bg-cyan-400 text-black px-2 py-1 rounded-full text-xs font-medium"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                      {offset === 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-[-70px] left-0 right-0 text-center"
                        >
                          {project.title.toLowerCase().includes("celeste") ? (
                            <LayeredText className="text-xl font-semibold mb-2 mt-4">{project.title}</LayeredText>
                          ) : (
                            <h3 className="text-xl font-semibold text-white mb-2 mt-4">{project.title}</h3>
                          )}
                          <p className="text-sm text-cyan-400">{project.category}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 p-3 text-cyan-400 backdrop-blur-sm transition-colors hover:bg-cyan-400/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 p-3 text-cyan-400 backdrop-blur-sm transition-colors hover:bg-cyan-400/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
          <div className="mt-8 flex justify-center">
            <Link href="/projects">
              <motion.button
                className="bg-cyan-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-cyan-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
