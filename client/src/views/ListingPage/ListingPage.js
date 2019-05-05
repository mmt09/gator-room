import React from 'react';

class ListingPage extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Listing</h1>
        <p>{params.id}</p>
      </div>
    );
  }
}
export default ListingPage;
