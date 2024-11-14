import { createContext, useContext, useState } from 'react';

const addCartItem = (cartItems = [], productToAdd) => {
  const cart = cartItems.find((item) => item.id === productToAdd.id);

  if (cart)
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((t, item) => t + item.quantity, 0);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
