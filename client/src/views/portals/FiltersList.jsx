import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import PetsIcon from '@material-ui/icons/Pets';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import ParkingIcon from '@material-ui/icons/LocalParking';
import SmokingIcon from '@material-ui/icons/SmokingRoomsOutlined';
import Accessible from '@material-ui/icons/Accessible';
import Person from '@material-ui/icons/Person';
import LocalLaundryService from '@material-ui/icons/LocalLaundryService';
import Kitchen from '@material-ui/icons/Kitchen';
import AirlineSeatFlat from '@material-ui/icons/AirlineSeatFlat';
import HotTub from '@material-ui/icons/HotTub';

const drawerWidth = 240;
/* FILTERS COMPONENT */

/* END FILTERS COMPONENT */

// const userFilters = [true,false,false,false,false,false,0,0,0,0,[0,1]];

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    minHeight: '69vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  textField: {
    width: '20%',
    marginLeft: '450px',
  },

  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  filter: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    justifyContent: 'space-around',
  },

  card: {
    background: '#fff',
    borderBottom: '4px solid #ccc',
    textAlign: 'center',
    '&:hover': {
      borderColor: '#FF69B4',
    },
    textField: {
      width: 200,
    },
  },
});

class Profile extends React.Component {
  state = { checked: 'wifi' };

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
    const { checked } = this.state;

    return (
      <Typography paragraph>
        <Card className={classes.card}>
          <CardContent>
            <List
              subheader={<ListSubheader>My Search Filters</ListSubheader>}
              className={classes.root}
            >
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText primary="Wi-Fi" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.handleToggle('wifi')}
                    checked={checked.indexOf('wifi') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText primary="Pet Friendly" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.handleToggle('pets')}
                    checked={checked.indexOf('pets') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <SmokingIcon />
                </ListItemIcon>
                <ListItemText primary="Smoking Allowed" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.handleToggle('smoking')}
                    checked={checked.indexOf('smoking') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <LocalLaundryService />
                </ListItemIcon>
                <ListItemText primary="Laundry" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.handleToggle('laundry')}
                    checked={checked.indexOf('laundry') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ParkingIcon />
                </ListItemIcon>
                <ListItemText primary="On-site Parking" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.handleToggle('parking')}
                    checked={checked.indexOf('parking') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <Accessible />
                </ListItemIcon>
                <ListItemText primary="Handicap Accessiblity" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={this.handleToggle('handicap')}
                    checked={checked.indexOf('handicap') !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <MoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Budget" />
                <ListItemSecondaryAction>
                  <TextField
                    className={classes.textField}
                    id="filled-adornment-amount"
                    variant="filled"
                    label="Monthly"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <Kitchen />
                </ListItemIcon>
                <ListItemText primary="Kitchens" />
                <ListItemSecondaryAction>
                  <TextField
                    className={classes.textField}
                    id="filled-adornment-amount"
                    variant="filled"
                    label="Kitchens"
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <AirlineSeatFlat />
                </ListItemIcon>
                <ListItemText primary="Beds" />
                <ListItemSecondaryAction>
                  <TextField
                    className={classes.textField}
                    id="filled-adornment-amount"
                    variant="filled"
                    label="Beds"
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <HotTub />
                </ListItemIcon>
                <ListItemText primary="Bathrooms" />
                <ListItemSecondaryAction>
                  <TextField
                    className={classes.textField}
                    id="filled-adornment-amount"
                    variant="filled"
                    label="Bathrooms"
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Roomate Genders" />

                <ListItemSecondaryAction>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Typography>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Profile);
