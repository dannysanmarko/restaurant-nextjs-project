import ProductsCarousel from './carousel';
import useSwr from 'swr';
import Link from 'next/link';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const resp = useSwr('http://localhost:4000/client/getPlatos', fetcher);
  let platosData = resp.data || [];
  const { listPlatoss } = platosData;

  
  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <Link href="/platos" >
            <button className='btn btn--rounded btn--border'>Show All</button></Link>
        </header>

        <ProductsCarousel products={listPlatoss} />
      </div>
    </section>
  )
};

export default ProductsFeatured