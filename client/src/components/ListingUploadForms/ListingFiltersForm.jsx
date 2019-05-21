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
import Danger from 'components/Typography/Danger.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Grid from '@material-ui/core/Grid';
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
    const { laundry, pets, parking, smoking } = this.state;

    console.log('Save');
  }

  render() {
    const { classes, listingUpload } = this.props;
    const { laundry, pets, parking, smoking } = this.state;
    console.log(listingUpload);

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
        </Grid>
      </List>
    );
  }
}

ListingFiltersForm.propTypes = {
  classes: PropTypes.object.isRequired,
  listingUpload: PropTypes.object.isRequired,
};

function mapStateToProps({ listingUpload }) {
  return { listingUpload };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ListingFiltersForm));
