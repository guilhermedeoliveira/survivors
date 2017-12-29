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
import Belonging from './Belonging';
import * as survivorActions from '../survivor/actions';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align: center;
  padding: 1rem;
`;

const MyPaper = styled(Paper)`
  margin: 1rem 0.5rem;
  padding: 1rem;
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
  
  onChangeInput = (field, value) => {
    console.log(field, value);
  }
  
  passBuyData() {
    const { values, survivors } = this.state;
    console.log(values, survivors);
    const buyPerson = survivors.find(s => s.name === values.whatYourName);
    console.log(buyPerson)
  }

  render() {
    const { values } = this.state;
    console.log('State', this.state)
    return (
      <React.Fragment>
        <Container>
          <div>
            <SubTitle>Please, informe both name</SubTitle>
            <MyPaper>
              <Trade />
            </MyPaper>
          </div>
          <div>
            <SubTitle>Your belongings</SubTitle>
            <MyPaper>
              <Belonging />
            </MyPaper>
          </div>
          <div>
            <SubTitle>Someone else belongings</SubTitle>
            <MyPaper>
              <Belonging />
            </MyPaper>
          </div>
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