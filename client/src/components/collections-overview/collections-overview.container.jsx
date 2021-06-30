import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors';
import WithSpinner from '../withSpinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const MapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollections
});

const CollectionsOverviewContainer = compose(
  connect(MapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

// export default CollectionsOverviewContainer;

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors';
// import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import WithSpinner from '../withSpinner/with-spinner.component';
// import CollectionsOverview from './collections-overview.component';

// const MapStateToProps = createStructuredSelector({
//   isLoading: selectIsFetchingCollections
// });

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
// });

// const CollectionsOverviewContainer = compose(
//   connect(MapStateToProps, mapDispatchToProps),
//   WithSpinner
// )(CollectionsOverview);

// export default CollectionsOverviewContainer;