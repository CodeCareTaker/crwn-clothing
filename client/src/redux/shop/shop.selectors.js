import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectItem = state => state.shop.item;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectedItem = itemUrlParam => createSelector(
  [selectItem],
 item => (item ? item[itemUrlParam] : null)
);

export const selectIsFetchingCollections = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);