import { Link } from 'react-router-dom'
import { ArrowRight, Award, Calendar, Target } from 'lucide-react'
import { curriculum, phases } from '../data/curriculum'
import { countCompleted, getProgress, getWeekProgress } from '../utils/progress'

const TOTAL_DAYS = curriculum.reduce((sum, w) => sum + w.days.length, 0)

function findCurrentWeek() {
  const progress = getProgress()
  for (const week of curriculum) {
    const incomplete = week.days.find((d) => !progress[`${week.week}-${d.day}`])
    if (incomplete) return { week, day: incomplete }
  }
  return { week: curriculum[curriculum.length - 1], day: curriculum[curriculum.length - 1].days[6] }
}

export default function Home() {
  const completed = countCompleted()
  const pct = Math.round((completed / TOTAL_DAYS) * 100)
  const { week, day } = findCurrentWeek()
  const phase = phases.find((p) => p.id === week.phase)

  return (
    <>
      <header className="page-header">
        <h1>Cloud Engineering Roadmap</h1>
        <p>
          A structured 24-week path from Linux fundamentals to production Kubernetes, certifications,
          and job-ready portfolio projects.
        </p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="label">Total Progress</div>
          <div className="value">{pct}%</div>
          <div className="progress-bar" style={{ marginTop: '0.75rem' }}>
            <span style={{ width: `${pct}%` }} />
          </div>
          <small style={{ color: 'var(--text-muted)' }}>
            {completed} / {TOTAL_DAYS} days completed
          </small>
        </div>
        <div className="stat-card">
          <div className="label">Duration</div>
          <div className="value">24</div>
          <small style={{ color: 'var(--text-muted)' }}>weeks · 168 days</small>
        </div>
        <div className="stat-card">
          <div className="label">Certifications</div>
          <div className="value">2</div>
          <small style={{ color: 'var(--text-muted)' }}>CLF-C02 · SAA-C03</small>
        </div>
        <div className="stat-card">
          <div className="label">Phases</div>
          <div className="value">3</div>
          <small style={{ color: 'var(--text-muted)' }}>Foundations → DevOps → Career</small>
        </div>
      </div>

      <div className="card-grid two-col" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={20} color="var(--accent)" />
            Continue Learning
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            Week {week.week}: {week.title} — Day {day.day}
          </p>
          <p>{day.focus}</p>
          {week.cert && <span className="cert-banner">{week.cert}</span>}
          <div style={{ marginTop: '1rem' }}>
            <Link
              className="btn btn-primary"
              to={`/roadmap/week/${week.week}/day/${day.day}`}
            >
              Open today&apos;s lesson <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="card">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={20} color="var(--warning)" />
            Current Phase
          </h2>
          <span
            className="phase-badge"
            style={{ background: phase.color, marginTop: '0.75rem', marginBottom: '0.75rem' }}
          >
            Phase {phase.id}: {phase.title}
          </span>
          <p style={{ color: 'var(--text-muted)' }}>{phase.description}</p>
          <p style={{ fontSize: '0.9rem' }}>Weeks {phase.weeks}</p>
        </div>
      </div>

      <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Calendar size={20} />
        Phase Overview
      </h2>
      <div className="card-grid">
        {phases.map((phase) => {
          const weeksInPhase = curriculum.filter((w) => w.phase === phase.id)
          const phaseDays = weeksInPhase.reduce((s, w) => s + w.days.length, 0)
          const phaseDone = weeksInPhase.reduce(
            (s, w) => s + getWeekProgress(w).completed,
            0
          )
          const phasePct = Math.round((phaseDone / phaseDays) * 100)

          return (
            <div key={phase.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="phase-badge" style={{ background: phase.color }}>
                  Phase {phase.id}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{phasePct}%</span>
              </div>
              <h3 style={{ marginTop: '0.75rem' }}>{phase.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{phase.description}</p>
              <div className="progress-bar" style={{ marginTop: '0.75rem' }}>
                <span style={{ width: `${phasePct}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
