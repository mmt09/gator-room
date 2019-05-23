/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
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
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  errorComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userProfileCard: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
});

class LandlordPortal extends React.Component {
  componentDidMount() {
    // takes you to the top of the page automatically
    window.scrollTo(0, 0);

    // Below two lines Can be deleted once development is done
    const { fetchUser } = this.props;
    fetchUser();
  }

  renderContent = () => {
    const { classes, auth } = this.props;

    if (auth) {
      const { first_name, last_name, email, phone, picture, landlord_id, about } = auth;
      return (
        <main className={classes.content}>
          <Grid container spacing={8} className={classes.grid}>
            <Grid item xs={3} className={classes.userProfileCard}>
              <UserProfileCard
                firstName={first_name}
                lastName={last_name}
                phone={phone}
                picture={picture}
                email={email}
                landlordID={landlord_id}
                about={about}
              />
            </Grid>
            <Grid item xs={9} className={classes.gridItem}>
              <ListingList landlordID={landlord_id} />
            </Grid>
          </Grid>
          <Footer />
        </main>
      );
    }
    if (auth === false) {
      return (
        <div className={classes.errorComponent}>
          <h2 className={classes.title}>
            Please{' '}
            <Link underline="hover" component={RouterLink} to="/LoginPage">
              login
            </Link>{' '}
            or{' '}
            <Link underline="hover" component={RouterLink} to="/SignUpPage">
              sign up
            </Link>{' '}
            first to access your landlord portal
          </h2>
        </div>
      );
    }
    return null;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavigationBar />
        {this.renderContent()}
      </div>
    );
  }
}

LandlordPortal.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  actions
)(withStyles(styles, { withTheme: true })(LandlordPortal));
