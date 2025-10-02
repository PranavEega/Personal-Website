"use client";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

const projects = {
  'braille-buddy': {
    title: 'Braille Buddy',
    period: '2024',
    image: '/braille.webp',
    content: (
      <>
        <p className="text-xl leading-relaxed mb-6">
          Engineered an accessibility-focused app to support real-time communication for Deafblind users, featuring innovative haptic feedback and AI-powered environmental analysis.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Features</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Haptic Braille feedback for tactile communication</li>
              <li>Custom Braille keyboard for two-way text translation</li>
              <li>AI-based image analysis for environmental descriptions</li>
              <li>Real-time communication support</li>
              <li>Accessibility-first interface design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Technical Implementation</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Next.js & TypeScript for robust development</li>
              <li>Web Vibration API for haptic feedback</li>
              <li>Computer vision AI for image analysis</li>
              <li>Custom Braille input/output system</li>
              <li>WCAG compliance and accessibility standards</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Impact & Results</h4>
          <p className="text-base text-muted-foreground leading-relaxed">
            Successfully created a comprehensive assistive technology solution that enhances daily navigation and independence for Deafblind users. The app combines innovative haptic technology with AI-powered environmental awareness, providing users with unprecedented access to both digital communication and physical world information.
          </p>
        </div>
      </>
    ),
  },
  'atlanta-food-finder': {
    title: 'Atlanta Food Finder',
    period: '2024',
    image: '/atlanta.jpg',
    content: (
      <>
        <p className="text-xl leading-relaxed mb-6">
          Designed a location-based restaurant discovery app for Atlanta, tailored to user preferences and built with an Agile, Scrum-oriented team approach.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Features</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Location-based restaurant discovery system</li>
              <li>Dynamic filters for personalized recommendations</li>
              <li>Real-time Google Maps API integration</li>
              <li>User preference-based matching algorithm</li>
              <li>Mobile-first responsive design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Development Approach</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Agile Scrum methodology for rapid iteration</li>
              <li>Google Maps API for real-time visualization</li>
              <li>React & Node.js full-stack development</li>
              <li>Performance optimization for mobile devices</li>
              <li>User-centered design principles</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Impact & Results</h4>
          <p className="text-base text-muted-foreground leading-relaxed">
            Created a comprehensive restaurant discovery platform specifically tailored for Atlanta's diverse culinary scene. The app successfully combines location intelligence with user preferences to deliver highly relevant restaurant recommendations, enhancing the dining experience for both locals and visitors.
          </p>
        </div>
      </>
    ),
  },
  'spotify-wrapped-experience': {
    title: 'Spotify Wrapped Experience',
    period: '2024',
    image: '/spotify.png',
    content: (
      <>
        <p className="text-xl leading-relaxed mb-6">
          Developed an interactive Spotify Wrapped web app in a Scrum-based team, leveraging the Spotify API to deliver personalized music insights.
        </p>

        <div className="mb-8">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Uysy-PvJLXc"
              title="Spotify Wrapped Experience Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Album guessing game with interactive gameplay</li>
              <li>AI-driven music style categorization</li>
              <li>Multiple responsive themes and designs</li>
              <li>Social sharing of personalized Wrapped results</li>
              <li>Public viewing for connected user experience</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies & Approach</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>React & TypeScript for robust development</li>
              <li>Spotify Web API integration</li>
              <li>Scrum-based agile development methodology</li>
              <li>Responsive design with multiple theme options</li>
              <li>Real-time data visualization</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Impact & Results</h4>
          <p className="text-base text-muted-foreground leading-relaxed">
            Successfully delivered a comprehensive music discovery platform that combines entertainment with personalized insights. The app features gamification elements, AI-powered categorization, and social connectivity, creating an engaging user experience that goes beyond traditional music analytics.
          </p>
        </div>
      </>
    ),
  },
  'personal-website': {
    title: 'Personal Website',
    period: '2025',
    image: '/p.png',
    content: (
      <>
        <p className="text-xl leading-relaxed mb-6">
          A modern, performant portfolio website built from scratch using cutting-edge web technologies. Features a unique terminal-style navigation system and comprehensive project showcase.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Features</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Interactive terminal navigation with folder structure</li>
              <li>Dynamic theme switching (dark/light mode)</li>
              <li>Glass-morphism design with backdrop blur effects</li>
              <li>Responsive layout optimized for all devices</li>
              <li>Smooth page transitions and micro-animations</li>
              <li>Accessibility-first design principles</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tech Stack & Architecture</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Next.js 14 with App Router for optimal performance</li>
              <li>TypeScript for type safety and developer experience</li>
              <li>Tailwind CSS with custom design system</li>
              <li>Framer Motion for smooth animations</li>
              <li>next-themes for seamless theme management</li>
              <li>Lucide React for consistent iconography</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Performance Optimizations</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Server-side rendering with Next.js App Router</li>
              <li>Image optimization with next/image</li>
              <li>Code splitting and lazy loading</li>
              <li>Custom CSS variables for theme switching</li>
              <li>Optimized bundle size and loading performance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Unique Implementations</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Custom terminal emulator with command parsing</li>
              <li>Folder-based navigation system with ESC key support</li>
              <li>Dynamic route handling for project/experience pages</li>
              <li>Glass-morphism effects with CSS backdrop-filter</li>
              <li>Responsive bottom navigation with hover animations</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Impact & Results</h4>
          <p className="text-base text-muted-foreground leading-relaxed">
            Successfully created a distinctive portfolio that stands out through innovative navigation design and technical excellence. The terminal-style interface provides an engaging user experience while maintaining professional presentation. Built with modern web standards, the site achieves excellent performance scores and accessibility compliance, effectively showcasing both creative and technical capabilities.
          </p>
        </div>
      </>
    ),
  },
  'flight-delay-prediction': {
    title: 'Flight Delay Prediction',
    period: '2024',
    image: '/bdbi.jpeg',
    content: (
      <>
        <p className="text-lg leading-relaxed">
          A machine learning project that predicts flight delays using historical flight data, weather patterns, and carrier information.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold mb-2">Approach</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Supervised learning with historical flight data</li>
              <li>Feature engineering from weather and carrier data</li>
              <li>Model comparison and optimization</li>
              <li>Performance evaluation and validation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Technologies</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Python & Scikit-learn</li>
              <li>Pandas for data processing</li>
              <li>Matplotlib for visualization</li>
              <li>Jupyter Notebooks</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Results</h4>
          <p className="text-sm text-muted-foreground">
            Achieved significant accuracy in predicting flight delays, providing valuable insights for travelers and airlines.
          </p>
        </div>
      </>
    ),
  },
} as const

export default function ProjectDetail({ params }: { params: { slug: keyof typeof projects } }) {
  const data = projects[params.slug]
  if (!data) return notFound()
  const router = useRouter()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') router.push('/projects')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 pt-16 md:pt-24 pb-24">
        {/* Overlay */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 -z-10 bg-black/60 dark:bg-black/70" />

        <motion.article
          layoutId={`proj-${params.slug}`}
          initial={{ opacity: 0.6, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 0.97 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-xl border bg-card p-6 md:p-8 shadow-lg"
        >
          {data.image && (
            <div className="rounded-lg overflow-hidden mb-6">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              {data.title}
            </h1>
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              {data.period}
            </div>
          </div>

          <div className="mt-4 prose prose-invert max-w-none">
            {typeof data.content === 'string' ? (
              <p className="text-muted-foreground">{data.content}</p>
            ) : (
              data.content
            )}
          </div>
          <div className="mt-6">
            <Link href="/projects" className="btn btn-outline h-10 px-5">Close</Link>
          </div>
        </motion.article>
      </main>
      <Footer />
    </div>
  )
}

