import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Icon from '@material-ui/core/Icon/Icon'
import { connect } from 'react-redux';

const mapToReduxStore = (reduxStore) => {
    reduxStore
}

class CheckoutItem extends Component {

    minusPizza = () => {
        const action = {type: 'DELETE_FROM_CART', payload: this.props.pizza._id};
        this.props.dispatch(action);
    }
    
    render() { 
        return ( 
            <tr>
                <td>
                    {this.props.pizza.name}
                </td>
                <td>
                    {this.props.pizza.cost}
                </td>
                <td>
                    <IconButton onClick={this.minusPizza}><Icon className="material-icons">remove_shopping_cart</Icon></IconButton>
                    {/* <IconButton onClick={this.addPizza}><Icon className="material-icons">add</Icon></IconButton> */}
                </td>
            </tr>
         )
    }
}
 
export default connect(mapToReduxStore)(CheckoutItem);