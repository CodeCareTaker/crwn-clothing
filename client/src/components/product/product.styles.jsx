import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding-right: 15px;
  margin: 100px 700px;
  position: auto;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    margin: 0px 10px;
  }
`;

export const CartAddButton = styled(CustomButton)`
  width: 80%;
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