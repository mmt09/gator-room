import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const K_SIZE = 55;

const styles = () => ({
  markerWrap: {},
  markerCenter: {
    display: 'flex',
    width: K_SIZE / 1.5,
    height: K_SIZE / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'rotate(45deg)',
    // alignSelf: 'center',
    // backgroundColor: 'red',
  },
  circleMarker: {
    display: 'flex',
    position: 'absolute',
    width: K_SIZE,
    height: K_SIZE,
    left: -K_SIZE / 2,
    top: -K_SIZE / 2,

    border: '5px solid',
    borderRadius: K_SIZE,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#a353b1',
    fontSize: 12,
    fontWeight: 'bold',
    cursor: 'pointer',
    borderBottomLeftRadius: 0,
    borderColor: '#3f51b5',

    // transform: 'rotate(-45deg)',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
});

// eslint-disable-next-line react/prop-types
const Marker = ({ price, classes }) => (
  <div className={classes.circleMarker}>
    {/* <img src={MarkerImage} alt="marker" height="35" width="25" /> */}
    {/* {price} */}
    <div className={classes.markerCenter}>${price}</div>
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
    const { center, zoom, locations, classes } = this.props;
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
            <Marker
              key={item.listing_id}
              lat={item.lat}
              lng={item.long}
              price={item.amount}
              classes={classes}
            />
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
export default withStyles(styles)(SimpleMap);
