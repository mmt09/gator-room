import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBox from './common/SearchBox';
import NavigationBar from './common/NavigationBar';
import TitlebarGridList from './TitlebarGridList';
import SearchError from './common/SearchError';
import SimpleMap from './common/SimpleMap';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapContainer: {
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    maxHeight: '80vh',
  },
  cardsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'auto',
    // position: 'absolute',
    [theme.breakpoints.up('md')]: {
      overflow: 'auto',
      maxHeight: '80vh',
      right: 0,
      overflowX: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto',
      right: 0,
      overflowX: 'hidden',
    },
  },
});

class SearchResults extends React.Component {
  render() {
    const { classes, search } = this.props;
    if (search === null) {
      return (
        <div className={classes.root}>
          <NavigationBar />
          <main className={classes.content}>
            <SearchBox />
            <SearchError />
          </main>
        </div>
      );
    }
    return (
      <div className={classes.root}>
        <NavigationBar />
        <SearchBox />
        <main className={classes.content}>
          {search.length === 0 ? (
            <SearchError />
          ) : (
            <div className={classes.resultContainer}>
              <div className={classes.mapContainer}>
                <SimpleMap />
              </div>
              <div className={classes.cardsContainer}>
                <TitlebarGridList />
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.arrayOf(PropTypes.object),
};
// Specifies the default values for props:
SearchResults.defaultProps = {
  search: [],
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles, { withTheme: true })(SearchResults));
