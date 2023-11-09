import CardDescarga from '@/containers/resellers/CardDescarga'
import Intro from '@/containers/resellers/Intro'
import Planes from '@/containers/resellers/Planes'
import Layout from '@/layouts/Layout'
import Head from 'next/head'

export default function Home() {
  const getSocials = () => {
    return {
      __html: `
            {               
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "MAGIS TV INTERNATIONAL",
            "url": "https://magistvinternational.com/resellers",
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
                "ratingValue": "5.0",
                "ratingCount": "2300115841"
                },
                "offers": {
                "@type": "Offer",
                "price": "9.00",
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
        <meta name="description" content="magis tv international, trabaja con nosotros y vende paquetes a tus usuarios para disfrutar de magis tv, peliculas, series, novelas, canales, deportes, etc" />
        <meta name="subject" content="Entretenimiento, peliculas, series, anime, caricaturas" />
        <meta name="author" content="Nicolas Chamorro Giron" />
        <meta name="copyright" content="© overweb" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://magistvinternational.com/resellers" />
        <title>MAGIS TV INTERNATIONAL | APP DE PELICULAS | APLICACION DE SERIES</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MAGIS TV INTERNATIONAL | APP DE PELICULAS | APLICACION DE SERIES" />
        <meta name="twitter:description" content="magis tv international, trabaja con nosotros y vende paquetes a tus usuarios para disfrutar de magis tv, peliculas, series, novelas, canales, deportes, etc" />
        <meta name="twitter:image" content="https://magistvinternational.com/img/slider_caricatura.webp" />
        <meta name="twitter:site" content="@Nicolas63783814" />
        <meta name="twitter:creator" content="@Nicolas63783814" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MAGIS TV INTERNATIONAL | APP DE PELICULAS | APLICACION DE SERIES" />
        <meta property="og:url" content="https://magistvinternational.com/resellers" />
        <meta property="og:image" content="https://magistvinternational.com/img/slider_caricatura.webp" />
        <meta property="og:image:alt" content="MAGIS TV ENTRETENIMIENTO" />
        <meta property="og:description" content="magis tv international, trabaja con nosotros y vende paquetes a tus usuarios para disfrutar de magis tv, peliculas, series, novelas, canales, deportes, etc" />
        <meta property="og:site_name" content="MagistTvInternational" />
        <script type="application/ld+json" dangerouslySetInnerHTML={getDataStructure()} />
        <script type="application/ld+json" dangerouslySetInnerHTML={getSocials()} />
      </Head>
      <Layout>
        <Intro />
        <Planes />
        <CardDescarga target="app_magis" />
      </Layout>
    </>
  )
}
