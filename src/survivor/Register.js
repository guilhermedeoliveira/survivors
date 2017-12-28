import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { withRouter } from "react-router-dom";

import TextField from 'material-ui/TextField'
import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';

import * as survivorActions from './actions';

const StyledFormLabel = styled(FormLabel)`
  margin-top: 1rem;
`;

const StyledRadioGroup = styled(RadioGroup)`
  margin: auto;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'age', 'sex',
    'latitute', 'longitude', 'water', 'food', 'medication', 'ammunition'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};


class Register extends Component {
  state = {
    currentLocation: {
      lng: '',
      lat: ''
    }
  }

  getCurrentLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lng: coords.longitude,
            lat: coords.latitude
          }
        })
      })
    }
  }
  
  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField id={label}
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  );

  renderRadioGroup = ({ input, ...rest }) => (
    <FormControl fullWidth>
      <StyledFormLabel component="legend">Sex</StyledFormLabel>
      <StyledRadioGroup {...input} {...rest}
        row
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
      >
      <FormControlLabel value="M" control={<Radio />} label="Male" />
      <FormControlLabel value="F" control={<Radio />} label="Female" />
      </StyledRadioGroup>
    </FormControl>
  );

  handleSurvivorSubmit = async (values) => {
    const { history, survivorActions: { submitSurvivor } } = this.props;
    const { currentLocation: { lng, lat } } = this.state;
    
    const items = `Water:${values.water};Food:${values.food};Medication:${values.medication};Ammunition:${values.ammunition}`;
    const lonlat = lng && lat ? `POINT (${lng} ${lat})` : null;

    const survivor = {
      name: values.name,
      age: Number(values.age),
      gender: values.sex,
      items,
      lonlat
    }

    await submitSurvivor(survivor);
    history.push("/map");
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSurvivorSubmit)}>
        <FormControl fullWidth>
          <Field name="name" component={this.renderTextField} label="Name"/>
        </FormControl>
        <FormControl fullWidth>
          <Field name="age" component={this.renderTextField} label="Age"/>
        </FormControl>
        <div>
          <Field name="sex" component={this.renderRadioGroup} />
        </div>
        <FormControl fullWidth>
          <StyledFormLabel component="legend">Inventory</StyledFormLabel>
          <Field name="water" component={this.renderTextField} label="Water"/>
          <Field name="food" component={this.renderTextField} label="Food"/>
          <Field name="medication" component={this.renderTextField} label="Medication"/>
          <Field name="ammunition" component={this.renderTextField} label="Ammunition"/>
        </FormControl>
        <FormControl fullWidth>
          <StyledButton raised component="span" onClick={this.getCurrentLocation}>Get My Coords</StyledButton>
        </FormControl>
        <FormControl fullWidth>
          <StyledButton raised color="primary" type="submit" disabled={pristine || submitting}>Register</StyledButton>
        </FormControl>
      </form>
    )
  };
}

Register = withRouter(Register);

Register = connect(
  state => ({
    survivorState: state.survivorState
  }),
  dispatch => ({
    survivorActions: bindActionCreators(survivorActions, dispatch)
  })
)(Register);

export default reduxForm({
  form: 'Register',
  validate
})(Register)