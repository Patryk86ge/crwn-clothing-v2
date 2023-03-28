import {useDispatch,useSelector} from "react-redux";
import {
  selectCartCount ,
  selectIsCartOpen
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action';

//style:
import {CartIconContainer,ItemCount,ShoppingIcon, } from './cart-icon.style';


const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)
  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;