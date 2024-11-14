import ItemCheckout from '../../components/item-checkout/item-checkout.component';
import { useCartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

function Checkout() {
  const { cartItems, totalPrice } = useCartContext();

  return (
    <div className="checkout-container">
      <div className="item-container">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((item) => (
        <ItemCheckout key={item.id} item={item} className="item-container" />
      ))}
      <div className="total-container">TOTAL: ${totalPrice}</div>
      <div className="suggestion-container">
        *Please use the following test credit card for payments*
      </div>
    </div>
  );
}

export default Checkout;
