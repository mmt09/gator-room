import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../actions';
import ListingCard from '../../common/ListingCard';

class ListingsSection extends React.Component {
  componentDidMount() {
    const { fetchAllListings } = this.props;
    fetchAllListings();
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { allListings } = this.props;
    // console.log(allListings);
    return (
      <div>
        <ListingCard />
      </div>
    );
  }
}

ListingsSection.propTypes = {
  fetchAllListings: PropTypes.func.isRequired,
  allListings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ allListings }) {
  return { allListings };
}

export default connect(
  mapStateToProps,
  actions
)(ListingsSection);
