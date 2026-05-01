'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', onMove)

    let rafId: number
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      ringEl.style.left = `${ring.current.x}px`
      ringEl.style.top = `${ring.current.y}px`
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => {
      dot.style.width = '14px'
      dot.style.height = '14px'
      ringEl.style.width = '52px'
      ringEl.style.height = '52px'
      ringEl.style.borderColor = 'var(--cyan)'
    }
    const onLeave = () => {
      dot.style.width = '8px'
      dot.style.height = '8px'
      ringEl.style.width = '36px'
      ringEl.style.height = '36px'
      ringEl.style.borderColor = 'rgba(6,182,212,0.4)'
    }

    const targets = document.querySelectorAll<Element>('a, button, [data-cursor-expand]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: 'var(--cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          border: '1px solid rgba(6,182,212,0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
        }}
      />
    </>
  )
}
