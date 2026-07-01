import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingHeader } from './components/Layout/LandingHeader'
import { LandingFooter } from './components/Layout/LandingFooter'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="page-shell">
      <LandingHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinos" element={<HomePage />} />
          <Route path="/reserva" element={<HomePage />} />
        </Routes>
      </main>
      <LandingFooter />
    </div>
  )
}

export default App
