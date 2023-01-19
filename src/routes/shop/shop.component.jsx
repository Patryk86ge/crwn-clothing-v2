import {useContext} from "react";
import { ProductContext } from '../../contexts/shop.context';
import ProductCart from '../../components/product-cart/product-cart.component'
import './shop.style.scss'

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className={'product-cart'}>
      {
        products.map((product) => (
         <ProductCart
           key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Shop;