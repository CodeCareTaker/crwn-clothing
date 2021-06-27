import React from 'react';
import { connect } from 'react-redux';

import { selectItem } from '../../redux/shop/shop.selectors';

import {
  ProductPageContainer,
  ProductName,
  ProductPrice,
  ImageContainer,
  AddButton
} from './product.styles';

const ProductPage = ({ selectingItem }) => {
  //const { id, name, imageUrl, price } = item;
  
  return (
    <ProductPageContainer>
       {/*<ProductName>{item.name}</ProductName>
      <ImageContainer>
        <img src={item.imageUrl} alt='item' />
      </ImageContainer>
      <ProductPrice>{item.price}</ProductPrice> */}
    </ProductPageContainer>
  );
};

// const mapStateToProps = state => ({
//   selectingItem: selectItem(state.shop.item)
// });

// export default connect(mapStateToProps)(ProductPage);

export default ProductPage;

