import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script strategy='beforeInteractive' src="/lib/jquery/jquery.min.js" />
                <Script strategy='beforeInteractive' src="/lib/jquery/jquery-migrate.min.js" /> 
                <Script strategy='lazyOnload' src="/lib/bootstrap/js/bootstrap.bundle.min.js" />     
                <Script strategy='lazyOnload' src="/js/fontawesome.js" />      
            </body>
        </Html>
    )
}