(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e,t,a){e.exports=a(632)},242:function(e,t,a){},254:function(e,t){},256:function(e,t){},290:function(e,t){},291:function(e,t){},339:function(e,t,a){e.exports={buttonContainer:"_3Qu7-FNZs4hX4AHbrqjDca",textField:"_3SJQ7UUZ67_9PwDDkasrKY"}},340:function(e,t,a){e.exports={parentContainer:"_1Ih-vg8WaRB61mofBE2ZY7",avatarContainer:"_1grWBWA1P77ZwaCj9cDTUu",namesContainer:"sx18n-RKKmlEazNvCMEw0",name:"_3o5qhDcug0cNUVgt5bb-x5"}},341:function(e,t,a){e.exports={textfieldWrapper:"_2h4ebdOJV5Mk4Q3GZul-yW",textfieldInputWrapper:"_3dyvWVOntxVHJW5Vm051Tg",currency:"_2lFtD_Sxrcic-DFSuPiPib",textfieldError:"_1ZYNjZV2kc_huK_Gb_0wbJ",textfieldErrorMsg:"_1AoiqRpPGZw3fcq7nWMW3P"}},342:function(e,t,a){e.exports={button:"_3hmfWblIdMIldgbt_2khf6",loading:"_1vU2gOtOZJuyl-yHqZG9w_",primary:"_1XovXJ2tVDI1-jW7w4Xr9-",disabled:"_1jigJRgOJp1bcbJGaHCJkP"}},343:function(e,t,a){e.exports={appbar:"_2LrMtM3mzwQbX03Dhlga-n"}},344:function(e,t,a){e.exports={headerWrapper:"_1fhmppnGi2r70WtVVUqnLm",drawerContent:"_1SDszywupkiloCUMVtYWtS"}},345:function(e,t,a){e.exports={buttonContainer:"_3bXwvDVsRJgB0H8ofIy7Zn",textField:"_1BM_opF1rn32LgjQvBunEf"}},346:function(e,t,a){e.exports={card:"_2Sgvfp41rNZbWR3oGKBjVu",body:"_1TbbvzioMe8kYDq9Nie5nj"}},362:function(e,t,a){e.exports={parentView:"_5hocjXCjee0nVg3QLjLHk"}},366:function(e,t,a){e.exports={parentView:"_3YxQQpe6ZYZbfRK3PeG1L9"}},632:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),o=a.n(i),s=(a(242),a(12)),c=a(9),l=a(14),u=a(13),p=a(15),d=a(37),E=a(636),m=a(48),h=a(368),b=a(21),f=a.n(b),O=a(18),T=f.a.mark(N),g="POST",v=function(e){var t=new Headers;return t.append("Content-Type","application/json"),e&&t.append("x-access-token",e),t};function N(e){var t,a;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(console.error(e),t={message:"Something Went Wrong, try again later"},!e||!e.json){n.next=15;break}return n.prev=3,n.next=6,e.json();case 6:return a=n.sent,n.abrupt("return",a);case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",t);case 13:n.next=16;break;case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},T,this,[[3,10]])}var j=function(e,t){return fetch("".concat("http://localhost:8085/api","/users/authenticate"),{method:g,headers:v(),body:JSON.stringify({email:e,password:t})})},_=function(e){return fetch("".concat("http://localhost:8085/api","/users"),{method:g,headers:v(),body:JSON.stringify(e)})},I={LOGOUT_INTENT:"LOGOUT_INTENT",LOGOUT_INTENT_RESOLVED:"LOGOUT_INTENT_RESOLVED",LOGOUT_INTENT_REJECTED:"LOGOUT_INTENT_REJECTED",USER_CREATE_INTENT:"USER_CREATE_INTENT",USER_CREATE_INTENT_RESOLVED:"USER_CREATE_INTENT_RESOLVED",USER_CREATE_INTENT_REJECTED:"USER_CREATE_INTENT_REJECTED",AUTHENTICATE_INTENT:"AUTHENTICATE_INTENT",AUTHENTICATE_INTENT_RESOLVED:"AUTHENTICATE_INTENT_RESOLVED",AUTHENTICATE_INTENT_REJECTED:"AUTHENTICATE_INTENT_REJECTED",USER_UPDATE_INTENT:"USER_UPDATE_INTENT",USER_UPDATE_INTENT_RESOLVED:"USER_UPDATE_INTENT_RESOLVED",USER_UPDATE_INTENT_REJECTED:"USER_UPDATE_INTENT_REJECTED",USER_ACTIVATE_INTENT:"USER_ACTIVATE_INTENT",USER_ACTIVATE_INTENT_RESOLVED:"USER_ACTIVATE_INTENT_RESOLVED",USER_ACTIVATE_INTENT_REJECTED:"USER_ACTIVATE_INTENT_REJECTED"},y={Logout:function(){return{type:I.LOGOUT_INTENT}},Authenticate:function(e,t){return{type:I.AUTHENTICATE_INTENT,data:{email:e,password:t}}},AuthenticateResolved:function(e,t){return{type:I.AUTHENTICATE_INTENT_RESOLVED,response:e,payload:t}},AuthenticateRejected:function(e,t){return{type:I.AUTHENTICATE_INTENT_REJECTED,error:e,payload:t}},UserCreate:function(e,t,a,n){return{type:I.USER_CREATE_INTENT,data:{email:e,password:t,firstname:a,lastname:n}}},UserCreateResolved:function(e,t){return{type:I.USER_CREATE_INTENT_RESOLVED,response:e,payload:t}},UserCreateRejected:function(e,t){return{type:I.USER_CREATE_INTENT_REJECTED,error:e,payload:t}},UserUpdate:function(e){return{type:I.USER_UPDATE_INTENT,data:e}},UserUpdateResolved:function(e,t){return{type:I.USER_UPDATE_INTENT_RESOLVED,response:e,payload:t}},UserUpdateRejected:function(e,t){return{type:I.USER_UPDATE_INTENT_REJECTED,error:e,payload:t}},UserActivate:function(e){return{type:I.USER_ACTIVATE_INTENT,token:e}},UserActivateResolved:function(e,t){return{type:I.USER_ACTIVATE_INTENT_RESOLVED,response:e,payload:t}},UserActivateRejected:function(e,t){return{type:I.USER_ACTIVATE_INTENT_REJECTED,error:e,payload:t}}},C=a(235),k=a.n(C),A={NOTIFICATION_OPENED:"NOTIFICATION_OPENED",NOTIFICATION_ACTION:"NOTIFICATION_ACTION",NOTIFICATION_TIMEOUT:"NOTIFICATION_TIMEOUT"},R={OpenNotification:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return{type:A.NOTIFICATION_OPENED,notification:{_id:k.a.v4(),message:e,autoHide:t,actionMessage:a,actionMethod:n}}},OnNotificationTimeout:function(e){return{type:A.NOTIFICATION_TIMEOUT,id:e}},OnActionTap:function(e){return{type:A.NOTIFICATION_ACTION,id:e}}},w=function(e){return e.Notifications},U=f.a.mark(x),S=f.a.mark(D);function x(e){var t,a,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.data,r.prev=1,r.next=4,Object(O.b)(j,t.email,t.password);case 4:if(!(a=r.sent).ok){r.next=17;break}return r.t0=O.d,r.t1=y,r.t2=a,r.next=11,a.json();case 11:return r.t3=r.sent,r.t4=r.t1.AuthenticateResolved.call(r.t1,r.t2,r.t3),r.next=15,(0,r.t0)(r.t4);case 15:r.next=18;break;case 17:throw a;case 18:r.next=29;break;case 20:return r.prev=20,r.t5=r.catch(1),r.next=24,N(r.t5);case 24:return n=r.sent,r.next=27,Object(O.d)(R.OpenNotification(n.message,1500));case 27:return r.next=29,Object(O.d)(y.AuthenticateRejected(r.t5,n));case 29:case"end":return r.stop()}},U,this,[[1,20]])}function D(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.g)(I.AUTHENTICATE_INTENT,x);case 2:case"end":return e.stop()}},S,this)}var V=f.a.mark(P),L=f.a.mark(M);function P(e){var t,a,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.next=3,Object(O.e)(w);case 3:return a=r.sent,n=a.find(function(e){return e._id===t}),r.next=7,Object(O.b)(n.actionMethod);case 7:case"end":return r.stop()}},V,this)}function M(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.f)(A.NOTIFICATION_ACTION,P);case 2:case"end":return e.stop()}},L,this)}var J=f.a.mark(F),W=f.a.mark(H);function F(e){var t,a,n;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.data,r.prev=1,r.next=4,Object(O.b)(_,t);case 4:if(!(a=r.sent).ok){r.next=10;break}return r.next=8,Object(O.d)(R.OpenNotification("Check your email and validate your account :)",1500));case 8:r.next=11;break;case 10:throw a;case 11:r.next=22;break;case 13:return r.prev=13,r.t0=r.catch(1),r.next=17,N(r.t0);case 17:return n=r.sent,r.next=20,Object(O.d)(R.OpenNotification(n.message,1500));case 20:return r.next=22,Object(O.d)(y.AuthenticateRejected(r.t0,n));case 22:case"end":return r.stop()}},J,this,[[1,13]])}function H(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.g)(I.USER_CREATE_INTENT,F);case 2:case"end":return e.stop()}},W,this)}var B=f.a.mark(G);function G(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Object(O.c)(D),Object(O.c)(H),Object(O.c)(M)]);case 2:case"end":return e.stop()}},B,this)}var Z=a(49),K=a(17),q=a(236),Q=Object(m.c)({User:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.AUTHENTICATE_INTENT_RESOLVED:return Object(Z.a)({},e,t.payload);case I.LOGOUT_INTENT:return{};default:return e}},Notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.NOTIFICATION_OPENED:return Object(K.a)(Object(q.takeRight)(e,4)).concat([Object(Z.a)({},t.notification,{_open:!0})]);case A.NOTIFICATION_TIMEOUT:return e.map(function(e){return e._id===t.id?Object(Z.a)({},e,{_open:!1}):e});case A.NOTIFICATION_ACTION:return e.map(function(e){return e._id===t.id?Object(Z.a)({},e,{actionSelected:!0}):e});default:return e}}}),z=function(){function e(t){Object(s.a)(this,e),this.key=t}return Object(c.a)(e,null,[{key:"initialState",value:function(){var e=localStorage.getItem(this.key);if(!e)return{};try{return{User:JSON.parse(e)}}catch(t){return{}}}},{key:"middleware",value:function(){var e=this;return function(t){return function(a){return function(n){if(n.type===I.AUTHENTICATE_INTENT_RESOLVED){var r=a(n);return localStorage.setItem(e.key,JSON.stringify(t.getState().User)),r}if(n.type===I.LOGOUT_INTENT){var i=a(n);return localStorage.removeItem(e.key),i}return a(n)}}}}}]),e}(),X=m.d,Y=function(){var e=Object(h.a)(),t=Object(m.e)(Q,z.initialState(),X(Object(m.a)(e,z.middleware())));return e.run(G),t},$=a(635),ee=a(69),te=a(634),ae=a(637),ne=function(e){var t=e.component,a=e.user,n=Object(ee.a)(e,["component","user"]);return r.a.createElement(te.a,Object.assign({},n,{render:function(e){return a.token?r.a.createElement(t,e):r.a.createElement(ae.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},re=function(e){var t=e.component,a=e.user,n=Object(ee.a)(e,["component","user"]);return r.a.createElement(te.a,Object.assign({},n,{render:function(e){return a.token?r.a.createElement(ae.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(t,e)}}))},ie=function(e){return{user:e.User}},oe=Object($.a)(Object(d.b)(ie)(ne)),se=Object($.a)(Object(d.b)(ie)(re)),ce=a(2),le=a.n(ce),ue=a(348),pe=a.n(ue),de=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(pe.a,this.props)}}]),t}(r.a.Component),Ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.Notifications.map(function(t){return r.a.createElement(de,{key:t._id,open:t._open,message:r.a.createElement("span",null,t.message),action:t.actionMessage||null,autoHideDuration:t.autoHide,onClick:function(){return e.props.OnActionTap(t._id)},onClose:function(){return e.props.OnNotificationTimeout(t._id)}})}))}}],[{key:"propTypes",get:function(){return{Notifications:le.a.array,OnNotificationTimeout:le.a.func,OnActionTap:le.a.func}}}]),t}(r.a.Component),me=Object(d.b)(function(e){return{Notifications:e.Notifications}},function(e){return{OnNotificationTimeout:function(t){return e(R.OnNotificationTimeout(t))},OnActionTap:function(t){return e(R.OnActionTap(t))}}})(Ee),he=a(7),be=a(349),fe=a.n(be),Oe=a(350),Te=a.n(Oe),ge=a(100),ve=a.n(ge),Ne=a(351),je=a.n(Ne),_e=a(352),Ie=a.n(_e),ye=a(343),Ce=a.n(ye),ke=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).menuClick=e.menuClick.bind(Object(he.a)(Object(he.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"menuClick",value:function(){this.props.onMenuClick()}},{key:"render",value:function(){return r.a.createElement("div",{className:Ce.a.appbarWrapper},r.a.createElement(fe.a,{classes:{root:Ce.a.appbar},position:"relative"},r.a.createElement(Te.a,null,this.props.loggedIn?r.a.createElement(je.a,{color:"inherit","aria-label":"Menu",onClick:this.menuClick},r.a.createElement(Ie.a,null)):null,r.a.createElement(ve.a,{variant:"h6",color:"inherit"},"React Skeleton"))))}}]),t}(r.a.Component),Ae=a(340),Re=a.n(Ae),we=a(353),Ue=a.n(we),Se=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Re.a.parentContainer},r.a.createElement("div",{className:Re.a.avatarContainer},r.a.createElement(Ue.a,null,"GC"),r.a.createElement("div",{className:Re.a.namesContainer},r.a.createElement("p",{className:Re.a.name},this.props.user.firstname," ",this.props.user.lastname))))}}],[{key:"propTypes",get:function(){return{user:le.a.object}}},{key:"defaultProps",get:function(){return{user:{}}}}]),t}(r.a.Component),xe=a(354),De=a.n(xe),Ve=a(356),Le=a.n(Ve),Pe=a(355),Me=a.n(Pe),Je=a(357),We=a.n(Je),Fe=a(358),He=a.n(Fe),Be=a(360),Ge=a.n(Be),Ze=a(359),Ke=a.n(Ze),qe=a(344),Qe=a.n(qe),ze=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={drawer:{left:!1}},e.toggleDrawer=e.toggleDrawer.bind(Object(he.a)(Object(he.a)(e))),e.editUser=e.editUser.bind(Object(he.a)(Object(he.a)(e))),e.logout=e.logout.bind(Object(he.a)(Object(he.a)(e))),e.drawerMenuClick=e.drawerMenuClick.bind(Object(he.a)(Object(he.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,null,[{key:"propTypes",get:function(){return{user:le.a.object,loggedIn:le.a.bool,onEdit:le.a.func,onLogout:le.a.func}}}]),Object(c.a)(t,[{key:"toggleDrawer",value:function(e){this.setState({drawer:{left:e}})}},{key:"drawerMenuClick",value:function(){this.setState({drawer:{left:!0}})}},{key:"editUser",value:function(){this.toggleDrawer()}},{key:"logout",value:function(){this.toggleDrawer(!1),this.props.onLogout()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:Qe.a.headerWrapper},this.props.loggedIn?r.a.createElement(De.a,{open:this.state.drawer.left,onOpen:function(){return e.toggleDrawer(!0)},onClose:function(){return e.toggleDrawer(!1)}},r.a.createElement("div",{className:Qe.a.drawerContent},r.a.createElement(Se,{user:this.props.user}),r.a.createElement(Me.a,null),r.a.createElement(Le.a,null,r.a.createElement(We.a,{button:!0,onClick:this.logout},r.a.createElement(He.a,null,r.a.createElement(Ke.a,null)),r.a.createElement(Ge.a,{primary:"Logout"}))))):null,r.a.createElement(ke,{onMenuClick:this.drawerMenuClick,loggedIn:this.props.loggedIn},r.a.createElement("h2",null,"React Skeleton")))}}]),t}(r.a.Component),Xe=Object(d.b)(function(e){return{user:e.User.user,loggedIn:!!e.User.token}},function(e){return{onLogout:function(){e(y.Logout())}}})(ze),Ye=a(361),$e=a.n(Ye),et=[{id:1,name:"Pepe Argento",email:"pepeargento@gmail.com",address:"La rioja 123"},{id:2,name:"Jorge Pelongo",email:"jorge@gmail.com",address:"La rioja 321"},{id:3,name:"Rodolfo Sarlanga",email:"rodo@gmail.com",address:"Catamarca 321"}],tt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($e.a.CTable,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Address"))),r.a.createElement("tbody",null,et.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.address))}))))}}]),t}(r.a.Component),at=a(362),nt=a.n(at),rt=a(68),it=a(341),ot=a.n(it),st=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleKeyPress=e.handleKeyPress.bind(Object(he.a)(Object(he.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleKeyPress",value:function(e){this.props.onEnterPress&&"Enter"===e.key&&this.props.onEnterPress(e)}},{key:"render",value:function(){var e=this.props.error?ot.a.textfieldError:"",t=this.props.type||"text";return"currency"===t&&(t="text"),r.a.createElement("div",{className:"".concat(ot.a.textfieldWrapper," ").concat(e," ").concat(this.props.className)},r.a.createElement("div",{className:ot.a.textfieldErrorMsg},this.props.errorMessage),r.a.createElement("div",{className:"".concat(ot.a.textfieldInputWrapper," ").concat(this.props.type||"")},r.a.createElement("input",{type:t,name:this.props.name,onChange:this.props.onChange,onBlur:this.props.onChange,onKeyPress:this.handleKeyPress,className:this.props.type}),r.a.createElement("label",null,this.props.label)))}}]),t}(r.a.Component),ct=a(363),lt=a(342),ut=a.n(lt),pt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"":t,n=(e.primary,e.leftImage),i=e.loading,o=void 0!==i&&i,s=Object(ee.a)(e,["className","primary","leftImage","loading"]),c="".concat(ut.a.button," ").concat(o?ut.a.loading:"");return r.a.createElement("button",Object.assign({className:"".concat(c," ").concat(this.props.disabled?ut.a.disabled:""," ").concat(this.props.primary?ut.a.primary:""," ").concat(a)},s),n&&!this.props.loading&&r.a.createElement("img",{src:n,alt:""}),o&&r.a.createElement(ct.ClipLoader,{sizeUnit:"px",size:15,height:15,width:15,color:"#fff",loading:!0}),this.props.label)}}]),t}(r.a.Component),dt=a(365),Et=a.n(dt),mt=function(){function e(t){Object(s.a)(this,e),this.validations=t}return Object(c.a)(e,[{key:"validate",value:function(e){var t=this.valid();return this.validations.forEach(function(a){if(!t[a.field].isInvalid){var n=e[a.field].value.toString(),r=a.args||[];("string"===typeof a.method?Et.a[a.method]:a.method).apply(void 0,[n].concat(Object(K.a)(r),[e]))!==a.validWhen&&(t[a.field]={isInvalid:!0,message:a.message},t.isValid=!1)}}),t}},{key:"valid",value:function(){var e={};return this.validations.map(function(t){return e[t.field]={isInvalid:!1,message:""}}),Object(Z.a)({isValid:!0},e)}}]),e}(),ht=function(e){return[{field:e,method:"isEmail",validWhen:!0,message:"Invalid email address"}]},bt=function(e){return[{field:e,method:"matches",args:[/^(?=.*[A-Za-z])(?=.*\d).{8,}$/],validWhen:!0,message:"Password must have at least 8 characters, one number and one letter"}]},ft=function(e){return[{field:e,method:"isEmpty",validWhen:!1,message:"This field is required"}]},Ot=function(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?Object(K.a)(ft(e)).concat(Object(K.a)(ht(e))):Object(K.a)(ht(e))},Tt=function(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?Object(K.a)(ft(e)).concat(Object(K.a)(bt(e))):Object(K.a)(bt(e))},gt=a(345),vt=a.n(gt),Nt=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(he.a)(Object(he.a)(e))),e.isValid=e.isValid.bind(Object(he.a)(Object(he.a)(e))),e.submit=e.submit.bind(Object(he.a)(Object(he.a)(e))),e.state={email:{value:""},password:{value:""}},e.validator=new mt(Object(K.a)(Ot("email",!0)).concat(Object(K.a)(ft("password")))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){e.preventDefault(),this.setState(Object(rt.a)({},e.target.name,{value:e.target.value,dirty:!0}))}},{key:"isValid",value:function(){return this.validation.isValid&&!this.props.posting}},{key:"submit",value:function(){this.isValid()&&this.props.onSubmit({email:this.state.email.value,password:this.state.password.value})}},{key:"render",value:function(){return this.validation=this.validator.validate(this.state),r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement(st,{className:vt.a.textField,name:"email",label:"Email",errorMessage:this.validation.email.message,error:this.validation.email.isInvalid&&this.state.email.dirty,onChange:this.handleInputChange,onEnterPress:this.onSubmit}),r.a.createElement(st,{name:"password",label:"Password",errorMessage:this.validation.password.message,error:this.validation.password.isInvalid&&this.state.password.dirty,onChange:this.handleInputChange,onEnterPress:this.onSubmit,type:"password"})),r.a.createElement("article",{className:vt.a.buttonContainer},r.a.createElement(pt,{label:"Register New Account",onClick:this.props.onRegisterPressed}),r.a.createElement(pt,{label:"Log In",disabled:!this.isValid(),onClick:this.submit,primary:!0})))}}]),t}(r.a.Component);Nt.defaultProps={posting:!1};var jt=a(346),_t=a.n(jt),It=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:_t.a.card},r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.subtitle),r.a.createElement("div",{className:_t.a.body},this.props.children))}}]),t}(r.a.Component),yt=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this)))._register=e._register.bind(Object(he.a)(Object(he.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,null,[{key:"propTypes",get:function(){return{onLogin:le.a.func,onRegister:le.a.func,history:le.a.object.isRequired}}}]),Object(c.a)(t,[{key:"_register",value:function(){this.props.history.push("/register")}},{key:"render",value:function(){return r.a.createElement("div",{className:nt.a.parentView},r.a.createElement(It,{title:"Login",subtitle:"Log in With your SKEL Account"},r.a.createElement(Nt,{onSubmit:this.props.onLogin,onRegisterPressed:this._register})))}}]),t}(r.a.Component),Ct=Object($.a)(Object(d.b)(null,function(e){return{onLogin:function(t){var a=t.email,n=t.password;e(y.Authenticate(a,n))}}})(yt)),kt=a(366),At=a.n(kt),Rt=a(338),wt=a(339),Ut=a.n(wt),St=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleInputChange=e.handleInputChange.bind(Object(he.a)(Object(he.a)(e))),e.isValid=e.isValid.bind(Object(he.a)(Object(he.a)(e))),e.submit=e.submit.bind(Object(he.a)(Object(he.a)(e))),e.gotoLogin=e.gotoLogin.bind(Object(he.a)(Object(he.a)(e))),e.validator=new mt(Object(K.a)(Ot("email",!0)).concat(Object(K.a)(Tt("password",!0)),Object(K.a)(ft("firstname")),Object(K.a)(ft("lastname")))),e.state={email:{value:""},password:{value:""},firstname:{value:""},lastname:{value:""}},e}return Object(p.a)(t,e),Object(c.a)(t,null,[{key:"propTypes",get:function(){return{posting:le.a.bool,history:le.a.object,onSubmit:le.a.func}}}]),Object(c.a)(t,[{key:"handleInputChange",value:function(e){e.preventDefault(),this.setState(Object(rt.a)({},e.target.name,{value:e.target.value,dirty:!0}))}},{key:"isValid",value:function(){return this.validation.isValid&&!this.props.posting}},{key:"submit",value:function(){this.isValid()&&this.props.onSubmit({email:this.state.email.value,password:this.state.password.value,firstname:this.state.firstname.value,lastname:this.state.lastname.value})}},{key:"gotoLogin",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){return this.validation=this.validator.validate(this.state),r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement(st,{name:"email",label:"Email",errorMessage:this.validation.email.message,error:this.validation.email.isInvalid&&this.state.email.dirty,onChange:this.handleInputChange,onEnterPress:this.submit,className:Ut.a.textField}),r.a.createElement(st,{name:"password",label:"Password",errorMessage:this.validation.password.message,error:this.validation.password.isInvalid&&this.state.password.dirty,onChange:this.handleInputChange,onEnterPress:this.submit,className:Ut.a.textField,type:"password"}),r.a.createElement(st,{name:"firstname",label:"First Name",errorMessage:this.validation.firstname.message,error:this.validation.firstname.isInvalid&&this.state.firstname.dirty,onChange:this.handleInputChange,onEnterPress:this.submit,className:Ut.a.textField}),r.a.createElement(st,{name:"lastname",label:"Last Name",errorMessage:this.validation.lastname.message,error:this.validation.lastname.isInvalid&&this.state.lastname.dirty,onChange:this.handleInputChange,onEnterPress:this.submit,className:Ut.a.textField})),r.a.createElement("article",{className:Ut.a.buttonContainer},r.a.createElement(pt,{label:"Back to Log In",onClick:this.gotoLogin}),r.a.createElement(pt,{label:"Register Account",disabled:!this.isValid(),onClick:this.submit,primary:!0})))}}]),t}(r.a.Component),xt=Object(Rt.a)(St),Dt=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this)))._goBack=e._goBack.bind(Object(he.a)(Object(he.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,null,[{key:"propTypes",get:function(){return{onBack:le.a.func,onRegister:le.a.func,history:le.a.object.isRequired}}}]),Object(c.a)(t,[{key:"_goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return r.a.createElement("div",{className:At.a.parentView},r.a.createElement(It,{title:"Register",subtitle:"Register a New Account"},r.a.createElement(xt,{onBack:this._goBack,onSubmit:this.props.onRegister})))}}]),t}(r.a.Component),Vt=Object($.a)(Object(d.b)(null,function(e){return{onRegister:function(t){var a=t.email,n=t.password,r=t.firstname,i=t.lastname;e(y.UserCreate(a,n,r,i))}}})(Dt)),Lt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:Y()},r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(Xe,null),r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(oe,{exact:!0,path:"/",component:tt}),r.a.createElement(se,{exact:!0,path:"/login",component:Ct}),r.a.createElement(se,{exact:!0,path:"/register",component:Vt})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[237,2,1]]]);
//# sourceMappingURL=main.1fa32951.chunk.js.map