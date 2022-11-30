import { GetServerSideProps } from "next";

import { useState } from "react";
import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";



import axios from "axios";

type ProductPageType = {
  product: any;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;

  //get cookie
  // const token = req.cookies.tokenUser;
  const url = `http://restaurantproject.duckdns.org:4000/client/getPlatosById/${pid}`; //
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  const resp = await axios(url);
  let {listPlato} = (await resp.data) || [];
  const product = listPlato
  return {
    props: { product }, // will be passed to the page component as props
  };
};

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState("description");

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">

            {product.map((item: any) => (
              <>
             <Gallery images={item.imagen}/>
             <Content platoId={item.idPlato} nombrePlato={item.nombrePlato} precioPlato={item.precioPlato} imagen={item.imagen}  />
             </>
          ))}  
            
   
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock("description")}
                className={`btn btn--rounded ${
                  showBlock === "description" ? "btn--active" : ""
                }`}
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--rounded ${
                  showBlock === "reviews" ? "btn--active" : ""
                }`}
              >
                Reviews (2)
              </button>
            </div>

            {/* <Description show={showBlock === "description"} /> */}
            {/* <Reviews product={product} show={showBlock === "reviews"} /> */}
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
