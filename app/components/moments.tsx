"use client"

import { motion } from "framer-motion"
import { springSoft } from "@/lib/animations"

// Scattered, overlapping scrapbook memories laid out across two rows.
const moments = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PbcGoydqSkisXlJYorsXb680XFzJ4n.png",
    x: "1%",
    y: "4%",
    rotate: -6,
    zIndex: 2,
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guangzhou_1.jpg-nkYXyGTMkL1Mw4hGXaMkfL33a6kAXC.jpeg",
    x: "26%",
    y: "1%",
    rotate: 5,
    zIndex: 1,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exco.jpg-t71L5OMsT5DE1bWRgtd3rbaOyzDYEf.jpeg",
    x: "51%",
    y: "6%",
    rotate: -4,
    zIndex: 3,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gafa.jpg-oR8ieoJikSiSFq4iHsCn726I115qMZ.jpeg",
    x: "75%",
    y: "2%",
    rotate: 6,
    zIndex: 4,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excogurls-2rEm92Wi9fDAlQ8QbBTqvoO3S4eDAY.png",
    x: "8%",
    y: "32%",
    rotate: 4,
    zIndex: 5,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F2Q6gzwxAVYbHPuTIxvB8CmUafrPf0.png",
    x: "40%",
    y: "50%",
    rotate: -3,
    zIndex: 1,
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wz3py7nT57vPjAsCZGxIXcy3oHWq5x.png",
    x: "67%",
    y: "34%",
    rotate: -5,
    zIndex: 5,
  },
]

export default function Moments() {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[1100px] sm:h-[660px]">
      {moments.map((moment, index) => (
        <motion.div
          key={index}
          className="absolute cursor-pointer"
          style={{ left: moment.x, top: moment.y, zIndex: moment.zIndex }}
          initial={{ opacity: 0, y: 30, scale: 0.85, rotate: moment.rotate }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: moment.rotate }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...springSoft, delay: index * 0.08 }}
          whileHover={{ scale: 1.07, rotate: 0, zIndex: 50 }}
        >
          {/* Tape strip */}
          <span className="absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2 -rotate-3 bg-cyan-200/25 shadow-sm backdrop-blur-[1px]" />

          {/* Polaroid — image shown in full, no cropping */}
          <div className="bg-white p-3 pb-8 shadow-2xl shadow-black/50">
            <img
              src={moment.image || "/placeholder.svg"}
              alt=""
              className="h-auto w-44 object-contain sm:w-56"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
