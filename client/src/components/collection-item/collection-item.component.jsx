import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';
import { fetchItem } from '../../redux/shop/shop.actions';
import { selectItem } from '../../redux/shop/shop.selectors';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  DetailButton,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ match, item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
       <DetailButton onClick={() => {
          //dispatch(fetchItem(item), history.push(`${match.url}/${item.id}`));
          dispatch(fetchItem(item), alert(`${match.url}/${item.id}`));
        }} inverted>
          See Product Details
      </DetailButton>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default withRouter(CollectionItem);
