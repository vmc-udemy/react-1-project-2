import { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
});

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const value = { isCardOpen, setIsCardOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
