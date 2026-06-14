import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import ContactForm from '../ContactForm'
import { ChatIcon, EditIcon, ShieldIcon, HeadsetIcon, PhoneIcon, ChatRightIcon } from '../icons'
import { C } from '../../theme'

const FEATURES = [
  { icon: ChatIcon,     title: '빠른 상담',  lines: ['신속한 답변'] },
  { icon: EditIcon,     title: '맞춤 견적',  lines: ['공간 맞춤 제안'] },
  { icon: ShieldIcon,   title: '안심 서비스', lines: ['보험 가입 업체'] },
  { icon: HeadsetIcon,  title: '사후 관리',  lines: ['체계적 관리 지원'] },
]

const INFO = [
  { icon: PhoneIcon, title: '대표번호 010-0000-0000', desc: '평일 09:00 - 18:00' },
  { icon: null,      title: '카카오톡 상담',          desc: '빠른 실시간 상담' },
  { icon: ChatRightIcon, title: '24시간 문의 접수',   desc: '상담 후 빠른 연락드리겠습니다.' },
]

export default function ContactSection() {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Top: photo + navy overlay */}
      <div style={{ position: 'relative', minHeight: 'clamp(320px, 40vw, 520px)' }}>
        <Image
          src="/images/contact-bg.jpg"
          alt="청소하임 무료 상담 신청"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 55%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(100deg, ${C.navyDeep} 0%, rgba(5,15,34,0.82) 45%, rgba(5,15,34,0.45) 75%, rgba(5,15,34,0.2) 100%)`,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, rgba(5,15,34,0.25) 0%, rgba(5,15,34,0.05) 30%, ${C.navy} 100%)`,
        }} />

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 sm:px-10 h-full" style={{ paddingTop: 'clamp(56px,8vw,100px)' }}>
          <ScrollReveal>
            <p className="badge-navy" style={{ marginBottom: '18px' }}>FREE CONSULTATION</p>
            <h2 style={{ fontSize: 'clamp(28px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.35, marginBottom: '14px' }}>
              <span style={{ color: C.gold }}>무료</span>
              <span style={{ color: '#fff' }}> 상담 신청</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.7vw,18px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              전문 상담사가 고객님의 공간에 맞는<br />최적의 청소 솔루션을 제안해드립니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Body: navy */}
      <div style={{ background: C.navy, padding: '0 0 clamp(72px,10vw,120px)' }}>
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10">

          {/* Feature row */}
          <ScrollReveal>
            <div className="grid grid-cols-4" style={{ background: C.navyCard, border: `1px solid ${C.navyBorder}`, borderRadius: '14px', padding: 'clamp(18px,2.5vw,28px) clamp(4px,2vw,16px)', marginTop: 'clamp(24px,3.5vw,40px)', marginBottom: 'clamp(40px,6vw,72px)' }}>
              {FEATURES.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="text-center" style={{
                    padding: '0 clamp(2px,1.2vw,16px)',
                    borderRight: i < FEATURES.length - 1 ? `1px solid ${C.navyBorder}` : 'none',
                  }}>
                    <Icon size={28} color={C.badgeBlue} className="mx-auto mb-2" />
                    <p style={{ fontSize: 'clamp(11px,1.6vw,16px)', fontWeight: 700, color: '#fff', marginBottom: '4px', whiteSpace: 'nowrap' }}>{f.title}</p>
                    {f.lines.map((l, j) => (
                      <p key={j} style={{ fontSize: 'clamp(9px,1.15vw,13px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{l}</p>
                    ))}
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Form card */}
          <ScrollReveal delay={100}>
            <div style={{ background: '#F7F8FA', borderRadius: '18px', padding: 'clamp(24px,4vw,48px) clamp(18px,4vw,48px)' }}>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom: contact info bar */}
      <div style={{ background: '#F1F3F6' }}>
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 grid sm:grid-cols-3 gap-6 sm:gap-0" style={{ padding: 'clamp(24px,3vw,36px) clamp(6px,2vw,24px)' }}>
          {INFO.map((item, i) => (
            <div key={i} className="flex items-center gap-3" style={{
              padding: '0 clamp(8px,2vw,28px)',
              borderLeft: i > 0 ? `1px solid #DDE2E8` : 'none',
            }}>
              {item.icon ? (
                <item.icon size={26} color={C.navy} />
              ) : (
                <div style={{ position: 'relative', width: 40, height: 28, border: `1.5px solid ${C.navy}`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em' }}>TALK</span>
                  <div style={{ position: 'absolute', bottom: -5, left: '14px', width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `5px solid ${C.navy}` }} />
                </div>
              )}
              <div>
                <p style={{ fontSize: 'clamp(13px,1.5vw,16px)', fontWeight: 700, color: '#1A2540' }}>{item.title}</p>
                <p style={{ fontSize: 'clamp(11px,1.3vw,13px)', color: '#8A93A6' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
