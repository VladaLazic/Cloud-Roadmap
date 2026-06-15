import { ExternalLink, MapPin, TrendingUp } from 'lucide-react'

const targetCities = [
  { city: 'Berlin', market: 'Strong AWS partner ecosystem, startups + enterprise', range: '€55k–€85k' },
  { city: 'Amsterdam', market: 'HQ for many tech companies, English-friendly', range: '€55k–€90k' },
  { city: 'Dublin', market: 'AWS/Azure/GCP EMEA hubs, high demand', range: '€50k–€80k' },
  { city: 'Munich', market: 'Automotive + enterprise cloud, GDPR focus', range: '€58k–€88k' },
  { city: 'Frankfurt', market: 'Finance sector, AWS eu-central-1 region', range: '€55k–€85k' },
]

const jobTypes = [
  { role: 'Cloud Engineer', focus: 'AWS core services, VPC, IAM, cost management' },
  { role: 'DevOps Engineer', focus: 'CI/CD, Terraform, Docker, monitoring' },
  { role: 'Platform Engineer', focus: 'Kubernetes, IDP, Backstage, Crossplane' },
  { role: 'SRE', focus: 'SLOs, on-call, observability, incident response' },
  { role: 'Cloud Consultant', focus: 'Architecture design, migrations, Well-Architected reviews' },
]

const weeklyActions = [
  'Update LinkedIn headline: "Cloud Engineer | AWS SAA | Terraform | Kubernetes"',
  'Apply to 10 tailored roles per week (Week 23 goal)',
  'Customize cover letter to match job stack keywords',
  'Pin 5 GitHub repos with README + architecture diagrams',
  'Add CLF-C02 and SAA-C03 badges to LinkedIn & resume',
  'Join 2 communities (CNCF Slack, local AWS User Group)',
  'Complete one mock interview per week on Pramp or with a peer',
]

export default function Jobs() {
  return (
    <>
      <header className="page-header">
        <h1>Job Hunt</h1>
        <p>
          Week 23–24 focus on landing cloud engineer roles in Europe. Research salaries, target
          cities, and execute a consistent weekly application rhythm.
        </p>
      </header>

      <div className="card-grid two-col" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={20} />
            Target Cities (Europe)
          </h2>
          <div className="table-wrap" style={{ marginTop: '1rem' }}>
            <table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Market</th>
                  <th>Salary Range</th>
                </tr>
              </thead>
              <tbody>
                {targetCities.map((row) => (
                  <tr key={row.city}>
                    <td><strong>{row.city}</strong></td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{row.market}</td>
                    <td>{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={20} />
            Role Targets
          </h2>
          <ul style={{ marginTop: '1rem' }}>
            {jobTypes.map((job) => (
              <li key={job.role} style={{ marginBottom: '0.65rem' }}>
                <strong>{job.role}</strong>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{job.focus}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>Weekly Job Search Checklist</h3>
        <ul style={{ marginTop: '0.75rem' }}>
          {weeklyActions.map((action) => (
            <li key={action} style={{ marginBottom: '0.45rem', color: 'var(--text-muted)' }}>
              {action}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Job Boards</h3>
        <div className="tag-list" style={{ marginTop: '0.75rem' }}>
          {[
            { label: 'LinkedIn Jobs', url: 'https://linkedin.com/jobs' },
            { label: 'Glassdoor DE', url: 'https://glassdoor.de' },
            { label: 'levels.fyi', url: 'https://www.levels.fyi' },
            { label: 'AWS Jobs', url: 'https://www.amazon.jobs/en/teams/amazon-web-services' },
            { label: 'WeWorkRemotely', url: 'https://weworkremotely.com' },
          ].map((link) => (
            <a key={link.url} className="tag" href={link.url} target="_blank" rel="noreferrer">
              {link.label} <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
