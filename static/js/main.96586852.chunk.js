(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/zhihu.005bf475.svg"},17:function(e,a,t){e.exports=t.p+"static/media/codewars.9b9631e5.svg"},19:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=(t(25),function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__img"}),c.a.createElement("span",{className:"header__title"},"Patrick Mao"))}),i=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("i",{className:"far fa-dot-circle signal"}),c.a.createElement("span",null," Job Status: Ready for employment"))},m=t(34),o=t(33),u=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement(o.a,{to:"/",className:"nav__link",activeClassName:"nav__link--active",exact:!0},"Welcome"),c.a.createElement(o.a,{to:"/portfolio",className:"nav__link",activeClassName:"nav__link--active",exact:!0},c.a.createElement("i",{className:"fas fa-folder-open"}),c.a.createElement("span",null,"Project Portfolio")),c.a.createElement(o.a,{to:"/resume",className:"nav__link",activeClassName:"nav__link--active",exact:!0},c.a.createElement("i",{className:"fas fa-file-alt"}),c.a.createElement("span",null,"Resume")))},E=t(35),d=t(32),h=t(30),f=t(18),v=t(8),p=t(9),_=t(11),N=t(10),b=t(12),g=function(e){function a(){return Object(v.a)(this,a),Object(_.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("span",{className:"line ".concat(this.props.color," w-").concat(this.props.length)})}}]),a}(c.a.Component),y=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(_.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(r)))).ref=c.a.createRef(),t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){for(var e=Object(f.a)(this.ref.current.children),a=function(a){setTimeout(function(){e[a].style.opacity=.4},1.5*a)},t=0;t<e.length;t++)a(t);var n=function(a){setTimeout(function(){e[a].style.filter="grayscale(0)"},1.5*(e.length-a-1))};for(t=0;t<e.length;t++)n(t)}},{key:"generateLines",value:function(e){for(var a=["blue","purple","green","yellow","white","red"],t=[],n=0;n<e;n++){var r=a[Math.floor(6*Math.random())],l=Math.ceil(5*Math.random());t.push(c.a.createElement(g,{key:n,color:r,length:l}))}return t}},{key:"render",value:function(){return c.a.createElement("div",{ref:this.ref,className:"code"},this.generateLines(300))}}]),a}(c.a.Component),k=function(e){return c.a.createElement("div",{className:"intro"},c.a.createElement(y,null),c.a.createElement("div",{className:"intro__content"},c.a.createElement("div",{className:"intro__content__img"}),c.a.createElement("div",{className:"intro__content__desc"},c.a.createElement("h1",null,"Hi!"),c.a.createElement("h1",null,"I'm Patrick,"),c.a.createElement("h1",null,"A web developer"),c.a.createElement(h.a,{to:"/portfolio",className:"link"},"Check out my projects"),c.a.createElement(h.a,{to:"/resume",className:"link"},"View my resume"))))},w=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},e.header),c.a.createElement("div",{className:"card__content"},e.content),c.a.createElement("div",{className:"card__footer"},e.footer))},j=function(){return c.a.createElement("div",{className:"divider"})},O=function(e){return c.a.createElement("div",{className:"portfolio"},c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"section__header"},c.a.createElement("h1",null,"Projects I participated in")),c.a.createElement("div",{className:"section__content"},c.a.createElement(w,{header:c.a.createElement("h2",null,"Purdue University Center for Career Opportunity V4 website"),content:c.a.createElement("div",{className:"img"}),footer:c.a.createElement("a",{href:"/"},"Production site")}))),c.a.createElement(j,null),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"section__header"},c.a.createElement("h1",null,"Projects I did throughout the courses from ",c.a.createElement("a",{href:"/"},"Treehouse"))),c.a.createElement("div",{className:"section__content"},c.a.createElement(w,{header:c.a.createElement("h2",null,"Employee Directory"),content:c.a.createElement("div",{className:"img"}),footer:c.a.createElement("a",{href:"/"},"Github")}),c.a.createElement(w,{header:c.a.createElement("h2",null,"Chart App"),content:c.a.createElement("div",{className:"img"}),footer:c.a.createElement("a",{href:"/"},"Github")}),c.a.createElement(w,{header:c.a.createElement("h2",null,"Guess The Phrase!"),content:c.a.createElement("div",{className:"img"}),footer:c.a.createElement("a",{href:"/"},"Github")}),c.a.createElement(w,{header:c.a.createElement("h2",null,"An Interactive Photo Gallery"),content:c.a.createElement("div",{className:"img"}),footer:c.a.createElement("a",{href:"/"},"Github")}))))},P=function(){return c.a.createElement("div",null,"Resume")},x=function(e){return c.a.createElement("div",{className:"content"},c.a.createElement(E.a,null,c.a.createElement(d.a,{path:"/",exact:!0,component:k}),c.a.createElement(d.a,{path:"/portfolio",exact:!0,component:O}),c.a.createElement(d.a,{path:"/resume",exact:!0,component:P})))},C=function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"viewport"},c.a.createElement(u,null),c.a.createElement(x,null)))},G=t(16),M=t.n(G),I=t(17),A=t.n(I),R=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement("a",{className:"sidebar__icon",href:"https://github.com/patrickmao93"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{className:"sidebar__icon",href:"/"},c.a.createElement("i",{className:"fab fa-linkedin-in"})),c.a.createElement("a",{className:"sidebar__icon",href:"/"},c.a.createElement("img",{src:M.a,alt:"zhihu"})),c.a.createElement("a",{className:"sidebar__icon",href:"/"},c.a.createElement("img",{src:A.a,alt:"codewars",width:"25",height:"25"})),c.a.createElement("a",{className:"sidebar__icon sidebar__setting",href:"/"},c.a.createElement("i",{className:"fas fa-cog"})))},T=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(s,null),c.a.createElement(R,null),c.a.createElement(C,null),c.a.createElement(i,null))};l.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.96586852.chunk.js.map