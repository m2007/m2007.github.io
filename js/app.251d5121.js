(function(t){function e(e){for(var n,s,a=e[0],i=e[1],u=e[2],h=0,p=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&p.push(c[s][0]),c[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==c[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},c={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c={class:"container sm:mx-4 sm:my-16"},o=Object(n["f"])("div",{class:"header"},[Object(n["f"])("p",{class:"text-h1 mb-4"},"Crypto Exchange"),Object(n["f"])("p",{class:"text-h2"},"Exchange fast and easy")],-1),s={class:"lg:flex items-center"},a=Object(n["f"])("div",{class:"swap-icon sm:w-full sm:flex sm:my-4 sm:mx-0 sm:justify-end"},[Object(n["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 sm:transform sm:rotate-90",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})])],-1),i={class:"mt-8"},u=Object(n["f"])("p",{class:"mb-2"},"Your Ethereum address",-1),l={class:"lg:flex"},h=Object(n["f"])("input",{class:"adress-input w-full p-4 lg:mr-8 sm:mb-4"},null,-1),p={key:0,class:"err-alert mt-2"};function m(t,e,r,m,f,b){var d=Object(n["j"])("crypto-input-from"),j=Object(n["j"])("crypto-input-to");return Object(n["h"])(),Object(n["e"])("div",c,[o,Object(n["f"])("div",s,[t.cryptos&&t.exchangeCryptos.from?(Object(n["h"])(),Object(n["c"])(d,{key:0,cryptos:t.cryptos,minAmount:t.minAmount,onSetCrypto:b.setCrypto,onUpdatedNewAmountFrom:b.updateAmountTo},null,8,["cryptos","minAmount","onSetCrypto","onUpdatedNewAmountFrom"])):Object(n["d"])("",!0),a,t.cryptos&&t.exchangeCryptos.to?(Object(n["h"])(),Object(n["c"])(j,{key:1,cryptos:t.cryptos,estimatedAmount:t.estimatedAmount,onSetCrypto:b.setCrypto},null,8,["cryptos","estimatedAmount","onSetCrypto"])):Object(n["d"])("",!0)]),Object(n["f"])("div",i,[u,Object(n["f"])("div",l,[h,Object(n["f"])("button",{class:Object(n["g"])(["btn sm:w-full",{"btn-disabled":t.err}])}," Exchange ",2)]),t.err?(Object(n["h"])(),Object(n["e"])("p",p,"This pair is disabled now")):Object(n["d"])("",!0)])])}var f=r("1da1"),b=(r("99af"),r("d3b7"),r("25f0"),r("96cf"),r("bc3a")),d=r.n(b),j=(r("ac1f"),r("841c"),r("fb6a"),r("b0c0"),{class:"crform"}),O=["type","placeholder"],y={key:0,class:"crform_btn-logo"},v=["src"],g={class:"uppercase"},w={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},C=["d"],k={key:0,class:"crform-search"},x=["onClick"],S=["src"],A={class:"mr-3 uppercase flex items-center"};function _(t,e,r,c,o,s){return Object(n["h"])(),Object(n["e"])("div",{class:Object(n["g"])(["crcontainer",{"crcontainer--active rounded-b-none":t.search}])},[Object(n["f"])("div",j,[Object(n["n"])(Object(n["f"])("input",{class:Object(n["g"])(["crform_input",{"crform_input--close":t.search}]),type:t.search?"text":"number",placeholder:t.search?"Search":"",onBlur:e[0]||(e[0]=function(){return s.onBlurFrom&&s.onBlurFrom.apply(s,arguments)}),"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.value=e})},null,42,O),[[n["l"],t.value]]),Object(n["f"])("div",{class:Object(n["g"])(["crform_btn",{"crform_btn--close":t.search}]),onClick:e[2]||(e[2]=function(){return s.toogleInput&&s.toogleInput.apply(s,arguments)})},[t.search?Object(n["d"])("",!0):(Object(n["h"])(),Object(n["e"])("div",y,[Object(n["f"])("img",{class:"mr-3",src:t.activeCrypto.image},null,8,v),Object(n["f"])("span",g,Object(n["k"])(t.activeCrypto.ticker),1)])),Object(n["f"])("div",{class:Object(n["g"])(["crform_btn-icon",{"mr-4":t.search}])},[(Object(n["h"])(),Object(n["e"])("svg",w,[Object(n["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:t.search?"M6 18L18 6M6 6l12 12":"M19 9l-7 7-7-7"},null,8,C)]))],2)],2)]),t.search?(Object(n["h"])(),Object(n["e"])("div",k,[(Object(n["h"])(!0),Object(n["e"])(n["a"],null,Object(n["i"])(s.cryptoSearchOptions.slice(0,3),(function(t){return Object(n["h"])(),Object(n["e"])("div",{class:"crform-option",key:t.ticker,onClick:function(e){return s.chooseCrypto(t)}},[Object(n["f"])("img",{class:"mr-3",src:t.image},null,8,S),Object(n["f"])("span",A,Object(n["k"])(t.ticker),1),Object(n["f"])("span",null,Object(n["k"])(t.name),1)],8,x)})),128))])):Object(n["d"])("",!0)],2)}r("498a"),r("4de4"),r("caad"),r("2532");var M={name:"CryptoInput",props:{cryptos:Array,minAmount:String},data:function(){return{activeCrypto:{},value:"",search:!1,amountStr:null,searchStr:""}},watch:{minAmount:function(){this.amountStr=this.minAmount,this.search||(this.value=this.amountStr)},value:function(){this.search&&(this.searchStr=this.value.toString())}},computed:{cryptoSearchOptions:function(){var t=this,e=this.searchStr.toLowerCase().trim();return this.cryptos.filter((function(r){return r.name!=t.activeCrypto.name&&(r.name.toLowerCase().includes(e)||r.ticker.toLowerCase().includes(e))}))}},mounted:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.activeCrypto=t.cryptos[0],t.value=t.amountStr=t.minAmount;case 2:case"end":return e.stop()}}),e)})))()},methods:{onBlurFrom:function(){this.search||this.$emit("updatedNewAmountFrom",this.value.toString())},toogleInput:function(){this.search=!this.search,this.search?this.value=this.searchStr:this.value=this.amountStr},chooseCrypto:function(t){this.value=this.searchStr="",this.activeCrypto=t,this.$emit("setCrypto",{from:!0,crypto:this.activeCrypto}),this.search=!this.search}}},I=r("6b0d"),E=r.n(I);const L=E()(M,[["render",_]]);var B=L,F={class:"crform"},P=["disabled","placeholder"],R={key:0,class:"crform_btn-logo"},T=["src"],U={class:"uppercase"},N={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},$=["d"],J={key:0,class:"crform-search"},V=["onClick"],H=["src"],Y={class:"mr-3 uppercase flex items-center"};function q(t,e,r,c,o,s){return Object(n["h"])(),Object(n["e"])("div",{class:Object(n["g"])(["crcontainer",{"crcontainer--active rounded-b-none":t.search}])},[Object(n["f"])("div",F,[Object(n["n"])(Object(n["f"])("input",{class:Object(n["g"])(["crform_input",{"crform_input--close":t.search}]),disabled:!t.search,placeholder:t.search?"Search":"","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.value=e})},null,10,P),[[n["m"],t.value]]),Object(n["f"])("div",{class:Object(n["g"])(["crform_btn",{"crform_btn--close":t.search}]),onClick:e[1]||(e[1]=function(){return s.toogleInput&&s.toogleInput.apply(s,arguments)})},[t.search?Object(n["d"])("",!0):(Object(n["h"])(),Object(n["e"])("div",R,[Object(n["f"])("img",{class:"mr-3",src:t.activeCrypto.image},null,8,T),Object(n["f"])("span",U,Object(n["k"])(t.activeCrypto.ticker),1)])),Object(n["f"])("div",{class:Object(n["g"])(["crform_btn-icon",{"mr-4":t.search}])},[(Object(n["h"])(),Object(n["e"])("svg",N,[Object(n["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:t.search?"M6 18L18 6M6 6l12 12":"M19 9l-7 7-7-7"},null,8,$)]))],2)],2)]),t.search?(Object(n["h"])(),Object(n["e"])("div",J,[(Object(n["h"])(!0),Object(n["e"])(n["a"],null,Object(n["i"])(s.cryptoSearchOptions.slice(0,3),(function(t){return Object(n["h"])(),Object(n["e"])("div",{class:"crform-option",key:t.ticker,onClick:function(e){return s.chooseCrypto(t)}},[Object(n["f"])("img",{class:"mr-3",src:t.image},null,8,H),Object(n["f"])("span",Y,Object(n["k"])(t.ticker),1),Object(n["f"])("span",null,Object(n["k"])(t.name),1)],8,V)})),128))])):Object(n["d"])("",!0)],2)}var z={name:"CryptoInput",props:{estimatedAmount:String,cryptos:Array},data:function(){return{activeCrypto:{},value:"",search:!1,amountStr:null,searchStr:""}},watch:{estimatedAmount:function(){this.value=this.amountStr=this.estimatedAmount},value:function(){this.search&&(this.searchStr=this.value.toString())}},computed:{cryptoSearchOptions:function(){var t=this,e=this.searchStr.toLowerCase().trim();return this.cryptos.filter((function(r){return r.name!=t.activeCrypto.name&&(r.name.toLowerCase().includes(e)||r.ticker.toLowerCase().includes(e))}))}},mounted:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.activeCrypto=t.cryptos[1];case 1:case"end":return e.stop()}}),e)})))()},methods:{toogleInput:function(){this.search=!this.search,this.search?this.value=this.searchStr:this.value=this.amountStr},chooseCrypto:function(t){this.value=this.searchStr="",this.activeCrypto=t,this.$emit("setCrypto",{to:!0,crypto:this.activeCrypto}),this.search=!this.search}}};const D=E()(z,[["render",q]]);var G=D,K={name:"App",components:{CryptoInputFrom:B,CryptoInputTo:G},data:function(){return{api:"c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd",err:!1,minAmount:"",estimatedAmount:"",exchangeCryptos:{from:null,to:null},cryptos:null}},mounted:function(){var t=this;d.a.get("https://api.changenow.io/v1/currencies?active=true&fixedRate=true").then((function(e){t.cryptos=e.data,t.exchangeCryptos={from:t.cryptos[0],to:t.cryptos[1]}})).then((function(){return t.getMinAmount()})).then((function(){return t.getEstimated(t.minAmount)}))},methods:{updateAmountTo:function(t){+t<+this.minAmount?this.estimatedAmount="-":this.getEstimated(t)},setCrypto:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:return t.from?e.exchangeCryptos.from=t.crypto:e.exchangeCryptos.to=t.crypto,r.next=5,e.getMinAmount();case 5:e.getEstimated(e.minAmount);case 6:case"end":return r.stop()}}),r)})))()},getMinAmount:function(){var t=this;return d()("https://api.changenow.io/v1/min-amount/".concat(this.exchangeCryptos.from.ticker,"_").concat(this.exchangeCryptos.to.ticker,"?api_key=").concat(this.api)).then((function(e){t.minAmount=e.data.minAmount.toString(),t.err=!1})).catch((function(){t.minAmount="",t.err=!0}))},getEstimated:function(t){var e=this;return d()("https://api.changenow.io/v1/exchange-amount/".concat(+t,"/").concat(this.exchangeCryptos.from.ticker,"_").concat(this.exchangeCryptos.to.ticker,"/?api_key=").concat(this.api)).then((function(t){e.estimatedAmount=t.data.estimatedAmount.toString(),e.err=!1})).catch((function(){e.estimatedAmount="",e.err=!0}))}}};r("75d7");const Q=E()(K,[["render",m]]);var W=Q;r("ba8c");Object(n["b"])(W).mount("#app")},"75d7":function(t,e,r){"use strict";r("bb27")},ba8c:function(t,e,r){},bb27:function(t,e,r){}});
//# sourceMappingURL=app.251d5121.js.map