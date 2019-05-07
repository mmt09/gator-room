/* eslint-disable camelcase */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

// icons
import Laundry from '@material-ui/icons/LocalLaundryService';
import LocalParking from '@material-ui/icons/LocalParking';
import Pet from '@material-ui/icons/Pets';
import SmokingRooms from '@material-ui/icons/SmokingRooms';

import Footer from 'components/Footer/Footer';
// import GridContainer from 'components/Grid/GridContainer.jsx';
// import GridItem from 'components/Grid/GridItem.jsx';
import NavigationBar from 'views/common/NavigationBar';
import ImageSection from 'views/ListingPage/Sections/ImageSection';
import listingStyle from 'assets/jss/material-kit-react/views/listingComponent.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import InfoArea from 'components/InfoArea/InfoArea.jsx';
// @material-ui/icons

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
        laundry_filter,
        num_bathroom,
        num_bedroom,
        num_kitchen,
        parking_filter,
        pet_filter,
        postal_code,
        smoking_filter,
      } = listingDetails[0];
      return (
        <div className={classes.main}>
          <div className={classes.imageContainer}>
            <ImageSection mainImage={picture} />
          </div>

          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>
                  {address}, {city}, {postal_code}
                </h2>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Typography className={classes.subtitle}>
                  ${amount}
                  {` · ${num_bedroom}`} {num_bedroom === 1 ? `Bedroom` : `Bedrooms`}
                  {` · ${num_bathroom}`} {num_bathroom === 1 ? `Bathroom` : `Bathrooms`}
                  {` · ${num_kitchen}`} {num_kitchen === 1 ? `Kitchen` : `Kitchens`}
                </Typography>
              </GridItem>
            </GridContainer>
            <div className={classes.listingInfoContainer}>
              <GridContainer className={classes.listingInfoContainer}>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Laundry"
                    description={laundry_filter === 0 ? 'Yes' : 'No'}
                    icon={Laundry}
                    iconColor="info"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Parking"
                    description={parking_filter === 0 ? 'Yes' : 'No'}
                    icon={LocalParking}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Pets"
                    description={pet_filter === 0 ? 'Yes' : 'No'}
                    icon={Pet}
                    iconColor="danger"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Smoking allowed"
                    description={smoking_filter === 0 ? 'Yes' : 'No'}
                    icon={SmokingRooms}
                    iconColor="danger"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>

          <div />
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
