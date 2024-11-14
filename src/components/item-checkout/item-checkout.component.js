import { useCartContext } from '../../contexts/cart.context';

function ItemCheckout({ item, className }) {
  const { removeCartItem, addItemToCart, subtractItemFromCart } =
    useCartContext();

  const { name, imageUrl, price, quantity } = item;

  return (
    <div className={className}>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <span>
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => subtractItemFromCart(item)}
        ></i>
        {quantity}
        <i
          className="fa-solid fa-chevron-right"
          onClick={() => addItemToCart(item)}
        ></i>
      </span>
      <span>{price}</span>
      <span onClick={() => removeCartItem(item)}>
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  );
}

export default ItemCheckout;
