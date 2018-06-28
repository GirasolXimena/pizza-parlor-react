import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom'; 

// Material-UI imports
import TextField from '@material-ui/core/TextField/TextField';
import Radio from '@material-ui/core/Radio/Radio';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup/FormGroup';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input/Input';
import {withStyles} from '@material-ui/core';

// Styles
import {styles} from './styles';
import './App.css';

const mapReduxStateToProps = (reduxStore) => {
  reduxStore
}
class App extends Component {

  constructor(){
    super();

    this.state = {
      name: '',
      street_address: '',
      city: '',
      zip: 0,
      method: '',
      selectedValue: ''
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
        this.setState({zip: event.target.value});
        break;
      case 'pickup':
        this.setState({method: event.target.value, selectedValue: event.target.value});
        break;
      case 'delivery':
        this.setState({method: event.target.value, selectedValue: event.target.value});
        break;
      default:
        console.log('Invalid field');
        break;      
    }
  }

  submitCustomerInfo = () => {
    // this.props.dispatch('/customerInfo', this.state.customer);
    console.log(this.state);
  }

  render(){
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>Step 2: Customer Information</h2>
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
              value={this.state.method}
            >
              <FormControlLabel value="pickup" control={<Radio id='pickup' onClick={this.handleInputChange}/>} label="Pickup" />
              <FormControlLabel value="delivery" control={<Radio id='delivery' onClick={this.handleInputChange}/>} label="Delivery" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button className={classes.nextButton}onClick={this.submitCustomerInfo}>Next</Button>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps)
)(App);
