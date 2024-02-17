import Deportes from '@/containers/home/Deportes'
import Exclusivos from '@/containers/home/Exclusivos'
import Intro from '@/containers/home/Intro'
import InvitacionReseller from '@/containers/home/InvitacionReseller'
import Suscripcion from '@/containers/home/Suscripcion'
import Vod from '@/containers/home/Vod'
import CardDescarga from '@/containers/resellers/CardDescarga'
import Layout from '@/layouts/Layout'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.$(".testimonials-carousel").owlCarousel({
      autoplay: true,
      items: 1,
      lazyLoad: true,
      loop: true,
      mouseDrag: false,
    });
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Magis TV International, magis tv, películas, deportes, premium, Netflix, Prime, Disney Plus" />
        <meta name="description" content="Explora un mundo de entretenimiento con Magis TV. Disfruta de streaming de alta calidad con acceso a canales en vivo, una amplia selección de series y películas" />
        <meta name="copyright" content="© OverWeb" />
        <link rel="canonical" href="https://magistvinternational.com/" />
        <title>MAGIS TV INTERNATIONAL - APP DE PELICULAS Y SERIES - MAGIS TV</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MAGIS TV INTERNATIONAL - APP DE PELICULAS Y SERIES - MAGIS TV" />
        <meta name="twitter:description" content="Explora un mundo de entretenimiento con Magis TV. Disfruta de streaming de alta calidad con acceso a canales en vivo, una amplia selección de series y películas" />
        <meta name="twitter:image" content="https://magistvinternational.com/img/home.webp" />
        <meta name="twitter:site" content="@Nicolas63783814" />
        <meta name="twitter:creator" content="@Nicolas63783814" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MAGIS TV INTERNATIONAL - APP DE PELICULAS Y SERIES - MAGIS TV" />
        <meta property="og:url" content="https://magistvinternational.com/" />
        <meta property="og:image" content="https://magistvinternational.com/img/home.webp" />
        <meta property="og:image:alt" content="MAGIS TV ENTRETENIMIENTO" />
        <meta property="og:description" content="Explora un mundo de entretenimiento con Magis TV. Disfruta de streaming de alta calidad con acceso a canales en vivo, una amplia selección de series y películas" />
        <meta property="og:site_name" content="Magis TV International" />
        <script type="application/ld+json" dangerouslySetInnerHTML={getDataStructure()} />
        <script type="application/ld+json" dangerouslySetInnerHTML={getSocials()} />
      </Head>
      <Layout>
        <Intro />
        <Exclusivos />
        <Deportes />
        <Suscripcion />
        <InvitacionReseller />
        <Vod />
        <CardDescarga target="app_magis" />
      </Layout>
    </>
  )
}

