import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
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
						<h2>You have safely arrived!</h2>
					</div>
                    <div className="sml-container-sqr">
                        <div className="qrContainer">
                            <div className="status-container">
                                <div className="user">
                                    <button className="user-checkbox">
                                    <FontAwesomeIcon icon={faCheck}/></button>
                                </div>
                                <div class="status arrived">Arrived</div>
                            </div>
                            <div className="status-container">
                                <div className="user">
                                    <button className="user-checkbox">
                                    <FontAwesomeIcon icon={faCheck}/></button>
                                </div>
                                <div class="status arrived">Arrived</div>
                            </div>
                            <div className="status-container">
                                <div className="user">
                                    <button className="user-checkbox">
                                    <FontAwesomeIcon icon={faCheck}/></button>
                                </div>
                                <div class="status otw">On the way</div>
                            </div>
                        </div>
                    </div>
                        <div className="endInfo">
                            <div className="endMessage">You escort is done...</div>
                            <div className="endMessage">For further assistance, we also provide
                            the following service.</div>
                        </div>

                        <button className="emergencybtn">
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>

                        <div className="endMessage">Emergency Contact</div>
				</div>                
            </div>
        )
    }
}
