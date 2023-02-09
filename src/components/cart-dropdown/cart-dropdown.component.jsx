import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className={'cart-dropdown-container'}>
      <div className={'cart-item'}>
      {
        cartItems.map(el => <CartItem key={el.id} cartItem={el}/>)
      }
      </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;