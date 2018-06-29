import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Icon from '@material-ui/core/Icon/Icon'
class CheckoutItem extends Component {
    addPizza = () => this.props.pizza.quantity += 1
    minusPizza = () => this.props.pizza.quantity -= 1
    
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
                    <Avatar>{this.props.pizza.quantity}</Avatar>
                </td>
                <td>
                    <IconButton onClick={this.minusPizza}><Icon className="material-icons">remove</Icon></IconButton>
                    <IconButton onClick={this.addPizza}><Icon className="material-icons">add</Icon></IconButton>
                </td>
            </tr>
         )
    }
}
 
export default CheckoutItem;