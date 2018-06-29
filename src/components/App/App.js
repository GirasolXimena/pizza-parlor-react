import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

// Components
import Menu from '../Menu/Menu';
import Customer from '../Customer/Customer';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
        <div>
          <Header />
            <Route exact path='/' component={Menu}/>
            <Route exact path='/customer' component={Customer}/>
            <Route exact path='/checkout' component={Checkout}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
