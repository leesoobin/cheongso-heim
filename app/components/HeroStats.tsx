'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 5000, suffix: '+', label: '누적 시공 건수' },
  { value: 98,   suffix: '%', label: '고객 만족도' },
  { value: 87,   suffix: '%', label: '재의뢰율' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function HeroStats() {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-white text-shadow">
            <Counter target={s.value} suffix={s.suffix} />
          </p>
          <p className="text-blue-200 text-sm font-medium mt-1 tracking-wide">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
