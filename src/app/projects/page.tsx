"use client";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      slug: 'braille-buddy',
      title: 'Braille Buddy',
      blurb: 'An assistive app to help learn braille through interactive exercises.',
      image: '/braille.webp'
    },
    {
      slug: 'spotify-wrapped-experience',
      title: 'Spotify Wrapped Experience',
      blurb: 'A playful interactive visualization recreating the Wrapped experience.',
      image: '/spotify.png'
    },
    {
      slug: 'flight-delay-prediction',
      title: 'Flight Delay Prediction',
      blurb: 'Predicting flight delays using historical data and ML models.',
      image: '/bdbi.jpeg'
    },
    {
      slug: 'atlanta-food-finder',
      title: 'Atlanta Food Finder',
      blurb: 'Location-based restaurant discovery app with smart filters and maps.',
      image: '/atlanta.jpg'
    },
    {
      slug: 'personal-website',
      title: 'Personal Website',
      blurb: 'This portfolio site built with Next.js, featuring terminal navigation.',
      image: '/p.png'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 pt-20 md:pt-28 pb-24">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
        </Reveal>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delayMs={idx * 80}>
              <Link href={`/projects/${p.slug}`} className="block">
                <article className="group rounded-2xl glass-card overflow-hidden hover-lift hover-glow transition-all">
                  <div className="p-6 md:p-8">
                    <div className="rounded-xl overflow-hidden h-44 md:h-52 w-full bg-muted/5">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>

                    <div className="mt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">{p.title}</h3>
                          <p className="text-sm text-foreground/80 mt-1">{p.blurb}</p>
                        </div>
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

