import { Link } from 'react-router-dom'
import { ExternalLink, FolderKanban } from 'lucide-react'
import { curriculum } from '../data/curriculum'

const portfolioProjects = curriculum.flatMap((week) =>
  week.days
    .filter((d) => d.type === 'project')
    .map((d) => ({
      week: week.week,
      day: d.day,
      title: d.focus,
      description: d.content,
      exercise: d.exercise,
      phase: week.phase,
    }))
)

const phaseColors = { 1: '#0369a1', 2: '#15803d', 3: '#7c3aed' }

export default function Projects() {
  return (
    <>
      <header className="page-header">
        <h1>Portfolio Projects</h1>
        <p>
          {portfolioProjects.length} capstone and weekly projects across the curriculum. Each one
          belongs on GitHub with a README and architecture diagram where applicable.
        </p>
      </header>

      <div className="card-grid">
        {portfolioProjects.map((project) => (
          <article key={`${project.week}-${project.day}`} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <span className="phase-badge" style={{ background: phaseColors[project.phase] }}>
                Week {project.week} · Day {project.day}
              </span>
              <FolderKanban size={20} color="var(--accent)" />
            </div>
            <h3 style={{ marginTop: '0.75rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{project.description}</p>
            <div className="exercise-box" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
              <strong>Deliverable:</strong> {project.exercise}
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link
                className="btn btn-primary"
                to={`/roadmap/week/${project.week}/day/${project.day}`}
              >
                View lesson
              </Link>
              <a
                className="btn"
                href="https://github.com/new"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} /> New repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
