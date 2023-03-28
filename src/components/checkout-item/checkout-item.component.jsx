import {useSelector, useDispatch} from "react-redux";
import {clearItemFromCart, addItemToCart, removeItemFromCart} from '../../store/cart/cart.action'
import {  selectCartItems } from '../../store/cart/cart.selector'
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  NameSpan,
  QuantitySpan,
  PriceSpan,
  ValueSpan,
  ArrowDiv
} from './checkout-item.style';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const {name, imageUrl, price, quantity} = cartItem;

  const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <ArrowDiv
          onClick={removeItemHandler}
        >
          &#10094;
        </ArrowDiv>
        <ValueSpan>
          {quantity}
        </ValueSpan>
        <ArrowDiv
          onClick={addItemHandler}
        >
          &#10095;
        </ArrowDiv>
      </QuantitySpan>
      <PriceSpan>
        ${price}
      </PriceSpan>
      <RemoveButton
        onClick={clearItemHandler}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;