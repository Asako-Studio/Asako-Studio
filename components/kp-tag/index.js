(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-tag/index"],{"23c6":function(t,e,n){"use strict";n.r(e);var r=n("d723"),u=n("23f5");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("af90");var i,c=n("f0c5"),l=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"0e42bf2e",null,!1,r["a"],i);e["default"]=l.exports},"23f5":function(t,e,n){"use strict";n.r(e);var r=n("c725"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},c725:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"KpTag",props:{type:{type:String,validator:function(t){return["primary","error","default","success","grey"].includes(t)},default:"primary"},color:String,bgColor:String,size:{type:String,default:""},weight:{type:[Boolean,Number,String],default:400},shape:{type:String,validator:function(t){return["circle","square","fillet"].includes(t)},default:"fillet"},plain:{type:Boolean,default:!1}},data:function(){return{prefixCls:"k-tag"}},computed:{},methods:{handleClick:function(){this.$emit("click")}}};e.default=r},d723:function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-tag/index-create-component',
    {
        'components/kp-tag/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("23c6"))
        })
    },
    [['components/kp-tag/index-create-component']]
]);
