"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import ContactModal from "./ContactModal"

export default function DesktopNav() {
  const pathname = usePathname()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-md hidden md:block">
        <div className="container mx-auto px-4 py-4 max-w-full">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                href="/"
                className={`text-lg hover:text-blue-400 hover:underline ${pathname === "/" ? "text-blue-400 underline" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`group text-lg hover:text-blue-400 hover:underline flex items-center ${pathname.startsWith("/about") || pathname === "/resume" ? "text-blue-400 underline" : ""}`}
                >
                  About{" "}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-white/10 bg-black/80 text-white backdrop-blur-md">
                  <DropdownMenuItem className="cursor-pointer focus:bg-cyan-400/20 focus:text-cyan-400">
                    <Link href="/about" className="w-full">
                      About Me
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer focus:bg-cyan-400/20 focus:text-cyan-400">
                    <Link href="/resume" className="w-full">
                      Resume
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setIsContactModalOpen(true)}
                    className="cursor-pointer focus:bg-cyan-400/20 focus:text-cyan-400"
                  >
                    Contact
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                href="/projects"
                className={`text-lg hover:text-blue-400 hover:underline ${pathname.startsWith("/projects") ? "text-blue-400 underline" : ""}`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
