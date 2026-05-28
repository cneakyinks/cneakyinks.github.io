import Image from "next/image"
import { Roboto_Mono } from "next/font/google"
import { Phone, Mail, Briefcase, Trophy, Heart } from "lucide-react"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function ResumePage1() {
  const experiences = [
    {
      title: "IT Project Executive - SF Technologies Pte Ltd",
      date: "May 2025 – Present · Singapore",
      points: [
        "Responsible for understanding business challenges and translating them into effective digital solutions.",
        "Solutions involve conceptualising and proposing ideas, creating prototypes and designs, and testing for usability and functionality.",
      ],
    },
    {
      title: "Student Intern - Future University Hakodate (Kansei Design Lab)",
      date: "Nov 2024 – Feb 2025",
      points: [
        "Worked under Professor Kang Nam-Gyu to explore Kansei Design.",
        "Developed prototypes based on theoretical understanding and experimental research methodologies.",
        'Developed the immersive installation "Moments of 間", demonstrating skills in experiential design, spatial storytelling, and interactive media integration.',
      ],
    },
    {
      title: "NYP: Industrial Work Project - Bee Choo Origin",
      date: "April 2024 - August 2024",
      points: [
        "Innovated in-store experiences through comprehensive UX research and interface prototyping.",
        "Managed project planning and team coordination to meet milestones, demonstrating strong UX/UI design proficiency.",
      ],
    },
    {
      title: "Wanders Enigma | NYP Open House 2024",
      date: "Dec 2023 - Jan 2024",
      points: [
        "Designed and implemented using AR, UI, Sensors and physical ambience.",
        "Led the design and execution of an immersive exhibit, enhancing visitor engagement through strategic UI planning and user research.",
        "Strengthened project management skills and validated design approaches.",
      ],
    },
    {
      title: "NYP x Kampung AWWA Video Production",
      date: "Oct 2023 - Feb 2024",
      points: [
        "Directed a first-place-winning video for Kampung AWWA's launch, managing intensive user research and production timelines.",
        "Demonstrated strong storytelling and project execution skills.",
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-6 lg:gap-8 mt-8 md:mt-16">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex-shrink-0">
          <Image
            src="/images/image.png"
            alt="Celeste Ng"
            className="object-cover rounded-lg"
            width={192}
            height={192}
            priority
          />
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative">
            <span className="relative z-10">Celeste Ng</span>
            <span className="absolute inset-0 text-cyan-400 blur-sm z-0">Celeste Ng</span>
          </h1>
          <h2 className={`${robotoMono.className} text-lg md:text-xl text-cyan-400`}>Interaction Designer</h2>
          <p className="text-xs md:text-sm text-gray-300">
            UX Designer with a passion for blending aesthetics with functionality. With 3 years in interaction design, I
            transform user insights into engaging solutions. Skilled in UX research and interactive prototyping, I
            create seamless digital experiences that connect with users on both practical and emotional levels.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-[2fr,3fr] gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8">
          {/* My Profiles */}
          <div>
            <h2 className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 text-cyan-400`}>MY PROFILES</h2>
            <div className="flex gap-4">
              <a href="https://behance.net/celeste3" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </div>
              </a>
              <a href="https://linkedin.com/in/celeste-ng-40537528b/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 text-cyan-400`}>EDUCATION</h2>
            <div className="space-y-4">
              <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-400">
                <h3 className="text-base md:text-lg font-semibold">Diploma in Interaction Design (IXD)</h3>
                <p className="text-sm md:text-base text-gray-400 italic">
                  Nanyang Polytechnic, Singapore (2022 - 2025)
                </p>
                <p className="text-cyan-400">GPA: 3.77</p>
              </div>
              <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-400">
                <h3 className="text-base md:text-lg font-semibold">GCE 'O' Level</h3>
                <p className="text-sm md:text-base text-gray-400 italic">
                  Christ Church Secondary School (2018 - 2021)
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 text-cyan-400`}>SKILLS</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm md:text-base">
              {[
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
              ].map((skill, index) => (
                <li key={index} className="text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {/* Achievements */}
          <div>
            <h2
              className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 text-cyan-400 flex items-center gap-2`}
            >
              <Trophy className="w-5 h-5 md:w-6 md:h-6" />
              ACHIEVEMENTS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400">Academic & CCAs</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>HR Welfare Secretary, School of Design & Media Club</li>
                  <li>Director List | AY2021-AY2022, Sem 2</li>
                  <li>Top 25% | AY2022-AY2023</li>
                  <li>Director List | AY2022-AY2023, Sem 2</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400">Awards</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Silver Award, NYP x Kampung AWWA Wayfinding System</li>
                  <li>1st, Kampung AWWA Video Challenge</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400">Exhibitions & Showcases</h3>
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
            <h2 className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 text-cyan-400`}>CONTACT</h2>
            <div className="space-y-2 text-sm md:text-base">
              <a href="tel:+6588273676" className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                +65 8827 3676
              </a>
              <a href="mailto:cneakyinks@gmail.com" className="flex items-center gap-2 text-cyan-400">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                cneakyinks@gmail.com
              </a>
            </div>
          </div>

          {/* Experiences */}
          <div>
            <h2
              className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 flex items-center gap-2 text-cyan-400`}
            >
              <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
              EXPERIENCES
            </h2>
            <div className="space-y-4 md:space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-base md:text-xl font-semibold text-cyan-400">{exp.title}</h3>
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
            <h2
              className={`${robotoMono.className} text-xl md:text-2xl mb-3 md:mb-4 flex items-center gap-2 text-cyan-400`}
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
              HOBBIES & INTERESTS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-cyan-400">Volunteering</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Active member of Youth Corp Singapore, engaging in community service initiatives.</li>
                  <li>
                    Associate Volunteer at Halogen Singapore, mentoring teens and making a positive community impact.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-cyan-400">Art & Design Enthusiast</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-300">
                  <li>Regularly attends a range of exhibitions including art, science, and cultural events.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-cyan-400">Socialise & Networking</h3>
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
