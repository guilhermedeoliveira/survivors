// packages
import React, { Component } from 'react';
import { 
  shape,
  object,
  func,
  arrayOf
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';

// style
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

// local
import Trade from './Trade';
import * as survivorActions from '../survivor/actions';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

const MyPaper = styled(Paper)`
  margin: 1rem 0.5rem;
  padding: 1rem;
  width: 33%;
  margin: auto;
  > a {
    text-decoration: none;
    color: #24292e;
    &:hover {
     color: #000;
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
`;

class TradeContainer extends Component {
  state = {
    values: {
      whatYourName: 'Your'
    }
  }

  static propTypes = {
    survivorState: shape({
      getSurvivors: func,
      survivors: arrayOf(object)
    }).isRequired
  }

  componentDidMount() {
    this.props.survivorActions.getSurvivors();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      survivors: nextProps.survivorState.survivors,
      values: nextProps.values
    })
  }
    
  /*
  passBuyData() {
    const { values, survivors } = this.state;
    const buyPerson = survivors.find(s => s.name === values.whatYourName);
  }
  */

  render() {
    // const { values } = this.state;

    return (
      <React.Fragment>
        <Container>
          <SubTitle>Please, submit a trade</SubTitle>
          <MyPaper>
            <Trade />
          </MyPaper>
        </Container>
      </React.Fragment>
   )
  }
};

export default connect(
  state => ({
    values: getFormValues('Trade')(state),
    survivorState: state.survivorState
  }),
  dispatch => ({
    survivorActions: bindActionCreators(survivorActions, dispatch)
  })
)(TradeContainer);