"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Heart, ChevronRight, ChevronLeft } from "lucide-react"

export default function FeaturedWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      id: 1,
      title: "Digital Dreamscape",
      image: "/placeholder.svg?height=400&width=600",
      likes: 42,
    },
    {
      id: 2,
      title: "Urban Symphony",
      image: "/placeholder.svg?height=400&width=600",
      likes: 38,
    },
    {
      id: 3,
      title: "Neon Nights",
      image: "/placeholder.svg?height=400&width=600",
      likes: 51,
    },
    {
      id: 4,
      title: "Abstract Reality",
      image: "/placeholder.svg?height=400&width=600",
      likes: 45,
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter text-cyan-400 sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="relative">
          <div ref={ref} className="flex overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative w-72 flex-shrink-0 overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </Link>
                  <div className="absolute right-4 top-4 flex items-center rounded-full bg-black/50 px-3 py-1 text-white backdrop-blur-sm">
                    <Heart className="mr-2 h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{project.likes}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
