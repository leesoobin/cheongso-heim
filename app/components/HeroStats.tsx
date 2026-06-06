'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 5000, suffix: '+',  label: '누적시공' },
  { value: 98,   suffix: '%',  label: '고객만족도' },
  { value: 500,  suffix: '+',  label: '지인추천' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref     = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60; const duration = 1800
        let cur = 0
        const inc = target / steps
        const t = setInterval(() => {
          cur = Math.min(cur + inc, target)
          setCount(Math.floor(cur))
          if (cur >= target) clearInterval(t)
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</span>
}

export default function HeroStats() {
  return (
    <>
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            textAlign: 'center',
            padding: '0 14px',
            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.25)' : 'none',
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          <p style={{ fontSize: 'clamp(17px, 2.5vw, 30px)', fontWeight: 600, color: '#fff', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
            <Counter target={s.value} suffix={s.suffix} />
          </p>
          <p style={{ fontSize: 'clamp(11px, 1.3vw, 15px)', fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginTop: '4px', whiteSpace: 'nowrap' }}>{s.label}</p>
        </div>
      ))}
    </>
  )
}
