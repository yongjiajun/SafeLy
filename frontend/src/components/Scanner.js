import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import $ from 'jquery';

class Scanner extends Component {
  constructor() {
    super();
    this.state = {
      toChild: false,
      data: [],
      loading: false
    }
    this.postFile = this.postFile.bind(this);
    this.base64ToBlob = this.base64ToBlob.bind(this);
    this.renderChild = this.renderChild.bind(this);
  }

  renderChild() {
    this.setState({toChild: true});
  }
  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    this.postFile(dataUri);
  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log('onCameraStart');
  }
 
  onCameraStop () {
    console.log('onCameraStop');
  }

  postFile(uri) {
    this.setState({
      loading: true
    })
    var blob = this.base64ToBlob(uri);
    var reader = new FileReader();
    reader.onloadend = function(event){
      var fd = new FormData();
      fd.append('data', event.target.result);
      alert(event.target.result);
      $.ajax({
          type: 'POST',
          crossDomain: true,
          url: 'https://10.25.130.237:5000/studentIDSub',
          data: fd,
          xhrFields: {
            withCredentials: true
         },
          processData: false,
          contentType: false
      }).done(function(data) {
          // print the output from the upload.php script
          console.log(data);
      });
  };      
  // trigger the read from the reader...
  reader.readAsDataURL(blob);
    
  }

  base64ToBlob(dataURI) 
  {
      var binary = atob(dataURI.split(',')[1]);
      var array = [];
      for(var i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

  render () {
    if(this.state.renderChild == false) {
      return (
        <div className="Scanner">
          <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            onCameraError = { (error) => { this.onCameraError(error); } }
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            idealResolution = {{width: '100%', height: '100%'}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.97}
            isMaxResolution = {false}
            isImageMirror = {false}
            isDisplayStartCameraError = {true}
            sizeFactor = {1}
            onCameraStart = { (stream) => { this.onCameraStart(stream); } }
            onCameraStop = { () => { this.onCameraStop(); } }
          />
        </div>
      );
    } else {
      return React.cloneElement(React.Children.only(this.props.children), {data: this.state.data});
    }
  }
}
 
export default Scanner;