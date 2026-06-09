"use client"

import { useEffect, useRef, useState } from "react"

const SOFTWARE_LIST = [
  {
    name: "TouchDesigner",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-83C5v7S4NWUZeEmBciLhi7hWWm4bTh.png",
  },
  {
    name: "Adobe XD",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adobe-xd-svgrepo-com-Z3zE0RARJ5KIGzU5jdkdmPmLwwNIND.svg",
  },
  {
    name: "Figma",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figma-svgrepo-com-9uYE1htiHbHCNgRJasJ8kDbPmsio6p.svg",
  },
  {
    name: "CapCut",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-227N6DB37EbCQR4l0cGru91enG29fq.png",
  },
  {
    name: "VS Code",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vs-code-svgrepo-com-eEtOzuqRTSj40fFaOGCByeUCMjsWOO.svg",
  },
  {
    name: "Premiere Pro",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adobe-premiere-svgrepo-com-vTQ8Ztlrte1Dops4VyKcxckSncBFqR.svg",
  },
  {
    name: "Blender",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blender-svgrepo-com-cQhfiaRqwu6VRoU8aQ3tiRQn4t5IBa.svg",
  },
  {
    name: "Claude",
    icon: "/software/claude.png",
  },
]

// Scattered placements so the icons feel like they're "hovering around" the panel.
const POSITIONS = [
  { top: "10%", left: "20%" },
  { top: "6%", left: "64%" },
  { top: "36%", left: "40%" },
  { top: "30%", left: "80%" },
  { top: "60%", left: "22%" },
  { top: "66%", left: "62%" },
  { top: "86%", left: "42%" },
  { top: "82%", left: "80%" },
]

const TORCH_RADIUS = 130

export default function SoftwareReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [active, setActive] = useState(false)
  // Idle = the torch is off and the "hover to reveal!" prompt is showing.
  const [idle, setIdle] = useState(true)

  const goIdleSoon = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(() => setIdle(true), 2200)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setIdle(false)
    // If the cursor sits still for a beat, drift back to the idle prompt.
    goIdleSoon()
  }

  const handleMouseLeave = () => {
    setActive(false)
    setIdle(true)
    if (idleTimer.current) clearTimeout(idleTimer.current)
  }

  useEffect(() => () => {
    if (idleTimer.current) clearTimeout(idleTimer.current)
  }, [])

  const revealing = active && !idle

  // The torchlight: a soft circle of visibility that follows the cursor.
  const torchMask = `radial-gradient(circle ${TORCH_RADIUS}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0) 72%)`

  const renderItems = (revealed: boolean) =>
    SOFTWARE_LIST.map((software, index) => {
      const place = POSITIONS[index % POSITIONS.length]
      return (
        <div
          key={`${revealed ? "lit" : "dim"}-${software.name}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: place.top, left: place.left }}
        >
          <img
            src={software.icon || "/placeholder.svg"}
            alt={software.name}
            className={`h-9 w-9 object-contain sm:h-10 sm:w-10 ${
              revealed ? "opacity-100" : "opacity-25 grayscale"
            }`}
          />
          {/* Labels intentionally hidden (0% opacity) — the torchlight does the talking. */}
          <span className="sr-only">{software.name}</span>
        </div>
      )
    })

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-[420px] w-full"
    >
      {/* Dim, ghostly base layer — the hint that there's something to find. */}
      <div className="absolute inset-0">{renderItems(false)}</div>

      {/* Revealed layer, unmasked only inside the torchlight circle. */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: revealing ? 1 : 0,
          WebkitMaskImage: torchMask,
          maskImage: torchMask,
        }}
      >
        {renderItems(true)}
      </div>

      {/* Warm glow of the torch itself. */}
      <div
        className="pointer-events-none absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300"
        style={{ top: pos.y, left: pos.x, opacity: revealing ? 1 : 0 }}
      />

      {/* Idle nudge — leads the user to interact, and drifts back when untouched. */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        style={{ opacity: idle ? 1 : 0 }}
      >
        <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">hover to reveal!</span>
      </div>
    </div>
  )
}
