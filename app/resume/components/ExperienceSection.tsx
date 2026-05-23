export default function ExperienceSection() {
  const experiences = [
    {
      title: "NYP: Industrial Work Project - Bee Choo Origin",
      date: "April 2024 - August 2024",
      description: [
        "Innovated in-store experiences through comprehensive UX research and interface prototyping.",
        "Managed project planning and team coordination to meet milestones, demonstrating strong UX/UI design proficiency.",
      ],
    },
    {
      title: "Wanders Enigma | NYP Open House 2024",
      date: "Dec 2023 - Jan 2024",
      description: [
        "Designed and implemented using AR, UI, Sensors and physical ambience.",
        "Led the design and execution of an immersive exhibit, enhancing visitor engagement through strategic UI planning and user research.",
        "Strengthened project management skills and validated design approaches.",
      ],
    },
    {
      title: "EKA Training Group - Associate Facilitator",
      date: "Feb 2024 - May 2024",
      description: [
        "Led educational camps and life skills sessions, enhancing student engagement and outcomes.",
        "Honed strong problem-solving and motivational skills through effective classroom management.",
      ],
    },
    {
      title: "NYP x Kampung AWWA Video Production",
      date: "Oct 2023 - Feb 2024",
      description: [
        "Directed a first-place-winning video for Kampung AWWA's launch, managing intensive user research and production timelines.",
        "Demonstrated strong storytelling and project execution skills.",
      ],
    },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400 pb-2">Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-400">{exp.title}</h3>
          <p className="text-gray-400 mb-2">{exp.date}</p>
          <ul className="list-disc pl-5">
            {exp.description.map((item, i) => (
              <li key={i} className="text-gray-300 mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
