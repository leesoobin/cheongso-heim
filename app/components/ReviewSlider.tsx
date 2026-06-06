'use client'

import { useRef, useEffect } from 'react'

interface ReviewItem {
  name: string; service: string; area: string; rating: number; text: string
}

export default function ReviewSlider({ items }: { items: ReviewItem[] }) {
  const trackRef  = useRef<HTMLDivElement>(null)
  const frameRef  = useRef<number>()
  const xRef      = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const SPEED = 0.45
    const run = () => {
      if (!pausedRef.current) {
        const halfW = track.scrollWidth / 2
        xRef.current = (xRef.current + SPEED) % halfW
        track.style.transform = `translateX(-${xRef.current}px)`
      }
      frameRef.current = requestAnimationFrame(run)
    }
    frameRef.current = requestAnimationFrame(run)

    const pause  = () => { pausedRef.current = true }
    const resume = () => { pausedRef.current = false }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(frameRef.current!)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  const all = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex will-change-transform" style={{ gap: '20px', width: 'max-content' }}>
        {all.map((r, i) => (
          <div
            key={i}
            style={{ width: '340px', background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #f1f5f9', flexShrink: 0, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
              {Array.from({ length: r.rating }).map((_, j) => (
                <svg key={j} width="16" height="16" fill="#FBC02D" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: '14px', color: '#25324B', lineHeight: 1.7, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              "{r.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '13px', color: '#070707' }}>{r.name}</p>
                <p style={{ fontSize: '12px', color: '#6E7A84' }}>{r.area}</p>
              </div>
              <span style={{ fontSize: '11px', background: '#EEF2FF', color: '#3159BC', padding: '5px 10px', borderRadius: '6px', fontWeight: 700 }}>
                {r.service}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
