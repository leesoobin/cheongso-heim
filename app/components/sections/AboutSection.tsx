import ScrollReveal from '../ScrollReveal'
import StatsRow from '../StatsRow'
import { PersonIcon, TeamIcon, LeafIcon, ShieldIcon } from '../icons'
import { C } from '../../theme'

const ITEMS = [
  { icon: PersonIcon, title: '대표 직접 관리',     lines: ['상담부터 시공 완료까지', '대표가 직접 확인합니다.'] },
  { icon: TeamIcon,   title: '100% 직영팀',       lines: ['하청 없이 검증된 인력만', '투입하여 진행합니다.'] },
  { icon: LeafIcon,   title: '친환경 세제 사용',   lines: ['인체에 무해한 친환경', '전문 세제를 사용합니다.'] },
  { icon: ShieldIcon, title: '영업배상책임보험 가입', lines: ['시공 중 발생할 수 있는', '사고에 대비합니다.'] },
]

export default function AboutSection() {
  return (
    <section id="about" style={{ background: C.navy, padding: 'clamp(72px,10vw,120px) 0 clamp(48px,7vw,88px)' }}>
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10">

        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <p className="badge-navy">WHY CLEANHEIM</p>
          <h2 style={{ fontSize: 'clamp(28px,4.2vw,46px)', fontWeight: 800, color: '#fff', lineHeight: 1.35, marginBottom: '14px' }}>
            왜 많은 고객이<br />청소하임을 선택할까요?
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.7vw,18px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
            하청 없는 직영 시스템으로<br />상담부터 시공, 사후관리까지 책임집니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-10 sm:mb-14">
          {ITEMS.map((it, i) => {
            const Icon = it.icon
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{ background: C.navyCard, border: `1px solid ${C.navyBorder}`, borderRadius: '14px', padding: 'clamp(18px,3vw,32px) clamp(14px,2.5vw,28px)', height: '100%' }}>
                  <Icon size={30} color={C.badgeBlue} className="mb-3" />
                  <h3 style={{ fontSize: 'clamp(15px,1.9vw,20px)', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.4 }}>{it.title}</h3>
                  {it.lines.map((l, j) => (
                    <p key={j} style={{ fontSize: 'clamp(12px,1.4vw,15px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{l}</p>
                  ))}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={120}>
          <StatsRow />
        </ScrollReveal>
      </div>
    </section>
  )
}
