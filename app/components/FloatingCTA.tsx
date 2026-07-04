'use client'

import { useEffect, useState } from 'react'

const BTNS = [
  {
    label: '카톡문의',
    href: 'https://pf.kakao.com/_xmynxfX',
    bg: '#FEE500',
    shadow: 'rgba(254,229,0,0.45)',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#3C1E1E">
        <path d="M12 3C6.477 3 2 6.925 2 11.75c0 3.017 1.76 5.665 4.42 7.24l-.9 3.31a.5.5 0 0 0 .73.56l3.84-2.3A11.8 11.8 0 0 0 12 20.5c5.523 0 10-3.925 10-8.75S17.523 3 12 3z"/>
      </svg>
    ),
    external: true,
  },
  {
    label: '전화하기',
    href: 'tel:010-7182-6371',
    bg: '#4F6EF7',
    shadow: 'rgba(79,110,247,0.45)',
    icon: (
      <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    external: false,
  },
  {
    label: '후기보기',
    href: 'https://blog.naver.com/esyathb640',
    bg: '#03C75A',
    shadow: 'rgba(3,199,90,0.45)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="white" strokeWidth="1.8"/>
        <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    external: true,
  },
  {
    label: '견적신청',
    href: '#contact',
    bg: '#FF4F93',
    shadow: 'rgba(255,79,147,0.45)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M14 3v6h6" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 13h6M9 17h4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M15.5 14.5l1.5-1.5 1.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    external: false,
    isAnchor: true,
  },
]

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 200)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleAnchor = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!show) return null

  return (
    <div className="fixed right-3 sm:right-4 bottom-6 z-50 flex flex-col gap-3 items-center">
      {BTNS.map((btn) => (
        <div key={btn.label} className="flex flex-col items-center gap-1">
          {btn.isAnchor ? (
            <button
              onClick={() => handleAnchor(btn.href)}
              aria-label={btn.label}
              className="hover:scale-110 transition-transform"
              style={{ width: 56, height: 56, background: btn.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 16px ${btn.shadow}`, border: 'none', cursor: 'pointer' }}
            >
              {btn.icon}
            </button>
          ) : (
            <a
              href={btn.href}
              aria-label={btn.label}
              target={btn.external ? '_blank' : undefined}
              rel={btn.external ? 'noopener noreferrer' : undefined}
              className="hover:scale-110 transition-transform"
              style={{ width: 56, height: 56, background: btn.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 16px ${btn.shadow}` }}
            >
              {btn.icon}
            </a>
          )}
          <span style={{ fontSize: '10px', fontWeight: 600, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.5)', whiteSpace: 'nowrap' }}>{btn.label}</span>
        </div>
      ))}

      {/* 맨 위로 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
        className="hover:scale-110 transition-transform mt-1"
        style={{ width: 44, height: 44, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', cursor: 'pointer' }}
      >
        <svg width="16" height="16" fill="none" stroke="#6E7A84" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </div>
  )
}
