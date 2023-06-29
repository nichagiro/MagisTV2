import Link from 'next/link';
import React from 'react'

const Whatsapp = ({ indicativo, number }) => {
  return (
    <Link
      href={`https://wa.me/${indicativo}${number}`}
      className="back-to-top d-flex justify-content-center align-items-center pulse dg-purple shadow"
    >
      <i className="fab fa-whatsapp fa-2x"></i>
    </Link>
  )
}

export default Whatsapp;

Whatsapp.defaultProps = {
  indicativo: process.env.NEXT_PUBLIC_WHATSAPP_COUNTRY,
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
}