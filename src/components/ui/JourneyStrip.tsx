import { Fragment } from 'react'
import { JOURNEY } from '@/lib/data'

export default function JourneyStrip() {
  return (
    <div
      className="journey-strip"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        overflowX: 'auto',
        marginBottom: '32px',
        paddingBottom: '4px',
      }}
    >
      {JOURNEY.map((step, i) => (
        <Fragment key={step.year}>
          <div
            className="journey-step"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, minWidth: '72px' }}
          >
            <div
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--amber)', flexShrink: 0 }}
            />
            <div
              className="journey-step-text"
              style={{ textAlign: 'center', marginTop: '10px' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--amber)', letterSpacing: '0.08em' }}>
                {step.year}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--muted)', marginTop: '4px', lineHeight: 1.5 }}>
                {step.label}
                {step.sublabel && <><br />{step.sublabel}</>}
              </div>
            </div>
          </div>
          {i < JOURNEY.length - 1 && (
            <>
              <div
                className="journey-connector-h"
                style={{ height: '1px', background: 'var(--border)', flex: '1 1 auto', minWidth: '24px', marginTop: '4px', alignSelf: 'flex-start' }}
              />
              <div
                className="journey-connector-v"
                style={{ display: 'none', width: '1px', height: '24px', background: 'var(--border)', marginLeft: '3.5px' }}
              />
            </>
          )}
        </Fragment>
      ))}
    </div>
  )
}
