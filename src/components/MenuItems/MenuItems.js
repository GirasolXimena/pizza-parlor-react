import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import MenuItem from '../MenuItem/MenuItem'
import { connect } from 'react-redux';
import './MenuItems.css';

class MenuItems extends Component {
  render() {

    return (
      <div className="menu-items">
        <Grid container spacing={24}>
          {this.props.menu.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}/>) }
        </Grid>
      </div>
    );
  }
}

export default MenuItems;
