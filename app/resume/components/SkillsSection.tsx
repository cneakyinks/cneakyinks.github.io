export default function SkillsSection() {
  const skills = [
    "Concept Ideation",
    "UX Research",
    "UI Design",
    "Wireframing & Prototyping",
    "Graphic Design",
    "Project Planning",
    "Project Management",
    "Front-End Development",
    "Back-End Development",
    "Google Data Analytics",
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400 pb-2">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 mb-1">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
