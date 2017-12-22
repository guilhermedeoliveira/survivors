import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';

import Login from './Login';

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
  width: 66%;
  padding: 1rem;
  margin: auto;
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

const LoginContainer = () => (
  <React.Fragment>
    <Container>
      <Title>Find Survivors</Title>
      <SubTitle>Please, login and comunicate with human beings</SubTitle>
      <MyPaper>
        <Login />
      </MyPaper>
    </Container>
  </React.Fragment>
);

export default LoginContainer;
