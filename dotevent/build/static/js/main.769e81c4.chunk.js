(this.webpackJsonpdotevent=this.webpackJsonpdotevent||[]).push([[0],{50:function(e,c,t){},52:function(e,c,t){},77:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(16),i=t.n(n),r=(t(50),t(7)),j=t.p+"static/media/logo.654883a6.svg",l=t.p+"static/media/search.a6212a28.svg",d=t.p+"static/media/calender-icon.ede2b647.svg",h=t.p+"static/media/twitter-logo.ebc02059.svg",o=(t(51),t(23)),b=t(32),O=t(18),x=t.p+"static/media/Frame.007dd476.png",m=t(21),p=t(13),u=t(35),v=(t(52),t(1));var N=function(){return Object(v.jsx)("section",{className:"footer",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-12 col-lg-10 mx-auto ",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-6 col-lg-3",children:Object(v.jsx)("h4",{children:"Add a conference"})}),Object(v.jsx)("div",{className:"col-6 col-lg-3",children:Object(v.jsx)("h4",{children:"Connect on GitHub"})}),Object(v.jsx)("div",{className:"col-6 col-lg-3",children:Object(v.jsx)("h4",{children:"Follow us on Twitter"})})]}),Object(v.jsx)("hr",{})]})})})})},g=t(31),f=t.n(g);var C=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),g=i[0],C=i[1],y=Object(s.useState)([]),k=Object(r.a)(y,2),L=k[0],w=k[1];return Object(s.useEffect)((function(){f.a.get("http://localhost:3200/locations").then((function(e){a(e.data.data)})),f.a.get("http://localhost:3200/names").then((function(e){C(e.data.data)})),f.a.get("http://localhost:3200/cards").then((function(e){w(e.data.data)}))}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(o.a,{collapseOnSelect:!0,expand:"lg",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(o.a.Brand,{href:"/home",children:Object(v.jsx)("img",{src:j,alt:""})}),Object(v.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(v.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(v.jsxs)(O.a,{className:"customNav",children:[Object(v.jsx)(O.a.Link,{href:"/features",children:"General"}),Object(v.jsx)(O.a.Link,{href:"/pricing",children:"Meetup"}),Object(v.jsx)(O.a.Link,{href:"/pricing",children:"AMA"}),Object(v.jsx)(O.a.Link,{href:"/pricing",children:"Event"}),Object(v.jsx)(O.a.Link,{href:"/pricing",children:"Learning"}),Object(v.jsx)(O.a.Link,{className:"navCta",href:"/pricing",children:"Add Conference"})]})})]})})}),Object(v.jsx)("section",{className:"heroSection",children:Object(v.jsx)(b.a,{children:Object(v.jsxs)(m.a,{children:[Object(v.jsxs)(p.a,{md:6,children:[Object(v.jsx)("h1",{children:"Find your next tech conference in the Polkadot ecosystem"}),Object(v.jsxs)("p",{children:["Open-source and crowd-sourced list of",Object(v.jsx)("br",{})," meetup around pulkadot ecosystem"]}),Object(v.jsx)("button",{children:"Get Started"})]}),Object(v.jsx)(p.a,{md:6,children:Object(v.jsx)("img",{src:x,width:"100%",alt:""})})]})})}),Object(v.jsx)("section",{className:"searchBar",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(m.a,{children:Object(v.jsx)(p.a,{md:12,children:Object(v.jsxs)("div",{className:"searchbarContainer",children:[Object(v.jsx)("input",{type:"search",placeholder:"Find conferences by name or location"}),Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:l,alt:""})})]})})}),Object(v.jsxs)(m.a,{children:[Object(v.jsx)(p.a,{md:4,children:Object(v.jsxs)("div",{className:"filterCard",children:[Object(v.jsxs)("div",{className:"filterLocation",children:[Object(v.jsx)("div",{className:"filterTitle",children:"Location"}),Object(v.jsxs)("div",{className:"searchbarCont",children:[Object(v.jsx)("input",{type:"search",placeholder:"Enter location"}),Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:l,alt:""})})]}),t.map((function(e,c){return Object(v.jsxs)("div",{className:"cityName",children:[e.name," ",Object(v.jsx)("span",{className:"cityCount",children:"1"})]})}))]}),Object(v.jsxs)("div",{className:"filterName",children:[Object(v.jsx)("div",{className:"filterTitle",children:"Name"}),Object(v.jsxs)("div",{className:"searchbarCont",children:[Object(v.jsx)("input",{type:"search",placeholder:"Enter Name"}),Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:l,alt:""})}),g.map((function(e,c){return Object(v.jsxs)("div",{className:"cityName",children:[e.name," ",Object(v.jsx)("span",{className:"cityCount",children:"1"})]})}))]})]})]})}),Object(v.jsxs)(p.a,{md:8,children:[Object(v.jsxs)(m.a,{children:[Object(v.jsx)(p.a,{xs:6,children:Object(v.jsx)("p",{children:Object(v.jsx)("em",{children:"Showing 15 conferences"})})}),Object(v.jsxs)(p.a,{xs:6,className:"d-flex justify-content-end",children:[Object(v.jsx)(u.a.Check,{inline:!0,type:"radio",name:"group1","aria-label":"radio 1",label:"In person"}),Object(v.jsx)(u.a.Check,{inline:!0,type:"radio",name:"group1","aria-label":"radio 2",label:"Online"})]})]}),Object(v.jsx)(m.a,{children:L.map((function(e,c){return Object(v.jsx)(p.a,{md:12,children:Object(v.jsxs)("div",{className:"eventCard",children:[Object(v.jsx)("span",{className:"tag",children:"Online"}),Object(v.jsxs)("div",{className:"displayFlex",children:[Object(v.jsx)("div",{className:"eventTitle",children:e.eventTitle}),Object(v.jsxs)("div",{className:"eventDate",children:[" ",Object(v.jsx)("img",{src:d,alt:""})," ",e.eventDate]})]}),Object(v.jsx)("div",{className:"eventDescription",children:e.eventDescription}),Object(v.jsxs)("div",{className:"twitterUsserName",children:[Object(v.jsx)("img",{src:h,alt:""}),"\xa0@ParityTech",Object(v.jsx)("span",{className:"codeConduct",children:Object(v.jsx)(O.a.Link,{href:"/features",children:e.codeConduct})})]}),Object(v.jsx)("button",{className:"hashTag",children:e.hashTag})]})})}))})]})]})]})}),Object(v.jsx)(N,{})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),y()}},[[77,1,2]]]);
//# sourceMappingURL=main.769e81c4.chunk.js.map