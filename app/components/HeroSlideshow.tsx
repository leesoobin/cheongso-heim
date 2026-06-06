'use client'

import { useState, useEffect } from 'react'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80',
    kb: 'kb-in',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218791-d3b6498ca4a1?auto=format&fit=crop&w=1920&q=80',
    kb: 'kb-out',
  },
]

export default function HeroSlideshow() {
  const [cur, setCur] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCur(c => (c + 1) % SLIDES.length)
      setAnimKey(k => k + 1)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: cur === i ? 1 : 0,
            transition: 'opacity 1.6s ease-in-out',
            zIndex: cur === i ? 1 : 0,
          }}
        >
          {/* re-mount inner div when this slide becomes active to restart Ken Burns */}
          <div
            key={cur === i ? animKey : `static-${i}`}
            className={`absolute inset-[-4%] bg-cover bg-center ${cur === i ? slide.kb : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        </div>
      ))}

      {/* gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(7,26,56,0.78) 0%, rgba(7,26,56,0.62) 50%, rgba(7,26,56,0.82) 100%)',
        }}
      />
    </div>
  )
}
