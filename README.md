# 청소하임 (cleanheim.com)

청소 전문 업체 청소하임의 랜딩 페이지입니다.

## 배포 구조

```
코드(GitHub) → 자동 배포(Vercel) → 도메인 연결(가비아 DNS)
```

| 역할 | 서비스 | 비고 |
|---|---|---|
| 코드 저장소 | GitHub (`leesoobin/cheongso-heim`) | 소스코드 관리 |
| 서버/배포 | Vercel (`cheongso-heim` 프로젝트) | 코드 실제로 실행되는 곳 |
| 도메인 | 가비아에서 구매 (`cleanheim.com`) | DNS만 가비아에서 관리 |

**가비아는 도메인 구매처일 뿐, 코드나 서버와는 무관합니다.**
가비아 DNS에 아래 레코드를 추가해서 Vercel로 연결한 것입니다:

```
A     cleanheim.com      → 76.76.21.21
CNAME www.cleanheim.com  → cname.vercel-dns.com.
```

## 배포 방법

```bash
npm run build        # 빌드 확인
git push origin main # GitHub에 push
vercel --prod        # Vercel 프로덕션 배포
```

## 로컬 개발

```bash
npm install
npm run dev          # http://localhost:3000
```

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline styles
- **Deploy**: Vercel
- **Domain**: cleanheim.com (가비아 구매)
