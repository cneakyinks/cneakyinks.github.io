"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

type MediaItem = {
  type: "image" | "video" | "embed" | "pdf"
  src: string
  alt?: string
  title?: string
  description?: string
  thumbnail?: string
}

interface MediaShowcaseProps {
  items: MediaItem[]
  className?: string
}

export default function MediaShowcase({ items, className }: MediaShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.min(2, items.length))
    setIsVideoPlaying(false)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.min(2, items.length)) % Math.min(2, items.length))
    setIsVideoPlaying(false)
  }

  const currentItem = items[currentIndex]

  const renderMediaContent = (item: MediaItem) => {
    switch (item.type) {
      case "image":
        return (
          <img src={item.src || "/placeholder.svg"} alt={item.alt || ""} className="h-full w-full object-cover" />
        )
      case "video":
        return (
          <div className="relative h-full w-full">
            <video
              src={item.src}
              controls={isVideoPlaying}
              className="h-full w-full object-cover"
              onClick={() => setIsVideoPlaying(true)}
            >
              Your browser does not support the video tag.
            </video>
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Play className="h-16 w-16 text-white" />
              </div>
            )}
          </div>
        )
      case "embed":
        return (
          <iframe
            src={item.src}
            className="h-full w-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )
      case "pdf":
        return <iframe src={`${item.src}#view=FitH`} className="h-full w-full" title={item.title || "PDF Document"} />
      default:
        return null
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
          >
            {renderMediaContent(currentItem)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-full bg-zinc-900 p-2 text-white transition-colors hover:bg-zinc-800"
          disabled={items.length < 2}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto px-4">
          {items.slice(0, 2).map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-all",
                currentIndex === index ? "border-cyan-400" : "border-transparent",
              )}
            >
              {item.type === "image" && (
                <img src={item.src || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-full bg-zinc-900 p-2 text-white transition-colors hover:bg-zinc-800"
          disabled={items.length < 2}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Caption */}
      {currentItem.title && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{currentItem.title}</h3>
          {currentItem.description && <p className="text-sm text-gray-400">{currentItem.description}</p>}
        </div>
      )}
    </div>
  )
}
