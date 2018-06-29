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

    componentDidMount() {
        console.log('hello');
        console.log(this.props.reduxStore);
        console.log(this.props.reduxStore.pizzaReducer);
        
        
    }


    submitOrder = () => {
        console.log('click');
        
        // fake data body
        // const body = {
        //     customer: this.state.customer, 
        //     pizzas: this.state.pizza, 
        //     order_total: this.state.order_total,
        //     type: this.state.type }

        // real data body
        const body = {
            customer: this.props.reduxStore.customerReducer.customer, 
            pizzas: this.props.reduxStore.pizzaReducer.pizza, 
            order_total: this.props.reduxStore.pizzaReducer.order_total,
            type: this.props.reduxStore.customerReducer.type }
        console.log(body);
        
        axios.post('/api/order', body)
        .then((response ) => {
            console.log(response);
            alert('Order confirmed, thank you for ordering,', this.props.reduxStore.customerReducer.name);

            
        })
        
    }
    render() { 
        return ( 
            <div>
                <h1>Prime Pizza</h1>
                <h3>Step 3: Checkout</h3>
                <h3>{this.props.reduxStore.customerReducer.type}</h3>
            <p>
                {this.props.reduxStore.customerReducer.name}<br />
                {this.props.reduxStore.customerReducer.street_address}<br />
                {this.props.reduxStore.customerReducer.city}, MN<br />
                
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
                        {this.props.reduxStore.pizzaReducer.menu.map((pizza) => {
                return <CheckoutItem
                key = {pizza.name}
                pizza = {pizza}
                />
                    })}
                    </TableBody>
                </Table>
            </Paper>
            <h1>Total: {this.props.reduxStore.pizzaReducer.order_total}</h1>
            <Button color="primary" variant="contained" onClick={this.submitOrder}>Checkout</Button>
            </div>
         )
    }
}
 
export default compose(withStyles(styles),connect(mapReduxStateToProps))(Checkout);