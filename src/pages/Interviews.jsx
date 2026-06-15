import { ExternalLink, MessageSquare } from 'lucide-react'

const categories = [
  {
    title: 'System Design',
    tips: [
      'Start with requirements: scale, latency, availability, consistency.',
      'Draw boxes for clients, load balancers, app tier, cache, DB, queues.',
      'Name AWS services explicitly: ALB, ECS/EKS, RDS, ElastiCache, SQS.',
      'Discuss trade-offs: cost vs performance, SQL vs NoSQL, sync vs async.',
    ],
    resources: [
      { label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
      { label: 'AWS Architecture Blog', url: 'https://aws.amazon.com/blogs/architecture/' },
    ],
  },
  {
    title: 'DevOps & Kubernetes',
    tips: [
      'Explain pod lifecycle, probes, resource limits, and why they matter.',
      'Know Deployment vs StatefulSet, ConfigMap vs Secret.',
      'Describe a CI/CD pipeline end-to-end: lint → test → build → deploy.',
      'Practice kubectl imperatives: debug crashing pods, exec, logs, describe.',
    ],
    resources: [
      { label: 'devops-exercises (4k+ stars)', url: 'https://github.com/bregman-arie/devops-exercises' },
      { label: 'K8s Docs — Tasks', url: 'https://kubernetes.io/docs/tasks/' },
    ],
  },
  {
    title: 'AWS Architecture',
    tips: [
      'Design multi-AZ web apps: ALB + ASG + RDS Multi-AZ.',
      'Explain VPC design: public/private subnets, NAT, endpoints.',
      'Compare Lambda vs containers vs EC2 for a given workload.',
      'Security: IAM least privilege, encryption, WAF, GuardDuty.',
    ],
    resources: [
      { label: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' },
      { label: 'TutorialsDojo SAA-C03', url: 'https://tutorialsdojo.com/aws-certified-solutions-architect-associate/' },
    ],
  },
  {
    title: 'Behavioral (STAR)',
    tips: [
      'Situation → Task → Action → Result — keep answers under 2 minutes.',
      'Prepare stories: incident response, cost savings, automation win, conflict.',
      'Quantify impact: "reduced deploy time from 2h to 15min".',
      'Show learning mindset: failed exam, fixed security finding, picked up K8s.',
    ],
    resources: [
      { label: 'Pramp (free mocks)', url: 'https://www.pramp.com' },
      { label: 'TechWithSoleyman: Cloud Jobs', url: 'https://www.youtube.com/@techwithsoleyman' },
    ],
  },
]

const sampleQuestions = [
  'Design a highly available 3-tier web application on AWS.',
  'How would you troubleshoot a pod in CrashLoopBackOff?',
  'Explain the difference between Security Groups and NACLs.',
  'Walk through your CI/CD pipeline from git push to production.',
  'How do you manage secrets in Kubernetes and AWS?',
  'Design an event-driven image processing pipeline.',
  'What is GitOps and why use ArgoCD?',
  'How would you reduce AWS costs for a staging environment?',
]

export default function Interviews() {
  return (
    <>
      <header className="page-header">
        <h1>Interview Preparation</h1>
        <p>
          Week 23 focuses on interviews. Use these frameworks daily — write answers out loud,
          then practice with a study partner or Pramp.
        </p>
      </header>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MessageSquare size={20} />
          Sample Questions
        </h2>
        <ul style={{ marginTop: '1rem' }}>
          {sampleQuestions.map((q) => (
            <li key={q} style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              {q}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-grid two-col">
        {categories.map((cat) => (
          <div key={cat.title} className="card">
            <h3>{cat.title}</h3>
            <ul style={{ marginTop: '0.75rem' }}>
              {cat.tips.map((tip) => (
                <li key={tip} style={{ marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
                  {tip}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1rem' }}>
              {cat.resources.map((r) => (
                <div key={r.url}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.label} <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
