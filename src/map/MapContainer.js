import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapContainer from './MapContainer';
import MapComponent from './MapComponent';
import * as survivorActions from '../survivor/actions';

class MapWrapper extends Component {
  state = {
    survivors: []
  }

  componentDidMount() {
      this.props.survivorActions.getSurvivors();
  }

  componentWillReceiveProps(nextProps) {
    const { survivors, loadingGetSurvivor, hasFinishedSurvivors } = nextProps.survivorState;
    
    if (hasFinishedSurvivors) this.setState({ survivors });
  }
  
  render() {
    const { survivors, hasFinishedSurvivors } = this.props.survivorState;
    
    return hasFinishedSurvivors && <MapComponent survivors={survivors} />;
  }
}

export default connect(
    state => ({
      survivorState: state.survivorState
    }),
    dispatch => ({
      survivorActions: bindActionCreators(survivorActions, dispatch)
    })
)(MapWrapper);