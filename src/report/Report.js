// packages
import React from 'react';
import PropTypes from 'prop-types';

// style
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const StyledReport = styled(Paper)`
  align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 33%;
  margin: auto;
  margin-bottom: 1rem;
  padding: 0 1rem;
  > a {
    text-decoration: none;
    color: #24292e;
    &:hover {
    color: #000;
    }
  }
`;

const Report = props => (
  <StyledReport>
    {props.children}
  </StyledReport>
);
  
Report.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Report;
  