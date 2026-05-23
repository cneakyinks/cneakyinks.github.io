import { Mail, Phone, Linkedin } from "lucide-react"

export default function ResumeHeader() {
  return (
    <header className="bg-cyan-600 text-white p-8 rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-5xl font-bold mb-2">Celeste Ng</h1>
          <h2 className="text-2xl mb-4">Interaction Designer</h2>
          <div className="flex flex-col gap-2">
            <a href="mailto:celestenmy23@gmail.com" className="flex items-center gap-2">
              <Mail size={18} />
              celestenmy23@gmail.com
            </a>
            <a href="tel:+6588273676" className="flex items-center gap-2">
              <Phone size={18} />
              +65 8827 3676
            </a>
            <a
              href="https://linkedin.com/in/crlestte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin size={18} />
              crlestte
            </a>
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-xl font-semibold mb-2">MY PROFILES</h3>
          <p>Celeste Ng</p>
          <p>Celeste Ng</p>
          <p>Celeste Ng</p>
        </div>
      </div>
    </header>
  )
}
