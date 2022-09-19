import React, { useMemo } from 'react'

const WhatsAppButtom = ({ phone, message, label }) => {

    const urlWhatsapp = useMemo(() =>
        `https://wa.me/${phone}?text=${message}`
        , [phone, message])

    return (
        <a href={urlWhatsapp} className="mt-4 btn-get-started">
            {label}
            <i className="fab fa-whatsapp ml-1"></i>
        </a>
    )
}

export default WhatsAppButtom