import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import * as actions from '../../../actions';
import ListingInfoCard from '../../common/ListingInfoCard';

import productStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ListingsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toAllListings: false,
      toListing: false,
      listingID: null,
    };
    this.makeSearch = this.makeSearch.bind(this);
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
      return allListings.slice(0, 6).map(listing => (
        <GridItem xs={12} sm={12} md={4} key={listing.listing_id}>
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

  makeSearch() {
    const { fetchSearch } = this.props;
    fetchSearch('94132', () => {});
    this.setState({ toAllListings: true });
  }

  render() {
    const { classes } = this.props;
    const { toAllListings, toListing, listingID } = this.state;

    if (toAllListings === true) {
      return <Redirect push to="/searchResults" />;
    }
    if (toListing === true) {
      return <Redirect push to={`/listings/${listingID}`} />;
    }
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Listings around SF State</h2>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">{this.renderListing()}</GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
              <Button color="primary" onClick={this.makeSearch} variant="outlined">
                See More
              </Button>
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ListingsSection.propTypes = {
  fetchAllListings: PropTypes.func.isRequired,
  allListings: PropTypes.arrayOf(PropTypes.object),
  fetchSearch: PropTypes.func.isRequired,
};

ListingsSection.defaultProps = {
  allListings: [],
};

function mapStateToProps({ allListings }) {
  return { allListings };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(productStyle)(ListingsSection)));
