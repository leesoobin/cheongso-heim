'use client'

import { useState, type CSSProperties, type ChangeEvent, type FormEvent } from 'react'
import { PaperPlaneIcon } from './icons'
import { C } from '../theme'

type Status = 'idle' | 'loading' | 'success' | 'error'

const SERVICE_OPTIONS = ['입주 · 이사청소', '정기청소', '사무실 · 상가청소', '특수청소', '프리미엄 케어 (새집증후군 · 집진)', '기타']
const SPACE_OPTIONS = ['아파트', '빌라 · 단독주택', '오피스텔', '상가 · 사무실', '기타']

const inputStyle: CSSProperties = {
  width: '100%', padding: '13px 16px', borderRadius: '10px',
  border: '1px solid #E5E8EE', background: '#fff',
  fontSize: '15px', color: '#1A2540',
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', serviceType: '', spaceType: '', date: '', message: '', agree: false,
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showPolicy, setShowPolicy] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.serviceType || !form.message) {
      setErrorMsg('이름, 연락처, 서비스 종류, 문의 내용은 필수 입력 항목입니다.')
      return
    }
    if (!form.agree) {
      setErrorMsg('개인정보 수집 및 이용에 동의해 주세요.')
      return
    }
    setErrorMsg('')
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          serviceType: form.serviceType,
          spaceType: form.spaceType,
          date: form.date,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('서버 오류')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', serviceType: '', spaceType: '', date: '', message: '', agree: false })
    } catch {
      setStatus('error')
      setErrorMsg('전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(239,193,121,0.15)' }}>
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke={C.gold} strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1A2540', marginBottom: '10px' }}>상담 신청이 접수되었습니다!</h3>
        <p style={{ fontSize: '15px', color: '#8A93A6', marginBottom: '28px' }}>빠른 시간 내에 연락드리겠습니다.</p>
        <button onClick={() => setStatus('idle')} style={{ background: C.navy, color: '#fff', padding: '12px 32px', borderRadius: '10px', fontWeight: 700, fontSize: '15px' }}>
          다시 문의하기
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-7 sm:mb-9">
        <span style={{ flex: 1, height: '1px', background: '#E5E8EE' }} />
        <h3 style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 800, color: '#1A2540', whiteSpace: 'nowrap' }}>상담 신청 정보 입력</h3>
        <span style={{ flex: 1, height: '1px', background: '#E5E8EE' }} />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>
              이름 <span style={{ color: '#E8825A' }}>*</span>
            </label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="이름을 입력해주세요." style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>
              연락처 <span style={{ color: '#E8825A' }}>*</span>
            </label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="휴대폰 번호를 입력해주세요." style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>이메일</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="이메일을 입력해주세요." style={inputStyle} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>
            서비스 종류 <span style={{ color: '#E8825A' }}>*</span>
          </label>
          <select name="serviceType" value={form.serviceType} onChange={handleChange} style={{ ...inputStyle, color: form.serviceType ? '#1A2540' : '#AEB6C4' }}>
            <option value="" disabled>서비스를 선택해주세요.</option>
            {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>건물/공간 유형</label>
          <select name="spaceType" value={form.spaceType} onChange={handleChange} style={{ ...inputStyle, color: form.spaceType ? '#1A2540' : '#AEB6C4' }}>
            <option value="" disabled>건물 또는 공간 유형을 선택해주세요.</option>
            {SPACE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>희망 날짜</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} style={{ ...inputStyle, color: form.date ? '#1A2540' : '#AEB6C4' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#1A2540', marginBottom: '8px' }}>
            문의 내용 <span style={{ color: '#E8825A' }}>*</span>
          </label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="문의 내용을 자세히 입력해주세요." style={{ ...inputStyle, resize: 'none' }} />
        </div>

        {errorMsg && (
          <p style={{ color: '#E8825A', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
            </svg>
            {errorMsg}
          </p>
        )}

        <div className="flex items-start justify-between gap-3 pt-2">
          <div className="flex items-start gap-2.5">
            <input type="checkbox" id="agree" name="agree" checked={form.agree} onChange={handleChange} className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer" style={{ accentColor: C.navy }} />
            <label htmlFor="agree" style={{ fontSize: '14px', color: '#5A6478', cursor: 'pointer', lineHeight: 1.6 }}>
              개인정보 수집 및 이용에 동의합니다. <span style={{ color: '#8A93A6' }}>(필수)</span>
            </label>
          </div>
          <button type="button" onClick={() => setShowPolicy((v) => !v)} style={{ fontSize: '13px', color: C.navy, whiteSpace: 'nowrap', flexShrink: 0 }}>
            자세히 보기 {showPolicy ? '∨' : '>'}
          </button>
        </div>

        {showPolicy && (
          <div style={{ background: '#fff', border: '1px solid #E5E8EE', borderRadius: '10px', padding: '14px 16px', fontSize: '12.5px', color: '#8A93A6', lineHeight: 1.7 }}>
            수집 항목: 이름, 연락처, 이메일, 상담 내용 / 수집 목적: 청소 서비스 상담 및 견적 안내 /
            보유 기간: 상담 완료 후 6개월까지 보관 후 파기됩니다.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            width: '100%', padding: '17px', borderRadius: '12px', marginTop: '8px',
            background: C.navy, color: '#fff', fontSize: '16px', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            opacity: status === 'loading' ? 0.6 : 1,
          }}
        >
          {status === 'loading' ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              전송 중...
            </>
          ) : (
            <>
              <PaperPlaneIcon size={18} color={C.gold} />
              상담 신청하기
            </>
          )}
        </button>
      </form>
    </div>
  )
}
