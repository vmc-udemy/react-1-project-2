import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-component.styles.scss';

function CartDropdown() {
  const { cartItems, setIsCardOpen } = useCartContext();
  const navigate = useNavigate();

  const gotoCheckout = () => {
    setIsCardOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={gotoCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
