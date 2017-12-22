import React, { Component } from 'react';
import styled from 'styled-components';

import { FormControl, FormHelperText, FormControlLabel, FormLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

class Login extends Component {
  state = {
    name: '',
    value: '',
    gender: ''
  }

  render() {
    return (
      <form autoComplete="off">
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            value={this.state.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input
            id="age"
            value={this.state.age}
          />
        </FormControl>
        <FormControl>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </form>
    )
  }
};

export default Login;
