import { projects } from "../../data/projects"
import ProjectClient from "./ProjectClient"

// Pre-render one static page per project for `output: export`.
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id.toString() }))
}

// Only the IDs above exist; don't try to render anything else.
export const dynamicParams = false

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id.toString() === id)

  return <ProjectClient project={project} />
}
