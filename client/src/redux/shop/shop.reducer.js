import ShopActionTypes from './shop.types';
import { selectSingleItem } from './shop.utils';

const defaultCollections = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        imageUrl: "/images/shop-img/hats/brown-brim.png",
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        imageUrl: "/images/shop-img/hats/blue-beanie.png",
        price: 18
      }
    ]
  },
  {
    id: 2,
    title: 'Default2',
    routeName: 'Default2',
    items: [
      {
        id: 1,
        name: 'Blue Snapback',
        // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: "/images/shop-img/hats/blue-snapback.png",
        price: 16
      }
    ]
  }
]

const defaultCollection = {
  id: 1,
  title: 'Mens',
  routeName: 'mens',
  items: [
    {
      id: 1,
      name: 'Brown Brim',
      // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      imageUrl: "/images/shop-img/hats/brown-brim.png",
      price: 25
    },
    {
      id: 2,
      name: 'Blue Beanie',
      // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
      imageUrl: "/images/shop-img/hats/blue-beanie.png",
      price: 18
    }
  ]
}

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
    default:
      return state;
  }
};

export default shopReducer;