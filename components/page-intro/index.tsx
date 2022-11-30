import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "store";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { token} = user?.user || {};
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Ven a disfrutar de nuestros mejores platos</h2>
                { token ? <Link href="/platos">
                  <a className="btn-shop">
                    <i className="icon-right"></i>Revisar catalogo!
                  </a>
                </Link> : <a className="btn-shop">
                    <i className="icon-right"></i>Logueate para revisar catalogo!
                  </a>
                  }
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Los mejores descuentos en nuestro local</h2>
                { token ? <Link href="/platos">
                  <a className="btn-shop">
                    <i className="icon-right"></i>Revisar catalogo!
                  </a>
                </Link> : <a className="btn-shop">
                    <i className="icon-right"></i>Logueate para revisar catalogo!
                  </a>
                  }
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Recibe en tu casa gratis!</h4>
                <p>Por compras sobre $50.000</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% de satisfaccion de nuestros clientes!</h4>
                <p>Nuestros clientes opinan lo mejor de nosotros.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originalidad en cada plato</h4>
                <p>Nuestros platos son unicos, ven a probarlos!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
