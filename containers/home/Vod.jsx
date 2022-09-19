import React from 'react'

const Vod = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="p-3">
        <header className="section-header">
          <h3>CONTENIDO VOD</h3>
        </header>
        <p className="container text-justify">
          Con cualquier plan que te suscribas disfrutas de más de 10.000 titulo en películas y
          series de las plataformas de streaming más populares.
        </p>
        <div className="pt-xs-2 pt-sm-4 pt-lg-5 row justify-content-center">
          <div className="col-lg-11">
            <div className="d-none d-md-block wow fadeInUp">
              <div className="testimonial-item row">
                <div className="col-2 client-logo">
                  <picture>
                    <source srcSet="/img/VODhbomax.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODhbomax.webp" className="img-fluid rounded" alt="HBO" />
                  </picture>
                </div>
                <div className="col-2 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODdisney.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODdisney.webp" className="img-fluid rounded" alt="Disney" />
                  </picture>
                </div>
                <div className="col-2 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODprime.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODprime.webp" className="img-fluid rounded" alt="Prime" />
                  </picture>
                </div>
                <div className="col-2 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODnetflix.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODnetflix.webp" className="img-fluid rounded" alt="Netflix" />
                  </picture>
                </div>
                <div className="col-2 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODaple.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODaple.webp" className="img-fluid rounded" alt="APLE" />
                  </picture>
                </div>
                <div className="col-2 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODhulu.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODhulu.webp" className="img-fluid rounded" alt="HULU" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="d-md-none owl-carousel testimonials-carousel wow fadeInUp">
              <div className="testimonial-item row">
                <div className="col-6 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODhbomax.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODhbomax.webp" className="img-fluid rounded" alt="canal" />
                  </picture>
                </div>
                <div className="col-6 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODnetflix.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODnetflix.webp" className="img-fluid rounded" alt="canal" />
                  </picture>
                </div>
              </div>
              <div className="testimonial-item row">
                <div className="col-6 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODaple.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODaple.webp" className="img-fluid rounded" alt="canal" />
                  </picture>
                </div>
                <div className="col-6 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODhulu.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODhulu.webp" className="img-fluid rounded" alt="canal" />
                  </picture>
                </div>
              </div>
              <div className="testimonial-item row">
                <div className="col-6 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODprime.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODprime.webp" className="img-fluid rounded" alt="canal" />
                  </picture>
                </div>
                <div className="col-6 client-logo rounded">
                  <picture>
                    <source srcSet="/img/VODdisney.webp" type="image/webp" />
                    <img loading='lazy' height={288} width={176} src="/img/VODdisney.webp" className="img-fluid rounded" alt="canal" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-justify mt-5">
          <small>
            MAGIST TV International no ofrece cuentas para estas plataformas solo su
            contenido en el VOD de MagisTV / La disponibilidad de las películas o series
            depende de MagisTV y no MAGIS TV INTERNATIONAL.
          </small>
        </div>
      </div>
    </section>
  )
}

export default Vod