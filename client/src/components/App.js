import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import NavigationBar from './common/NavigationBar';

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

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <a href="/hello">To test api routes and get response click here</a>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
