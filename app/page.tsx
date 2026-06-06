'use client'

import Image from 'next/image'
import Header from './components/Header'
import HeroStats from './components/HeroStats'
import ContactForm from './components/ContactForm'
import FloatingCTA from './components/FloatingCTA'

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'move-in',
    badge: '입주 · 이사 청소',
    title: '새 보금자리의 완벽한 시작',
    desc: '분진가루, 시공먼지, 접착 잔여물, 몰딩 틈새 오염까지 고출력 흡입 장비와 다단계 필터링 시스템으로 꼼꼼하게 제거합니다. 이사 전·후 모두 가능합니다.',
    tags: ['분진·먼지 제거', '몰딩틈새 세척', '고출력 흡입장비'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    imgAlt: '입주이사 청소 전문',
    reverse: false,
  },
  {
    id: 'home',
    badge: '가정 정기 청소',
    title: '쾌적한 일상을 위한 꼼꼼한 관리',
    desc: '주기적인 방문으로 항상 깨끗하고 건강한 생활 환경을 유지해 드립니다. 청소 빈도와 범위를 고객 맞춤으로 조정합니다.',
    tags: ['주방·욕실 세척', '바닥·창문 청소', '맞춤형 주기 관리'],
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    imgAlt: '가정 정기 청소 서비스',
    reverse: true,
  },
  {
    id: 'office',
    badge: '사무실 · 상업공간 청소',
    title: '비즈니스 환경의 품격을 높이다',
    desc: '사무실, 매장, 식당, 병원 등 다양한 상업공간의 특성에 맞는 전문 청소 서비스를 제공합니다. 업무 공간의 청결이 비즈니스 이미지를 결정합니다.',
    tags: ['사무가구 세척', '바닥 코팅·광택', '영업시간 외 시공'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    imgAlt: '사무실 상업공간 청소',
    reverse: false,
  },
  {
    id: 'special',
    badge: '특수 청소',
    title: '눈에 보이지 않는 곳까지',
    desc: '에어컨 세척, 곰팡이·니코틴 특수 제거, 새집증후군 시공, 소독·방역 등 일반 청소로 해결하기 어려운 전문 영역까지 담당합니다.',
    tags: ['에어컨 세척', '곰팡이·소독', '새집증후군 시공'],
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
    imgAlt: '에어컨 곰팡이 특수청소',
    reverse: true,
  },
]

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: '대표 직접 상담 & 운영',
    desc: '중간 유통 없이 대표가 직접 상담·시공·관리 전 과정을 책임집니다.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: '100% 직영팀 시공',
    desc: '하청 없이 철저히 교육된 직영팀만 투입하여 일관된 품질을 보장합니다.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '친환경 저자극 약품',
    desc: '인체에 무해한 친환경·저자극 세제만을 사용합니다. 어린이와 반려동물도 안심하세요.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '배상책임보험 가입',
    desc: '시공 중 발생할 수 있는 모든 사고에 대해 보험으로 완벽하게 보장합니다.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: '꼼꼼한 사전 점검',
    desc: '시공 전 현장을 직접 방문하여 맞춤 견적과 최적의 시공 계획을 세웁니다.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: '철저한 사후관리',
    desc: '시공 완료 후 고객이 완전히 만족하실 때까지 책임지고 마무리합니다.',
  },
]

const processSteps = [
  {
    step: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: '무료 상담 신청',
    desc: '전화 또는 홈페이지 문의 폼으로 간편하게 무료 상담을 신청하세요.',
  },
  {
    step: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: '현장 방문 견적',
    desc: '대표가 직접 현장을 방문하여 꼼꼼하게 확인 후 정확한 견적을 안내드립니다.',
  },
  {
    step: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: '전문팀 시공',
    desc: '100% 직영팀이 친환경 장비와 세제로 구석구석 꼼꼼하게 시공합니다.',
  },
  {
    step: '04',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '완료 & 사후관리',
    desc: '시공 완료 후 점검을 통해 고객 만족을 확인하고 사후 관리까지 책임집니다.',
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
    text: '직원들이 모두 깜짝 놀랄 만큼 깨끗하게 해주셨어요. 영업시간 외에 작업해 주셔서 업무에 전혀 지장이 없었고, 유리창까지 반짝반짝하게 해주신 덕분에 사무실 분위기가 확 달라졌습니다.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=85"
            alt="깨끗한 인테리어 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-blue-950/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pt-24 pb-16">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-blue-200 text-sm font-semibold rounded-full tracking-widest border border-white/20 mb-8">
            100% 직영 청소 전문업체
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-shadow leading-tight mb-4">
            깨끗한 공간이<br />
            <span className="text-yellow-300">행복한 일상</span>을 만듭니다
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mt-6 mb-10 leading-relaxed font-medium">
            대표가 직접 상담부터 시공, 사후관리까지<br className="hidden md:block" />
            모든 과정을 책임지는 <span className="text-white font-bold">청소하임</span>입니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-orange text-lg px-10 py-4 font-bold shadow-2xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              무료 상담 신청
            </a>
            <a
              href="tel:010-0000-0000"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-200 border border-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              010-0000-0000
            </a>
          </div>

          <HeroStats />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── 2. ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="청소하임 전문 청소 서비스"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-5 -right-5 md:-right-6 bg-blue-700 text-white rounded-2xl px-6 py-5 shadow-xl text-center">
                <p className="text-3xl font-extrabold">10년+</p>
                <p className="text-blue-200 text-sm font-medium mt-0.5">업력</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-badge">ABOUT US</span>
              <h2 className="section-title mb-5">
                대표가 직접 책임지는<br />
                <span className="text-blue-700">청소하임</span>을 소개합니다
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                청소하임은 <strong className="text-orange-500">대표가 상담부터 시공, 사후관리까지 전 과정을 직접 관리</strong>하는
                100% 직영 청소 전문업체입니다. 하청 없이 검증된 직영팀만이 시공하기 때문에
                일관된 품질과 철저한 책임 관리가 가능합니다.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: '대표 직접 운영', icon: '👤' },
                  { label: '직영팀 시공', icon: '🏆' },
                  { label: '친환경 약품', icon: '🌿' },
                  { label: '보험 가입', icon: '🛡️' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-blue-800">{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                무료 상담 신청하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-badge">SERVICES</span>
            <h2 className="section-title">청소하임 전문 서비스</h2>
            <p className="section-sub max-w-2xl mx-auto">
              어떤 공간이든, 어떤 상황이든 청소하임이 완벽하게 해결해 드립니다
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-16 md:space-y-20">
            {services.map((svc) => (
              <div
                key={svc.id}
                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${svc.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <Image
                    src={svc.img}
                    alt={svc.imgAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                      {svc.badge}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <span className="section-badge">{svc.badge}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-white border border-blue-100 text-blue-700 text-sm font-medium rounded-lg shadow-sm">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary"
                  >
                    상담 신청하기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY US ───────────────────────────────────────────── */}
      <section id="why-us" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-700/30 text-blue-300 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
              WHY CHEONGSO HEIM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              왜 청소하임인가요?
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-xl mx-auto">
              수천 건의 시공 경험으로 쌓아온 청소하임만의 차별점을 확인해보세요
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-2xl p-7 transition-all duration-300 hover:border-blue-500 group"
              >
                <div className="w-14 h-14 bg-blue-700/20 group-hover:bg-blue-700 rounded-xl flex items-center justify-center text-blue-400 group-hover:text-white transition-all duration-300 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ──────────────────────────────────────────── */}
      <section id="process" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge">PROCESS</span>
            <h2 className="section-title">간단한 4단계 이용 방법</h2>
            <p className="section-sub max-w-xl mx-auto">
              전화 한 통으로 시작해서 완벽한 청소 완료까지, 청소하임이 모든 걸 책임집니다
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />

            {processSteps.map((step, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-20 h-20 mx-auto bg-blue-50 group-hover:bg-blue-700 border-2 border-blue-200 group-hover:border-blue-700 rounded-2xl flex items-center justify-center text-blue-700 group-hover:text-white transition-all duration-300 mb-5 shadow-sm">
                  {step.icon}
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-700 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-orange text-lg px-12"
            >
              지금 바로 시작하기 →
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ──────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge">REVIEWS</span>
            <h2 className="section-title">
              검증된 청소하임,{' '}
              <span className="relative inline-block">
                100% 실제 후기
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow-300/60 -z-10 rounded" />
              </span>
            </h2>
            <p className="section-sub max-w-xl mx-auto">
              실제 고객님들의 생생한 후기를 확인해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="card border border-blue-100 hover:border-blue-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">"{r.text}"</p>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{r.name}</p>
                    <p className="text-sm text-slate-500">{r.area}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg font-semibold">
                    {r.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-blue-100 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Info */}
            <div>
              <span className="section-badge">CONTACT</span>
              <h2 className="section-title mb-6">
                <span className="text-orange-500">믿을 수 있는</span><br />
                청소 전문가와 상담하세요
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                청소 고민이 있으시다면 바로 연락 주세요. 대표가 직접 상담하고
                가장 적합한 서비스를 안내해 드립니다.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">전화 문의</p>
                    <a href="tel:010-0000-0000" className="text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors">
                      010-0000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">운영 시간</p>
                    <p className="font-bold text-slate-900">평일 · 주말 08:00 – 20:00</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                <p className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-4">청소하임이 약속합니다</p>
                <ul className="space-y-2.5">
                  {['100% 직영팀 시공 — 하청 없음', '대표 직접 현장 방문 견적', '시공 후 만족 보장', '배상책임보험 가입'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-700 text-sm">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-50">
              <h3 className="text-xl font-bold text-slate-900 mb-1">무료 상담 신청</h3>
              <p className="text-slate-500 text-sm mb-7">입력하신 연락처로 빠르게 연락드리겠습니다.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start pb-10 border-b border-slate-700">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Image
                  src="/logo.jpeg"
                  alt="청소하임 로고"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                꼼꼼한 시공부터 사후관리까지,<br />
                직접 운영팀이 책임지고 도와드립니다.
              </p>
            </div>

            {/* Business Info */}
            <div className="text-sm space-y-2">
              <p className="text-white font-semibold text-base mb-3">사업자 정보</p>
              <p><span className="text-slate-500">대표자</span> <span className="text-slate-300 ml-2">김진영</span></p>
              <p><span className="text-slate-500">사업자등록번호</span> <span className="text-slate-300 ml-2">000-00-00000</span></p>
              <p><span className="text-slate-500">문의전화</span>{' '}
                <a href="tel:010-0000-0000" className="text-slate-300 ml-2 hover:text-white transition-colors">010-0000-0000</a>
              </p>
              <p className="pt-2">
                <span className="text-slate-500">운영시간</span>{' '}
                <span className="text-slate-300 ml-2">평일·주말 08:00 – 20:00</span>
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
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
