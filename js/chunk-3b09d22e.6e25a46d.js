(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b09d22e"],{"1d7b":function(t,e,n){},"8d0b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TestVRVideo"}},[n("Header"),n("iframe",{attrs:{src:"https://www.youtube.com/embed/IvuEqW051ak",title:"YouTube video player",frameborder:"0",allow:"autoplay; encrypted-media",sandbox:"allow-scripts allow-same-origin",allowfullscreen:""}})],1)},a=[],u=n("a960"),i={mounted:function(){},data:function(){return{}},computed:{},methods:{AddLecture:function(){}},components:{Header:u["a"]}},s=i,r=(n("e736"),n("2877")),c=Object(r["a"])(s,o,a,!1,null,"5fa45560",null);e["default"]=c.exports},a960:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area",attrs:{id:"Header"}},[n("div",{staticClass:"header-center"},[n("label",{staticClass:"header-logo-txt",on:{click:function(e){return t.PageHome()}}},[t._v("Ian EN")]),n("button",{class:t.MenuBtnClass,on:{click:function(e){return t.MenuSwitch()}}},[n("span")]),n("div",{class:t.MenuClass},[n("div",{staticClass:"gray-area",on:{click:function(e){return e.target!==e.currentTarget?null:t.MenuSwitch()}}}),n("button",{class:t.MenuItemClass("Home"),on:{click:function(e){return t.PageHome()}}},[t._v("Home")]),n("button",{class:t.MenuItemClass("PortfolioList"),on:{click:function(e){return t.PagePortfolioList()}}},[t._v("Portfolio")])])])]),n("div",{staticClass:"header-position"})])},a=[],u=(n("b0c0"),n("1d7b"),{name:"Header",props:{},data:function(){return{nowTab:"",nowApp:"",MenuShow:!1}},mounted:function(){this.nowTab=this.GetRouteName()},computed:{MenuBtnClass:function(){return this.MenuShow?"header-menu-btn active":"header-menu-btn"},MenuClass:function(){return this.MenuShow?"header-menu-show":"header-menu-close"}},methods:{GetRouteName:function(){return this.$router.currentRoute.name},MenuSwitch:function(){this.MenuShow=!this.MenuShow},MenuItemClass:function(t){return this.nowTab==t?"menu-item-select":"menu-item"},PageHome:function(){this.MenuShow=!1,"Home"!=this.nowTab&&(this.$router.push({path:"/page/Home"}),this.nowTab="Home"),this.ScrollTO("Header")},PageAboutUs:function(){this.MenuShow=!1,"AboutUS"!=this.nowTab&&(this.$router.push({path:"/AboutUS"}),this.nowTab="AboutUS"),this.ScrollTO("Header")},PagePortfolioList:function(){this.MenuShow=!1,"PortfolioList"!=this.nowTab&&(this.$router.push({path:"/page/PortfolioList"}),this.nowTab="PortfolioList"),this.ScrollTO("Header")}},components:{}}),i=u,s=n("2877"),r=Object(s["a"])(i,o,a,!1,null,null,null);e["a"]=r.exports},b0c0:function(t,e,n){var o=n("83ab"),a=n("9bf2").f,u=Function.prototype,i=u.toString,s=/^\s*function ([^ (]*)/,r="name";o&&!(r in u)&&a(u,r,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},e736:function(t,e,n){"use strict";n("ffae")},ffae:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3b09d22e.6e25a46d.js.map