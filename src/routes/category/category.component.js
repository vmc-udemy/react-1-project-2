import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useCategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, CategoryTitle } from './category.styles';
import ProductCard from '../../components/product-card/product-card.component';

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();
  const products = useMemo(() => {
    return categoriesMap[category];
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
