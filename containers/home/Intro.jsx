import Image from 'next/image'
import React from 'react'
import Descargar from './Descargar'

const Intro = () => {
  return (
    <section id="intro" className="intro-img clearfix">
      <div className="container">
        <div className="intro-info">
          <h2>TELEVISIÓN<br/><span>EN VIVO</span><br/>PARA TU HOGAR</h2>
          <b className="text-white text-xs-justify">
            MAGIS TV es una aplicación innovadora, exclusiva para dispositivos Android,
            la cuál mediante nuestro servicio de IPTV Latino reproduce en una interfaz sencilla
            canales en HD. Somos el servicio de IPTV con mayor estabilidad, contenido y la mejor
            experiencia de usuario. Servidores privados y dedicados para brindar la mayor
            estabilidad en su programación.
          </b>
          <div className="row py-3">
            <div className="col-4">
              <Image
                src="/img/hd.webp"
                alt="beneficio"
                className="img-fluid"
                height={225}
                width={600}
              />
            </div>
            <div className="col-4">
              <Image
                src="/img/3pantallas.webp"
                alt="beneficio"
                className="img-fluid"
                height={225}
                width={600}
              />
            </div>
            <div className="col-4">
              <Image
                src="/img/mb.webp"
                alt="beneficio"
                className="img-fluid"
                height={225}
                width={600}
              />
            </div>
          </div>
          <div>
            <Descargar/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro