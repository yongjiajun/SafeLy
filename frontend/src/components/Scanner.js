import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Loading from './Loading';
import $ from 'jquery';
import '../assets/camera.css';
class Scanner extends Component {
  constructor() {
    super();
    this.state = {
      toChild: false,
      data: [],
      // data: {
      //   studentID: '940814',
      //   studentUni: '0'}
      // ,
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
    // Do stuff with the photo..
    this.setState({
      loading: true
    })
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
    var self = this;
    var blob = this.base64ToBlob(uri);
    var reader = new FileReader();
    reader.onloadend = function(event){
      var fd = new FormData();
      fd.append('data', event.target.result);
      $.ajax({
          type: 'POST',
          crossDomain: true,
          url: 'https://10.25.130.237:5000/studentIDSub',
          data: fd,
          xhrFields: {
            withCredentials: true
         },
          processData: false,
          contentType: false,
          success: function(res) {
            
            if((res.studentUni == "0" || res.studentUni == "1") && res.studentID != 'null') {
              self.renderChild();
            } else {
              alert("You have to be Uni or RMIT to access");
            }
            if(res.studentID == 'null') {
              alert("The picture is blurry, please scan again")
            }
          },
          error: function(err) {
            alert(err);
          }
      }).done(function(data) {
          // print the output from the upload.php script
          self.setState({
            data: data
          })
          console.log(data);
      });
  };      
  // trigger the read from the reader...
  reader.readAsDataURL(blob);
  this.setState({
    loading: false,
  });
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
    if(this.state.toChild == false) {
      return (
        <div className="Scanner">
          <div className="camera-square"></div>
          <Loading status={this.state.loading}/>
          <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            onCameraError = { (error) => { this.onCameraError(error); } }
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            isMaxResolution = {true}
            // idealResolution = {{width: 1280, height: 720}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.97}
            isMaxResolution = {false}
            isImageMirror = {false}
            isFullscreen = {true}
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