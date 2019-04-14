import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
/* global google */

const google = window.google;

export class MapDirection extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: {
         lat: -37.796368,
         lng: 144.960655
      },
      finalPosition: {
        lat: -37.7964,
        lng: 144.9612
      },
      lineCoordinates: [{
        lat: -37.796368,
       lng: 144.960655
    }, {
      lat: -37.7964,
      lng: 144.9612
    },]
    }
  }

  renderChild() {
    this.setState({toChild: true});
  }

  componentDidMount() {

    // Once the Google Maps API has finished loading, initialize the map
    var directionsService = new window.google.maps.DirectionsService;
    var directionsDisplay = new window.google.maps.DirectionsRenderer;
    var start =this.state.currentLocation;
    var end =this.state.finalPosition;
    var self = this;
    directionsService.route({
      origin: start,
      destination: end,
      optimizeWaypoints: true,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        console.log(response);
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
        self.setState({lineCoordinates: response.routes[0].overview_path});
        // For each route, display summary information.
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  render() {
      return (
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={this.state.currentLocation}
        > 
          <Marker position= {this.state.currentLocation}/>
          <Polyline
          path={this.state.lineCoordinates}
          geodesic={false}
          options={{
              strokeColor: '#38B44F',
              strokeOpacity: 1,
              strokeWeight: 7,
          }}
        />
        </Map>
      ); 
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E'
})(MapDirection);