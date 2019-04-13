import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';
import Loading from '../assets/img/loading.svg'
import '../assets/register.css';
import openSocket from 'socket.io-client';

const API = "http://10.25.130.83:5000";
const socket = openSocket(API);
export default class Congrats extends Component{
    constructor(){
        super();
        this.state = {
            toChild: false,
            userList: []
        }
        this.renderChild = this.renderChild.bind(this);

    }

    renderChild() {
        this.setState({
            toChild: true,
        });
    }

    componentDidMount() {
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
        socket.emit("my event", this.props.usr);
    }


    

    render(){
        if(this.state.toChild == false) {
            return(
                
                <div className="selecttime">
                    <h1 className="logo-title">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                SafeLy
                    </h1>
                    <div className="module">
                        <div className="instruction">
                            Select your desired time to leave.
                                We will find a buddy to leave with you
                        </div>
                        <div className="sml-container">
                            <h3>Congratulation!</h3>
                            <div className="userList">
                                <div className="user" style={{marginRight: "1em"}}></div>
                                <div className="user" style={{marginRight: "1em"}}></div>
                                <div className="user" style={{marginRight: "1em"}}></div>
                            </div>

                            <h3 className="blueTheme">These are your buddies :)</h3>
                            
                        <button className="centerbtn success" onClick={this.renderChild}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        </div>
                        
                    </div>
                    <MapContainer/>
                    <div className="sml-container-rnd">
                            <h4>We're finding the nearest meet up place</h4>
                            <img src={Loading}/>
                    </div>
                </div>
            )
        }
        else {
            return React.cloneElement(React.Children.only(this.props.children), {});
        }
    }
}

