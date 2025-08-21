
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Statistics from './pages/Statistics'
import Help from './pages/Help'
import Resources from './pages/Resources'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
            color: '#6b21a8',
            border: '1px solid #d8b4fe',
            boxShadow: '0 10px 25px rgba(139, 92, 246, 0.15)'
          },
          success: { 
            style: { 
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              color: '#15803d'
            } 
          }
        }}
      />
      
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/estatisticas" element={<Statistics />} />
              <Route path="/ajuda" element={<Help />} />
              <Route path="/recursos" element={<Resources />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
