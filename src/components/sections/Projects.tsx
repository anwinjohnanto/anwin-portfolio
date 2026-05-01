import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROJECTS } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg)', padding: '100px 60px' }} className="max-lg:!px-[30px] max-lg:!py-20">
      <RevealOnScroll>
        <SectionLabel index="04" title="Projects" />
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
          Systems built.
          <br />
          <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>Not tutorials.</em>
        </h2>
      </RevealOnScroll>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}
        className="max-lg:!grid-cols-1"
      >
        {PROJECTS.map(project => (
          <RevealOnScroll key={project.num}>
            <div
              className="project-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                gridColumn: project.fullWidth ? '1 / -1' : undefined,
                height: '100%',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                {project.num}
              </div>

              <div
                className="project-arrow"
                style={{
                  position: 'absolute',
                  top: '28px',
                  right: '28px',
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  fontSize: '1rem',
                }}
              >
                ↗
              </div>

              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.25 }}>
                {project.title}
              </div>

              <div style={{ fontSize: '0.82rem', color: '#6a7d9e', lineHeight: 1.7, fontWeight: 300, flex: 1, fontFamily: 'var(--font-body)' }}>
                {project.desc}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="tech-chip"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      padding: '3px 8px',
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                      background: 'var(--bg)',
                      letterSpacing: '0.04em',
                      transition: 'all 0.2s',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
