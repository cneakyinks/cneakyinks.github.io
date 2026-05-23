import "@/styles/globals.css"
import { Inter, Outfit } from "next/font/google"
import ParticleEffect from "./components/particle-effect"
import DesktopNav from "./components/desktop-nav"
import MobileNav from "./components/mobile-nav"
import type React from "react"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })
const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.className} bg-black text-white overflow-x-hidden`}>
        <ParticleEffect />
        <DesktopNav />
        <MobileNav />
        <main className="pt-16 md:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
