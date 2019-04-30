import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import ListingCard from '../../common/ListingCard';

class ListingsSection extends React.Component {
  render() {
    return (
      <div>
        <ListingCard />
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(
  mapStateToProps,
  actions
)(ListingsSection);
