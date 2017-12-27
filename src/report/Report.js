import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

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

const Report = props => (
  <MyPaper>
    <h1>Oi</h1>
  </MyPaper>
);
  
export default Report;
  