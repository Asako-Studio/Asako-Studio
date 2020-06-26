(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-badge/index"],{"79ab":function(t,n,e){"use strict";e.r(n);var r=e("9146"),a=e("c19a");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("b865");var i,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"60acdef3",null,!1,r["a"],i);n["default"]=o.exports},9146:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}))},c19a:function(t,n,e){"use strict";e.r(n);var r=e("c81c"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},c81c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"KpBadge",props:{type:{type:String,validator:function(t){return["primary","error","default","warning"].includes(t)},default:"primary"},size:{type:String,default:""},color:String,bgColor:String,bgGradient:String,dot:{type:Boolean,default:!1}},data:function(){return{prefixCls:"k-badge"}},methods:{handleClick:function(){this.$emit("click")}}};n.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-badge/index-create-component',
    {
        'components/kp-badge/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("79ab"))
        })
    },
    [['components/kp-badge/index-create-component']]
]);
