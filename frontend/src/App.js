import React, { Component } from 'react';
import './assets/main.css';
import Login from './components/Login';
import Register from './components/Register';
import SelectTime from './components/SelectTime';
import Congrats from './components/Congrats';
import Qrcode from './components/Qrcode';
import Directions from './components/Direction'
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
          <SelectTime> 
            <Congrats> 
              <Directions/>
            </Congrats>
          </SelectTime>
        </Register>
      </Login>
    );
  }
}

export default App;
