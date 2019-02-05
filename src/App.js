import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HouseContainer from './HouseContainer/HouseContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HouseContainer/>
      </div>
    );
  }
}

export default App;
