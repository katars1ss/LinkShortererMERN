(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(21),i=c.n(s),l=(c(29),c(30),c(6)),j=c(2),o=c(3),d=c.n(o),b=c(7),u=c(5),h=function(){return Object(a.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])};function O(){}var x=Object(a.createContext)({token:null,userId:null,login:O,logout:O,isAuthenticated:!1}),p=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(u.a)(r,2),i=s[0],l=s[1],o=h(),O=Object(j.g)(),p=Object(a.useContext)(x);return{loading:c,request:Object(a.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){var c,a,r,s,i,j=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>1&&void 0!==j[1]?j[1]:"GET",a=j.length>2&&void 0!==j[2]?j[2]:null,r=j.length>3&&void 0!==j[3]?j[3]:{},n(!0),e.prev=4,a&&(a=JSON.stringify(a),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:c,body:a,headers:r});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=15;break}throw 401===s.status&&(o("\u0427\u0430\u0441 \u0441\u0435\u0441\u0441\u0456\u0457 \u043c\u0438\u043d\u0443\u0432, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c"),p.logout(),O.push("/")),new Error(i.message||"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437");case 15:return n(!1),e.abrupt("return",i);case 19:throw e.prev=19,e.t0=e.catch(4),n(!1),l(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),[o,p,O]),error:i,clearError:Object(a.useCallback)((function(){return l(null)}),[])}},m=function(){var e=h(),t=Object(j.g)(),c=Object(a.useContext)(x),r=p().request,s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],o=i[1];Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var O=function(){var n=Object(b.a)(d.a.mark((function n(a){var s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==a.key&&"createLink"!==a.target.id){n.next=11;break}return n.prev=1,n.next=4,r("/api/link/generate","POST",{from:l},{Authorization:"Bearer ".concat(c.token)});case 4:s=n.sent,e("\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"),t.push("/detail/".concat(s.link._id)),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12 m10 offset-m1 l6 offset-l3 createpage_container",children:Object(n.jsx)("div",{className:"card light-blue darken-1",children:Object(n.jsxs)("div",{className:"card-content white-text",children:[Object(n.jsx)("span",{className:"card-title center-align createpage_title",children:"\u0421\u043a\u043e\u0440\u043e\u0442\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("i",{className:"material-icons prefix",children:"link"}),Object(n.jsx)("input",{id:"link",type:"url",className:"input_white",value:l,onChange:function(e){return o(e.target.value)},onKeyPress:O}),Object(n.jsx)("label",{htmlFor:"link",children:"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0456 \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c Enter"})]}),Object(n.jsx)("div",{className:"center-align",children:Object(n.jsx)("button",{id:"createLink",className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:O,children:"\u0421\u043a\u043e\u0440\u043e\u0442\u0438\u0442\u0438"})})]})})})})},f=function(){return Object(n.jsx)("div",{className:"page_preloader",children:Object(n.jsxs)("div",{className:"preloader-wrapper big active",children:[Object(n.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(n.jsx)("div",{className:"circle-clipper left",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"gap-patch",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"circle-clipper right",children:Object(n.jsx)("div",{className:"circle"})})]}),Object(n.jsxs)("div",{className:"spinner-layer spinner-yellow",children:[Object(n.jsx)("div",{className:"circle-clipper left",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"gap-patch",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"circle-clipper right",children:Object(n.jsx)("div",{className:"circle"})})]})]})})},v=function(e){var t=e.link;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"\u0414\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),Object(n.jsxs)("p",{children:["\u0421\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f: ",Object(n.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:t.to})]}),Object(n.jsxs)("div",{className:"old_link_container",children:[Object(n.jsx)("div",{className:"old_link_title",children:"\u041e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f:"}),Object(n.jsx)("div",{className:"old_link_a_container",children:Object(n.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",className:"old_link_a",children:t.from})})]}),Object(n.jsxs)("p",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0456\u0432 \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c: ",Object(n.jsx)("strong",{children:t.clicks})]}),Object(n.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f: ",Object(n.jsx)("strong",{children:new Date(t.date).toLocaleDateString()})]})]})},g=function(){var e=Object(a.useContext)(x).token,t=p(),c=t.request,r=t.loading,s=Object(a.useState)(null),i=Object(u.a)(s,2),l=i[0],o=i[1],h=Object(j.h)().id,O=Object(a.useCallback)(Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/link/".concat(h),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,o(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,h,c]);return Object(a.useEffect)((function(){O()}),[O]),r?Object(n.jsx)(f,{}):Object(n.jsx)(n.Fragment,{children:!r&&l&&Object(n.jsx)(v,{link:l})})},k=function(e){var t=e.links,c=p(),r=(c.loading,c.request),s=h(),i=Object(a.useContext)(x);if(!t.length)return Object(n.jsx)("h5",{className:"center",children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0438 \u043d\u0435\u043c\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u044c"});var j=function(){var e=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c=t.currentTarget.getAttribute("name"),!window.confirm("\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f?")){e.next=9;break}return e.next=6,r("/api/link/delete/"+c,"DELETE",{},{Authorization:"Bearer ".concat(i.token)});case 6:return s("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043e \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"),window.location.reload(),e.abrupt("return");case 9:s("\u0421\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u043e"),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("table",{className:"striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"linklist_table_top",children:[Object(n.jsx)("th",{children:"\u2116"}),Object(n.jsx)("th",{children:"\u041a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),Object(n.jsx)("th",{children:"\u041e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),Object(n.jsx)("th",{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f"})]})}),Object(n.jsx)("tbody",{children:t.slice(0).reverse().map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:Object(n.jsx)("div",{className:"linkslist_oldlink_inner",children:Object(n.jsx)("a",{href:e.to,target:"_blank",rel:"noopener noreferrer",className:"old_link_a",children:e.to})})}),Object(n.jsx)("td",{className:"linkslist_oldlink",children:Object(n.jsx)("div",{className:"linkslist_oldlink_inner",children:Object(n.jsx)("a",{href:e.from,target:"_blank",rel:"noopener noreferrer",className:"old_link_a",children:e.from})})}),Object(n.jsxs)("td",{className:"linkslist_buttons",children:[Object(n.jsx)("button",{className:"btn light-blue darken-1 waves-effect waves-light linklist_details",children:Object(n.jsx)(l.b,{to:"/detail/".concat(e._id),className:"linklist_details_open",children:"\u0414\u0435\u0442\u0430\u043b\u0456"})}),Object(n.jsx)("button",{className:"btn orange lighten-1 waves-effect waves-dark linklist_delete",onClick:j,name:e._id,children:Object(n.jsx)("i",{className:"large material-icons linklist_details_open",children:"delete"})})]})]},e._id)}))})]})},N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=p(),i=s.loading,l=s.request,j=Object(a.useContext)(x).token,o=Object(a.useCallback)(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/link","GET",null,{Authorization:"Bearer ".concat(j)});case 3:t=e.sent,r(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[j,l]);return Object(a.useEffect)((function(){o()}),[o]),i?Object(n.jsx)(f,{}):Object(n.jsx)(n.Fragment,{children:!i&&Object(n.jsx)(k,{links:c})})},w=c(14),_=c(13),C=c.p+"static/media/logo.6c281b5f.png",y=function(){var e=Object(a.useContext)(x),t=h(),c=p(),r=c.loading,s=c.request,i=c.error,l=c.clearError,j=Object(a.useState)({email:"",password:""}),o=Object(u.a)(j,2),O=o[0],m=o[1];Object(a.useEffect)((function(){t(i),l()}),[i,t,l]),Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var f=function(e){m(Object(_.a)(Object(_.a)({},O),{},Object(w.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(b.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/register","POST",Object(_.a)({},O));case 3:c=e.sent,t(c.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var c=Object(b.a)(d.a.mark((function c(n){var a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if("Enter"!==n.key&&"loginUser"!==n.target.id){c.next=11;break}return c.prev=1,c.next=4,s("/api/auth/login","POST",Object(_.a)({},O));case 4:a=c.sent,t(a.message),e.login(a.token,a.userId),c.next=11;break;case 9:c.prev=9,c.t0=c.catch(1);case 11:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col s12 m10 offset-m1 l6 offset-l3 center-align",children:[Object(n.jsx)("h1",{children:Object(n.jsx)("img",{src:C,alt:"SL1nk",className:"logo_img_big"})}),Object(n.jsxs)("div",{className:"card light-blue darken-1",children:[Object(n.jsxs)("div",{className:"card-content white-text",children:[Object(n.jsx)("span",{className:"card-title center-align",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("i",{className:"material-icons prefix",children:"email"}),Object(n.jsx)("input",{id:"email",type:"text",name:"email",className:"input_white",value:O.email,onChange:f,onKeyPress:g}),Object(n.jsx)("label",{htmlFor:"email",children:"\u0406\u043c\u0435\u0439\u043b"})]}),Object(n.jsxs)("div",{className:"input-field",children:[Object(n.jsx)("i",{className:"material-icons prefix",children:"lock"}),Object(n.jsx)("input",{id:"password",type:"password",name:"password",className:"input_white",value:O.password,onChange:f,onKeyPress:g}),Object(n.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"})]})]})]}),Object(n.jsxs)("div",{className:"card-action right-align",children:[Object(n.jsx)("button",{id:"loginUser",className:"btn yellow darken-2 waves-effect waves-light sign_in_btn",onClick:g,disabled:r,children:"\u0412\u0445\u0456\u0434"}),Object(n.jsx)("button",{className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:v,disabled:r,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]})]})]})})},S="userData",E=c(23),T=c.n(E),F=function(){var e=Object(j.g)(),t=Object(a.useContext)(x),c=function(c){c.preventDefault(),t.logout(),e.push("/")};return Object(n.jsx)("nav",{children:Object(n.jsx)("div",{className:"nav-wrapper light-blue darken-1 page_navbar",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("span",{className:"brand-logo",children:Object(n.jsx)("img",{src:C,alt:"SL1nk",className:"logo_img"})}),Object(n.jsx)("a",{href:"/","data-target":"mobile-demo",className:"sidenav-trigger",onClick:function(e){e.preventDefault();var t=document.querySelectorAll(".sidenav");T.a.Sidenav.init(t,{draggable:!0,preventScrolling:!0})},children:Object(n.jsx)("i",{className:"material-icons",children:"menu"})}),Object(n.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/create",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/links",children:"\u041c\u043e\u0457 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",onClick:c,children:"\u0412\u0438\u0439\u0442\u0438"})})]}),Object(n.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/create",className:"sidenav-close",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{to:"/links",className:"sidenav-close",children:"\u041c\u043e\u0457 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",className:"sidenav-close",onClick:c,children:"\u0412\u0438\u0439\u0442\u0438"})})]})]})})})};var I=function(){var e=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(null),o=Object(u.a)(j,2),d=o[0],b=o[1],h=Object(a.useCallback)((function(e,t){n(e),b(t),localStorage.setItem(S,JSON.stringify({userId:t,token:e}))}),[]),O=Object(a.useCallback)((function(){n(null),b(null),localStorage.removeItem(S)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(S));e&&e.token&&h(e.token,e.userId),l(!0)}),[h]),{login:h,logout:O,token:c,userId:d,ready:i}}(),t=e.token,c=e.login,r=e.logout,s=e.userId,i=e.ready,o=!!t,d=function(e){return e?Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/links",exact:!0,children:Object(n.jsx)(N,{})}),Object(n.jsx)(j.b,{path:"/create",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(j.b,{path:"/detail/:id",exact:!0,children:Object(n.jsx)(g,{})}),Object(n.jsx)(j.a,{to:"/create"})]}):Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/",exact:!0,children:Object(n.jsx)(y,{})}),Object(n.jsx)(j.a,{to:"/"})]})}(o);return i?Object(n.jsx)(x.Provider,{value:{token:t,login:c,logout:r,userId:s,isAuthenticated:o},children:Object(n.jsxs)(l.a,{children:[o&&Object(n.jsx)(F,{}),Object(n.jsx)("div",{className:"container",children:d})]})}):Object(n.jsx)(f,{})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.23bea484.chunk.js.map