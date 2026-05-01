import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { CONTACT_LINKS, OPEN_TO } from '@/lib/data'

const LOC_INFO = [
  '📍 Based in Thrissur, Kerala',
  '🏙 Open to relocation → Bengaluru',
  '🌐 Pan India / Remote preferred',
  '🎓 B.Tech Mechanical Engineering — APJ Abdul Kalam Tech University',
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: 'var(--bg)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minHeight: '60vh', padding: 0 }}
      className="max-lg:!grid-cols-1"
    >
      {/* Left */}
      <div
        style={{ padding: '100px 60px', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        className="max-lg:!border-r-0 max-lg:!border-b max-lg:!border-[var(--border)] max-lg:!p-[60px_30px]"
      >
        <SectionLabel index="06" title="Contact" />

        <RevealOnScroll>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '24px',
            }}
          >
            Let&apos;s build
            <br />
            something{' '}
            <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>real.</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px', marginBottom: '40px', fontFamily: 'var(--font-body)' }}>
            I&apos;m open to Technical Lead, Senior Engineer, and Cloud/Serverless roles across Bengaluru, remote, and Pan India. Always happy to talk about interesting problems.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {CONTACT_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', width: '60px', flexShrink: 0 }}>
                  {link.label}
                </span>
                <span className="cl-value" style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                  {link.value}
                </span>
                <span className="cl-arrow" style={{ marginLeft: 'auto', color: 'var(--dim)', fontSize: '1.1rem' }}>
                  →
                </span>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Right */}
      <div
        style={{ padding: '100px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--surface)' }}
        className="max-lg:!p-[60px_30px]"
      >
        <RevealOnScroll>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--cyan)',
              letterSpacing: '0.08em',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--cyan)',
                animation: 'pulse 2s ease-in-out infinite',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Available for Opportunities
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Open to
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {OPEN_TO.map(item => (
                <li
                  key={item}
                  style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, fontFamily: 'var(--font-body)' }}
                >
                  <span style={{ width: '4px', height: '4px', background: 'var(--amber)', borderRadius: '50%', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.06em', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {LOC_INFO.map(line => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
