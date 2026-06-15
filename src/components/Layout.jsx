import { NavLink, Outlet } from 'react-router-dom'
import {
  Home,
  Map,
  FolderKanban,
  MessageSquare,
  Building2,
  ShieldCheck,
  Briefcase,
  Cloud,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/roadmap', label: 'Roadmap', icon: Map },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/interviews', label: 'Interviews', icon: MessageSquare },
  { to: '/vendors', label: 'Vendors', icon: Building2 },
  { to: '/best-practices', label: 'Best Practices', icon: ShieldCheck },
  { to: '/jobs', label: 'Jobs', icon: Briefcase },
]

export default function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Cloud size={28} />
          <div>
            <strong>Cloud Roadmap</strong>
            <span>24-week curriculum</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
