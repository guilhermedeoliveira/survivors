// packages
import React, { Component } from 'react';
import { 
  shape,
  object,
  bool,
  arrayOf
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// local
import MapComponent from './MapComponent';
import * as survivorActions from '../survivor/actions';

class MapContainer extends Component {
  state = {
    survivors: []
  }

  static propTypes = {
    survivorState: shape({
      hasFinishedSurvivors: bool,
      survivors: arrayOf(object)
    }).isRequired
  }

  componentDidMount() {
      this.props.survivorActions.getSurvivors();
  }

  componentWillReceiveProps(nextProps) {
    const { survivors, hasFinishedSurvivors } = nextProps.survivorState;
    
    if (hasFinishedSurvivors) this.setState({ survivors });
  }
  
  render() {
    const { hasFinishedSurvivors } = this.props.survivorState;
    const { survivors } = this.state;
    
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
)(MapContainer);