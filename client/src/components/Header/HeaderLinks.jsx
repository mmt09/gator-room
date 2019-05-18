/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link as RouterLink, withRouter } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/CustomButtons/Button.jsx';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

// styling
import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';

const renderContent = (auth, classes) => {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <div className={classes.listItem}>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              component={RouterLink}
              to="/LoginPage"
            >
              <Typography color="primary">Login</Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              component={RouterLink}
              to="/SignUpPage"
            >
              <Typography color="primary">Sign Up</Typography>
            </Button>
          </ListItem>
        </div>
      );
    default:
      return (
        <div className={classes.listItem}>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              component={RouterLink}
              to="/LandLordPortal"
            >
              <Typography color="primary">LandLord Portal</Typography>
            </Button>
          </ListItem>

          <ListItem className={classes.listItem}>
            <Button color="transparent" className={classes.navLink} href="/api/logout">
              <Typography color="primary">Sign out</Typography>
            </Button>
          </ListItem>
        </div>
      );
  }
};
function HeaderLinks({ ...props }) {
  const { classes, auth } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} component={RouterLink} to="/">
          <Typography color="primary">Home</Typography>
        </Button>
      </ListItem>
      {renderContent(auth, classes)}
    </List>
  );
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(withRouter(withStyles(headerLinksStyle)(HeaderLinks)));
