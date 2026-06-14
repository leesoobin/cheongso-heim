import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import { HouseIcon, CrosshairIcon, LeafIcon, VacuumIcon, ShieldIcon, HeadsetIcon } from '../icons'
import { C } from '../../theme'

const CARES = [
  {
    icon: HouseIcon, title: '새집증후군 케어', sub: '포름알데히드 · VOC 제거',
    desc: '입주 전\n공기질 관리 서비스', img: '/images/premium-air.jpg',
  },
  {
    icon: CrosshairIcon, title: '벽면 집진 시공', sub: '벽면 · 천장 · 몰딩',
    desc: '눈에 보이지 않는\n미세먼지까지 제거', img: '/images/premium-wall.jpg',
  },
]

const FEATURES = [
  { icon: LeafIcon,   title: '친환경 약품',     lines: ['인체에 무해한', '친환경 약품 사용'] },
  { icon: VacuumIcon, title: '전문 장비 사용',   lines: ['고성능 전문 장비로', '더 깨끗하게'] },
  { icon: ShieldIcon, title: '영업배상책임보험', lines: ['만일의 사고에도', '안전하게 보장'] },
  { icon: HeadsetIcon,title: '사후관리 지원',   lines: ['청소 후에도', '지속적인 관리 지원'] },
]

export default function PremiumSection() {
  return (
    <section id="premium" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Top: photo + navy overlay */}
      <div style={{ position: 'relative', minHeight: 'clamp(340px, 42vw, 560px)' }}>
        <Image
          src="/images/premium-bg.jpg"
          alt="청소하임 프리미엄 케어"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 60%' }}
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
            <p className="badge-navy" style={{ marginBottom: '18px' }}>PREMIUM CARE</p>
            <h2 style={{ fontSize: 'clamp(28px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.35 }}>
              <span style={{ color: '#fff' }}>일반 청소를 넘어<br /></span>
              <span style={{ color: C.gold }}>보이지 않는 곳까지<br /></span>
              <span style={{ color: '#fff' }}>관리합니다.</span>
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Body: navy */}
      <div style={{ background: C.navy, padding: '0 0 clamp(72px,10vw,120px)' }}>
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10">

          {/* Care cards */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-6" style={{ marginTop: 'clamp(28px,4vw,48px)', marginBottom: 'clamp(40px,6vw,72px)' }}>
            {CARES.map((c, i) => {
              const Icon = c.icon
              return (
                <ScrollReveal key={i} delay={i * 90}>
                  <div style={{ background: C.navyCard, border: `1px solid ${C.navyBorder}`, borderRadius: '14px', overflow: 'hidden', height: '100%' }}>
                    <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                      <Image src={c.img} alt={c.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div style={{ position: 'relative', padding: 'clamp(18px,3vw,32px) clamp(14px,2.5vw,28px)', textAlign: 'center' }}>
                      <div style={{
                        position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%,-50%)',
                        width: 'clamp(40px,5.5vw,56px)', height: 'clamp(40px,5.5vw,56px)', borderRadius: '50%',
                        background: C.navy, border: `2px solid ${C.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={22} color={C.gold} />
                      </div>
                      <h3 style={{ fontSize: 'clamp(15px,2vw,20px)', fontWeight: 700, color: '#fff', marginTop: 'clamp(14px,2vw,18px)', marginBottom: '10px' }}>{c.title}</h3>
                      <div style={{ width: '24px', height: '2px', background: C.gold, margin: '0 auto 12px' }} />
                      <p style={{ fontSize: 'clamp(12px,1.4vw,14px)', color: 'rgba(255,255,255,0.65)', marginBottom: '10px' }}>{c.sub}</p>
                      <p style={{ fontSize: 'clamp(12px,1.4vw,14px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Feature row */}
          <ScrollReveal delay={120}>
            <div className="grid grid-cols-4" style={{ background: C.navyCard, border: `1px solid ${C.navyBorder}`, borderRadius: '14px', padding: 'clamp(18px,2.5vw,28px) clamp(4px,2vw,16px)', marginBottom: 'clamp(40px,6vw,72px)' }}>
              {FEATURES.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="text-center" style={{
                    padding: '0 clamp(2px,1.2vw,16px)',
                    borderRight: i < FEATURES.length - 1 ? `1px solid ${C.navyBorder}` : 'none',
                  }}>
                    <Icon size={28} color={C.gold} className="mx-auto mb-2" />
                    <p style={{ fontSize: 'clamp(11px,1.6vw,16px)', fontWeight: 700, color: '#fff', marginBottom: '4px', whiteSpace: 'nowrap' }}>{f.title}</p>
                    {f.lines.map((l, j) => (
                      <p key={j} style={{ fontSize: 'clamp(9px,1.15vw,13px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{l}</p>
                    ))}
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={200} className="text-center">
            <p style={{ fontSize: 'clamp(14px,1.8vw,18px)', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>
              &ldquo;청소는 끝났지만
            </p>
            <p style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, lineHeight: 1.4, color: C.gold }}>
              관리는<br />이제부터 시작입니다.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
