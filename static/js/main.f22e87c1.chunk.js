(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/zhihu.05d1114b.svg"},21:function(e,t,a){e.exports=a.p+"static/media/codewars.ff5b0a65.svg"},22:function(e,t,a){e.exports=a.p+"static/media/employee-directory.d805f204.png"},23:function(e,t,a){e.exports=a.p+"static/media/chart.0eca4126.png"},24:function(e,t,a){e.exports=a.p+"static/media/game.10569e9d.png"},25:function(e,t,a){e.exports=a.p+"static/media/gallery.806d63a9.png"},26:function(e,t,a){e.exports=a.p+"static/media/cco.3991b36b.png"},27:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(33),function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__img"}),r.a.createElement("span",{className:"header__title"},"Patrick Mao"))}),i=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("i",{className:"far fa-dot-circle signal"}),r.a.createElement("span",null," Job Status: Ready for employment"))},s=a(12),m=a(3),u=a(4),h=a(6),f=a(5),p=a(7),d=a(45),b=a(44),E=function(e){var t=e.tabs,a=e.onClickClose;return t.map(function(e){return r.a.createElement(b.a,{key:e.to,to:e.to,className:"nav__link",activeClassName:"nav__link--active",exact:!0},r.a.createElement("span",{className:"nav__link__content"},r.a.createElement("i",{className:e.icon}),r.a.createElement("span",null,e.name," ",function(e,t){if(e.closable)return r.a.createElement("i",{onClick:function(a){a.preventDefault(),t(e)},className:"fas fa-times"})}(e,a))))})},v=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav"},E(this.props))}}]),t}(r.a.Component),y=a(46),C=a(43),g=a(42),O=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"line ".concat(this.props.color," w-").concat(this.props.length)})}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).ref=r.a.createRef(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=Object(s.a)(this.ref.current.children),t=function(t){setTimeout(function(){e[t].style.opacity=.4},3*t),setTimeout(function(){e[t].style.filter="grayscale(0)"},3*(e.length-t-1))},a=0;a<e.length;a++)t(a)}},{key:"generateLines",value:function(e){for(var t=["blue","purple","green","yellow","white","red"],a=[],n=0;n<e;n++){var c=t[Math.floor(6*Math.random())],o=Math.ceil(5*Math.random());a.push(r.a.createElement(O,{key:n,color:c,length:o}))}return a}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.ref,className:"code"},this.generateLines(320))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).introRef=r.a.createRef(),a.contentRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.introRef,className:"intro"},r.a.createElement(k,null),r.a.createElement("div",{ref:this.contentRef,className:"intro__content"},r.a.createElement("div",{className:"intro__content__img"}),r.a.createElement("div",{className:"intro__content__desc"},r.a.createElement("h1",null,"Hi!"),r.a.createElement("h1",null,"I'm Patrick,"),r.a.createElement("h1",null,"A web developer"),r.a.createElement(g.a,{to:"/portfolio",className:"link"},"Check out my projects"),r.a.createElement(g.a,{to:"/resume",className:"link"},"View my resume"))))}}]),t}(r.a.Component),_=r.a.createContext(),N=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h2",null,e.header)),r.a.createElement("div",{className:"card__content"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.imgUrl,alt:e.header}))))},w=function(){return r.a.createElement("div",{className:"divider"})},I=function(e){return r.a.createElement("div",{className:"portfolio"},r.a.createElement(_.Consumer,null,function(t){var a=t.state;return r.a.createElement("div",null,r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section__header"},r.a.createElement("h1",null,"Projects I participated in")),r.a.createElement("div",{className:"section__content"},r.a.createElement(g.a,{to:a.CCO.tabInfo.to,onClick:function(){return e.onClickCase(a.CCO.tabInfo)}},r.a.createElement(N,{header:a.CCO.header,imgUrl:a.CCO.imgUrl})))),r.a.createElement(w,null),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section__header"},r.a.createElement("h1",null,"Projects I did throughout the courses from"," ",r.a.createElement("a",{href:"/"},"Treehouse"))),r.a.createElement("div",{className:"section__content"},r.a.createElement(g.a,{to:a.employeeDirectory.tabInfo.to,onClick:function(){return e.onClickCase(a.employeeDirectory.tabInfo)}},r.a.createElement(N,{header:a.employeeDirectory.header,imgUrl:a.employeeDirectory.imgUrl})),r.a.createElement(g.a,{to:a.chartApp.tabInfo.to,onClick:function(){return e.onClickCase(a.chartApp.tabInfo)}},r.a.createElement(N,{header:a.chartApp.header,imgUrl:a.chartApp.imgUrl})),r.a.createElement(g.a,{to:a.guessThePhrase.tabInfo.to,onClick:function(){return e.onClickCase(a.guessThePhrase.tabInfo)}},r.a.createElement(N,{header:a.guessThePhrase.header,imgUrl:a.guessThePhrase.imgUrl})),r.a.createElement(g.a,{to:a.photoGallery.tabInfo.to,onClick:function(){return e.onClickCase(a.photoGallery.tabInfo)}},r.a.createElement(N,{header:a.photoGallery.header,imgUrl:a.photoGallery.imgUrl})))))}))},P=function(){return r.a.createElement("div",null,"Resume")},U=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.match.params;return r.a.createElement("div",null,e.name)}}]),t}(r.a.Component),x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(y.a,null,r.a.createElement(C.a,{path:"/",exact:!0,component:j}),r.a.createElement(C.a,{path:"/portfolio",exact:!0,render:function(){return r.a.createElement(I,{onClickCase:e.props.onClickCase})}}),r.a.createElement(C.a,{path:"/resume",exact:!0,component:P}),r.a.createElement(C.a,{path:"/portfolio/:name",exact:!0,component:U})))}}]),t}(r.a.Component),A=a(19),R=a.n(A)()(),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={tabs:[{to:"/",name:"Welcome",icon:"",closable:!1},{to:"/portfolio",name:"Project Portfolio",icon:"fas fa-folder-open",closable:!1},{to:"/resume",name:"Resume",icon:"fas fa-file-alt",closable:!1}]},a.onClickCase=function(e){a.state.tabs.find(function(t){return t.to===e.to})||a.setState({tabs:[].concat(Object(s.a)(a.state.tabs),[e])})},a.onClickClose=function(e){var t=a.state.tabs.filter(function(t){return t.to!==e.to});a.setState({tabs:t}),R.location.pathname===e.to&&R.goBack()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{history:R},r.a.createElement("div",{className:"viewport"},r.a.createElement(v,{tabs:this.state.tabs,onClickClose:this.onClickClose}),r.a.createElement(x,{onClickCase:this.onClickCase})))}}]),t}(r.a.Component),T=a(20),G=a.n(T),M=a(21),S=a.n(M),J=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("a",{className:"sidebar__icon",href:"https://github.com/patrickmao93"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("i",{className:"fab fa-linkedin-in"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("img",{src:G.a,alt:"zhihu"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("img",{src:S.a,alt:"codewars",width:"25",height:"25"})),r.a.createElement("a",{className:"sidebar__icon sidebar__setting",href:"/"},r.a.createElement("i",{className:"fas fa-cog"})))},z=a(22),B=a.n(z),L=a(23),V=a.n(L),W=a(24),H=a.n(W),q=a(25),F=a.n(q),K=a(26),Q=a.n(K),X=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={CCO:{header:"Purdue University - Center for Career Opportunities Website V4",imgUrl:Q.a,tabInfo:{name:"PurdueCCO Site",to:"/portfolio/CCO",icon:"",closable:!0}},employeeDirectory:{header:"Employee Directory",imgUrl:B.a,tabInfo:{name:"Employee Directory",to:"/portfolio/employee-directory",icon:"",closable:!0}},chartApp:{header:"Chart App",imgUrl:V.a,tabInfo:{name:"Chart App",to:"/portfolio/chart-app",icon:"",closable:!0}},guessThePhrase:{header:"Guess The Phrase!",imgUrl:H.a,tabInfo:{name:"Guess The Phrase!",to:"/portfolio/guess-the-phrase",icon:"",closable:!0}},photoGallery:{header:"A Responsive Photo Gallery",imgUrl:F.a,tabInfo:{name:"A Reponsive Photo Gallery",to:"/portfolio/a-responsive-photo-gallery",icon:"",closable:!0}}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(_.Provider,{value:{state:this.state}},this.props.children)}}]),t}(r.a.Component),Y=function(){return r.a.createElement(X,null,r.a.createElement("div",{className:"app"},r.a.createElement(l,null),r.a.createElement(J,null),r.a.createElement(D,null),r.a.createElement(i,null)))};o.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.f22e87c1.chunk.js.map