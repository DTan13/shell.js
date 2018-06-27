webpackJsonp([1],{"7CyX":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{id:"documentation"}},[s("b-row",[s("b-col",[s("h1",[t._v("Get started")])])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Install")]),t._v(" "),s("p",[t._v("You can get the latest version of Shell.js with the commonest package managers "),s("strong",[t._v("Yarn")]),t._v(", "),s("strong",[t._v("NPM")]),t._v(" and "),s("strong",[t._v("Bower")]),t._v(":")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",{staticClass:"bash"},[t._v("yarn add shell.js\n# or with NPM\nnpm install shell.js --save\n# or with Bower\nbower install shell.js --save")])])])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Import")]),t._v(" "),s("p",[t._v("Then if you are using module bundlers such as Webpack you have to import the library:")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",{staticClass:"js"},[t._v("import Shell from 'shell.js'")])]),t._v(" "),s("p",[t._v("Or simply include the library through a script tag:")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",{staticClass:"html"},[t._v('<script src="path/to/shell.js/lib/shell.min.js"><\/script>')])])])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Use")]),t._v(" "),s("p",[t._v("Finally create your HTML element and initialize Shell.js:")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",{staticClass:"html"},[t._v("<div id=\"awesome-shell\"></div>\n<script>\n  document.addEventListener('DOMContentLoaded', function() {\n    let shell = new Shell('#awesome-shell', {\n        user: 'foobar',\n        host: 'MacMini',\n        path: '~',\n        style: 'osx',\n        theme: 'dark',\n        responsive: false,\n        commands: ['First command', 'Second command', '...']\n    });\n  });\n<\/script>")])]),t._v(" "),s("p",[t._v("\n          If you want to use the "),s("a",{attrs:{href:"http://www.mattboldt.com/demos/typed-js/",target:"_blank",rel:"nofollow"}},[t._v("Typed.js")]),t._v("\n          integration the code will be like the following:\n        ")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",{staticClass:"html"},[t._v("<div id=\"awesome-shell\"></div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.6/typed.min.js\"><\/script>\n<script>\n  document.addEventListener('DOMContentLoaded', function() {\n    let shell = new Shell('#awesome-shell', {\n        typed: Typed\n        // ...\n    });\n  });\n<\/script>")])])])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Options")]),t._v(" "),s("p",[t._v("Here the list of options to customize your shell:")]),t._v(" "),s("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)],1)],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},"9M+g":function(t,e){},"9giF":function(t,e){},CogQ:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{id:"examples"}},[s("b-row",[s("b-col",[s("h3",[t._v("Default")])])],1),t._v(" "),s("b-row",[s("b-col",[s("div",{attrs:{id:"default"}})]),t._v(" "),s("b-col",[s("div",{attrs:{id:"default-light"}})])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Mac OS X")])])],1),t._v(" "),s("b-row",[s("b-col",[s("div",{attrs:{id:"osx"}})]),t._v(" "),s("b-col",[s("div",{attrs:{id:"osx-light"}})])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Ubuntu")])])],1),t._v(" "),s("b-row",[s("b-col",[s("div",{attrs:{id:"ubuntu"}})]),t._v(" "),s("b-col",[s("div",{attrs:{id:"ubuntu-light"}})])],1),t._v(" "),s("b-row",[s("b-col",[s("h3",[t._v("Windows")])])],1),t._v(" "),s("b-row",[s("b-col",[s("div",{attrs:{id:"windows"}})]),t._v(" "),s("b-col")],1),t._v(" "),s("b-row",[s("b-col")],1)],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},Fs8J:function(t,e,s){"use strict";var a=s("njrj"),n=s.n(a),o=s("sTvP"),r=s.n(o);e.a={name:"home",data:function(){return{}},mounted:function(){return new r.a("#shell",{user:"guest",host:"shell.js",path:"~",style:"ubuntu",theme:"dark",responsive:!1,typed:n.a,commands:["sudo -i","Hello bro","This is an example of what you can do with Shell.js","Look at the examples page to see other styles","Or check out the doc for details","Stay tuned"]})}}},HJNZ:function(t,e,s){"use strict";function a(t){s("wg1N")}var n=s("RDM4"),o=s("CogQ"),r=s("VU/8"),i=a,l=r(n.a,o.a,!1,i,"data-v-5175d54e",null);e.a=l.exports},Jmt5:function(t,e){},KSCX:function(t,e,s){"use strict";var a=s("V8mf"),n=s.n(a),o=s("9giF");s.n(o);e.a={name:"documentation",data:function(){return{items:[{Property:"user",Description:"Current user","Value type":"string","Possible values":"*",Default:"user"},{Property:"host",Description:"Host name","Value type":"string","Possible values":"*",Default:"host"},{Property:"path",Description:"Current directory","Value type":"string","Possible values":"*",Default:"~"},{Property:"style",Description:"Operating system","Value type":"string","Possible values":"default | osx | ubuntu | windows",Default:"default"},{Property:"theme",Description:"Dark or light theme","Value type":"string","Possible values":"dark | light",Default:"dark"},{Property:"typed",Description:"Add Typed.js integration","Value type":"boolean | function","Possible values":"false | Typed instance",Default:"false"},{Property:"responsive",Description:"Fluid shell","Value type":"boolean","Possible values":"true | false",Default:"false"},{Property:"commands",Description:"List of commands to execute","Value type":"array","Possible values":"*",Default:"[]"},{Property:"root",Description:"Admin user or normal user","Value type":"boolean","Possible values":"true | false",Default:"false"}]}},mounted:function(){n.a.initHighlighting()}}},LqPf:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("hkpw")}var n=s("xJD8"),o=s("Vtpa"),r=s("VU/8"),i=a,l=r(n.a,o.a,!1,i,null,null);e.a=l.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),o=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})},PLKI:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{id:"home"}},[s("b-row",{staticClass:"text-center"},[s("b-col",[s("h1",[t._v("Shell.js")]),t._v(" "),s("h2",[t._v("Let's create HTML terminals with pure JavaScript and CSS")])])],1),t._v(" "),s("b-row",[s("b-col",[s("div",{attrs:{id:"shell"}})])],1),t._v(" "),s("b-row",{staticClass:"text-center well"},[s("b-col",[s("b-btn",{attrs:{size:"lg",variant:"primary",to:"/documentation"}},[t._v("Get started")]),t._v(" "),s("b-btn",{attrs:{size:"lg",variant:"success",href:"https://github.com/davidecaruso/shell.js"}},[t._v("GitHub")])],1)],1)],1)},n=[],o={render:a,staticRenderFns:n};e.a=o},RDM4:function(t,e,s){"use strict";var a=s("sTvP"),n=s.n(a),o=s("V8mf"),r=s.n(o),i=s("9giF");s.n(i);e.a={name:"examples",data:function(){return{}},mounted:function(){return r.a.initHighlighting(),[new n.a("#default",{user:"guest",commands:["sudo -i","rm -rf /","exit"]}),new n.a("#default-light",{user:"guest",theme:"light",commands:["sudo -i","rm -rf /","exit"]}),new n.a("#osx",{user:"guest",host:"MacBook-Pro",style:"osx",commands:["sudo -i","rm -rf /","exit"]}),new n.a("#osx-light",{user:"guest",host:"MacBook-Pro",style:"osx",theme:"light",commands:["sudo -i","rm -rf /","exit"]}),new n.a("#ubuntu",{user:"guest",host:"localhost",style:"ubuntu",commands:["sudo -i","rm -rf /","exit"]}),new n.a("#ubuntu-light",{user:"guest",host:"localhost",style:"ubuntu",theme:"light",commands:["sudo -i","rm -rf /","exit"]}),new n.a("#windows",{style:"windows",commands:["sudo -i","rm -rf /","exit"]})]}}},Vtpa:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[s("b-nav-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),s("b-navbar-brand",{attrs:{to:"/"}},[t._v("Shell.js")]),t._v(" "),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-nav",{attrs:{"is-nav-bar":""}},[s("b-nav-item",{attrs:{to:"/documentation"}},[t._v("Documentation")]),t._v(" "),s("b-nav-item",{attrs:{to:"/examples"}},[t._v("Examples")])],1)],1)],1),t._v(" "),s("router-view")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"ribbon",attrs:{href:"https://github.com/davidecaruso/shell.js",target:"_blank"}},[s("img",{attrs:{alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",src:"https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"}})])}],o={render:a,staticRenderFns:n};e.a=o},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),o=s("lO7g"),r=s("ePYJ"),i=s("HJNZ"),l=s("sCSS"),u=s("Jmt5"),c=(s.n(u),s("9M+g"));s.n(c);a.a.use(l.a),a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/documentation",name:"Documentation",component:r.a},{path:"/examples",name:"Examples",component:i.a}]})},ePYJ:function(t,e,s){"use strict";var a=s("KSCX"),n=s("7CyX"),o=s("VU/8"),r=o(a.a,n.a,!1,null,null,null);e.a=r.exports},hkpw:function(t,e){},lO7g:function(t,e,s){"use strict";function a(t){s("LqPf")}var n=s("Fs8J"),o=s("PLKI"),r=s("VU/8"),i=a,l=r(n.a,o.a,!1,i,"data-v-370ff164",null);e.a=l.exports},wg1N:function(t,e){},xJD8:function(t,e,s){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.58a6cf2137ecd1a9f903.js.map