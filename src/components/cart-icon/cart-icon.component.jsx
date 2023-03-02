import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context'
import {CartIconContainer,ItemCount,ShoppingIcon, } from './cart-icon.style';


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;