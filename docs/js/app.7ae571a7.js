(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/field-guide-ui/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0343":function(e,t,n){},"0398":function(e,t,n){},"0834":function(e,t,n){e.exports=n.p+"img/bird_1.f065e68b.jpg"},"0fd8":function(e,t,n){"use strict";var a=n("6b5d"),i=n.n(a);i.a},"27b6":function(e,t,n){"use strict";var a=n("0343"),i=n.n(a);i.a},"2ead":function(e,t,n){"use strict";var a=n("6d1d"),i=n.n(a);i.a},3372:function(e,t,n){},"46c3":function(e,t,n){"use strict";var a=n("c557"),i=n.n(a);i.a},"492e":function(e,t,n){},5031:function(e,t,n){"use strict";var a=n("e4a7"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("998c"),r=n.n(i),o=(n("d48d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Container",{attrs:{mobile:""},scopedSlots:e._u([{key:"sidebar",fn:function(t){return[n("SideBar",{staticClass:"side-bar",attrs:{toggle:t.toggle,title:"Field Guide",page:e.currentRouteName}},[n("Content",[t.isMobile?e._e():n("header-large",[e._v("\n          FIELD GUIDE\n        ")]),t.isMobile?e._e():n("br"),n("header-medium",[e._v("\n          Overview\n        ")]),n("router-link",{attrs:{to:"/Introduction"},nativeOn:{click:function(e){return t.close(e)}}},[e._v("\n          Introduction\n        ")]),n("router-link",{attrs:{to:"/Introduction"},nativeOn:{click:function(e){return t.close(e)}}},[e._v("\n          Setup\n        ")]),n("header-medium",[e._v("\n          Components\n        ")]),n("router-link",{attrs:{to:"/ImageContainer"},nativeOn:{click:function(e){return t.close(e)}}},[e._v("\n          Image Container\n        ")]),n("router-link",{attrs:{to:"/Card"},nativeOn:{click:function(e){return t.close(e)}}},[e._v("\n          Card\n        ")])],1)],1)]}}])},[n("template",{slot:"content"},[n("Content",{attrs:{padding:""}},[n("router-view")],1)],1)],2)}),s=[],c=(n("7f7f"),n("456d"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello-world"},[n("span",[e._v("\n    Hello World: "+e._s(this.msg)+"\n  ")])])}),l=[],d={name:"HelloWorld",props:{msg:String}},u=d,p=(n("79ae"),n("2877")),f=Object(p["a"])(u,c,l,!1,null,"317f9ed6",null),m=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-bar",class:{mobile:e.isMobile}},[e.isMobile?[n("div",{staticClass:"skinny-sidebar"},[n("div",{staticClass:"page"},[e._v(e._s(e.page))]),n("div",{staticClass:"title"},[e._v(e._s(e.title))]),n("span",{staticClass:"menu-icon",on:{click:e.toggleExpanded}},[n("Menu")],1)]),n("div",{staticClass:"off-screen"},[e._t("default")],2)]:[e._t("default")]],2)},b=[],v=n("8aa8"),_={name:"SideBar",components:{Menu:v["a"]},props:{title:String,page:String,mobile:Boolean,toggle:Function},data:function(){return{width:window.innerWidth,expanded:!1}},created:function(){var e=this;window.addEventListener("resize",(function(){e.width=window.innerWidth}))},computed:{isMobile:function(){return this.width<600}},methods:{toggleExpanded:function(){this.toggle()}}},h=_,x=(n("dd6b"),Object(p["a"])(h,g,b,!1,null,"eee39a82",null)),C=x.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:{expanded:e.expanded}},[e.mobile?[e._t("sidebar",null,{close:e.close,toggle:e.toggle,isExpanded:e.isExpanded,isMobile:e.isMobile}),e._t("content")]:[e._t("default")]],2)},E=[],w={name:"Container",data:function(){return{width:window.innerWidth,expanded:!1}},props:{title:String,mobile:Boolean},created:function(){var e=this;window.addEventListener("resize",(function(){e.width=window.innerWidth,e.close()}))},computed:{isMobile:function(){return this.width<600},isExpanded:function(){return this.isMobile&&this.expanded}},methods:{toggle:function(){this.expanded=!this.expanded},close:function(){this.expanded=!1}}},j=w,I=(n("88b1"),Object(p["a"])(j,y,E,!1,null,null,null)),O=I.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scrollbox"},[n("div",{staticClass:"content",class:{padding:e.padding}},[e._t("default")],2)])},k=[],$={name:"Content",props:{padding:Boolean}},M=$,T=(n("70e9"),Object(p["a"])(M,S,k,!1,null,"c7a68972",null)),B=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"header-large"},[e._t("default")],2)},L=[],W={name:"HeaderLarge"},D=W,H=(n("b57b"),Object(p["a"])(D,P,L,!1,null,"bd849bcc",null)),A=H.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"header-medium"},[e._t("default")],2)},N=[],U={name:"HeaderMedium"},z=U,F=(n("c030"),Object(p["a"])(z,R,N,!1,null,"24b56381",null)),G=F.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"text-large"},[e._t("default")],2)},V=[],q={name:"TextLarge"},K=q,Q=(n("0fd8"),Object(p["a"])(K,J,V,!1,null,"24a56eba",null)),X=Q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hr",{staticClass:"divider"})},Z=[],ee={name:"Divider"},te=ee,ne=(n("9a7a"),Object(p["a"])(te,Y,Z,!1,null,"261737f4",null)),ae=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-container"},[n("img",{attrs:{src:e.src}}),n("div",{staticClass:"caption"},[e._t("caption")],2)])},re=[],oe={name:"ImageContainer",props:{src:String}},se=oe,ce=(n("27b6"),Object(p["a"])(se,ie,re,!1,null,"e7096be8",null)),le=ce.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-content"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code,expression:"code"}]},[n("code",{staticClass:"xml"})])])},ue=[],pe=(n("8da8"),{name:"CodeContent",props:{code:String}}),fe=pe,me=(n("bc48"),Object(p["a"])(fe,de,ue,!1,null,"52417c2a",null)),ge=me.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container",class:{shadow:e.shadow}},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-left"}),n("div",{staticClass:"card-header-title"},[n("header-medium",[e._v("\n        "+e._s(e.title)+"\n      ")])],1),n("div",{staticClass:"card-header-right"})]),n("div",{staticClass:"card-body"},[e._t("default")],2)])},ve=[],_e={name:"Card",props:{title:String,shadow:Boolean}},he=_e,xe=(n("c239"),Object(p["a"])(he,be,ve,!1,null,"432a9743",null)),Ce=xe.exports;n("4fa8");var ye={HelloWorld:m,SideBar:C,Container:O,Content:B,HeaderLarge:A,HeaderMedium:G,TextLarge:X,Divider:ae,ImageContainer:le,CodeContent:ge,Card:Ce};Object.keys(ye).forEach((function(e){a["a"].component(e,ye[e])}));var Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-example"},[n("header-medium",[e._v("\n    "+e._s(e.title)+"\n  ")]),n("div",{staticClass:"label",on:{click:e.toggleCode}},[e._v("\n    "+e._s(e.labelText)+"\n  ")]),e.viewingCode?n("code-content",{attrs:{code:e.code}}):n("div",[e._t("example")],2)],1)},we=[],je={name:"CodeExample",props:{title:String,code:String},computed:{labelText:function(){return this.viewingCode?"View Results":"View Code"}},data:function(){return{viewingCode:!1}},methods:{toggleCode:function(){this.viewingCode=!this.viewingCode}}},Ie=je,Oe=(n("46c3"),Object(p["a"])(Ie,Ee,we,!1,null,"eaf654d4",null)),Se=Oe.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",{staticClass:"usage",attrs:{title:"Usage"}},[e.props.length?n("header-medium",[e._v("\n    Props\n  ")]):e._e(),e._l(e.props,(function(t,a){return n("div",{key:a},[n("text-large",[e._v("\n      "+e._s(t.name)+" | "+e._s(t.type)+" | "+e._s(t.description)+"\n    ")])],1)})),e.slots.length?n("header-medium",[e._v("\n    Slots\n  ")]):e._e(),e._l(e.slots,(function(t,a){return n("div",{key:"slot-"+a},[n("text-large",[e._v("\n      "+e._s(t.name)+" | "+e._s(t.description)+"\n    ")])],1)}))],2)},$e=[],Me={name:"Usage",props:{props:{type:Array,default:function(){return[]}},slots:{type:Array,default:function(){return[]}}}},Te=Me,Be=Object(p["a"])(Te,ke,$e,!1,null,"7e1e5a28",null),Pe=Be.exports,Le={CodeExample:Se,Usage:Pe};Object.keys(Le).forEach((function(e){a["a"].component(e,Le[e])}));var We={name:"app",computed:{currentRouteName:function(){return this.$route.name}}},De=We,He=(n("c418"),Object(p["a"])(De,o,s,!1,null,"b3b6d25e",null)),Ae=He.exports,Re=n("8c4f"),Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("divider"),n("text-large",[e._v("\n    A design system inspired by the simplicity and useability\n    found in vintage field guides.\n  ")]),n("divider"),e._l(e.images,(function(e,t){return n("image-container",{key:t,attrs:{src:e}})}))],2)},Ue=[],ze=n("0834"),Fe=n.n(ze),Ge=n("b536"),Je=n.n(Ge),Ve=n("ea0c"),qe=n.n(Ve),Ke=n("efd9"),Qe=n.n(Ke),Xe=n("7022"),Ye=n.n(Xe),Ze=n("acc2"),et=n.n(Ze),tt=n("d6f6"),nt=n.n(tt),at=n("ff60"),it=n.n(at),rt=n("b9d9"),ot=n.n(rt),st={name:"LandingPage",data:function(){return{images:[Fe.a,Je.a,qe.a,Qe.a,Ye.a,et.a,nt.a,it.a,ot.a]}}},ct=st,lt=(n("5031"),Object(p["a"])(ct,Ne,Ue,!1,null,"348d9eb0",null)),dt=lt.exports,ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("divider"),n("header-large",[e._v("\n    IMAGE CONTAINER\n  ")]),n("text-large",[e._v("\n    The `image-container` component provides the ability to render images.\n  ")]),n("code-example",{attrs:{title:"Basic Example",code:e.basicExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("image-container",{attrs:{src:e.basicExampleImage}})]},proxy:!0}])}),n("br"),n("usage",{attrs:{props:e.props,slots:e.slots}}),n("code-example",{attrs:{title:"With Caption",code:e.labelExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("image-container",{attrs:{src:e.labelExampleImage},scopedSlots:e._u([{key:"caption",fn:function(){return[n("span",[e._v("\n            This is a caption.\n          ")])]},proxy:!0}])})]},proxy:!0}])})],1)},pt=[],ft={name:"ImageContainerDocs",data:function(){return{basicExampleImage:Fe.a,basicExample:"<template>\n  <image-container :src=\"birdImage\">\n</template>\n\n<script>\nimport birdImage from '../assets/field_note_examples/bird_1.jpg';\n\nexport default {\n  name: 'ImageContainer',\n  data: () => ({\n    birdImage,\n  }),\n};\n<script>",labelExampleImage:qe.a,labelExample:"<template>\n  <image-container :src=\"labelImage\">\n   <template v-slot:caption>\n     <span>\n       This is a caption.\n     </span>\n   </template>\n  </image-container>\n</template>\n\n<script>\nimport labelImage from '../assets/field_note_examples/bird_4.jpg';\n\nexport default {\n  name: 'ImageContainer',\n  data: () => ({\n    labelImage,\n  }),\n};\n<script>",props:[{name:"src",type:"string",description:"Image to be rendered"}],slots:[{name:"caption",description:"Renders below the image.  Typically used for captions."}]}}},mt=ft,gt=(n("2ead"),Object(p["a"])(mt,ut,pt,!1,null,"8400f60e",null)),bt=gt.exports,vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("divider"),n("header-large",[e._v("\n    CARD\n  ")]),n("text-large",[e._v("\n    The `card` component provides the ability to organize\n    content into different sections.\n  ")]),n("code-example",{attrs:{title:"Basic Example",code:e.basicExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("card",{attrs:{title:"Card Title"}},[n("text-large",[e._v("\n          Card Body\n        ")])],1)]},proxy:!0}])}),n("br"),n("usage",{attrs:{props:e.props,slots:e.slots}}),n("code-example",{attrs:{title:"With Shadow",code:e.labelExample},scopedSlots:e._u([{key:"example",fn:function(){return[n("card",{attrs:{title:"Card Title",shadow:""}},[n("text-large",[e._v("\n          Card Body\n        ")])],1)]},proxy:!0}])})],1)},_t=[],ht={name:"CardDocs",data:function(){return{basicExampleImage:Fe.a,basicExample:"<template>\n  <image-container :src=\"birdImage\">\n</template>\n\n<script>\nimport birdImage from '../assets/field_note_examples/bird_1.jpg';\n\nexport default {\n  name: 'ImageContainer',\n  data: () => ({\n    birdImage,\n  }),\n};\n<script>",labelExampleImage:qe.a,labelExample:"<template>\n  <image-container :src=\"labelImage\">\n   <template v-slot:caption>\n     <span>\n       This is a caption.\n     </span>\n   </template>\n  </image-container>\n</template>\n\n<script>\nimport labelImage from '../assets/field_note_examples/bird_4.jpg';\n\nexport default {\n  name: 'ImageContainer',\n  data: () => ({\n    labelImage,\n  }),\n};\n<script>",props:[{name:"title",type:"string",description:"Title of card"}],slots:[]}}},xt=ht,Ct=(n("f278"),Object(p["a"])(xt,vt,_t,!1,null,"40236248",null)),yt=Ct.exports;a["a"].use(Re["a"]);var Et=new Re["a"]({routes:[{path:"/",name:"LandingPage",component:dt},{path:"/Introduction",name:"Introduction",component:dt},{path:"/ImageContainer",name:"Image Container",component:bt},{path:"/Card",name:"Card",component:yt}]});a["a"].config.productionTip=!1,a["a"].use(r.a),new a["a"]({render:function(e){return e(Ae)},router:Et}).$mount("#app")},6891:function(e,t,n){},"6b5d":function(e,t,n){},"6d1d":function(e,t,n){},7022:function(e,t,n){e.exports=n.p+"img/bird_5.4f228e4a.jpg"},"70e9":function(e,t,n){"use strict";var a=n("e0f2"),i=n.n(a);i.a},"79ae":function(e,t,n){"use strict";var a=n("3372"),i=n.n(a);i.a},"88b1":function(e,t,n){"use strict";var a=n("6891"),i=n.n(a);i.a},"9a7a":function(e,t,n){"use strict";var a=n("492e"),i=n.n(a);i.a},acc2:function(e,t,n){e.exports=n.p+"img/fossil_1.1941035b.jpg"},b536:function(e,t,n){e.exports=n.p+"img/bird_2.73059b11.jpg"},b57b:function(e,t,n){"use strict";var a=n("b803"),i=n.n(a);i.a},b803:function(e,t,n){},b9d9:function(e,t,n){e.exports=n.p+"img/plant_1.9830f6f0.jpg"},bb26:function(e,t,n){},bc48:function(e,t,n){"use strict";var a=n("c9ef"),i=n.n(a);i.a},beb0:function(e,t,n){},c030:function(e,t,n){"use strict";var a=n("beb0"),i=n.n(a);i.a},c239:function(e,t,n){"use strict";var a=n("bb26"),i=n.n(a);i.a},c418:function(e,t,n){"use strict";var a=n("d570"),i=n.n(a);i.a},c557:function(e,t,n){},c9ef:function(e,t,n){},d3ba:function(e,t,n){},d570:function(e,t,n){},d6f6:function(e,t,n){e.exports=n.p+"img/fossil_2.f94d7aa6.jpg"},dd6b:function(e,t,n){"use strict";var a=n("d3ba"),i=n.n(a);i.a},e0f2:function(e,t,n){},e4a7:function(e,t,n){},ea0c:function(e,t,n){e.exports=n.p+"img/bird_3.5d8c597f.jpg"},efd9:function(e,t,n){e.exports=n.p+"img/bird_4.dbddcde9.jpg"},f278:function(e,t,n){"use strict";var a=n("0398"),i=n.n(a);i.a},ff60:function(e,t,n){e.exports=n.p+"img/fossil_3.12883e3c.jpg"}});
//# sourceMappingURL=app.7ae571a7.js.map