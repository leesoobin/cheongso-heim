import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import { HouseIcon, CalendarIcon, BuildingIcon, ShieldIcon, CheckCircleIcon, ArrowRightIcon } from '../icons'
import { C } from '../../theme'

const SERVICES = [
  { icon: HouseIcon,    title: '입주 · 이사청소', desc: '새 공간을 위한 완벽한 마무리', checks: ['공사먼지 · 분진 제거', '창틀 · 몰딩 · 주방 청소'], img: '/images/service-movein.jpg' },
  { icon: CalendarIcon, title: '정기청소',        desc: '항상 깨끗한 공간 유지',        checks: ['주방 · 욕실 · 거실 관리', '주기적 방문 서비스'],   img: '/images/service-regular.jpg' },
  { icon: BuildingIcon, title: '사무실 · 상가청소', desc: '업무 공간의 청결 관리',       checks: ['바닥 · 유리 · 공용공간', '맞춤형 청소 진행'],     img: '/images/service-office.jpg' },
  { icon: ShieldIcon,   title: '특수청소',        desc: '일반 청소로 어려운 영역',      checks: ['곰팡이 제거', '에어컨 세척', '새집증후군 케어'],   img: '/images/service-special.jpg' },
]

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: C.navy, padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10">

        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <p className="badge-navy">SERVICE</p>
          <h2 style={{ fontSize: 'clamp(28px,4.2vw,46px)', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
            공간에 맞는 전문 청소
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.7vw,18px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
            주거공간부터 상업공간까지<br />청소하임이 책임집니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{ background: C.navyCard, border: `1px solid ${C.navyBorder}`, borderRadius: '14px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                    <Image src={s.img} alt={s.title} fill sizes="50vw" className="object-cover" />
                  </div>
                  <div style={{ position: 'relative', padding: 'clamp(14px,2.5vw,26px)', paddingTop: 'clamp(28px,4vw,40px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 'clamp(14px,2.5vw,26px)', transform: 'translateY(-50%)',
                      width: 'clamp(36px,5vw,52px)', height: 'clamp(36px,5vw,52px)', borderRadius: '50%',
                      background: C.blue, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: `3px solid ${C.navyCard}`,
                    }}>
                      <Icon size={22} color="#fff" />
                    </div>
                    <h3 style={{ fontSize: 'clamp(15px,2vw,20px)', fontWeight: 700, color: '#fff', marginBottom: '4px', marginTop: '6px' }}>{s.title}</h3>
                    <p style={{ fontSize: 'clamp(11px,1.4vw,14px)', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                      {s.checks.map((c, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircleIcon size={14} color={C.badgeBlue} />
                          <span style={{ fontSize: 'clamp(11px,1.4vw,14px)', color: 'rgba(255,255,255,0.75)' }}>{c}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end mt-3">
                      <div style={{ width: 32, height: 32, borderRadius: '50%', border: `1.5px solid ${C.navyBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ArrowRightIcon size={15} color="rgba(255,255,255,0.6)" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
