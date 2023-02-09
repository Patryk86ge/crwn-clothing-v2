import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context'
import {ReactComponent as ShoppingIcon} from "./shopping-bag.svg";
import './cart-icon.style.scss';


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
console.log(cartCount);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div onClick={toggleCartOpen} className={'cart-icon-container'}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className={'item-count'}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;