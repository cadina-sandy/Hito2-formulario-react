function Header({ currentView, onNavigate }) {
  return (
    <header className="site-header">
      <button
        className="brand brand-button"
        type="button"
        onClick={() => onNavigate('inicio')}
        aria-label="Ir al inicio"
      >
        <span aria-hidden="true">🍕</span>
        Pizzería Mamma Mía
      </button>

      <nav aria-label="Navegación principal">
        <button
          className={currentView === 'inicio' ? 'active' : ''}
          type="button"
          onClick={() => onNavigate('inicio')}
        >
          Inicio
        </button>
        <button
          className={currentView === 'registro' ? 'active' : ''}
          type="button"
          onClick={() => onNavigate('registro')}
        >
          Registro
        </button>
        <button
          className={currentView === 'login' ? 'active' : ''}
          type="button"
          onClick={() => onNavigate('login')}
        >
          Ingresar
        </button>
      </nav>
    </header>
  )
}

export default Header
