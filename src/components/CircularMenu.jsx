function CircularMenu({ isOpen, onClose }) {
  return (
    <nav
      className={`circular-menu ${isOpen ? 'is-open' : ''}`}
      aria-label="Glavni meni"
      aria-hidden={!isOpen}
    >
      <div className="circular-menu__circle"></div>

      <div className="circular-menu__content">
        <a href="#prijava" onClick={onClose}>Prijava</a>
        <a href="#kampanja" onClick={onClose}>O kampanji</a>
        <a href="https://www.savremena-osnovna.edu.rs/">Savremena osnovna</a>
        <a href="https://www.savremena-gimnazija.edu.rs/">Savremena gimnazija</a>
        <a href="#kontakt" onClick={onClose}>Kontakt</a>
      </div>
    </nav>
  )
}

export default CircularMenu
