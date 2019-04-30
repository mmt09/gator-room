import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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


const drawerWidth = 240;
/* FILTERS COMPONENT */

/* END FILTERS COMPONENT */

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    height : 700,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
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
    height : 700,
    maxWidth: 700,
    background: '#fff',
    borderBottom: '4px solid #ccc',
    textAlign: 'center',
    '&:hover': {
      borderColor: '#FF69B4',
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
                <List subheader={<ListSubheader>Amenities</ListSubheader>} className={classes.root}>
                  <ListItem>
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
                  <ListItem>
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
                  <ListItem>
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
                  <ListItem>
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
                  <ListItem>
                    <ListItemIcon>
                      <MoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Budget" />
                    <ListItemSecondaryAction>
                      <Switch
                        onChange={this.handleToggle('money')}
                        checked={checked.indexOf('money') !== -1}
                      />
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
