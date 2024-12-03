import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  DetailName,
} from './cart-item.styles';

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetails>
        <DetailName>{name}</DetailName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
