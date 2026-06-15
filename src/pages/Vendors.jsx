import { ExternalLink } from 'lucide-react'

const vendors = [
  {
    category: 'Official AWS',
    items: [
      { name: 'AWS Skill Builder', url: 'https://explore.skillbuilder.aws', note: 'Free CLF-C02 & SAA courses' },
      { name: 'AWS Documentation', url: 'https://docs.aws.amazon.com', note: 'Primary reference for hands-on labs' },
      { name: 'AWS Workshops', url: 'https://catalog.workshops.aws', note: 'Guided VPC, EKS, serverless labs' },
    ],
  },
  {
    category: 'Certification Practice',
    items: [
      { name: 'TutorialsDojo', url: 'https://tutorialsdojo.com', note: 'CLF-C02 & SAA-C03 practice exams' },
      { name: 'Whizlabs', url: 'https://www.whizlabs.com', note: 'Timed mock exams' },
      { name: 'Adrian Cantrill', url: 'https://learn.cantrill.io', note: 'Deep SAA-C03 video course' },
    ],
  },
  {
    category: 'Video & Community',
    items: [
      { name: 'TechWithSoleyman', url: 'https://www.youtube.com/@techwithsoleyman', note: 'Cloud career & technical content' },
      { name: 'CNCF Slack', url: 'https://communityinviter.com/apps/cloud-native/cncf', note: 'Kubernetes & cloud-native community' },
      { name: 'AWS User Groups', url: 'https://aws.amazon.com/developer/community/usergroups/', note: 'Local meetups worldwide' },
    ],
  },
  {
    category: 'Hands-On Practice',
    items: [
      { name: 'devops-exercises', url: 'https://github.com/bregman-arie/devops-exercises', note: '4k+ interview & lab questions' },
      { name: 'Play with Docker', url: 'https://labs.play-with-docker.com', note: 'Free Docker sandbox' },
      { name: 'killer.sh', url: 'https://killer.sh', note: 'CKA/CKAD exam simulator' },
    ],
  },
  {
    category: 'Tools & Utilities',
    items: [
      { name: 'explainshell.com', url: 'https://explainshell.com', note: 'Decode Linux commands' },
      { name: 'ShellCheck', url: 'https://www.shellcheck.net', note: 'Lint bash scripts' },
      { name: 'Prowler', url: 'https://github.com/prowler-cloud/prowler', note: 'AWS security scanner' },
      { name: 'instances.vantage.sh', url: 'https://instances.vantage.sh', note: 'EC2 instance comparison' },
    ],
  },
  {
    category: 'Multi-Cloud & Career',
    items: [
      { name: 'Microsoft Learn (AZ-900)', url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/', note: 'Azure fundamentals' },
      { name: 'GCP Free Tier', url: 'https://cloud.google.com/free', note: 'Cloud Run & GKE trials' },
      { name: 'levels.fyi', url: 'https://www.levels.fyi', note: 'Salary benchmarks (Europe)' },
      { name: 'Cloud Resume Challenge', url: 'https://cloudresumechallenge.dev', note: 'Portfolio template' },
    ],
  },
]

export default function Vendors() {
  return (
    <>
      <header className="page-header">
        <h1>Vendors & Resources</h1>
        <p>
          Curated learning platforms, practice exams, and tools referenced throughout the 24-week
          curriculum.
        </p>
      </header>

      <div className="card-grid two-col">
        {vendors.map((group) => (
          <section key={group.category} className="card">
            <h3>{group.category}</h3>
            <div className="table-wrap" style={{ marginTop: '0.75rem' }}>
              <table>
                <thead>
                  <tr>
                    <th>Resource</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.url}>
                      <td>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.name} <ExternalLink size={12} />
                        </a>
                      </td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
