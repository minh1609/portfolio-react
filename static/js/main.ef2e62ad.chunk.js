(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},function(e,t,a){var n={"./blog.gif":22,"./email.gif":23,"./facebook.gif":24,"./game.gif":25,"./porfolio.gif":26,"./social.gif":27};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=21},function(e,t,a){e.exports=a.p+"static/media/blog.6baf57d5.gif"},function(e,t,a){e.exports=a.p+"static/media/email.74fa7acc.gif"},function(e,t,a){e.exports=a.p+"static/media/facebook.93af9812.gif"},function(e,t,a){e.exports=a.p+"static/media/game.80a72166.gif"},function(e,t,a){e.exports=a.p+"static/media/porfolio.89158b3f.gif"},function(e,t,a){e.exports=a.p+"static/media/social.ee912868.gif"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=a(1),c=a(2),s=a(4),m=a(3),p=a(5),u=a(10),f=a.n(u),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,this.props.title),r.a.createElement("div",null,this.props.content))}}]),t}(n.Component);b.defaultProps={title:"title",content:"ABALNDLADNLSDNDnalshflasnpehq;f ajsf;ansf;ajasd;a"};var d=b,h=a(11),g=a.n(h),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"info"},r.a.createElement("div",null,"I am MERN stack (Mongo, Express, React, NodeJS) developer"),r.a.createElement(g.a,{cursor:{show:!1},avgTypingDelay:50},r.a.createElement("div",null,"Always learning to solve bigger and better problem")))}}]),t}(n.Component),k=(a(20),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={skillType:0},a.renderBtnStyle=function(e){return e===a.state.skillType?"circle-btn btn-dark":"circle-btn btn-light"},a.renderContent=function(){return 0===a.state.skillType?r.a.createElement("div",{style:{lineHeight:"2.0",padding:"5px"}},r.a.createElement("h3",null,"Technology I am working with"),r.a.createElement("div",null,"React-Redux",r.a.createElement("br",null),"Node JS, Express, Redis, Jest",r.a.createElement("br",null),"Mongo DB, SQL Database",r.a.createElement("br",null),"HTML, CSS, JavaScript",r.a.createElement("br",null),"Bootstrap, Semantic UI",r.a.createElement("br",null),"Heroku, Atlas",r.a.createElement("br",null),"C++, Java, Object Oriented Programming")):1===a.state.skillType?r.a.createElement("div",{style:{lineHeight:"2.0",padding:"5px"}},r.a.createElement("h4",null,"Tech I want to learn"),r.a.createElement("div",null,"Azure || Google Cloud Service || AWS",r.a.createElement("br",null),"GoLang, Python",r.a.createElement("br",null),"Svelt(front-end framwork)",r.a.createElement("br",null)," Flutter (cross-platform development framwork)",r.a.createElement("br",null),"Deno (run time environment for js in backend, created by NodeJs creator)")):void 0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-box"},r.a.createElement("button",{onClick:function(){return e.setState({skillType:0})},className:this.renderBtnStyle(0)+" zoom-on-hover"},r.a.createElement("i",{className:"fas fa-cog fa-spin"})),r.a.createElement("button",{onClick:function(){return e.setState({skillType:1})},className:this.renderBtnStyle(1)+" zoom-on-hover"},r.a.createElement("i",{className:"fas fa-question"}))),r.a.createElement("div",{className:"skill-detail"},this.renderContent()))}}]),t}(n.Component)),E=(a(8),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).renderLink=function(){return!0===a.props.deployable?r.a.createElement("a",{href:a.props.prodLink,class:"btn btn-primary btn-sm",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fab fa-chrome",style:{fontSize:"12px"}}),"Go to Project"):r.a.createElement("a",{href:a.props.prodLink,class:"btn btn-success btn-sm",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fas fa-book",style:{fontSize:"12px"}}),"Document")},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slide"},r.a.createElement("div",{class:"card "},r.a.createElement("img",{src:a(21)("./"+this.props.img),class:"card-img-top",alt:this.props.title}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},this.props.title),r.a.createElement("div",null,this.props.description),r.a.createElement("div",null,r.a.createElement("strong",null,"Built with: "),this.props.built)),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:this.props.gitLink,class:"btn btn-dark btn-sm",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fab fa-github fa-fw",style:{fontSize:"12px"}}),"Source Code"),this.renderLink())))}}]),t}(n.Component));E.defaultProps={gitLink:"https://minh997.github.io/SpainWorldCup2018/",prodLink:"https://www.youtube.com/",description:"Tis is a web App",title:"Name of App",built:"Cobol, Binary",img:"email.gif",deployable:!0};var y=E,j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderIntroPage",value:function(){var e=this;return r.a.createElement("div",{className:"slide"},r.a.createElement("h1",null,"My Projects"),r.a.createElement("p",null," "),r.a.createElement("i",{onClick:function(){e.props.fullpageApi.moveSlideRight()},className:"fas fa-arrow-right zoom-on-hover"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"section"},this.renderIntroPage(),r.a.createElement(y,{title:"Social Network",description:"A website allow you to share everything to the world",built:"React-Redux, Node-Express, MongoDB, Semantic UI",gitLink:"https://github.com/minh1609/social-network",prodLink:"https://matrix-network.herokuapp.com/",img:"social.gif"}),r.a.createElement(y,{title:"Secret Blog",description:"Keep all your secret here",built:"React-Redux, Node-Express, Redis, Amazon S3, Jest, MongoDB, Materialize CSS",gitLink:"https://github.com/minh1609/Blogg",prodLink:"https://github.com/minh1609/Blogg#technical-document",img:"blog.gif",deployable:!1}),r.a.createElement(y,{title:"Portfolio",description:"Personal portfolio",built:"React(for reuseable component), HTML, CSS",gitLink:"https://github.com/minh1609/portfolio",prodLink:"https://minh1609.github.io/portfolio/",img:"porfolio.gif"}),r.a.createElement(y,{title:"Game Store Management",description:"Manage item quantity, employee, ... for a game store",built:"PHP, xampp, SQL database, HTML, CSS, JavaScript",gitLink:"https://github.com/minh1609/gameStore",prodLink:"https://mygamestore1609.000webhostapp.com/",img:"game.gif"}),r.a.createElement(y,{title:"FaceBook",description:"It is FaceBook with different domain, also treat your password in different way\r ",built:"HTML, CSS, JavaScript",gitLink:"https://github.com/minh1609/facebook-clickjacking",prodLink:"https://minh1609.github.io/facebook-clickjacking/",img:"facebook.gif"}))}}]),t}(n.Component),O=(a(28),a(6)),w=a.n(O),S=a(12),x=a(13),L=a.n(x),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=Object(S.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("copy"!==a.props.action){e.next=6;break}return e.next=3,navigator.clipboard.writeText(a.props.link);case 3:L.a.fire({type:"success",text:" ".concat(a.props.link," \n saved on your clipboard"),timer:3e3,toast:!0,showConfirmButton:!1}),e.next=7;break;case 6:"open"===a.props.action&&window.open(a.props.link);case 7:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn contact-card",onClick:this.handleClick},r.a.createElement("i",{style:{fontSize:"25px",marginRight:"15px"},className:this.props.icon}),this.props.name)}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact-holder"},r.a.createElement("p",null,"Feel free to contact me at"),r.a.createElement("div",null,r.a.createElement(N,{name:"hminh16169@gmail.com",icon:"fas fa-envelope",link:"hminh16169@gmail.com",action:"copy"}),r.a.createElement(N,{name:"Phone Number",icon:"fas fa-mobile-alt",link:"7789557706",action:"copy"}),r.a.createElement(N,{name:"Resume",icon:"fas fa-file",link:"https://docs.google.com/document/d/1hHXFBcjzb-gyI4wZIz7l9tpwhOnC5PzkKDZs1QeYk1I/edit?usp=sharing",action:"open"}),r.a.createElement(N,{name:"My project on Git Hub",icon:"fab fa-github",action:"open",link:"https://github.com/minh1609"}))))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light ",style:{zIndex:3}},r.a.createElement("a",{class:"navbar-brand",href:"#intro"},"MINH"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav"},r.a.createElement("a",{class:"nav-item nav-link",href:"#intro"},"About Me ",r.a.createElement("span",{class:"sr-only"},"(current)")),r.a.createElement("a",{class:"nav-item nav-link",href:"#skills"},"My Skills"),r.a.createElement("a",{class:"nav-item nav-link",href:"#projects"},"Project"),r.a.createElement("a",{class:"nav-item nav-link",href:"#contact"},"Contact"))))}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onLeave",value:function(e,t,a){console.log("Leaving section "+e.index),console.log(e)}},{key:"afterLoad",value:function(e,t,a){console.log("After load: "+t.index)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(f.a,{autoScrolling:!0,scrollHorizontally:!0,loopBottom:!0,loopHorizontal:!1,recordHistory:!1,navigation:!0,navigationTooltips:["About Me","Skills","Projects","Contact"],slidesNavigation:!0,verticalCentered:!1,onLeave:this.onLeave.bind(this),afterLoad:this.afterLoad.bind(this),anchors:["intro","skills","projects","contact"],render:function(e){e.state;var t=e.fullpageApi;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{title:"About me",content:r.a.createElement(v,null)}),r.a.createElement(d,{title:"Tech I work with",content:r.a.createElement(k,null)}),r.a.createElement(j,{title:"My Project",fullpageApi:t}),r.a.createElement(d,{title:"Contact",content:r.a.createElement(C,null)}))}}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ef2e62ad.chunk.js.map