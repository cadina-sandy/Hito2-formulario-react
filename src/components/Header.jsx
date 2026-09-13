function Header({ currentView, onNavigate }) {
  return (
    <header className="site-header">
      {/* Nombre de la pizzería: también funciona como botón de inicio. */}
      <button
        className="brand brand-button"
        type="button"
        onClick={() => onNavigate('inicio')}
        aria-label="Ir al inicio"
      >
        <span aria-hidden="true">🍕</span>
        Pizzería Mamma Mía
      </button>

      {/* Botones para cambiar el contenido principal. */}
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

      {/*
        Antes estaba así: <a href="#registro">Registro</a>
        El enlace cambiaba la dirección, pero no mostraba el componente.
      */}
    </header>
  )
}

export default Header
