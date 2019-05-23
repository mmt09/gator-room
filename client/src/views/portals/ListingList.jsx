/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import ListingInfoCard from 'views/common/ListingInfoCard.js';
import { Redirect, withRouter } from 'react-router';

import * as actions from '../../actions';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    display: 'flex',
    minHeight: '73vh',
    // minWidth: 600,
  },
  booty: {
    margin: 'auto',
    width: '100%',
  },
});

class ListingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toListing: false,
      listingID: null,
    };
  }

  componentDidMount() {
    // Below two lines Can be deleted once development is done
    const { fetchLandlordListings, landlordID } = this.props;
    fetchLandlordListings(landlordID);
  }

  setListing = listingID => {
    this.setState({ toListing: true, listingID });
  };

  renderListing = () => {
    const { landlordListings, classes } = this.props;
    if (landlordListings) {
      return landlordListings.map(listing => (
        <GridItem xs={12} sm={12} md={7} key={listing.listing_id} height="">
          <div className={classes.adminPaper}>
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
      <Card className={classes.root}>
        <List>
          <div className={classes.adminSection}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Your Listings</h2>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">{this.renderListing()}</GridContainer>
          </div>

          <ListItem className={classes.booty}>
            <Button
              color="default"
              className={classes.booty}
              component={RouterLink}
              to="/ListingUpload"
            >
              <Typography color="primary">Upload New Listing</Typography>
            </Button>
          </ListItem>
        </List>
      </Card>
    );
  }
}

ListingList.propTypes = {
  classes: PropTypes.object.isRequired,
  landlordID: PropTypes.number.isRequired,
  fetchLandlordListings: PropTypes.func.isRequired,
};

function mapStateToProps({ landlordListings }) {
  return { landlordListings };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(withStyles(styles)(ListingList)));
