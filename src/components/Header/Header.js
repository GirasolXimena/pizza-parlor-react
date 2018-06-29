import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {styles} from './styles';

// Mat-UI Imports
import Typography from '@material-ui/core/Typography/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Icon from '@material-ui/core/Icon/Icon';
import Button from '@material-ui/core/Button/Button';

const mapReduxStateToProps = ({pizzaReducer}) => ({
    pizzaReducer
});

class Header extends Component {
    render(){
        const {classes} = this.props;
        return(
            <AppBar className={classes.header}>
                <Typography className={classes.projectTitle} variant="display3">Prime Pizza</Typography>
                <div className={classes.cartContainer}>
                    <Icon>shopping_cart</Icon>
                    <p>{this.props.pizzaReducer.order_total == 0 ? 0 : this.props.pizzaReducer.order_total}</p>
                </div>
            </AppBar>
        );
    }
}

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(Header);