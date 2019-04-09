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

class SearchResults extends React.Component {
  render() {
    // console.log(this.props.search);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <SearchBox />
          {this.props.search ? <TitlebarGridList /> : null}
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
)(withStyles(styles, { withTheme: true })(SearchResults));
