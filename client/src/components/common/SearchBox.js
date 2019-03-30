import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'; // gives certain components ability to call action creators
import * as actions from '../../actions';
const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%', //400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.updateSearchField = this.updateSearchField.bind(this);
  }

  updateSearchField(event) {
    const target = event.target;
    const text = target.value;
    this.setState({ searchQuery: text });
  }
  render() {
    const { classes } = this.props;
    const { searchQuery } = this.state;
    return (
      <Paper className={classes.root} elevation={1}>
        <IconButton className={classes.iconButton} aria-label="Search" disabled={true}>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Enter address or ZIP code"
          value={searchQuery}
          onChange={this.updateSearchField}
        />
        <Button color="primary" onClick={() => this.props.fetchSearch(searchQuery, () => {})}>
          Search
        </Button>
        <Divider className={classes.divider} />
        <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
          <MenuIcon />
        </IconButton>
      </Paper>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  actions
)(withStyles(styles)(SearchBox));
