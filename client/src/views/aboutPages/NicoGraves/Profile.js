import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import NavigationBar from '../../common/NavigationBar';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
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
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    width: 500,
    height: 500,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  name: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

class Profile extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div className={classes.header}>
            <a href="http://gravesmakes.art">
              <Avatar
                alt="Nico Graves"
                src="https://cdn.discordapp.com/attachments/530640816952049665/571894714253443082/unknown.png"
                className={classes.avatar}
              />
            </a>

            <Typography paragraph>
              <div className={classes.name}>
                <h1> Nico Graves</h1>
                <h2>Renaissance Man, Team 103 Lead</h2>
              </div>
            </Typography>
          </div>
        </main>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Profile);
