import Layout from "../layouts/Main";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import ProductsFilter from "../components/products-filter";
import ProductsContent from "../components/products-content";
import axios from "axios";
import  { useDispatch } from "react-redux";
import React, {useEffect } from 'react'
import { setProduct } from "store/reducers/product";

const Products = ({ platosData }: any) => {
  const { listPlatoss } = platosData;
  const totalPlatos = listPlatoss.length
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProduct(listPlatoss));
  }, [totalPlatos]);
 
  return (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent totalPlatos={totalPlatos}/>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Products;

export async function getServerSideProps({  res, req }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  //get cookie
  const token = req.cookies.tokenUser;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = "https://api.restaurantproject.duckdns.org/client/getPlatos"; //https://api.restaurantproject.duckdns.org/client/getPlatosById/idPlato

  const resp = await axios(url, config);
  let platosData = (await resp.data) || [];

  // console.log(resp);
  return {
    props: { platosData }, // will be passed to the page component as props
  };
}
