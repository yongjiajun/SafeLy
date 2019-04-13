import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class Qrcode extends Component{
    constructor(){
        super();
        this.state = {
            toChild:  false,
        }
    }
    renderChild() {
        this.setState({
            toChild: true
        })
    }
    render(){
        if(this.state.toChild == false) {
            return(
                <div className="selecttime">
                     <h1 className="logo-title">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                SafeLy
                    </h1>
                    <div className="circleBg">
                    </div>
                    <div className="module">
                        <div className="instruction">
                            Scan this QR code below at the scanner :).
                        </div>
                        <div className="qr-container">
                            <img id="qrcode" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"/>
                        </div>
                        <div className="sml-container-sqr">
                            <div className="userWrapper">
                                <div className="status-container qr-arrive">
                                    <div className="user">
                                        <button className="user-checkbox">
                                        <FontAwesomeIcon icon={faCheck}/></button>
                                    </div>
                                    <div class="status arrived">Arrived</div>
                                </div>
                                <div className="status-container qr-arrive">
                                    <div className="user">
                                        <button className="user-checkbox">
                                        <FontAwesomeIcon icon={faCheck}/></button>
                                    </div>
                                    <div class="status arrived">Arrived</div>
                                </div>
                                <div className="status-container qr-arrive">
                                    <div className="user">
                                        <button className="user-checkbox">
                                        <FontAwesomeIcon icon={faCheck}/></button>
                                    </div>
                                    <div class="status otw">On the way</div>
                                </div>
                            </div>
                        </div>
                        <div className="outter">
                            <div className="securetext">Security Guard</div>
                                <div className="status-container">
                                        <div className="user">
                                            <button className="user-checkbox">
                                            <FontAwesomeIcon icon={faCheck}/></button>
                                        </div>
                                        <div class="status arrived">Arrived</div>
                                </div>
                            </div>
                        </div>
    
    
                </div>
            )
        } else {
            return React.cloneElement(React.Children.only(this.props.children), {});
        }
       
    }
}

