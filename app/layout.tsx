import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '청소하임 | 믿을 수 있는 청소 전문가',
  description: '대표가 직접 상담부터 시공까지 책임지는 100% 직영 청소 전문업체 청소하임. 입주·이사 청소, 가정 청소, 사무실 청소, 특수 청소 전문.',
  keywords: '청소하임, 입주청소, 이사청소, 가정청소, 사무실청소, 특수청소, 청소전문업체',
  openGraph: {
    title: '청소하임 | 믿을 수 있는 청소 전문가',
    description: '대표가 직접 상담부터 시공까지 책임지는 100% 직영 청소 전문업체',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}
