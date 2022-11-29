import useSwr from "swr";
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
import { ProductTypeList } from "types";
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
              idProduct={item.idProduct}
              name={item.nombreProducto}
              price={item.precio}
              color={item.color}
              currentPrice={item.precio}
              key={item.idProduct}
              images={item.images}
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
