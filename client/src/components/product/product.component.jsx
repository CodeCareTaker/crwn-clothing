import React from 'react';
import { connect } from 'react-redux';

import {
  ProductPageContainer,
  ProductName,
  ProductPrice,
  ImageContainer,
  CartAddButton
} from './product.styles';

const ProductPage = ({ item }) => {
   const { id, name, imageUrl, price } = item;
  
  return (
    <ProductPageContainer>
       <ProductName>{name}</ProductName>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <CartAddButton>Add</CartAddButton>
      <ProductPrice>{price}</ProductPrice>
    </ProductPageContainer>
  );
};

const mapStateToProps = (state) => ({
  item: (state.shop.item)
});

export default connect(mapStateToProps)(ProductPage);

