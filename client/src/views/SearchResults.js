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
    padding: theme.spacing.unit * 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
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
          {search.length === 0 ? <SearchError /> : <TitlebarGridList />}
          <SimpleMap />
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
