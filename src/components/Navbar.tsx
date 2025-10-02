"use client";
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Terminal, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [showTerminal, setShowTerminal] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  useEffect(() => setMounted(true), [])
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowTerminal(false)
      }
    }
    
    if (showTerminal) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showTerminal])
  
  useEffect(() => {
    if (showTerminal) {
      setShowSuggestions(true)
    }
  }, [showTerminal])

  const isDark = (mounted ? resolvedTheme : theme) === 'dark'
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentPath = () => {
    if (pathname === '/') return '~'
    return `~${pathname}`
  }

  const folderStructure = {
    '/': [
      { name: 'about', description: 'Education & background' },
      { name: 'projects', description: 'My projects' },
      { name: 'experience', description: 'Work experience' },
      { name: 'contact', description: 'Get in touch' },
    ],
    '/projects': [
      { name: 'braille-buddy', description: 'Braille Buddy' },
      { name: 'spotify-wrapped-experience', description: 'Spotify Wrapped Experience' },
      { name: 'flight-delay-prediction', description: 'Flight Delay Prediction' },
      { name: 'atlanta-food-finder', description: 'Atlanta Food Finder' },
      { name: 'personal-website', description: 'Personal Website' },
    ],
    '/experience': [
      { name: 'teaching-assistant', description: 'Teaching Assistant' },
      { name: 'undergraduate-researcher', description: 'ACT Driving Simulator' },
    ]
  }

  const getAvailablePages = () => {
    // Determine current folder based on pathname
    if (pathname === '/') return folderStructure['/'] || []
    if (pathname === '/projects') return folderStructure['/projects'] || []
    if (pathname === '/experience') return folderStructure['/experience'] || []
    // If we're in edge files/folders (specific pages with no sub-items), return empty array
    if (pathname.startsWith('/projects/') || pathname.startsWith('/experience/') || pathname === '/about' || pathname === '/contact') return []
    return []
  }

  const handleTerminalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTerminalInput(value)
    
    // Show suggestions when typing / or when input is empty
    if (value === '/' || value === '') {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (command: string) => {
    if (command === '..') {
      // Handle going back
      if (pathname.startsWith('/projects/') || pathname.startsWith('/experience/')) {
        // From project/experience item back to folder
        const folder = pathname.startsWith('/projects/') ? '/projects' : '/experience'
        router.push(folder)
      } else if (pathname === '/projects' || pathname === '/experience' || pathname === '/about' || pathname === '/contact') {
        // From folder/page back to root
        router.push('/')
      }
    } else {
      // Handle navigation to item
      const newPath = pathname === '/' ? `/${command}` : `${pathname}/${command}`
      router.push(newPath.toLowerCase())
    }
    setTerminalInput('')
    setShowTerminal(false)
    setShowSuggestions(false)
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = terminalInput.trim()
    
    if (!command) {
      setTerminalInput('')
      return
    }

    // Handle .. (go back)
    if (command === '..') {
      if (pathname.startsWith('/projects/') || pathname.startsWith('/experience/')) {
        // From project/experience item back to folder
        const folder = pathname.startsWith('/projects/') ? '/projects' : '/experience'
        router.push(folder)
      } else if (pathname === '/projects' || pathname === '/experience' || pathname === '/about' || pathname === '/contact') {
        // From folder/page back to root
        router.push('/')
      }
    }
    // Handle absolute paths starting with / - only allow from root
    else if (command.startsWith('/')) {
      if (pathname === '/') {
        router.push(command.toLowerCase())
      } else {
        // Invalid: can't use absolute paths from subfolders
        setTerminalInput('')
        return
      }
    }
    // Handle relative navigation
    else {
      const newPath = pathname === '/' ? `/${command}` : `${pathname}/${command}`
      router.push(newPath.toLowerCase())
    }
    
    setTerminalInput('')
    setShowTerminal(false)
    setShowSuggestions(false)
  }

  const getVisibleNavItems = () => {
    // Always show main navigation - buttons break the terminal rules
    return [
      { href: '/', icon: Home, label: 'Home' },
      { href: '/about', icon: User, label: 'About' },
      { href: '/projects', icon: FolderOpen, label: 'Projects' },
      { href: '/experience', icon: Briefcase, label: 'Experience' },
      { href: '/contact', icon: Mail, label: 'Contact' },
    ]
  }

  return (
    <>
      {/* Terminal Modal */}
      {showTerminal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl mx-4 bg-black/90 border border-green-500/30 rounded-lg p-6 font-mono">
            <div className="text-green-400 mb-4">
              <div>pranav@portfolio:{getCurrentPath()}$</div>
            </div>
            <form onSubmit={handleTerminalSubmit} className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <input
                autoFocus
                value={terminalInput}
                onChange={handleTerminalInputChange}
                onBlur={() => {
                  setTimeout(() => {
                    setShowTerminal(false)
                    setShowSuggestions(false)
                  }, 150)
                }}
                className="flex-1 bg-transparent text-green-400 outline-none"
                placeholder="Type / to see available pages"
              />
            </form>
            
            {/* Suggestions */}
            {showSuggestions && (
              <div className="mt-4 border-t border-green-500/30 pt-4">
                <div className="text-green-400/80 text-sm mb-2">
                  {pathname === '/' ? 'Available folders:' : 'Available in this folder:'}
                </div>
                <div className="grid gap-1">
                  {pathname !== '/' && (
                    <button
                      onClick={() => handleSuggestionClick('..')}
                      className="text-left p-2 rounded hover:bg-green-500/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 group-hover:text-green-300">
                          ..
                        </span>
                        <span className="text-green-400/60 text-xs">
                          Go back
                        </span>
                      </div>
                    </button>
                  )}
                  {getAvailablePages().map((page) => (
                    <button
                      key={page.name}
                      onClick={() => handleSuggestionClick(page.name)}
                      className="text-left p-2 rounded hover:bg-green-500/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 group-hover:text-green-300">
                          {page.name}
                        </span>
                        <span className="text-green-400/60 text-xs">
                          {page.description}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {!showSuggestions && (
              <div className="text-green-400/60 text-sm mt-4">
                <div>Commands:</div>
                <div>• Type <span className="text-green-400">/</span> to see available {pathname === '/' ? 'folders' : 'items'}</div>
                <div>• Type <span className="text-green-400">..</span> to go back</div>
                {pathname === '/' && <div>• Use <span className="text-green-400">/folder</span> for absolute paths</div>}
                <div>• Press <span className="text-green-400">ESC</span> to close</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t glass backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Navigation Items */}
            <div className="flex items-center gap-2">
              {getVisibleNavItems().map(({ href, icon: Icon, label, active }) => (
                <Link
                  key={href}
                  href={href}
                  className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 ${
                    active || pathname === href ? 'text-primary bg-primary/5' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Icon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                  <span className="text-xs font-medium">{label}</span>
                </Link>
              ))}
            </div>

            {/* Terminal and Theme Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTerminal(true)}
                className="group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 opacity-70 hover:opacity-100"
              >
                <Terminal className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                <span className="text-xs font-medium">Terminal</span>
              </button>
              
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 opacity-70 hover:opacity-100"
              >
                {isDark ? <Sun className="h-5 w-5 transition-all duration-300 group-hover:scale-110" /> : <Moon className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />}
                <span className="text-xs font-medium">Theme</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add bottom padding to body content */}
      <div className="pb-20" />
    </>
  )
}
