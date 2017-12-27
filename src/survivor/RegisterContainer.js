import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import Register from './Register';

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

const RegisterContainer = () => (
  <React.Fragment>
    <Container>
      <Title>Survivors</Title>
      <SubTitle>Please, register and localize human beings</SubTitle>
      <MyPaper>
        <Register />
      </MyPaper>
    </Container>
  </React.Fragment>
);

export default RegisterContainer;



