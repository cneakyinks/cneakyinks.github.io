"use client"

import { useState } from "react"
import ContactModal from "./ContactModal"

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
