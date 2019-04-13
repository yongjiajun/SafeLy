import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  position: 'absolute',
  width: '100vw',
  height: '250vw',
  zIndex: 1,
  marginTop: '-90%',
  left: '50%',
  transform: 'translateX(-50%)',
  // borderRadius: '100%',
  clipPath: 'circle(50% at 50% 50%)'
};

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: {
          lat: -37.803835,
         lng: 144.960655
      }
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={this.state.currentLocation}
      > 
        <Marker position= {this.state.currentLocation}/>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E'
})(MapContainer);