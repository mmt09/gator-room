import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../actions';

import LandingPage from './LandingPage/LandingPage';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

// This an entry point to our components
class App extends React.Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LandingPage />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions
)(withStyles(styles, { withTheme: true })(App));
