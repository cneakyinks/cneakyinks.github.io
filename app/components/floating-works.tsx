"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll } from "framer-motion"

export default function FloatingWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const works = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PbcGoydqSkisXlJYorsXb680XFzJ4n.png",
      x: "10%",
      y: "10%",
      rotate: -5,
      zIndex: 2,
    },
    {
      id: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guangzhou_1.jpg-nkYXyGTMkL1Mw4hGXaMkfL33a6kAXC.jpeg",
      x: "40%",
      y: "5%",
      rotate: 5,
      zIndex: 1,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exco.jpg-t71L5OMsT5DE1bWRgtd3rbaOyzDYEf.jpeg",
      x: "20%",
      y: "35%",
      rotate: -8,
      zIndex: 3,
    },
    {
      id: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gafa.jpg-oR8ieoJikSiSFq4iHsCn726I115qMZ.jpeg",
      x: "55%",
      y: "25%",
      rotate: 7,
      zIndex: 4,
    },
    {
      id: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excogurls-2rEm92Wi9fDAlQ8QbBTqvoO3S4eDAY.png",
      x: "5%",
      y: "60%",
      rotate: -3,
      zIndex: 2,
    },
    {
      id: 6,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F2Q6gzwxAVYbHPuTIxvB8CmUafrPf0.png",
      x: "45%",
      y: "55%",
      rotate: 6,
      zIndex: 1,
    },
    {
      id: 7,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wz3py7nT57vPjAsCZGxIXcy3oHWq5x.png",
      x: "70%",
      y: "45%",
      rotate: -4,
      zIndex: 3,
    },
  ]

  return (
    <div ref={containerRef} className="relative h-[800px] w-full max-w-[1000px] mx-auto overflow-hidden">
      {works.map((work) => (
        <motion.div
          key={work.id}
          className="absolute"
          style={{
            left: work.x,
            top: work.y,
            zIndex: work.zIndex,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-xl border border-cyan-400"
            animate={{
              y: [0, -5, 0],
              rotate: [work.rotate, work.rotate + 1, work.rotate],
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <img
              src={work.image || "/placeholder.svg"}
              alt={`Work ${work.id}`}
              className="h-auto w-48 object-cover md:w-64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
