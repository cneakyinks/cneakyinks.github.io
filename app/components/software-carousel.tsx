"use client"

import { useRef } from "react"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"

const SOFTWARE_LIST = [
  {
    name: "TouchDesigner",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-83C5v7S4NWUZeEmBciLhi7hWWm4bTh.png",
    removeBackground: false,
  },
  {
    name: "Adobe XD",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adobe-xd-svgrepo-com-Z3zE0RARJ5KIGzU5jdkdmPmLwwNIND.svg",
    removeBackground: true,
  },
  {
    name: "Figma",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figma-svgrepo-com-9uYE1htiHbHCNgRJasJ8kDbPmsio6p.svg",
    removeBackground: false,
  },
  {
    name: "CapCut",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-227N6DB37EbCQR4l0cGru91enG29fq.png",
    removeBackground: true,
  },
  {
    name: "VS Code",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vs-code-svgrepo-com-eEtOzuqRTSj40fFaOGCByeUCMjsWOO.svg",
    removeBackground: false,
  },
  {
    name: "After Effects",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adobe-after-effects-svgrepo-com-dqDs6ZyFKod9xX6d9ur1mbjqktGqJd.svg",
    removeBackground: true,
  },
  {
    name: "Premiere Pro",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adobe-premiere-svgrepo-com-vTQ8Ztlrte1Dops4VyKcxckSncBFqR.svg",
    removeBackground: true,
  },
  {
    name: "Blender",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blender-svgrepo-com-cQhfiaRqwu6VRoU8aQ3tiRQn4t5IBa.svg",
    removeBackground: false,
  },
]

export default function SoftwareCarousel() {
  const baseVelocity = -0.3
  const baseX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((time) => {
    const x = baseX.get()
    if (!containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const contentWidth = containerRef.current.scrollWidth / 2 // Divide by 2 because we duplicate the list

    if (x <= -contentWidth) {
      baseX.set(0)
    } else {
      baseX.set(x + baseVelocity)
    }
  })

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div ref={containerRef} className="flex gap-4 sm:gap-8 py-4 justify-center" style={{ x: baseX }}>
        {[...SOFTWARE_LIST, ...SOFTWARE_LIST].map((software, index) => (
          <div
            key={`${software.name}-${index}`}
            className="w-8 sm:w-10 h-8 sm:h-10 flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={software.icon || "/placeholder.svg"}
              alt={software.name}
              className={`w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-75 hover:brightness-100 transition-all ${
                software.removeBackground ? "mix-blend-multiply dark:mix-blend-screen" : ""
              }`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
