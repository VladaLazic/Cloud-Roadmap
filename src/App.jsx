import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import DayView from './pages/DayView'
import Projects from './pages/Projects'
import Interviews from './pages/Interviews'
import Vendors from './pages/Vendors'
import BestPractices from './pages/BestPractices'
import Jobs from './pages/Jobs'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="roadmap/week/:weekNum/day/:dayNum" element={<DayView />} />
          <Route path="projects" element={<Projects />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="best-practices" element={<BestPractices />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
