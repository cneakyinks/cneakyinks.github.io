"use client"

import { motion } from "framer-motion"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"] })

export default function Scrapbook() {
  const memories = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PbcGoydqSkisXlJYorsXb680XFzJ4n.png",
      title: "Design Workshop",
      date: "Spring 2024",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guangzhou_1.jpg-nkYXyGTMkL1Mw4hGXaMkfL33a6kAXC.jpeg",
      title: "Guangzhou Exchange",
      date: "Winter 2023",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exco.jpg-t71L5OMsT5DE1bWRgtd3rbaOyzDYEf.jpeg",
      title: "SDM EXCO",
      date: "Fall 2023",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gafa.jpg-oR8ieoJikSiSFq4iHsCn726I115qMZ.jpeg",
      title: "Studio Sessions",
      date: "Spring 2024",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excogurls-2rEm92Wi9fDAlQ8QbBTqvoO3S4eDAY.png",
      title: "EXCO Fun",
      date: "Winter 2023",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F2Q6gzwxAVYbHPuTIxvB8CmUafrPf0.png",
      title: "Mad Hatter's Tea Party",
      date: "Spring 2024",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wz3py7nT57vPjAsCZGxIXcy3oHWq5x.png",
      title: "Creative Wonderland",
      date: "Spring 2024",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ehaYEYQARouWtP5Pomg8ulBHOa1lyy.png')] bg-contain bg-center bg-no-repeat opacity-10" />
      <div className="relative grid gap-4 md:grid-cols-4 grid-cols-2">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.title}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={memory.image || "/placeholder.svg"}
              alt={memory.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold text-white">{memory.title}</h3>
                <p className="text-sm text-gray-300">{memory.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
