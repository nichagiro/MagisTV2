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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="magis tv international, series, películas, deportes, premium, netflix, prime, magi" />
        <meta name="description" content="Magis TV, oportunidad de incrementar sus ingresos pasivos a su ritmo desde su casa. Forma parte de nosotros ofreciendo el mejor servicio de TV en vivo" />
        <meta name="copyright" content="© overweb" />
        <link rel="canonical" href="https://magistvinternational.com/resellers" />
        <title>MAGIS TV INTERNATIONAL | RESELLERS MAGIS TV | DESCARGAR MAGIS TV</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MAGIS TV INTERNATIONAL | RESELLERS MAGIS TV | DESCARGAR MAGIS TV" />
        <meta name="twitter:description" content="Magis TV, oportunidad de incrementar sus ingresos pasivos a su ritmo desde su casa. Forma parte de nosotros ofreciendo el mejor servicio de TV en vivo" />
        <meta name="twitter:image" content="https://magistvinternational.com/img/magistv58.webp" />
        <meta name="twitter:site" content="@Nicolas63783814" />
        <meta name="twitter:creator" content="@Nicolas63783814" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MAGIS TV INTERNATIONAL | RESELLERS MAGIS TV | DESCARGAR MAGIS TV" />
        <meta property="og:url" content="https://magistvinternational.com/resellers" />
        <meta property="og:image" content="https://magistvinternational.com/img/magistv58.webp" />
        <meta property="og:image:alt" content="MAGIS TV ENTRETENIMIENTO" />
        <meta property="og:description" content="Magis TV, oportunidad de incrementar sus ingresos pasivos a su ritmo desde su casa. Forma parte de nosotros ofreciendo el mejor servicio de TV en vivo" />
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
