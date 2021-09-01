import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ProductPrice = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ImageContainer = styled.div`
  width: 23%;
  display: block;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
  }
`;

export const ProductButtonContainer = styled.div`
  padding-right: 170px;
  margin: 0 auto 30px;
`;

export const CartAddButton = styled(CustomButton)`
  width: 200%;
  opacity: 0.7;
  position: center;
  top: 255px;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackButton = styled(CustomButton)`
  width: 200%;
  opacity: 0.7;
  position: center;
  top: 255px;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
