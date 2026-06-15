import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { curriculum, phases } from '../data/curriculum'
import { getWeekProgress, isDayComplete, toggleDay } from '../utils/progress'

function TypeBadge({ type }) {
  return <span className={`type-badge type-${type}`}>{type.replace('-', ' ')}</span>
}

function WeekCard({ week, phaseColor }) {
  const [open, setOpen] = useState(false)
  const { completed, total } = getWeekProgress(week)
  const pct = Math.round((completed / total) * 100)

  return (
    <div className="week-card">
      <button type="button" className="week-card-header" onClick={() => setOpen(!open)}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="phase-badge" style={{ background: phaseColor }}>
              Week {week.week}
            </span>
            {week.cert && <span className="cert-banner">{week.cert}</span>}
          </div>
          <h3 style={{ marginTop: '0.5rem' }}>{week.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0' }}>
            {week.goal}
          </p>
        </div>
        <div style={{ textAlign: 'right', minWidth: '100px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {completed}/{total} days
          </div>
          <div className="progress-bar" style={{ marginTop: '0.35rem', width: '100px' }}>
            <span style={{ width: `${pct}%` }} />
          </div>
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
      </button>

      {open && (
        <div className="week-card-body">
          {week.days.map((day) => (
            <div key={day.day} className="day-row">
              <button
                type="button"
                className={`check-btn ${isDayComplete(week.week, day.day) ? 'done' : ''}`}
                onClick={() => toggleDay(week.week, day.day)}
                aria-label={`Mark day ${day.day} complete`}
              >
                {isDayComplete(week.week, day.day) ? '✓' : ''}
              </button>
              <Link className="day-link" to={`/roadmap/week/${week.week}/day/${day.day}`}>
                <strong>Day {day.day}: {day.focus}</strong>
                <div className="day-meta">
                  <TypeBadge type={day.type} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Roadmap() {
  return (
    <>
      <header className="page-header">
        <h1>24-Week Roadmap</h1>
        <p>
          Expand each week to see daily lessons. Mark days complete as you go — progress is saved
          in your browser.
        </p>
      </header>

      {phases.map((phase) => (
        <section key={phase.id} style={{ marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="phase-badge" style={{ background: phase.color }}>
              Phase {phase.id} · Weeks {phase.weeks}
            </span>
            <h2 style={{ marginTop: '0.75rem' }}>{phase.title}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{phase.description}</p>
          </div>
          <div className="card-grid">
            {curriculum
              .filter((w) => w.phase === phase.id)
              .map((week) => (
                <WeekCard key={week.week} week={week} phaseColor={phase.color} />
              ))}
          </div>
        </section>
      ))}
    </>
  )
}
