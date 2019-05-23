import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import ListingInfoCard from 'views/common/ListingInfoCard.js';
import searchCardStyle from 'assets/jss/material-kit-react/views/searchResultCardSections/searchCardStyle.jsx';

import * as actions from '../actions';

class TitlebarGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toListing: false,
      listingID: null,
    };
  }

  setListing = listingID => {
    this.setState({ toListing: true, listingID });
  };

  renderListing = () => {
    const { search, classes } = this.props;
    if (search) {
      return search.map(listing => (
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
              approved={listing.approved}
              onClick={() => this.setListing(listing.listing_id)}
            />
          </div>
        </GridItem>
      ));
    }
    return null;
  };

  render() {
    const { classes } = this.props;
    const { toListing, listingID } = this.state;

    if (toListing === true) {
      return <Redirect push to={`/listings/${listingID}`} />;
    }

    return (
      <main className={classes.section}>
        <GridContainer justify="center">{this.renderListing()}</GridContainer>
      </main>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(searchCardStyle)(TitlebarGridList)));
