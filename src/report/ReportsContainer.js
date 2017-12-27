import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Report from './Report';
import * as reportActions from './actions';

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
  align: center;
`;

class ReportsContainer extends Component {
  componentDidMount() {
    this.props.reportActions.getReports();
  }
  

  render() {
    return (
      <Container>
        <Report />
      </Container>
    );
  }
};

export default connect(
  state => ({
    reportState: state.reportState
  }),
  dispatch => ({
    reportActions: bindActionCreators(reportActions, dispatch)
  })
)(ReportsContainer);


