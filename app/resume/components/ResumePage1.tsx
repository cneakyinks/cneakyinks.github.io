"use client"

import { Roboto_Mono } from "next/font/google"
import { Linkedin } from "lucide-react"

async function downloadResumePdf() {
  const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("../ResumeDocument"),
  ])
  const blob = await pdf(<ResumeDocument />).toBlob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "Celeste-Ng-Resume.pdf"
  link.click()
  URL.revokeObjectURL(url)
}

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const sectionHeading = `${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 text-white`

export default function ResumePage1() {
  const experiences = [
    {
      title: "IT Project Executive — SF Technologies Pte Ltd",
      date: "May 2025 – Aug 2026 · Singapore",
      points: [
        "Responsible for understanding business challenges and translating them into effective digital solutions.",
        "Solutions involve conceptualising and proposing ideas, creating prototypes and designs, and testing for usability and functionality.",
      ],
    },
    {
      title: "Student Intern — Future University Hakodate (Kansei Design Lab)",
      date: "Nov 2024 – Feb 2025",
      points: [
        "Worked under Professor Kang Nam-Gyu to explore Kansei Design.",
        "Developed prototypes based on theoretical understanding and experimental research methodologies.",
        'Developed the immersive installation "Moments of 間", demonstrating skills in experiential design, spatial storytelling, and interactive media integration.',
      ],
    },
    {
      title: "Industrial Work Project — Bee Choo Origin (NYP)",
      date: "Apr 2024 – Aug 2024",
      points: [
        "Innovated in-store experiences through comprehensive UX research and interface prototyping.",
        "Managed project planning and team coordination to meet milestones, demonstrating strong UX/UI design proficiency.",
      ],
    },
    {
      title: "Wanders Enigma — NYP Open House 2024",
      date: "Dec 2023 – Jan 2024",
      points: [
        "Designed and implemented using AR, UI, sensors and physical ambience.",
        "Led the design and execution of an immersive exhibit, enhancing visitor engagement through strategic UI planning and user research.",
        "Strengthened project management skills and validated design approaches.",
      ],
    },
    {
      title: "NYP x Kampung AWWA Video Production",
      date: "Oct 2023 – Feb 2024",
      points: [
        "Directed a first-place-winning video for Kampung AWWA's launch, managing intensive user research and production timelines.",
        "Demonstrated strong storytelling and project execution skills.",
      ],
    },
  ]

  // Core skills (prominent, white) ordered by relevance, followed by the rest (grey).
  const coreSkills = [
    "Project Management",
    "Front-End Development",
    "UX Research",
    "UI Design",
    "Prompt Engineering",
    "AI Integration",
    "Generative AI Tools",
  ]
  const otherSkills = [
    "Project Planning",
    "Wireframing & Prototyping",
    "Concept Ideation",
    "Graphic Design",
    "Back-End Development",
    "Google Data Analytics",
  ]

  return (
    <div className="flex flex-col gap-6 lg:gap-8 mt-8 md:mt-16">
      {/* Header: name + download button */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-between">
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative">
            <span className="relative z-10">Celeste Ng</span>
            <span className="absolute inset-0 text-cyan-400 blur-sm z-0">Celeste Ng</span>
          </h1>
          <h2 className={`${robotoMono.className} text-lg md:text-xl text-cyan-400`}>Interaction Designer</h2>
          <p className="max-w-2xl text-xs md:text-sm text-gray-300">
            UX Designer with a passion for blending aesthetics with functionality. Beyond 3 years in interaction design,
            my work experience has equipped me with an understanding of diverse concepts and a solution-driven creative
            approach, transforming user insights into seamless digital experiences, driven by both practicality and
            emotion.
          </p>
        </div>
        <button
          onClick={downloadResumePdf}
          className="shrink-0 self-start rounded-lg border border-cyan-400 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-black"
        >
          Download PDF
        </button>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[2fr,3fr] gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8">
          {/* Links */}
          <div>
            <h2 className={sectionHeading}>LINKS</h2>
            <a
              href="https://linkedin.com/in/celeste-ng-40537528b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex text-cyan-400 transition-colors hover:text-cyan-300"
            >
              <Linkedin className="h-7 w-7" />
            </a>
          </div>

          {/* Education */}
          <div>
            <h2 className={sectionHeading}>EDUCATION</h2>
            <div className="space-y-4">
              <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-400">
                <h3 className="text-base md:text-lg font-semibold text-white">Bachelor of Science in Geospatial Intelligence</h3>
                <p className="text-sm md:text-base text-gray-400 italic">
                  National University of Singapore (2026 - 2030)
                </p>
              </div>
              <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-400">
                <h3 className="text-base md:text-lg font-semibold text-white">Diploma in Interaction Design (IXD)</h3>
                <p className="text-sm md:text-base text-gray-400 italic">
                  Nanyang Polytechnic, Singapore (2022 - 2025)
                </p>
              </div>
              <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-400">
                <h3 className="text-base md:text-lg font-semibold text-white">GCE 'O' Level</h3>
                <p className="text-sm md:text-base text-gray-400 italic">
                  Christ Church Secondary School (2018 - 2021)
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className={sectionHeading}>SKILLS</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 text-sm md:text-base">
              {coreSkills.map((skill, index) => (
                <li key={`core-${index}`} className="font-semibold text-white">
                  {skill}
                </li>
              ))}
              {otherSkills.map((skill, index) => (
                <li key={`other-${index}`} className="text-gray-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h2 className={sectionHeading}>ACHIEVEMENTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Academic & CCAs</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>HR Welfare Secretary, School of Design & Media Club</li>
                  <li>Director List | AY2021-AY2022, Sem 2</li>
                  <li>Top 25% | AY2022-AY2023</li>
                  <li>Director List | AY2022-AY2023, Sem 2</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Awards</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Silver Award, NYP x Kampung AWWA Wayfinding System</li>
                  <li>1st, Kampung AWWA Video Challenge</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Exhibitions & Showcases</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Precinct of Good - Featured in Singapore Art Week 2025</li>
                  <li>Pandora Box - Interactive installation at NYP</li>
                  <li>Wander's Enigma - NYP School of Design & Media Open House 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 md:space-y-8">
          {/* Contact */}
          <div>
            <h2 className={sectionHeading}>CONTACT</h2>
            <div className="space-y-2 text-sm md:text-base">
              <a href="mailto:cneakyinks@gmail.com" className="block text-cyan-400 hover:text-cyan-300">
                cneakyinks@gmail.com
              </a>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className={sectionHeading}>WORK EXPERIENCE</h2>
            <div className="space-y-4 md:space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-base md:text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm md:text-base text-gray-400">{exp.date}</p>
                  <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div>
            <h2 className={sectionHeading}>HOBBIES & INTERESTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Volunteering</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Active member of Youth Corp Singapore, engaging in community service initiatives.</li>
                  <li>
                    Associate Volunteer at Halogen Singapore, mentoring teens and making a positive community impact.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Art & Design Enthusiast</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Regularly attends a range of exhibitions including art, science, and cultural events.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">Socialise & Networking</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Participates in social events and activities, gaining insights into diverse perspectives.</li>
                  <li>Engages in networking events to build connections and stay informed about industry trends.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
