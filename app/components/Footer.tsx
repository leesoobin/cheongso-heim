import Image from 'next/image'
import { C } from '../theme'

const BUSINESS_INFO = [
  ['대표자', '김진영'],
  ['사업자등록번호', '000-00-00000'],
  ['문의전화', '010-0000-0000'],
  ['운영시간', '평일 · 주말 08:00–20:00'],
]

export default function Footer() {
  return (
    <footer style={{ background: C.navyDeep, padding: '50px 0 0' }}>
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10">
        <div className="flex flex-wrap gap-8" style={{ justifyContent: 'space-between', paddingBottom: '40px' }}>

          <div style={{ maxWidth: '480px' }}>
            <Image
              src="/logo.png"
              alt="청소하임"
              width={200}
              height={60}
              className="h-12 w-auto object-contain brightness-0 invert mb-4"
            />
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
              꼼꼼한 시공부터 사후관리까지 직접 운영팀이 책임지고 도와드립니다.
            </p>
          </div>

          <div>
            {BUSINESS_INFO.map(([k, v]) => (
              <p key={k} style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85 }}>
                <span style={{ display: 'inline-block', width: '120px' }}>{k}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{v}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${C.navyBorder}`, padding: '18px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)' }}>All right Reserved — 청소하임</p>
      </div>
    </footer>
  )
}
