import React, { Component } from 'react';
import { googleMapsKey } from '../services/keys';
import { Map as GoogleMap, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    selectedPlace: {
      name: 'Natal'
    }
  }

  render() {
      return (
        <GoogleMap google={this.props.google} zoom={14}>
          <Marker
            onClick={this.onMarkerClick}
            name={'Current location'}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </GoogleMap>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: (googleMapsKey)
})(MapContainer)