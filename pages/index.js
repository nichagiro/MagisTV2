import Loading from '@/components/custom/Loading'
import Whatsapp from '@/components/custom/Whatsapp'
import NavidadPromo from '@/components/publicitarios/NavidadPromo'
import Deportes from '@/containers/home/Deportes'
import Exclusivos from '@/containers/home/Exclusivos'
import Intro from '@/containers/home/Intro'
import InvitacionReseller from '@/containers/home/InvitacionReseller'
import PaquetesIncluidos from '@/containers/home/PaquetesIncluidos'
import Suscripcion from '@/containers/home/Suscripcion'
import Vod from '@/containers/home/Vod'
import CardDescarga from '@/containers/resellers/CardDescarga'
import Footer from '@/layouts/footers/Footer'
import Nav from '@/layouts/navs/Nav'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function Home() {
  const [load, setLoad] = useState(true)

  const onStart = () => {
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      items: 1,
      lazyLoad: true,
      loop: true,
      mouseDrag: false,
    });
    setLoad(false)
  }

  useEffect(() => {
    onStart()
  }, [])

  const getSocials = () => {
    return {
      __html: `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "MAGIS TV INTERNATIONAL",
        "url": "https://magistvinternational.com/",
        "address": "",
        "sameAs": [
          "https://www.facebook.com/nichagiro",
          "https://www.instagram.com/magistvinter/",
          "https://linkedin.com/in/nicolas-chamorro-9aa594196"
        ]
      }
    `
    }
  }

  const getDataStructure = () => {
    return {
      __html: `
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "magisTV",
          "operatingSystem": "ANDROID",
          "applicationCategory": "EntertainmentApplication",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "2019828903"
          },
          "offers": {
            "@type": "Offer",
            "price": "27.00",
            "priceCurrency": "USD"
          }
        }
      `
    }
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="es" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="magis tv international, series, películas, deportes, premium, netflix, prime, magi" />
        <meta name="description" content="magis tv international, disfruta del mejor contenido en full calidad, películas, series, deportes, canales en vivo y premium, netflix, prime, disney plus, entre otros." />
        <meta name="subject" content="Entretenimiento, peliculas, series, anime, caricaturas" />
        <meta name="author" content="Nicolas Chamorro Giron" />
        <meta name="copyright" content="© overweb" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://magistvinternational.com/" />
        <title>MAGIS TV INTERNATIONAL | SERIES | PELÍCULAS | DEPORTES</title>      
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MAGIS TV INTERNATIONAL | SERIES | PELÍCULAS | DEPORTES" />
        <meta name="twitter:description" content="magis tv international, disfruta del mejor contenido en full calidad, películas, series, deportes, canales en vivo y premium, netflix, prime, disney plus, entre otros." />
        <meta name="twitter:image" content="https://magistvinternational.com/img/gucci.webp" />
        <meta name="twitter:site" content="@Nicolas63783814" />
        <meta name="twitter:creator" content="@Nicolas63783814" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MAGIS TV INTERNATIONAL | SERIES | PELÍCULAS | DEPORTES" />
        <meta property="og:url" content="https://magistvinternational.com/" />
        <meta property="og:image" content="https://magistvinternational.com/img/gucci.webp" />
        <meta property="og:image:alt" content="MAGIS TV ENTRETENIMIENTO" />
        <meta property="og:description" content="magis tv international, disfruta del mejor contenido en full calidad, películas, series, deportes, canales en vivo y premium, netflix, prime, disney plus, entre otros." />
        <meta property="og:site_name" content="MagistTvInternational" />
        <script type="application/ld+json" dangerouslySetInnerHTML={getDataStructure()} />
        <script type="application/ld+json" dangerouslySetInnerHTML={getSocials()} />
      </Head>

      <Nav />

      <main className='dg-theme'>
        <Intro />
        <PaquetesIncluidos />
        <Exclusivos />
        <Deportes />
        <Suscripcion />
        <InvitacionReseller />
        <Vod />
        <CardDescarga target="app_magis" />
        <NavidadPromo />
      </main>

      <Footer />

      <Whatsapp indicativo={58} number={4126679598} />
      {load && <Loading />}
    </>
  )
}
