import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const StyledAppBar = styled(AppBar)`
  padding: 0 2rem;
`;


const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const MainAppBar = props => (
    <div>
      <StyledAppBar position="static">
        <StyledToolBar>
          <Typography type="title" color="inherit">
            Survivors
          </Typography>
          <Button color="contrast">Login</Button>
        </StyledToolBar>
      </StyledAppBar>
    </div>
  );

export default withStyles(styles)(MainAppBar);