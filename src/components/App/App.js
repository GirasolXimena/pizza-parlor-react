import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../Menu/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <p>Pizza is great.</p>
        <Menu />
      </div>
    );
  }
}

export default App;
