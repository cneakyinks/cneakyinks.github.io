export default function AchievementsSection() {
  const achievements = [
    {
      category: "Awards",
      items: ["Silver Award, NYP x Kampung AWWA Wayfinding System", "1st, Kampung AWWA Video Challenge"],
    },
    {
      category: "Academic & CCAs",
      items: ["HR Welfare Secretary, School of Design & Media Club"],
    },
    {
      category: "Exhibitions & Showcases",
      items: [
        "Precinct of Good - Featured in Singapore Art Week 2025 (2025)",
        "Pandora Box - Interactive installation at NYP (2024)",
        "Wander's Enigma - Immersive installation at NYP School of Design & Media Open House (2023)",
      ],
    },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400 pb-2">Achievements</h2>
      {achievements.map((achievement, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-cyan-400">{achievement.category}</h3>
          <ul className="list-disc pl-5">
            {achievement.items.map((item, i) => (
              <li key={i} className="text-gray-300 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
