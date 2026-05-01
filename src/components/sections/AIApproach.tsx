import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { AI_CARDS } from '@/lib/data'

const BADGE_STYLES = {
  manual: {
    background: 'var(--cyan-dim)',
    color: 'var(--cyan)',
    border: '1px solid rgba(6,182,212,0.2)',
    label: 'Manually Built',
  },
  hybrid: {
    background: 'var(--amber-dim)',
    color: 'var(--amber)',
    border: '1px solid rgba(245,158,11,0.2)',
    label: 'Human-Led, AI-Assisted',
  },
  agentic: {
    background: 'rgba(16,185,129,0.1)',
    color: 'var(--green)',
    border: '1px solid rgba(16,185,129,0.2)',
    label: 'AI-Agentic (Directed)',
  },
}

export default function AIApproach() {
  return (
    <section id="ai-approach" style={{ background: 'var(--bg2)', padding: '100px 60px' }} className="max-lg:!px-[30px] max-lg:!py-20">
      <RevealOnScroll>
        <SectionLabel index="05" title="Spectrum" />
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
          Manual craft.
          <br />
          AI velocity.
          <br />
          <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>Full spectrum.</em>
        </h2>
      </RevealOnScroll>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}
        className="max-lg:!grid-cols-2 max-[600px]:!grid-cols-1"
      >
        {AI_CARDS.map(card => {
          const badge = BADGE_STYLES[card.type]
          return (
            <RevealOnScroll key={card.type}>
              <div
                className="ai-card"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '32px 28px', height: '100%' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    padding: '4px 10px',
                    display: 'inline-block',
                    background: badge.background,
                    color: badge.color,
                    border: badge.border,
                  }}
                >
                  {badge.label}
                </div>

                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '12px', fontFamily: 'var(--font-body)' }}>
                  {card.title}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {card.items.map(item => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--muted)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      <span style={{ color: 'var(--amber)', flexShrink: 0, marginTop: '-1px' }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          )
        })}
      </div>
    </section>
  )
}
