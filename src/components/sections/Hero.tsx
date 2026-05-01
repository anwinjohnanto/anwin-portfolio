const CLIP = 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'

const STATS = [
  { num: '2+', label: 'Years Hands-on' },
  { num: '6', label: 'Engineers Led' },
  { num: '6+', label: 'Live Projects' },
  { num: '40%', label: 'Doc Time Saved' },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}
      className="max-lg:!grid-cols-1"
    >
      {/* Left column */}
      <div
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 60px 80px', position: 'relative', zIndex: 2 }}
        className="max-lg:!p-[130px_30px_40px] max-lg:min-h-[65vh]"
      >
        {/* Tag */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--cyan)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            opacity: 0,
            animation: 'fadeUp 0.8s forwards 0.2s',
          }}
        >
          <span style={{ width: '30px', height: '1px', background: 'var(--cyan)', display: 'inline-block', flexShrink: 0 }} />
          Software Eng → Tech Lead · Building systems that ship
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 5vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            color: 'var(--text)',
            opacity: 0,
            animation: 'fadeUp 0.9s forwards 0.4s',
            letterSpacing: '-0.02em',
          }}
        >
          ANWIN
          <br />
          <span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>Anto.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            marginTop: '20px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--muted)',
            lineHeight: 1.8,
            opacity: 0,
            animation: 'fadeUp 0.9s forwards 0.6s',
            letterSpacing: '0.03em',
          }}
        >
          <strong style={{ color: 'var(--text)' }}>Technical Team Lead</strong>
          {' '}·{' '}Full Stack Developer
          <br />
          Serverless &amp; Cloud Specialist{' '}·{' '}
          <strong style={{ color: 'var(--text)' }}>Thrissur / Bengaluru</strong>
          <br />
          Node.js · AWS · React · Keycloak · HubSpot
        </p>

        {/* CTAs */}
        <div
          style={{ marginTop: '40px', display: 'flex', gap: '16px', opacity: 0, animation: 'fadeUp 0.9s forwards 0.8s' }}
          className="max-[600px]:flex-col"
        >
          <a
            href="mailto:aanto6151@gmail.com"
            className="btn-primary"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '13px 28px',
              background: 'var(--cyan)',
              color: '#040c14',
              border: 'none',
              textDecoration: 'none',
              textTransform: 'uppercase',
              clipPath: CLIP,
              display: 'inline-block',
            }}
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="btn-secondary"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              padding: '13px 28px',
              background: 'transparent',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
          >
            View Work
          </a>
        </div>
      </div>

      {/* Right column */}
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
        className="max-lg:min-h-[260px] max-lg:!p-[30px]"
      >
        {/* Blueprint grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />

        {/* Stats grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', width: '100%', maxWidth: '420px', opacity: 0, animation: 'fadeIn 1.2s forwards 1s' }}
          className="max-lg:max-w-full"
        >
          {STATS.map(s => (
            <div
              key={s.label}
              className="stat-block"
              data-cursor-expand=""
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '32px 28px' }}
            >
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.8rem', fontWeight: 900, color: 'var(--cyan)', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', marginTop: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ position: 'absolute', bottom: '40px', left: '60px', display: 'flex', alignItems: 'center', gap: '12px', opacity: 0, animation: 'fadeIn 1s forwards 1.4s' }}
        className="max-lg:!left-[30px]"
      >
        <div style={{ width: '60px', height: '1px', background: 'var(--cyan)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'white', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
      </div>
    </section>
  )
}
