import { useContext } from "react";
import Button from '../button/button.component'
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className={'cart-dropdown-container'}>
      <div className={'cart-item'} />
      {
        cartItems.map(el => <CartItem key={el.id} cartItem={el}/>)
      }
        <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;