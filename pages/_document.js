import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://magistvinternational.com/img/logoglobal.webp" rel="icon" />
                <link href="https://magistvinternational.com/img/logoglobal.webp" rel="apple-touch-icon" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script strategy='beforeInteractive' src="/lib/jquery/jquery.min.js" />
                <Script strategy='beforeInteractive' src="/lib/jquery/jquery-migrate.min.js" />
                <Script strategy='beforeInteractive' src="/lib/owlcarousel/owl.carousel.min.js" />
                <Script strategy='afterInteractive' src="/lib/waypoints/waypoints.min.js" />
                <Script strategy='afterInteractive' src="/lib/wow/wow.min.js" />
                <Script strategy='lazyOnload' src="/lib/mobile-nav/mobile-nav.js" />
                <Script strategy='lazyOnload' src="/lib/easing/easing.min.js" />
                <Script strategy='lazyOnload' src="/lib/bootstrap/js/bootstrap.bundle.min.js" />
                <Script strategy='lazyOnload' src="/js/main.js" />
            </body>
        </Html>
    )
}