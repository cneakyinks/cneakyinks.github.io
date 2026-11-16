"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Check } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const CONTACT_EMAIL = "cneakyinks@gmail.com"
const LINKEDIN_URL = "https://www.linkedin.com/in/celeste-ng-40537528b/"
// Opens a new Gmail compose window addressed to you (works without a desktop mail app).
const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`

// Form submissions are emailed to you by Web3Forms (works on static sites like GitHub Pages).
// The key comes from your form at https://web3forms.com and is designed to be public.
const WEB3FORMS_ACCESS_KEY = "393defae-4284-4860-ab1b-d1ebf248b41d"

type Status = "idle" | "sending" | "sent" | "error"

const inputClass =
  "w-full rounded-lg border border-cyan-400/20 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-400/70"

interface ContactFormProps {
  /** When shown in the popup, the success screen offers a Close button. */
  onClose?: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()

    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${name} via your portfolio`,
          from_name: "Portfolio contact form",
          name,
          phone: data.get("phone"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message || "Send failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="text-left">
      {status === "sent" ? (
        <div className="py-8 text-center">
          <Check className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
          <p className="text-lg text-white">Thanks, your message is on its way!</p>
          <p className="mt-2 text-gray-400">I'll get back to you soon.</p>
          <button
            onClick={onClose ?? (() => setStatus("idle"))}
            className="radius-button radius-button--deep mt-8"
          >
            <span>{onClose ? "Close" : "Send another message"}</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Spam trap: hidden from people, bots tend to fill it in. */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor={`${onClose ? "modal" : "page"}-contact-name`} className="mb-1 block text-sm text-gray-300">
              Name
            </label>
            <input
              id={`${onClose ? "modal" : "page"}-contact-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${onClose ? "modal" : "page"}-contact-phone`} className="mb-1 block text-sm text-gray-300">
              Contact number
            </label>
            <input
              id={`${onClose ? "modal" : "page"}-contact-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9+\s\(\)\-]{6,20}"
              title="Numbers only, e.g. +65 9123 4567"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${onClose ? "modal" : "page"}-contact-message`} className="mb-1 block text-sm text-gray-300">
              Message
            </label>
            <textarea
              id={`${onClose ? "modal" : "page"}-contact-message`}
              name="message"
              required
              rows={5}
              className={`${inputClass} resize-y`}
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-400" role="alert">
              Something went wrong sending your message. Please try again, or email me at {CONTACT_EMAIL}.
            </p>
          )}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="radius-button radius-button--deep disabled:opacity-60"
            >
              <span>{status === "sending" ? "Sending…" : "Send message"}</span>
            </button>
          </div>
        </form>
      )}

      <motion.div
        className="mt-8 flex justify-center items-center gap-6 border-t border-cyan-400/10 pt-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.a
          variants={fadeUp}
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title="LinkedIn"
        >
          <Linkedin className="h-7 w-7" />
          <span className="sr-only">Connect on LinkedIn</span>
        </motion.a>
        <motion.a
          variants={fadeUp}
          href={EMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={`Email ${CONTACT_EMAIL}`}
        >
          <Mail className="h-7 w-7" />
          <span className="sr-only">Email me</span>
        </motion.a>
      </motion.div>
    </div>
  )
}
