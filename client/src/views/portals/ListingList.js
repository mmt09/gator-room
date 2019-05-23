import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    display: 'flex',
    minHeight: '73vh',
    // minWidth: 600,
  },
  booty: {
    margin: 'auto',
    width: '100%',
  },
});

class ListingList extends React.Component {
  componentDidMount() {
    // Below two lines Can be deleted once development is done
    const { fetchLandlordListings, landlordID } = this.props;
    fetchLandlordListings(landlordID);
  }

  render() {
    const { classes, landlordID } = this.props;
    return (
      <Card className={classes.root}>
        <List>
          <ListItem>{landlordID}</ListItem>

          <ListItem className={classes.booty}>
            <Button
              color="default"
              className={classes.booty}
              component={RouterLink}
              to="/ListingUpload"
            >
              <Typography color="primary">Upload New Listing</Typography>
            </Button>
          </ListItem>
        </List>
      </Card>
    );
  }
}

ListingList.propTypes = {
  classes: PropTypes.object.isRequired,
  landlordID: PropTypes.number.isRequired,
  fetchLandlordListings: PropTypes.func.isRequired,
};

function mapStateToProps({ landlordListings }) {
  return { landlordListings };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ListingList));
