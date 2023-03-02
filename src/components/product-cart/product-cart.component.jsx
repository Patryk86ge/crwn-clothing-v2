import {useContext} from "react";
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {CartContext} from '../../contexts/cart.context'
import {
  ProductCardContainer,
  FooterContainer,
  NameSpan,
  NamePrice
} from './product-cart.style'

const ProductCart = ({product}) => {
  const {name, price, imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <FooterContainer>
        <NameSpan>{name}</NameSpan>
        <NamePrice>{price}</NamePrice>
      </FooterContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCart;
