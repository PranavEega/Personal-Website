"use client";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Link from 'next/link'

export default function ExperiencePage() {
  const cards = [
    {
      slug: 'teaching-assistant',
      role: 'Teaching Assistant',
      company: 'Intro to Artificial Intelligence (Undergraduate)',
      period: '2024 — Present',
      blurb: 'Assisted in teaching a 3-credit AI survey course; held office hours and supported assignments & projects.',
      image: '/AI_mural_Canterbury_1000_553_70.jpeg'
    },
    {
      slug: 'undergraduate-researcher',
      role: 'Undergraduate Researcher',
      company: 'ACT Driving Simulator',
      period: '2022 — 2024',
      blurb: 'Worked on the ACT Driving Simulator research project — sensor integration, simulation scenarios, and data pipelines.',
      image: '/ACT.jpeg'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 pt-20 md:pt-28 pb-24">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Experience</h1>
        </Reveal>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {cards.map((exp, idx) => (
            <Reveal key={exp.slug} delayMs={idx * 80}>
              <Link href={`/experience/${exp.slug}`} className="block">
                <article className="group rounded-2xl glass-card overflow-hidden hover-lift hover-glow transition-all">
                  <div className="p-6 md:p-8">
                    {/* top image area */}
                    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-700/40 h-44 md:h-52 w-full">
                      <img
                        src={exp.image}
                        alt={`${exp.role} — ${exp.company}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* content */}
                    <div className="mt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">{exp.role}</h3>
                          <div className="text-sm text-foreground/80 mt-1">{exp.company}</div>
                        </div>
                        <div className="text-sm text-foreground/80 whitespace-nowrap">{exp.period}</div>
                      </div>
                      <p className="mt-3 text-sm text-foreground/80">{exp.blurb}</p>

                      <div className="mt-4 flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 rounded-full border bg-muted/5 text-foreground/80">{exp.company}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

