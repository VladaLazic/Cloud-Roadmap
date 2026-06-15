import { ShieldCheck } from 'lucide-react'

const pillars = [
  {
    title: 'Security',
    practices: [
      'Enable MFA on root and all IAM users; use roles instead of long-lived keys.',
      'Apply least-privilege IAM policies; use Permission Boundaries for dev accounts.',
      'Encrypt data at rest (KMS) and in transit (TLS everywhere).',
      'Enable GuardDuty, Security Hub, and AWS Config in every account.',
      'No public S3 buckets — use bucket policies + Block Public Access.',
      'Run Prowler monthly; remediate CRITICAL findings within 48 hours.',
    ],
  },
  {
    title: 'Reliability',
    practices: [
      'Deploy across multiple AZs; use ASG with health checks and ALB.',
      'Define RTO/RPO; test disaster recovery (backup restore) quarterly.',
      'Use Route 53 health checks and failover routing for critical apps.',
      'Implement circuit breakers and retries in microservices.',
      'PodDisruptionBudgets and HPA on all production K8s workloads.',
    ],
  },
  {
    title: 'Performance',
    practices: [
      'CloudFront for static assets; ElastiCache for hot database reads.',
      'Right-size EC2 with Cost Explorer recommendations.',
      'Use gp3 EBS volumes; enable ENA enhanced networking.',
      'Set CPU/memory requests and limits on every container.',
      'Load test with k6 before production launches.',
    ],
  },
  {
    title: 'Cost Optimization',
    practices: [
      'Tag all resources: Environment, Project, Owner, CostCenter.',
      'Use Spot instances for fault-tolerant and batch workloads.',
      'S3 Intelligent-Tiering and lifecycle policies for old data.',
      'Delete unused EBS volumes, idle NAT Gateways, and old AMIs.',
      'Set AWS Budgets alerts at 50%, 80%, and 100% of monthly target.',
    ],
  },
  {
    title: 'Operational Excellence',
    practices: [
      'Everything in Git: Terraform modules, Helm charts, ArgoCD apps.',
      'Structured logging (JSON) shipped to CloudWatch or OpenSearch.',
      'Define SLIs/SLOs; track error budgets in Grafana dashboards.',
      'Blameless post-mortems within 48 hours of SEV-1 incidents.',
      'Runbooks for top 10 alert types; test on-call rotation quarterly.',
    ],
  },
  {
    title: 'DevOps & GitOps',
    practices: [
      'Trunk-based development; short-lived feature branches only.',
      'CI pipeline: lint → test → SAST → build → scan → push → deploy.',
      'Use OIDC for GitHub Actions → AWS (no static AWS keys in CI).',
      'GitOps with ArgoCD: Git is the single source of truth for K8s.',
      'Canary or blue/green deploys with automated rollback on metrics.',
    ],
  },
]

export default function BestPractices() {
  return (
    <>
      <header className="page-header">
        <h1>Best Practices</h1>
        <p>
          Based on the AWS Well-Architected Framework and SRE principles covered in weeks 8, 15, and
          18. Use as a checklist for every project.
        </p>
      </header>

      <div className="card-grid two-col">
        {pillars.map((pillar) => (
          <section key={pillar.title} className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--accent)" />
              {pillar.title}
            </h3>
            <ul style={{ marginTop: '0.75rem' }}>
              {pillar.practices.map((p) => (
                <li key={p} style={{ marginBottom: '0.45rem', color: 'var(--text-muted)' }}>
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
