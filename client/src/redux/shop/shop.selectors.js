import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

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

export const getItem = itemUrlParam => createSelector(
  [selectItem],
  item => (item ? item[itemUrlParam] : null)
);

export const selectItem = createSelector(
  [selectShop],
  shop => shop.item
);

export const selectIsFetchingCollections = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);