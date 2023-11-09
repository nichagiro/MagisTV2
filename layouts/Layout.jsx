import React from 'react'
import Nav from './navs/Nav'
import Footer from './footers/Footer'
import Whatsapp from '@/components/custom/Whatsapp'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className='dg-theme'>
        {children}
      </main>
      <Footer />
      <Whatsapp />
    </>
  )
}

export default Layout