import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Footer from 'components/Footer/Footer';
import NavigationBar from 'views/common/NavigationBar';

import * as actions from '../../actions';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: '1 auto 0',
    height: '100%',
  },
  footerContainer: {
    flex: 2,
    background: 'blue',
  },
});

class ListingPage extends React.Component {
  componentDidMount() {
    const { match, fetchListingDetails } = this.props;
    fetchListingDetails(match.params.id);
  }

  renderListing = () => {
    const { listingDetails } = this.props;
    if (listingDetails.length !== 0) {
      const {
        address,
        city,
        amount,
        picture,
        // laundry_filter,
        // listing_id,
        // num_bathroom,
        // num_bedroom,
        // num_kitchen,
        // parking_filter,
        // pet_filter,
        // postal_code,
        // smoking_filter,
      } = listingDetails[0];
      return (
        <div>
          <div>
            {address}, {city}
          </div>
          <div>{amount}</div>
          <div>
            <img src={picture} alt={`${address}, ${city}`} width="500" height="300" />
          </div>
        </div>
      );
    }
    return null;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavigationBar />
        <div className={classes.main}>{this.renderListing()} </div>
        <Footer />
      </div>
    );
  }
}

ListingPage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchListingDetails: PropTypes.func.isRequired,
  listingDetails: PropTypes.arrayOf(object).isRequired,
};

function mapStateToProps({ listingDetails }) {
  return { listingDetails };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ListingPage));
