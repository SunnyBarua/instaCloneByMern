(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),c=a.n(l),r=(a(28),a(1)),i=(a(29),a(30),a(2)),s=a(3);var u=function(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch,l=Object(i.f)();return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement(s.b,{to:t?"/":"/signin",className:"brand-logo"},"Instagram"),o.a.createElement("ul",{id:"nav-mobile",className:"right"},t?[o.a.createElement("li",{key:Math.random()},o.a.createElement(s.b,{to:"/profile"},"Profile")),o.a.createElement("li",{key:Math.random()},o.a.createElement(s.b,{to:"/create"},"Create Post")),o.a.createElement("li",{key:Math.random()},o.a.createElement(s.b,{to:"/myfollowingspost"},"following Post")),o.a.createElement("li",{key:Math.random()},o.a.createElement("button",{className:"btn #c62828 red darken logout_button",onClick:function(){localStorage.clear(),a({type:"CLEAR"}),l.push("/signin")}},"Logout"))]:[o.a.createElement("li",{key:Math.random()},o.a.createElement(s.b,{to:"/signin"},"Sign In")),o.a.createElement("li",{key:Math.random()},o.a.createElement(s.b,{to:"/signup"},"Sign Up"))])))},m=a(5);a(35);var p=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(r.a)(c,2),s=i[0],u=i[1],p=Object(n.useContext)(w),d=p.state,h=p.dispatch;return Object(n.useEffect)((function(){fetch("https://insta-clone20.herokuapp.com/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){l(e.mypost)}))}),[]),Object(n.useEffect)((function(){if(s){var e=new FormData;e.append("file",s),e.append("upload_preset","insta-clone"),e.append("cloud_name","sunnybd"),fetch("https://api.cloudinary.com/v1_1/sunnybd/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e),fetch("https://insta-clone20.herokuapp.com/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(m.a)(Object(m.a)({},d),{},{pic:e.pic}))),h({type:"UPDATEPIC",payload:e.pic}),window.location.reload()}))})).catch((function(e){console.log(e)}))}}),[s]),o.a.createElement("div",{className:"profile__and__gallary"},o.a.createElement("div",{className:"profile"},o.a.createElement("div",{className:"profile__Picture__Update"},o.a.createElement("img",{className:"profile__img",src:d?d.pic:"loading"}),o.a.createElement("div",{className:"file-field input-field"},o.a.createElement("div",{className:"btn waves-light "},o.a.createElement("span",null,"Update Picture"),o.a.createElement("input",{type:"file",onChange:function(e){return t=e.target.files[0],void u(t);var t}})),o.a.createElement("div",{className:"file-path-wrapper"},o.a.createElement("input",{className:"file-path validate",type:"text"})))),o.a.createElement("div",{className:"profile__alldetails"},o.a.createElement("div",{className:"profile__name"},o.a.createElement("h4",null,d?d.name:"loading"),o.a.createElement("h5",null,d?d.email:"loading")),o.a.createElement("div",{className:"profile__details"},o.a.createElement("h6",null,a.length," posts"),o.a.createElement("h6",null,d?d.followers.length:"0"," follower"),o.a.createElement("h6",null,d?d.following.length:"0"," following")))),o.a.createElement("div",{className:"gallary"},a.map((function(e){return o.a.createElement("img",{className:"item",key:e._id,src:e.photo,alt:e.title})}))))},d=a(9),h=a.n(d);a(36);var f=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(""),m=Object(r.a)(u,2),p=m[0],d=m[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),E=g[0],v=g[1],b=Object(n.useState)(""),y=Object(r.a)(b,2),j=y[0],_=y[1],w=Object(n.useState)(void 0),O=Object(r.a)(w,2),N=O[0],S=O[1];Object(n.useEffect)((function(){N&&k()}),[N]);var k=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E)?fetch("https://insta-clone20.herokuapp.com/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:l,password:p,email:E,pic:N})}).then((function(e){return e.json()})).then((function(t){t.error?h.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",t.token),localStorage.setItem("user",JSON.stringify(t.user)),h.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):h.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})};return o.a.createElement("div",{className:"mycard"},o.a.createElement("div",{className:"card auth-card input field"},o.a.createElement("h2",null,"Instagram"),o.a.createElement("input",{type:"text",value:l,onChange:function(e){return c(e.target.value)},placeholder:"Name"}),o.a.createElement("input",{type:"email",value:E,onChange:function(e){return v(e.target.value)},placeholder:"Email"}),o.a.createElement("input",{type:"password",value:p,onChange:function(e){return d(e.target.value)},placeholder:"Password"}),o.a.createElement("div",{className:"file-field input-field"},o.a.createElement("div",{className:"btn waves-light "},o.a.createElement("span",null,"Upload Pic"),o.a.createElement("input",{type:"file",onChange:function(e){return _(e.target.files[0])}})),o.a.createElement("div",{className:"file-path-wrapper"},o.a.createElement("input",{className:"file-path validate",type:"text"}))),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){j?function(){var e=new FormData;e.append("file",j),e.append("upload_preset","insta-clone"),e.append("cloud_name","sunnybd"),fetch("https://api.cloudinary.com/v1_1/sunnybd/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){return S(e.url)})).catch((function(e){console.log(e)}))}():k()}},"Sign Up"),o.a.createElement("h5",null,o.a.createElement(s.b,{to:"/signin"},"Already have an account?"))))};a(37);var g=function(){var e=Object(n.useContext)(w),t=(e.state,e.dispatch),a=Object(i.f)(),l=Object(n.useState)(""),c=Object(r.a)(l,2),u=c[0],m=c[1],p=Object(n.useState)(""),d=Object(r.a)(p,2),f=d[0],g=d[1];return o.a.createElement("div",{className:"mycard"},o.a.createElement("div",{className:"card auth-card input-field"},o.a.createElement("h2",null,"Instagram"),o.a.createElement("input",{type:"email",value:f,onChange:function(e){return g(e.target.value)},placeholder:"Email"}),o.a.createElement("input",{type:"password",value:u,onChange:function(e){return m(e.target.value)},placeholder:"Password"}),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(f)?fetch("https://insta-clone20.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:u,email:f})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?h.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),h.a.toast({html:"signedin sucess",classes:"#43a047 green darken-1"}),a.push("/"))})).catch((function(e){console.log(e)})):h.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})}},"Login"),o.a.createElement("h5",null,o.a.createElement(s.b,{to:"/signup"},"Don't have an account?"))))},E=a(22);a(38);var v=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(w),s=c.state,u=c.dispatch,p=Object(i.g)().userId,d=Object(n.useState)(!s||!s.following.includes(p)),h=Object(r.a)(d,2),f=h[0],g=h[1];return Object(n.useEffect)((function(){fetch("https://insta-clone20.herokuapp.com/user/".concat(p),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),console.log(a),o.a.createElement(o.a.Fragment,null,a?o.a.createElement("div",{className:"profile__and__gallary"},o.a.createElement("div",{className:"profile"},o.a.createElement("div",null,o.a.createElement("img",{className:"profile__img",src:a.user.pic})),o.a.createElement("div",{className:"profile__alldetails"},o.a.createElement("div",{className:"profile__name"},o.a.createElement("h4",null,a.user.name),o.a.createElement("h5",null,a.user.email)),o.a.createElement("div",{className:"profile__details"},o.a.createElement("h6",null,a.posts.length," posts"),o.a.createElement("h6",null,a.user.followers.length," followers"),o.a.createElement("h6",null,a.user.following.length," following")),f?o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){fetch("https://insta-clone20.herokuapp.com/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:p})}).then((function(e){return e.json()})).then((function(e){console.log(e),u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),l((function(t){return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:[].concat(Object(E.a)(t.user.followers),[e._id])})})})),g(!1)}))}},"Follow"):o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){fetch("https://insta-clone20.herokuapp.com/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:p})}).then((function(e){return e.json()})).then((function(e){console.log(e),u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),l((function(t){var a=t.user.followers.filter((function(t){return t!=e._id}));return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:a})})})),g(!0)}))}},"UnFollow"))),o.a.createElement("div",{className:"gallary"},a.posts.map((function(e){return o.a.createElement("img",{className:"item",key:e._id,src:e.photo,alt:e.title})})))):o.a.createElement("h2",null,"loading...!"))},b=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(m.a)(Object(m.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(m.a)(Object(m.a)({},e),{},{pic:t.payload.pic}):e};var y=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(w),i=c.state;return c.dispatch,Object(n.useEffect)((function(){fetch("https://insta-clone20.herokuapp.com/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),l(e.posts)}))}),[]),console.log(a),o.a.createElement("div",{className:"home"},a.map((function(e){return o.a.createElement("div",{className:"card home__card",key:e._id},o.a.createElement("h5",null,o.a.createElement(s.b,{to:"/profile/"+e.postedBy._id},e.postedBy.name)," ",e.postedBy._id==i._id&&o.a.createElement("i",{className:"material-icons delete__icon",onClick:function(){return t=e._id,void fetch("https://insta-clone20.herokuapp.com/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));l(t)}));var t}},"delete")),o.a.createElement("div",{className:"card__image"},o.a.createElement("img",{className:"post__image",src:e.photo})),o.a.createElement("div",{className:"card-content"},o.a.createElement("i",{className:"material-icons"},"favorite"),e.likes.includes(i._id)?o.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("https://insta-clone20.herokuapp.com/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){console.log(e)}))}},"thumb_down"):o.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("https://insta-clone20.herokuapp.com/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){console.log(e)}))}},"thumb_up"),o.a.createElement("h5",null,e.likes.length," likes"),o.a.createElement("h5",null,e.title),o.a.createElement("p",null,e.body),e.comments.map((function(e){return o.a.createElement("h6",{key:e._id},o.a.createElement("span",{className:"postedBy"},e.postedBy.name),e.text)})),o.a.createElement("form",{onSubmit:function(t){var n,o;t.preventDefault(),n=t.target[0].value,o=e._id,fetch("https://insta-clone20.herokuapp.com/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:o,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){console.log(e)})),t.target[0].value=""}},o.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))};a(39);var j=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),u=Object(r.a)(s,2),m=u[0],p=u[1],d=Object(n.useState)(""),f=Object(r.a)(d,2),g=f[0],E=f[1],v=Object(n.useState)(""),b=Object(r.a)(v,2),y=b[0],j=b[1];return Object(n.useEffect)((function(){y&&fetch("https://insta-clone20.herokuapp.com/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:l,body:m,pic:y})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?h.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(h.a.toast({html:"created post",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[y]),o.a.createElement("div",{className:"card input-field create__post"},o.a.createElement("input",{type:"text",placeholder:"title",value:l,onChange:function(e){return c(e.target.value)}}),o.a.createElement("input",{type:"text",placeholder:"body",value:m,onChange:function(e){return p(e.target.value)}}),o.a.createElement("div",{className:"file-field input-field"},o.a.createElement("div",{className:"btn waves-light "},o.a.createElement("span",null,"Upload Image"),o.a.createElement("input",{type:"file",onChange:function(e){return E(e.target.files[0])}})),o.a.createElement("div",{className:"file-path-wrapper"},o.a.createElement("input",{className:"file-path validate",type:"text"}))),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:function(){return function(){var e=new FormData;e.append("file",g),e.append("upload_preset","insta-clone"),e.append("cloud_name","sunnybd"),fetch("https://api.cloudinary.com/v1_1/sunnybd/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){return j(e.url)})).catch((function(e){console.log(e)}))}()}},"Submit"))};a(40);var _=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(w),i=c.state;return c.dispatch,Object(n.useEffect)((function(){fetch("https://insta-clone20.herokuapp.com/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),l(e.posts)}))}),[]),console.log(a),console.log(a),o.a.createElement("div",{className:"home"},a.map((function(e){return o.a.createElement("div",{className:"card home__card",key:e._id},o.a.createElement("h5",{className:"name__deleteIcon"},o.a.createElement(s.b,{to:"/profile/"+e.postedBy._id},o.a.createElement("div",{className:"postedBy__namewithimage"},o.a.createElement("img",{className:"postedBy__image",src:e.postedBy.pic,alt:""})," ",o.a.createElement("small",{className:"postedBy__name"}," ",e.postedBy.name)))," ",e.postedBy._id==i._id&&o.a.createElement("i",{className:"material-icons delete__icon",onClick:function(){return t=e._id,void fetch("https://insta-clone20.herokuapp.com/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));l(t)}));var t}},"delete")),o.a.createElement("div",{className:"card__image"},o.a.createElement("img",{className:"post__image",src:e.photo})),o.a.createElement("div",{className:"card-content"},o.a.createElement("i",{className:"material-icons"},"favorite"),e.likes.includes(i._id)?o.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("https://insta-clone20.herokuapp.com/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){console.log(e)}))}},"thumb_down"):o.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("https://insta-clone20.herokuapp.com/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){console.log(e)}))}},"thumb_up"),o.a.createElement("h5",null,e.likes.length," likes"),o.a.createElement("h5",null,e.title),o.a.createElement("p",null,e.body),e.comments.map((function(e){return o.a.createElement("h6",{key:e._id},o.a.createElement("span",{className:"postedBy"},e.postedBy.name),e.text)})),o.a.createElement("form",{onSubmit:function(t){var n,o;t.preventDefault(),n=t.target[0].value,o=e._id,fetch("https://insta-clone20.herokuapp.com/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:o,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){console.log(e)})),t.target[0].value=""}},o.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))},w=Object(n.createContext)(),O=function(){var e=Object(i.f)(),t=Object(n.useContext)(w),a=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?a({type:"USER",payload:t}):e.push("/signin")}),[]),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/"},o.a.createElement(_,null)),o.a.createElement(i.a,{path:"/signin"},o.a.createElement(g,null)),o.a.createElement(i.a,{path:"/signup"},o.a.createElement(f,null)),o.a.createElement(i.a,{exact:!0,path:"/profile"},o.a.createElement(p,null)),o.a.createElement(i.a,{path:"/create"},o.a.createElement(j,null)),o.a.createElement(i.a,{path:"/profile/:userId"},o.a.createElement(v,null)),o.a.createElement(i.a,{path:"/myfollowingspost"},o.a.createElement(y,null)))};var N=function(){var e=Object(n.useReducer)(b,null),t=Object(r.a)(e,2),a=t[0],l=t[1];return o.a.createElement(w.Provider,{value:{state:a,dispatch:l}},o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(u,null),o.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.53c786f3.chunk.js.map