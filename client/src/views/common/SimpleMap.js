import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import PropTypes, { number } from 'prop-types';

import MarkerImage from '../../assets/img/map-marker-md.png';

const Marker = () => <div><img src={MarkerImage} alt="marker" height="35" width="25" /></div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 37.7219,
      lng: -122.4782
    },
    zoom: 13.5,
    locationArray: [
      { id:1, lat:37.720857, lng:-122.470528 },
      { id:2, lat:37.718379, lng:-122.466625 },
      { id:3, lat:37.716546, lng:-122.477049 },
      { id:4, lat:37.716614, lng:-122.482754 },
      { id:5, lat:37.715799, lng:-122.482840 },
      { id:6, lat:37.715324, lng:-122.472888 },
      { id:7, lat:37.720077, lng:-122.464823 },
      { id:8, lat:37.714679, lng:-122.464010 },
      { id:9, lat:37.725813, lng:-122.466755 },
      { id:10, lat:37.727646, lng:-122.473146 },
      { id:11, lat:37.757265, lng:-122.503914},
      { id:12, lat:37.752651, lng:-122.482208},
      { id:13, lat:37.748104, lng:-122.472685},
      { id:14, lat:37.744303, lng:-122.500311},
      { id:15, lat:37.786439, lng:-122.486070},
      { id:16, lat:37.763915, lng:-122.472256},
      { id:17, lat:37.776195, lng:-122.444453},
      { id:18, lat:37.789423, lng:-122.451059},
      { id:19, lat:37.782979, lng:-122.464099}
    ]
  };

  render() {
    const { center, zoom, locationArray } = this.props
    return (
      // Important! Always set the container height explicitly
   

        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKSxjOsN5bYFi9QtYqbrLoPtknm8yr5E0" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >

      {/* if you create <Markers/> using Array.map, each <Marker> needs a key, which CANNOT be the Array index */}
      {/* the key COULD be the unique lat or lng ;) */}
        
        { locationArray.map(item => <Marker key={item.id} lat={item.lat} lng={item.lng} />) }

        </GoogleMapReact>
  
    );
  }
}
SimpleMap.propTypes = {
  center: PropTypes.object,
  zoom:   PropTypes.number,
  locationArray: PropTypes.arrayOf(number)
};
export default SimpleMap;