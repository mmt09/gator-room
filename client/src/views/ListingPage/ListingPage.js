import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Footer from 'components/Footer/Footer';
// import GridContainer from 'components/Grid/GridContainer.jsx';
// import GridItem from 'components/Grid/GridItem.jsx';
import NavigationBar from 'views/common/NavigationBar';
import ImageSection from 'views/ListingPage/Sections/ImageSection';
import listingStyle from 'assets/jss/material-kit-react/views/listingComponent.jsx';
// import CarouselSections from './Sections/CarouselSections';

import * as actions from '../../actions';

class ListingPage extends React.Component {
  componentDidMount() {
    const { match, fetchListingDetails } = this.props;
    fetchListingDetails(match.params.id);
    window.scrollTo(0, 0);
  }

  renderListing = () => {
    const { listingDetails, classes } = this.props;
    // console.log(listingDetails);
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
        <div className={classes.main}>
          <div className={classes.imageContainer}>
            <ImageSection mainImage={picture} />
          </div>
          <div>
            {address}, {city}
          </div>
          <div>{amount}</div>
        </div>
      );
    }
    return null;
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavigationBar />
        <div className={classNames(classes.main)}>{this.renderListing()}</div>
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
)(withStyles(listingStyle)(ListingPage));
