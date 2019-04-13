import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, check } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class Congrats extends Component{
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
						Select your desired time to leave.
							We will find a buddy to leave with you
					</div>
					<div className="sml-container">
						<h3>Congratulation!</h3>
                        <div className="hourSelection">
                            <p>pic</p>
                            <div class="seperator"> </div>
                            <p>pic</p>
                            <div class="seperator"> </div>
                            <p>pic</p>
                        </div>
						<h3 className="blueTheme">These are your buddies :)</h3>
                        
                    <button className="centerbtn">
                        <FontAwesomeIcon icon={check}/>
                    </button>
                    </div>
                    <div>
                        <h3>We're finding the nearest meet up place</h3>
                    </div>
				</div>
                <MapContainer/>                 
            </div>
        )
    }
}

