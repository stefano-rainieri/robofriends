(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(8),a=n.n(s),o=n(7),i=n.n(o),h=n(9),b=n(2),l=n(3),u=n(5),d=n(4),j=n(0),p=function(e){var t=e.robot,n=t.email,r=t.id,c=t.name;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"JANE DOE",src:"https://robohash.org/".concat(r,"?200x200")}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:c}),Object(j.jsx)("p",{children:n})]})]})},f=function(e){return e.robots.map((function(e){return Object(j.jsx)(p,{robot:e},e.id)}))},O=function(e){var t=e.children;return Object(j.jsx)("div",{style:{overflowY:"auto",borderTop:"1px solid black",height:"500px"},children:t})},x=function(e){var t=e.searchChange;e.searchField;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--black bg-white br3",onChange:t,placeholder:"search robots",type:"search"})})},v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Whoops! That's not good."}):this.props.children}}]),n}(c.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){r.setState({searchField:e.target.value})},r.state={robots:[],searchField:""},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,this.setState({robots:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(j.jsx)("h1",{className:"tc f1",children:"Loading"}):Object(j.jsxs)("div",{className:"tc",id:"app",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(j.jsx)(x,{searchChange:this.onSearchChange})]}),Object(j.jsx)("main",{children:Object(j.jsx)(O,{children:Object(j.jsx)(v,{children:Object(j.jsx)(f,{robots:t})})})})]})}}]),n}(c.a.Component),m=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))});n(17);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.07320263.chunk.js.map