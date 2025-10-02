"use client";
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delayMs?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export default function Reveal({ children, delayMs = 0, as = 'div', className }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if ('IntersectionObserver' in window === false) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs)
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [delayMs])

  const Component = as as any
  return (
    <Component
      ref={ref as any}
      className={[
        'transition-all duration-700 will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className || ''
      ].join(' ')}
    >
      {children}
    </Component>
  )
}

