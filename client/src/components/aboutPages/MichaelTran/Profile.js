import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
                src="https://avatars2.githubusercontent.com/u/24262297?s=460&v=4"
                alt="Photo of Michael McDonald Tran"
                width="300"
                height="300"
                class="profile-image"
              />

              <h1 class="tag name">Michael McDonald Tran</h1>
              <p class="tag location">Git Master/Full Stack Fellow</p>
            </div>
            <div class="flex">
              <div class="card">
                <h2 class="card-title">Background</h2>
                <p>
                  Current Computer Science student with passion for programming. Experienced in all
                  aspects of residential construction and software development. Extremely focused
                  and comfortable with working independently. Able to produce results quickly and
                  efficiently.
                </p>
                <p>
                  I'm currently driven to create tech products that will make the home improvement
                  process easier for people. Working on an app to streamline the construction
                  process and to centralize all blueprints, invoices, and contractor/client
                  communication.
                </p>
              </div>

              <div class="card">
                <h2 class="card-title">Skills</h2>
                <ul class="skills">
                  <li>C/C++</li>
                  <li>Swift</li>
                  <li>Java/JavaScript</li>
                  <li>Linux</li>
                  <li>Full Stack</li>
                  <li>AutoCAD</li>
                </ul>
              </div>
            </div>
          </Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Profile);
