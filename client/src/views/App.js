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
  render() {
    // console.log(this.props.search);
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
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles, { withTheme: true })(App));
