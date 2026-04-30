import { useRef, useState } from 'react'
import SuccessModal from './SuccessModal'

const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyzKqeYVSoUpncIZeyMiiG6fxN8YK-7WWipL4SXkzY3JSfweG9X5h-jno3PxZial3rP/exec'

const LANDING_SOURCE = 'teaser-5-5-sos'
const SCHOOL = 'Savremena osnovna škola'
const SCHOOL_KEY = 'sos'

function LeadForm() {
  const formStartTime = useRef(Date.now())
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\s/g, '')
    return /^[+]?[\d()-]{7,20}$/.test(cleaned)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const website = String(formData.get('website') || '').trim()

    const timeOnPage = Math.round((Date.now() - formStartTime.current) / 1000)

    if (website) {
      return
    }

    if (timeOnPage < 3) {
      setStatus('error')
      setMessage('Sačekajte nekoliko sekundi prije slanja forme.')
      return
    }

    if (!name || !email || !phone) {
      setStatus('error')
      setMessage('Popunite ime, email adresu i broj telefona.')
      return
    }

    if (!validatePhone(phone)) {
      setStatus('error')
      setMessage('Unesite ispravan broj telefona.')
      return
    }

    const lastSubmit = Number(localStorage.getItem('teaser_5_5_last_submit') || 0)
    const now = Date.now()

    if (now - lastSubmit < 60 * 1000) {
      setStatus('error')
      setMessage('Forma je već poslata. Pokušajte ponovo za minut.')
      return
    }

    setStatus('loading')
    setMessage('')

    const payload = new URLSearchParams()

    payload.append('landing_source', LANDING_SOURCE)
    payload.append('school_key', SCHOOL_KEY)
    payload.append('school', SCHOOL)
    payload.append('name', name)
    payload.append('email', email)
    payload.append('phone', phone)
    payload.append('website', website)
    payload.append('page_url', window.location.href)
    payload.append('referrer', document.referrer || '')
    payload.append('user_agent', navigator.userAgent)
    payload.append('time_on_page', String(timeOnPage))

    try {
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      })

      localStorage.setItem('teaser_5_5_last_submit', String(now))

      setStatus('success')
      setMessage('')
      setIsSuccessModalOpen(true)
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
      setMessage('Došlo je do greške. Pokušajte ponovo.')
    }
  }

  return (
    <>
      <form className="lead-form" id="prijava" onSubmit={handleSubmit}>
        <h2 className="lead-form__title">
          Popunite polja, a mi ćemo vas 5.5. obavestiti o čemu je reč.
        </h2>

        <input
          className="lead-form__honeypot"
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="lead-form__row">
          <label className="lead-form__field">
            <span>Ime i prezime*</span>
            <input
              type="text"
              name="name"
              placeholder="Unesite ime"
              required
              minLength="2"
            />
          </label>

          <label className="lead-form__field">
            <span>Email adresa *</span>
            <input
              type="email"
              name="email"
              placeholder="ime@email.com"
              required
            />
          </label>

          <label className="lead-form__field">
            <span>Broj telefona *</span>
            <input
              type="tel"
              name="phone"
              placeholder="+381..."
              required
              minLength="7"
            />
          </label>

          <button
            className="lead-form__button"
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Slanje...' : 'Prijavi se'}
          </button>
        </div>

        {message && (
          <p className={`lead-form__message lead-form__message--${status}`}>
            {message}
          </p>
        )}
      </form>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </>
  )
}

export default LeadForm