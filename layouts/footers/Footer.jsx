import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>MAGIS TV INTERNATIONAL</strong>
        </div>
        <div className="credits">
          <p>
            DMCA: MAGIS TV INTERNATIONAL es un distribuidor externo y autorizado de servicios digitales de material de entretención que
            suministra en su totalidad MAGIS TV, quienes cumplen con toda norma legal según el país de origen desde el cuál distribuyen
            el servicio. MAGIS TV INTERNATIONAL no almacena ni sube en su sitio o servidor, cualquier archivo de vídeo, película, archivo
            multimedia de ningún tipo o cualquier otro material protegido por derechos de autor. MAGIS TV y MAGIS TV INTERNATIONAL no
            poseen ni comercializan decodificadores de ningún tipo de TV satelital. MAGIS TV INTERNATIONAL cumple solo en calidad de
            distribuidor de servicio para el alcance global. Todos los derechos reservados
            <Link
              target="_blank"
              href="https://overweb.com.co/"
              rel='noreferrer'
            >
              OVERWEB
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer