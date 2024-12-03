import shopIcon from '../../assets/shopping-bag.svg';
import { useCartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShopingIcon, ItemCount } from './cart-icon.styles';

function CartIcon() {
  const { setIsCardOpen, cartCount } = useCartContext();

  return (
    <CartIconContainer onClick={() => setIsCardOpen((isOpen) => !isOpen)}>
      <ShopingIcon src={shopIcon} alt="shop-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
