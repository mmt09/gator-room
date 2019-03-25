import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import NavigationBar from '../../common/NavigationBar';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Profile extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            <div class="header">
              <img
                src="https://avatars0.githubusercontent.com/u/25942541?s=460&v=4"
                alt="Photo of Jakhongir Khusanov"
                class="profile-image"
              />

              <h1 class="tag name">Jakhongir Khusanov</h1>
              <p class="tag location">Full Stack Fellow</p>
            </div>
            <div class="flex">
              <div class="card">
                <h2 class="card-title">Background</h2>
                <p>
                  Software Developer with an entrepreneurial spirit. As a tech enthusiast who
                  travels around the world, I am interested in all types of technology starting from
                  simple mobile solutions to space rockets.
                </p>
                <p>
                  My focus and expertise are mobile apps development, and I actively use
                  cutting-edge tech stack such as React Native to develop iOS and Android apps.
                  Exploring Swift for native iOS and full-stack to build awesome digital products.
                </p>
                <p>
                  I love traveling, and during my journeys, I have met many wonderful people from
                  all over the world. I am excited about bringing my life experience to the process
                  of improving people's lives.
                </p>
                <ul>
                  <li>
                    To learn more, <a href="https://github.com/jkhusanov">visit my GitHub.</a>
                  </li>
                </ul>
              </div>

              <div class="card">
                <h2 class="card-title">Goals</h2>
                <p>
                  I want to master the process of creating useful digital products and increase my
                  knowledge and skills in:
                </p>
                <ul class="skills">
                  <li>React Native</li>
                  <li>Swift</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Full Stack</li>
                </ul>
                <p>I'd like to establish my own company once I get enough industry experience.</p>
              </div>
            </div>
          </Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Profile);
