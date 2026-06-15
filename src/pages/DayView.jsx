import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react'
import { curriculum, phases } from '../data/curriculum'
import { isDayComplete, setDayComplete } from '../utils/progress'

function TypeBadge({ type }) {
  return <span className={`type-badge type-${type}`}>{type.replace('-', ' ')}</span>
}

export default function DayView() {
  const { weekNum, dayNum } = useParams()
  const week = curriculum.find((w) => w.week === Number(weekNum))
  const day = week?.days.find((d) => d.day === Number(dayNum))
  const [done, setDone] = useState(() =>
    week && day ? isDayComplete(week.week, day.day) : false
  )

  if (!week || !day) {
    return (
      <div className="card">
        <h2>Lesson not found</h2>
        <Link to="/roadmap" className="btn" style={{ marginTop: '1rem' }}>
          Back to roadmap
        </Link>
      </div>
    )
  }

  const phase = phases.find((p) => p.id === week.phase)
  const prevDay = day.day > 1 ? day.day - 1 : null
  const nextDay = day.day < 7 ? day.day + 1 : null

  function handleToggle() {
    const next = !done
    setDone(next)
    setDayComplete(week.week, day.day, next)
  }

  return (
    <>
      <nav className="breadcrumb">
        <Link to="/roadmap">Roadmap</Link>
        <span>/</span>
        <span>Week {week.week}</span>
        <span>/</span>
        <span>Day {day.day}</span>
      </nav>

      <header className="page-header">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span className="phase-badge" style={{ background: phase.color }}>
            Phase {phase.id} · Week {week.week}
          </span>
          <TypeBadge type={day.type} />
          {week.cert && <span className="cert-banner">{week.cert}</span>}
        </div>
        <h1>{day.focus}</h1>
        <p>{week.title} — {week.goal}</p>
      </header>

      <div style={{ marginBottom: '1.5rem' }}>
        <button
          type="button"
          className={`btn ${done ? '' : 'btn-primary'}`}
          onClick={handleToggle}
        >
          <CheckCircle2 size={18} />
          {done ? 'Completed — click to undo' : 'Mark as complete'}
        </button>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="detail-section">
          <h3>Lesson Content</h3>
          <p>{day.content}</p>
        </div>

        {day.resources?.length > 0 && (
          <div className="detail-section">
            <h3>Resources</h3>
            <ul className="resource-list">
              {day.resources.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.label} <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-section">
          <h3>Exercise</h3>
          <div className="exercise-box">{day.exercise}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link to="/roadmap" className="btn">
          <ArrowLeft size={16} /> All weeks
        </Link>
        {prevDay && (
          <Link to={`/roadmap/week/${week.week}/day/${prevDay}`} className="btn">
            ← Day {prevDay}
          </Link>
        )}
        {nextDay && (
          <Link to={`/roadmap/week/${week.week}/day/${nextDay}`} className="btn btn-primary">
            Day {nextDay} →
          </Link>
        )}
        {day.day === 7 && week.week < 24 && (
          <Link to={`/roadmap/week/${week.week + 1}/day/1`} className="btn btn-primary">
            Start Week {week.week + 1} →
          </Link>
        )}
      </div>
    </>
  )
}
