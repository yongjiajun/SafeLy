import React, { Component } from 'react';
import {loadPic} from "../assets/img/loading.svg";
import "../assets/loading.css";

export default class Loading extends Component{
    constructor(status) {
        this.state = {
            status: status
        }
    }

    render() {
        if(this.state.status == true) {
            return(
                <div className = "Loading">
                    <img src={loadPic}/>
                </div>
            );
        }
    }
}