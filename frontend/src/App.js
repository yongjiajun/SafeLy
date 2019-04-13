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
const API = "http://10.25.130.83:5000";
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
    socket.emit('my response', {
      user_name: "oooo",
      message: "asdasdas"
    });
    fetch(API, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 7, str: 'Some string: &=&'}),
      mode: 'cors'
      }).then(res=>res.json())
    .then(res => console.log(res));
  }

  render() {
    return (
      // <Login> 
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
      // </Login>
      // <Scanner/>
    );
  }
}

export default App;
