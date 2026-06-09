"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Outfit } from "next/font/google"
import { useState } from "react"
import ContactModal from "../components/ContactModal"
import Link from "next/link"
import Moments from "../components/moments"
import { fadeUp, fadeUpLg, staggerContainer } from "@/lib/animations"

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
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-32"
        >
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 w-full text-left">
              <div className="space-y-4">
                <motion.div variants={fadeUpLg}>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white md:text-7xl mb-4">
                    I'm Celeste!
                  </h1>
                  <p className="text-lg sm:text-xl flex flex-wrap gap-2 items-center text-gray-400 justify-start">
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
                  variants={fadeUp}
                  className="max-w-full md:mx-0 text-base sm:text-lg text-gray-400 md:px-0 text-left"
                >
                  I am an explorative interactive designer who brings ideas to life through dynamic experiences,
                  blending physical and digital interactions, with creativity and intent.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap gap-4 justify-start"
                >
                  <Link href="/resume">
                    <button className="radius-button">
                      <span>Resume</span>
                    </button>
                  </Link>
                  <button onClick={() => setIsContactModalOpen(true)} className="radius-button radius-button--bright">
                    <span>Let's Chat!</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Process Section - Updated with new images and content */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="py-32"
        >
          <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold md:text-4xl text-center">My Design Process</motion.h2>
          <motion.p variants={fadeUp} className="text-center mb-12 text-lg text-gray-400 max-w-2xl mx-auto">
            My approach to design is iterative and user-centered, focusing on creating meaningful solutions through
            careful research, creative ideation, and thoughtful execution.
          </motion.p>

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
                variants={fadeUp}
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="py-32"
        >
          <motion.h2 variants={fadeUp} className="mb-16 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">Achievements</motion.h2>

          {/* Two Column Layout */}
          <div className="grid gap-16 md:grid-cols-2">
            {/* Academic & CCAs - Added new achievement */}
            <motion.div variants={fadeUp} className="relative">
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
            </motion.div>

            {/* Awards */}
            <motion.div variants={fadeUp}>
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
            </motion.div>
          </div>


        </motion.section>

        {/* Moments - scrapbook of memories from projects & experiences */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="py-32"
        >
          <motion.h2 variants={fadeUp} className="mb-16 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">Moments</motion.h2>
          <Moments />
        </motion.section>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
