import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import StatsRow from '../StatsRow'
import { C } from '../../theme'

const CASES = [
  { title: '입주청소',      desc: '공사먼지·분진·실리콘 자국 제거', img: '/images/case-movein.jpg' },
  { title: '욕실 곰팡이 제거', desc: '곰팡이·물때·찌든 때 제거',    img: '/images/case-bathroom.jpg' },
]

export default function CasesSection() {
  return (
    <section id="cases" style={{ background: C.navy, padding: 'clamp(72px,10vw,120px) 0' }}>
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10">

        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <p className="badge-navy">RESULT</p>
          <h2 style={{ fontSize: 'clamp(28px,4.2vw,46px)', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
            결과로 증명합니다
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.7vw,18px)', color: 'rgba(255,255,255,0.55)' }}>
            직접 시공한 현장의 변화를 확인해보세요.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-14">
          {CASES.map((c, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div>
                <h3 style={{ fontSize: 'clamp(17px,2.2vw,22px)', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{c.title}</h3>
                <p style={{ fontSize: 'clamp(12px,1.5vw,15px)', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>{c.desc}</p>
                <div style={{ position: 'relative', aspectRatio: '3/2', borderRadius: '14px', overflow: 'hidden', border: `1px solid ${C.navyBorder}` }}>
                  <Image src={c.img} alt={c.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <StatsRow />
        </ScrollReveal>
      </div>
    </section>
  )
}
