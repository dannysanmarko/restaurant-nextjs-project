import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
import { useSelector } from "react-redux";
import { RootState } from "store";

const ProductsContent = () => {
  const { productList } = useSelector((state: RootState) => state.product);

  if (!productList) return <div>Failed to load products</div>;
  return (
    <>
      {!productList && <ProductsLoading />}

      {productList ? (
        <section className="products-list">
          {productList.map((item: any) => (
             <ProductItem
             idProduct={item.idPlato}
             name={item.nombrePlato}
             price={item.precioPlato}
             color={item.color}
             currentPrice={item.precioPlato}
             key={item.idPlato}
             images={item.imagen}
           />
          ))}
        </section>
      ) : (
        "fallo al cargar los productos"
      )}
    </>
  );
};

export default ProductsContent;
