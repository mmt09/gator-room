import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import PetIcon from '@material-ui/icons/Pets';
import SmokeIcon from '@material-ui/icons/SmokeFree';
import CarIcon from '@material-ui/icons/DirectionsCar';
import LaundryIcon from '@material-ui/icons/LocalLaundryService';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from 'components/CustomButtons/Button.jsx';
import Success from 'components/Typography/Success.jsx';
import * as actions from '../../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class ListingFiltersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laundry: false,
      pets: false,
      parking: false,
      smoking: false,
    };
    this.uploadListingFilters = this.uploadListingFilters.bind(this);
  }

  handleToggle = value => () => {
    this.setState({ [value]: !this.state[value] });
  };

  uploadListingFilters() {
    const { listingUpdate, listingFiltersUpload } = this.props;
    const { laundry, pets, parking, smoking } = this.state;
    listingFiltersUpload(laundry, pets, parking, smoking, listingUpdate.listingID);
  }

  render() {
    const { classes, listingFiltersResult } = this.props;
    const { laundry, pets, parking, smoking } = this.state;

    return (
      <List
        subheader={<ListSubheader>House Rules and Amenities</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemIcon>
            <LaundryIcon />
          </ListItemIcon>
          <ListItemText primary="Laundry" />
          <ListItemSecondaryAction>
            <Switch onChange={this.handleToggle('laundry')} checked={laundry} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PetIcon />
          </ListItemIcon>
          <ListItemText primary="Pets" />
          <ListItemSecondaryAction>
            <Switch onChange={this.handleToggle('pets')} checked={pets} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CarIcon />
          </ListItemIcon>
          <ListItemText primary="Parking" />
          <ListItemSecondaryAction>
            <Switch onChange={this.handleToggle('parking')} checked={parking} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <SmokeIcon />
          </ListItemIcon>
          <ListItemText primary="Smoking" />
          <ListItemSecondaryAction>
            <Switch onChange={this.handleToggle('smoking')} checked={smoking} />
          </ListItemSecondaryAction>
        </ListItem>
        <Grid item xs={12} sm={6}>
          <Button color="primary" size="lg" onClick={this.uploadListingFilters}>
            Confirm
          </Button>
          <Success>{listingFiltersResult}</Success>
        </Grid>
      </List>
    );
  }
}

ListingFiltersForm.propTypes = {
  classes: PropTypes.object.isRequired,
  listingUpdate: PropTypes.object.isRequired,
  listingFiltersResult: PropTypes.string.isRequired,
  listingFiltersUpload: PropTypes.func.isRequired,
};

function mapStateToProps({ listingUpload }) {
  return {
    listingUpdate: listingUpload.listingUpdate,
    listingFiltersResult: listingUpload.listingFiltersResult,
  };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ListingFiltersForm));
