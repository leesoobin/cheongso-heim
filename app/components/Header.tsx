'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#home',     label: '메인' },
  { href: '#about',    label: '청소하임 소개' },
  { href: '#cases',    label: '시공 사례' },
  { href: '#reviews',  label: '고객 후기' },
  { href: '#services', label: '서비스 안내' },
  { href: '#premium',  label: '프리미엄 서비스' },
  { href: '#contact',  label: '무료 상담 신청' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(6,16,34,0.55)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-between" style={{ height: '76px' }}>

        {/* Logo */}
        <button onClick={() => go('#home')} className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/logo-icon.png"
            alt="청소하임"
            width={40}
            height={21}
            className="w-9 sm:w-10 h-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
          <div className="flex flex-col items-start leading-tight">
            <span style={{ fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 800, color: '#fff' }}>청소하임</span>
            <span className="hidden sm:block" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>
              대표가 직접 관리하는 100% 직영 청소업체
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="px-3 py-2 font-medium transition-colors hover:text-white whitespace-nowrap"
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hamburger (all sizes) */}
        <button
          onClick={() => setOpen(o => !o)}
          className="p-2"
          aria-label="메뉴"
        >
          <div className="w-6 h-[18px] flex flex-col justify-between">
            {[0,1,2].map(i => (
              <span
                key={i}
                className="block h-0.5 rounded transition-all duration-200"
                style={{
                  background: '#fff',
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

      {/* Dropdown drawer */}
      {open && (
        <div style={{ background: 'rgba(8,19,40,0.98)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="w-full text-left px-6 py-4 font-medium border-b transition-colors hover:bg-white/5"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
