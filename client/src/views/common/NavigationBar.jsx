import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import SearchBox from './SearchBox';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
});

class NavigationBar extends React.Component {
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
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <Header
          color="white"
          brand="GatorRoom"
          rightLinks={<HeaderLinks />}
          leftLinks={this.renderSearchBox()}
          notLandingPage
          changeColorOnScroll={{
            height: 1,
            color: 'white',
          }}
          {...rest}
        />
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavigationBar));
