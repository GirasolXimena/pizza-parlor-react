import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom'; 

// Material-UI imports
import Radio from '@material-ui/core/Radio/Radio';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input/Input';
import {withStyles} from '@material-ui/core';
import Header from '../Header/Header';

// Styles
import {styles} from './styles';

const mapReduxStateToProps = ({pizzaReducer}) => ({
    pizzaReducer
});

class Customer extends Component {

  constructor(){
    super();

    this.state = {
      name: '',
      street_address: '',
      city: '',
      zip: '',
      type: ''    
    }
  }

  handleInputChange = (event) => {
    switch(event.target.id){
      case 'name':
        this.setState({name: event.target.value});
        break;
      case 'address':
        this.setState({street_address: event.target.value});
        break; 
      case 'city':
        this.setState({city: event.target.value});
        break;
      case 'zip':
        this.setState({zip: Number(event.target.value)});
        break;
      case 'pickup':
        this.setState({type: event.target.value});
        break;
      case 'delivery':
        this.setState({type: event.target.value});
        break;
      default:
        console.log('Invalid field');
        break;      
    }
  }

  submitCustomerInfo = () => {
    this.props.dispatch({type: 'ADD_CUSTOMER', payload: this.state});
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.main}>
        <div className={classes.customerInputForm} noValidate autoComplete='off'>
          <Input
            id="name"
            placeholder="Name"
            className={classes.customerInput}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
         <Input 
            id="address"
            placeholder="Street Address"
            className={classes.customerInput}
            value={this.state.street_address}
            onChange={this.handleInputChange}
          />
          <Input 
            id="city"
            placeholder="City"
            className={classes.customerInput}
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <Input 
            id="zip"
            placeholder="Zip"
            className={classes.customerInput}
            value={this.state.zip}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={classes.methodSelection}>
          <FormControl component="fieldset" required className={classes.formControl}>
            <RadioGroup
              className={classes.methodGroup}
              value={this.state.type}
            >
              <FormControlLabel value="Pickup" control={<Radio id='pickup' onClick={this.handleInputChange}/>} label="Pickup" />
              <FormControlLabel value="Delivery" control={<Radio id='delivery' onClick={this.handleInputChange}/>} label="Delivery" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button className={classes.nextButton}onClick={this.submitCustomerInfo}><Link to='/checkout'>Next</Link></Button>
        </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps)
)(Customer);