import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, google } from 'google-maps-react';
import { faMapMarkerAlt, faPlay } from '@fortawesome/free-solid-svg-icons'
import Icon from "../assets/img/dot-circle-regular.svg"
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
      },
      meetUpLocation: {
        lat: -37.7964,
         lng: 144.9612
      }
    }
  }
  render() {

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={this.state.currentLocation}
      > 
        <Marker position= {this.state.currentLocation}
          label = "A"
        />
         <Marker position= {this.state.meetUpLocation}
          label = "B"
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E'
})(MapDirection);