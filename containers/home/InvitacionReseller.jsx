import Link from 'next/link'
import React from 'react'

const InvitacionReseller = () => {
    return (
        <section id="invitacion" className="bg-white">
            <div className="row w-75 m-auto align-items-center py-3 shadow border-button-purple">
                <div
                    className="col-12 col-md-8 d-flex justify-content-center align-items-center"
                    style={{ fontSize: '1.3rem' }}
                >
                    <div>
                        <b>Trabajar con nosotros ahora es muy <b className="text-purple">facil</b></b> <br />
                        <small>Conoce todos nuestros planes Resellers</small>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <Link href="/resellers">
                        <button className="bg-purple mt-4" id="btn-download">
                            Consultar
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default InvitacionReseller