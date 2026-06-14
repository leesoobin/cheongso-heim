import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import { PersonIcon, TeamIcon, LeafIcon, ShieldIcon } from '../icons'
import { C } from '../../theme'

const MERITS = [
  { icon: PersonIcon, title: '대표 직접 관리',   lines: ['상담부터 관리까지', '직접 책임'] },
  { icon: TeamIcon,   title: '100% 직영팀',     lines: ['하청 없이 검증된', '직영팀 운영'] },
  { icon: LeafIcon,   title: '친환경 세제 사용', lines: ['인체에 무해한 세제로', '안심 청소'] },
  { icon: ShieldIcon, title: '영업배상책임보험', lines: ['시공 중 발생하는', '모든 사고 보장'] },
]

export default function HeroSection() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Background photo + navy overlay */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div className="kb-in" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="청소하임 시공 공간"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(100deg, ${C.navyDeep} 0%, rgba(5,15,34,0.78) 45%, rgba(5,15,34,0.4) 75%, rgba(5,15,34,0.18) 100%)`,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(5,15,34,0.35) 0%, rgba(5,15,34,0.05) 28%, rgba(5,15,34,0.65) 80%, ${C.navy} 100%)`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: '110px', paddingBottom: '40px' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 w-full">
          <div style={{ maxWidth: '560px' }}>
            <ScrollReveal delay={0}>
              <p style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '16px', letterSpacing: '0.02em' }}>
                입주청소 · 이사청소 · 상가청소
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 58px)', fontWeight: 800, color: '#fff', lineHeight: 1.32, marginBottom: '24px', letterSpacing: '-0.01em' }}>
                머무는 공간이<br />달라지면<br />일상도 달라집니다
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.35)', marginBottom: '24px' }} />
              <p style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(255,255,255,0.78)', lineHeight: 1.85, marginBottom: '36px' }}>
                청소하임은<br />
                보이지 않는 곳까지 세심하게 관리하여<br />
                더 깨끗하고 쾌적한 공간을 만듭니다.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <a
                href="#contact"
                className="hover:opacity-90 transition-opacity"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: C.blue, color: '#fff',
                  padding: '16px 34px', borderRadius: '30px',
                  fontSize: 'clamp(15px,1.6vw,17px)', fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 28px rgba(49,89,188,0.45)',
                }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                무료 견적 문의
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* 4-col merit card */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 w-full" style={{ marginBottom: 'clamp(-28px, -3.5vw, -56px)' }}>
        <ScrollReveal delay={420}>
          <div
            className="grid grid-cols-4"
            style={{
              background: C.navyCard,
              borderRadius: '18px',
              border: `1px solid ${C.navyBorder}`,
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              padding: 'clamp(14px,2.5vw,28px) clamp(4px,2vw,16px)',
            }}
          >
            {MERITS.map((m, i) => {
              const Icon = m.icon
              return (
                <div
                  key={i}
                  className="text-center"
                  style={{
                    padding: '0 clamp(2px,1.2vw,16px)',
                    borderRight: i < MERITS.length - 1 ? `1px solid ${C.navyBorder}` : 'none',
                  }}
                >
                  <Icon size={28} color={C.badgeBlue} className="mx-auto mb-2" />
                  <p style={{ fontSize: 'clamp(11px,1.6vw,16px)', fontWeight: 700, color: '#fff', marginBottom: '4px', whiteSpace: 'nowrap' }}>{m.title}</p>
                  {m.lines.map((l, j) => (
                    <p key={j} style={{ fontSize: 'clamp(9px,1.15vw,13px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{l}</p>
                  ))}
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
