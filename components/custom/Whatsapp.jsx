import React from 'react'

const Whatsapp = ({ indicativo, number }) => {
    return (
        <a
            href={`https://wa.me/${indicativo}${number}`}
            className="back-to-top d-flex justify-content-center align-items-center pulse dg-purple shadow"
        >
            <i className="fab fa-whatsapp fa-2x"></i>
        </a>
    )
}

export default Whatsapp