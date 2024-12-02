import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useCategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();
  const products = useMemo(() => {
    return categoriesMap[category];
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Category;
