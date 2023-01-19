import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context'
import {ReactComponent as ShoppingIcon} from "./shopping-bag.svg";
import './cart-icon.style.scss';


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div onClick={toggleCartOpen} className={'cart-icon-container'}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className={'item-count'}>0</span>
    </div>
  );
};

export default CartIcon;