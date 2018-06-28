import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import MenuItems from '../MenuItems/MenuItems';
import Cart from '../Cart/Cart';
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
      let menuItems = response.data;
      for(let item of menuItems){
        item.quantity = 0;
      }
      const action = {type: 'ADD', payload: menuItems};
      this.props.dispatch(action)
    })
    .catch(error => {
      alert('something went wrong');
    })
  }
  
  render() {
    let menu = this.props.reduxStore.pizzaReducer.menu || [] ;
    let total = this.props.reduxStore.pizzaReducer.order_total || 0;
    return (
      <div className="menu">
       <h1 className="stepName">Step 1: Select Your Pizza</h1>
       <h2 className="orderTotal">Order total: ${total.toFixed(2)}</h2>
        <MenuItems menu={menu} />
        {/* <Cart /> */}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Menu);
