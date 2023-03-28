import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalSpan
} from './checkout.style';
import {useSelector} from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map((carItem) =>
          <CheckoutItem
            key={carItem.id}
            cartItem={carItem}
          />
        )
      }
      <TotalSpan>Total : ${total}</TotalSpan>
    </CheckoutContainer>
  );
};

export default Checkout;