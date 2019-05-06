import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import SearchBox from './SearchBox';
import Login from './Login';
import SignUp from './SignUp';
import LoginPage from './LoginPage';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    transition: 'all 150ms ease 0s',
    position: 'relative',
    zIndex: 'unset',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class NavigationBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  renderSearchBox = () => {
    const { classes, location } = this.props;

    if (location.pathname === '/' || location.pathname === '/searchResults') {
      return null;
    }

    return (
      <div className={classes.search}>
        <SearchBox
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {[
          ['Feona Mae Garcia', '/feona'],
          ['Michael McDonald Tran', '/michaelTran'],
          ['Carlos Velasco', '/carlos'],
          ['Nico Graves', '/nico'],
          ['Jakhongir Khusanov', '/jakhongir'],
          ['Michael Nelson', 'michaelNelson'],
          ['David Hernandez', 'david'],
        ].map(text => (
          <Link underline="none" component={RouterLink} to={text[1]} key={text[0]}>
            <MenuItem key={text[0]}>
              <ListItemText primary={text[0]} />
            </MenuItem>
          </Link>
        ))}
        <MenuItem onClick={this.handleMenuClose}>Close</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuOpen}>
          <Link component={RouterLink} color="inherit" underline="none" to="/">
            <Typography variant="headline" color="inherit" noWrap>
              GatorRoom
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuOpen}>
          <p>
            <Login>
              <Login />
            </Login>
          </p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuOpen}>
          <p>
            <SignUp />
          </p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <p>About Us</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Link component={RouterLink} color="inherit" underline="none" to="/">
              <Typography className={classes.title} variant="headline" color="inherit" noWrap>
                GatorRoom
              </Typography>
            </Link>
            {this.renderSearchBox()}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color="inherit">
                <Link underline="none" component={RouterLink} to="/LoginPage">
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link underline="none" component={RouterLink} to="/SignUpPage">
                  Sign Up
                </Link>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavigationBar));
