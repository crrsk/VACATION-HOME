import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingHeader } from './components/Layout/LandingHeader'
import { LandingFooter } from './components/Layout/LandingFooter'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { AuthModalProvider } from './context/AuthModalContext'
import { AuthModal } from './components/Auth/AuthModal'

function App() {
  return (
    <AuthModalProvider>
      <div className="page-shell">
        <LandingHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinos" element={<HomePage />} />
            <Route path="/reserva" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
        <LandingFooter />
        <AuthModal />
      </div>
    </AuthModalProvider>
  )
}

export default App
