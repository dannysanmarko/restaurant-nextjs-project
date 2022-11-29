import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { addProduct } from 'store/reducers/cart';
import { toggleFavProduct } from 'store/reducers/user';
import { RootState } from 'store';


const Content = ({ platoId, nombrePlato, precioPlato, imagen  }: any) => {
  console.log("nombre" + nombrePlato)
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  // const [color, setColor] = useState<string>('');
  // const [itemSize, setItemSize] = useState<string>('');

  // const onColorSet = (e: string) => setColor(e);
  // const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, platoId => platoId === platoId);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: platoId,
      }
    ))
  }

  const addToCart = () => {
    const productToSave: any = { 
      id: platoId,
      name: nombrePlato,
      thumb: imagen,
      price: precioPlato,
      count: count,
      // color: color,
      // size: itemSize
    }

    const productStore = {
      count,
      product: productToSave
    }

    dispatch(addProduct(productStore));
  }

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{platoId}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{nombrePlato}</h2>

        <div className="product__prices">
          <h4>${ precioPlato }</h4>
          {/* {product.discount &&
            <span>${ product.price }</span>
          } */}
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          {/* <h5>Color:</h5> */}
          <div className="checkbox-color-wrapper">
            {/* {productsColors.map(type => (
              <CheckboxColor 
                key={type.id} 
                type={'radio'} 
                name="product-color" 
                color={type.color}
                valueName={type.label}
                onChange={onColorSet} 
              />
            ))} */}
          </div>
        </div>
        <div className="product-filter-item">
          {/* <h5>Size: <strong>See size table</strong></h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Choose size</option>
                {productsSizes.map(type => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div> */}
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    