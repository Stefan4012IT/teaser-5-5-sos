function CircularMenu({ isOpen, onClose }) {
  return (
    <nav
      className={`circular-menu ${isOpen ? 'is-open' : ''}`}
      aria-label="Glavni meni"
      aria-hidden={!isOpen}
    >
      <div className="circular-menu__circle"></div>

      <div className="circular-menu__content">
        <a href="https://www.savremena-osnovna.edu.rs/prijava/" target="_blank" onClick={onClose}>Prijava</a>
        <a href="https://www.savremena-osnovna.edu.rs/" target="_blank" onClick={onClose}>Savremena osnovna</a>
        <a href="https://www.savremena-gimnazija.edu.rs/" target="_blank" onClick={onClose}>Savremena gimnazija</a>
        <a href="https://www.international-school.edu.rs/" target="_blank" onClick={onClose}>International school</a>

      </div>
    </nav>
  )
}

export default CircularMenu
