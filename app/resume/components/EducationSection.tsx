export default function EducationSection() {
  const education = [
    {
      school: "Nanyang Polytechnic, Singapore",
      degree: "Diploma in Interaction Design (IXD)",
      date: "2022 - 2025",
      details: [
        "GPA: 3.69",
        "Awarded Diploma in IXD in 2025",
        "Director List | AY2021-AY2022, Sem 2",
        "Top 25% | AY2022-AY2023",
        "Director List | AY2022-AY2023, Sem 2",
      ],
    },
    {
      school: "Christ Church Secondary School",
      degree: "GCE 'O' Level",
      date: "2018 - 2021",
      details: [],
    },
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400 pb-2">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">{edu.school}</h3>
          <p className="text-gray-300">{edu.degree}</p>
          <p className="text-gray-400 mb-2">{edu.date}</p>
          {edu.details.length > 0 && (
            <ul className="list-disc pl-5">
              {edu.details.map((detail, i) => (
                <li key={i} className="text-gray-300 text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}
