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
  state = {
    checked: [],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

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
            <Switch
              onChange={this.handleToggle('laundry')}
              checked={this.state.checked.indexOf('laundry') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PetIcon />
          </ListItemIcon>
          <ListItemText primary="Pets" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('pets')}
              checked={this.state.checked.indexOf('pets') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CarIcon />
          </ListItemIcon>
          <ListItemText primary="Parking" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('parking')}
              checked={this.state.checked.indexOf('parking') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <SmokeIcon />
          </ListItemIcon>
          <ListItemText primary="Smoking" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle('smoking')}
              checked={this.state.checked.indexOf('smoking') !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

ListingFiltersForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingFiltersForm);
