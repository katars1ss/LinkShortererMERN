(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(24),i=n.n(s),l=(n(32),n(33),n(6)),o=n(2),j=n(3),d=n.n(j),b=n(7),u=n(5),h=function(){return Object(a.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])};function O(){}var x=Object(a.createContext)({token:null,userId:null,login:O,logout:O,isAuthenticated:!1}),f=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(u.a)(r,2),i=s[0],l=s[1],j=h(),O=Object(o.g)(),f=Object(a.useContext)(x);return{loading:n,request:Object(a.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,r,s,i,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{},c(!0),e.prev=4,a&&(a=JSON.stringify(a),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:a,headers:r});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=15;break}throw 401===s.status&&(j("\u0427\u0430\u0441 \u0441\u0435\u0441\u0441\u0456\u0457 \u043c\u0438\u043d\u0443\u0432, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c"),f.logout(),O.push("/")),new Error(i.message||"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437");case 15:return c(!1),e.abrupt("return",i);case 19:throw e.prev=19,e.t0=e.catch(4),c(!1),l(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),[j,f,O]),error:i,clearError:Object(a.useCallback)((function(){return l(null)}),[])}},p=function(){var e=h(),t=Object(o.g)(),n=Object(a.useContext)(x),r=f().request,s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],j=i[1];Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var O=function(){var c=Object(b.a)(d.a.mark((function c(a){var s;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if("Enter"!==a.key&&"createLink"!==a.target.id){c.next=11;break}return c.prev=1,c.next=4,r("/api/link/generate","POST",{from:l},{Authorization:"Bearer ".concat(n.token)});case 4:s=c.sent,e("\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"),t.push("/detail/".concat(s.link._id)),c.next=11;break;case 9:c.prev=9,c.t0=c.catch(1);case 11:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12 m10 offset-m1 l6 offset-l3 createpage_container",children:Object(c.jsx)("div",{className:"card light-blue darken-1",children:Object(c.jsxs)("div",{className:"card-content white-text",children:[Object(c.jsx)("span",{className:"card-title center-align createpage_title",children:"\u0421\u043a\u043e\u0440\u043e\u0442\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"material-icons prefix",children:"link"}),Object(c.jsx)("input",{id:"link",type:"url",className:"input_white",value:l,onChange:function(e){return j(e.target.value)},onKeyPress:O}),Object(c.jsx)("label",{htmlFor:"link",children:"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0456 \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c Enter"})]}),Object(c.jsx)("div",{className:"center-align",children:Object(c.jsx)("button",{id:"createLink",className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:O,children:"\u0421\u043a\u043e\u0440\u043e\u0442\u0438\u0442\u0438"})})]})})})})},m=function(){return Object(c.jsx)("div",{className:"page_preloader",children:Object(c.jsxs)("div",{className:"preloader-wrapper big active",children:[Object(c.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(c.jsx)("div",{className:"circle-clipper left",children:Object(c.jsx)("div",{className:"circle"})}),Object(c.jsx)("div",{className:"gap-patch",children:Object(c.jsx)("div",{className:"circle"})}),Object(c.jsx)("div",{className:"circle-clipper right",children:Object(c.jsx)("div",{className:"circle"})})]}),Object(c.jsxs)("div",{className:"spinner-layer spinner-yellow",children:[Object(c.jsx)("div",{className:"circle-clipper left",children:Object(c.jsx)("div",{className:"circle"})}),Object(c.jsx)("div",{className:"gap-patch",children:Object(c.jsx)("div",{className:"circle"})}),Object(c.jsx)("div",{className:"circle-clipper right",children:Object(c.jsx)("div",{className:"circle"})})]})]})})},v=function(e){var t=e.link;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"\u0414\u0435\u0442\u0430\u043b\u0456 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),Object(c.jsxs)("p",{children:["\u0421\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f: ",Object(c.jsx)("a",{href:t.to,target:"_blank",rel:"noopener noreferrer",children:t.to})]}),Object(c.jsxs)("div",{className:"old_link_container",children:[Object(c.jsx)("div",{className:"old_link_title",children:"\u041e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f:"}),Object(c.jsx)("div",{className:"old_link_a_container",children:Object(c.jsx)("a",{href:t.from,target:"_blank",rel:"noopener noreferrer",className:"old_link_a",children:t.from})})]}),Object(c.jsxs)("p",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0456\u0432 \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c: ",Object(c.jsx)("strong",{children:t.clicks})]}),Object(c.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f: ",Object(c.jsx)("strong",{children:new Date(t.date).toLocaleDateString()})]})]})},g=function(){var e=Object(a.useContext)(x).token,t=f(),n=t.request,r=t.loading,s=Object(a.useState)(null),i=Object(u.a)(s,2),l=i[0],j=i[1],h=Object(o.h)().id,O=Object(a.useCallback)(Object(b.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("/api/link/".concat(h),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:c=t.sent,j(c),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,h,n]);return Object(a.useEffect)((function(){O()}),[O]),r?Object(c.jsx)(m,{}):Object(c.jsx)(c.Fragment,{children:!r&&l&&Object(c.jsx)(v,{link:l})})},k=n(21),w=function(e){var t=e.links,n=e.onSort,a=e.onDelete,r=e.sortDirection;f().loading;return t.length?Object(c.jsxs)("table",{className:"striped",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"linklist_table_top",children:[Object(c.jsx)("th",{children:Object(c.jsxs)("button",{className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:function(e){n("index",e)},children:["\u2116",Object(c.jsx)("i",{className:"material-icons prefix table_sort_arrow",children:"arrow_drop_down"})]})}),Object(c.jsx)("th",{children:Object(c.jsxs)("button",{className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:function(e){n("to",e)},children:["\u041a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",Object(c.jsx)("i",{className:"material-icons prefix table_sort_arrow"})]})}),Object(c.jsx)("th",{children:Object(c.jsxs)("button",{className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:function(e){n("from",e)},children:["\u041e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",Object(c.jsx)("i",{className:"material-icons prefix table_sort_arrow"})]})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{className:"btn grey lighten-4 black-text waves-effect waves-dark",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f"})})]})}),Object(c.jsx)("tbody",{children:t.slice(0).reverse().map((function(e,n){switch(r){case"ascending":n+=1;break;case"descending":n=t.length-n}return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:Object(c.jsx)("div",{className:"linkslist_oldlink_inner",children:Object(c.jsx)("a",{href:e.to,target:"_blank",rel:"noopener noreferrer",className:"old_link_a",children:e.to})})}),Object(c.jsx)("td",{className:"linkslist_oldlink",children:Object(c.jsx)("div",{className:"linkslist_oldlink_inner",children:Object(c.jsx)("a",{href:e.from,target:"_blank",rel:"noopener noreferrer",className:"old_link_a",children:e.from})})}),Object(c.jsxs)("td",{className:"linkslist_buttons",children:[Object(c.jsx)("button",{className:"btn light-blue darken-1 waves-effect waves-light linklist_details",children:Object(c.jsx)(l.b,{to:"/detail/".concat(e._id),className:"linklist_details_open",children:"\u0414\u0435\u0442\u0430\u043b\u0456"})}),Object(c.jsx)("button",{className:"btn orange lighten-1 waves-effect waves-dark linklist_delete",onClick:function(){a(e._id)},name:e._id,children:Object(c.jsx)("i",{className:"large material-icons linklist_details_open",children:"delete"})})]})]},e._id)}))})]}):Object(c.jsx)("h5",{className:"center",children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0438 \u043d\u0435\u043c\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u044c"})},N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)("ascending"),O=Object(u.a)(j,2),p=O[0],v=O[1],g=f(),N=g.loading,_=g.request,y=Object(a.useContext)(x).token,S=h(),C=Object(a.useCallback)(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("/api/link","GET",null,{Authorization:"Bearer ".concat(y)});case 3:t=e.sent,r(t),o(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))),[y,_]),E=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f?")){e.next=8;break}return e.next=5,_("/api/link/delete/"+t,"DELETE",{},{Authorization:"Bearer ".concat(y)});case 5:return S("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043e \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0435 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"),r(n.filter((function(e){return e._id!==t}))),e.abrupt("return");case 8:S("\u0421\u043a\u0430\u0441\u043e\u0432\u0430\u043d\u043e"),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(d.a.mark((function e(t,c){var a,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=p,s=Object(k.a)(n),i=Object(k.a)(l),"arrow_drop_up","arrow_drop_down",document.querySelectorAll("tr.linklist_table_top i").forEach((function(e){e.innerHTML=""})),"ascending"!==a?(a="ascending",c.target.querySelector("i").innerHTML="arrow_drop_down"):(a="descending",c.target.querySelector("i").innerHTML="arrow_drop_up"),v(a),"index"!==t){e.next=19;break}e.t0=p,e.next="ascending"===e.t0?13:"descending"===e.t0?15:17;break;case 13:return i.sort((function(e,t){return e._id<t._id?1:-1})),e.abrupt("break",17);case 15:return i.sort((function(e,t){return e._id>t._id?1:-1})),e.abrupt("break",17);case 17:return r(i),e.abrupt("return");case 19:e.t1=p,e.next="ascending"===e.t1?22:"descending"===e.t1?24:26;break;case 22:return s.sort((function(e,n){return e[t]>n[t]?1:-1})),e.abrupt("break",26);case 24:return s.sort((function(e,n){return e[t]<n[t]?1:-1})),e.abrupt("break",26);case 26:r(s),e.next=32;break;case 29:e.prev=29,e.t2=e.catch(0),console.log(e.t2);case 32:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){C()}),[C]),N?Object(c.jsx)(m,{}):Object(c.jsx)(c.Fragment,{children:!N&&Object(c.jsx)(w,{links:n,sortDirection:p,onSort:T,onDelete:E})})},_=n(16),y=n(14),S=n.p+"static/media/logo.6c281b5f.png",C=function(){var e=Object(a.useContext)(x),t=h(),n=f(),r=n.loading,s=n.request,i=n.error,l=n.clearError,o=Object(a.useState)({email:"",password:""}),j=Object(u.a)(o,2),O=j[0],p=j[1];Object(a.useEffect)((function(){t(i),l()}),[i,t,l]),Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var m=function(e){p(Object(y.a)(Object(y.a)({},O),{},Object(_.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/register","POST",Object(y.a)({},O));case 3:n=e.sent,t(n.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var n=Object(b.a)(d.a.mark((function n(c){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==c.key&&"loginUser"!==c.target.id){n.next=11;break}return n.prev=1,n.next=4,s("/api/auth/login","POST",Object(y.a)({},O));case 4:a=n.sent,t(a.message),e.login(a.token,a.userId),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col s12 m10 offset-m1 l6 offset-l3 center-align",children:[Object(c.jsx)("h1",{children:Object(c.jsx)("img",{src:S,alt:"SL1nk",className:"logo_img_big"})}),Object(c.jsxs)("div",{className:"card light-blue darken-1",children:[Object(c.jsxs)("div",{className:"card-content white-text",children:[Object(c.jsx)("span",{className:"card-title center-align",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"material-icons prefix",children:"email"}),Object(c.jsx)("input",{id:"email",type:"text",name:"email",className:"input_white",value:O.email,onChange:m,onKeyPress:g}),Object(c.jsx)("label",{htmlFor:"email",children:"\u0406\u043c\u0435\u0439\u043b"})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("i",{className:"material-icons prefix",children:"lock"}),Object(c.jsx)("input",{id:"password",type:"password",name:"password",className:"input_white",value:O.password,onChange:m,onKeyPress:g}),Object(c.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"})]})]})]}),Object(c.jsxs)("div",{className:"card-action right-align",children:[Object(c.jsx)("button",{id:"loginUser",className:"btn yellow darken-2 waves-effect waves-light sign_in_btn",onClick:g,disabled:r,children:"\u0412\u0445\u0456\u0434"}),Object(c.jsx)("button",{className:"btn grey lighten-4 black-text waves-effect waves-dark",onClick:v,disabled:r,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]})]})]})})},E="userData",T=n(26),F=n.n(T),I=function(){var e=Object(o.g)(),t=Object(a.useContext)(x),n=function(n){n.preventDefault(),t.logout(),e.push("/")};return Object(c.jsx)("nav",{children:Object(c.jsx)("div",{className:"nav-wrapper light-blue darken-1 page_navbar",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("span",{className:"brand-logo",children:Object(c.jsx)("img",{src:S,alt:"SL1nk",className:"logo_img"})}),Object(c.jsx)("a",{href:"/","data-target":"mobile-demo",className:"sidenav-trigger",onClick:function(e){e.preventDefault();var t=document.querySelectorAll(".sidenav");F.a.Sidenav.init(t,{draggable:!0,preventScrolling:!0})},children:Object(c.jsx)("i",{className:"material-icons",children:"menu"})}),Object(c.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.c,{to:"/create",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.c,{to:"/links",children:"\u041c\u043e\u0457 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",onClick:n,children:"\u0412\u0438\u0439\u0442\u0438"})})]}),Object(c.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.c,{to:"/create",className:"sidenav-close",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.c,{to:"/links",className:"sidenav-close",children:"\u041c\u043e\u0457 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",className:"sidenav-close",onClick:n,children:"\u0412\u0438\u0439\u0442\u0438"})})]})]})})})};var D=function(){var e=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(a.useState)(null),j=Object(u.a)(o,2),d=j[0],b=j[1],h=Object(a.useCallback)((function(e,t){c(e),b(t),localStorage.setItem(E,JSON.stringify({userId:t,token:e}))}),[]),O=Object(a.useCallback)((function(){c(null),b(null),localStorage.removeItem(E)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(E));e&&e.token&&h(e.token,e.userId),l(!0)}),[h]),{login:h,logout:O,token:n,userId:d,ready:i}}(),t=e.token,n=e.login,r=e.logout,s=e.userId,i=e.ready,j=!!t,d=function(e){return e?Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/links",exact:!0,children:Object(c.jsx)(N,{})}),Object(c.jsx)(o.b,{path:"/create",exact:!0,children:Object(c.jsx)(p,{})}),Object(c.jsx)(o.b,{path:"/detail/:id",exact:!0,children:Object(c.jsx)(g,{})}),Object(c.jsx)(o.a,{to:"/create"})]}):Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/",exact:!0,children:Object(c.jsx)(C,{})}),Object(c.jsx)(o.a,{to:"/"})]})}(j);return i?Object(c.jsx)(x.Provider,{value:{token:t,login:n,logout:r,userId:s,isAuthenticated:j},children:Object(c.jsxs)(l.a,{children:[j&&Object(c.jsx)(I,{}),Object(c.jsx)("div",{className:"container",children:d})]})}):Object(c.jsx)(m,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),L()}},[[39,1,2]]]);
//# sourceMappingURL=main.2ef1c12b.chunk.js.map