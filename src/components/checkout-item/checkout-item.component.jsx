import './checkout-item.style.scss';
import {useContext} from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {

  const {name, imageUrl, price, quantity} = cartItem;
  const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className={'checkout-item-container'}>
      <div className={'image-container'}>
        <img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className={"name"}>{name}</span>
      <span className={'quantity'}>
      <div
        onClick={removeItemHandler}
        className={'arrow'}
      >
        &#10094;
      </div>
        <span className={'value'}>
          {quantity}
        </span>
        <div
          onClick={addItemHandler}
          className={'arrow'}
        >
        &#10095;
      </div>
      </span>
      <span className={'price'}>
        {price}
      </span>
      <div
        className={'remove-button'}
        onClick={clearItemHandler}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;