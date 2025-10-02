"use client";
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

type Dot = { x: number; y: number; vx: number; vy: number; r: number }

export default function AnimatedDots() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    let width = 0
    let height = 0
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    let dots: Dot[] = []

    function resize() {
      if (!canvas || !ctx) return
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Number of dots scales with area but capped
      const density = 0.00012 // dots per px^2
      const target = Math.min(160, Math.max(40, Math.floor(width * height * density)))
      if (dots.length < target) {
        for (let i = dots.length; i < target; i++) {
          dots.push(randomDot())
        }
      } else if (dots.length > target) {
        dots = dots.slice(0, target)
      }
    }

    function randomDot(): Dot {
      const speed = 0.15 + Math.random() * 0.35
      const angle = Math.random() * Math.PI * 2
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 0.8 + Math.random() * 1.8,
      }
    }

    function step() {
      if (!ctx) return
      // background fade for trailing effect
      ctx.clearRect(0, 0, width, height)

      const isDark = resolvedTheme === 'dark'
      const dotColor = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
      const linkColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'

      // draw connections
      ctx.lineWidth = 1
      ctx.strokeStyle = linkColor
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist2 = dx * dx + dy * dy
          const max = 140
          if (dist2 < max * max) {
            const alpha = 1 - Math.sqrt(dist2) / max
            ctx.globalAlpha = Math.max(0.04, alpha * 0.25)
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      // draw dots
      ctx.fillStyle = dotColor
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // update positions
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        // wrap around edges for infinite plane feel
        if (d.x < -10) d.x = width + 10
        if (d.x > width + 10) d.x = -10
        if (d.y < -10) d.y = height + 10
        if (d.y > height + 10) d.y = -10
      }

      rafRef.current = requestAnimationFrame(step)
    }

    resize()
    if (!media.matches) {
      rafRef.current = requestAnimationFrame(step)
    } else {
      // Reduced-motion: single render (no animation)
      if (!ctx) return
      const isDark = resolvedTheme === 'dark'
      ctx.fillStyle = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
      for (let i = 0; i < 80; i++) {
        const d = randomDot()
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    const onChange = () => {
      // restart loop to apply new theme colors immediately
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (!media.matches) rafRef.current = requestAnimationFrame(step)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}

