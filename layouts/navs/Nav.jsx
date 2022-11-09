import Descargar from '@/containers/home/Descargar'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container">
                <b className="d-none d-md-block mr-1 text-white" style={{ fontSize: '12px' }}>
                    <i className="far fa-clock"></i>  Lun - Sab: 9:00am - 8:30pm
                </b>
            </div>
            <div className="container d-flex flex-wrap align-items-center justify-content-between">
                <div className="logo row d-flex align-items-center">
                    <h1 className="text-light">
                        <a href="#header" className="row d-flex align-items-center justify-content-center">
                            <div className="px-xs-3">
                                <picture>
                                    <source srcSet="/img/logoglobal.webp" type="image/webp" />
                                    <img
                                        loading='lazy'
                                        src="/img/logoglobal.webp"
                                        alt="magistv"
                                        height={'100%'}
                                        width={'100%'}
                                    />
                                </picture>
                            </div>
                            <span id="title" className="d-none d-md-block text-white pl-2">
                                MAGISTVINTERNATIONAL
                            </span>
                        </a>
                    </h1>
                </div>
                <nav id="menu" className="main-nav float-right d-none d-xl-block">
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <a href="/#services">Deportes</a>
                        </li>
                        <li>
                            <a href="/#why-us">Suscripción</a>
                        </li>
                        <li>
                            <Link href='/resellers'>
                                <a >Resellers</a>
                            </Link>
                        </li>
                        <li>
                            <Descargar className='dg-red' />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav