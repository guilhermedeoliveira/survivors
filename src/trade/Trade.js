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


class Trade extends Component {
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
          <StyledFormLabel component="legend">Inventory to Sell</StyledFormLabel>
          <Field name="waterSell" component={this.renderTextField} label="Water"/>
          <Field name="foodSell" component={this.renderTextField} label="Food"/>
          <Field name="medicationSell" component={this.renderTextField} label="Medication"/>
          <Field name="ammunitionSell" component={this.renderTextField} label="Ammunition"/>
        </FormControl>
        <FormControl fullWidth>
          <StyledFormLabel component="legend">Inventory to Buy</StyledFormLabel>
          <Field name="waterBuy" component={this.renderTextField} label="Water"/>
          <Field name="foodBuy" component={this.renderTextField} label="Food"/>
          <Field name="medicationBuy" component={this.renderTextField} label="Medication"/>
          <Field name="ammunitionBuy" component={this.renderTextField} label="Ammunition"/>
        </FormControl>
        <FormControl fullWidth>
          <StyledButton raised color="primary" type="submit" disabled={pristine || submitting}>Trade</StyledButton>
        </FormControl>
      </form>
    )
  };
}

Trade = withRouter(Trade);

Trade = connect(
  state => ({
    survivorState: state.survivorState
  }),
  dispatch => ({
    // survivorActions: bindActionCreators(survivorActions, dispatch)
  })
)(Trade);

export default reduxForm({
  form: 'MyBudget',
  validate
})(Trade)