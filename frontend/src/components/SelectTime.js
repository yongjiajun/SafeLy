import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPlay } from '@fortawesome/free-solid-svg-icons'
import '../assets/register.css'

export default class SelectTime extends Component{

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
						<h3>Select your leaving time</h3>
                        <div className="hourSelection">
                            <input type="number" min="0" max="23" placeholder="_ _"/>
                            <div class="seperator">:</div>
                            <input type="number" min="0" max="59" placeholder="_ _"/>
                            <div class="seperator">:</div>
                            <input type="number" min="0" max="59" placeholder="_ _"/>
                        </div>
						<h3 className="blueTheme">Gender Preference</h3>
                        <div>
                            <select className="genderpref">
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>
                        </div>
                    <div className="centerbtn">
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>
                    </div>
				</div>
            </div>
        )
    }
}