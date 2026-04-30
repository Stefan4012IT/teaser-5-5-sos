function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-modal-title">
      <div className="success-modal__backdrop" onClick={onClose}></div>

      <div className="success-modal__card">
        <button
          className="success-modal__close"
          type="button"
          aria-label="Zatvori"
          onClick={onClose}
        >
          ×
        </button>

        <p className="success-modal__eyebrow">Prijava poslata</p>

        <h2 id="success-modal-title" className="success-modal__title">
          Hvala vam!
        </h2>

        <p className="success-modal__text">
          Vaša prijava je uspješno zabeležena. Uskoro ćete dobiti više informacija.
        </p>

        <button className="success-modal__button" type="button" onClick={onClose}>
          Zatvori
        </button>
      </div>
    </div>
  )
}

export default SuccessModal