'use client'

import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 200)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (!show) return null

  return (
    <div className="fixed right-5 bottom-7 z-50 flex flex-col gap-2 items-center">
      {/* Phone */}
      <a
        href="tel:010-0000-0000"
        aria-label="전화 문의"
        style={{ width: 60, height: 60, background: '#3159BC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(49,89,188,0.45)' }}
        className="hover:scale-110 transition-transform"
      >
        <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
        style={{ width: 44, height: 44, background: '#fff', border: '1px solid #e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        className="hover:scale-110 transition-transform"
      >
        <svg width="16" height="16" fill="none" stroke="#6E7A84" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </div>
  )
}
