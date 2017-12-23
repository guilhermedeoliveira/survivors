import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';

import Register from './Register';
import Registering from './Registering';

import { submitSurvivor } from './duck';

const Container = styled.div`
  text-align: center;
  align: center;
`;

const MyPaper = styled(Paper)`
  align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 33%;
  margin: auto;
  margin-bottom: 4rem;
  padding: 1rem;
  > a {
    text-decoration: none;
    color: #24292e;
    &:hover {
     color: #000;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 200;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 50px;
`;

// const registerSurvivor = values => console.log('registered!', values);
const survivor = {
  'name': 'Gui',
  'age': '10',
  'sex': 'male',
  'latitute': '10',
  'longitude': '10',
  'water': 1,
  'food': 2,
  'medication': 3,
  'ammunition': 4
};

const RegisterContainer = () => (
  <React.Fragment>
    <Container>
      <Title>Survivors</Title>
      <SubTitle>Please, sign up and localize human beings</SubTitle>
      <MyPaper>
        <Registering submitSurvivor={submitSurvivor(survivor)} />
      </MyPaper>
    </Container>
  </React.Fragment>
);

export default connect(
  state => ({
    survivor: state.survivor
  }),
  dispatch => ({
    submitSurvivor: bindActionCreators({ submitSurvivor }, dispatch)
  })
)(RegisterContainer);
