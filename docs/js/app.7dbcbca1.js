(function(e){function t(t){for(var i,n,l=t[0],o=t[1],d=t[2],c=0,v=[];c<l.length;c++)n=l[c],a[n]&&v.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,l=1;l<r.length;l++){var o=r[l];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var i={},a={app:0},s=[];function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-daval/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"13be":function(e,t,r){var i=r("26d8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("1c57ef56",i,!0,{sourceMap:!1,shadowMode:!1})},"14a7":function(e,t,r){"use strict";var i=r("81a6"),a=r.n(i);a.a},"26d8":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"",""])},"54fa":function(e,t,r){var i=r("d8ab");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("43ab1312",i,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,r){"use strict";r.r(t);var i={};r.r(i),r.d(i,"type",function(){return ee}),r.d(i,"required",function(){return te}),r.d(i,"regexp",function(){return re}),r.d(i,"min",function(){return ie}),r.d(i,"max",function(){return ae}),r.d(i,"minlen",function(){return se}),r.d(i,"maxlen",function(){return ne}),r.d(i,"length",function(){return le}),r.d(i,"equals",function(){return oe}),r.d(i,"is",function(){return de}),r.d(i,"isnot",function(){return ue}),r.d(i,"isin",function(){return ce});r("cadf"),r("551c"),r("097d");var a=r("2b0e"),s=r("9f7b"),n=(r("f9e3"),r("2dd8"),r("4dd1")),l=r.n(n),o=r("8ed1"),d=r.n(o),u=(r("a052"),r("c964")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("h1",[e._v("vue-daval")]),r("examples-index")],1)},v=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.examples,function(t){return r(t,{key:t,tag:"component",staticClass:"example",attrs:{"get-input-class":e.getInputClass}})}),1)},h=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Basic"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:e.getInputClass(e.$vd.email),domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.email.$error,expression:"$vd.email.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.email.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.email.$validate()}}},[e._v("Validate email")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nemail: { required: true, type: 'email' }\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.email.$errors = "+e._s(e.$vd.email.$errors)+";\n\t\t\t\t")])],1)])])},m=[],$=r("a4bb"),g=r.n($),b=(r("ac6a"),r("5176")),w=r.n(b),y=r("2d7d"),_=r.n(y),C=r("d225"),k=r("b0b4"),x=(r("6762"),r("2fdb"),r("5d73")),E=r.n(x),N=r("0a0d"),V=r.n(N),O=r("db0c"),R=r.n(O),j=r("795b"),q=r.n(j),P=(r("28a5"),r("55dd"),r("7618")),M=r("a745"),I=r.n(M);function T(e){return"string"===typeof e}function B(e){return"number"===typeof e}function S(e){return I()(e)}function z(e){return null!==e&&!I()(e)&&"object"===Object(P["a"])(e)}function L(e){return("object"===Object(P["a"])(e)||"function"===typeof e)&&null!==e&&"function"===typeof e.then}function W(e){return"function"===typeof e}function F(e){return"object"===Object(P["a"])(e)&&e?g()(e).sort().reduce(function(t,r){return t[r]=F(e[r]),t},{}):e}function U(e,t){T(e)&&(e=e.split("."));var r=e.reduce(function(e,t){return e[t]},t);return r}var D=function(){function e(t,r){var i=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(C["a"])(this,e),this.$vm=t,this.$vd=t.$vd,this.promise=new q.a(function(e,t){i.onSuccess=e,i.onError=t}),this.dataPath=r,this.revalidate=a,this.validations=new _.a,this.validated=0,this.finished=!1,this.valid=!0,this.addValidation(this.dataPath),this.updateTime()}return Object(k["a"])(e,[{key:"addValidation",value:function(e){var t=this;e.$hasRules()&&this.validations.set(e.$toString(),e),R()(e.$childs).forEach(function(e){t.addValidation(e)})}},{key:"updateTime",value:function(){this.time=V()()}},{key:"run",value:function(){var e=this.$vd.$getConfig("skipValidationsOnError"),t=this.time,r=!0,i=!1,a=void 0;try{for(var s,n=E()(this.validations.values());!(r=(s=n.next()).done);r=!0){var l=s.value;if(this.checkValidation(l,t),e&&!1===this.valid){this.finished=!0;break}}}catch(o){i=!0,a=o}finally{try{r||null==n.return||n.return()}finally{if(i)throw a}}this.checkValidationsFinished()}},{key:"checkValidation",value:function(e,t){var r=this;if(!1===this.revalidate&&!0===e.$validated)return this.validated++,void(e.$error&&(this.valid=!1));e.$reset(!1),e.$getRules().forEach(function(i){e.$validated||t<r.time||r.checkValidationRule(e,i)})}},{key:"checkValidationRule",value:function(e,t){var r=this,i=!1,a=e.$rules[t],s=this.$vd.$getValidator(t),n=e.$data;"required"===t||![void 0,null].includes(n)||"required"in e.$rules!==!1&&!1!==e.$rules.required?void 0!==s?(W(a)&&(a=a.call(this.$vm)),i=s.call(this.$vm,a,n,e)):W(a)?(s=e.$rules[t],i=s.call(this.$vm,n,e)):(console.warn("Rule "+t+" not valid"),i=!0):i=!0,!0!==L(i)?this.addValidationRuleResult(e,t,i):i.then(function(){r.addValidationRuleResult(e,t,!0)}).catch(function(i){r.addValidationRuleResult(e,t,i.statusText||i)})}},{key:"addValidationRuleResult",value:function(e,t,r){e.$result.add(t,r),!0!==r&&(this.valid=!1),e.$validated&&(this.validated++,this.checkValidationsFinished())}},{key:"checkValidationsFinished",value:function(){this.validations.size>this.validated&&!1===this.finished||(this.finished=!0,!0===this.valid?this.onSuccess():this.onError(),this.$vm.$forceUpdate(),this.$vd.$removeTask(this))}}]),e}(),A=function(){function e(t){return Object(C["a"])(this,e),this.$vm=t,this.$paths={},this.$tasks=new _.a,new Proxy(this,this)}return Object(k["a"])(e,[{key:"get",value:function(e,t){return t in e?this[t]:this.$paths[""][t]}},{key:"$getConfig",value:function(e){return this.$vm.$options.vdConfig[e]}},{key:"$getValidator",value:function(e){return this.$vm.$options.vdValidators[e]}},{key:"$getMessage",value:function(e){return this.$vm.$options.vdMessages[e]}},{key:"$addTask",value:function(e,t){var r=e.$toString(),i=this.$tasks.get(r);return void 0===i?(i=new D(this.$vm,e,t),this.$tasks.set(r,i)):i.updateTime(),i.run(),i}},{key:"$removeTask",value:function(e){var t=e.dataPath.$toString();this.$tasks.delete(t)}}]),e}(),G=(r("20d6"),r("6b54"),r("a481"),function(){function e(t){Object(C["a"])(this,e),this.vd=t.$vd,this.dataPath=t,this.reset()}return Object(k["a"])(e,[{key:"add",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];T(r)&&(t=r,r=!1),r||(t=this.getMessage(e,t)),this.rules[e]=t,r||this.error||(this.error=t),(g()(this.rules).length===this.numRules||this.error&&this.vd.$getConfig("skipRulesOnError"))&&(this.validated=!0)}},{key:"getMessage",value:function(e,t){if(t||(t=this.dataPath.$rules.message),t||(t=this.vd.$getMessage(e)),!t)return this.vd.$getMessage("undefined");var r=this.dataPath.$rules.field||this.dataPath.$key;return t=t.replace("{field}",r),e=this.dataPath.$rules[e].toString(),e=e.split(".").slice(-1)[0],t=t.replace("{rule}",e),t}},{key:"hasError",value:function(){return void 0!==this.error}},{key:"getErrors",value:function(){return R()(this.rules).filter(function(e){return e})}},{key:"reset",value:function(){this.error=void 0,this.rules={},this.numRules=this.dataPath.$getRules().length,this.validated=!1}}]),e}()),J=function(){function e(t){return Object(C["a"])(this,e),this.prop=t,console.error("Rules not defined for "+t),new Proxy(this,this)}return Object(k["a"])(e,[{key:"get",value:function(t,r){return"$"===r[0]?"":new e(this.prop+"."+r)}}]),e}(),Z=function(){function e(t,r,i,a,s){return Object(C["a"])(this,e),this.$vm=t,this.$vd=t.$vd,this.$key=r,this.$data=i,this.$rules=a,this.$parent=s,this.$childs={},this.$proxy=new Proxy(this,this),this.$target=this,this.$vd.$getConfig("validateOnType")&&this.$createWatcher(),!1===this.$createChilds()&&(this.$result=new G(this)),this.$proxy}return Object(k["a"])(e,[{key:"get",value:function(e,t){if(t in e)return this[t];if(this.$hasRules()){if("$validated"===t)return this.$result.validated;if("$hasError"===t)return this.$result.hasError();if("$error"===t)return this.$result.error;if("$errors"===t)return this.$result.getErrors();if(t in this.$rules)return this.$rules[t]}else if("$errors"===t){var r,i={};return R()(this.$childs).forEach(function(e){r=e.$errors,g()(r).length>0&&(i[e.$key]=r)}),i}return t in this.$childs?this.$childs[t]:new J(t)}},{key:"$getTarget",value:function(){return this.$target}},{key:"$createChilds",value:function(){var t,r=this;return z(this.$data)?g()(this.$rules).forEach(function(i){i in r.$data&&(t=new e(r.$vm,i,r.$data[i],r.$rules[i],r),r.$childs[i]=t)}):S(this.$data)&&this.$data.forEach(function(i,a){t=new e(r.$vm,a,i,r.$rules,r),r.$childs[a]=t}),void 0!==t}},{key:"$updateChilds",value:function(){var t,r,i=this,a=R()(this.$childs),s={};a.forEach(function(e){e.$deleteWatcher(!0)}),this.$data.forEach(function(n,l){t=a.findIndex(function(e){return e.$data===n}),-1!==t?(r=a.splice(t,1)[0],r.$key=l,r.$createWatcher(!0)):r=new e(i.$vm,l,n,i.$rules,i),s[l]=r}),this.$childs=s}},{key:"$createWatcher",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$deleteWatcher(),""!==this.$key&&(t&&R()(this.$childs).forEach(function(e){e.$createWatcher()}),this.$watcher=this.$vm.$watch(this.$toString(),function(t,r){if(S(e.$data)){var i=g()(e.$childs).length!==e.$data.length;return!1===i&&(i=e.$data.some(function(t,i){var a=e.$childs[i].$getTarget();return z(a.$data)||S(a.$data)?a.$data!==t:t!==r[i]})),void(i&&e.$updateChilds())}e.$data=t,e.$validate(!0)}))}},{key:"$deleteWatcher",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&R()(this.$childs).forEach(function(e){e.$deleteWatcher(!0)}),"$watcher"in this&&W(this.$watcher)&&(this.$watcher(),this.$watcher=void 0)}},{key:"$hasRules",value:function(){return"$result"in this}},{key:"$getRules",value:function(){var e=g()(this.$rules),t=["message","field","links","linksThen","linksCatch"];return e.filter(function(e){return!1===t.includes(e)})}},{key:"$reset",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&R()(this.$childs).forEach(function(e){e.$reset()}),"$result"in this&&this.$result.reset()}},{key:"$validate",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.$vd.$addTask(this.$proxy,t).promise;return r.then(function(){e.$validateLinks(e.$rules.linksThen)}).catch(function(){e.$validateLinks(e.$rules.linksCatch)}).finally(function(){e.$validateLinks(e.$rules.links)}),r}},{key:"$validateLinks",value:function(t){var r,i=this;void 0!==t&&(t=S(t)?t:[t],t.forEach(function(t){r=U(t,i.$vd),r instanceof e&&r.$validate(!0)}))}},{key:"$toString",value:function(){var e="";return this.$parent&&""!==this.$parent.$key&&(e+=this.$parent.$toString()+"."),e+this.$key}},{key:"$delete",value:function(){R()(this.$childs).forEach(function(e){e.$delete()}),this.$deleteWatcher(),this.$parent&&delete this.$parent.$childs[this.$key]}}]),e}(),Y=r("f499"),H=r.n(Y),K=(r("3b2b"),r("e814")),Q=r.n(K),X={boolean:function(e){return"boolean"===typeof e},number:function(e){return"number"===typeof e},integer:function(e){return"number"===typeof e&&Q()(e,10)===e},float:function(e){return"number"===typeof e&&Q()(e,10)!==e},string:function(e){return"string"===typeof e},url:function(e){return new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i").test(e)},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},date:function(e){return"function"===typeof e.getTime&&"function"===typeof e.getMonth&&"function"===typeof e.getYear}};function ee(e,t){return!1!==X[e](t)}function te(e,t){return!1===e||void 0!==t&&null!==t&&""!==t}function re(e,t){return!1!==new RegExp(e).test(t)}function ie(e,t){return"number"===typeof t&&!(t<e)}function ae(e,t){return"number"===typeof t&&!(t>e)}function se(e,t){if(B(t))t=t.toString();else if(!T(t)&&!S(t))return!1;return!(t.length<e)}function ne(e,t){if(B(t))t=t.toString();else if(!T(t)&&!S(t))return!1;return!(t.length>e)}function le(e,t){if(B(t))t=t.toString();else if(!T(t)&&!S(t))return!1;return t.length===e}function oe(e,t){var r=U(e,this.$vd).$data;return H()(F(t))===H()(F(r))}function de(e,t){return e==t}function ue(e,t){return e!=t}function ce(e,t){return-1!==e.indexOf(t)}var ve={beforeMount:function(){var e=this;this.$vd=new A(this);var t=w()({},this.$data);this._computedWatchers&&g()(this._computedWatchers).forEach(function(r){t[r]=e[r]}),this.$vd.$paths[""]=new Z(this,"",t,this.$options.vdRules)},beforeDestroy:function(){this.$vd.$paths[""].$delete()},vdConfig:{validateOnType:!0,skipValidationsOnError:!1,skipRulesOnError:!1},vdRules:{},vdValidators:i,vdMessages:{type:"This is not a valid {rule}",required:"This field is required",regexp:"This is not a valid value",min:"Minimun value is {rule}",max:"Maximun value is {rule}",minlen:"Minimun length is {rule}",maxlen:"Maximun length is {rule}",length:"Length must be {rule}",equals:"Must equal the field {rule}",is:"Must be {rule}",isnot:"Must not be {rule}",isin:"Must be one of {rule}",undefined:"Undefined error"}},fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{staticClass:"mb-4",attrs:{"header-bg-variant":"dark","header-text-variant":"white"}},[r("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.title))]),e._t("default")],2)},he=[],pe={name:"BCardExample",props:{title:String}},me=pe,$e=(r("14a7"),r("2877")),ge=Object($e["a"])(me,fe,he,!1,null,null,null);ge.options.__file="BCardExample.vue";var be=ge.exports,we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{header:e.title,"header-bg-variant":"info","header-text-variant":"white"}},[r("highlight-code",{attrs:{lang:"javascript"}},[e._t("default")],2)],1)},ye=[],_e={name:"BCardCode",props:{title:String}},Ce=_e,ke=(r("5a8d"),Object($e["a"])(Ce,we,ye,!1,null,null,null));ke.options.__file="BCardCode.vue";var xe=ke.exports,Ee={name:"BasicValidation",components:{BCardExample:be,BCardCode:xe},mixins:[ve],data:function(){return{email:void 0}},props:["getInputClass"],vdRules:{email:{required:!0,type:"email"}}},Ne=Ee,Ve=Object($e["a"])(Ne,p,m,!1,null,null,null);Ve.options.__file="BasicValidation.vue";var Oe=Ve.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Groups"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("h5",[e._v("Login")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],class:e.getInputClass(e.$vd.login.email),domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.login.email.$error,expression:"$vd.login.email.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.login.email.$error))])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],class:e.getInputClass(e.$vd.login.password),attrs:{type:"password"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.login.password.$error,expression:"$vd.login.password.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.login.password.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.login.$validate()}}},[e._v("Validate login")]),r("h5",{staticClass:"mt-3"},[e._v("Register")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],class:e.getInputClass(e.$vd.register.email),domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.register.email.$error,expression:"$vd.register.email.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.register.email.$error))])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],class:e.getInputClass(e.$vd.register.password),attrs:{type:"password"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.register.password.$error,expression:"$vd.register.password.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.register.password.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.register.$validate()}}},[e._v("Validate register")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nlogin: {\n   email: { required: true, type: 'email' },\n   password: { required: true, minlen: 5 }\n},\n\nregister: {\n   email: { required: true, type: 'email' },\n   password: { required: true, minlen: 5, regexp: /^[a-z0-9 ]+$/ig }\n}\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.login.$errors = "+e._s(e.$vd.login.$errors)+";\n\n$vd.register.$errors = "+e._s(e.$vd.register.$errors)+";\n\t\t\t\t")])],1)])])},je=[],qe={name:"GroupsValidation",components:{BCardExample:be,BCardCode:xe},mixins:[ve],data:function(){return{login:{email:void 0,password:void 0},register:{email:void 0,password:void 0}}},props:["getInputClass"],vdRules:{login:{email:{required:!0,type:"email"},password:{required:!0,minlen:5}},register:{email:{required:!0,type:"email"},password:{required:!0,minlen:5,regexp:/^[a-z0-9 ]+$/gi}}},mounted:function(){}},Pe=qe,Me=Object($e["a"])(Pe,Re,je,!1,null,null,null);Me.options.__file="GroupsValidation.vue";var Ie=Me.exports,Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Nested"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[e._l(e.persons,function(t,i){return r("b-card",{key:i,staticClass:"mb-4"},[r("div",{staticClass:"form-group mb-0",attrs:{slot:"header"},slot:"header"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"person.name"}],class:e.$vd.persons[i]?e.getInputClass(e.$vd.persons[i].name):"",attrs:{placeholder:"Name"},domProps:{value:t.name},on:{input:function(r){r.target.composing||e.$set(t,"name",r.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.persons[i].name.$error,expression:"$vd.persons[i].name.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.persons[i].name.$error))])]),r("div",{staticClass:"form-group mb-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"person.address"}],class:e.$vd.persons[i]?e.getInputClass(e.$vd.persons[i].address):"",attrs:{placeholder:"Address"},domProps:{value:t.address},on:{input:function(r){r.target.composing||e.$set(t,"address",r.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.persons[i].address.$error,expression:"$vd.persons[i].address.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.persons[i].address.$error))])])])}),r("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(t){e.$vd.persons.$validate()}}},[e._v("Validate persons")])],2),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\npersons: {\n   name: { required: true, minlen: 5 },\n   address: { required: true }\n}\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.persons.$errors = "+e._s(e.$vd.persons.$errors)+";\n\t\t\t\t")])],1)])])},Be=[],Se={name:"NestedValidations",components:{BCardExample:be,BCardCode:xe},mixins:[ve],data:function(){return{persons:[{name:void 0,address:void 0},{name:void 0,address:void 0}]}},props:["getInputClass"],vdRules:{persons:{name:{required:!0,minlen:5},address:{required:!0}}}},ze=Se,Le=Object($e["a"])(ze,Te,Be,!1,null,null,null);Le.options.__file="NestedValidations.vue";var We=Le.exports,Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Dynamic"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[e._l(e.urls,function(t,i){return r("b-card",{key:i,staticClass:"mb-4"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.urls[i],expression:"urls[i]"}],class:e.$vd.urls[i]?e.getInputClass(e.$vd.urls[i]):"",attrs:{placeholder:"URL"},domProps:{value:e.urls[i]},on:{input:function(t){t.target.composing||e.$set(e.urls,i,t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.urls[i].$error,expression:"$vd.urls[i].$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.urls[i].$error))])]),r("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(t){e.removeUrl(i)}}},[e._v("Remove")])],1)}),r("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(t){e.$vd.urls.$validate()}}},[e._v("Validate urls")]),r("b-button",{staticClass:"ml-2",attrs:{variant:"secondary",size:"sm"},on:{click:function(t){e.addUrl()}}},[e._v("Add url")])],2),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nurls: { required: true, type: 'url' }\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.urls.$errors = "+e._s(e.$vd.urls.$errors)+";\n\t\t\t\t")])],1)])])},Ue=[],De={name:"DynamicValidations",components:{BCardExample:be,BCardCode:xe},mixins:[ve],data:function(){return{urls:["http://www.url1.com",""]}},props:["getInputClass"],vdRules:{urls:{required:!0,type:"url"}},methods:{addUrl:function(){this.urls.push("")},removeUrl:function(e){this.urls.splice(e,1)}}},Ae=De,Ge=Object($e["a"])(Ae,Fe,Ue,!1,null,null,null);Ge.options.__file="DynamicValidation.vue";var Je=Ge.exports,Ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Custom"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Full name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],class:e.getInputClass(e.$vd.fullName),domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.fullName.$error,expression:"$vd.fullName.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.fullName.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.fullName.$validate()}}},[e._v("Validate full name")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nfullName: {\n   required: true,\n   checkFullName(fullName) {\n      let error;\n\n      if (!fullName || fullName.indexOf(' ') === -1)\n         error = 'Invalid full name';\n\n      return error || true;\n   }\n}\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.fullName.$errors = "+e._s(e.$vd.fullName.$errors)+";\n\t\t\t\t")])],1)])])},Ye=[],He={name:"CustomValidation",components:{BCardExample:be,BCardCode:xe},mixins:[ve],data:function(){return{fullName:void 0}},props:["getInputClass"],vdRules:{fullName:{required:!0,checkFullName:function(e){var t;return e&&-1!==e.indexOf(" ")||(t="Invalid full name"),t||!0}}}},Ke=He,Qe=Object($e["a"])(Ke,Ze,Ye,!1,null,null,null);Qe.options.__file="CustomValidation.vue";var Xe=Qe.exports,et=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Links"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Field 1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.field1,expression:"field1"}],class:e.getInputClass(e.$vd.field1),domProps:{value:e.field1},on:{input:function(t){t.target.composing||(e.field1=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.field1.$error,expression:"$vd.field1.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.field1.$error))])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Field 2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.field2,expression:"field2"}],class:e.getInputClass(e.$vd.field2),attrs:{type:"field1"},domProps:{value:e.field2},on:{input:function(t){t.target.composing||(e.field2=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.field2.$error,expression:"$vd.field2.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.field2.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.$validate()}}},[e._v("Validate fields")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nfield1: { required: true, minlen: 5, linksThen: 'field2' },\nfield2: { required: true, type: 'email' }\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.$errors = "+e._s(e.$vd.$errors)+";\n\t\t\t\t")])],1)])])},tt=[],rt={name:"Links",components:{BCardExample:be,BCardCode:xe},mixins:[ve],data:function(){return{field1:void 0,field2:void 0}},props:["getInputClass"],vdRules:{field1:{required:!0,minlen:5,linksThen:"field2"},field2:{required:!0,type:"email"}}},it=rt,at=Object($e["a"])(it,et,tt,!1,null,null,null);at.options.__file="Links.vue";var st=at.exports,nt={name:"ExamplesIndex",components:{BasicValidation:Oe,GroupsValidation:Ie,NestedValidations:We,DynamicValidation:Je,CustomValidation:Xe,Links:st},data:function(){return{examples:["BasicValidation","GroupsValidation","NestedValidations","DynamicValidation","CustomValidation","Links"]}},methods:{getInputClass:function(e){var t="form-control";return void 0===e?t:(e["$error"]?t+=" is-invalid":e["$validated"]&&(t+=" is-valid"),t)}}},lt=nt,ot=(r("e949"),Object($e["a"])(lt,f,h,!1,null,null,null));ot.options.__file="index.vue";var dt=ot.exports,ut={name:"app",components:{ExamplesIndex:dt}},ct=ut,vt=(r("5c0b"),Object($e["a"])(ct,c,v,!1,null,null,null));vt.options.__file="App.vue";var ft=vt.exports;a["a"].use(s["a"]),a["a"].use(u["a"],{languages:{javascript:l.a,vue:d.a}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ft)}}).$mount("#app")},"5a8d":function(e,t,r){"use strict";var i=r("54fa"),a=r.n(i);a.a},"5c0b":function(e,t,r){"use strict";var i=r("e959"),a=r.n(i);a.a},"784e":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"",""])},"81a6":function(e,t,r){var i=r("784e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("6a9e83da",i,!0,{sourceMap:!1,shadowMode:!1})},a33e:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".form-control,.form-control.is-invalid,.form-control.is-valid{border-width:4px}",""])},d8ab:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,".col-sm-8 .card{margin-bottom:1rem}.col-sm-8 .card:last-child{margin-bottom:0}.col-sm-8 .card-header{padding:.35rem .62rem}.col-sm-8 .card-body{padding:0}.col-sm-8 pre{margin-bottom:0}",""])},e949:function(e,t,r){"use strict";var i=r("13be"),a=r.n(i);a.a},e959:function(e,t,r){var i=r("a33e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("6f19147e",i,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.7dbcbca1.js.map