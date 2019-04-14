import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';
import '../assets/register.css';
// import openSocket from 'socket.io-client';
import $ from 'jquery';
import Loading from './Loading';
import loadingImg from '../assets/img/loading.svg'

// const API = "http://10.25.130.83:5000";
const API = "https://10.25.130.237:5000";
// const socket = openSocket(API);
export default class Congrats extends Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            toChild: false,
            userList: [],
            testUser: []
        }
        this.renderChild = this.renderChild.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    renderChild() {
        this.setState({
            toChild: true,
        });
    }
    componentWillMount() {
    }
    fetchData() {
        var self = this;
        $.ajax({
            type: 'GET',
            crossDomain: true,
            url: API + '/getUsers',
            processData: false,
            contentType:'application/json',
          
            success: function(res) {
                var newUsers = self.state.userList.slice();
                for(let i = 0; i < res.length; i++) {
                    newUsers.push(res[i]);
                }
                self.setState({userList: newUsers, loading: false});

                console.log(newUsers);
                
            },
            error: function(err) {
              console.log(err);
            }
        }).done(function(data) {
            // print the output from the upload.php script
            console.log(data);
            
        });
    }
    componentDidMount() {
        var self = this;
        // socket.emit("add user", this.props.usr);
        this.setState({
            loading: true,
        })
        this.fetchData();
        // socket.emit("refresh",() => {this.fetchData()});
        // socket.emit("disconnect",this.props.usr);
        var i = 0;
        setInterval(function () {
            if(i <= 6) {
                var testUser = self.state.userList.slice(0,i);
                i++;
                self.setState({testUser: testUser});
            }
            if( i > 6) {
                self.renderChild();
            }
        },200)
    }


    

    render(){
        if(this.state.toChild == false) {
            return(
                <div className="selecttime">
                    <Loading status = {this.state.loading}/>
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
                            <div className="userList">
                                {this.state.testUser.map((each,i) => {
                                   return (<div className="user" key={i}/>)
                                })}

                            </div>

                            <h3 className="blueTheme">These are your buddies :)</h3>
                            
                        <button className="centerbtn success" onClick={this.renderChild}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        </div>
                        
                    </div>
                    <MapContainer/>
                    <div className="sml-container-rnd">
                            <h4>We're finding the nearest meet up place</h4>
                            <img src={loadingImg}/>
                    </div>
                </div>
            )
        }
        else {
            return React.cloneElement(React.Children.only(this.props.children), {userList: this.state.testUser, usr: this.props.usr, studentId: this.props.studentId});
        }
    }
}

