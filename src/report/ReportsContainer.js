import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Report from './Report';
import * as reportActions from './actions';

const Container = styled.div`
  margin: 2rem 0;
  text-align: center;
  align: center;
`;

const Stats = styled.p`
  margin-top: 0;
  text-align: center;
  align: center;
  color: #3f51b5;
`;


class ReportsContainer extends Component {
  componentDidMount() {
    this.props.reportActions.getReports();
  }
  
  render() {
    const {
      hasFetchedReports,
      reports: {
        infected,
        infectedPoints,
        nonInfected,
        peopleInventory
      }
    } = this.props.reportState;
    return hasFetchedReports && (
      <Container>
        <Report>
          <h3>{infected.description}</h3>
          <Stats><b>{`${(infected.average_infected.toFixed(2)) * 100}%`}</b></Stats>
        </Report>
        <Report>
          <h3>{infectedPoints.description}</h3>
          <Stats><b>{`${infectedPoints.total_points_lost} pontos`}</b></Stats>
        </Report>
        <Report>
          <h3>{nonInfected.description}</h3>
          <Stats><b>{`${(nonInfected.average_healthy).toFixed(2) * 100}%`}</b></Stats>
        </Report>
        <Report>
          <h3>Average items quantity per healthy person</h3>
          <Stats><b>{(peopleInventory.average_items_quantity_per_healthy_person).toFixed(2)}</b></Stats>
        </Report>  
        <Report>
        <h3>Average items quantity per all (healthy and infected) people</h3>
          <Stats><b>{(peopleInventory.average_items_quantity_per_person).toFixed(2)}</b></Stats>
        </Report>
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


