(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lg.b734cd66.jpg"},function(e,t,a){e.exports=a.p+"static/media/desktop.d145a8a8.jpg"},function(e,t,a){e.exports=a.p+"static/media/desktop.e6cc6209.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/sm.facb1219.jpg"},function(e,t,a){e.exports=a.p+"static/media/md.74e4556b.jpg"},function(e,t,a){e.exports=a.p+"static/media/loading.56e49eb2.jpg"},function(e,t,a){e.exports=a.p+"static/media/tablet.02ec92c8.jpg"},function(e,t,a){e.exports=a.p+"static/media/phone.d259d6dc.jpg"},function(e,t,a){e.exports=a.p+"static/media/playing.7094c7d2.jpg"},function(e,t,a){e.exports=a.p+"static/media/ending.bb59b35a.jpg"},function(e,t,a){e.exports=a.p+"static/media/phone.e0215878.jpg"},function(e,t,a){e.exports=a.p+"static/media/tablet.86d6e627.jpg"},function(e,t,a){e.exports=a.p+"static/media/lightbox.7ea6229b.jpg"},,function(e,t,a){e.exports=a.p+"static/media/zhihu.05d1114b.svg"},function(e,t,a){e.exports=a.p+"static/media/codewars.ff5b0a65.svg"},function(e,t,a){e.exports=a.p+"static/media/game.e5056d39.jpg"},function(e,t,a){e.exports=a.p+"static/media/cco.aa8ee313.jpg"},,,,function(e,t,a){e.exports=a(56)},,,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(48),function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__img"}),r.a.createElement("span",{className:"header__title"},"Patrick Mao"))}),o=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-dot-circle signal"})," Job Status: Ready for employment"),r.a.createElement("span",{className:"footer__right"},"Powered by React ",r.a.createElement("i",{className:"fab fa-react"})))},s=a(18),m=a(4),u=a(5),h=a(7),p=a(6),d=a(8),f=a(58),E=a(57),g=function(e){var t=e.tabs,a=e.onClickClose;return t.map(function(e){return r.a.createElement(E.a,{key:e.to,to:e.to,className:"nav__link",activeClassName:"nav__link--active",exact:!0},r.a.createElement("span",{className:"nav__link__content"},r.a.createElement("i",{className:e.icon}),r.a.createElement("span",null,e.name," ",function(e,t){if(e.closable)return r.a.createElement("i",{onClick:function(a){a.preventDefault(),t(e)},className:"fas fa-times"})}(e,a))))})},b=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav"},g(this.props))}}]),t}(r.a.Component),_=a(59),y=a(40),v=a(39),j=a(11),w=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"line ".concat(this.props.color," w-").concat(this.props.length)})}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).ref=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=Object(s.a)(this.ref.current.children),t=function(t){setTimeout(function(){e[t].style.opacity=.4},3*t),setTimeout(function(){e[t].style.filter="grayscale(0)"},3*(e.length-t-1))},a=0;a<e.length;a++)t(a)}},{key:"generateLines",value:function(e){for(var t=["blue","purple","green","yellow","white","red"],a=[],n=0;n<e;n++){var c=t[Math.floor(6*Math.random())],l=Math.ceil(5*Math.random());a.push(r.a.createElement(w,{key:n,color:c,length:l}))}return a}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.ref,className:"code"},this.generateLines(320))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).introRef=r.a.createRef(),a.contentRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.introRef,className:"intro"},r.a.createElement(N,null),r.a.createElement(j.a,{from:{opacity:0,right:0},to:{opacity:1,right:30},config:{delay:500}},function(t){return r.a.createElement("div",{style:t,ref:e.contentRef,className:"intro__content"},r.a.createElement(j.a,{from:{opacity:0},to:{opacity:1},config:{delay:500}},function(e){return r.a.createElement("div",{className:"intro__content__img"})}),r.a.createElement("div",{className:"intro__content__desc"},r.a.createElement("h1",null,"Hi!"),r.a.createElement("h1",null,"I'm Patrick,"),r.a.createElement("h1",null,"A web developer"),r.a.createElement(v.a,{to:"/portfolio",className:"link"},"Check out my projects"),r.a.createElement(v.a,{to:"/resume",className:"link"},"View my resume")))}))}}]),t}(r.a.Component),C=r.a.createContext(),O=a(41),x=function(e){return r.a.createElement("div",{className:"pill pill-".concat(e.type)},function(e){switch(e){case"js":return r.a.createElement("i",{className:"fab fa-js-square"});case"sass":return r.a.createElement("i",{className:"fab fa-sass"});case"react":return r.a.createElement("i",{className:"fab fa-react"})}}(e.type),e.type.toUpperCase())},U=function(e){if(e.header)return r.a.createElement("div",{className:"card__title"},r.a.createElement("h2",null,e.header),r.a.createElement("div",{className:"pills"},function(e){if(e)return e.map(function(e){return r.a.createElement(x,{key:e,type:e})})}(e.pills)))},I=function(e){var t="";return e.interactable&&(t="card--interactable"),r.a.createElement(j.a,{from:{opacity:0},to:{opacity:1},config:Object(O.a)({delay:200},j.b.gentle)},function(a){return r.a.createElement("div",{className:"card ".concat(t),style:a},r.a.createElement("div",{className:"card__content"},function(e){if(e.imgUrl)return r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.imgUrl,alt:e.header,height:"auto",width:"auto"}))}(e)," ",e.children),U(e))})},P=function(e){return r.a.createElement("div",{className:"portfolio"},r.a.createElement(C.Consumer,null,function(t){var a=t.state;return r.a.createElement("div",null,r.a.createElement(v.a,{to:a.CCO.tabInfo.to,onClick:function(){return e.onClickCase(a.CCO.tabInfo)}},r.a.createElement(I,{header:a.CCO.header,imgUrl:a.CCO.imgUrl,interactable:!0,pills:["js","jquery","bootstrap","backbone","asp","mysql"]})),r.a.createElement(v.a,{to:a.employeeDirectory.tabInfo.to,onClick:function(){return e.onClickCase(a.employeeDirectory.tabInfo)}},r.a.createElement(I,{header:a.employeeDirectory.header,imgUrl:a.employeeDirectory.imgUrl,interactable:!0,pills:["react","redux","js","sass"]})),r.a.createElement(v.a,{to:a.chartApp.tabInfo.to,onClick:function(){return e.onClickCase(a.chartApp.tabInfo)}},r.a.createElement(I,{header:a.chartApp.header,imgUrl:a.chartApp.imgUrl,interactable:!0,pills:["js","sass","chartjs"]})),r.a.createElement(v.a,{to:a.guessThePhrase.tabInfo.to,onClick:function(){return e.onClickCase(a.guessThePhrase.tabInfo)}},r.a.createElement(I,{header:a.guessThePhrase.header,imgUrl:a.guessThePhrase.imgUrl,interactable:!0,pills:["js"]})),r.a.createElement(v.a,{to:a.photoGallery.tabInfo.to,onClick:function(){return e.onClickCase(a.photoGallery.tabInfo)}},r.a.createElement(I,{header:a.photoGallery.header,imgUrl:a.photoGallery.imgUrl,interactable:!0,pills:["js","jquery"]})))}))},T=function(e){return r.a.createElement(I,null,r.a.createElement("div",{className:"resume__card"},function(e){if(e.imgUrl)return r.a.createElement("div",{className:"resume__card__img"},r.a.createElement("img",{src:e.imgUrl,alt:e.header}))}(e),r.a.createElement("div",{className:"resume__card__info"},r.a.createElement("h1",{className:"resume__card__info__header"},e.header),r.a.createElement("div",{className:"resume__card__info__content"},e.children))))},S=function(){return r.a.createElement("div",{className:"resume"},r.a.createElement(T,{imgUrl:"/",header:"Qizheng Mao (Patrick)"},r.a.createElement("span",null,"Tel: 135-0185-2846"),r.a.createElement("span",null,"Email: Patrickmao@live.com")))},A=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"case__header"},r.a.createElement("h1",null,"Purdue University Center for Career Opportunities Website V4"),r.a.createElement("div",{className:"case__header__info"},r.a.createElement("div",{className:"case__header__info__pills"},r.a.createElement(x,{type:"js"}),r.a.createElement(x,{type:"jquery"}),r.a.createElement(x,{type:"bootstrap"}),r.a.createElement(x,{type:"backbone"}),r.a.createElement(x,{type:"asp"}),r.a.createElement(x,{type:"mysql"})),r.a.createElement("div",{className:"case__header__info__links"},r.a.createElement("a",{href:"https://www.cco.purdue.edu/"},r.a.createElement("i",{className:"far fa-window-maximize"}),"Go to live page")))),r.a.createElement("div",{className:"case__content"},r.a.createElement("h2",null,"Summary"),r.a.createElement("p",null,"This was the project I participated in during my summer internship at Purdue Univercity's CCO (Center for Career Opportunities) department. The dev team is fairly small (less than ten people), and is consisted of students range from undergrads to PHDs. I worked as a full-stack developer focusing on: 1. Delivering front-end user interface for both general users of the site and the Purdue employees that create the content. 2. Writing/testing back-end APIs and designing database schemas."),r.a.createElement("p",null,"With the lead of our dev lead and PM, we designed and deployed the CMS from ground up, allowing Purdue employees to create, and manage content through their employee portal. During the development of the CMS, we held meetings on a weekly basis to communicate feedback and suggestions with our client (Purdue CCO employee)."),r.a.createElement("p",null)))},G=a(24),D=a.n(G),R=a(25),M=a.n(R),z=a(15),W=a.n(z),V=a(26),q=a.n(V),L=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"case__header"},r.a.createElement("h1",null,"Employee Directory App"),r.a.createElement("div",{className:"case__header__info"},r.a.createElement("div",{className:"case__header__info__pills"},r.a.createElement(x,{type:"react"}),r.a.createElement(x,{type:"redux"}),r.a.createElement(x,{type:"js"}),r.a.createElement(x,{type:"sass"})),r.a.createElement("div",{className:"case__header__info__links"},r.a.createElement("a",{href:"https://github.com/patrickmao93/techdegree-project-8"},r.a.createElement("i",{className:"fab fa-github"}),"View on Github"),r.a.createElement("a",{href:"https://patrickmao93.github.io/EmployeeDirectory-React"},r.a.createElement("i",{className:"far fa-window-maximize"}),"Go to live page")))),r.a.createElement("div",{className:"case__content"},r.a.createElement("h2",null,"Summary"),r.a.createElement("p",{className:"case__content__paragraph"},"This was the project #8 of the"," ",r.a.createElement("a",{href:"https://teamtreehouse.com/techdegree/front-end-web-development"},"Treehouse Front End Web Development Techdegree"),". ",r.a.createElement("br",null),"The purpose of this project is to help myself practicing the concept of utilizing the ",r.a.createElement("em",null,"fetch")," API to pull data from an online API asynchronously. It also helped me understand ",r.a.createElement("em",null,"Promise"),". ",r.a.createElement("br",null),"What this project really showed/taught me was how easily front end code can get messy and hard to maintain when it comes to data handling without a framework. I already see myself creating several global variables that could end up being hazardous in the future if the project scale grows. ",r.a.createElement("br",null),"After finishing this project, I re-wrote it completely with React."," ",r.a.createElement("a",{href:"https://github.com/patrickmao93/EmployeeDirectory-React"},"Check it out"),". ",r.a.createElement("br",null),"After doing a react version of this project, I took one step further and implemented this project again using react and redux."," ",r.a.createElement("a",{href:"https://github.com/patrickmao93/Employee-directory-with-redux"},"Check it out")),r.a.createElement("h2",null,"Screenshots"),r.a.createElement(I,{imgUrl:D.a}),r.a.createElement(I,{imgUrl:M.a}),r.a.createElement(I,{imgUrl:W.a}),r.a.createElement(I,{imgUrl:q.a})))},F=a(16),J=a.n(F),Q=a(27),H=a.n(Q),B=a(28),K=a.n(B),X=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"case__header"},r.a.createElement("h1",null,"Dashboard App"),r.a.createElement("div",{className:"case__header__info"},r.a.createElement("div",{className:"case__header__info__pills"},r.a.createElement(x,{type:"js"}),r.a.createElement(x,{type:"chartjs"})),r.a.createElement("div",{className:"case__header__info__links"},r.a.createElement("a",{href:"https://github.com/patrickmao93/techdegree-project-7"},r.a.createElement("i",{className:"fab fa-github"}),"View on Github"),r.a.createElement("a",{href:"https://patrickmao93.github.io/techdegree-project-7"},r.a.createElement("i",{className:"far fa-window-maximize"}),"Go to live page")))),r.a.createElement("div",{className:"case__content"},r.a.createElement("h2",null,"Summary"),r.a.createElement("p",{className:"case__content__paragraph"},"This was the project #7 of the"," ",r.a.createElement("a",{href:"https://teamtreehouse.com/techdegree/front-end-web-development"},"Treehouse Front End Web Development Techdegree"),". ",r.a.createElement("br",null),"CSS Grid is just awesomeness. What even better is when combining CSS Grid with flexbox. These two tools really makes laying out web apps a breeze. Grid is incredibly versatile when it comes to 2D layouts, but sometimes I find it to be tedious when a container just contains several elements in one direction, and this is where flexbox comes in handy! In this project, you will see the combined power of CSS Grid and Flexbox, resulting in fully responsive page layouts."),r.a.createElement("h2",null,"My Learnings"),r.a.createElement("ul",{className:"case__content__list"},r.a.createElement("li",null,"CSS Grid layout"),r.a.createElement("li",null,"Using SVG graphics"),r.a.createElement("li",null,"Chart.js for Interactive Charts"),r.a.createElement("li",null,"Local Storage"),r.a.createElement("li",null,"Responsive web design")),r.a.createElement("div",{className:"case__content__cards"}),r.a.createElement(I,{imgUrl:K.a}),r.a.createElement(I,{imgUrl:H.a}),r.a.createElement(I,{imgUrl:J.a})))},Y=a(29),Z=a.n(Y),$=a(30),ee=a.n($),te=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"case__header"},r.a.createElement("h1",null,"Guess The Phrase!"),r.a.createElement("div",{className:"case__header__info"},r.a.createElement("div",{className:"case__header__info__pills"},r.a.createElement(x,{type:"js"})),r.a.createElement("div",{className:"case__header__info__links"},r.a.createElement("a",{href:"https://github.com/patrickmao93/techdegree-project-6"},r.a.createElement("i",{className:"fab fa-github"}),"View on Github"),r.a.createElement("a",{href:"https://patrickmao93.github.io/techdegree-project-6"},r.a.createElement("i",{className:"far fa-window-maximize"}),"Go to live page")))),r.a.createElement("div",{className:"case__content"},r.a.createElement("h2",null,"Summary"),r.a.createElement("p",{className:"case__content__paragraph"},"This was the project #6 of the"," ",r.a.createElement("a",{href:"https://teamtreehouse.com/techdegree/front-end-web-development"},"Treehouse Front End Web Development Techdegree"),". ",r.a.createElement("br",null),"Mobile experience is not in scope of this project, so please view the page at desktop width. No library was used in this project. At this point I am already very comfortable with utilizing jQuery and it's plugins. Vanilla js always looks terrifying to me, but thanks to the awesome javascript teacher Guil at Treehouse, I got a grasp on vanilla js quickly. This game is written entirely in vanilla js for the sake of practicing. I also digged into css animation a little bit in this project, and found it incredibly fun!"),r.a.createElement("h2",null,"My Learnings"),r.a.createElement("ul",{className:"case__content__list"},r.a.createElement("li",null,"DOM Scripting"),r.a.createElement("li",null,"CSS3 Aniation")),r.a.createElement("h2",null,"Screenshots"),r.a.createElement(I,{imgUrl:Z.a}),r.a.createElement(I,{imgUrl:ee.a})))},ae=a(31),ne=a.n(ae),re=a(32),ce=a.n(re),le=a(17),ie=a.n(le),oe=a(33),se=a.n(oe),me=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"case__header"},r.a.createElement("h1",null,"A Responsive Photo Gallery"),r.a.createElement("div",{className:"case__header__info"},r.a.createElement("div",{className:"case__header__info__pills"},r.a.createElement(x,{type:"js"}),r.a.createElement(x,{type:"jquery"})),r.a.createElement("div",{className:"case__header__info__links"},r.a.createElement("a",{href:"https://github.com/patrickmao93/techdegree-project-5"},r.a.createElement("i",{className:"fab fa-github"}),"View on Github"),r.a.createElement("a",{href:"https://patrickmao93.github.io/techdegree-project-5"},r.a.createElement("i",{className:"far fa-window-maximize"}),"Go to live page")))),r.a.createElement("div",{className:"case__content"},r.a.createElement("h2",null,"Summary"),r.a.createElement("p",{className:"case__content__paragraph"},"This was the project #5 of the"," ",r.a.createElement("a",{href:"https://teamtreehouse.com/techdegree/front-end-web-development"},"Treehouse Front End Web Development Techdegree"),". ",r.a.createElement("br",null),"Mobile experience is not in scope of this project, so please view the page at desktop width. No library was used in this project. At this point I am already very comfortable with utilizing jQuery and it's plugins. Vanilla js always looks terrifying to me, but thanks to the awesome javascript teacher Guil at Treehouse, I got a grasp on vanilla js quickly. This game is written entirely in vanilla js for the sake of practicing. I also digged into css animation a little bit in this project, and found it incredibly fun!"),r.a.createElement("h2",null,"My Learnings"),r.a.createElement("ul",{className:"case__content__list"},r.a.createElement("li",null,"DOM Scripting"),r.a.createElement("li",null,"CSS3 Aniation")),r.a.createElement("h2",null,"Screenshots"),r.a.createElement(I,{imgUrl:ne.a}),r.a.createElement(I,{imgUrl:ce.a}),r.a.createElement(I,{imgUrl:ie.a}),r.a.createElement(I,{imgUrl:se.a})))},ue=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).renderContent=function(){switch(a.props.match.params.name){case"cco":return r.a.createElement(A,null);case"employee-directory":return r.a.createElement(L,null);case"chart-app":return r.a.createElement(X,null);case"guess-the-phrase":return r.a.createElement(te,null);case"a-responsive-photo-gallery":return r.a.createElement(me,null);default:return}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"case"},this.renderContent())}}]),t}(r.a.Component),he=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).contentRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.contentRef.current.scrollTop=0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.contentRef,className:"content"},r.a.createElement(_.a,null,r.a.createElement(y.a,{path:"/",exact:!0,component:k}),r.a.createElement(y.a,{path:"/portfolio",exact:!0,render:function(){return r.a.createElement(P,{onClickCase:e.props.onClickCase})}}),r.a.createElement(y.a,{path:"/resume",exact:!0,component:S}),r.a.createElement(y.a,{path:"/portfolio/:name",exact:!0,component:ue})))}}]),t}(r.a.Component),pe=a(34),de=a.n(pe)()(),fe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{to:"/",name:"Welcome",icon:"",closable:!1},{to:"/portfolio",name:"Project Portfolio",icon:"fas fa-folder-open",closable:!1},{to:"/resume",name:"Resume",icon:"fas fa-file-alt",closable:!1}]},a.contentRef=r.a.createRef(),a.onClickCase=function(e){a.state.tabs.find(function(t){return t.to===e.to})||a.setState({tabs:[].concat(Object(s.a)(a.state.tabs),[e])})},a.onClickClose=function(e){var t=a.state.tabs.filter(function(t){return t.to!==e.to});a.setState({tabs:t},function(){de.location.pathname===e.to&&de.push(a.state.tabs[a.state.tabs.length-1].to)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{history:de},r.a.createElement("div",{className:"viewport"},r.a.createElement(b,{tabs:this.state.tabs,onClickClose:this.onClickClose}),r.a.createElement(he,{onClickCase:this.onClickCase})))}}]),t}(r.a.Component),Ee=a(35),ge=a.n(Ee),be=a(36),_e=a.n(be),ye=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("a",{className:"sidebar__icon",href:"https://github.com/patrickmao93"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("i",{className:"fab fa-linkedin-in"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("img",{src:ge.a,alt:"zhihu"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("img",{src:_e.a,alt:"codewars",width:"24",height:"24"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("i",{className:"fab fa-weixin"})))},ve=a(37),je=a.n(ve),we=a(38),Ne=a.n(we),ke=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={CCO:{header:"Purdue University - Center for Career Opportunities Website V4",imgUrl:Ne.a,tabInfo:{name:"PurdueCCO Site",to:"/portfolio/cco",icon:"",closable:!0}},employeeDirectory:{header:"Employee Directory",imgUrl:W.a,tabInfo:{name:"Employee Directory",to:"/portfolio/employee-directory",icon:"",closable:!0}},chartApp:{header:"Dashboard App",imgUrl:J.a,tabInfo:{name:"Chart App",to:"/portfolio/chart-app",icon:"",closable:!0}},guessThePhrase:{header:"Guess The Phrase!",imgUrl:je.a,tabInfo:{name:"Guess The Phrase!",to:"/portfolio/guess-the-phrase",icon:"",closable:!0}},photoGallery:{header:"A Responsive Photo Gallery",imgUrl:ie.a,tabInfo:{name:"A Reponsive Photo Gallery",to:"/portfolio/a-responsive-photo-gallery",icon:"",closable:!0}}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e in this.state){(new Image).src=this.state[e].imgUrl}}},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:{state:this.state}},this.props.children)}}]),t}(r.a.Component),Ce=function(){return r.a.createElement(ke,null,r.a.createElement("div",{className:"app"},r.a.createElement(i,null),r.a.createElement(ye,null),r.a.createElement(fe,null),r.a.createElement(o,null)))};l.a.render(r.a.createElement(Ce,null),document.getElementById("root"))}],[[42,2,1]]]);
//# sourceMappingURL=main.414f95cc.chunk.js.map