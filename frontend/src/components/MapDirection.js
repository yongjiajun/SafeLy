import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  // borderRadius: '100%',
};

export class MapDirection extends Component {
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
})(MapDirection);