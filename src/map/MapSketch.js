import React, { Component } from 'react';
import { googleMapsKey } from '../services/keys';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { getCoordsFromString } from '../services/utils';

export class MapContainer extends Component {
  state = {
    selectedPlace: {
      name: 'Natal'
    },
    currentLocation: {
      lat: -5.7793,
      lng: -35.2009
    },
    showingInfoWindow: false
  }

  onMarkerClick(marker) {
    this.setState({
      selectedPlace: this.props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  getCurrentLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
            currentLocation: {
                lat: coords.latitude,
                lng: coords.longitude
            }
        })
      })
    }
  }

  componentDidMount() {
    this.getCurrentLocation();
  }
  

  render() {
    const { survivors } = this.props;
      console.log(survivors);
      return (
        <Map
          google={this.props.google}
          style = {{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
          zoom={12}
          initialCenter={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng
          }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Dolores park'}
          position={{lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng}} />
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{'name'}</h1>
            </div>
        </InfoWindow>
        </Map>
      )
  }
}

export default GoogleApiWrapper({
  apiKey: (googleMapsKey)
})(MapContainer)