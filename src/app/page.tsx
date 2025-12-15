"use client"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { ArrowRight, Github, Mail, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [current, setCurrent] = useState(0)
  const images = ["/profile.jpg", "/prof.PNG"]

  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="container pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center justify-items-center">
            <Reveal className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Hello, I'm</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl gradient-text">Pranav Eega</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose leading-relaxed">
                Computer Science student at Georgia Tech passionate about building innovative and scalable software solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="/projects" className="btn btn-primary h-10 px-5 hover-lift hover-glow">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="/contact" className="btn btn-outline h-10 px-5 hover-lift">Contact</a>
                <a href="https://github.com/" className="btn btn-outline h-10 px-3 hover-lift" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
                <a href="www.linkedin.com/in/pranav-eega" className="btn btn-outline h-10 px-3 hover-lift" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:eegapr1@gmail.com" className="btn btn-outline h-10 px-3 hover-lift">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Profile image carousel (cross-fade inside circle) */}
            <Reveal delayMs={150} className="relative">
              <div className="relative h-56 md:h-72 w-56 md:w-72 mx-auto overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Pranav Eega ${index}`}
                    className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${
                      index === current ? "opacity-100" : "opacity-0"
                    } ${index === 0 ? "-rotate-90" : "scale-110"}`}
                  />
                ))}

                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mt-2 text-center">(click arrows to switch photos)</p>
            </Reveal>
          </div>
        </section>

        {/* Navigation explainer card (centered) */}
        <section className="container pb-12">
          <div className="flex justify-center">
            <Reveal delayMs={120}>
              <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl hover-glow hover-lift w-full">
                <div className="text-center mb-8">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white animate-pulse mb-4 mx-auto">
                    <span className="font-bold text-xl sm:text-2xl">/</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Quick Navigation</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                    Press <span className="font-medium">/</span> anywhere to open the command-style path bar. Type paths like <code className="bg-muted/10 px-1 rounded">/projects</code> or use <code className="bg-muted/10 px-1 rounded">..</code> to navigate.
                  </p>
                  <div className="mt-4 flex justify-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm">
                      <kbd className="bg-card px-1 rounded">/</kbd> Quick open
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-muted/5 text-xs sm:text-sm">
                      <kbd className="bg-card px-1 rounded">..</kbd> Parent folder
                    </span>
                  </div>
                </div>

                <div className="w-full aspect-video rounded-lg overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload="auto"
                    className="w-full h-full object-cover"
                    src="/tutorial.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ...existing rest of page... */}
      </main>
      <Footer />
    </div>
  )
}
