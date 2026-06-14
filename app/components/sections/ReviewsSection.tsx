import ScrollReveal from '../ScrollReveal'
import { PersonIcon, StarFilledIcon } from '../icons'
import { C } from '../../theme'

const REVIEWS = [
  { name: '김○○ 고객', service: '입주청소', text: '입주 전 공사 먼지 때문에\n걱정이 많았는데\n\n창틀부터 몰딩까지 정말 꼼꼼하게\n청소해주셨습니다.' },
  { name: '박○○ 고객', service: '욕실청소', text: '욕실 곰팡이와 물때가\n심했는데\n\n새 욕실처럼 깨끗하게\n바뀌었습니다.' },
  { name: '이○○ 고객', service: '이사청소', text: '대표님이 직접 상담하고\n진행상황도 확인해주셔서\n\n믿고 맡길 수\n있었습니다.' },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ background: C.navy, padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10">

        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <p className="badge-navy">REVIEWS</p>
          <h2 style={{ fontSize: 'clamp(28px,4.2vw,46px)', fontWeight: 800, color: '#fff', lineHeight: 1.35, marginBottom: '14px' }}>
            많은 고객이<br />다시 찾는 이유
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.7vw,18px)', color: 'rgba(255,255,255,0.55)' }}>
            실제 고객님들이 남겨주신 후기입니다.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {REVIEWS.map((r, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div style={{ background: C.navyCard, border: `1px solid ${C.navyBorder}`, borderRadius: '16px', padding: 'clamp(20px,3vw,30px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '34px', fontWeight: 800, color: C.gold, lineHeight: 1, marginBottom: '8px', opacity: 0.85, fontFamily: 'Georgia, serif' }}>&ldquo;</span>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarFilledIcon key={j} size={16} color={C.gold} />
                  ))}
                </div>
                <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, whiteSpace: 'pre-line', flex: 1, marginBottom: '20px' }}>
                  {r.text}
                </p>
                <div style={{ borderTop: `1px solid ${C.navyBorder}`, paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <PersonIcon size={18} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{r.name}</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{r.service}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120} className="text-center">
          <p style={{ fontSize: 'clamp(14px,1.8vw,18px)', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>
            상담부터 시공, 사후관리까지.
          </p>
          <p style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, lineHeight: 1.4 }}>
            <span style={{ color: C.gold }}>청소하임</span>
            <span style={{ color: '#fff' }}>은<br />결과로 신뢰를 만듭니다.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
