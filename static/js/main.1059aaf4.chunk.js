(this.webpackJsonptodolistclone=this.webpackJsonptodolistclone||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(18),s=c.n(a),i=c(0),j=function(e){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("nav",{children:Object(i.jsx)("div",{className:"logo"})})})},r=c(5),d=c(13),l=function(e){e.selectedTab;var t=e.setSelectedTab;return Object(i.jsxs)("div",{className:"sidebar",children:[Object(i.jsxs)("div",{className:"active",onClick:function(){return t("INBOX")},children:[Object(i.jsx)(d.a,{className:"icon"}),"Inbox"]}),Object(i.jsxs)("div",{onClick:function(){return t("TODAY")},children:[Object(i.jsx)(d.c,{className:"icon"}),"Today"]}),Object(i.jsxs)("div",{onClick:function(){return t("NEXT_7")},children:[Object(i.jsx)(d.b,{className:"icon"}),"Next 7 days"]})]})},b=c(17),o=c(19),O=c.n(o),u=(c(37),c(12)),x=c(20),h=c(21),f=c(22),N=c(23),m="dd/MM/yyyy";function v(e,t,c){return Object(u.a)(e,t,{locale:c})}var k=function(e){var t=e.onCancel,c=e.onAddTask,a=Object(n.useState)(""),s=Object(r.a)(a,2),j=s[0],d=s[1],l=Object(n.useState)(null),b=Object(r.a)(l,2),o=b[0],x=b[1];return Object(i.jsxs)("div",{className:"add-task-dialog",children:[Object(i.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)}}),Object(i.jsxs)("div",{className:"add-task-actions-container",children:[Object(i.jsxs)("div",{className:"btns-container",children:[Object(i.jsx)("button",{className:"add-btn",onClick:function(){c(j,o),t(),d("")},children:"Add Task"}),Object(i.jsx)("button",{className:"cancel-btn",onClick:function(){t(),d("")},children:"Cancel"})]}),Object(i.jsx)("div",{className:"icon-container",children:Object(i.jsx)(O.a,{onDayChange:function(e){return x(e)},placeholder:"".concat(Object(u.a)(new Date,m)),formatDate:v,format:m,dayPickerProps:{modifiers:{disabled:[{before:new Date}]}}})})]})]})},T={INBOX:"Inbox",TODAY:"Today",NEXT_7:"Next 7 days"},p=function(e){var t=e.selectedTab,c=e.tasks,n=Object(b.a)(c);return"NEXT_7"===t&&(n=n.filter((function(e){return Object(x.a)(e.date,new Date)&&Object(h.a)(e.date,Object(f.a)(new Date,7))}))),"TODAY"===t&&(n=n.filter((function(e){return Object(N.a)(e.date)}))),Object(i.jsx)("div",{className:"task-items-container",children:n.map((function(e){return Object(i.jsxs)("div",{className:"task-item",children:[Object(i.jsx)("p",{children:e.text}),Object(i.jsxs)("p",{children:[" ",Object(u.a)(new Date(e.date),m)]})]})}))})},y=function(e){var t=e.selectedTab,c=Object(n.useState)(!1),a=Object(r.a)(c,2),s=a[0],j=a[1],d=Object(n.useState)([]),l=Object(r.a)(d,2),o=l[0],O=l[1];return Object(i.jsxs)("div",{className:"tasks",children:[Object(i.jsx)("h1",{children:T[t]}),"INBOX"===t?Object(i.jsxs)("div",{className:"add-task-btn",onClick:function(){return j(!s)},children:[Object(i.jsx)("span",{className:"plus",children:"+"}),Object(i.jsx)("span",{className:"add-task-text",children:"Add Task"})]}):null,s&&Object(i.jsx)(k,{onAddTask:function(e,t){var c={text:e,date:t||new Date};O((function(e){return[].concat(Object(b.a)(e),[c])}))},onCancel:function(){return j(!1)}}),o.length>0?Object(i.jsx)(p,{tasks:o,selectedTab:t}):Object(i.jsx)("p",{children:"No tasks yet"})]})},C=function(e){var t=Object(n.useState)("INBOX"),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(i.jsxs)("section",{className:"content",children:[Object(i.jsx)(l,{selectedTab:a,setSelectedTab:s}),Object(i.jsx)(y,{selectedTab:a})]})},D=(c(38),function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(C,{})]})});s.a.render(Object(i.jsx)(D,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1059aaf4.chunk.js.map