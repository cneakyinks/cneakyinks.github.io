export default function HobbiesSection() {
  const hobbies = [
    {
      title: "Volunteering",
      details: [
        "Active member of Youth Corp Singapore, engaging in community service initiatives.",
        "Associate Volunteer at Halogen Singapore, mentoring teens and making a positive community impact.",
        "Gains fulfillment from contributing to societal causes and interacting with diverse groups.",
      ],
    },
    {
      title: "Art & Design Enthusiast",
      details: [
        "Regularly attends a range of exhibitions including art, science, and cultural events.",
        "I draw inspiration from various creative and innovative displays.",
      ],
    },
    {
      title: "Socialise & Networking",
      details: [
        "Participates in social events and activities, gaining insights into diverse perspectives.",
        "Engages in networking events to build connections - helps me to stay informed about industry trends & opportunities.",
      ],
    },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400 pb-2">Hobbies & Interests</h2>
      {hobbies.map((hobby, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-cyan-400">{hobby.title}</h3>
          <ul className="list-disc pl-5">
            {hobby.details.map((detail, i) => (
              <li key={i} className="text-gray-300 text-sm">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
