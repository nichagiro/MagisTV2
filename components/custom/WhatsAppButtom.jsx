import Link from 'next/link';
import React, { useMemo } from 'react'

const WhatsAppButtom = ({ phone, message, label }) => {

  const urlWhatsapp = useMemo(() =>
    `https://wa.me/${phone}?text=${message}`
    , [phone, message])

  return (
    <Link href={urlWhatsapp} className="mt-4 btn-get-started">
      {label}
      <i className="fab fa-whatsapp ml-1"></i>
    </Link>
  )
}

export default WhatsAppButtom;

WhatsAppButtom.defaultProps = {
  phone: `${process.env.NEXT_PUBLIC_WHATSAPP_COUNTRY}${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
}