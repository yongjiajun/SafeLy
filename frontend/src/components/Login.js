import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../assets/login.css'
export default class Login extends Component{
    constructor() {
        super();
        this.state = {
            toRegister: false,
        }
        this.renderChild = this.renderChild.bind(this);
    }
    renderChild() {
        this.setState({toRegister: true});
    }
    render() {
        if(this.state.toRegister == false) {
            return(
                <div className="login">
                    <h1 className="logo-title">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        SafeLy
                    </h1>
                    <button className="login-button bigBtn" onClick={this.renderChild}>LOG IN</button>
                </div>
            );
        } else {
            return React.cloneElement(React.Children.only(this.props.children), {});
        }
        
    }
}