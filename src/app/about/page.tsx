import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

type Course = {
  title: string
  code: string
  description: string
}

const courses: Course[] = [
  { title: 'Machine Learning', code: 'CS 4641', description: 'Hands-on introduction to learning from data: supervised/unsupervised methods, search over model spaces, probabilistic reasoning, and a taste of reinforcement learning.' },
  { title: 'Intro to Artificial Intelligence', code: 'CS 3600', description: 'Core AI toolkit: informed search, uncertainty with probabilistic models, and foundational ML concepts applied to decision-making problems.' },
  { title: 'Linear Algebra', code: 'MATH 1554', description: 'Vectors, matrices, eigen-stuff, and decompositions that power modern graphics and machine learning pipelines.' },
  { title: 'Intro to Probability and Statistics', code: 'MATH 3215', description: 'Random variables to inference: modeling uncertainty, drawing conclusions from data, and quantifying confidence.' },
  { title: 'Design and Analysis of Algorithms', code: 'CS 3510', description: 'Algorithmic thinking at scale: graphs, greedy vs dynamic programming, reductions, and NP-completeness intuition.' },
  { title: 'Objects and Design', code: 'CS 2340', description: 'Clean OO design with patterns, iterative teamwork, and modeling systems with pragmatic UML.' },
  { title: 'Computing, Society, and Professionalism', code: 'CS 3001', description: 'Ethics in practice: responsibilities of computing professionals and the broader impact of technology on society.' },
  { title: 'Systems and Networks', code: 'CS 2200', description: 'From CPU to packets: architecture, memory, I/O and how bits move reliably across networks.' },
  { title: 'Computer Organization', code: 'CS 2110', description: 'C and assembly fundamentals, stack frames, and what actually happens beneath high-level code.' },
  { title: 'Applied Combinatorics', code: 'MATH 3012', description: 'Counting cleverly: graphs, recurrences, and discrete optimization for real-world constraints.' },
  { title: 'Discrete Mathematics', code: 'CS 2050', description: 'Proofs, logic, combinatorics, and graph theory—the discrete backbone of computer science.' },
  { title: 'Data Structures', code: 'CS 1332', description: 'Designing efficient collections: lists, trees, heaps, and when each shines for performance.' },
  { title: 'Intro to Object-Oriented Programming', code: 'CS 1331', description: 'Java-based tour of OOP: encapsulation, inheritance, and building maintainable software from day one.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 pt-20 md:pt-28 pb-24">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Education</h1>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-6 rounded-xl glass-card p-6 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="text-lg font-medium">Georgia Institute of Technology</div>
                <div className="text-sm text-muted-foreground">Atlanta, GA</div>
              </div>
              <div className="text-sm text-muted-foreground whitespace-nowrap">Aug 2024 — May 2027 · GPA: 4.0/4.0</div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Relevant Coursework</h2>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {courses.map((c, idx) => (
            <Reveal key={c.code} delayMs={140 + idx * 40}>
              <article className="group rounded-xl glass-card p-5 hover-lift hover-glow">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <span className="text-xs rounded-md border px-2 py-0.5 text-muted-foreground">{c.code}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

