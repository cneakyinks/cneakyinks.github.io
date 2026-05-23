"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { LayeredText } from "../about/components/layered-text"
import SoftwareCarousel from "./software-carousel"
import ContactModal from "./ContactModal"
import Link from "next/link"

const InteractiveTitle = ({ children, type }: { children: string; type: "glow" | "magnify" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered)
  }

  if (type === "glow") {
    return (
      <motion.span
        className="relative inline-block cursor-pointer transition-all duration-300"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        animate={isHovered ? { scale: 1.1, color: "#00FFFF" } : { scale: 1, color: "#A0AEC0" }}
      >
        {children}
        {isHovered && (
          <motion.span
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
          >
            <span className="absolute inset-0 blur-lg bg-cyan-400/30" />
          </motion.span>
        )}
      </motion.span>
    )
  }

  return (
    <motion.span
      className="inline-block cursor-pointer"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      animate={isHovered ? { scale: 1.1, fontWeight: 700 } : { scale: 1, fontWeight: 400 }}
    >
      {children}
    </motion.span>
  )
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showContent, setShowContent] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/your-video-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex h-full flex-col items-start justify-center px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
        <div className="relative z-10 w-full">
          <div className="mb-6 w-full text-left">
            <TypeAnimation
              sequence={["Celeste Ng", () => setShowContent(true)]}
              wrapper="div"
              cursor={false}
              repeat={0}
              speed={50}
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter"
            >
              {(text) => (
                <LayeredText>
                  <span className="text-white">{text}</span>
                </LayeredText>
              )}
            </TypeAnimation>

            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full mt-6"
              >
                {/* Personality traits */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <motion.div
                    className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Creative
                  </motion.div>
                  <motion.div
                    className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Curious
                  </motion.div>
                  <motion.div
                    className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Analytical
                  </motion.div>
                </div>

                {/* Personal interests */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-cyan-400">Art Enthusiast</span>
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-cyan-400">Tech Explorer</span>
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-cyan-400">Coffee Lover</span>
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-cyan-400">Volunteer</span>
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-cyan-400">Lifelong Learner</span>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full mt-8"
            >
              <SoftwareCarousel />
            </motion.div>

            <motion.div
              className="flex flex-col items-start space-y-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl flex gap-2 items-center">
                <InteractiveTitle type="glow">Interaction Designer</InteractiveTitle>
                <span className="text-gray-600">|</span>
                <InteractiveTitle type="glow">User Researcher</InteractiveTitle>
              </p>
              <p className="max-w-full sm:max-w-[600px] text-sm sm:text-base text-white italic sm:text-lg">
                With 3 years of experience in Interaction Design, I've worked on client projects, immersive
                installations, and web development. Have a look at my work below!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <Link href="/projects">
                <button className="group relative px-8 py-3 text-white overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">View My Works!</span>
                  <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-50 blur transition-all group-hover:opacity-75" />
                    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <rect
                        className="animate-flow-around"
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </div>
  )
}
