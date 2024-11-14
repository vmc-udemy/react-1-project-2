import { createContext, useContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

const ProductsContext = createContext({
  products: [],
});

export const useProductsContext = () => useContext(ProductsContext);

export function ProductsProvider({ children }) {
  // Only until use the setProducts setter.
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
