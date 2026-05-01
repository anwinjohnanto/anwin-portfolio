export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '24px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className="max-lg:!flex-col max-lg:!gap-2 max-lg:text-center max-lg:!px-[30px] max-lg:!py-5"
    >
      <span
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.06em' }}
      >
        © 2026 Anwin Anto · All rights reserved
      </span>
      <span
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.06em' }}
      >
        Built with precision · aanto6151@gmail.com
      </span>
    </footer>
  )
}
