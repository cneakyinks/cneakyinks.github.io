"use client"
import { useState } from "react"
import FeaturedProjects from "./components/featured-projects"
import SkillsSection from "./components/skills-section"
import HomeChatSection from "./components/home-chat-section"
import Footer from "./components/footer"
import ContactModal from "./components/ContactModal"
import { motion } from "framer-motion"
import { LayeredText } from "./about/components/layered-text"
import Link from "next/link"
import SoftwareCarousel from "./components/software-carousel"
import SoftwareReveal from "./components/software-reveal"
import { fadeUp, fadeUpLg, staggerContainer } from "@/lib/animations"

export default function Page() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* About Page Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col gap-8 items-end max-w-full mx-auto pt-16 md:pt-20">
            <div className="space-y-6 w-full md:w-[90%] text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                <motion.div className="space-y-8 lg:flex-1" variants={staggerContainer} initial="hidden" animate="show">
                <motion.div variants={fadeUpLg}>
                  <p className="text-lg sm:text-xl text-gray-400 mb-4">
                    Web Design, Digital Content, and anything interfacely possible.
                  </p>
                  <LayeredText className="text-4xl sm:text-5xl font-bold tracking-tight text-white md:text-7xl mb-4">
                    I'm Celeste!
                  </LayeredText>
                  <div className="relative w-24 h-1 mt-8">
                    <div className="absolute inset-0 bg-cyan-400 rounded-full" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-75" />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6 lg:hidden">
                  <SoftwareCarousel />
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-6">
                  <Link href="/resume" target="_blank">
                    <button className="radius-button">
                      <span>Resume</span>
                    </button>
                  </Link>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="radius-button radius-button--bright"
                  >
                    <span>Contact Me</span>
                  </button>
                </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="hidden lg:block lg:flex-1"
                >
                  <SoftwareReveal />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="py-8">
        <SkillsSection />
      </div>
      <div className="py-8">
        <FeaturedProjects />
      </div>
      <div className="py-8">
        <HomeChatSection />
      </div>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  )
}
