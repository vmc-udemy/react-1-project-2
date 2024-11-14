import shopIcon from '../../assets/shopping-bag.svg';
import { useCartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

function CartIcon() {
  const { setIsCardOpen } = useCartContext();

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCardOpen((isOpen) => !isOpen)}
    >
      <img src={shopIcon} alt="shop-icon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
