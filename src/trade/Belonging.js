// packages
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { withRouter } from "react-router-dom";

// style
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { CupWater, Food, Hospital, Pistol } from 'mdi-material-ui';

const StyledFormLabel = styled(FormLabel)`
  margin-top: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const validate = values => {
  const errors = {};
  const requiredFields = [
    'what-your-name', 'whom-to-trade', 'water-sell',
    'food-sell', 'medication-sell', 'ammunition-sell',
    'water-buy', 'food-buy', 'medication-buy',
    'ammunition-buy'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};


class Belonging extends Component {
  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField id={label}
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  );

  handleSurvivorSubmit = async (values) => {
    const WATER_POINTS = 4;
    const FOOD_POINTS = 3;
    const MEDICATION_POINTS = 2;
    const AMMUNITION_POINTS = 1;
    
    const {
      waterSell, foodSell, medicationSell, ammunitionSell,
      waterBuy, foodBuy, medicationBuy, ammunitionBuy
    } = values;
    
    const totalSell = (WATER_POINTS * waterSell) + (FOOD_POINTS * foodSell) +
      (MEDICATION_POINTS * medicationSell) + (AMMUNITION_POINTS * ammunitionSell);

    const totalBuy = (WATER_POINTS * waterBuy) + (FOOD_POINTS * foodBuy) +
      (MEDICATION_POINTS * medicationBuy) + (AMMUNITION_POINTS * ammunitionBuy); 
    
    console.log(totalSell);
    const items = `Water:${values.water};Food:${values.food};Medication:${values.medication};Ammunition:${values.ammunition}`;
    
    const survivor = {
      name: values.name,
      age: Number(values.age),
      gender: values.sex,
      items
    }
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSurvivorSubmit)}>
        <FormControl fullWidth>
          <Field name="whatYourName" component={this.renderTextField} label="Whats is your name"/>
        </FormControl>
        <FormControl fullWidth>
          <StyledButton raised color="default" type="submit" disabled={pristine || submitting} >Check your budget</StyledButton>
        </FormControl>
        <div>
          <CupWater /><span>"teste"</span>
        </div>
        <div>
          <Food /><span>"teste"</span>
        </div>
        <div>
          <Hospital /><span>"teste"</span>
        </div>
        <div>
          <Pistol /><span>"teste"</span>
        </div>
      </form>
    )
  };
}

Belonging = withRouter(Belonging);

Belonging = connect(
  state => ({
    survivorState: state.survivorState
  }),
  dispatch => ({
    // survivorActions: bindActionCreators(survivorActions, dispatch)
  })
)(Belonging);

export default reduxForm({
  form: 'Trade',
  validate
})(Belonging)