import React from 'react'
import CardDescarga from '../resellers/cardDescarga'

const Descargar = () => {
    return (
        <section>
            <button
                data-toggle="modal"
                data-target="#app_magis"
                id="btn-download"
                className="mt-2 dg-red px-5 py-3"
            >
                Descargar
            </button>
            <CardDescarga target="app_magis" />
        </section>)
}

export default Descargar