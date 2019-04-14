import React, { Component } from 'react';
import loading from "../assets/img/DoubleLoad.svg";

import "../assets/loading.css";

export default class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status
        }
    }

    render() {
        if(this.state.status == true) {
            return(
                <div className = "Loading">
                    <img src={loading}/>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}