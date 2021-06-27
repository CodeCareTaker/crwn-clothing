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