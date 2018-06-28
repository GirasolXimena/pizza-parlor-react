import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import MenuItem from '../MenuItem/MenuItem'
import { connect } from 'react-redux';
import './Menu.css';

const mapReduxStateToProps = reduxStore => ({
  reduxStore
})

class Menu extends Component {
  
  componentDidMount(){
    this.getPizzaMenu();
  }
  
  getPizzaMenu = () => {
    axios.get('/api/pizza')
    .then(response => {
      console.log('back from the API with, ', response.data);
      const action = {type: 'ADD', payload: response.data};
      this.props.dispatch(action)
    })
    .catch(error => {
      alert('something went wrong');
    })
  }
  
  render() {
    let menu = this.props.reduxStore.pizzaReducer.menu || [] ;
    return (
      <div className="menu">
       <h1>Step 1: Select Your Pizza</h1>
        <Grid container spacing={24}>
          {menu.map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem}/>) }
        </Grid>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Menu);
