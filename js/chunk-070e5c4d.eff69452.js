(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-070e5c4d"],{"0418":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{on:{click:function(e){return t.PageHome()}}},[t._v("Home")]),n("div",{on:{click:function(e){return t.PageWork()}}},[t._v("Work")]),n("div",{on:{click:function(e){return t.PageAbout()}}},[t._v("About")]),n("div",{on:{click:function(e){return t.PageThreejs()}}},[t._v("TestThreejs")])])},r=[],u=(n("b0c0"),{name:"Header",props:{},data:function(){return{nowTab:""}},mounted:function(){this.nowTab=this.GetRouteName()},computed:{},methods:{GetRouteName:function(){return this.$router.currentRoute.name},PageHome:function(){"Home"!=this.nowTab&&(this.$router.push({path:"/page/Home"}),this.nowTab="Home")},PageWork:function(){"Work"!=this.nowTab&&(this.$router.push({path:"/page/Work"}),this.nowTab="Work")},PageAbout:function(){"About"!=this.nowTab&&(this.$router.push({path:"/page/About"}),this.nowTab="About")},PageThreejs:function(){"Threejs"!=this.nowTab&&(this.$router.push({path:"/page/Test/Threejs"}),this.nowTab="Threejs")}},components:{}}),a=u,i=n("2877"),c=Object(i["a"])(a,o,r,!1,null,null,null);e["a"]=c.exports},b0c0:function(t,e,n){var o=n("83ab"),r=n("9bf2").f,u=Function.prototype,a=u.toString,i=/^\s*function ([^ (]*)/,c="name";o&&!(c in u)&&r(u,c,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},f126:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Work"}},[n("Header"),n("h3",[t._v("Work")])],1)},r=[],u=n("0418"),a={mounted:function(){},data:function(){return{}},computed:{},methods:{AddLecture:function(){}},components:{Header:u["a"]}},i=a,c=n("2877"),s=Object(c["a"])(i,o,r,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-070e5c4d.eff69452.js.map