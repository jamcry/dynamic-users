(this["webpackJsonpdynamic-users"]=this["webpackJsonpdynamic-users"]||[]).push([[0],{169:function(e,a,t){e.exports=t(407)},202:function(e,a){},205:function(e,a,t){},403:function(e,a,t){},404:function(e,a,t){},405:function(e,a,t){},406:function(e,a,t){},407:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(59),r=t.n(s),i=t(168),c=t(60),o=t(61),m=t(63),u=t(62),d=t(64),p=t(164),E=t.n(p)()("https://wunder-provider.herokuapp.com/"),f=function(e){E.on("connect",(function(){return console.log("[ ] socket.io : Connected")})),E.on("userList",(function(a){return e(null,a)})),E.on("error",(function(){return console.error("[!] ERROR with socket.io")})),E.on("disconnect",(function(){return console.warn("[ ] socket.io : Disconnected")}))},v=t(165),g=(t(205),t(36)),h=Object(g.withScriptjs)(Object(g.withGoogleMap)((function(e){return l.a.createElement(g.GoogleMap,{defaultZoom:15,defaultCenter:{lat:parseFloat(e.position.latitude),lng:parseFloat(e.position.longitude)}},l.a.createElement(g.Marker,{position:{lat:parseFloat(e.position.latitude),lng:parseFloat(e.position.longitude)}}))}))),N=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.userData,a=e.name.first+" "+e.name.last,t=e.picture.large,n=e.gender,s=e.location.coordinates,r=e.dob.age,i="fas fa-"+("male"===n?"mars":"venus");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-header profile-page"},l.a.createElement("div",{className:"btn-back",onClick:this.props.closeDetails},l.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),l.a.createElement("div",{className:"page-title"},"MY PROFILE")),l.a.createElement("div",{className:"profile-details"},l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"profile-photo-container-big"},l.a.createElement("img",{src:t,alt:"profile"})),l.a.createElement("div",{className:"name-container"},l.a.createElement("div",{className:"user-fullname-title"},l.a.createElement("span",null,"Name")),l.a.createElement("div",{className:"user-fullname"},l.a.createElement("span",null,a)))),l.a.createElement("div",{className:"map-container"},l.a.createElement(h,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDujxhi5-1RAq9jizZ5U2xp0hikKwOFQKE&v=3.exp&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:Object(v.a)({height:"100%"},"height","100%")}),containerElement:l.a.createElement("div",{style:{width:"100%",height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%",borderRadius:"10px"}}),position:s})),l.a.createElement("div",{className:"bottom-details"},l.a.createElement("div",{className:"gender"},l.a.createElement("div",{className:"subtitle"},"Gender"),l.a.createElement("div",{className:"subcontent"},l.a.createElement("div",{className:"gender-icon"},l.a.createElement("i",{className:i})))),l.a.createElement("div",{className:"age"},l.a.createElement("div",{className:"subtitle"},"Age"),l.a.createElement("div",{className:"subcontent"},l.a.createElement("div",{className:"age-yo-container"},r," yo")),l.a.createElement("div",{className:"age-rectangle"},l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}))))))}}]),a}(l.a.Component),b=(t(403),function(e){var a=e.userData,t=a.name.first+" "+a.name.last,n=a.picture.medium,s=a.dob.age;return l.a.createElement("div",{className:"profile-list-item"},l.a.createElement("div",{className:"profile-photo-container"},l.a.createElement("img",{src:n,alt:"profile"})),l.a.createElement("div",{className:"user-fullname"},l.a.createElement("span",null,t,", ",s)),l.a.createElement("div",{className:"profile-action",onClick:e.expandUser},l.a.createElement("i",{className:"fas fa-chevron-right"})))}),y=(t(404),function(e){var a=e.userList.map((function(a){return l.a.createElement(b,{key:a.login.uuid,userData:a,expandUser:function(){return e.handleProfileExpand(a)}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"user-list-page-container",style:e.style},l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"page-title"},"PROFILES"),l.a.createElement("div",{className:"btn-burger"},l.a.createElement("i",{className:"fas fa-bars"}))),l.a.createElement("div",{className:"user-list"},a)))}),j=(t(405),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={expandedUser:null,userList:[]},t.componentDidMount=function(){f((function(e,a){t.setState((function(e){return{userList:[].concat(Object(i.a)(e.userList),[a.results[0]])}}))}))},t.showProfileDetails=function(e){t.setState({expandedUser:e})},t.hideProfileDetails=function(){t.setState({expandedUser:null})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={display:this.state.expandedUser?"none":"flex"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"profiles-container"},this.state.expandedUser&&l.a.createElement(N,{userData:this.state.expandedUser,closeDetails:this.hideProfileDetails}),l.a.createElement(y,{userList:this.state.userList,handleProfileExpand:this.showProfileDetails,style:e})))}}]),a}(l.a.Component));t(406);var O=document.getElementById("root");r.a.render(l.a.createElement((function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,null))}),null),O)}},[[169,1,2]]]);
//# sourceMappingURL=main.f6365ea9.chunk.js.map