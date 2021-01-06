(this["webpackJsonpspotify-unwrapped"]=this["webpackJsonpspotify-unwrapped"]||[]).push([[0],{271:function(e,t,a){},272:function(e,t,a){},399:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),i=a(114),c=a.n(i),o=(a(271),a(272),a(9)),l=a.n(o),u=a(25),d=a(11),p=a(12),m=a(21),h=a(22),j=a(121),b=a.n(j),f=a(116),v=a(119),g=a.n(v),O=function(e){var t=e.length;return e.map((function(e,a){return{id:e.name,group:"Artist",popularity:e.popularity,volume:(t-a)/t*30}}))},x=function(e){var t=e.length;return e.map((function(e,a){return{id:e.name,group:"Track",popularity:e.popularity,volume:(t-a)/t*30}}))},w=g()((function(e){return{isMobile:e.width<576}}))((function(e){var t=e.data,a=e.isTracks,r=e.isMobile;return Object(n.jsx)(f.a,{data:"true"===a?x(t):O(t),groups:"true"===a?["Track"]:["Artist"],value:"popularity",valueFormat:"d",valueScale:{type:"linear",min:0,max:100,reverse:!1},size:{key:"volume",values:[4,20],sizes:[6,20]},layout:r?"vertical":"horizontal",simulationIterations:100,borderColor:{from:"color",modifiers:[["darker",.6],["opacity",.5]]},margin:r?{top:40,right:50,bottom:40,left:50}:{top:60,right:100,bottom:90,left:100},axisBottom:{orient:"bottom",tickSize:10,tickPadding:5,tickRotation:0,legend:"Popularity",legendPosition:"middle",legendOffset:46},motionStiffness:50,motionDamping:10})})),k=function(e){var t=e.length;return e.map((function(e,a){return{id:e.name,group:"Artist",followers:e.followers.total/1e6,volume:(t-a)/t*30}}))},y=function(e){var t=e.length;return e.map((function(e,a){return{id:e.name,group:"Track",duration:e.duration_ms/6e4,volume:(t-a)/t*30}}))},N=g()((function(e){return{isMobile:e.width<576}}))((function(e){var t=e.data,a=e.isTracks,r=e.isMobile;return Object(n.jsx)(f.a,{data:"true"===a?y(t):k(t),groups:"true"===a?["Track"]:["Artist"],value:"true"===a?"duration":"followers",valueFormat:".2f",valueScale:{type:"linear",min:"auto",max:"auto",reverse:!1},size:{key:"volume",values:[4,20],sizes:[6,20]},layout:r?"vertical":"horizontal",simulationIterations:100,borderColor:{from:"color",modifiers:[["darker",.6],["opacity",.5]]},margin:r?{top:40,right:50,bottom:40,left:50}:{top:60,right:100,bottom:90,left:100},axisBottom:"true"===a?{orient:"bottom",tickSize:10,tickPadding:5,tickRotation:0,legend:"Duration (minutes)",legendPosition:"middle",legendOffset:46}:{orient:"bottom",tickSize:10,tickPadding:5,tickRotation:0,legend:"Followers (millions)",legendPosition:"middle",legendOffset:46},motionStiffness:50,motionDamping:10})})),C=function(e){return e?Object(n.jsx)("div",{}):Object(n.jsx)("div",{children:Object(n.jsx)("span",{children:e})})};a(399),a(400);function S(e){return Math.round(100*(e+Number.EPSILON))/100}function T(e){return S(e.reduce((function(e,t){return e+t.duration_ms}),0)/e.length/6e4)}function P(e){return S(e.reduce((function(e,t){return e+t.followers.total}),0)/e.length)}function D(e){return S(e.reduce((function(e,t){return e+t.popularity}),0)/e.length)}function A(e){var t={};e.forEach((function(e){e.genres.forEach((function(e){t[e]=t[e]?t[e]+1:1}))}));var a=[];return Object.keys(t).forEach((function(e){return a.push([e,t[e]])})),a.sort((function(e,t){return t[1]-e[1]})),a}var L=a(254),R=a.n(L).a.create({baseURL:"http://localhost:8888"});function z(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.get("/auth/login/success",{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,a){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(t,a,n){var r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t[a].slice(0,n),s=r.map((function(e){return e.uri})),i={timeRange:a,tracks:s},e.abrupt("return",R.post("/auth/createTracksPlaylist",i,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=[{value:"tracks",label:"Tracks"},{value:"artists",label:"Artists"}],U=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"}],_=[{value:"short",label:"1 month"},{value:"medium",label:"6 months"},{value:"long",label:"All Time"}],B="http://localhost:8888",G=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleLogoutClick=function(){window.open("".concat(B,"/auth/logout"),"_self"),n.setState({loading:!0,authenticated:!1})},n.handleSignInClick=function(){window.open("".concat(B,"/auth/spotify"),"_self"),n.setState({loading:!0})},n.state={error:null,userData:{},tracksData:{medium:[]},artistsData:{medium:[]},limit:20,timeRange:"medium",view:"tracks",waitingPlaylist:!1,loading:!0,authenticated:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.handleUpdate()}},{key:"handleLimitClick",value:function(e){var t=e.value;this.setState({limit:t})}},{key:"handleTimeRangeClick",value:function(e){var t=e.value;this.setState({timeRange:t})}},{key:"handleViewClick",value:function(e){var t=e.value;this.setState({view:t})}},{key:"handleUpdate",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z().then((function(e){if(200===e.status)return e.data;throw new Error("failed to authenticate user")})).then((function(e){t.setState({userData:e.userData,tracksData:e.tracksData,artistsData:e.artistsData,loading:!1,authenticated:!0})})).catch((function(){t.setState({error:"Failed to authenticate user",loading:!1,authenticated:!1})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onClickCreatePlaylist",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,r,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({waitingPlaylist:!0});case 2:t=this.state,a=t.tracksData,n=t.timeRange,r=t.limit,I(a,n,r).then((function(e){200===e.status&&alert("Playlist successfully created!"),s.setState({waitingPlaylist:!1})})).catch((function(e){alert("Error when creating playlist"),console.log(e),s.setState({waitingPlaylist:!1})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.userData,r=t.artistsData,s=t.tracksData,i=t.view,c=t.timeRange,o=t.limit,l=t.waitingPlaylist,u=t.error,d=t.loading,p=t.authenticated,m=s[c].slice(0,o),h=r[c].slice(0,o);return Object(n.jsxs)(n.Fragment,{children:[d&&Object(n.jsx)("div",{children:"Loading..."}),!d&&p&&Object(n.jsxs)("div",{className:"big-wrapper",children:[Object(n.jsx)("div",{className:"home-page",children:Object(n.jsxs)("div",{className:"sub-wrapper",children:[Object(n.jsx)("h2",{children:"Welcome ".concat(a.display_name,"!")}),Object(n.jsxs)("div",{id:"select-bar",children:[Object(n.jsxs)("div",{className:"sub-select",children:[Object(n.jsx)("div",{className:"select-text",children:"Top"}),Object(n.jsx)(b.a,{options:U,value:U[1],onChange:function(t){return e.handleLimitClick(t)},placeholder:"Select an option",className:"dropdown-class",controlClassName:"dropdown-control",placeholderClassName:"dropdown-placeholder",menuClassName:"dropdown-menu",arrowClassName:"dropdown",arrowClosed:Object(n.jsx)("span",{className:"arrow-closed"}),arrowOpen:Object(n.jsx)("span",{className:"arrow-open"})}),Object(n.jsx)(b.a,{options:M,value:M[0],onChange:function(t){return e.handleViewClick(t)},placeholder:"Select an option",className:"dropdown-class",controlClassName:"dropdown-control",placeholderClassName:"dropdown-placeholder",menuClassName:"dropdown-menu",arrowClassName:"dropdown",arrowClosed:Object(n.jsx)("span",{className:"arrow-closed"}),arrowOpen:Object(n.jsx)("span",{className:"arrow-open"})})]}),Object(n.jsxs)("div",{className:"sub-select",children:[Object(n.jsx)("div",{className:"select-text",children:"Last"}),Object(n.jsx)(b.a,{options:_,value:_[1],onChange:function(t){return e.handleTimeRangeClick(t)},placeholder:"Select an option",className:"dropdown-class",controlClassName:"dropdown-control dropdown-control-limit",placeholderClassName:"dropdown-placeholder",menuClassName:"dropdown-menu",arrowClassName:"dropdown",arrowClosed:Object(n.jsx)("span",{className:"arrow-closed"}),arrowOpen:Object(n.jsx)("span",{className:"arrow-open"})})]})]}),"artists"===i?Object(n.jsxs)("div",{className:"data",children:[Object(n.jsxs)("div",{className:"plot-container",children:[Object(n.jsx)("p",{className:"averages",children:"Average popularity: ".concat(D(h))}),Object(n.jsx)("div",{className:"swarmplot",children:Object(n.jsx)(w,{data:h,isTracks:"false"})}),Object(n.jsx)("p",{className:"averages",children:"Average followers: ".concat(P(h))}),Object(n.jsx)("div",{className:"swarmplot",children:Object(n.jsx)(N,{data:h,isTracks:"false"})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Top Genres"}),Object(n.jsx)("ol",{children:A(h).slice(0,5).map((function(e){return Object(n.jsx)("li",{children:"".concat(e[0])},"".concat(e[0]))}))})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Artists"}),Object(n.jsx)("ol",{children:h.map((function(e){return Object(n.jsx)("li",{children:"".concat(e.name)},"artist-".concat(e.name))}))})]})]}):Object(n.jsxs)("div",{className:"data",children:[Object(n.jsxs)("div",{className:"plot-container",children:[Object(n.jsx)("p",{className:"averages",children:"Average popularity: ".concat(D(m))}),Object(n.jsx)("div",{className:"swarmplot",children:Object(n.jsx)(w,{data:m,isTracks:"true"})}),Object(n.jsx)("p",{className:"averages",children:"Average duration: ".concat(T(m)," minutes")}),Object(n.jsx)("div",{className:"swarmplot",children:Object(n.jsx)(N,{data:m,isTracks:"true"})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Tracks"}),Object(n.jsx)("ol",{children:m.map((function(e){return Object(n.jsxs)("li",{className:"".concat(e.explicit),children:[Object(n.jsx)("span",{className:"track-name",children:e.name}),Object(n.jsxs)("span",{className:"track-artist",children:[" - ",e.artists.map((function(e){return e.name})).join(", ")]})]},"track-".concat(e.name))}))})]}),Object(n.jsx)("div",{className:"create-container",children:Object(n.jsxs)("button",{type:"button",onClick:function(){return e.onClickCreatePlaylist()},id:"create",disabled:l,children:[l&&Object(n.jsx)("span",{className:"create-text",children:"Creating Playlist..."}),!l&&Object(n.jsx)("span",{className:"create-text button-text",children:"Create Playlist"})]})})]}),Object(n.jsx)("button",{id:"logout",type:"button",className:"log",onClick:this.handleLogoutClick,children:Object(n.jsx)("span",{className:"button-text",children:"LOGOUT"})})]})}),Object(n.jsx)(C,{message:u})]}),!d&&!p&&Object(n.jsxs)("div",{className:"big-wrapper",children:[Object(n.jsx)("h1",{children:"Spotify Unwrapped"}),Object(n.jsx)("button",{id:"login",type:"button",className:"log",onClick:this.handleSignInClick,children:Object(n.jsx)("span",{className:"button-text",children:"LOGIN"})})]})]})}}]),a}(r.Component);a(418);function J(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)(G,{})})}var V=function(){return Object(n.jsx)(J,{})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,465)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root")),W()}},[[419,1,2]]]);
//# sourceMappingURL=main.77074f9a.chunk.js.map