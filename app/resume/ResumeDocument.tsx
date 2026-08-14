import { Document, Page, Text, View, StyleSheet, Link, Font } from "@react-pdf/renderer"

// Match the site's typography: Inter (body) + Roboto Mono (headings / role)
Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Inter-SemiBold.ttf", fontWeight: 600 },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
  ],
})
Font.register({
  family: "RobotoMono",
  fonts: [
    { src: "/fonts/RobotoMono-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/RobotoMono-Medium.ttf", fontWeight: 500 },
  ],
})

// Mirrors the site's dark theme
const C = {
  bg: "#111111",
  white: "#ffffff",
  body: "#d1d5db",
  sub: "#9ca3af",
  accent: "#22d3ee",
  line: "rgba(34, 211, 238, 0.4)",
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 44,
    fontSize: 10,
    fontFamily: "Inter",
    fontWeight: 400,
    backgroundColor: C.bg,
    color: C.body,
    lineHeight: 1.4,
  },
  name: { fontSize: 26, fontFamily: "Inter", fontWeight: 700, color: C.white, lineHeight: 1.15, marginBottom: 4 },
  role: { fontSize: 12, fontFamily: "RobotoMono", fontWeight: 500, color: C.accent, marginTop: 2 },
  contact: { fontSize: 9, color: C.sub, marginTop: 8 },
  link: { color: C.accent },
  summary: { fontSize: 10, color: C.body, marginTop: 8 },

  section: { marginTop: 16 },
  heading: {
    fontSize: 11,
    fontFamily: "RobotoMono",
    fontWeight: 500,
    color: C.white,
    letterSpacing: 1.2,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
    paddingBottom: 3,
    marginBottom: 7,
  },

  entry: { marginBottom: 9 },
  entryTitle: { fontSize: 10.5, fontFamily: "Inter", fontWeight: 600, color: C.white },
  entryMeta: { fontSize: 9, color: C.sub, marginTop: 1, marginBottom: 2 },

  bullet: { flexDirection: "row", marginBottom: 2 },
  dot: { width: 9, fontSize: 9.5, color: C.accent },
  bulletText: { flex: 1, fontSize: 9.5, color: C.body },

  subhead: { fontSize: 10, fontFamily: "Inter", fontWeight: 600, color: C.white, marginTop: 5, marginBottom: 2 },

  skillsWrap: { flexDirection: "row", flexWrap: "wrap" },
  skill: { width: "33.33%", fontSize: 9.5, color: C.sub, marginBottom: 3, paddingRight: 6 },
  skillCore: { fontFamily: "Inter", fontWeight: 700, color: C.white },
})

const workExperience = [
  {
    title: "IT Project Executive — SF Technologies Pte Ltd",
    meta: "May 2025 – Aug 2026 · Singapore",
    points: [
      "Responsible for understanding business challenges and translating them into effective digital solutions.",
      "Conceptualise and propose ideas, create prototypes and designs, and test for usability and functionality.",
    ],
  },
  {
    title: "Student Intern — Future University Hakodate (Kansei Design Lab)",
    meta: "Nov 2024 – Feb 2025",
    points: [
      "Worked under Professor Kang Nam-Gyu to explore Kansei Design.",
      "Developed prototypes based on theoretical understanding and experimental research methodologies.",
      'Developed the immersive installation "Moments of 間", demonstrating experiential design, spatial storytelling, and interactive media integration.',
    ],
  },
  {
    title: "Industrial Work Project — Bee Choo Origin (NYP)",
    meta: "Apr 2024 – Aug 2024",
    points: [
      "Innovated in-store experiences through comprehensive UX research and interface prototyping.",
      "Managed project planning and team coordination to meet milestones, demonstrating strong UX/UI design proficiency.",
    ],
  },
  {
    title: "Wanders Enigma — NYP Open House 2024",
    meta: "Dec 2023 – Jan 2024",
    points: [
      "Designed and implemented using AR, UI, sensors and physical ambience.",
      "Led the design and execution of an immersive exhibit, enhancing visitor engagement through strategic UI planning and user research.",
    ],
  },
  {
    title: "NYP x Kampung AWWA Video Production",
    meta: "Oct 2023 – Feb 2024",
    points: [
      "Directed a first-place-winning video for Kampung AWWA's launch, managing intensive user research and production timelines.",
      "Demonstrated strong storytelling and project execution skills.",
    ],
  },
  {
    title: "Associate Facilitator — EKA Training Group",
    meta: "Feb 2024 – Present",
    points: [
      "Facilitate camps for primary and secondary schools, enhancing student engagement and learning.",
      "Coordinate life-skills sessions and school-wide activities; manage classroom environments effectively.",
    ],
  },
  {
    title: "Part-Time Administrator — Wag n Wild",
    meta: "Jan 2023 – Jan 2024",
    points: [
      "Fulfilled orders, managed pool visits, and handled customer enquiries.",
      "Managed financial transactions and regular space maintenance.",
    ],
  },
  {
    title: "Freelance Event Helper — Carnival World",
    meta: "Jan 2021 – Jan 2024",
    points: [
      "Honed multitasking, adaptability, and quick problem-solving across various event stations.",
      "Built interpersonal skills through interactions with customers across diverse events.",
    ],
  },
]

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

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  )
}

function Heading({ children }: { children: string }) {
  return <Text style={styles.heading}>{children}</Text>
}

export default function ResumeDocument() {
  return (
    <Document title="Celeste Ng — Resume" author="Celeste Ng">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.name}>Celeste Ng</Text>
          <Text style={styles.role}>Interaction Designer</Text>
          <Text style={styles.contact}>
            <Link src="mailto:cneakyinks@gmail.com" style={styles.link}>
              cneakyinks@gmail.com
            </Link>{" "}
            ·{" "}
            <Link src="https://linkedin.com/in/celeste-ng-40537528b/" style={styles.link}>
              linkedin.com/in/celeste-ng
            </Link>
          </Text>
          <Text style={styles.summary}>
            UX Designer with a passion for blending aesthetics with functionality. Beyond 3 years in interaction design,
            my work experience has equipped me with an understanding of diverse concepts and a solution-driven creative
            approach, transforming user insights into seamless digital experiences, driven by both practicality and
            emotion.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Heading>WORK EXPERIENCE</Heading>
          {workExperience.map((exp, i) => (
            <View key={i} style={styles.entry} wrap={false}>
              <Text style={styles.entryTitle}>{exp.title}</Text>
              <Text style={styles.entryMeta}>{exp.meta}</Text>
              {exp.points.map((p, j) => (
                <Bullet key={j}>{p}</Bullet>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Heading>EDUCATION</Heading>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>Bachelor of Science in Geospatial Intelligence</Text>
            <Text style={styles.entryMeta}>National University of Singapore · 2026 – 2030</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>Diploma in Interaction Design (IXD)</Text>
            <Text style={styles.entryMeta}>Nanyang Polytechnic, Singapore · 2022 – 2025</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>GCE 'O' Level</Text>
            <Text style={styles.entryMeta}>Christ Church Secondary School · 2018 – 2021</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Heading>SKILLS</Heading>
          <View style={styles.skillsWrap}>
            {coreSkills.map((s, i) => (
              <Text key={`c-${i}`} style={[styles.skill, styles.skillCore]}>
                {s}
              </Text>
            ))}
            {otherSkills.map((s, i) => (
              <Text key={`o-${i}`} style={styles.skill}>
                {s}
              </Text>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Heading>ACHIEVEMENTS</Heading>
          <Text style={styles.subhead}>Academic & CCAs</Text>
          <Bullet>HR Welfare Secretary, School of Design & Media Club</Bullet>
          <Bullet>Director List | AY2021-AY2022, Sem 2</Bullet>
          <Bullet>Top 25% | AY2022-AY2023</Bullet>
          <Bullet>Director List | AY2022-AY2023, Sem 2</Bullet>
          <Text style={styles.subhead}>Awards</Text>
          <Bullet>Silver Award, NYP x Kampung AWWA Wayfinding System</Bullet>
          <Bullet>1st, Kampung AWWA Video Challenge</Bullet>
          <Text style={styles.subhead}>Exhibitions & Showcases</Text>
          <Bullet>Precinct of Good — Featured in Singapore Art Week 2025</Bullet>
          <Bullet>Pandora Box — Interactive installation at NYP</Bullet>
          <Bullet>Wander's Enigma — NYP School of Design & Media Open House 2024</Bullet>
        </View>

        {/* Hobbies & Interests */}
        <View style={styles.section}>
          <Heading>HOBBIES & INTERESTS</Heading>
          <Text style={styles.subhead}>Volunteering</Text>
          <Bullet>Active member of Youth Corp Singapore, engaging in community service initiatives.</Bullet>
          <Bullet>Associate Volunteer at Halogen Singapore, mentoring teens and making a positive community impact.</Bullet>
          <Text style={styles.subhead}>Art & Design Enthusiast</Text>
          <Bullet>Regularly attends a range of exhibitions including art, science, and cultural events.</Bullet>
          <Text style={styles.subhead}>Socialise & Networking</Text>
          <Bullet>Participates in social events and activities, gaining insights into diverse perspectives.</Bullet>
          <Bullet>Engages in networking events to build connections and stay informed about industry trends.</Bullet>
        </View>
      </Page>
    </Document>
  )
}
