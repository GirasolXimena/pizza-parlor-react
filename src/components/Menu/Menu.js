import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import MenuItems from '../MenuItems/MenuItems';
import Cart from '../Cart/Cart';
import './Menu.css';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import {styles} from './styles';
import { compose } from 'redux';
import {Link} from 'react-router-dom'; 


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
  
  deletePizza = (id) => {
    const action= {type: 'DELETE_FROM_CART', payload: id}
    this.props.dispatch(action);
  }

  render() {
    let menu = this.props.reduxStore.pizzaReducer.menu || [] ;
    const { classes } = this.props;
    const cart = this.props.reduxStore.pizzaReducer.cart || [] ;

    return (
      <div className="menu-container">
       <div className={classes.menu}>
        <h1 className="stepName">Step 1: Select Your Pizza</h1>
        <h2 className="orderTotal">Order total: {JSON.stringify(this.props.reduxStore.pizzaReducer.order_total)}</h2>
        <MenuItems menu={menu} />
        <Button className={classes.nextButton} onClick={this.submitCustomerInfo}><Link className={classes.Link} to='/checkout'>Next</Link></Button>
       </div>
       <Table className={classes.table} className={classes.cart}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell numeric></TableCell>
            <TableCell numeric></TableCell>
            <TableCell numeric></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(menuItem => {
            return (
              <TableRow classes={classes.tableRow} key={menuItem._id}>
                <TableCell classes={classes.cartImageCell} component="th" scope="row">
                 <img src={menuItem.image_path} className={classes.cartImage}/>
                </TableCell>
                <TableCell classes={classes.cartDescriptionCell} numeric>
                  <span className={classes.cartDescription}>{menuItem.name}</span>
                </TableCell>
                <TableCell classes={classes.cartItemCostCell} numeric>
                  <span className={classes.cartItemCost}>{menuItem.cost}</span>
                </TableCell>
                <TableCell className={classes.deleteButtonCell} numeric>
                  <Button className={classes.deleteButton} onClick={() => this.deletePizza(menuItem._id)}>Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps)
)(Menu);
