(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-navbar/index"],{4855:function(e,t,n){"use strict";n.r(t);var a=n("d08f"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},"5bc7":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},"5e45":function(e,t,n){"use strict";n.r(t);var a=n("5bc7"),o=n("4855");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("977e");var i,u=n("f0c5"),f=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"4af98d74",null,!1,a["a"],i);t["default"]=f.exports},d08f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-icon/index")]).then(function(){return resolve(n("dd5e"))}.bind(null,n)).catch(n.oe)},o={name:"KpNavbar",components:{KpIcon:a},props:{title:{type:[String,Boolean],default:""},fixed:{type:Boolean,default:!0},transparent:{type:Boolean,default:!0},left:{type:[Boolean,String],default:!1},leftIcon:String,leftIconSize:[Number,String]},data:function(){return{pages:0,prefixCls:"k-navbar",navBarHeight:this.CustomBar||100}},created:function(){this.pages=getCurrentPages().length},methods:{handleCommonNavigate:function(){if("string"===typeof this.left)e.navigateTo({url:this.left});else{if(this.pages>1)return e.navigateBack();e.switchTab({url:"/pages/home/index"})}}}};t.default=o}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-navbar/index-create-component',
    {
        'components/kp-navbar/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5e45"))
        })
    },
    [['components/kp-navbar/index-create-component']]
]);
