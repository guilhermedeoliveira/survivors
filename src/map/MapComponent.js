// packages
import React, { Component } from 'react';
import { 
  object,
  arrayOf
} from 'prop-types';

// map
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';

// local
import { GOOGLE_MAPS_KEY } from '../services/keys';
import { getCoordsFromString } from '../services/utils';

class MapComponent extends Component {
  state = {
    currentLocation: {
      lat: -5.7793,
      lgn: -35.2009
    },
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  static propTypes = {
    survivors: arrayOf(object)
      .isRequired
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const { survivors } = this.props;
    
    return (
      <Map
        google={this.props.google}
        style= {{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
        zoom={4}
        initialCenter={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lgn
          }}
        onClick={this.onMapClicked}
        >
        {
          survivors.map(s => {
            const arrayOfCoords = getCoordsFromString(s.lonlat);
            return s.lonlat && (
              <Marker
                key={s.location}
                title={s.name}
                onClick={this.onMarkerClick}
                name={s.name}
                position={{
                  lat: arrayOfCoords[1], lng: arrayOfCoords[0]
                }}
              />
            )
          })
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAPS_KEY)
})(MapComponent)