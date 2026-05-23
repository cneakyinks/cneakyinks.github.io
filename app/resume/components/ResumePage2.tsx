import { Briefcase } from "lucide-react"
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export default function ResumePage2() {
  const experiences = [
    {
      title: "Wag n Wild",
      date: "Jan 2023 - Jan 2024",
      role: "Part-Time Administrator",
      points: [
        "Efficiently fulfilling orders and managing pool visits",
        "Addressing Customer Enquiries",
        "Order fulfillment and regular space maintenance",
        "Managed financial transactions",
      ],
    },
    {
      title: "Carnival World",
      date: "Jan 2021 - Jan 2024",
      role: "Freelance Event Helper",
      points: [
        "Honed multitasking abilities, adaptability, and quick problem-solving skills managing various event stations",
        "Dynamic environments, adapting to varying event dynamics and excelling in crowd control",
        "Honed interpersonal skills through interactions with customers across diverse events",
        "Quick thinking & problem-solving abilities",
      ],
    },
    {
      title: "EKA Training Group",
      date: "Feb 2024 - Present",
      role: "Associate Facilitator",
      points: [
        "Facilitate camps for primary and secondary schools, enhancing student engagement and learning",
        "Coordinate life skills sessions and school-wide activities, improving educational outcomes",
        "Manage classroom environments effectively to maintain focus and discipline",
        "Developed strong problem-solving and motivational abilities, boosting student participation and interest",
      ],
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8 mt-8 md:mt-16 px-2 sm:px-0">
      {/* Experience Continuation */}
      <section>
        <h3
          className={`${robotoMono.className} text-xl md:text-2xl mb-4 md:mb-6 text-cyan-400 flex items-center gap-2`}
        >
          <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
          WORK EXPERIENCE
        </h3>
        <div className="space-y-6 md:space-y-8">
          {experiences
            .filter((exp) => ["Wag n Wild", "Carnival World", "EKA Training Group"].includes(exp.title))
            .map((exp, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base md:text-xl font-semibold text-cyan-400">
                  {exp.title} | {exp.date}
                </h3>
                <p className="text-sm md:text-base text-gray-400">{exp.role}</p>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}
