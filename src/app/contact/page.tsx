"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { Linkedin, Mail, Download, ExternalLink, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex-1 pt-20 md:pt-28 pb-24">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mb-4">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
          </div>
        </Reveal>

        {/* Contact Cards Grid */}
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {/* Email Card */}
            <a
              href="mailto:eegapr1@gmail.com"
              className="group glass-card p-8 rounded-xl hover-lift hover-glow transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Drop me a line anytime</p>
                <span className="text-primary font-medium group-hover:underline">
                  eegapr1@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/pranav-eega"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-xl hover-lift hover-glow transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground mb-4">Let's connect professionally</p>
                <span className="text-blue-500 font-medium group-hover:underline flex items-center gap-2">
                  @pranav-eega
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </a>

            {/* Resume Card */}
            <a
              href="/Pranav_Eega_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-8 rounded-xl hover-lift hover-glow transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Download className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Resume</h3>
                <p className="text-muted-foreground mb-4">View my full experience</p>
                <span className="text-green-500 font-medium group-hover:underline flex items-center gap-2">
                  Download PDF
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </a>
          </div>
        </Reveal>

        {/* Resume Preview Section */}
        <Reveal>
          <div className="glass-card p-8 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Resume Preview</h2>
                <p className="text-muted-foreground">
                  Get a quick overview of my experience and skills
                </p>
              </div>
              <div className="flex gap-4 mt-6 md:mt-0">
                <a
                  href="/Pranav_Eega_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3 inline-flex items-center gap-3 text-base font-medium hover-lift hover-glow transition-all duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  Open Full View
                </a>
                <a
                  href="/Pranav_Eega_Resume.pdf"
                  download
                  className="btn btn-outline px-6 py-3 inline-flex items-center gap-3 text-base font-medium hover-lift transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                </a>
              </div>
            </div>
            
            {/* PDF Embed with better styling */}
            <div className="relative rounded-lg overflow-hidden border border-border/50 bg-muted/20">
              <object
                data="/Pranav_Eega_Resume.pdf"
                type="application/pdf"
                className="w-full h-[80vh]"
              >
                <div className="flex flex-col items-center justify-center h-[80vh] text-center p-8">
                  <Download className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">PDF Preview Not Available</h3>
                  <p className="text-muted-foreground mb-6">
                    Your browser doesn't support PDF preview. Click below to view or download.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="/Pranav_Eega_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open PDF
                    </a>
                    <a
                      href="/Pranav_Eega_Resume.pdf"
                      download
                      className="btn btn-outline inline-flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </Reveal>


      </main>
      <Footer />
    </div>
  )
}

