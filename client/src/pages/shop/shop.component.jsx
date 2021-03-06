import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));
const ProductPage = lazy(() => import('../../components/product/product.component'));

const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // useEffect(() => {
  //   if(collections.title === "Default") {
  //     fetchCollectionsStart();
  //   }
  //   }, [fetchCollectionsStart])
  

  
  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route 
        exact 
        path={`${match.path}`} 
        component={ CollectionsOverviewContainer }
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={ CollectionPageContainer }
        />
        {/* <Route 
          //exact  I've tried adding exact but this causes the component to never load
          // path={`${match.path}/product/:itemId`}
          path={`${match.path}/:itemId`}
          component={ ProductPage }
        />  */}
      </Suspense>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   collections: (state.shop.collections) 
// });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);