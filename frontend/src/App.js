import React, { Component } from 'react';
import './assets/main.css';
import Login from './components/Login';
import Register from './components/Register';
import SelectTime from './components/SelectTime';
class App extends Component {

  constructor() {
    super();
    // document.body.addEventListener("click", function() {
    //   var
    //         el = document.documentElement
    //       , rfs =
    //              el.requestFullScreen
    //           || el.webkitRequestFullScreen
    //           || el.mozRequestFullScreen
    //   ;
    //   rfs.call(el);
    // });
  }

  render() {
    return (
      <Login> 
        <Register> 
          <SelectTime/> 
        </Register>
      </Login>
    );
  }
}

export default App;
