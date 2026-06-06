'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#about',    label: '회사소개' },
  { href: '#services', label: '청소서비스' },
  { href: '#why-us',   label: '청소하임만의 강점' },
  { href: '#reviews',  label: '고객후기' },
  { href: '#contact',  label: '상담신청' },
]

export default function Header() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center group"
          aria-label="청소하임 홈"
        >
          <Image
            src="/logo.png"
            alt="청소하임 로고"
            width={160}
            height={56}
            className="h-11 w-auto object-contain"
            priority
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            className="ml-3 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
          >
            무료 상담 신청
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="메뉴"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-slate-800 rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-slate-800 rounded transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-slate-800 rounded transition-all ${open ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#contact')}
              className="mt-2 py-3 bg-blue-700 text-white font-semibold rounded-xl text-center"
            >
              무료 상담 신청
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
