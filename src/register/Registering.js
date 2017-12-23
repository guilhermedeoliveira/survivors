import React from 'react'
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'

import TextField from 'material-ui/TextField'
import { FormControl, FormHelperText, FormControlLabel, FormLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';

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

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField id={label}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
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

const Registering = props => {
  const { handleSubmit, submitSurvivor, pristine, submitting } = props
  console.log(props);
  return (
    <form onSubmit={handleSubmit(submitSurvivor)}>
      <FormControl fullWidth>
        <Field name="name" component={renderTextField} label="Name"/>
      </FormControl>
      <FormControl fullWidth>
        <Field name="age" component={renderTextField} label="Age"/>
      </FormControl>
      <FlexFormControl fullWidth>
        <Field name="latitute" component={renderTextField} label="Latitute"/>
        <Field name="longitude" component={renderTextField} label="Longitude"/>
      </FlexFormControl>
      <div>
        <Field name="sex" component={renderRadioGroup} />
      </div>
      <FormControl fullWidth>
        <StyledFormLabel component="legend">Inventory</StyledFormLabel>
        <Field name="water" component={renderTextField} label="Water"/>
        <Field name="food" component={renderTextField} label="Food"/>
        <Field name="medication" component={renderTextField} label="Medication"/>
        <Field name="ammunition" component={renderTextField} label="Ammunition"/>
      </FormControl>

      <FormControl>
        <SubmitButton type="submit" disabled={pristine || submitting}>Register</SubmitButton>
      </FormControl>
    </form>
  )
};

export default reduxForm({
  form: 'Register',
  validate
})(Registering)