function Header({ isMenuOpen, onMenuToggle }) {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Savremena">
        <span className="site-header__logo-mark">S</span>
        <span className="site-header__logo-text">Savremena</span>
      </a>

      <button
        className={`site-header__menu-button ${isMenuOpen ? 'is-active' : ''}`}
        type="button"
        aria-label={isMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={isMenuOpen}
        onClick={onMenuToggle}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header