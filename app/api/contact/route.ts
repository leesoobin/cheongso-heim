import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, phone, email, message } = body as {
      name: string; phone: string; email?: string; message: string
    }

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 })
    }

    const htmlBody = `
      <!DOCTYPE html>
      <html lang="ko">
      <head><meta charset="UTF-8"></head>
      <body style="font-family:'Apple SD Gothic Neo',AppleGothic,'Noto Sans KR',sans-serif;background:#f8fafc;padding:40px 20px;margin:0;">
        <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <div style="background:#1D4ED8;padding:32px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:800;letter-spacing:-0.5px;">청소하임 문의 접수</h1>
            <p style="color:#BFDBFE;margin:8px 0 0;font-size:14px;">홈페이지를 통해 새 문의가 접수되었습니다</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:14px 16px;background:#EFF6FF;border-radius:8px 0 0 8px;color:#1E40AF;font-weight:700;width:90px;white-space:nowrap;">이름</td>
                <td style="padding:14px 16px;border-bottom:1px solid #F1F5F9;color:#1E293B;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px;background:#EFF6FF;color:#1E40AF;font-weight:700;">연락처</td>
                <td style="padding:14px 16px;border-bottom:1px solid #F1F5F9;color:#1E293B;">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px;background:#EFF6FF;color:#1E40AF;font-weight:700;">이메일</td>
                <td style="padding:14px 16px;border-bottom:1px solid #F1F5F9;color:#1E293B;">${email ? escapeHtml(email) : '미입력'}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px;background:#EFF6FF;color:#1E40AF;font-weight:700;vertical-align:top;">문의사항</td>
                <td style="padding:14px 16px;color:#1E293B;line-height:1.7;">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          <div style="background:#F8FAFC;padding:20px 32px;border-top:1px solid #E2E8F0;">
            <p style="margin:0;color:#94A3B8;font-size:12px;text-align:center;">
              청소하임 홈페이지 문의 접수 시스템 | 이 메일은 자동 발송된 메일입니다.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['dorlqlsl@naver.com'],
      subject: `[청소하임] 새 문의 접수 - ${name} (${phone})`,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: '이메일 전송 실패' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
