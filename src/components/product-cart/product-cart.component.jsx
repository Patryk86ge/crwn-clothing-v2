import {useDispatch ,useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {
  ProductCardContainer,
  FooterContainer,
  NameSpan,
  NamePrice
} from './product-cart.style'

const ProductCart = ({product}) => {
  const {name, price, imageUrl} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product))
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
