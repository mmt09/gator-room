import React from 'react';
import NavigationBar from 'views/common/NavigationBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import ListingInfoCard from 'views/common/ListingInfoCard.js';
import searchCardStyle from 'assets/jss/material-kit-react/views/searchResultCardSections/searchCardStyle.jsx';
import { Redirect, withRouter } from 'react-router';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toListing: false,
      listingID: null,
    };
  }

  componentDidMount() {
    const { fetchAllListings } = this.props;
    fetchAllListings();
  }

  setListing = listingID => {
    this.setState({ toListing: true, listingID });
  };

  renderListing = () => {
    const { allListings, classes } = this.props;
    if (allListings) {
      return allListings.map(listing => (
        <GridItem xs={12} sm={12} md={7} key={listing.listing_id} height="">
          <div className={classes.paper}>
            <ListingInfoCard
              key={listing.listing_id}
              picture={listing.picture}
              city={listing.city}
              address={listing.address}
              price={listing.amount}
              numberOfBedroom={listing.num_bedroom}
              numberOfBathroom={listing.num_bathroom}
              imageOne={listing.image_1}
              onClick={() => this.setListing(listing.listing_id)}
            />
          </div>
        </GridItem>
      ));
    }
    return null;
  };

  render() {
    const { allListings } = this.props;
    const { classes } = this.props;
    const { toListing, listingID } = this.state;

    if (toListing === true) {
      return <Redirect push to={`/listings/${listingID}`} />;
    }
    return (
      <div className={classes.section}>
        <NavigationBar />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Welcome back The Lord of the Rooms</h2>
            <h5 className={classes.description}>Exercise your power</h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">{this.renderListing()}</GridContainer>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  fetchAllListings: PropTypes.func.isRequired,
  allListings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ allListings }) {
  return { allListings };
}
export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(searchCardStyle)(AdminDashboard)));
