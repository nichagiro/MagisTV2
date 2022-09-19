import React from 'react'

const PaquetesIncluidos = () => {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3 className="text-white">PAQUETES INCLUIDOS</h3>
        </header>
        <div className="w-100 text-center">
          <picture>
            <source srcSet="/img/paquetes_incluidos.webp" type="image/webp" />
            <img
              loading='lazy'
              src="/img/paquetes_incluidos.webp"
              alt="paqetes incluidos"
              className="img-fluid"
              width={1000}
              height={665}
            />
          </picture>
        </div>
      </div>
    </section>

  )
}

export default PaquetesIncluidos