import ItemCheckout from '../../components/item-checkout/item-checkout.component';
import { useCartContext } from '../../contexts/cart.context';

import {
  CheckoutContainer,
  ItemContainer,
  TotalContainer,
  SuggestionContainer,
} from './checkout.styles';

function Checkout() {
  const { cartItems, totalPrice } = useCartContext();

  return (
    <CheckoutContainer>
      <ItemContainer>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </ItemContainer>
      {cartItems.map((item) => (
        <ItemContainer as={ItemCheckout} key={item.id} item={item} />
      ))}
      <TotalContainer>TOTAL: ${totalPrice}</TotalContainer>
      <SuggestionContainer>
        *Please use the following test credit card for payments*
      </SuggestionContainer>
    </CheckoutContainer>
  );
}

export default Checkout;
