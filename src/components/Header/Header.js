import React, {Component} from 'react';
import {withStyles, DialogContentText} from '@material-ui/core';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {styles} from './styles';

// Mat-UI Imports
import Typography from '@material-ui/core/Typography/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@material-ui/core/Icon/Icon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '../MenuItem/MenuItem';
import Grid from '@material-ui/core/Grid/Grid';
import Divider from '@material-ui/core/Divider/Divider';

const mapReduxStateToProps = ({pizzaReducer}) => ({
    pizzaReducer
});

class Header extends Component {

    constructor(){
        super();

        this.state = {
            open: false,
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render(){
        const {classes} = this.props;
        const menu = this.props.pizzaReducer.menu || [] ;
        return(
            <AppBar className={classes.header}>
                <Typography className={classes.projectTitle} variant="display3">Prime Pizza</Typography>
                <div className={classes.cartContainer}>
                    <IconButton className={classes.cartLogo} onClick={this.handleClickOpen}><Icon>shopping_cart</Icon></IconButton>
                    <p className={classes.cartLogo}>{this.props.pizzaReducer.order_total == 0 ? 0 : this.props.pizzaReducer.order_total}</p>
                        <Dialog
                        className={classes.dialog}
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="responsive-dialog-title"
                        >
                        <DialogTitle className={classes.inlineDialog} id="responsive-dialog-title">Your Cart:</DialogTitle>
                        <DialogActions className={classes.inlineDialog}>
                            <Button onClick={this.handleClose} className={classes.closeButton}>
                            Close
                            </Button>
                        </DialogActions>
                        <DialogContent>
                            {menu.map(menuItem => 
                                <div className={classes.cartObject}>
                                    <img src={menuItem.image_path} className={classes.cartImage}/>
                                    <h3 className={classes.cartDescription}>{menuItem.name}</h3>
                                    <h3 className={classes.cartItemCost}>{menuItem.cost}</h3>
                                    <Divider inset />
                                </div>
                            )}
                            <h2 className={classes.cartTotal}> Total: {this.props.pizzaReducer.order_total}</h2>
                        </DialogContent>
                        </Dialog>
                </div>
            </AppBar>
        );
    }
}

export default compose(
    connect(mapReduxStateToProps),
    withStyles(styles),
)(Header);