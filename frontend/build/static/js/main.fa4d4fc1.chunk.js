(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,o){},19:function(e,t,o){e.exports=o.p+"static/media/loading.03930ca6.svg"},21:function(e,t,o){e.exports=o(48)},26:function(e,t,o){},27:function(e,t,o){},33:function(e,t,o){},46:function(e,t,o){},48:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(14),i=o.n(r),c=(o(26),o(5)),s=o(6),l=o(9),u=o(7),p=o(8),m=(o(27),o(4)),h=o(2),d=o(3),g=(o(33),n.Component,o(12),n.Component,o(10)),f={position:"absolute",width:"100vw",height:"250vw",zIndex:1,marginTop:"-90%",left:"50%",transform:"translateX(-50%)",clipPath:"circle(50% at 50% 50%)"},b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentLocation:{lat:-37.803835,lng:144.960655}},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(g.Map,{google:this.props.google,zoom:14,style:f,initialCenter:this.state.currentLocation},a.a.createElement(g.Marker,{position:this.state.currentLocation}))}}]),t}(n.Component),j=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"})(b),C=(n.Component,o(19)),w=o.n(C),v=(n.Component,n.Component,window.google,function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentLocation:{lat:-37.803835,lng:144.960655},finalPosition:{lat:-37.7964,lng:144.9612},lineCoordinates:[{lat:-37.803835,lng:144.960655},{lat:-37.7964,lng:144.9612}]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"componentDidMount",value:function(){var e=new window.google.maps.DirectionsService,t=new window.google.maps.DirectionsRenderer,o=this.state.currentLocation,n=this.state.finalPosition,a=this;e.route({origin:o,destination:n,optimizeWaypoints:!0,travelMode:"WALKING"},function(e,o){if("OK"===o){console.log(e),t.setDirections(e);e.routes[0];a.setState({lineCoordinates:e.routes[0].overview_path})}else window.alert("Directions request failed due to "+o)})}},{key:"render",value:function(){return a.a.createElement(g.Map,{google:this.props.google,zoom:16,initialCenter:this.state.currentLocation},a.a.createElement(g.Marker,{position:this.state.currentLocation}),a.a.createElement(g.Polyline,{path:this.state.lineCoordinates,geodesic:!1,options:{strokeColor:"#38B44F",strokeOpacity:1,strokeWeight:7}}))}}]),t}(n.Component)),O=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"})(v),y=(o(46),n.Component,n.Component,o(15)),k=o.n(y),E=(o(47),o(20)),S=o.n(E),D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).postFile=e.postFile.bind(Object(m.a)(Object(m.a)(e))),e.base64ToBlob=e.base64ToBlob.bind(Object(m.a)(Object(m.a)(e))),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onTakePhoto",value:function(e){console.log("takePhoto"),this.postFile(e)}},{key:"onCameraError",value:function(e){console.error("onCameraError",e)}},{key:"onCameraStart",value:function(e){console.log("onCameraStart")}},{key:"onCameraStop",value:function(){console.log("onCameraStop")}},{key:"postFile",value:function(e){var t=this.base64ToBlob(e),o=new FileReader;o.onloadend=function(e){var t=new FormData;t.append("data",e.target.result),alert(e.target.result),S.a.ajax({type:"POST",crossDomain:!0,url:"https://10.25.130.237:5000/studentIDSub",data:t,xhrFields:{withCredentials:!0},processData:!1,contentType:!1}).done(function(e){console.log(e)})},o.readAsDataURL(t)}},{key:"base64ToBlob",value:function(e){for(var t=atob(e.split(",")[1]),o=[],n=0;n<t.length;n++)o.push(t.charCodeAt(n));return new Blob([new Uint8Array(o)],{type:"image/jpeg"})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement(k.a,{onTakePhoto:function(t){e.onTakePhoto(t)},onCameraError:function(t){e.onCameraError(t)},idealFacingMode:y.FACING_MODES.ENVIRONMENT,idealResolution:{width:640,height:480},imageType:y.IMAGE_TYPES.JPG,imageCompression:.97,isMaxResolution:!1,isImageMirror:!1,isDisplayStartCameraError:!0,sizeFactor:1,onCameraStart:function(t){e.onCameraStart(t)},onCameraStop:function(){e.onCameraStop()}}))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(D,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.fa4d4fc1.chunk.js.map