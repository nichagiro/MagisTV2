import WhatsAppButtom from '@/components/custom/WhatsAppButtom'
import React from 'react'

const Suscripcion = () => {
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <h3>SUSCRIPCIÓN</h3>
          <p>CANCELA TU PLAN Y LUEGO REGISTRA TU PAGO</p>
        </header>
        <div className="row row-eq-height justify-content-center">
          <div className="col-12 col-sm-7 col-lg-4 mb-4">
            <div className="card wow animated bounceInUp delay-2s dg-blue">
              <h2>1 MES</h2>
              <small>Tarifa Fija</small>
              <div className="card-body">
                <b className="precio">$9</b>
                <ul className="ul-precios text-left">
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-tv"></i>
                    <span className="p-3">+800 Canales</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-video"></i>
                    <span className="p-3">HD y FHD</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-mobile-alt"></i>
                    <span className="p-3">3 Pantallas</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-star-half-alt"></i>
                    <span className="p-3">Paquetes Premium</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-play"></i>
                    <span className="p-3">Contenido VOD</span>
                  </div>
                </ul>
                <WhatsAppButtom
                  label='Comprar'
                  message='Me interesa 1 mes de suscripción'
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-lg-4 mb-4">
            <div className="card wow bounceInUp dg-green">
              <h2>3 MESES</h2>
              <div className="card-body">
                <b className="precio">$27</b>
                <ul className="ul-precios text-left">
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-tv"></i>
                    <span className="p-3">+800 Canales</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-video"></i>
                    <span className="p-3">HD y FHD</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-mobile-alt"></i>
                    <span className="p-3">3 Pantallas</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-star-half-alt"></i>
                    <span className="p-3">Paquetes Premium</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-play"></i>
                    <span className="p-3">Contenido VOD</span>
                  </div>
                </ul>
                <WhatsAppButtom
                  label='Comprar'
                  message='Me interesa 3 meses de suscripción'
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-lg-4 mb-4">
            <div className="card wow animate bounceInUp delay-2s dg-purple">
              <h2>6 MESES</h2>
              <small>1 mes gratis</small>
              <div className="card-body">
                <b className="precio">$49</b>
                <ul className="ul-precios text-left">
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-tv"></i>
                    <span className="p-3">+800 Canales</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-video"></i>
                    <span className="p-3">HD y FHD</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-mobile-alt"></i>
                    <span className="p-3">3 Pantallas</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-star-half-alt"></i>
                    <span className="p-3">Paquetes Premium</span>
                  </div>
                  <div className="row border-precio align-items-center">
                    <i className="fas fa-play"></i>
                    <span className="p-3">Contenido VOD</span>
                  </div>
                </ul>
                <WhatsAppButtom
                  label='Comprar'
                  message='Me interesa 6 meses de suscripción'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Suscripcion