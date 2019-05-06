/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/CustomButtons/Button.jsx';

// styling
import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} />
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link underline="none" component={RouterLink} to="/">
            Home
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link underline="none" component={RouterLink} to="/LoginPage">
            Login
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink}>
          <Link underline="none" component={RouterLink} to="/SignUpPage">
            Sign Up
          </Link>
        </Button>
      </ListItem>
    </List>
  );
}

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
