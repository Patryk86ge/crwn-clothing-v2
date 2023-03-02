import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
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

const CheckoutItem = ({cartItem}) => {

  const {name, imageUrl, price, quantity} = cartItem;
  const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);
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