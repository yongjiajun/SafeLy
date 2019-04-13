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
                <h3>
                    You have safely arrived!
                </h3>
				<div className="module">
					<div className="instruction">
						Select your desired time to leave.
							We will find a buddy to leave with you
					</div>
					<div className="sml-container">
						<h3>Congratulation!</h3>
                        <div className="user"></div>
                        <div className="user"></div>
                        <div className="user"></div>

						<h3 className="blueTheme">These are your buddies :)</h3>
                        
                    <button className="centerbtn">
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                    </div>
                    <div>
                        <h3>We're finding the nearest meet up place</h3>
                    </div>
				</div>
                <div>
                    <p> Your escort is done.... </p>
                    <p> For furhter assistance, we also provide
                        the following service.</p>
                    <button>
                        
                    </button>
                    <p> Emergency assistance <p>
                </div>
                <MapContainer/>                 
            </div>
        )
