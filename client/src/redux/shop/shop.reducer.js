import ShopActionTypes from './shop.types';
import { selectSingleItem, sendDefaultItem } from './shop.utils';

const defaultItem = 
  {
    id: 0,
    name: 'default',
    imageUrl: 1,
    price: 0
  };

  const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
    item: defaultItem
  }

const shopReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ShopActionTypes.FETCH_ITEM:
      return {
        ...state,
        isFetching: false,
        item: selectSingleItem(action.payload)
      };
    case ShopActionTypes.FETCH_DEFAULT_ITEM:
      return {
        ...state,
        isFetching: false,
        item: sendDefaultItem()
      };
    default:
      return state;
  }
};

export default shopReducer;