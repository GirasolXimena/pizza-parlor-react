import React, { Component } from 'react';

class CheckoutItem extends Component {
    render() { 
        return ( 
            <tr>
                <td>{this.props.pizza.name}</td>
                <td>{this.props.pizza.cost}</td>
            </tr>
         )
    }
}
 
export default CheckoutItem;