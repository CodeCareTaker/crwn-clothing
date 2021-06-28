import React from 'react';
import { connect } from 'react-redux';

import { selectItem } from '../../redux/shop/shop.selectors';

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

const mapStateToProps = (state, ownProps) => ({
  // collection: selectCollection(ownProps.match.params.collectionId)(state),
  item: (state.shop.item)
});

// const mapStateToProps = (state, ownProps) => ({
//   item: getItem(ownProps.match.params.itemId)(state)
// });

export default connect(mapStateToProps)(ProductPage);

