import Button from '../button/button.component';
import './cart-component.styles.scss';

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
