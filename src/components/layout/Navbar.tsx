'use client'

import { useEffect, useState } from 'react'

const LINKS = ['about', 'skills', 'experience', 'projects', 'contact'] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 60px',
        background: scrolled
          ? 'rgba(4,6,13,0.92)'
          : 'linear-gradient(to bottom, rgba(4,6,13,0.95), transparent)',
        backdropFilter: 'blur(2px)',
        transition: 'background 0.3s',
      }}
      className="max-lg:!px-[30px]"
    >
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--cyan)',
          letterSpacing: '0.08em',
          textDecoration: 'none',
        }}
      >
        AA / Portfolio
      </a>
      <ul
        style={{ display: 'flex', gap: '36px', listStyle: 'none' }}
        className="max-[600px]:hidden"
      >
        {LINKS.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
