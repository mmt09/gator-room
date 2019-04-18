import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBox from './common/SearchBox';
import NavigationBar from './common/NavigationBar';
import TitlebarGridList from './TitlebarGridList';

const styles = theme => ({
  root: {
    display: 'flex',
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
    const { classes, search } = this.props;
    return (
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
          <SearchBox />
          {search ? (
            <TitlebarGridList />
          ) : (
            <div>
              We could not find this area. Please check your spelling or enter a valid ZIP code.
              Try: 94132
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
