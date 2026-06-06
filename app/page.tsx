'use client'

import Image from 'next/image'
import Header from './components/Header'
import HeroStats from './components/HeroStats'
import HeroSlideshow from './components/HeroSlideshow'
import ContactForm from './components/ContactForm'
import FloatingCTA from './components/FloatingCTA'
import ScrollReveal from './components/ScrollReveal'

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'move-in',
    badge: '입주 · 이사 청소',
    title: '새 보금자리의 완벽한 시작',
    desc: '분진가루, 시공먼지, 접착 잔여물, 몰딩 틈새 오염까지 고출력 흡입 장비와 다단계 필터링 시스템으로 꼼꼼하게 제거합니다. 이사 전·후 모두 가능합니다.',
    tags: ['분진·먼지 제거', '몰딩틈새 세척', '고출력 흡입장비'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    imgAlt: '입주이사 청소',
    reverse: false,
  },
  {
    id: 'home',
    badge: '가정 정기 청소',
    title: '쾌적한 일상을 위한 꼼꼼한 관리',
    desc: '주기적인 방문으로 항상 깨끗하고 건강한 생활 환경을 유지해 드립니다. 청소 빈도와 범위를 고객 맞춤으로 조정합니다.',
    tags: ['주방·욕실 세척', '바닥·창문 청소', '맞춤형 주기 관리'],
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
    imgAlt: '가정 정기 청소',
    reverse: true,
  },
  {
    id: 'office',
    badge: '사무실 · 상업공간 청소',
    title: '비즈니스 환경의 품격을 높이다',
    desc: '사무실, 매장, 식당, 병원 등 다양한 상업공간의 특성에 맞는 전문 청소 서비스. 업무 공간의 청결이 비즈니스 이미지를 결정합니다.',
    tags: ['사무가구 세척', '바닥 코팅·광택', '영업시간 외 시공'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    imgAlt: '사무실 상업공간 청소',
    reverse: false,
  },
  {
    id: 'special',
    badge: '특수 청소',
    title: '눈에 보이지 않는 곳까지',
    desc: '에어컨 세척, 곰팡이·니코틴 특수 제거, 새집증후군 시공, 소독·방역 등 일반 청소로 해결하기 어려운 전문 영역을 담당합니다.',
    tags: ['에어컨 세척', '곰팡이·소독', '새집증후군 시공'],
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=80',
    imgAlt: '에어컨 곰팡이 특수청소',
    reverse: true,
  },
]

const features = [
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
    title: '대표 직접 상담 & 운영',
    desc: '중간 유통 없이 대표가 직접 상담부터 시공, 관리 전 과정을 책임집니다.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>,
    title: '100% 직영팀 시공',
    desc: '하청 없이 철저히 교육된 직영팀만 투입하여 일관된 품질을 보장합니다.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
    title: '친환경 저자극 약품',
    desc: '인체에 무해한 친환경·저자극 세제만 사용합니다. 어린이·반려동물도 안심하세요.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
    title: '배상책임보험 가입',
    desc: '시공 중 발생하는 모든 사고를 보험으로 완벽하게 보장합니다.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
    title: '꼼꼼한 사전 점검',
    desc: '시공 전 현장을 직접 방문하여 맞춤 견적과 최적 시공 계획을 세웁니다.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>,
    title: '철저한 사후관리',
    desc: '시공 완료 후 고객이 완전히 만족하실 때까지 책임지고 마무리합니다.',
  },
]

const processSteps = [
  {
    step: '01',
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
    title: '무료 상담 신청',
    desc: '전화 또는 홈페이지 문의 폼으로 간편하게 무료 상담을 신청하세요.',
  },
  {
    step: '02',
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>,
    title: '현장 방문 견적',
    desc: '대표가 직접 현장을 방문하여 꼼꼼하게 확인 후 정확한 견적을 안내드립니다.',
  },
  {
    step: '03',
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>,
    title: '전문팀 시공',
    desc: '100% 직영팀이 친환경 장비와 세제로 구석구석 꼼꼼하게 시공합니다.',
  },
  {
    step: '04',
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
    title: '완료 & 사후관리',
    desc: '시공 완료 후 최종 점검으로 고객 만족을 확인하고 사후 관리까지 책임집니다.',
  },
]

const cases = [
  {
    title: '아파트 33평 입주 청소',
    tag: '입주 청소',
    desc: '신규 입주 전 시공 먼지·분진·접착 잔여물 전체 제거',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '주방 기름때·탄화물 제거',
    tag: '주방 청소',
    desc: '환기구 세척, 인덕션·가스레인지 분해 후 재조립 완료',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '욕실 물때·곰팡이 완전 제거',
    tag: '욕실 청소',
    desc: '줄눈 곰팡이 전문 제거, 유리·타일 물때 세척 완료',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '사무실 50평 바닥 광택 복원',
    tag: '사무실 청소',
    desc: '바닥 코팅 전처리 후 헤비 UV 광택 시공 완료',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '에어컨 내부 곰팡이 세척',
    tag: '에어컨 청소',
    desc: '필터·코일·배수판 분리 세척, 냄새 및 균 완전 제거',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '거실·창문 전체 청소',
    tag: '가정 청소',
    desc: '창문 안팎·블라인드·몰딩 구석까지 꼼꼼하게 세척',
    img: 'https://images.unsplash.com/photo-1484154218791-d3b6498ca4a1?auto=format&fit=crop&w=900&q=80',
  },
]

const reviews = [
  {
    name: '이○○',
    service: '입주 청소',
    area: '아파트 33평',
    rating: 5,
    text: '이사 후 정말 더러운 상태였는데 청소하임 덕분에 새 집처럼 깨끗해졌어요! 대표님이 직접 오셔서 꼼꼼하게 확인해 주시는 모습이 정말 믿음직했습니다. 다음에도 꼭 부르겠습니다.',
  },
  {
    name: '박○○',
    service: '가정 정기 청소',
    area: '빌라 25평',
    rating: 5,
    text: '3개월째 정기 청소를 맡기고 있는데 매번 너무 만족스러워요. 처음에 꼼꼼하게 해주시는 거 보고 감탄했는데 지금도 한결같이 완벽하게 해주십니다. 가격도 합리적이에요!',
  },
  {
    name: '최○○',
    service: '사무실 청소',
    area: '사무실 50평',
    rating: 5,
    text: '직원들이 모두 깜짝 놀랄 만큼 깨끗하게 해주셨어요. 영업시간 외에 작업해 주셔서 업무에 전혀 지장이 없었고, 사무실 분위기가 확 달라져서 정말 만족합니다.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* ────────────────────────────────────────────────────────
          1. HERO
      ──────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <HeroSlideshow />

        <div className="relative z-20 max-w-4xl mx-auto px-5 pt-28 pb-16">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-semibold rounded-full tracking-widest border border-white/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              100% 직영 청소 전문업체
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-shadow leading-[1.1] mb-5">
              깨끗한 공간이<br />
              <span className="text-yellow-300">행복한 일상</span>을 만듭니다
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed font-medium mb-10">
              대표가 직접 상담부터 시공, 사후관리까지<br className="hidden sm:block" />
              모든 과정을 책임지는 <span className="text-white font-bold">청소하임</span>입니다
            </p>
          </ScrollReveal>

          <ScrollReveal delay={360}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-orange text-base sm:text-lg px-10 py-4 font-bold shadow-2xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
                무료 상담 신청
              </a>
              <a href="tel:010-0000-0000" className="inline-flex items-center justify-center gap-2.5 bg-white/12 hover:bg-white/22 backdrop-blur-sm text-white font-semibold text-base sm:text-lg px-10 py-4 rounded-xl transition-all duration-200 border border-white/25">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                010-0000-0000
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <HeroStats />
          </ScrollReveal>
        </div>

        {/* scroll hint */}
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors cursor-pointer">
          <span className="text-[11px] tracking-widest uppercase font-medium">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </a>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT
      ──────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <ScrollReveal from="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                    alt="청소하임 전문 청소 서비스"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* floating badge */}
                <div className="absolute -bottom-5 -right-4 md:-right-6 bg-blue-700 text-white rounded-2xl px-6 py-5 shadow-xl text-center">
                  <p className="text-3xl font-extrabold leading-none">10년+</p>
                  <p className="text-blue-200 text-sm font-medium mt-1">업력</p>
                </div>
                {/* decorative ring */}
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-blue-100 opacity-60" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal from="right">
              <span className="section-badge">ABOUT US</span>
              <h2 className="section-title mb-5">
                대표가 직접 책임지는<br />
                <span className="text-blue-700">청소하임</span>을 소개합니다
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                청소하임은{' '}
                <strong className="text-orange-500">
                  대표가 상담부터 시공, 사후관리까지 전 과정을 직접 관리
                </strong>
                하는 100% 직영 청소 전문업체입니다. 하청 없이 검증된 직영팀만이 시공하기 때문에
                일관된 품질과 철저한 책임 관리가 가능합니다.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: '대표 직접 운영', sub: '중간 유통 없음', color: 'bg-blue-50 border-blue-100' },
                  { label: '직영팀 시공',    sub: '하청 없는 품질', color: 'bg-blue-50 border-blue-100' },
                  { label: '친환경 약품',    sub: '인체 무해 세제', color: 'bg-green-50 border-green-100' },
                  { label: '보험 가입',      sub: '사고 완벽 보장', color: 'bg-orange-50 border-orange-100' },
                ].map(item => (
                  <div key={item.label} className={`flex flex-col gap-0.5 rounded-xl px-4 py-3 border ${item.color}`}>
                    <span className="text-sm font-bold text-slate-800">{item.label}</span>
                    <span className="text-xs text-slate-500">{item.sub}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary">
                무료 상담 신청하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. SERVICES
      ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="text-center mb-16 md:mb-20">
            <span className="section-badge">SERVICES</span>
            <h2 className="section-title">청소하임 전문 서비스</h2>
            <p className="section-sub max-w-xl mx-auto">
              어떤 공간이든, 어떤 상황이든 청소하임이 완벽하게 해결해 드립니다
            </p>
          </ScrollReveal>

          <div className="space-y-20 md:space-y-28">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${svc.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image */}
                <ScrollReveal from={svc.reverse ? 'right' : 'left'}>
                  <div className="group relative rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={svc.img}
                        alt={svc.imgAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* bottom gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    </div>
                    {/* badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-blue-700/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                        {svc.badge}
                      </span>
                    </div>
                    {/* hover shine */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                  </div>
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal from={svc.reverse ? 'left' : 'right'} delay={150}>
                  <div>
                    <span className="section-badge">{svc.badge}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">{svc.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {svc.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-100 text-blue-700 text-sm font-medium rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
                          <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#contact" className="btn-primary">
                      상담 신청하기
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. WHY US
      ──────────────────────────────────────────────────────── */}
      <section id="why-us" className="py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-700/25 text-blue-300 rounded-full text-sm font-semibold tracking-widest uppercase mb-5">
              WHY CHEONGSO HEIM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              왜 청소하임인가요?
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-xl mx-auto">
              수천 건의 시공 경험으로 쌓아온 청소하임만의 차별점을 확인해보세요
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 80} from="scale">
                <div className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/60 rounded-2xl p-7 transition-all duration-300 cursor-default h-full">
                  <div className="w-14 h-14 bg-blue-700/15 group-hover:bg-blue-700 rounded-xl flex items-center justify-center text-blue-400 group-hover:text-white transition-all duration-300 mb-5">
                    {f.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2.5 leading-snug">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. PROCESS
      ──────────────────────────────────────────────────────── */}
      <section id="process" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="text-center mb-14">
            <span className="section-badge">PROCESS</span>
            <h2 className="section-title">간단한 4단계 이용 방법</h2>
            <p className="section-sub max-w-xl mx-auto">
              전화 한 통으로 시작해서 완벽한 청소 완료까지, 청소하임이 모든 걸 책임집니다
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* connecting line — desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent z-0 pointer-events-none" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100} className="relative z-10 text-center">
                <div className="group relative inline-flex mb-5">
                  <div className="w-[72px] h-[72px] bg-blue-50 group-hover:bg-blue-700 border-2 border-blue-200 group-hover:border-blue-700 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mx-auto">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-700 text-white rounded-full text-[10px] font-extrabold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14" delay={400}>
            <a href="#contact" className="btn-orange text-base sm:text-lg px-12 py-4">
              지금 바로 시작하기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. CASES (시공사례)
      ──────────────────────────────────────────────────────── */}
      <section id="cases" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="text-center mb-14">
            <span className="section-badge">CASES</span>
            <h2 className="section-title">청소하임 시공사례</h2>
            <p className="section-sub max-w-xl mx-auto">
              직접 시공한 현장의 전·후를 확인해보세요
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {cases.map((c, i) => (
              <ScrollReveal key={i} delay={i * 80} from="scale">
                <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-100">
                  {/* Before / After image split */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    {/* BEFORE — left half (desaturated + dark) */}
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: 'inset(0 50% 0 0)' }}
                    >
                      <Image
                        src={c.img}
                        alt={`${c.title} 시공 전`}
                        fill
                        className="object-cover grayscale brightness-[0.65] contrast-[0.9]"
                      />
                      <div className="absolute inset-0 bg-slate-900/15" />
                    </div>

                    {/* AFTER — right half (clean & vibrant) */}
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: 'inset(0 0 0 50%)' }}
                    >
                      <Image
                        src={c.img}
                        alt={`${c.title} 시공 후`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* BEFORE label */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-slate-700/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        시공 전
                      </span>
                    </div>

                    {/* AFTER label */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-green-500/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        시공 후
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center">
                      <div className="w-px flex-1 bg-white/70" />
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8M8 17h8" />
                        </svg>
                      </div>
                      <div className="w-px flex-1 bg-white/70" />
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-slate-900 text-[15px] leading-snug mb-1">{c.title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                      </div>
                      <span className="flex-shrink-0 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg font-semibold border border-blue-100">
                        {c.tag}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="text-xs text-slate-400 ml-1">만족도 5점</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. REVIEWS
      ──────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal className="text-center mb-14">
            <span className="section-badge">REVIEWS</span>
            <h2 className="section-title">
              검증된 청소하임,{' '}
              <span className="relative inline-block">
                100% 실제 후기
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow-300/50 -z-10 rounded" />
              </span>
            </h2>
            <p className="section-sub max-w-xl mx-auto">실제 고객님들의 생생한 후기를 확인하세요</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed text-[15px] flex-1 mb-6">"{r.text}"</p>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                        <p className="text-xs text-slate-400">{r.area}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap">
                      {r.service}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. CONTACT
      ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-blue-700 to-blue-900 overflow-hidden relative">
        {/* background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle, white 1px, transparent 1px)',backgroundSize:'32px 32px'}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left */}
            <ScrollReveal from="left">
              <span className="inline-block px-4 py-1.5 bg-white/15 text-blue-100 rounded-full text-sm font-semibold tracking-widest uppercase mb-5">
                CONTACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                <span className="text-yellow-300">믿을 수 있는</span><br />
                청소 전문가와 상담하세요
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-10">
                청소 고민이 있으시다면 바로 연락 주세요.<br />
                대표가 직접 상담하고 가장 적합한 서비스를 안내해 드립니다.
              </p>

              <div className="space-y-4 mb-10">
                <a href="tel:010-0000-0000" className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/15 rounded-xl transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-medium uppercase tracking-wide">전화 문의</p>
                    <p className="text-white text-xl font-bold">010-0000-0000</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-medium uppercase tracking-wide">운영 시간</p>
                    <p className="text-white font-bold">평일 · 주말 08:00 – 20:00</p>
                  </div>
                </div>
              </div>

              {/* Trust list */}
              <div className="p-5 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">청소하임이 약속합니다</p>
                <ul className="space-y-2.5">
                  {[
                    '100% 직영팀 시공 — 하청 없음',
                    '대표 직접 현장 방문 견적',
                    '시공 후 만족 보장',
                    '배상책임보험 가입',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal from="right" delay={150}>
              <div className="bg-white rounded-2xl shadow-2xl p-7 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">무료 상담 신청</h3>
                <p className="text-slate-500 text-sm mb-7">입력하신 연락처로 빠르게 연락드리겠습니다.</p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. FOOTER
      ──────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start pb-10 border-b border-slate-700/60">

            <div>
              <div className="mb-5">
                <Image
                  src="/logo.png"
                  alt="청소하임 로고"
                  width={160}
                  height={56}
                  className="h-11 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-slate-500">
                꼼꼼한 시공부터 사후관리까지,<br />
                직접 운영팀이 책임지고 도와드립니다.
              </p>
            </div>

            <div className="text-sm space-y-2.5">
              <p className="text-white font-semibold text-base mb-4">사업자 정보</p>
              {[
                { label: '대표자',          value: '김진영' },
                { label: '사업자등록번호',  value: '000-00-00000' },
                { label: '문의전화',        value: '010-0000-0000', href: 'tel:010-0000-0000' },
                { label: '운영시간',        value: '평일·주말 08:00 – 20:00' },
              ].map(item => (
                <p key={item.label}>
                  <span className="text-slate-500 w-28 inline-block">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className="text-slate-300 hover:text-white transition-colors">{item.value}</a>
                    : <span className="text-slate-300">{item.value}</span>
                  }
                </p>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
            <p>© 2025 청소하임. All rights reserved.</p>
            <nav className="flex gap-5">
              <a href="#" className="hover:text-slate-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-slate-400 transition-colors">이용약관</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}
