import SectionLabel from '@/components/ui/SectionLabel'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import JourneyStrip from '@/components/ui/JourneyStrip'

const META = [
  { key: 'Location', val: 'Thrissur / Bengaluru' },
  { key: 'Email', val: 'aanto6151@gmail.com' },
  { key: 'LinkedIn', val: 'anwin-anto' },
  { key: 'Phone', val: '+91 9400087537' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ background: 'var(--bg2)', padding: '100px 60px', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }}
      className="max-lg:!grid-cols-1 max-lg:!gap-10 max-lg:!px-[30px] max-lg:!py-20"
    >
      {/* Left — sticky */}
      <div style={{ position: 'sticky', top: '100px' }} className="max-lg:!static">
        <SectionLabel index="01" title="About" />

        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '32px',
          }}
        >
          Systems thinking,
          <br />
          engineered
          <br />
          <em style={{ color: 'var(--amber)', fontStyle: 'italic' }}>in production.</em>
        </h2>

        <RevealOnScroll>
          <JourneyStrip />
        </RevealOnScroll>

        <RevealOnScroll>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
            className="max-[600px]:!grid-cols-1"
          >
            {META.map(item => (
              <div key={item.key} style={{ padding: '16px 18px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {item.key}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-body)', wordBreak: 'break-word' }}>
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Right — bio */}
      <RevealOnScroll>
        <div style={{ fontSize: '1.05rem', color: '#8fa0c0', lineHeight: 1.85, fontWeight: 300, fontFamily: 'var(--font-body)' }}>
          <p style={{ marginBottom: '20px' }}>
            I&apos;m a{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Strategic Technical Team Lead</strong>{' '}
            with 2+ years of hands-on experience designing and delivering{' '}
            <em style={{ color: 'var(--cyan)', fontStyle: 'normal' }}>cloud-native, serverless applications</em>{' '}
            at production scale. I&apos;ve built real systems — not tutorials — and led real teams under real business pressure.
          </p>
          <p style={{ marginBottom: '20px' }}>
            My stack centres on{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Node.js, React, AWS (Lambda, EC2, VPC, SQS FIFO, SAM)</strong>
            , and{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>HubSpot CMS/HUBL</strong>{' '}
            — a rare combination in the Indian market. I&apos;ve implemented enterprise-grade Identity &amp; Access Management using Keycloak + OAuth2 + RBAC, built financial ETL pipelines from scratch, and integrated Stripe and PayPal into production systems handling real donor funds.
          </p>
          <p style={{ marginBottom: '20px' }}>
            What makes my approach different is where I sit on the engineering spectrum: I&apos;m equally comfortable writing{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>manually architected infrastructure</strong>{' '}
            as I am{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>directing agentic AI workflows</strong>{' '}
            that accelerate delivery. I&apos;ve engineered AI-driven code review systems and automated technical spec generation — reducing documentation overhead by ~40%.
          </p>
          <p>
            Before software, I was a Mechanical Engineer. That background trained me to think in systems, not just code — and it shows in how I architect solutions.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}
