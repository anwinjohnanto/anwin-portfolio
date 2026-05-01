type Props = { index: string; title: string }

export default function SectionLabel({ index, title }: Props) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span style={{ color: 'var(--muted)' }}>SYS.</span>
      <span style={{ color: 'var(--cyan)' }}>{index} / {title}</span>
      <span
        style={{
          display: 'inline-block',
          width: '40px',
          height: '1px',
          background: 'var(--cyan)',
          opacity: 0.4,
          marginLeft: '12px',
        }}
      />
    </div>
  )
}
