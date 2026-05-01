import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { SKILLS } from '@/lib/data'

const ICONS: Record<string, React.ReactNode> = {
  backend: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width={14} height={14} stroke="currentColor">
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  ),
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width={14} height={14} stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h4" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width={14} height={14} stroke="currentColor">
      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 003 15z" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width={14} height={14} stroke="currentColor">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width={14} height={14} stroke="currentColor">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width={14} height={14} stroke="currentColor">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg)', padding: '100px 60px' }} className="max-lg:!px-[30px] max-lg:!py-20">
      <RevealOnScroll>
        <SectionLabel index="02" title="Skills" />
      </RevealOnScroll>

      <RevealOnScroll>
        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '60px',
          }}
        >
          The full stack,
          <br />
          <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>owned end-to-end.</em>
        </h2>
      </RevealOnScroll>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}
        className="max-lg:!grid-cols-2 max-[600px]:!grid-cols-1"
      >
        {SKILLS.map((group, i) => (
          <RevealOnScroll key={group.name}>
            <div
              className="skill-group"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '28px 26px', height: '100%' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--cyan)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--cyan)' }}>{ICONS[group.iconKey]}</span>
                {group.name}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.tags.map(tag => (
                  <span
                    key={tag}
                    className="skill-tag"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      padding: '4px 9px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: '#7a8fb0',
                      letterSpacing: '0.04em',
                      transition: 'all 0.2s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="ghost-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
