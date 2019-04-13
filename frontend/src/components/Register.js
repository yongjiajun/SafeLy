import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
export default class Register extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div className = "register">
                <h1 className="login-title">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    SafeLy
                </h1>
                Register
            </div>

        );
    }
}
