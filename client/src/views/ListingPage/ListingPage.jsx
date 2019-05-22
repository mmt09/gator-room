/* eslint-disable camelcase */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
import EmailAdminButton from 'views/common/EmailAdminButton';

import InfoArea from 'components/InfoArea/InfoArea.jsx';
// @material-ui/icons

// import CarouselSections from './Sections/CarouselSections';

import * as actions from '../../actions';
import ListingDetailsSections from './Sections/ListingDetailsSections';

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
        laundry_filter,
        num_bathroom,
        num_bedroom,
        num_kitchen,
        parking_filter,
        pet_filter,
        postal_code,
        smoking_filter,
        image_1,
        image_2,
        image_3,
      } = listingDetails[0];
      return (
        <div className={classNames(classes.main)}>
          <div className={classes.imageContainer}>
            <ImageSection imageOne={image_1} imageTwo={image_2} imageThree={image_3} />
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
            <div>
              <GridContainer container>
                <GridItem xs={6} md={3} sm={3}>
                  <InfoArea
                    title="Laundry"
                    description={laundry_filter === 0 ? 'Yes' : 'No'}
                    icon={Laundry}
                    iconColor={laundry_filter === 0 ? 'success' : 'danger'}
                    vertical
                  />
                </GridItem>
                <GridItem xs={6} md={3} sm={3}>
                  <InfoArea
                    title="Parking"
                    description={parking_filter === 0 ? 'Yes' : 'No'}
                    icon={LocalParking}
                    iconColor={parking_filter === 0 ? 'success' : 'danger'}
                    vertical
                  />
                </GridItem>
                <GridItem xs={6} md={3} sm={3}>
                  <InfoArea
                    title="Pets"
                    description={pet_filter === 0 ? 'Yes' : 'No'}
                    icon={Pet}
                    iconColor={pet_filter === 0 ? 'success' : 'danger'}
                    vertical
                  />
                </GridItem>
                <GridItem xs={6} md={3} sm={3}>
                  <InfoArea
                    title="Smoking allowed"
                    description={smoking_filter === 0 ? 'Yes' : 'No'}
                    icon={SmokingRooms}
                    iconColor={smoking_filter === 0 ? 'success' : 'danger'}
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
            <Divider variant="middle" />
            <ListingDetailsSections />
            <Divider variant="middle" />
            <div className={classes.contactContainer}>
              <EmailAdminButton />
            </div>
          </div>
          <div />
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <div>{this.renderListing()}</div>
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
