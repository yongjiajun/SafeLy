import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class Qrcode extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="selecttime">
             	<h1 className="logo-title">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            SafeLy
                </h1>
				<div className="module">
					<div className="instruction">
						Scan this QR code below at the scanner :).
					</div>
					<div className="qr-container">
                        <img id="qrcode" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"/>
                    </div>
                    <div className="sml-container-sqr">
                        <div className="qrContainer">
                            <div className="status-container2">
                                <div className="user">
                                    <button className="user-checkbox">
                                    <FontAwesomeIcon icon={faCheck}/></button>
                                </div>
                                <div class="status arrived">Arrived</div>
                            </div>
                            <div className="status-container2">
                                <div className="user">
                                    <button className="user-checkbox">
                                    <FontAwesomeIcon icon={faCheck}/></button>
                                </div>
                                <div class="status arrived">Arrived</div>
                            </div>
                            <div className="status-container2">
                                <div className="user">
                                    <button className="user-checkbox">
                                    <FontAwesomeIcon icon={faCheck}/></button>
                                </div>
                                <div class="status otw">On the way</div>
                            </div>
                        </div>
                    </div>
                    <div className="securetext">Security Guard</div>
                    <div className="security">
                            <div className="user">
                                <button className="user-checkbox">
                                <FontAwesomeIcon icon={faCheck}/></button>
                            </div>
                            <div class="status arrived">Arrived</div>
                    </div>
				</div>                
            </div>
        )
    }
}

