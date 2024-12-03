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

const subtractCartItem = (cartItems, itemToSubtract) => {
  const cartItem = cartItems.find((item) => item.id === itemToSubtract.id);

  if (!cartItem || cartItem.quantity === 1) return cartItems;

  return cartItems.map((item) =>
    item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item,
  );
};

const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id != itemToRemove.id);
};

const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  removeCartItem: () => {},
  cartCount: 0,
  totalPrice: 0,
});

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((t, item) => t + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (t, item) => t + item.price * item.quantity,
    0,
  );

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const removeCartItem = (itemToRemove) =>
    setCartItems(removeItemFromCart(cartItems, itemToRemove));

  const subtractItemFromCart = (itemToSubtract) =>
    setCartItems(subtractCartItem(cartItems, itemToSubtract));

  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCart,
    subtractItemFromCart,
    removeCartItem,
    cartItems,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
