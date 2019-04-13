import React, { Component } from 'react';
import './assets/main.css';
import Login from './components/Login';
import Register from './components/Register';
class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Login> 
        <Register/>
      </Login>
    );
  }
}

export default App;
