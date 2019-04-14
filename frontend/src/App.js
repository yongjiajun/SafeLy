import React, { Component } from 'react';
import './assets/main.css';
import Login from './components/Login';
import Register from './components/Register';
import SelectTime from './components/SelectTime';
import Congrats from './components/Congrats';
import Qrcode from './components/Qrcode';
import Directions from './components/Direction';
import End from './components/End';
import Scanner from './components/Scanner';
import openSocket from 'socket.io-client';
// const API = "http://10.25.130.83:5000";
const API = "http://10.13.68.91:5000";
const socket = openSocket(API)
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
        <Scanner>
          <Register> 
            <SelectTime> 
              <Congrats> 
                <Directions> 
                  <Qrcode>
                    <End />
                  </Qrcode>
                </Directions>
              </Congrats>
            </SelectTime>
          </Register>
        </Scanner>
      </Login>
    );
  }
}

export default App;
