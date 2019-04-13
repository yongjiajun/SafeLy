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
					<div className="sml-container">
						<h3>QRCODE here</h3>
                        
                    </div>
                    <div>
                        <h3>We're finding the nearest meet up place</h3>
                    </div>
				</div>                
            </div>
        )
    }
}

