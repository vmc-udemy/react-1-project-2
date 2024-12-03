import { useCartContext } from '../../contexts/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  Image,
  ProductButton,
  Footer,
  Name,
  Price,
} from './product-card.styles';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartContext();

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductButton>
    </ProductCardContainer>
  );
}

export default ProductCard;
