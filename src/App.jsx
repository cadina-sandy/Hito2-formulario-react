import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Inicio from './components/Inicio.jsx'
import Login from './components/Login.jsx'
import Registro from './components/Registro.jsx'

function App() {
  const [currentView, setCurrentView] = useState('inicio')

  const renderView = () => {
    if (currentView === 'registro') return <Registro />
    if (currentView === 'login') return <Login />
    return <Inicio />
  }

  return (
    <div className="app">
      <Header currentView={currentView} onNavigate={setCurrentView} />

      <main className="main-content">{renderView()}</main>

      <Footer />
    </div>
  )
}

export default App
