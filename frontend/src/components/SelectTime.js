import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPlay } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class SelectTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            toChild: false,
            time: new Date(),
            timeInterval: null,
            stop: false,
            usr: this.props.usr
        }
        this.clearTime = this.clearTime.bind(this);
        this.renderChild = this.renderChild.bind(this);
    }

    componentDidMount() {
        console.log("SelectTime");
        console.log(this.props.usr);
        var self=this;
        this.setState({
            stop: true,
            timeInterval: setInterval(function(){
                self.setState({time: new Date()});
            },1000),
    });
    }

    renderChild() {

        this.setState(prevState=>({
            toChild: true,
            usr: {
                ...prevState.usr,
                datetime: this.state.time,
                studentName: this.props.studentName
            }
        }));
        

    }

    clearTime() {
        clearInterval(this.state.timeInterval);
    }

    render(){
        if(this.state.toChild == false) {
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
                                <input type="number" min="0" max="23" className="num1" placeholder={this.state.time.getHours()} onClick = {this.clearTime}/>
                                <div className="seperator">:</div>
                                <input type="number" min="0" max="59" className="num2" placeholder={this.state.time.getMinutes()} onClick = {this.clearTime}/>
                                <div className="seperator">:</div>
                                <input type="number" min="0" max="59" className="num3" placeholder={this.state.time.getSeconds()} onClick = {this.clearTime}/>
                            </div>
                            <h3 className="blueTheme">Gender Preference</h3>
                            <div>
                                <select className="genderpref">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>

                                </select>
                            </div>
                        <button className="centerbtn" onClick={this.renderChild}>
                            <FontAwesomeIcon icon={faPlay}/>
                        </button>
                        </div>
                    </div>
                    <MapContainer/>                 
                </div>
            )
        } else {
            return React.cloneElement(React.Children.only(this.props.children), {usr: this.state.usr, studentId: this.props.studentId});
        }
    }
}

