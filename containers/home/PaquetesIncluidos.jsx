import Image from 'next/image'
import React from 'react'

const PaquetesIncluidos = () => {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3 className="text-white">PAQUETES INCLUIDOS</h3>
        </header>
        <div className="w-100 text-center">
          <Image
            src="/img/paquetes_incluidos.webp"
            alt="paqetes incluidos"
            className="img-fluid"
            width={1000}
            height={665}
          />
        </div>
      </div>
    </section>

  )
}

export default PaquetesIncluidos