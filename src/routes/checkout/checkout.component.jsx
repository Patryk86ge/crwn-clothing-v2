import {useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalSpan
} from './checkout.style';

const Checkout = () => {
  const {cartItems, catTotal} = useContext(CartContext);
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
      <TotalSpan>Total : ${catTotal}</TotalSpan>
    </CheckoutContainer>
  );
};

export default Checkout;