import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {styles} from './styles';

// Mat-UI Imports
import Typography from '@material-ui/core/Typography/Typography';

const mapReduxStateToProps = ({pizzaReducer}) => ({
    pizzaReducer
});

class Header extends Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.header}>
                <Typography className={classes.projectTitle} variant="display3">Prime Pizza</Typography>
                <div className={classes.cartContainer}>
                    <img src="../../../cart.png"/> {/* Might be wrong... */}
                    <Typography variant="display1">{this.props.pizzaReducer.order_total}</Typography>
                </div>
            </div>
        );
    }
}

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles)
)(Header);