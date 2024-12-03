import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartButton,
} from './cart-component.styles';

function CartDropdown() {
  const { cartItems, setIsCardOpen } = useCartContext();
  const navigate = useNavigate();

  const gotoCheckout = () => {
    setIsCardOpen(false);
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartButton onClick={gotoCheckout}>GO TO CHECKOUT</CartButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
