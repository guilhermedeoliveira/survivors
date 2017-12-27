import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form'

import TextField from 'material-ui/TextField'
import { FormControl, FormHelperText, FormControlLabel, FormLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';

import * as survivorActions from './actions';

const FlexFormControl = styled(FormControl)`
  display: flex;
  justify-content: space-between;
`;

const StyledFormLabel = styled(FormLabel)`
  margin-top: 1rem;
`;

const StyledRadioGroup = styled(RadioGroup)`
  margin: auto;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  background-color: rgb(48, 79, 254);
`;

const SubmitButton = styled.button`
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
  componentDidMount() {
    this.props.survivorActions.getSurvivors();
    console.log(this.props.survivorState.survivors);
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
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
      </StyledRadioGroup>
    </FormControl>
  );

  render() {
    const { handleSubmit, survivorActions, pristine, submitting } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit(survivorActions.getSurvivors)}>
        <FormControl fullWidth>
          <Field name="name" component={this.renderTextField} label="Name"/>
        </FormControl>
        <FormControl fullWidth>
          <Field name="age" component={this.renderTextField} label="Age"/>
        </FormControl>
        <FlexFormControl fullWidth>
          <Field name="latitute" component={this.renderTextField} label="Latitute"/>
          <Field name="longitude" component={this.renderTextField} label="Longitude"/>
        </FlexFormControl>
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

        <FormControl>
          <SubmitButton type="submit" disabled={pristine || submitting}>Register</SubmitButton>
        </FormControl>
      </form>
    )
  };
}

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