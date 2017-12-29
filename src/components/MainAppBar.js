// packages
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// style
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

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
`;

const MainAppBar = props => (
    <div>
      <StyledAppBar position="static">
        <StyledToolBar>
          <Typography type="title" color="inherit">
            <StyledLink to="/">
              Survivors
            </StyledLink>
          </Typography>
          <div>
            <StyledLink to="/map">
              <Button color="contrast">Map</Button>
            </StyledLink>
            <StyledLink to="/trade">
              <Button color="contrast">Trade</Button>
            </StyledLink>
            <StyledLink to="/reports">
              <Button color="contrast">Reports</Button>
            </StyledLink>
          </div>
        </StyledToolBar>
      </StyledAppBar>
    </div>
  );

export default withStyles(styles)(MainAppBar);