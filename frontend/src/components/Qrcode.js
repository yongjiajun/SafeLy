import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class Qrcode extends Component{
    constructor(props){
        super(props);
        this.state = {
            toChild:  false,
            testUser: this.props.userList,
            qr: "https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=" + this.props.studentId
        }
        this.renderChild = this.renderChild.bind(this);
        
    }
    renderChild() {
        this.setState({
            toChild: true
        })
    }

    componentDidMount() {
        console.log(this.props.usr);
        var self = this;
        var i = 0;
        setInterval(function () {
            if(i <= 6) {
                var test = self.state.testUser.slice();
                test.map(each => {
                    setTimeout(function () {
                        each.checkIn = true
                    },300)
                });
                i++;
                self.setState({testUser: test});
            }
            if( i === 6) {
                self.renderChild();
            }
        },1000)
        setInterval(function () {
            self.renderChild();
        },10000);

    }
    render(){
        if(this.state.toChild == false) {
            return(
                <div className="selecttime">
                     <h1 className="logo-title">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                SafeLy
                    </h1>
                    <div className="circleBg">
                    </div>
                    <div className="module">
                        <div className="instruction">
                            Scan this QR code below at the scanner :).
                        </div>
                        <div className="qr-container">
                            <img id="qrcode" src={this.state.qr}/>
                        </div>
                        <div className="sml-container-sqr grid-sys">
                             {this.state.testUser.map(each => {
                                    return (
                                        <div className="status-container qr-arrive">
                                            <div>
                                                <div className="user">
                                                    <button className="user-checkbox">
                                                        {(each.checkIn) ? <FontAwesomeIcon icon={faCheck}/> : null}
                                                    </button>
                                                </div>
                                            {(each.checkIn) ? <div className="status arrived">Arrived</div> :  <div className="status otw">On the way</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* <div className="status-container qr-arrive">
                                    <div>
                                        <div className="user">
                                            <button className="user-checkbox">
                                            <FontAwesomeIcon icon={faCheck}/></button>
                                        </div>
                                        <div class="status arrived">Arrived</div>
                                    </div>
                                    
                                </div>
                                <div className="status-container qr-arrive">
                                    <div>
                                        <div className="user">
                                            <button className="user-checkbox">
                                            <FontAwesomeIcon icon={faCheck}/></button>
                                        </div>
                                        <div class="status arrived">Arrived</div>
                                    </div>
                                </div>
                                <div className="status-container qr-arrive">
                                    <div>
                                        <div className="user">
                                            <button className="user-checkbox">
                                            <FontAwesomeIcon icon={faCheck}/></button>
                                        </div>
                                        <div class="status arrived">Arrived</div>
                                    </div>
                                </div> */}
                        </div>
                        <div className="outter">
                            <div className="securetext">Security Guard</div>
                                <div className="status-container">
                                        <div className="user">
                                            <button className="user-checkbox">
                                            <FontAwesomeIcon icon={faCheck}/></button>
                                        </div>
                                        <div class="status arrived">Arrived</div>
                                </div>
                            </div>
                        </div>
    
    
                </div>
            )
        } else {
            return React.cloneElement(React.Children.only(this.props.children), {userList: this.props.userList});
        }
       
    }
}

