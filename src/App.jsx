import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Inicio from './components/Inicio.jsx'
import Login from './components/Login.jsx'
import Registro from './components/Registro.jsx'

function App() {
  // Guarda la sección que se está mostrando.
  const [currentView, setCurrentView] = useState('inicio')

  // Selecciona el componente según el botón presionado.
  const renderView = () => {
    if (currentView === 'registro') return <Registro />
    if (currentView === 'login') return <Login />

    return <Inicio />
  }

  return (
    <div className="app">
      {/* El Header recibe la vista actual y la función para cambiarla. */}
      <Header currentView={currentView} onNavigate={setCurrentView} />

      <main className="main-content">{renderView()}</main>

      {/*
        Primer intento:
        <Inicio />
        <Registro />
        <Login />
        Mostraba las tres vistas al mismo tiempo, por eso se reemplazó.
      */}

      <Footer />
    </div>
  )
}

export default App
