import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBox from './common/SearchBox';
import NavigationBar from './common/NavigationBar';
import TitlebarGridList from './TitlebarGridList';
const styles = theme => ({
  root: {
    display: 'flex',
    //flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  render() {
    // console.log(this.props.search);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <SearchBox />
          {this.props.search ? <TitlebarGridList /> : null}

          {/** Thi below is to get direct response from server */}
          {/* <a href="/hello">To test api routes and get response click here</a> */}
        </main>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { search: search };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles, { withTheme: true })(App));
