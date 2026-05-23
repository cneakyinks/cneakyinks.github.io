"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { projects } from "../../data/projects"

// Static export can't do a server redirect, so pick a random project on the client.
export default function RandomProject() {
  const router = useRouter()

  useEffect(() => {
    const randomProject = projects[Math.floor(Math.random() * projects.length)]
    router.replace(`/projects/${randomProject.id}`)
  }, [router])

  return <div className="min-h-screen bg-black" />
}
