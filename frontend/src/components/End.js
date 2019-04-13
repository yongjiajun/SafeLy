import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLifeRing, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class End extends Component{
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
						<h3>YOU HAVE SAFELY ARRIVED!</h3>
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
                                <div class="status arrived">Arrived</div>
                            </div>
                        </div>
                    </div>
                    <div className="instruction">
                        <h4>Your escort is done...</h4>
                        <h4>For further assistance, we also provide the following service.</h4>
                    </div>
                    <div className="bottomWrapper">
                        <button className="centerSOS">
                            <FontAwesomeIcon icon={faLifeRing}/>
                        </button>
                        <h4>Emergency assistance</h4>
                    </div>
                </div>
            </div>
        )
    }
}

