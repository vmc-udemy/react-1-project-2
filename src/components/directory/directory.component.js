import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(({ id, ...rest }) => (
        <DirectoryItem key={id} {...rest} />
      ))}
    </div>
  );
}

export default Directory;
