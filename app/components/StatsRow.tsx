import { ClipboardCheckIcon, ThumbsUpIcon, TeamIcon } from './icons'
import { C } from '../theme'

const STATS = [
  { icon: ClipboardCheckIcon, value: '5,000+', label: '누적시공' },
  { icon: ThumbsUpIcon,       value: '98%',    label: '고객만족도' },
  { icon: TeamIcon,           value: '500+',   label: '재이용·추천' },
]

export default function StatsRow() {
  return (
    <div
      className="grid grid-cols-3"
      style={{
        background: C.navyCard,
        border: `1px solid ${C.navyBorder}`,
        borderRadius: '16px',
        padding: 'clamp(16px,2.5vw,28px) clamp(4px,2vw,16px)',
      }}
    >
      {STATS.map((s, i) => {
        const Icon = s.icon
        return (
          <div
            key={i}
            className="flex flex-col items-center text-center"
            style={{ padding: '0 clamp(2px,1.2vw,16px)', borderRight: i < STATS.length - 1 ? `1px solid ${C.navyBorder}` : 'none' }}
          >
            <Icon size={26} color={C.gold} className="mb-2" />
            <p style={{ fontSize: 'clamp(18px,2.6vw,28px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{s.value}</p>
            <p style={{ fontSize: 'clamp(11px,1.4vw,15px)', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{s.label}</p>
          </div>
        )
      })}
    </div>
  )
}
