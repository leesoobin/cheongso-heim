'use client'

import Image from 'next/image'
import Header    from './components/Header'
import HeroStats from './components/HeroStats'
import HeroSlideshow  from './components/HeroSlideshow'
import ContactForm    from './components/ContactForm'
import FloatingCTA    from './components/FloatingCTA'
import ScrollReveal   from './components/ScrollReveal'
import ReviewSlider   from './components/ReviewSlider'

// ── COLORS (benchmark match) ────────────────────────────────
const C = {
  blue:   '#3159BC',
  orange: '#F46D3D',
  lime:   '#D5D62B',
  dark:   '#070707',
  body:   '#6E7A84',
  nav:    '#25324B',
  premiumBg: '#F4FFE3',
  contactBg: '#D2E4F5',
  footer: '#070707',
}

// ── DATA ────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'move',
    title: '입주 / 이사 청소',
    desc: '새 공간의 시공 먼지, 분진, 접착 잔여물, 몰딩 틈새 오염을 고출력 흡입 장비와 다단계 필터링 시스템으로 꼼꼼하게 제거합니다. 이사 전·후 모두 가능합니다.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
  {
    id: 'home',
    title: '가정 정기 청소',
    desc: '주기적인 방문으로 항상 깨끗하고 건강한 생활 환경을 유지해 드립니다. 주방, 욕실, 거실 등 생활 공간 전체를 고객 맞춤으로 관리합니다.',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
    reverse: true,
  },
  {
    id: 'office',
    title: '사무실 / 상업공간 청소',
    desc: '사무실, 매장, 식당 등 다양한 상업공간의 특성에 맞는 전문 청소 서비스를 제공합니다. 영업시간 외 시공으로 업무에 지장 없이 진행합니다.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
  {
    id: 'special',
    title: '특수 청소',
    desc: '에어컨 세척, 곰팡이·니코틴 특수 제거, 새집증후군 시공, 소독·방역 등 일반 청소로 해결하기 어려운 전문 영역까지 책임집니다.',
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=80',
    reverse: true,
  },
]

const PREMIUM = [
  {
    title: '새집증후군 시공',
    desc: '베이크아웃, 차폐 시공으로 포름알데히드·라돈 등 유해물질을 제거하고 공기질 측정까지 완료합니다. 건강한 새 집에서 출발하세요.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: '벽면 집진 시공',
    desc: '공식 헤파필터 장착 컬비 장비로 벽면부터 천장까지 미세분진을 완전 제거합니다. 눈에 보이지 않는 먼지까지 책임집니다.',
    img: 'https://images.unsplash.com/photo-1484154218791-d3b6498ca4a1?auto=format&fit=crop&w=700&q=80',
  },
]

const MERITS = [
  { icon: personIcon(),  title: '대표 직접 상담 & 운영',    desc: '중간 유통 없이 대표가 직접 상담부터 시공, 관리 전 과정을 책임집니다.' },
  { icon: teamIcon(),    title: '100% 직영팀 시공',        desc: '하청 없이 철저히 교육된 직영팀만 투입하여 일관된 품질을 보장합니다.' },
  { icon: searchIcon(),  title: '보이지 않는 곳까지 꼼꼼하게', desc: '구석진 곳, 틈새, 천장 등 일반적으로 놓치기 쉬운 부분까지 확인합니다.' },
  { icon: leafIcon(),    title: '친환경 & 저자극 약품 사용', desc: '인체에 무해한 친환경 세제만 사용합니다. 어린이·반려동물도 안심하세요.' },
  { icon: shieldIcon(),  title: '영업배상책임보험 가입',    desc: '시공 중 발생하는 모든 사고에 대해 보험으로 완벽하게 보장합니다.' },
  { icon: starIcon(),    title: '사후관리까지 확실하게',    desc: '시공 완료 후 고객이 완전히 만족하실 때까지 책임지고 마무리합니다.' },
]

const REVIEWS = [
  { name: '이○○', service: '입주 청소',    area: '아파트 33평', rating: 5, text: '이사 후 정말 더러운 상태였는데 청소하임 덕분에 새 집처럼 깨끗해졌어요! 대표님이 직접 오셔서 꼼꼼하게 확인해 주시는 모습이 정말 믿음직했습니다.' },
  { name: '박○○', service: '가정 정기 청소', area: '빌라 25평',  rating: 5, text: '3개월째 정기 청소를 맡기고 있는데 매번 너무 만족스러워요. 처음에 꼼꼼하게 해주시는 거 보고 감탄했는데 지금도 한결같이 완벽하게 해주십니다.' },
  { name: '최○○', service: '사무실 청소',   area: '사무실 50평', rating: 5, text: '직원들이 모두 깜짝 놀랄 만큼 깨끗하게 해주셨어요. 영업시간 외에 작업해 주셔서 업무에 전혀 지장이 없었습니다.' },
  { name: '김○○', service: '특수 청소',    area: '아파트 27평', rating: 5, text: '곰팡이 문제로 고민이 많았는데 한 번에 해결됐습니다. 약품 냄새도 없고 아이들도 바로 들어올 수 있어서 너무 좋았어요.' },
  { name: '정○○', service: '입주 청소',    area: '오피스텔',    rating: 5, text: '새집인데 시공 먼지가 가득해서 걱정이었는데 청소하임에서 싹 다 정리해주셨어요. 광택도 나고 정말 새것처럼 됐습니다.' },
  { name: '윤○○', service: '에어컨 청소',  area: '3베이 아파트', rating: 5, text: '에어컨에서 냄새가 나서 연락했는데 분해 세척 후 완전히 깨끗해졌어요. 전문 장비로 꼼꼼하게 해주셔서 감사합니다.' },
]

const CASES = [
  { title: '아파트 33평 입주 청소',  tag: '입주 청소',  desc: '시공 먼지·접착 잔여물 전체 제거 완료',      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80' },
  { title: '주방 기름때·탄화물 제거', tag: '주방 청소',  desc: '환기구 세척·인덕션 분해 후 재조립 완료',    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80' },
  { title: '욕실 물때·곰팡이 완전 제거', tag: '욕실 청소', desc: '줄눈 곰팡이·유리 물때 세척 완료',          img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80' },
  { title: '사무실 50평 바닥 광택',  tag: '사무실 청소', desc: '바닥 코팅 전처리·헤비 UV 광택 시공',        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80' },
  { title: '에어컨 내부 곰팡이 세척', tag: '에어컨 청소', desc: '필터·코일 분리 세척, 균·냄새 완전 제거',    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80' },
  { title: '거실·창문 전체 청소',    tag: '가정 청소',   desc: '창문 안팎·블라인드·몰딩 구석 세척 완료',    img: 'https://images.unsplash.com/photo-1484154218791-d3b6498ca4a1?auto=format&fit=crop&w=900&q=80' },
]

// ── ICON HELPERS ────────────────────────────────────────────

function SvgIcon({ d }: { d: string }) {
  return (
    <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke={C.blue} strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}
function personIcon() { return <SvgIcon d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> }
function teamIcon()   { return <SvgIcon d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /> }
function searchIcon() { return <SvgIcon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> }
function leafIcon()   { return <SvgIcon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> }
function shieldIcon() { return <SvgIcon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> }
function starIcon()   { return <SvgIcon d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /> }

// ── PAGE ────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section id="home" style={{ position: 'relative', minHeight: '825px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <HeroSlideshow />

        <div className="relative z-20 w-full max-w-[1140px] mx-auto px-5" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

          {/* Badge */}
          <ScrollReveal delay={0}>
            <p style={{ fontSize: '24px', fontWeight: 500, color: 'rgba(248,252,252,0.9)', marginBottom: '12px' }}>
              청소전문업체, 청소하임
            </p>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={120}>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 47px)', fontWeight: 600, color: C.lime, lineHeight: 1.25, marginBottom: '8px' }}>
              청소하임
            </h1>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 47px)', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              "신뢰를 바탕으로 운영합니다"
            </h2>
            <p style={{ fontSize: 'clamp(15px, 1.8vw, 22px)', fontWeight: 500, color: 'rgba(248,252,252,0.85)', marginBottom: '40px' }}>
              대표책임운영 · 투명한 시공 · 합리적인 금액
            </p>
          </ScrollReveal>

          {/* Stats box */}
          <ScrollReveal delay={240}>
            <div style={{ background: 'rgba(51,93,128,0.5)', borderRadius: '24px', padding: '24px 10px', display: 'inline-flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
              <HeroStats />
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={360}>
            <a
              href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: C.blue, color: '#fff', padding: '15px 40px', borderRadius: '23px', fontSize: '18px', fontWeight: 500, textDecoration: 'none', boxShadow: '0 4px 20px rgba(49,89,188,0.4)' }}
              className="hover:opacity-90 transition-opacity"
            >
              바로 상담하기
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. ABOUT
      ═══════════════════════════════════════════════════════ */}
      <section id="about" style={{ background: '#fff', padding: '100px 0', overflow: 'hidden' }}>
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <ScrollReveal from="left">
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                  alt="청소하임 전문 청소"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal from="right">
              <p className="badge-orange">ABOUT</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: C.dark, lineHeight: 1.25, marginBottom: '20px' }}>
                청소하임 소개
              </h2>
              <p style={{ fontSize: '18px', color: C.dark, lineHeight: 1.85, marginBottom: '16px' }}>
                청소하임은{' '}
                <strong style={{ color: C.orange }}>
                  대표가 상담부터 시공까지 직접 관리하는 100% 직영 청소전문업체
                </strong>
                입니다.
              </p>
              <p style={{ fontSize: '18px', color: C.dark, lineHeight: 1.85, marginBottom: '16px' }}>
                하청 없이 검증된 직영팀만이 시공하기 때문에 일관된 품질과
                철저한 책임 관리가 가능합니다.
              </p>
              <p style={{ fontSize: '18px', color: C.dark, lineHeight: 1.85, marginBottom: '32px' }}>
                청소의 어려움을 누구보다 잘 알기에, 청렴하고 신뢰할 수 있는
                청소하임이 함께하겠습니다.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {['대표 직접 운영', '직영팀 시공', '친환경 약품', '보험 가입'].map(t => (
                  <span key={t} style={{ border: `1.5px solid ${C.blue}`, color: C.blue, fontSize: '14px', fontWeight: 600, padding: '6px 16px', borderRadius: '6px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SERVICES (BASIC)
      ═══════════════════════════════════════════════════════ */}
      <section id="services" style={{ background: '#fff', padding: '80px 0 60px', overflow: 'hidden' }}>
        <div className="max-w-[1140px] mx-auto px-5">

          <ScrollReveal className="text-center mb-12">
            <p className="badge-blue">BASIC</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, color: C.dark, lineHeight: 1.25 }}>
              청소하임 대표서비스
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {SERVICES.map((svc, i) => (
              <div key={svc.id}>
                {/* ─ DESKTOP: overlap layout ─ */}
                <div
                  className="hidden md:flex items-center"
                  style={{ position: 'relative', minHeight: '400px', flexDirection: svc.reverse ? 'row-reverse' : 'row' }}
                >
                  {/* Image — absolute, fills its side */}
                  <div
                    style={{
                      position: 'absolute',
                      [svc.reverse ? 'right' : 'left']: 0,
                      top: 0, bottom: 0,
                      width: '48%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image src={svc.img} alt={svc.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>

                  {/* Text card — overlaps image */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      marginLeft: svc.reverse ? 0 : 'auto',
                      marginRight: svc.reverse ? 'auto' : 0,
                      width: '60%',
                      background: '#fff',
                      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                      borderRadius: '12px',
                      padding: '60px 70px',
                    }}
                  >
                    <ScrollReveal from={svc.reverse ? 'left' : 'right'} delay={i * 80}>
                      <h3 style={{ fontSize: '26px', fontWeight: 700, color: C.nav, marginBottom: '16px' }}>{svc.title}</h3>
                      <p style={{ fontSize: '17px', color: `rgba(37,50,75,0.75)`, lineHeight: 1.8, marginBottom: '28px' }}>{svc.desc}</p>
                      <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: C.blue, color: '#fff', padding: '12px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }} className="hover:opacity-90 transition-opacity">
                        상담 신청하기 →
                      </a>
                    </ScrollReveal>
                  </div>
                </div>

                {/* ─ MOBILE: stacked layout ─ */}
                <div className="md:hidden rounded-2xl overflow-hidden shadow-md">
                  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                    <Image src={svc.img} alt={svc.title} fill className="object-cover" />
                  </div>
                  <div style={{ background: '#fff', padding: '28px 24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: C.nav, marginBottom: '10px' }}>{svc.title}</h3>
                    <p style={{ fontSize: '15px', color: `rgba(37,50,75,0.75)`, lineHeight: 1.8, marginBottom: '20px' }}>{svc.desc}</p>
                    <a href="#contact" style={{ display: 'inline-block', background: C.blue, color: '#fff', padding: '11px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                      상담 신청하기 →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. PREMIUM SERVICE
      ═══════════════════════════════════════════════════════ */}
      <section id="premium" style={{ background: C.premiumBg, padding: '80px 0', overflow: 'hidden' }}>
        <div className="max-w-[1140px] mx-auto px-5">

          <ScrollReveal className="text-center mb-12">
            <p style={{ fontSize: '14px', fontWeight: 600, color: C.body, marginBottom: '10px', letterSpacing: '0.1em' }}>
              청소하임의 고급 클린서비스
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, color: C.dark }}>
              Premium Service
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {PREMIUM.map((p, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <ScrollReveal from={i % 2 === 1 ? 'right' : 'left'}>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                    <Image src={p.img} alt={p.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </ScrollReveal>
                <ScrollReveal from={i % 2 === 1 ? 'left' : 'right'} delay={100}>
                  <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                    <span style={{ display: 'inline-block', background: '#E8F5E9', color: '#2E7D32', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '0.05em' }}>
                      PREMIUM
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: C.nav, marginBottom: '14px' }}>{p.title}</h3>
                    <p style={{ fontSize: '17px', color: `rgba(37,50,75,0.75)`, lineHeight: 1.8 }}>{p.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. MERITS
      ═══════════════════════════════════════════════════════ */}
      <section
        id="merits"
        style={{
          position: 'relative',
          padding: '80px 0',
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          overflow: 'hidden',
        }}
      >
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,40,0.82)' }} />

        <div className="relative z-10 max-w-[1140px] mx-auto px-5">
          <ScrollReveal className="mb-12">
            <p className="badge-orange">MERITS</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 50px)', fontWeight: 700, color: '#fff' }}>
              왜 청소하임인가요?
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {MERITS.map((m, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  style={{ background: '#fff', padding: '36px 30px', borderRadius: 0, border: '1px solid rgba(255,255,255,0.1)' }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Icon circle */}
                  <div style={{ width: 80, height: 80, borderRadius: '50%', border: `2px solid ${C.blue}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', background: `${C.blue}08` }}>
                    {m.icon}
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, color: C.dark, marginBottom: '10px' }}>{m.title}</h4>
                  <p style={{ fontSize: '16px', color: C.body, lineHeight: 1.75 }}>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. REVIEWS
      ═══════════════════════════════════════════════════════ */}
      <section id="reviews" style={{ background: '#fff', padding: '100px 0', overflow: 'hidden' }}>
        <div className="max-w-[1140px] mx-auto px-5">
          <ScrollReveal className="mb-12">
            <p className="badge-orange">REVIEWS</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, color: C.dark, lineHeight: 1.2 }}>
              검증된 업체 청소하임
            </h2>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 48px)', fontWeight: 600, color: C.blue }}>
              100% 실제 후기
            </h2>
          </ScrollReveal>
        </div>
        <ReviewSlider items={REVIEWS} />
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. CASES
      ═══════════════════════════════════════════════════════ */}
      <section id="cases" style={{ background: '#FAFBFC', padding: '80px 0', overflow: 'hidden' }}>
        <div className="max-w-[1140px] mx-auto px-5">

          <ScrollReveal className="text-center mb-12">
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 700, color: C.dark, marginBottom: '8px' }}>
              청소하임 시공사례
            </h2>
            <p style={{ fontSize: '18px', color: C.body }}>직접 시공한 현장의 전·후를 확인하세요</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASES.map((c, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' }} className="group hover:shadow-xl transition-all duration-300">
                  {/* Before/After split */}
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    {/* BEFORE (left) */}
                    <div style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 50% 0 0)' }}>
                      <Image src={c.img} alt={`${c.title} 시공 전`} fill className="object-cover grayscale brightness-75" />
                    </div>
                    {/* AFTER (right) */}
                    <div style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 0 0 50%)' }}>
                      <Image src={c.img} alt={`${c.title} 시공 후`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    {/* Labels */}
                    <span style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(30,30,30,0.75)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '5px', zIndex: 10 }}>시공 전</span>
                    <span style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(46,125,50,0.88)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '5px', zIndex: 10 }}>시공 후</span>
                    {/* Divider */}
                    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, transform: 'translateX(-50%)', width: 1, background: 'rgba(255,255,255,0.7)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 28, height: 28, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                        <svg width="14" height="14" fill="none" stroke="#555" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '15px', color: C.dark, marginBottom: '4px' }}>{c.title}</p>
                        <p style={{ fontSize: '13px', color: C.body }}>{c.desc}</p>
                      </div>
                      <span style={{ flexShrink: 0, fontSize: '11px', background: '#EEF2FF', color: C.blue, padding: '4px 10px', borderRadius: '6px', fontWeight: 700, whiteSpace: 'nowrap' }}>{c.tag}</span>
                    </div>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: 3, marginTop: 12 }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} width="13" height="13" fill="#FBC02D" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span style={{ fontSize: '11px', color: C.body, marginLeft: 4 }}>만족도 5점</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. CONTACT
      ═══════════════════════════════════════════════════════ */}
      <section
        id="contact"
        style={{ background: C.contactBg, padding: '100px 20px', overflow: 'hidden' }}
      >
        <ScrollReveal className="max-w-[900px] mx-auto">
          <div style={{ background: '#fff', borderRadius: '8px', padding: 'clamp(40px,6vw,80px) clamp(24px,7vw,80px)', boxShadow: '0 12px 48px rgba(0,0,0,0.12)' }}>
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 700, color: C.orange, lineHeight: 1.2, marginBottom: '12px' }}>
                믿을 수 있는 청소전문가
              </h2>
              <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 34px)', fontWeight: 600, color: C.dark, lineHeight: 1.35 }}>
                지금 바로, 청소하임과 직접 상담해보세요
              </h3>
            </div>

            <ContactForm />
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer style={{ background: C.footer, padding: '50px 0 0' }}>
        <div className="max-w-[1140px] mx-auto px-5">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', paddingBottom: '40px' }}>

            {/* Brand */}
            <div style={{ maxWidth: '480px' }}>
              <Image
                src="/logo.png"
                alt="청소하임"
                width={200}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert mb-4"
              />
              <p style={{ fontSize: '15px', color: C.body, lineHeight: 1.7 }}>
                꼼꼼한 시공부터 사후관리까지 직접 운영팀이 책임지고 도와드립니다.
              </p>
            </div>

            {/* Business info */}
            <div>
              {[
                ['대표자', '김진영'],
                ['사업자등록번호', '000-00-00000'],
                ['문의전화', '010-0000-0000'],
                ['운영시간', '평일·주말 08:00–20:00'],
              ].map(([k, v]) => (
                <p key={k} style={{ fontSize: '15px', color: C.body, lineHeight: 1.85 }}>
                  <span style={{ display: 'inline-block', width: '120px' }}>{k}</span>
                  <span style={{ color: '#9AA5B0' }}>{v}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '18px 20px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: C.body }}>All right Reserved — 청소하임</p>
        </div>
      </footer>
    </>
  )
}
