"use client";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

const experiences = {
  'frontend-engineer': {
    title: 'Frontend Engineer · Awesome Co',
    period: '2023 — Present',
    content:
      'Built and maintained a scalable design system in React/TypeScript, improved performance via code-splitting and memoization, and collaborated closely with design/PM to deliver UI at velocity.',
  },
  'software-engineer': {
    title: 'Software Engineer · Startup Inc',
    period: '2021 — 2023',
    content:
      'Owned features end-to-end across Node APIs, Postgres, and Next.js frontend. Automated CI/CD with preview deployments and wrote load tests to ensure reliability.',
  },
  'teaching-assistant': {
    title: 'Teaching Assistant · Intro to Artificial Intelligence',
    period: '2025 — Present',
    image: '/AI_mural_Canterbury_1000_553_70.jpeg',
    content: (
      <>
        <p className="text-lg leading-relaxed">
          Assisted in teaching a 3-credit undergraduate AI survey course. The course covered core AI topics and included hands-on Python assignments, projects, and exams.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold mb-2">Course topics</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Search & Optimization — BFS, UCS, A*, local search, CSPs</li>
              <li>Uncertainty & Probabilistic Reasoning — Bayes' Rule, Bayesian networks, Markov models</li>
              <li>Machine Learning — linear/logistic regression, gradient descent, MLPs, CNNs, transformers</li>
              <li>Planning & Decision‑Making — MDPs, reinforcement learning, MCTS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Responsibilities</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Held weekly office hours and supported students one-on-one on assignments and projects.</li>
              <li>Designed and graded programming assignments and exams with the professor and head TA.</li>
              <li>Implemented automated grading helpers and test harnesses to speed up grading.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Impact</h4>
          <p className="text-sm text-muted-foreground">
            Improved student outcomes through targeted support and scalable grading workflows; contributed to project/exam design emphasizing practical understanding.
          </p>
        </div>
      </>
    ),
  },
  'undergraduate-researcher': {
    title: 'Undergraduate Researcher · ACT Driving Simulator',
    period: '2024 — Present',
    image: '/ACT.jpeg',
    content: (
      <>
        <p className="text-xl leading-relaxed mb-6">
          The ACT (Autonomous and Connected Transportation) Driving Simulator Team tackles various challenges stemming from the rise of autonomy, connectivity, and technology-driven transportation modes.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold mb-4">Research Focus</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>Leveraging driving simulator environment for sustainable travel solutions</li>
              <li>Analytical modeling for smart and connected communities (SCCs)</li>
              <li>Development of deployment tools for autonomous transportation</li>
              <li>Behavioral intervention testing in real-world environments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Key Projects</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
              <li>TranSACT Mobile App development for sustainable travel promotion</li>
              <li>Field experiments in Peachtree Corners city environment</li>
              <li>Testing behavioral constraints to reduce global footprint</li>
              <li>Data analysis and user behavior pattern recognition</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Impact & Results</h4>
          <p className="text-base text-muted-foreground leading-relaxed">
            Contributed to groundbreaking research in autonomous and connected transportation systems. The work directly impacts the development of sustainable transportation solutions and provides valuable insights into user behavior patterns that influence travel decisions and environmental impact reduction strategies.
          </p>
        </div>
      </>
    ),
  },
} as const

export default function ExperienceDetail({ params }: { params: { slug: keyof typeof experiences } }) {
  const data = experiences[params.slug]
  if (!data) return notFound()
  const router = useRouter()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') router.push('/experience')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 pt-16 md:pt-24 pb-24">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 -z-10 bg-black/60 dark:bg-black/70"
        />

        <motion.article
          layoutId={`exp-${params.slug}`}
          initial={{ opacity: 0.6, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 0.97 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-xl border bg-card p-6 md:p-8 shadow-lg"
        >
          {'image' in data && data.image && (
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
            <Link href="/experience" className="btn btn-outline h-10 px-5">
              Close
            </Link>
          </div>
        </motion.article>
      </main>
      <Footer />
    </div>
  )
}
