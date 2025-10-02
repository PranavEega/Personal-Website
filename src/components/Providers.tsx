"use client";
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import AnimatedDots from '@/components/AnimatedDots'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatedDots />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </ThemeProvider>
  )
}

