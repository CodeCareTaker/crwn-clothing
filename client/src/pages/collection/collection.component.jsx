import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { addItem } from '../../redux/cart/cart.actions';
import { fetchDefaultItem } from '../../redux/shop/shop.actions';
import { selectCollection, selectItem } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  ProductPageContainer,
  ProductName,
  ProductPrice,
  ImageContainer,
  CartAddButton,
  BackButton
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemCheck = useSelector(selectItem);
  const { title, items } = collection;
  if (itemCheck.id === 0) {
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
  } else {
    return (
      <ProductPageContainer>
         <ProductName>{itemCheck.name}</ProductName>
        <ImageContainer>
          <img src={itemCheck.imageUrl} alt='item' />
        </ImageContainer>
        <CartAddButton onClick={() => dispatch(addItem(itemCheck))}>Add</CartAddButton>
        <BackButton onClick={() => dispatch(fetchDefaultItem())}>Back To Collection</BackButton>
        <ProductPrice>{itemCheck.price}</ProductPrice>
      </ProductPageContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
