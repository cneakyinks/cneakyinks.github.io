"use client"
import FeaturedProjects from "./components/featured-projects"
import HomeChatSection from "./components/home-chat-section"
import Footer from "./components/footer"
import { motion } from "framer-motion"
import { LayeredText } from "./about/components/layered-text"
import Link from "next/link"
import SoftwareCarousel from "./components/software-carousel"

export default function Page() {
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
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-lg sm:text-xl text-gray-400 mb-4">UIUX Designer</p>
                  <LayeredText className="text-4xl sm:text-5xl font-bold tracking-tight text-white md:text-7xl mb-4">
                    I'm Celeste!
                  </LayeredText>
                  <div className="relative w-24 h-1 mt-10">
                    <div className="absolute inset-0 bg-cyan-400 rounded-full" />
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-75" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6"
                >
                  <SoftwareCarousel />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mt-6"
                >
                  <Link href="/resume" target="_blank">
                    <button className="group relative px-8 py-3 text-white rounded-full overflow-visible">
                      <span className="relative z-10 flex items-center gap-2">Resume</span>
                      <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                      <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-50 blur transition-all group-hover:opacity-75 rounded-full" />
                        <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
                          <rect
                            className="animate-flow-around"
                            x="2"
                            y="2"
                            width="calc(100% - 4px)"
                            height="calc(100% - 4px)"
                            rx="50"
                            ry="50"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.3"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                  <Link href="/projects">
                    <button className="group relative px-8 py-3 text-white rounded-full overflow-visible">
                      <span className="relative z-10 flex items-center gap-2">View My Works!</span>
                      <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                      <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-50 blur transition-all group-hover:opacity-75 rounded-full" />
                        <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
                          <rect
                            className="animate-flow-around"
                            x="2"
                            y="2"
                            width="calc(100% - 4px)"
                            height="calc(100% - 4px)"
                            rx="50"
                            ry="50"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.3"
                          />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="py-8">
        <FeaturedProjects />
      </div>
      <div className="py-8">
        <HomeChatSection />
      </div>
      <Footer />
    </main>
  )
}
