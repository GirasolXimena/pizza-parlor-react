import React, { Component } from 'react';
import axios from 'axios';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { compose } from "redux";
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {createMuiTheme} from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const theme = createMuiTheme({
    palette:{

    }
});

const styles = {
    root: {
        
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    }

}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
});

class Checkout extends Component {
    state = {
    customer: {
            name: "Jake Tovsen",
            street_address: "415 Lake Street",
            city: 'Minneapolis',
            zip: '55413'
        },
    pizza: [{
            // _id: 69,
            name: 'Pineapple Pizza',
            description: 'Love pineapple pizza',
            cost: "420.00",
            quantity: 1
    },  {          
            // _id: 70,
            name: 'Pepperoni Pizza',
            description: 'Love pepperoni pizza',
            cost: "50.00",
            quantity: 1
    }],
    type: 'Pickup',
    order_total: 0
}
    componentDidMount() {
        
        console.log(this.state.pizza);

        let total = 0;
        let radix;
        for (let pizza of this.state.pizza) { 
            total += parseInt(pizza.cost, radix);   
            this.setState({
            order_total: total
            })
        }
    }


    submitOrder = () => {
        console.log('click');
        
        // fake data body
        const body = {
            customer: this.state.customer, 
            pizzas: this.state.pizza, 
            order_total: this.state.order_total,
            type: this.state.type }

        // real data body
        // const body = {
        //     customer: this.props.customerReducer.customer, 
        //     pizzas: this.props.pizzaReducer.pizza, 
        //     order_total: this.props.pizzaReducer.order_total,
        //     type: this.props.customerReducer.type }
        console.log(body);
        
        axios.post('/api/order', body)
        .then((response ) => {
            console.log(response);
            alert('Order confirmed, thank you for ordering,', this.state.customer.name);

            
        })
        
    }
    render() { 
        return ( 
            <div>
                <h1>Prime Pizza</h1>
                <h3>Step 3: Checkout</h3>
                <h3>{this.state.type}</h3>
            <p>
                {this.state.customer.name}<br />
                {this.state.customer.street_address}<br />
                {this.state.customer.city}, MN<br />
                
            </p>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Cost</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.pizza.map((pizza) => {
                return <CheckoutItem
                key = {pizza.name}
                pizza = {pizza}
                />
                    })}
                    </TableBody>
                </Table>
            </Paper>
            <h1>Total: {this.state.order_total}</h1>
            <Button color="primary" variant="contained" onClick={this.submitOrder}>Checkout</Button>
            </div>
         )
    }
}
 
export default compose(withStyles(styles),connect(mapReduxStateToProps))(Checkout);