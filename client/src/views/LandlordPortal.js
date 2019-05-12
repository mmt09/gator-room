import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import Footer from '../components/Footer/Footer';
import NavigationBar from './common/NavigationBar';
import UserProfileCard from './portals/UserProfileCard';
import ListingList from './portals/ListingList';
import * as actions from '../actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  grid: {
    alignContent: 'center',
  },
});

class LandlordPortal extends React.Component {
  componentDidMount() {
    // takes you to the top of the page automaically
    window.scrollTo(0, 0);
  }

  render() {
    const { classes, auth } = this.props;
    console.log(auth);
    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <Grid container spacing={8} className={classes.grid}>
            <Grid item xs={3} className={classes.gridItem}>
              <UserProfileCard />
            </Grid>
            <Grid item xs={9} className={classes.gridItem}>
              <ListingList />
            </Grid>
          </Grid>
          <Footer />
        </main>
      </div>
    );
  }
}

LandlordPortal.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  actions
)(withStyles(styles, { withTheme: true })(LandlordPortal));
