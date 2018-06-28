import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import './Menu.css';

class Menu extends Component {
  
  
  
  render() {
    return (
      <div className="menu">
       <h1>Step 1: Select Your Pizza</h1>
       <Grid container spacing={24}>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
          <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
            <div className="testbox"></div>
          </Grid>
       </Grid>
      </div>
    );
  }
}

export default Menu;
