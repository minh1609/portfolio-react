(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/badge.c9612f20.png"},function(e,t,a){},,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){var n={"./badge.png":8,"./blog.gif":23,"./email.gif":24,"./face-reg.gif":25,"./facebook.gif":26,"./game.gif":27,"./marvel.gif":28,"./porfolio.gif":29,"./social.gif":30};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=22},function(e,t,a){e.exports=a.p+"static/media/blog.6baf57d5.gif"},function(e,t,a){e.exports=a.p+"static/media/email.74fa7acc.gif"},function(e,t,a){e.exports=a.p+"static/media/face-reg.3392a549.gif"},function(e,t,a){e.exports=a.p+"static/media/facebook.93af9812.gif"},function(e,t,a){e.exports=a.p+"static/media/game.80a72166.gif"},function(e,t,a){e.exports=a.p+"static/media/marvel.514f4def.gif"},function(e,t,a){e.exports=a.p+"static/media/porfolio.89158b3f.gif"},function(e,t,a){e.exports=a.p+"static/media/social.ee912868.gif"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),l=a(1),c=a(2),s=a(4),m=a(3),p=a(5),u=a(11),f=a.n(u),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,this.props.title),r.a.createElement("div",null,this.props.content))}}]),t}(n.Component);d.defaultProps={title:"title",content:"ABALNDLADNLSDNDnalshflasnpehq;f ajsf;ansf;ajasd;a"};var b=d,h=a(12),g=a.n(h),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"info"},r.a.createElement("div",null,"I am MERN stack (Mongo, Express, React, NodeJS) developer"),r.a.createElement(g.a,{cursor:{show:!1},avgTypingDelay:50},r.a.createElement("div",null,"Always learning to solve bigger and better problem")),r.a.createElement("a",{target:"blank",href:"https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-09-10&ci=AWS01045729"},r.a.createElement("img",{src:a(8),style:{width:"150px",marginTop:"20px"},alt:"aws-certified",className:"zoom-on-hover mt-4"})))}}]),t}(n.Component),E=(a(21),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={skillType:0},a.renderBtnStyle=function(e){return e===a.state.skillType?"circle-btn btn-dark":"circle-btn btn-light"},a.renderContent=function(){return 0===a.state.skillType?r.a.createElement("div",{style:{lineHeight:"2.0",padding:"5px"}},r.a.createElement("h3",null,"I am working with"),r.a.createElement("div",null,"React-Redux",r.a.createElement("br",null),"Node JS, Express, Redis",r.a.createElement("br",null),"AWS Certified Developer (Validation Number: GM16DWBK3M411F51)",r.a.createElement("br",null),"Mongo DB, SQL Database",r.a.createElement("br",null),"HTML, CSS, JavaScript",r.a.createElement("br",null),"Bootstrap, Semantic UI",r.a.createElement("br",null),"Heroku, Atlas",r.a.createElement("br",null),"C++, Java")):1===a.state.skillType?r.a.createElement("div",{style:{lineHeight:"2.0",padding:"5px"}},r.a.createElement("h4",null,"I want to learn"),r.a.createElement("div",null,"GoLang, Python",r.a.createElement("br",null),"Serverless Architecture (API Gateway, Lambda function)")):void 0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-box"},r.a.createElement("button",{onClick:function(){return e.setState({skillType:0})},className:this.renderBtnStyle(0)+" zoom-on-hover"},r.a.createElement("i",{className:"fas fa-cog fa-spin"})),r.a.createElement("button",{onClick:function(){return e.setState({skillType:1})},className:this.renderBtnStyle(1)+" zoom-on-hover"},r.a.createElement("i",{className:"fas fa-question"}))),r.a.createElement("div",{className:"skill-detail"},this.renderContent()))}}]),t}(n.Component)),k=(a(9),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).renderLink=function(){return!0===a.props.deployable?r.a.createElement("a",{href:a.props.prodLink,class:"btn btn-primary btn-sm",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fab fa-chrome",style:{fontSize:"12px"}}),"See it Now"):r.a.createElement("a",{href:a.props.prodLink,class:"btn btn-success btn-sm",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fas fa-book",style:{fontSize:"12px"}}),"Document")},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"slide"},r.a.createElement("div",{class:"card "},r.a.createElement("img",{src:a(22)("./"+this.props.img),class:"card-img-top",alt:this.props.title}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},this.props.title),r.a.createElement("div",null,this.props.description),r.a.createElement("div",null,r.a.createElement("strong",null,"Built with: "),this.props.built)),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:this.props.gitLink,class:"btn btn-dark btn-sm",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{class:"fab fa-github fa-fw",style:{fontSize:"12px"}}),"Source Code"),this.renderLink())))}}]),t}(n.Component));k.defaultProps={gitLink:"https://minh997.github.io/SpainWorldCup2018/",prodLink:"https://www.youtube.com/",description:"Tis is a web App",title:"Name of App",built:"Cobol, Binary",img:"email.gif",deployable:!0};var y=k,j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderIntroPage",value:function(){var e=this;return r.a.createElement("div",{className:"slide"},r.a.createElement("h1",null,"Pet Projects"),r.a.createElement("div",{className:"gradient",onClick:function(){e.props.fullpageApi.moveSlideRight()}},"slide or click here to see my projects"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"section"},this.renderIntroPage(),r.a.createElement(y,{title:"Celebrity Face Recognition",description:"Easily identify who is in the picture",built:"React-Redux, Marvel API",gitLink:"https://github.com/minh1609/face-regconition",prodLink:"https://minh1609.github.io/face-regconition/",img:"face-reg.gif"}),r.a.createElement(y,{title:"Marvel Hero",description:"Find information about your favaourite marvel hero\r ",built:"React-Redux, Marvel API",gitLink:"https://github.com/minh1609/marvell-hero",prodLink:"https://minh1609.github.io/marvell-hero/",img:"marvel.gif"}),r.a.createElement(y,{title:"Secret Blog",description:"Keep all your secret here",built:"React-Redux, Node-Express, Redis, Amazon S3, Jest, MongoDB, Materialize CSS",gitLink:"https://github.com/minh1609/Blogg",prodLink:"https://github.com/minh1609/Blogg#technical-document",img:"blog.gif",deployable:!1}),r.a.createElement(y,{title:"Social Network",description:"A website allow you to share everything to the world",built:"React-Redux, Node-Express, MongoDB, Semantic UI",gitLink:"https://github.com/minh1609/social-network",prodLink:"https://matrix-network.herokuapp.com/",img:"social.gif"}),r.a.createElement(y,{title:"Portfolio",description:"Personal portfolio",built:"React(for reuseable component), HTML, CSS",gitLink:"https://github.com/minh1609/portfolio",prodLink:"https://minh1609.github.io/portfolio/",img:"porfolio.gif"}),r.a.createElement(y,{title:"FaceBook",description:"It is FaceBook with different domain, also treat your password in different way\r ",built:"HTML, CSS, JavaScript",gitLink:"https://github.com/minh1609/facebook-clickjacking",prodLink:"https://minh1609.github.io/facebook-clickjacking/",img:"facebook.gif"}))}}]),t}(n.Component),O=(a(31),a(6)),w=a.n(O),x=a(13),S=a(14),N=a.n(S),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=Object(x.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("copy"!==a.props.action){e.next=6;break}return e.next=3,navigator.clipboard.writeText(a.props.link);case 3:N.a.fire({type:"success",text:" ".concat(a.props.link," \n saved on your clipboard"),timer:3e3,toast:!0,showConfirmButton:!1}),e.next=7;break;case 6:"open"===a.props.action&&window.open(a.props.link);case 7:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn contact-card",onClick:this.handleClick},r.a.createElement("i",{style:{fontSize:"25px",marginRight:"15px"},className:this.props.icon}),this.props.name)}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact-holder"},r.a.createElement("p",null,"Feel free to contact me at"),r.a.createElement("div",null,r.a.createElement(L,{name:"hminh16169@gmail.com",icon:"fas fa-envelope",link:"hminh16169@gmail.com",action:"copy"}),r.a.createElement(L,{name:"Phone Number",icon:"fas fa-mobile-alt",link:"7789557706",action:"copy"}),r.a.createElement(L,{name:"My project on Git Hub",icon:"fab fa-github",action:"open",link:"https://github.com/minh1609"}))))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light ",style:{zIndex:3}},r.a.createElement("a",{class:"navbar-brand",href:"#intro"},"MINH"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav"},r.a.createElement("a",{class:"nav-item nav-link",href:"#intro"},"About Me ",r.a.createElement("span",{class:"sr-only"},"(current)")),r.a.createElement("a",{class:"nav-item nav-link",href:"#skills"},"My Skills"),r.a.createElement("a",{class:"nav-item nav-link",href:"#projects"},"Project"),r.a.createElement("a",{class:"nav-item nav-link",href:"#contact"},"Contact"))))}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onLeave",value:function(e,t,a){console.log("Leaving section "+e.index),console.log(e)}},{key:"afterLoad",value:function(e,t,a){console.log("After load: "+t.index)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(f.a,{autoScrolling:!0,scrollHorizontally:!0,loopBottom:!0,loopHorizontal:!1,recordHistory:!1,navigation:!0,navigationTooltips:["About Me","Skills","Projects","Contact"],slidesNavigation:!0,verticalCentered:!1,onLeave:this.onLeave.bind(this),afterLoad:this.afterLoad.bind(this),anchors:["intro","skills","projects","contact"],render:function(e){e.state;var t=e.fullpageApi;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"About me",content:r.a.createElement(v,null)}),r.a.createElement(b,{title:"Tech I work with",content:r.a.createElement(E,null)}),r.a.createElement(j,{title:"My Project",fullpageApi:t}),r.a.createElement(b,{title:"Contact",content:r.a.createElement(C,null)}))}}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.5a5efe1d.chunk.js.map