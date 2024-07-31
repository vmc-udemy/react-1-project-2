import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(({ id, ...rest }) => (
        <CategoryItem key={id} {...rest} />
      ))}
    </div>
  );
}

export default Directory;
