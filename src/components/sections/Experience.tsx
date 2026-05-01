'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { EXPERIENCE } from '@/lib/data'

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="experience"
      style={{ background: 'var(--bg2)', padding: '100px 60px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 0 }}
      className="max-lg:!grid-cols-1 max-lg:!px-[30px] max-lg:!py-20"
    >
      {/* Nav */}
      <div
        style={{ position: 'sticky', top: '100px', height: 'fit-content', borderRight: '1px solid var(--border)', paddingRight: '40px', paddingTop: '20px' }}
        className="max-lg:!static max-lg:!border-r-0 max-lg:!border-b max-lg:!border-[var(--border)] max-lg:!pr-0 max-lg:!pt-0 max-lg:!pb-5 max-lg:!mb-10 max-lg:flex max-lg:flex-wrap max-lg:gap-0.5"
      >
        <div className="w-full mb-6">
          <SectionLabel index="03" title="Experience" />
        </div>

        {EXPERIENCE.map((role, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`exp-tab-btn${active === i ? ' exp-tab-active' : ''} max-lg:!w-auto max-lg:!border max-lg:!border-[var(--border)] max-lg:!p-[10px_14px]`}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none',
              padding: '14px 0',
              ...(active === i
                ? { borderLeft: '2px solid var(--cyan)', paddingLeft: '12px', marginLeft: '-2px' }
                : {}),
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: '0.85rem',
                color: active === i ? 'var(--cyan)' : 'var(--muted)',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-body)',
                marginBottom: '3px',
              }}
            >
              {role.company}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: active === i ? 'var(--cyan)' : 'var(--dim)',
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
            >
              {role.title} · {role.period}
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ paddingLeft: '60px' }} className="max-lg:!pl-0">
        {EXPERIENCE.map((role, i) => (
          <div key={i} style={{ display: active === i ? 'block' : 'none' }}>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                {role.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.06em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ color: 'var(--cyan)' }}>{role.company}</span>
                <span style={{ color: 'var(--dim)' }}>·</span>
                <span>{role.location}</span>
                <span style={{ color: 'var(--dim)' }}>·</span>
                <span>{role.period}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {role.bullets.map((bullet, j) => (
                <li key={j} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '16px', alignItems: 'start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'var(--amber)',
                      background: 'var(--amber-dim)',
                      padding: '3px 8px',
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                      marginTop: '1px',
                    }}
                  >
                    {bullet.label}
                  </span>
                  <span
                    style={{ fontSize: '0.88rem', color: '#8fa0c0', lineHeight: 1.7, fontWeight: 300, fontFamily: 'var(--font-body)' }}
                    dangerouslySetInnerHTML={{ __html: bullet.text }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
