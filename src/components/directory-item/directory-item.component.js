import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBodyContainer,
  Title,
  Description,
} from './directory-item.styles';

function DirectoryItem({ title, imageUrl, route }) {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <Title>{title}</Title>
        <Description>Shop Now</Description>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
