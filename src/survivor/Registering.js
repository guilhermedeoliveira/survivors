import React, { Component } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

import { FormControl, FormHelperText, FormControlLabel, FormLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';

// import Ammunition from './Ammunition';
// import { CupWater, Food, Hospital, Pistol } from 'mdi-material-ui';

/*
  <CupWater style={{ fill: mainColor }} />
  <Food style={{ fill: mainColor }} />
  <Hospital style={{ fill: mainColor }} />
  <Pistol style={{ fill: mainColor }} />
*/

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

const Error = styled.div`
	color: red;
	font-weight: 300;
	margin: 5px 0;
`;

class Registering extends Component {
  state = {
    name: '',
    age: '',
    gender: '',
    lat: '',
    lgn: '',
    inventory: {
      water: '',
      food: '',
      medication: '',
      ammunition: '',
    },
    mainColor: 'rgb(48, 79, 254)'
  }

  renderField(field) {
		const { input, meta: { touched, error } } = field;

		return (
			<div>
				<Input type="text" placeholder="username..." {...input} />
				<Error>{touched && error}</Error>
			</div>
		);
	}

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const {
      name,
      age,
      gender,
      mainColor,
      lat,
      lgn,
      inventory: { water, food, medication, ammunition }
    } = this.state;

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="age"
            label="Age"
            value={age}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="lat"
            label="Latitute"
            value={lat}
            onChange={this.handleChange('lat')}
            margin="normal"
          />
          <TextField
            id="lgn"
            label="Longitude"
            value={lgn}
            onChange={this.handleChange('lgn')}
            margin="normal"
          />
        </FormControl>
        <FormControl fullWidth>
          <StyledFormLabel component="legend">Gender</StyledFormLabel>
          <StyledRadioGroup
            row
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={this.handleChange('gender')}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </StyledRadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <StyledFormLabel component="legend">Inventory</StyledFormLabel>
          <TextField
            id="water"
            label="Water"
            value={water}
            onChange={this.handleChange('water')}
            margin="normal"
          />
          <TextField
            id="food"
            label="Food"
            value={this.state.food}
            onChange={this.handleChange('food')}
            margin="normal"
          />
          <TextField
            id="medication"
            label="Medication"
            margin="normal"
          />
          <TextField
            id="ammunition"
            label="Ammunition"
            margin="normal"
          />
        </FormControl>
        <StyledButton type="submit" color="primary" raised  >
          Send
        </StyledButton>
      </form>
    )
  }
};

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'age', 'gender', 'lat', 'lgn', 'water',
  'food', 'medication', 'ammunition' ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors;
}


export default reduxForm({
  validate,
  form: 'RegisterForm'
})(Registering)