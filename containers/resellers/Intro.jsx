import React from 'react'

const Intro = () => {
    return (
        <section id="intro" className="intro-img-resellers clearfix">
            <div className="container">
                <div className="intro-info w-75">
                    <div className="title-reseller">
                        <h2>
                            RESELLER<br/>
                            <span>MAGIS TV INTERNATIONAL</span><br/>
                            SE PARTE DE ESTA OPORTUNIDAD
                        </h2>
                    </div>
                    <ul style={{ listStyle: 'none', fontSize: '1.1rem' }} className="text-white p-0 m-0">
                        <li className="">
                            <i className="fas fa-check-circle"></i>
                            <b> Revendedores con super panel, con una compra mínima de 30 créditos</b>
                        </li>
                        <li className="my-2">
                            <i className="fas fa-check-circle"></i>
                            <b> Revendedores con panel administrativo, con compra mínima de 1.000 créditos </b>
                        </li>
                        <li className="my-2">
                            <i className="fas fa-check-circle"></i>
                            <b> Soporte demos de 6 horas</b>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Intro