import React from 'react'

const Descargar = ({ className }) => {
  return (
    <section>
      <button
        data-toggle="modal"
        data-target="#app_magis"
        id="btn-download"
        className={className}
      >
        Descargar
      </button>
    </section>)
}

export default Descargar

Descargar.defaultProps = {
  className: 'mt-2 dg-red px-5 py-3'
}