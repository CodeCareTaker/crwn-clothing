import ShopActionTypes from './shop.types';
import { selectSingleItem } from './shop.utils';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
  item: null
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
      // case ShopActionTypes.FETCH_ITEM_START:
      // return {
      //   ...state,
      //   isFetching: true
      // };
    case ShopActionTypes.FETCH_ITEM:
      return {
        ...state,
        isFetching: false,
        item: selectSingleItem(action.payload)
      };
    // case ShopActionTypes.FETCH_ITEM_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     errorMessage: action.payload
    //   };
    default:
      return state;
  }
};

export default shopReducer;