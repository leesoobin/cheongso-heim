'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#about',    label: '회사소개' },
  { href: '#services', label: '청소서비스' },
  { href: '#reviews',  label: '고객후기' },
  { href: '#cases',    label: '서비스사례' },
]

export default function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#fff' : 'transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
        height: '80px',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="청소하임 로고"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
            style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
            priority
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="px-4 py-2 font-medium transition-colors hover:opacity-70"
              style={{
                fontSize: '18px',
                color: scrolled ? '#070707' : '#fff',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('#contact')}
            className="ml-4 font-semibold transition-all hover:opacity-90"
            style={{
              background: '#3159BC',
              color: '#fff',
              padding: '10px 28px',
              borderRadius: '24px',
              fontSize: '16px',
            }}
          >
            무료 상담
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2"
          aria-label="메뉴"
        >
          <div className="w-6 h-[18px] flex flex-col justify-between">
            {[0,1,2].map(i => (
              <span
                key={i}
                className="block h-0.5 rounded transition-all duration-200"
                style={{
                  background: scrolled ? '#070707' : '#fff',
                  transform: open
                    ? i===0 ? 'rotate(45deg) translateY(8px)'
                    : i===1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translateY(-8px)'
                    : 'none',
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="w-full text-left px-6 py-4 text-[#070707] font-medium border-b border-slate-50 hover:bg-slate-50 transition-colors"
              style={{ fontSize: '16px' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('#contact')}
            className="w-full py-4 text-white font-bold text-center"
            style={{ background: '#3159BC' }}
          >
            무료 상담 신청
          </button>
        </div>
      )}
    </header>
  )
}
