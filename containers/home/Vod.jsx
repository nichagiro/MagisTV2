import React from 'react'

const Vod = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="p-3">
        <header className="section-header">
          <h3>CONTENIDO VOD</h3>
        </header>
        <p className="container text-justify">
          MAGIS TV es un servicio de entretenimiento que funciona a través de su App para dispositivos Android.
          Cuenta con más de +1000 canales de televisión latinos e internacionales en vivo, además de una
          amplia biblioteca VOD (Video-On-Demand) de películas y series. Tendrás acceso a todo el contenido
          conectando hasta (3) dispositivos o pantallas en simultáneo.
        </p>
        <div className='d-flex justify-content-center'>
          <picture>
            <source srcSet="/img/tvmagistvedition.webp" type="image/webp" />
            <img
              loading='lazy'
              src="/img/a-15.webp"
              alt="premim"
              width='100%'
              height='100%'
              style={{maxHeight: 'auto', maxWidth: 600}}
            />
          </picture>
        </div>
        <div className="container text-justify mt-5">
          <small>
            MAGIST TV International no ofrece cuentas para estas plataformas solo su
            contenido en el VOD de Magis TV / La disponibilidad de las películas o series
            depende de Magis TV y no MAGIS TV INTERNATIONAL.
          </small>
        </div>
      </div>
    </section>
  )
}

export default Vod