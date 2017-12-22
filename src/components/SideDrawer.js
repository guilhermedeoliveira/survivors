import React from 'react';
import Drawer from 'material-ui/Drawer';
import ListItem from 'material-ui/List';

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true
    };

    this.switchDrawer = this.switchDrawer.bind(this);
  }

  switchDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <Drawer
        open={this.state.drawerOpen}
        onRequestChange={this.props.switchDrawer}
      />
    );
  }
}

export default SideDrawer;