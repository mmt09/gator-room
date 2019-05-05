import React from 'react';
import PropTypes from 'prop-types';

class ListingPage extends React.Component {
  render() {
    const { match } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Listing</h1>
        <p>{match.params.id}</p>
      </div>
    );
  }
}

ListingPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ListingPage;
