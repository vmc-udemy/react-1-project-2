import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: grid;
  max-width: 800px;
  margin: auto;
`;

export const ItemContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  padding: 16px 0;
  align-items: center;

  > * {
    width: 100%;
  }

  span:nth-child(n + 3) {
    text-align: center;
  }
`;

export const TotalContainer = styled.div`
  text-align: right;
  font-size: 24px;
  padding: 20px 0;
`;

export const SuggestionContainer = styled.div`
  text-align: center;
  font-size: 18px;
  padding-top: 10px;
  color: orangered;
`;
