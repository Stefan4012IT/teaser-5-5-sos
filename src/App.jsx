import { useState } from 'react'
import Header from './components/Header'
import CircularMenu from './components/CircularMenu'
import LeadForm from './components/LeadForm'

import imgDesk from './assets/images/5-5-savremena_osnovna_hero-desk.jpg'
import imgMobile from './assets/images/5-5-savremena_osnovna_hero-mob-img.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <main className={`teaser-page ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <Header isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />

      <section className="hero">
        <picture className="teaser-bg">
          <source
            media="(max-width: 768px)"
            srcSet="/images/5-5-savremena_osnovna_hero-desk.jpg"
          />
          <img
            src={imgDesk}  
            alt=""
            aria-hidden="true"
          />
        </picture>
        <div className="hero__content">
          <p className="hero__eyebrow">5.5. / Poklon za 5+</p>

          <h1 className="hero__title">
            5.5.&nbsp; je vaš dan odluke za čistu peticu!
          </h1>
          <img
            className="hero__mobile-image"
            src={imgMobile}
            alt=""
            aria-hidden="true"
          />

          <p className="hero__text">
            Ukoliko želite svom detetu da obezbedite najsvaremenenije obrazovanje ovo je pravi trenutak, <span className='boldeto'>imamo za vas iznenadjenje za 5+.</span>
          </p>

          <LeadForm />
        </div>
      </section>

      <CircularMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </main>
  )
}

export default App