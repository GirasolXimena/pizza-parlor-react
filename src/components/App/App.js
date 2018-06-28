import React, { Component } from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png" alt="spicy pizza"/>
        <p>Pizza is great.</p>
        <Checkout />
      </div>
    );
  }
}

export default App;
