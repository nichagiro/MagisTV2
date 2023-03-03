import Modal from '@/components/custom/modal'
import React, { useMemo } from 'react'

const CardDescarga = ({ target }) => {
    const RenderData = useMemo(() =>
        <>
            <div className="row px-4 px-sm-0 py-3 justify-content-center">
                <div className="col-12 col-sm-8 col-lg-3 dg-blue px-4 py-5 text-white radius_adaptable">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fab fa-napster fa-3x"></i>
                        <p className="h4 font-weight-bold pl-2">Fire TV</p>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <a download href="app/magis_tv_v5.2.2.apk" id="btn-download">Descargar</a>
                    </div>
                    <div className="text-center">
                        <small >Fire TV Stick / HD / 4K / Lite / Cube</small>
                    </div>
                </div>
                <div className="my-3 my-lg-0 mx-lg-5 col-12 col-sm-8 col-lg-3 dg-green px-4 py-5 text-white radius_adaptable">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fab fa-android fa-3x"></i>
                        <p className="h4 font-weight-bold pl-2">Android</p>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <a download href="app/magis_phone_v5.2.2.apk" id="btn-download">Descargar</a>
                    </div>
                    <div className="text-center">
                        <small>Smartphone con android superior a 5.1</small>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-lg-3 dg-red px-4 py-5 text-white radius_adaptable">
                    <div className="d-flex align-items-center justify-content-center">
                        <i className="fas fa-tv fa-3x"></i>
                        <p className="h4 font-weight-bold pl-2">Android TV</p>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <a download href="app/magis_tv_v5.2.2.apk" id="btn-download">Descargar</a>
                    </div>
                    <div className="text-center">
                        <small>TV BOX / Android TV / Mi Box Xiaomi</small>
                    </div>
                </div>
            </div>
        </>
        , [])

    const RenderButton = useMemo(() =>
        <>
            <a
                href="files/manual_instalacion_App.pdf"
                target="_blank"
                className="btn bg-dark text-white mt-3"
                style={{border: '1px white solid'}}
            >
                Manual de instalación
            </a>
        </>
        , [])
    return (
        <section id="modalDescargarApps">
            <Modal
                id={target}
                title="DESCARGA E INSTALA LA APP"
                screen='xl'
                slot={RenderData}
                button={RenderButton}
            />
        </section>
    )
}

export default CardDescarga