(this["webpackJsonpfe-instagram"]=this["webpackJsonpfe-instagram"]||[]).push([[2],{13:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var a="http://localhost:3001",c="https://api.cloudinary.com/v1_1/pklevi/image/upload"},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var a=n(3),c=n(7),r=n(20),s=n(71),o=n(13),i=function(){var t=Object(c.a)(Object(a.a)().mark((function t(e){var n,c,i,l,d,b;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!1);case 2:if(n=Object(s.a)(e),c=n.exp,i=Date.now()/1e3,c>i){t.next=18;break}return l=window.localStorage.getItem("refreshToken"),t.next=9,r.a.post("".concat(o.b,"/api/auth/get-access-token"),{refreshToken:l},{headers:{"Content-Type":"application/json"}});case 9:return d=t.sent,t.next=12,d.json();case 12:if("oke"!==(b=t.sent).msg){t.next=17;break}u(b.token,b.refreshToken),t.next=18;break;case 17:return t.abrupt("return",!1);case 18:return t.abrupt("return",!0);case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(t,e){t&&e?(localStorage.setItem("accessToken",t),localStorage.setItem("refreshToken",e)):(localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"))}},23:function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i}));var a=function(t){return t.post},c=function(t){return t.detailPost},r=function(t){return t.comment},s=function(t){return t.notification},o=function(t){return t.message},i=function(t){return t.conversation}},30:function(t,e,n){"use strict";n.r(e),n.d(e,"socket",(function(){return M}));var a=n(0),c=n.n(a),r=n(39),s=n.n(r),o=n(34),i=(n(79),n(6));var u=function(){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current.style.width="100vw"}),[]),Object(i.jsx)("div",{children:Object(i.jsx)("div",{ref:t,className:"fixed top-0 left-0 h-[3px] w-[1px] bg-gray-700 transition-all duration-700 line_loading z-[100]"})})},l=n(45),d=n(66),b=n(5);var p=function(){return Object(l.a)().isAuthenticated?Object(i.jsx)(b.b,{}):Object(i.jsx)(b.a,{to:"/login"})},f=c.a.lazy((function(){return n.e(5).then(n.bind(null,114))})),j=c.a.lazy((function(){return n.e(15).then(n.bind(null,120))})),g=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,115))})),O=c.a.lazy((function(){return n.e(12).then(n.bind(null,117))})),h=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,118))})),x=c.a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,112))})),m=c.a.lazy((function(){return n.e(10).then(n.bind(null,119))})),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,113))})),I=c.a.lazy((function(){return n.e(11).then(n.bind(null,109))})),v=c.a.lazy((function(){return n.e(8).then(n.bind(null,116))})),S=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,111))}));var w=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(b.e,{children:Object(i.jsxs)(b.c,{element:Object(i.jsx)(p,{}),children:[Object(i.jsx)(b.c,{path:"/",element:Object(i.jsx)(S,{})}),Object(i.jsx)(b.c,{path:"/direct/inbox",element:Object(i.jsx)(k,{}),children:Object(i.jsx)(b.c,{path:":userId",element:Object(i.jsx)(k,{})})}),Object(i.jsx)(b.c,{path:"/explore",element:Object(i.jsx)(h,{})}),Object(i.jsx)(b.c,{path:"/profile",element:Object(i.jsx)(x,{})}),Object(i.jsx)(b.c,{path:"/story",element:Object(i.jsx)(O,{})}),Object(i.jsx)(b.c,{path:"/post/view/:idPost",exact:!0,element:Object(i.jsx)(g,{})}),Object(i.jsx)(b.c,{path:"/forgot-password",element:Object(i.jsx)(j,{})}),Object(i.jsx)(b.c,{path:"/settings",element:Object(i.jsx)(m,{})}),Object(i.jsx)(b.c,{path:"/post/comment/:idPost",element:Object(i.jsx)(f,{})})]})})}),Object(i.jsxs)(b.e,{children:[Object(i.jsx)(b.c,{path:"/login",element:Object(i.jsx)(v,{})}),Object(i.jsx)(b.c,{path:"/register",element:Object(i.jsx)(I,{})})]})]})};var T=function(){Object(a.useEffect)((function(){document.title="Instagram"}),[]);var t=Object(l.a)(),e=t.isLoading,n=t.initialize,c=t.isInitialized,r=Object(d.a)().initializeNotify;return Object(a.useEffect)((function(){n()}),[n]),Object(a.useEffect)((function(){r()}),[r]),Object(i.jsx)(i.Fragment,{children:c&&Object(i.jsxs)(i.Fragment,{children:[e?Object(i.jsx)(u,{}):"",Object(i.jsx)(o.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,limit:2,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1}),Object(i.jsx)(a.Suspense,{fallback:Object(i.jsx)(u,{}),children:Object(i.jsx)(w,{})})]})})},y=function(t){t&&t instanceof Function&&n.e(16).then(n.bind(null,110)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))},E=n(44),L=(n(88),n(74),n(11)),_=n(63),N=n(46),C=n(65),A=n(64),D=n(47),P=n(67),U=n(68),G={user:N.c,post:_.d,detailPost:C.b,comment:A.d,notification:D.c,message:P.b,conversation:U.b},F=Object(L.a)({reducer:G}),R=n(15),z=n(73),M=Object(z.a)("http://localhost:3001");s.a.render(Object(i.jsx)(R.a,{store:F,children:Object(i.jsx)(E.a,{children:Object(i.jsx)(T,{})})}),document.getElementById("root")),y()},45:function(t,e,n){"use strict";var a=n(46);e.a=function(){return Object(a.a)()}},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return S}));var a,c=n(4),r=n(26),s=n(3),o=n(7),i=n(11),u=n(15),l=n(14),d=n(34),b=n(0),p=n(30),f=n(13),j=n(20),g=Object(i.b)("user/init",function(){var t=Object(o.a)(Object(s.a)().mark((function t(e,n){var a,c,r,o,i;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,n.getState,c=n.rejectWithValue,t.prev=1,r=window.localStorage.getItem("accessToken"),t.t0=r,!t.t0){t.next=8;break}return t.next=7,Object(l.a)(r);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=19;break}return t.next=11,j.a.post("".concat(f.b,"/api/get-user"),{},{headers:{"x-auth-token":window.localStorage.getItem("accessToken")}});case 11:o=t.sent,i=o.data,a(v({isAuthenticated:!0,user:JSON.parse(i.user)})),p.socket.auth=JSON.parse(i.user),p.socket.emit("user-init",JSON.parse(i.user)),p.socket.connect(),t.next=21;break;case 19:return a(v({isAuthenticated:!1,user:null})),t.abrupt("return",c("Session expired, plz login to go go go"));case 21:t.next=26;break;case 23:t.prev=23,t.t1=t.catch(1),a(v({isAuthenticated:!1,user:null}));case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(i.b)("user/login",function(){var t=Object(o.a)(Object(s.a)().mark((function t(e,n){var a,c,o,i;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.dispatch,c=n.rejectWithValue,t.next=3,j.a.post("".concat(f.b,"/api/login"),Object(r.a)({},e));case 3:if(o=t.sent,i=o.data,!(o.status<200||o.status>=300)){t.next=7;break}return t.abrupt("return",c(i.message));case 7:Object(l.b)(i.token,i.refreshToken),i.user=JSON.parse(i.user),a(g()),a(I(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(i.b)("user/register",function(){var t=Object(o.a)(Object(s.a)().mark((function t(e,n){var a,c,o,i;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.dispatch,c=n.rejectWithValue,t.prev=1,t.next=4,j.a.post("".concat(f.b,"/api/register"),Object(r.a)({},e),{headers:{"Content-Type":"application/json"}});case 4:if(o=t.sent,i=o.data,!(o.status<200||o.status>=300)){t.next=8;break}return t.abrupt("return",c(i.message));case 8:Object(l.b)(i.token,i.refreshToken),i.user=JSON.parse(i.user),a(g()),a(I(i)),t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",c("Something went wrong, please try another time"));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n){return t.apply(this,arguments)}}()),x=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.user})),n=e.isAuthenticated,a=e.isInitialized,c=e.isLoading,r=Object(u.c)((function(t){return t.user.user?t.user.user:{}}));return{login:function(e){t(O(e))},initialize:Object(b.useCallback)((function(){t(g())}),[t]),register:function(e){t(h(e))},logout:function(){t(S())},isAuthenticated:n,isInitialized:a,isLoading:c,user:r}},m=Object(i.c)({name:"user",initialState:{user:{},isAuthenticated:!1,isInitialized:!1,status:null,isLoading:!1,hasError:!1,notifications:{newMessages:0,newNotification:0}},reducers:{LOGIN:function(t,e){t.user=e.payload.user,t.isAuthenticated=!0},INITIALIZE:function(t,e){t.isAuthenticated=e.payload.isAuthenticated,t.isInitialized=!0,t.user=e.payload.user},LOGOUT:function(t,e){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),t.user=null,t.isAuthenticated=!1}},extraReducers:(a={},Object(c.a)(a,O.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,O.fulfilled,(function(t){t.status="SUCCESS",t.isLoading=!1,d.b.success("Welcome back, ".concat(t.user.username?t.user.username:t.user.email," \ud83d\udd25\ud83d\udd25"))})),Object(c.a)(a,O.rejected,(function(t,e){t.status="FAILED",t.isLoading=!1,d.b.error(null===e||void 0===e?void 0:e.payload)})),Object(c.a)(a,g.pending,(function(t,e){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,g.fulfilled,(function(t,e){t.status="SUCCESS",t.isLoading=!1})),Object(c.a)(a,g.rejected,(function(t,e){t.status="FAILED",t.isLoading=!1,d.b.error(null===e||void 0===e?void 0:e.payload)})),a)}),k=m.actions,I=k.LOGIN,v=k.INITIALIZE,S=k.LOGOUT;e.c=m.reducer},47:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"e",(function(){return g})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return I}));var a,c=n(4),r=n(3),s=n(7),o=n(11),i=n(20),u=n(0),l=n(15),d=n(13),b=n(14),p=n(23),f="notification",j=Object(o.b)("".concat(f,"/getMyNotify"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.rejectWithValue,s=n.signal,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(b.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=20;break}return t.next=11,i.a.get("".concat(d.b,"/api/notification"),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:s});case 11:if(u=t.sent,!(l=u.data)){t.next=17;break}a(k(l)),t.next=18;break;case 17:return t.abrupt("return",c("Something went wrong"));case 18:t.next=21;break;case 20:return t.abrupt("return",c("Session expired, plz login to go go go"));case 21:t.next=26;break;case 23:return t.prev=23,t.t1=t.catch(1),t.abrupt("return",c("Something went wrong"));case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e,n){return t.apply(this,arguments)}}()),g=Object(o.b)("".concat(f,"/markAllRead"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.rejectWithValue,s=n.signal,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(b.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=20;break}return t.next=11,i.a.post("".concat(d.b,"/api/notification/markAllRead"),{},{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:s});case 11:if(u=t.sent,!u.data){t.next=17;break}a(v()),t.next=18;break;case 17:return t.abrupt("return",c("Something went wrong"));case 18:t.next=21;break;case 20:return t.abrupt("return",c("Session expired, plz login to go go go"));case 21:t.next=26;break;case 23:return t.prev=23,t.t1=t.catch(1),t.abrupt("return",c("Something went wrong"));case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(o.b)("".concat(f,"/checkNewNotify"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.rejectWithValue,s=n.signal,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(b.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=20;break}return t.next=11,i.a.post("".concat(d.b,"/api/notification/check-new"),{},{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:s});case 11:if(u=t.sent,!(l=u.data)){t.next=17;break}a(S(l.data)),t.next=18;break;case 17:return t.abrupt("return",c("Something went wrong"));case 18:t.next=21;break;case 20:return t.abrupt("return",c("Session expired, plz login to go go go"));case 21:t.next=26;break;case 23:return t.prev=23,t.t1=t.catch(1),t.abrupt("return",c("Something went wrong"));case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e,n){return t.apply(this,arguments)}}()),h=function(){var t=Object(l.b)(),e=Object(u.useCallback)((function(){t(O())}),[t]),n=Object(l.c)(p.e);return{notifications:n.notifications,isLoadingNotify:n.isLoadingNotify,statusNotify:n.statusNotify,checkNewNotify:n.checkNewNotify,initializeNotify:e}},x=Object(o.c)({name:f,initialState:{notifications:[],isLoadingNotify:!1,statusNotify:null,checkNewNotify:!1},reducers:{INITIALIZE_NOTIFICATION:function(t,e){t.notifications=e.payload},LOGOUT_SET_NOTIFY:function(t,e){t.notifications=[]},ADD_NOTIFY_REALTIME:function(t,e){t.notifications.push(e.payload)},MARK_ALL_READ:function(t){t.notifications.map((function(t){return!0===t.seen})),t.checkNewNotify=!1},CHECK_NEW_NOTIFY:function(t,e){t.checkNewNotify=e.payload}},extraReducers:(a={},Object(c.a)(a,j.pending,(function(t){t.statusNotify="PENDING",t.isLoadingNotify=!0})),Object(c.a)(a,j.fulfilled,(function(t){t.isLoadingNotify=!1,t.statusNotify="SUCCESS"})),Object(c.a)(a,j.rejected,(function(t){t.statusNotify="FAILED",t.isLoadingNotify=!1})),Object(c.a)(a,O.pending,(function(t){t.statusNotify="PENDING",t.isLoadingNotify=!0})),Object(c.a)(a,O.fulfilled,(function(t){t.isLoadingNotify=!1,t.statusNotify="SUCCESS"})),Object(c.a)(a,O.rejected,(function(t){t.statusNotify="FAILED",t.isLoadingNotify=!1})),a)}),m=x.actions,k=m.INITIALIZE_NOTIFICATION,I=m.LOGOUT_SET_NOTIFY,v=(m.ADD_NOTIFY_REALTIME,m.MARK_ALL_READ),S=m.CHECK_NEW_NOTIFY;e.c=x.reducer},63:function(t,e,n){"use strict";n.d(e,"c",(function(){return O})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return x})),n.d(e,"f",(function(){return m})),n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return E}));var a,c=n(4),r=n(3),s=n(26),o=n(7),i=n(11),u=n(0),l=n(15),d=n(23),b=n(34),p=n(14),f=n(13),j=n(20),g="post",O=Object(i.b)("".concat(g,"/create"),function(){var t=Object(o.a)(Object(r.a)().mark((function t(e,n){var a,c,o,i,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.rejectWithValue,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(p.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=20;break}return t.next=11,j.a.post("".concat(f.b,"/api/post/create"),Object(s.a)({},e),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")}});case 11:if(i=t.sent,!(u=i.data)){t.next=17;break}a(T(u)),t.next=18;break;case 17:return t.abrupt("return",c("Can't upload file, try again with other"));case 18:t.next=21;break;case 20:return t.abrupt("return",c("Token expired"));case 21:t.next=26;break;case 23:return t.prev=23,t.t1=t.catch(1),t.abrupt("return",c("Can't upload file, try again with other"));case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(i.b)("".concat(g,"/get_post_by_user_id"),function(){var t=Object(o.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,n.rejectWithValue,c=n.signal,t.prev=1,s=window.localStorage.getItem("accessToken"),t.t0=s,!t.t0){t.next=8;break}return t.next=7,Object(p.a)(s);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=16;break}return t.next=11,j.a.post("".concat(f.b,"/api/post/posts/user"),{userId:e},{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:c});case 11:o=t.sent,i=o.data,a(S(i)),t.next=17;break;case 16:a(S([]));case 17:t.next=22;break;case 19:t.prev=19,t.t1=t.catch(1),a(S([]));case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,n){return t.apply(this,arguments)}}()),x=Object(i.b)("".concat(g,"/init"),function(){var t=Object(o.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,n.signal,t.prev=1,c=window.localStorage.getItem("accessToken"),t.t0=c,!t.t0){t.next=8;break}return t.next=7,Object(p.a)(c);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=16;break}return t.next=11,j.a.get("".concat(f.b,"/api/post/feeds"),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")}});case 11:s=t.sent,o=s.data,a(w({post:o})),t.next=17;break;case 16:a(w({post:[]}));case 17:t.next=22;break;case 19:t.prev=19,t.t1=t.catch(1),a(w({post:[]}));case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,n){return t.apply(this,arguments)}}()),m=Object(i.b)("".concat(g,"/discover"),function(){var t=Object(o.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,i,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.signal,t.prev=1,s=window.localStorage.getItem("accessToken"),t.t0=s,!t.t0){t.next=8;break}return t.next=7,Object(p.a)(s);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=17;break}return o={headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:c},t.next=12,j.a.get("".concat(f.b,"/api/post/feeds"),o);case 12:i=t.sent,u=i.data,a(y(u)),t.next=18;break;case 17:a(y([]));case 18:t.next=23;break;case 20:t.prev=20,t.t1=t.catch(1),a(y([]));case 23:case"end":return t.stop()}}),t,null,[[1,20]])})));return function(e,n){return t.apply(this,arguments)}}()),k=function(){var t=Object(l.b)(),e=Object(l.c)(d.f),n=e.post,a=e.isLoading,c=e.status,r=e.checkUploadSuccess,s=e.postByUserID;return{post:n,status:c,isLoading:a,discoverPost:e.discoverPost,postByUserID:s,checkUploadSuccess:r,initializeNewFeedPost:Object(u.useCallback)((function(){t(x())}),[t])}},I=Object(i.c)({name:g,initialState:{post:[],isLoading:!1,status:null,checkUploadSuccess:!1,postByUserID:[],discoverPost:[]},reducers:{INITIALIZE_POST:function(t,e){t.post=e.payload.post},CREATE_POST:function(t,e){t.post.unshift(e.payload)},GET_POST_BY_USER_ID:function(t,e){t.postByUserID=e.payload},GET_DISCOVER_POST:function(t,e){t.discoverPost=e.payload},LOGOUT_SET_POST:function(t){t.post=[],t.isLoading=!1,t.status=null,t.checkUploadSuccess=!1,t.postByUserID=[],t.discoverPost=[]}},extraReducers:(a={},Object(c.a)(a,x.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,x.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,x.rejected,(function(t){t.status="FAILED",t.isLoading=!1})),Object(c.a)(a,O.pending,(function(t){t.status="PENDING",t.checkUploadSuccess=!1,t.isLoading=!0})),Object(c.a)(a,O.fulfilled,(function(t){t.checkUploadSuccess=!0,t.isLoading=!1,t.status="SUCCESS",b.b.success("Upload post successfully")})),Object(c.a)(a,O.rejected,(function(t,e){t.status="FAILED",t.isLoading=!1,t.checkUploadSuccess=!1,b.b.error(null===e||void 0===e?void 0:e.payload)})),Object(c.a)(a,h.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,h.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,h.rejected,(function(t,e){t.status="FAILED",t.isLoading=!1})),Object(c.a)(a,m.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,m.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,m.rejected,(function(t,e){t.status="FAILED",t.isLoading=!1})),a)}),v=I.actions,S=v.GET_POST_BY_USER_ID,w=v.INITIALIZE_POST,T=v.CREATE_POST,y=v.GET_DISCOVER_POST,E=v.LOGOUT_SET_POST;e.d=I.reducer},64:function(t,e,n){"use strict";n.d(e,"c",(function(){return g})),n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return h}));var a,c=n(4),r=n(3),s=n(26),o=n(7),i=n(11),u=n(20),l=n(15),d=n(30),b=n(13),p=n(14),f=n(23),j="comment_by_id_post",g=Object(i.b)("".concat(j,"/create"),function(){var t=Object(o.a)(Object(r.a)().mark((function t(e,n){var a,c,o,i,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.rejectWithValue,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(p.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=20;break}return t.next=11,u.a.post("".concat(b.b,"/api/comment/create"),Object(s.a)({},e),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")}});case 11:if(i=t.sent,!(l=i.data)){t.next=17;break}e.comment_root_id||e.reply_to?(l.comment_root_id=e.comment_root_id,a(v(l)),d.socket.emit("notify-comment_replied_on_post",l)):(a(I(l)),d.socket.emit("notify-comment_on_post",l)),t.next=18;break;case 17:return t.abrupt("return",c("Errors"));case 18:t.next=21;break;case 20:return t.abrupt("return",c("Something went wrong"));case 21:t.next=26;break;case 23:return t.prev=23,t.t1=t.catch(1),t.abrupt("return",c("Errors"));case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(i.b)("".concat(j,"/init"),function(){var t=Object(o.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.dispatch,c=n.signal,t.prev=1,s=window.localStorage.getItem("accessToken"),t.next=5,u.a.get("".concat(b.b,"/api/comment/post/").concat(e),{headers:{"Content-Type":"application/json","x-auth-token":s},signal:c});case 5:o=t.sent,i=o.data,a(k({comment:i.data})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a(k({comment:null}));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),h=function(){var t=Object(l.c)(f.a);return{comment:t.comment,isLoading:t.isLoading,status:t.status}},x=Object(i.c)({name:j,initialState:{comment:[],isLoading:!1,status:null,idLoadingCreate:!1},reducers:{INITIALIZE_COMMENT:function(t,e){t.comment=e.payload.comment},CREATE_COMMENT:function(t,e){t.comment.push(e.payload)},CREATE_COMMENT_REPLIED:function(t,e){t.comment.map((function(t){return t._id===e.payload.comment_root_id?Object(s.a)(Object(s.a)({},t),{},{comment_replied_count:t.comment_replied_count++,comment_replied:t.comment_replied.push({comment_id:{_id:e.payload._id,content:e.payload.content},user_id:e.payload.user_commented_id,username:e.payload.username,avatar:e.payload.avatar,reply_to:{user_id:e.payload.reply_to._id,username:e.payload.reply_to.username}})}):t}))}},extraReducers:(a={},Object(c.a)(a,O.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,O.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,O.rejected,(function(t){t.status="FAILED",t.isLoading=!1})),Object(c.a)(a,g.pending,(function(t){t.status="PENDING",t.isLoadingCreate=!0})),Object(c.a)(a,g.fulfilled,(function(t){t.isLoadingCreate=!1,t.status="SUCCESS"})),Object(c.a)(a,g.rejected,(function(t){t.status="FAILED",t.isLoadingCreate=!1})),a)}),m=x.actions,k=m.INITIALIZE_COMMENT,I=m.CREATE_COMMENT,v=m.CREATE_COMMENT_REPLIED;e.d=x.reducer},65:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return g}));var a,c=n(4),r=n(3),s=n(7),o=n(11),i=n(20),u=n(0),l=n(15),d=n(13),b=n(14),p=n(23),f="detail_post",j=Object(o.b)("".concat(f,"/init"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.rejectWithValue,s=n.signal,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(b.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=16;break}return t.next=11,i.a.get("".concat(d.b,"/api/post/one/").concat(e),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:s});case 11:u=t.sent,l=u.data,a(h({post:l})),t.next=17;break;case 16:return t.abrupt("return",c("Something went wrong"));case 17:t.next=22;break;case 19:t.prev=19,t.t1=t.catch(1),a(h({post:null}));case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,n){return t.apply(this,arguments)}}()),g=function(){var t=Object(l.b)(),e=Object(l.c)(p.c);return{post:e.post,isLoading:e.isLoading,status:e.status,initializeDetailPost:Object(u.useCallback)((function(){var e=t(j());return function(){e.abort()}}),[t])}},O=Object(o.c)({name:f,initialState:{post:{},isLoading:!1,status:null},reducers:{INITIALIZE_DETAIL_POST:function(t,e){t.post=e.payload.post}},extraReducers:(a={},Object(c.a)(a,j.pending,(function(t){t.isLoading=!0,t.status="PENDING"})),Object(c.a)(a,j.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,j.rejected,(function(t){t.isLoading=!1,t.status="FAILED"})),a)}),h=O.actions.INITIALIZE_DETAIL_POST;e.b=O.reducer},66:function(t,e,n){"use strict";var a=n(47);e.a=function(){return Object(a.b)()}},67:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return j}));var a,c=n(4),r=n(3),s=n(7),o=n(11),i=n(20),u=n(15),l=(n(30),n(13)),d=n(14),b=n(23),p="message",f=Object(o.b)("".concat(p,"/by_id"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u,b;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.signal,s=n.rejectWithValue,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(d.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=16;break}return t.next=11,i.a.get("".concat(l.b,"/api/get-messages/").concat(e),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:c});case 11:u=t.sent,b=u.data,a(O(b)),t.next=17;break;case 16:return t.abrupt("return",s("Token expired"));case 17:t.next=22;break;case 19:return t.prev=19,t.t1=t.catch(1),t.abrupt("return",s("Something went wrong......."));case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,n){return t.apply(this,arguments)}}()),j=(Object(o.b)("".concat(p,"/load-more-message"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.dispatch,a=n.signal,c=n.rejectWithValue,t.prev=1,s=window.localStorage.getItem("accessToken"),t.t0=s,!t.t0){t.next=8;break}return t.next=7,Object(d.a)(s);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=15;break}return t.next=11,i.a.get("".concat(l.b,"/api/get-more-messages/").concat(u.conversationId),{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},body:u.lastMessageDate,signal:a});case 11:o=t.sent,u=o.data,t.next=16;break;case 15:return t.abrupt("return",c("Token expired"));case 16:t.next=21;break;case 18:return t.prev=18,t.t1=t.catch(1),t.abrupt("return",c("Something went wrong......."));case 21:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(e,n){return t.apply(this,arguments)}}()),function(){var t=Object(u.c)(b.d);return{messages:t.messages,isLoading:t.isLoading,status:t.status}}),g=Object(o.c)({name:p,initialState:{messages:[],isLoading:!1,status:null},reducers:{GET_MESSAGE_BY_ID:function(t,e){t.messages=e.payload}},extraReducers:(a={},Object(c.a)(a,f.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,f.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,f.rejected,(function(t){t.status="FAILED",t.isLoading=!1})),a)}),O=g.actions.GET_MESSAGE_BY_ID;e.b=g.reducer},68:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return j}));var a,c=n(4),r=n(3),s=n(7),o=n(11),i=n(20),u=n(15),l=(n(30),n(13)),d=n(14),b=n(23),p="conversation",f=Object(o.b)("".concat(p,"/by_id"),function(){var t=Object(s.a)(Object(r.a)().mark((function t(e,n){var a,c,s,o,u,b;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.dispatch,c=n.signal,s=n.rejectWithValue,t.prev=1,o=window.localStorage.getItem("accessToken"),t.t0=o,!t.t0){t.next=8;break}return t.next=7,Object(d.a)(o);case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=16;break}return t.next=11,i.a.get("".concat(l.b,"/api/conversation/get"),{headers:{"Content-Type":"application/json","x-auth-token":window.localStorage.getItem("accessToken")},signal:c});case 11:u=t.sent,b=u.data,a(O(b)),t.next=17;break;case 16:return t.abrupt("return",s("Token expired"));case 17:t.next=22;break;case 19:return t.prev=19,t.t1=t.catch(1),t.abrupt("return",s("Something went wrong......."));case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,n){return t.apply(this,arguments)}}()),j=function(){var t=Object(u.c)(b.b);return{conversations:t.conversations,isLoading:t.isLoading,status:t.status}},g=Object(o.c)({name:p,initialState:{conversations:[],isLoading:!1},reducers:{GET_CONVERSATION_BY_ID:function(t,e){t.conversations=e.payload}},extraReducers:(a={},Object(c.a)(a,f.pending,(function(t){t.status="PENDING",t.isLoading=!0})),Object(c.a)(a,f.fulfilled,(function(t){t.isLoading=!1,t.status="SUCCESS"})),Object(c.a)(a,f.rejected,(function(t){t.status="FAILED",t.isLoading=!1})),a)}),O=g.actions.GET_CONVERSATION_BY_ID;e.b=g.reducer},74:function(t,e,n){},79:function(t,e,n){}},[[30,3,4]]]);
//# sourceMappingURL=main.098a0e18.chunk.js.map