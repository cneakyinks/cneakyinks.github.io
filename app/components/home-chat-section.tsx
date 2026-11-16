"use client"

import { motion } from "framer-motion"
import { LayeredText } from "../about/components/layered-text"
import ContactForm from "./ContactForm"
import { fadeUp, staggerContainer } from "@/lib/animations"

export default function HomeChatSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <LayeredText className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Let's Chat</LayeredText>
          </motion.div>
          <motion.p variants={fadeUp} className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Have an idea or project in mind? Let's talk about it!
          </motion.p>
          <motion.div variants={fadeUp} className="mx-auto max-w-lg">
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
