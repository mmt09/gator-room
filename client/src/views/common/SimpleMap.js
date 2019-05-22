import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import PropTypes from 'prop-types';

import MarkerImage from '../../assets/img/map-marker-md.png';

const Marker = () => (
  <div>
    <img src={MarkerImage} alt="marker" height="35" width="25" />
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.7219,
      lng: -122.4782,
    },
    zoom: 13.5,
  };

  render() {
    const { center, zoom, locations } = this.props;
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCKSxjOsN5bYFi9QtYqbrLoPtknm8yr5E0' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {/* if you create <Markers/> using Array.map, each <Marker> needs a key, which CANNOT be the Array index */}
          {/* the key COULD be the unique lat or lng ;) */}

          {locations.map(item => (
            <Marker key={item.listing_id} lat={item.lat} lng={item.long} />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
SimpleMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SimpleMap;
