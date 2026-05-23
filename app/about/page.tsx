"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Outfit } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import ContactModal from "../components/ContactModal"
import Link from "next/link"
import FloatingWorks from "../components/floating-works"

const outfit = Outfit({ subsets: ["latin"] })

const achievements = [
  {
    id: 1,
    title: "Video Production Competition",
    description: "Won 1st place in the Kampung AWWA Video Challenge",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 2,
    title: "Academic Excellence",
    description: "Director's List in Semester 2 of Year 1 and Year 2",
    image: "/placeholder.svg?height=400&width=600",
    year: "2022-2023",
  },
  {
    id: 3,
    title: "Wander's Enigma",
    description: "Immersive installation showcased during 2023 NYP School of Design & Media Open House",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
  },
  {
    id: 4,
    title: "Pandora Box",
    description: "Interactive installation showcased at NYP",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
  },
  {
    id: 5,
    title: "Precinct of Good",
    description:
      "Immersive interactive experience featured during Singapore Art Week 2025 at TenSquare, bridging Singapore-Guangzhou cultural collaboration",
    image: "/placeholder.svg?height=400&width=600",
    year: "2025",
  },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + achievements.length) % achievements.length
  }

  const nextAchievement = () => {
    setCurrentAchievementIndex((prev) => (prev + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setCurrentAchievementIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const getAchievementIndex = (offset: number) => {
    return (currentAchievementIndex + offset + achievements.length) % achievements.length
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        {/* Updated Header Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex flex-col md:grid md:grid-cols-[300px,1fr] gap-8 md:gap-12 items-center md:items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full max-w-[220px] md:max-w-[300px] mx-auto"
            >
              <div className="relative h-full rounded-full overflow-hidden border-4 border-cyan-400/20">
                <Image
                  id="profile-image"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gfdGEFk1D6Mc1GZCSttLfvYGz6Rpvs.png"
                  alt="Celeste Ng"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Personality traits floating around the image */}
              
              
              
            </motion.div>

            <div className="space-y-6 w-full text-center md:text-left">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white md:text-7xl mb-4">
                    I'm Celeste!
                  </h1>
                  <p className="text-lg sm:text-xl flex flex-wrap gap-2 items-center text-gray-400 justify-center md:justify-start">
                    <span className="relative inline-block cursor-pointer transition-all duration-300 hover:text-cyan-400">
                      Interaction Designer
                    </span>
                    <span className="text-gray-600">|</span>
                    <span className="relative inline-block cursor-pointer transition-all duration-300 hover:text-cyan-400">
                      User Researcher
                    </span>
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-full mx-auto md:mx-0 text-base sm:text-lg text-gray-400 px-4 md:px-0 text-center md:text-left"
                >
                  I am an explorative interactive designer who brings ideas to life through dynamic experiences,
                  blending physical and digital interactions, with creativity and intent.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  <Link href="/resume">
                    <button className="group relative px-8 py-3 text-white overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">Resume</span>
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
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="group relative px-8 py-3 text-white overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">Let's Chat!</span>
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
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Rest of the sections remain the same ... */}
        <FloatingWorks />

        {/* Design Process Section - Updated with new images and content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-center">My Design Process</h2>
          <p className="text-center mb-12 text-lg text-gray-400 max-w-2xl mx-auto">
            My approach to design is iterative and user-centered, focusing on creating meaningful solutions through
            careful research, creative ideation, and thoughtful execution.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Empathise",
                content:
                  "I start by understanding the problem and gathering insights through interviews, surveys, and user testing, gaining empathy and understanding of the case.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ad8KHEYPC3bmvUorx7lIfwUhlJWTl1.png",
              },
              {
                title: "Ideate",
                content:
                  "I brainstorm and sketch out ideas, creating wireframes and prototypes. I love bringing concepts to life and iterating based on feedback.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g1ksQdymJMFk085DdEmFA3Ecz3d1oV.png",
              },
              {
                title: "Design!",
                content:
                  "This step ensures that the final product is both delightful and functional. By sharing ideas and aligning with vision conditions throughout the process, I create solutions that resonate with users while meeting project goals. Continuous collaboration leads to refined designs that deliver meaningful experiences.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xuB5yNwaDUrY8R8Bgrd1RhTIGPjweh.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-zinc-900"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`${outfit.className} mb-2 text-2xl font-semibold`}>{item.title}</h3>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Achievements Section - Film strip removed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">Achievements</h2>

          {/* Two Column Layout */}
          <div className="grid gap-16 md:grid-cols-2">
            {/* Academic & CCAs - Added new achievement */}
            <div className="relative">
              <h3 className="mb-8 text-2xl font-bold">Academic & CCAs</h3>
              <div className="relative rounded-lg border border-cyan-400/20 bg-zinc-900/50 p-6">
                <div className="absolute -left-1 top-0 h-full w-0.5 bg-cyan-400/20" />
                <ul className="space-y-4">
                  <li className="text-gray-300">HR Welfare Secretary, School of Design & Media Club</li>
                  <li className="text-gray-300">Director List | AY2021-AY2022, Sem 2</li>
                  <li className="text-gray-300">Top 25% | AY2022-AY2023</li>
                  <li className="text-gray-300">Director List | AY2022-AY2023, Sem 2</li>
                  <li className="text-gray-300">Director List | AY2024-AY2025, Sem 2</li>
                  <li className="text-gray-300">Awarded Diploma in IXD in 2025</li>
                </ul>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="mb-8 text-2xl font-bold">Awards</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-cyan-400/20 bg-zinc-900/50 p-6">
                  <h4 className="mb-4 text-xl font-semibold text-cyan-400">Silver Award</h4>
                  <p className="text-gray-300">NYP x Kampung AWWA Wayfinding System</p>
                </div>
                <div className="rounded-lg border border-cyan-400/20 bg-zinc-900/50 p-6">
                  <h4 className="mb-4 text-xl font-semibold text-cyan-400">1st Place</h4>
                  <p className="text-gray-300">Kampung AWWA Video Challenge</p>
                </div>
              </div>
            </div>
          </div>


        </motion.section>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
