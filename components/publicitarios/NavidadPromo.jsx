import React, { Fragment, useEffect } from 'react'
import WhatsAppButtom from '../custom/WhatsAppButtom'

const NavidadPromo = () => {
    useEffect(() => {
        setTimeout(() => {
            try {
                document.getElementById('buttonNavidad').click()
            } catch (error) {
                console.log('navidad promo', error.message)
            }
        }, 3000);
    }, [])

    return (
        <Fragment>
            <button
                id='buttonNavidad'
                type="button"
                className="btn btn-primary d-none"
                data-toggle="modal"
                data-target="#exampleModal">
                click popup navidad
            </button>
            <div
                style={{ zIndex: 10000 }}
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Magist Tv International</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                                <i className="fas fa-times-circle"></i>
                            </button>
                        </div>
                        <div>
                            <picture>
                                <source srcSet="/img/navidadPromo.webp" type="image/webp" />
                                <img
                                    src='/img/navidadPromo.webp'
                                    className="img-fluid"
                                    alt="Navidad magis tv international"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                        <div
                            className="d-flex justify-content-end px-2"
                            style={{ background: '#174960' }}
                        >
                            <WhatsAppButtom
                                label='Lo quiero!'
                                phone={584126679598}
                                message='Me interesa el promo de navidad'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavidadPromo