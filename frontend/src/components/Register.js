import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../assets/register.css'
export default class Register extends Component{
    constructor() {
        super();
        this.state = {
            toChild: false,
        }
        this.renderChild = this.renderChild.bind(this);
    }
    renderChild() {
        this.setState({toChild: true});
    }
    render() {
        if(this.state.toChild == false) {
                return (
                    <div className = "register">
                        <h1 className="logo-title">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            SafeLy
                        </h1>
                        <div className = "container">
                            <div className = "header">

                                <label>Sign up</label>
                            </div>
                            <div className = "form">
                                <div className = "element-inline">
                                    <div>
                                        <label>First name</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label>Last name</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className = "element">
                                    <label>E-mail</label>
                                    <input type="email"></input>
                                </div>
                                <div className="element">
                                    <label>Password</label> 
                                    <input type ="password"></input>
                                </div>
                                <div className="element">
                                    <label>Confirm Password</label>
                                    <input type="password"></input>
                                </div>
                                <div className="element divider">
                                    <label>University</label>
                                    <select name="uni">
                                        <option value="rmit">RMIT</option>
                                        <option value="unimelb">University of Melbourne</option>

                                    </select>
                                </div>

                                <div className="element">
                                    <button type="button" class="bigBtn blueTheme" onClick={this.renderChild}>Sign up</button>
                                </div>

                            </div>
                            
                        </div>
                    </div>
            );
        } else {
            return React.cloneElement(React.Children.only(this.props.children), {});
        }
    }
}
