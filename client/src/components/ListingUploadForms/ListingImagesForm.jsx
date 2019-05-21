import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Upload from '../../views/common/fileUploadComponents/upload/Upload';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class ListingImagesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
    this.updateDescription = this.updateDescription.bind(this);
  }

  state = {};

  updateDescription(event) {
    const { target } = event;
    const text = target.value;
    this.setState({ description: text });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { listingUpdate } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={12}>
          <Upload listingID={listingUpdate.listingID} />
        </Grid>
      </Grid>
    );
  }
}

ListingImagesForm.propTypes = {
  classes: PropTypes.object.isRequired,
  listingUpdate: PropTypes.object.isRequired,
};

function mapStateToProps({ listingUpload }) {
  return {
    listingUpdate: listingUpload.listingUpdate,
  };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(ListingImagesForm));
