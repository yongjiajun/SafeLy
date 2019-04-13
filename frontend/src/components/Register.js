import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../assets/register.css'
export default class Register extends Component{
    constructor() {
        super();
        this.state = {
            toChild: false,
            usr: {
                sessionId: '1',
                studentName: null,
                studentId: null,
                requester: true,
                checkedIn: false,
                verify: true,
                datetime: null,
            }
        }
        this.renderChild = this.renderChild.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    renderChild() {
        this.setState({toChild: true});
    }
    onInputChange(event) {
        this.setState(prevState => ({
                usr: {
                    ...prevState.usr,
                    [event.target.name]: event.target.value
                }
            })
        );
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
                                        <input type="text" name="studentName" onChange={this.onInputChange}></input>
                                    </div>
                                    <div>
                                        <label>Last name</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <div className = "element">
                                    <label>Student E-mail</label>
                                    <input type="email"></input>
                                </div>
                                <div className="element">
                                    <label>Password</label> 
                                    <input type ="password"></input>
                                </div>
                                <div className="element">
                                    <label>Student Id</label>
                                    <input type="text" name= "studentId" onChange={this.onInputChange}></input>
                                </div>
                                <div className="element divider">
                                    <label>University</label>
                                    <select name="uni">
                                        <option value="rmit">RMIT</option>
                                        <option value="unimelb">University of Melbourne</option>

                                    </select>
                                </div>

                                <div className="element">
                                    <button type="button" className="bigBtn blueTheme" onClick={this.renderChild}>Sign up</button>
                                </div>

                            </div>
                            
                        </div>
                    </div>
            );
        } else {
            return React.cloneElement(React.Children.only(this.props.children), {usr: this.state.usr});
        }
    }
}
