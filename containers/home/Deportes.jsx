import React from 'react'

const Deportes = () => {
  return (
    <section id="services" className="section-deporte">
      <div className="container py-5">
        <header className="section-header-white">
          <h3 className="d-none d-sm-block">DEPORTES</h3>
          <p className="h1 d-none d-sm-block">+ DE 80 CANALES DE DEPORTES DISPONIBLES.</p>
        </header>
        <p className="d-sm-none h1 pb-3 text-white">+ DE 80 CANALES DE DEPORTES DISPONIBLES.</p>
        <div className="row">
          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <p className="description">
              Reúne a tus amigos y familiares para ver tus eventos deportivos favoritos, En Magis TV tenemos una gran
              cantidad de canales de deportes, y canales de Pases exclusivos totalmente gratis en cualquiera de nuestros planes.
            </p>
            <div className="row justify-content-center">
              <div className="col-8 pt-xs-2 col-sm-4 d-flex justify-content-center" >
                <picture>
                  <source srcSet="/img/nba.webp" type="image/webp" />
                  <img
                    loading='lazy'
                    height={'100%'}
                    width={'100%'}
                    src="/img/nba.webp"
                    alt="deporte"
                  />
                </picture>
              </div>
              <div className="col-8 pt-xs-2 col-sm-4 d-flex justify-content-center">
                <picture>
                  <source srcSet="/img/gamepass.webp" type="image/webp" />
                  <img
                    loading='lazy'
                    height={'100%'}
                    width={'100%'}
                    src="/img/gamepass.webp"
                    alt="deporte"
                  />
                </picture>
              </div>
              <div className="col-8 pt-xs-2 col-sm-4 d-flex justify-content-center">
                <picture>
                  <source srcSet="/img/mlb.webp" type="image/webp" />
                  <img
                    loading='lazy'
                    height={'100%'}
                    width={'100%'}
                    src="/img/mlb.webp"
                    alt="deporte"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="d-none d-sm-block pt-xs-2 pt-sm-3 owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item row">
                    <div className="col-4">
                      <picture>
                        <source srcSet="/img/fox.webp" type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src="/img/fox.webp"
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet="/img/espn.webp" type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src="/img/espn.webp"
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet="/img/being.webp" type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src="/img/being.webp"
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="testimonial-item row">
                    <div className="col-4">
                      <picture>
                        <source srcSet="/img/ufc.webp" type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src="/img/ufc.webp"
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet="/img/tigo.webp" type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src="/img/tigo.webp"
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet="/img/directtv.webp" type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src="/img/directtv.webp"
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center d-sm-none pt-xs-2 pt-sm-3 owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center ">
                      <div className='col-12'>
                        <picture>
                          <source srcSet="/img/fox.webp" type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src="/img/fox.webp"
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet="/img/espn.webp" type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src="/img/espn.webp"
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet="/img/being.webp" type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src="/img/being.webp"
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet="/img/ufc.webp" type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src="/img/ufc.webp"
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet="/img/tigo.webp" type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src="/img/tigo.webp"
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet="/img/directtv.webp" type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src="/img/directtv.webp"
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deportes