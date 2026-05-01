function iE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var By={exports:{}},Wl={},$y={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),oE=Symbol.for("react.portal"),aE=Symbol.for("react.fragment"),lE=Symbol.for("react.strict_mode"),uE=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),dE=Symbol.for("react.context"),hE=Symbol.for("react.forward_ref"),fE=Symbol.for("react.suspense"),pE=Symbol.for("react.memo"),mE=Symbol.for("react.lazy"),rm=Symbol.iterator;function gE(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var Wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hy=Object.assign,qy={};function Gi(t,e,n){this.props=t,this.context=e,this.refs=qy,this.updater=n||Wy}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ky(){}Ky.prototype=Gi.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=qy,this.updater=n||Wy}var rh=nh.prototype=new Ky;rh.constructor=nh;Hy(rh,Gi.prototype);rh.isPureReactComponent=!0;var im=Array.isArray,Gy=Object.prototype.hasOwnProperty,ih={current:null},Qy={key:!0,ref:!0,__self:!0,__source:!0};function Yy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gy.call(e,r)&&!Qy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:ih.current}}function yE(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function vE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sm=/\/+/g;function Qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vE(""+t.key):e.toString(36)}function Na(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case oE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qu(o,0):r,im(i)?(n="",t!=null&&(n=t.replace(sm,"$&/")+"/"),Na(i,e,n,"",function(d){return d})):i!=null&&(sh(i)&&(i=yE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",im(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Qu(s,l);o+=Na(s,e,n,u,i)}else if(u=gE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Qu(s,l++),o+=Na(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var r=[],i=0;return Na(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _E(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Da={transition:null},wE={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:ih};function Xy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Gi;Z.Fragment=aE;Z.Profiler=uE;Z.PureComponent=nh;Z.StrictMode=lE;Z.Suspense=fE;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wE;Z.act=Xy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ih.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Gy.call(e,u)&&!Qy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:dE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cE,_context:t},t.Consumer=t};Z.createElement=Yy;Z.createFactory=function(t){var e=Yy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:hE,render:t}};Z.isValidElement=sh;Z.lazy=function(t){return{$$typeof:mE,_payload:{_status:-1,_result:t},_init:_E}};Z.memo=function(t,e){return{$$typeof:pE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};Z.unstable_act=Xy;Z.useCallback=function(t,e){return lt.current.useCallback(t,e)};Z.useContext=function(t){return lt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return lt.current.useEffect(t,e)};Z.useId=function(){return lt.current.useId()};Z.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return lt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};Z.useRef=function(t){return lt.current.useRef(t)};Z.useState=function(t){return lt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return lt.current.useTransition()};Z.version="18.3.1";$y.exports=Z;var L=$y.exports;const oh=sE(L),xE=iE({__proto__:null,default:oh},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EE=L,TE=Symbol.for("react.element"),IE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,kE=EE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function Jy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SE.call(e,r)&&!AE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TE,type:t,key:s,ref:o,props:i,_owner:kE.current}}Wl.Fragment=IE;Wl.jsx=Jy;Wl.jsxs=Jy;By.exports=Wl;var f=By.exports,Vc={},Zy={exports:{}},Tt={},ev={exports:{}},tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=B[ge];if(0<i(le,Q))B[ge]=Q,B[J]=le,J=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ge=0,le=B.length,Te=le>>>1;ge<Te;){var rn=2*(ge+1)-1,sn=B[rn],on=rn+1,an=B[on];if(0>i(sn,J))on<le&&0>i(an,sn)?(B[ge]=an,B[on]=J,ge=on):(B[ge]=sn,B[rn]=J,ge=rn);else if(on<le&&0>i(an,J))B[ge]=an,B[on]=J,ge=on;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,g=3,w=!1,A=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=B)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function O(B){if(R=!1,k(B),!A)if(n(u)!==null)A=!0,Ht(V);else{var Q=n(d);Q!==null&&gt(O,Q.startTime-B)}}function V(B,Q){A=!1,R&&(R=!1,I(v),v=-1),w=!0;var J=g;try{for(k(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||B&&!b());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var le=ge(m.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),k(Q)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var rn=n(d);rn!==null&&gt(O,rn.startTime-Q),Te=!1}return Te}finally{m=null,g=J,w=!1}}var F=!1,E=null,v=-1,x=5,S=-1;function b(){return!(t.unstable_now()-S<x)}function C(){if(E!==null){var B=t.unstable_now();S=B;var Q=!0;try{Q=E(!0,B)}finally{Q?T():(F=!1,E=null)}}else F=!1}var T;if(typeof _=="function")T=function(){_(C)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,nn=nt.port2;nt.port1.onmessage=C,T=function(){nn.postMessage(null)}}else T=function(){N(C,0)};function Ht(B){E=B,F||(F=!0,T())}function gt(B,Q){v=N(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||w||(A=!0,Ht(V))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return B()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return Q()}finally{g=J}},t.unstable_scheduleCallback=function(B,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:p++,callback:Q,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(B.sortIndex=J,e(d,B),n(u)===null&&B===n(d)&&(R?(I(v),v=-1):R=!0,gt(O,J-ge))):(B.sortIndex=le,e(u,B),A||w||(A=!0,Ht(V))),B},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(B){var Q=g;return function(){var J=g;g=Q;try{return B.apply(this,arguments)}finally{g=J}}}})(tv);ev.exports=tv;var CE=ev.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE=L,Et=CE;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nv=new Set,Xs={};function Xr(t,e){Di(t,e),Di(t+"Capture",e)}function Di(t,e){for(Xs[t]=e,t=0;t<e.length;t++)nv.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,RE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,om={},am={};function PE(t){return Lc.call(am,t)?!0:Lc.call(om,t)?!1:RE.test(t)?am[t]=!0:(om[t]=!0,!1)}function NE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DE(t,e,n,r){if(e===null||typeof e>"u"||NE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var ah=/[\-:]([a-z])/g;function lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ah,lh);$e[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ah,lh);$e[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ah,lh);$e[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function uh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DE(e,n,i,r)&&(n=null),r||i===null?PE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bn=bE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),di=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),iv=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),sv=Symbol.for("react.offscreen"),lm=Symbol.iterator;function ys(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Yu;function ks(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Xu=!1;function Ju(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function OE(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function Uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case di:return"Portal";case Mc:return"Profiler";case ch:return"StrictMode";case jc:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iv:return(t.displayName||"Context")+".Consumer";case rv:return(t._context.displayName||"Context")+".Provider";case dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hh:return e=t.displayName||null,e!==null?e:Uc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return Uc(t(e))}catch{}}return null}function VE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LE(t){var e=ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ha(t){t._valueTracker||(t._valueTracker=LE(t))}function av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ov(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lv(t,e){e=e.checked,e!=null&&uh(t,"checked",e,!1)}function Bc(t,e){lv(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$c(t,e.type,n):e.hasOwnProperty("defaultValue")&&$c(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $c(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var As=Array.isArray;function Ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(As(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function uv(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){ME.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function fv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jE=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(t,e){if(e){if(jE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,Ii=null,Si=null;function fm(t){if(t=bo(t)){if(typeof Qc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ql(e),Qc(t.stateNode,t.type,e))}}function pv(t){Ii?Si?Si.push(t):Si=[t]:Ii=t}function mv(){if(Ii){var t=Ii,e=Si;if(Si=Ii=null,fm(t),e)for(t=0;t<e.length;t++)fm(e[t])}}function gv(t,e){return t(e)}function yv(){}var Zu=!1;function vv(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return gv(t,e,n)}finally{Zu=!1,(Ii!==null||Si!==null)&&(yv(),mv())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ql(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Yc=!1;if(xn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Yc=!1}function FE(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Ms=!1,el=null,tl=!1,Xc=null,UE={onError:function(t){Ms=!0,el=t}};function zE(t,e,n,r,i,s,o,l,u){Ms=!1,el=null,FE.apply(UE,arguments)}function BE(t,e,n,r,i,s,o,l,u){if(zE.apply(this,arguments),Ms){if(Ms){var d=el;Ms=!1,el=null}else throw Error(U(198));tl||(tl=!0,Xc=d)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pm(t){if(Jr(t)!==t)throw Error(U(188))}function $E(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pm(i),t;if(s===r)return pm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function wv(t){return t=$E(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=Et.unstable_scheduleCallback,mm=Et.unstable_cancelCallback,WE=Et.unstable_shouldYield,HE=Et.unstable_requestPaint,Se=Et.unstable_now,qE=Et.unstable_getCurrentPriorityLevel,ph=Et.unstable_ImmediatePriority,Tv=Et.unstable_UserBlockingPriority,nl=Et.unstable_NormalPriority,KE=Et.unstable_LowPriority,Iv=Et.unstable_IdlePriority,Hl=null,Yt=null;function GE(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:XE,QE=Math.log,YE=Math.LN2;function XE(t){return t>>>=0,t===0?32:31-(QE(t)/YE|0)|0}var pa=64,ma=4194304;function Cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Cs(l):(s&=o,s!==0&&(r=Cs(s)))}else o=n&~i,o!==0?r=Cs(o):s!==0&&(r=Cs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function JE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=JE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sv(){var t=pa;return pa<<=1,!(pa&4194240)&&(pa=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function e1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function mh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function kv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Av,gh,Cv,bv,Rv,Zc=!1,ga=[],Qn=null,Yn=null,Xn=null,eo=new Map,to=new Map,Fn=[],t1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function _s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bo(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n1(t,e,n,r,i){switch(e){case"focusin":return Qn=_s(Qn,t,e,n,r,i),!0;case"dragenter":return Yn=_s(Yn,t,e,n,r,i),!0;case"mouseover":return Xn=_s(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,_s(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,_s(to.get(s)||null,t,e,n,r,i)),!0}return!1}function Pv(t){var e=Nr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=_v(n),e!==null){t.blockedOn=e,Rv(t.priority,function(){Cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gc=r,n.target.dispatchEvent(r),Gc=null}else return e=bo(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function ym(t,e,n){Oa(t)&&n.delete(e)}function r1(){Zc=!1,Qn!==null&&Oa(Qn)&&(Qn=null),Yn!==null&&Oa(Yn)&&(Yn=null),Xn!==null&&Oa(Xn)&&(Xn=null),eo.forEach(ym),to.forEach(ym)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Zc||(Zc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,r1)))}function no(t){function e(i){return ws(i,t)}if(0<ga.length){ws(ga[0],t);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&ws(Qn,t),Yn!==null&&ws(Yn,t),Xn!==null&&ws(Xn,t),eo.forEach(e),to.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Pv(n),n.blockedOn===null&&Fn.shift()}var ki=bn.ReactCurrentBatchConfig,il=!0;function i1(t,e,n,r){var i=oe,s=ki.transition;ki.transition=null;try{oe=1,yh(t,e,n,r)}finally{oe=i,ki.transition=s}}function s1(t,e,n,r){var i=oe,s=ki.transition;ki.transition=null;try{oe=4,yh(t,e,n,r)}finally{oe=i,ki.transition=s}}function yh(t,e,n,r){if(il){var i=ed(t,e,n,r);if(i===null)cc(t,e,r,sl,n),gm(t,r);else if(n1(i,t,e,n,r))r.stopPropagation();else if(gm(t,r),e&4&&-1<t1.indexOf(t)){for(;i!==null;){var s=bo(i);if(s!==null&&Av(s),s=ed(t,e,n,r),s===null&&cc(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cc(t,e,r,null,n)}}var sl=null;function ed(t,e,n,r){if(sl=null,t=fh(r),t=Nr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function Nv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qE()){case ph:return 1;case Tv:return 4;case nl:case KE:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var Hn=null,vh=null,Va=null;function Dv(){if(Va)return Va;var t,e=vh,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Va=i.slice(t,1<r?1-r:void 0)}function La(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function vm(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:vm,this.isPropagationStopped=vm,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=It(Qi),Co=_e({},Qi,{view:0,detail:0}),o1=It(Co),tc,nc,xs,ql=_e({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(tc=t.screenX-xs.screenX,nc=t.screenY-xs.screenY):nc=tc=0,xs=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),_m=It(ql),a1=_e({},ql,{dataTransfer:0}),l1=It(a1),u1=_e({},Co,{relatedTarget:0}),rc=It(u1),c1=_e({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),d1=It(c1),h1=_e({},Qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f1=It(h1),p1=_e({},Qi,{data:0}),wm=It(p1),m1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y1[t])?!!e[t]:!1}function wh(){return v1}var _1=_e({},Co,{key:function(t){if(t.key){var e=m1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=La(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wh,charCode:function(t){return t.type==="keypress"?La(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?La(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w1=It(_1),x1=_e({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=It(x1),E1=_e({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wh}),T1=It(E1),I1=_e({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S1=It(I1),k1=_e({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=It(k1),C1=[9,13,27,32],xh=xn&&"CompositionEvent"in window,js=null;xn&&"documentMode"in document&&(js=document.documentMode);var b1=xn&&"TextEvent"in window&&!js,Ov=xn&&(!xh||js&&8<js&&11>=js),Em=" ",Tm=!1;function Vv(t,e){switch(t){case"keyup":return C1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function R1(t,e){switch(t){case"compositionend":return Lv(e);case"keypress":return e.which!==32?null:(Tm=!0,Em);case"textInput":return t=e.data,t===Em&&Tm?null:t;default:return null}}function P1(t,e){if(fi)return t==="compositionend"||!xh&&Vv(t,e)?(t=Dv(),Va=vh=Hn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ov&&e.locale!=="ko"?null:e.data;default:return null}}var N1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N1[t.type]:e==="textarea"}function Mv(t,e,n,r){pv(r),e=ol(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,ro=null;function D1(t){Gv(t,0)}function Kl(t){var e=gi(t);if(av(e))return t}function O1(t,e){if(t==="change")return e}var jv=!1;if(xn){var ic;if(xn){var sc="oninput"in document;if(!sc){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),sc=typeof Sm.oninput=="function"}ic=sc}else ic=!1;jv=ic&&(!document.documentMode||9<document.documentMode)}function km(){Fs&&(Fs.detachEvent("onpropertychange",Fv),ro=Fs=null)}function Fv(t){if(t.propertyName==="value"&&Kl(ro)){var e=[];Mv(e,ro,t,fh(t)),vv(D1,e)}}function V1(t,e,n){t==="focusin"?(km(),Fs=e,ro=n,Fs.attachEvent("onpropertychange",Fv)):t==="focusout"&&km()}function L1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(ro)}function M1(t,e){if(t==="click")return Kl(e)}function j1(t,e){if(t==="input"||t==="change")return Kl(e)}function F1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:F1;function io(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,e){var n=Am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Am(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zv(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U1(t){var e=zv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(r!==null&&Eh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cm(n,s);var o=Cm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z1=xn&&"documentMode"in document&&11>=document.documentMode,pi=null,td=null,Us=null,nd=!1;function bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||pi==null||pi!==Za(r)||(r=pi,"selectionStart"in r&&Eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&io(Us,r)||(Us=r,r=ol(td,"onSelect"),0<r.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},oc={},Bv={};xn&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Gl(t){if(oc[t])return oc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return oc[t]=e[n];return t}var $v=Gl("animationend"),Wv=Gl("animationiteration"),Hv=Gl("animationstart"),qv=Gl("transitionend"),Kv=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Kv.set(t,e),Xr(e,[t])}for(var ac=0;ac<Rm.length;ac++){var lc=Rm[ac],B1=lc.toLowerCase(),$1=lc[0].toUpperCase()+lc.slice(1);gr(B1,"on"+$1)}gr($v,"onAnimationEnd");gr(Wv,"onAnimationIteration");gr(Hv,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(qv,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Pm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BE(r,e,void 0,t),t.currentTarget=null}function Gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Pm(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Pm(i,l,d),s=u}}}if(tl)throw t=Xc,tl=!1,Xc=null,t}function he(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var r=t+"__bubble";n.has(r)||(Qv(e,t,2,!1),n.add(r))}function uc(t,e,n){var r=0;e&&(r|=4),Qv(n,t,r,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[_a]){t[_a]=!0,nv.forEach(function(n){n!=="selectionchange"&&(W1.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,uc("selectionchange",!1,e))}}function Qv(t,e,n,r){switch(Nv(e)){case 1:var i=i1;break;case 4:i=s1;break;default:i=yh}n=i.bind(null,e,n,t),i=void 0,!Yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vv(function(){var d=s,p=fh(n),m=[];e:{var g=Kv.get(t);if(g!==void 0){var w=_h,A=t;switch(t){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":w=w1;break;case"focusin":A="focus",w=rc;break;case"focusout":A="blur",w=rc;break;case"beforeblur":case"afterblur":w=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=T1;break;case $v:case Wv:case Hv:w=d1;break;case qv:w=S1;break;case"scroll":w=o1;break;case"wheel":w=A1;break;case"copy":case"cut":case"paste":w=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xm}var R=(e&4)!==0,N=!R&&t==="scroll",I=R?g!==null?g+"Capture":null:g;R=[];for(var _=d,k;_!==null;){k=_;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,I!==null&&(O=Zs(_,I),O!=null&&R.push(oo(_,O,k)))),N)break;_=_.return}0<R.length&&(g=new w(g,A,null,n,p),m.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Gc&&(A=n.relatedTarget||n.fromElement)&&(Nr(A)||A[En]))break e;if((w||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,w?(A=n.relatedTarget||n.toElement,w=d,A=A?Nr(A):null,A!==null&&(N=Jr(A),A!==N||A.tag!==5&&A.tag!==6)&&(A=null)):(w=null,A=d),w!==A)){if(R=_m,O="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=xm,O="onPointerLeave",I="onPointerEnter",_="pointer"),N=w==null?g:gi(w),k=A==null?g:gi(A),g=new R(O,_+"leave",w,n,p),g.target=N,g.relatedTarget=k,O=null,Nr(p)===d&&(R=new R(I,_+"enter",A,n,p),R.target=k,R.relatedTarget=N,O=R),N=O,w&&A)t:{for(R=w,I=A,_=0,k=R;k;k=ai(k))_++;for(k=0,O=I;O;O=ai(O))k++;for(;0<_-k;)R=ai(R),_--;for(;0<k-_;)I=ai(I),k--;for(;_--;){if(R===I||I!==null&&R===I.alternate)break t;R=ai(R),I=ai(I)}R=null}else R=null;w!==null&&Nm(m,g,w,R,!1),A!==null&&N!==null&&Nm(m,N,A,R,!0)}}e:{if(g=d?gi(d):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var V=O1;else if(Im(g))if(jv)V=j1;else{V=L1;var F=V1}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=M1);if(V&&(V=V(t,d))){Mv(m,V,n,p);break e}F&&F(t,g,d),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&$c(g,"number",g.value)}switch(F=d?gi(d):window,t){case"focusin":(Im(F)||F.contentEditable==="true")&&(pi=F,td=d,Us=null);break;case"focusout":Us=td=pi=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,bm(m,n,p);break;case"selectionchange":if(z1)break;case"keydown":case"keyup":bm(m,n,p)}var E;if(xh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else fi?Vv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Ov&&n.locale!=="ko"&&(fi||v!=="onCompositionStart"?v==="onCompositionEnd"&&fi&&(E=Dv()):(Hn=p,vh="value"in Hn?Hn.value:Hn.textContent,fi=!0)),F=ol(d,v),0<F.length&&(v=new wm(v,t,null,n,p),m.push({event:v,listeners:F}),E?v.data=E:(E=Lv(n),E!==null&&(v.data=E)))),(E=b1?R1(t,n):P1(t,n))&&(d=ol(d,"onBeforeInput"),0<d.length&&(p=new wm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=E))}Gv(m,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,l))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function Dm(t){return(typeof t=="string"?t:""+t).replace(H1,`
`).replace(q1,"")}function wa(t,e,n){if(e=Dm(e),Dm(t)!==e&&n)throw Error(U(425))}function al(){}var rd=null,id=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,K1=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(t){return Om.resolve(null).then(t).catch(Q1)}:od;function Q1(t){setTimeout(function(){throw t})}function dc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Yi,ao="__reactProps$"+Yi,En="__reactContainer$"+Yi,ad="__reactEvents$"+Yi,Y1="__reactListeners$"+Yi,X1="__reactHandles$"+Yi;function Nr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vm(t);t!==null;){if(n=t[Qt])return n;t=Vm(t)}return e}t=n,n=t.parentNode}return null}function bo(t){return t=t[Qt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ql(t){return t[ao]||null}var ld=[],yi=-1;function yr(t){return{current:t}}function pe(t){0>yi||(t.current=ld[yi],ld[yi]=null,yi--)}function ce(t,e){yi++,ld[yi]=t.current,t.current=e}var ur={},et=yr(ur),ft=yr(!1),Ur=ur;function Oi(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function ll(){pe(ft),pe(et)}function Lm(t,e,n){if(et.current!==ur)throw Error(U(168));ce(et,e),ce(ft,n)}function Yv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,VE(t)||"Unknown",i));return _e({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ur=et.current,ce(et,t),ce(ft,ft.current),!0}function Mm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Yv(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(et),ce(et,t)):pe(ft),ce(ft,n)}var dn=null,Yl=!1,hc=!1;function Xv(t){dn===null?dn=[t]:dn.push(t)}function J1(t){Yl=!0,Xv(t)}function vr(){if(!hc&&dn!==null){hc=!0;var t=0,e=oe;try{var n=dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,Yl=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),Ev(ph,vr),i}finally{oe=e,hc=!1}}return null}var vi=[],_i=0,cl=null,dl=0,St=[],kt=0,zr=null,fn=1,pn="";function br(t,e){vi[_i++]=dl,vi[_i++]=cl,cl=t,dl=e}function Jv(t,e,n){St[kt++]=fn,St[kt++]=pn,St[kt++]=zr,zr=t;var r=fn;t=pn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ft(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function Th(t){t.return!==null&&(br(t,1),Jv(t,1,0))}function Ih(t){for(;t===cl;)cl=vi[--_i],vi[_i]=null,dl=vi[--_i],vi[_i]=null;for(;t===zr;)zr=St[--kt],St[kt]=null,pn=St[--kt],St[kt]=null,fn=St[--kt],St[kt]=null}var xt=null,_t=null,me=!1,Mt=null;function Zv(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,_t=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,_t=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(me){var e=_t;if(e){var n=e;if(!jm(t,e)){if(ud(t))throw Error(U(418));e=Jn(n.nextSibling);var r=xt;e&&jm(t,e)?Zv(r,n):(t.flags=t.flags&-4097|2,me=!1,xt=t)}}else{if(ud(t))throw Error(U(418));t.flags=t.flags&-4097|2,me=!1,xt=t}}}function Fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function xa(t){if(t!==xt)return!1;if(!me)return Fm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=_t)){if(ud(t))throw e0(),Error(U(418));for(;e;)Zv(t,e),e=Jn(e.nextSibling)}if(Fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=xt?Jn(t.stateNode.nextSibling):null;return!0}function e0(){for(var t=_t;t;)t=Jn(t.nextSibling)}function Vi(){_t=xt=null,me=!1}function Sh(t){Mt===null?Mt=[t]:Mt.push(t)}var Z1=bn.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ea(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function t0(t){function e(I,_){if(t){var k=I.deletions;k===null?(I.deletions=[_],I.flags|=16):k.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=nr(I,_),I.index=0,I.sibling=null,I}function s(I,_,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<_?(I.flags|=2,_):k):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,k,O){return _===null||_.tag!==6?(_=_c(k,I.mode,O),_.return=I,_):(_=i(_,k),_.return=I,_)}function u(I,_,k,O){var V=k.type;return V===hi?p(I,_,k.props.children,O,k.key):_!==null&&(_.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&Um(V)===_.type)?(O=i(_,k.props),O.ref=Es(I,_,k),O.return=I,O):(O=$a(k.type,k.key,k.props,null,I.mode,O),O.ref=Es(I,_,k),O.return=I,O)}function d(I,_,k,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=wc(k,I.mode,O),_.return=I,_):(_=i(_,k.children||[]),_.return=I,_)}function p(I,_,k,O,V){return _===null||_.tag!==7?(_=jr(k,I.mode,O,V),_.return=I,_):(_=i(_,k),_.return=I,_)}function m(I,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=_c(""+_,I.mode,k),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case da:return k=$a(_.type,_.key,_.props,null,I.mode,k),k.ref=Es(I,null,_),k.return=I,k;case di:return _=wc(_,I.mode,k),_.return=I,_;case Mn:var O=_._init;return m(I,O(_._payload),k)}if(As(_)||ys(_))return _=jr(_,I.mode,k,null),_.return=I,_;Ea(I,_)}return null}function g(I,_,k,O){var V=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return V!==null?null:l(I,_,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case da:return k.key===V?u(I,_,k,O):null;case di:return k.key===V?d(I,_,k,O):null;case Mn:return V=k._init,g(I,_,V(k._payload),O)}if(As(k)||ys(k))return V!==null?null:p(I,_,k,O,null);Ea(I,k)}return null}function w(I,_,k,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(k)||null,l(_,I,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case da:return I=I.get(O.key===null?k:O.key)||null,u(_,I,O,V);case di:return I=I.get(O.key===null?k:O.key)||null,d(_,I,O,V);case Mn:var F=O._init;return w(I,_,k,F(O._payload),V)}if(As(O)||ys(O))return I=I.get(k)||null,p(_,I,O,V,null);Ea(_,O)}return null}function A(I,_,k,O){for(var V=null,F=null,E=_,v=_=0,x=null;E!==null&&v<k.length;v++){E.index>v?(x=E,E=null):x=E.sibling;var S=g(I,E,k[v],O);if(S===null){E===null&&(E=x);break}t&&E&&S.alternate===null&&e(I,E),_=s(S,_,v),F===null?V=S:F.sibling=S,F=S,E=x}if(v===k.length)return n(I,E),me&&br(I,v),V;if(E===null){for(;v<k.length;v++)E=m(I,k[v],O),E!==null&&(_=s(E,_,v),F===null?V=E:F.sibling=E,F=E);return me&&br(I,v),V}for(E=r(I,E);v<k.length;v++)x=w(E,I,v,k[v],O),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?v:x.key),_=s(x,_,v),F===null?V=x:F.sibling=x,F=x);return t&&E.forEach(function(b){return e(I,b)}),me&&br(I,v),V}function R(I,_,k,O){var V=ys(k);if(typeof V!="function")throw Error(U(150));if(k=V.call(k),k==null)throw Error(U(151));for(var F=V=null,E=_,v=_=0,x=null,S=k.next();E!==null&&!S.done;v++,S=k.next()){E.index>v?(x=E,E=null):x=E.sibling;var b=g(I,E,S.value,O);if(b===null){E===null&&(E=x);break}t&&E&&b.alternate===null&&e(I,E),_=s(b,_,v),F===null?V=b:F.sibling=b,F=b,E=x}if(S.done)return n(I,E),me&&br(I,v),V;if(E===null){for(;!S.done;v++,S=k.next())S=m(I,S.value,O),S!==null&&(_=s(S,_,v),F===null?V=S:F.sibling=S,F=S);return me&&br(I,v),V}for(E=r(I,E);!S.done;v++,S=k.next())S=w(E,I,v,S.value,O),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=s(S,_,v),F===null?V=S:F.sibling=S,F=S);return t&&E.forEach(function(C){return e(I,C)}),me&&br(I,v),V}function N(I,_,k,O){if(typeof k=="object"&&k!==null&&k.type===hi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case da:e:{for(var V=k.key,F=_;F!==null;){if(F.key===V){if(V=k.type,V===hi){if(F.tag===7){n(I,F.sibling),_=i(F,k.props.children),_.return=I,I=_;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&Um(V)===F.type){n(I,F.sibling),_=i(F,k.props),_.ref=Es(I,F,k),_.return=I,I=_;break e}n(I,F);break}else e(I,F);F=F.sibling}k.type===hi?(_=jr(k.props.children,I.mode,O,k.key),_.return=I,I=_):(O=$a(k.type,k.key,k.props,null,I.mode,O),O.ref=Es(I,_,k),O.return=I,I=O)}return o(I);case di:e:{for(F=k.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(I,_.sibling),_=i(_,k.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=wc(k,I.mode,O),_.return=I,I=_}return o(I);case Mn:return F=k._init,N(I,_,F(k._payload),O)}if(As(k))return A(I,_,k,O);if(ys(k))return R(I,_,k,O);Ea(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,k),_.return=I,I=_):(n(I,_),_=_c(k,I.mode,O),_.return=I,I=_),o(I)):n(I,_)}return N}var Li=t0(!0),n0=t0(!1),hl=yr(null),fl=null,wi=null,kh=null;function Ah(){kh=wi=fl=null}function Ch(t){var e=hl.current;pe(hl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ai(t,e){fl=t,kh=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(kh!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(fl===null)throw Error(U(308));wi=t,fl.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Dr=null;function bh(t){Dr===null?Dr=[t]:Dr.push(t)}function r0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function Rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,bh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function Ma(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mh(t,n)}}function zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=d=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,R=l;switch(g=e,w=n,R.tag){case 1:if(A=R.payload,typeof A=="function"){m=A.call(w,m,g);break e}m=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,g=typeof A=="function"?A.call(w,m,g):A,g==null)break e;m=_e({},m,g);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=w,u=m):p=p.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=m}}function Bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ro={},Xt=yr(Ro),lo=yr(Ro),uo=yr(Ro);function Or(t){if(t===Ro)throw Error(U(174));return t}function Ph(t,e){switch(ce(uo,e),ce(lo,t),ce(Xt,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hc(e,t)}pe(Xt),ce(Xt,e)}function Mi(){pe(Xt),pe(lo),pe(uo)}function s0(t){Or(uo.current);var e=Or(Xt.current),n=Hc(e,t.type);e!==n&&(ce(lo,t),ce(Xt,n))}function Nh(t){lo.current===t&&(pe(Xt),pe(lo))}var ye=yr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Dh(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var ja=bn.ReactCurrentDispatcher,pc=bn.ReactCurrentBatchConfig,Br=0,ve=null,Re=null,Ve=null,gl=!1,zs=!1,co=0,e2=0;function Ge(){throw Error(U(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function Vh(t,e,n,r,i,s){if(Br=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=t===null||t.memoizedState===null?i2:s2,t=n(r,i),zs){s=0;do{if(zs=!1,co=0,25<=s)throw Error(U(301));s+=1,Ve=Re=null,e.updateQueue=null,ja.current=o2,t=n(r,i)}while(zs)}if(ja.current=yl,e=Re!==null&&Re.next!==null,Br=0,Ve=Re=ve=null,gl=!1,e)throw Error(U(300));return t}function Lh(){var t=co!==0;return co=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ve.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Pt(){if(Re===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Ve===null?ve.memoizedState:Ve.next;if(e!==null)Ve=e,Re=t;else{if(t===null)throw Error(U(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ve===null?ve.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function ho(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((Br&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ve.lanes|=p,$r|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o0(){}function a0(t,e){var n=ve,r=Pt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Mh(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,fo(9,u0.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(U(349));Br&30||l0(n,e,i)}return i}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,r){e.value=n,e.getSnapshot=r,d0(e)&&h0(t)}function c0(t,e,n){return n(function(){d0(e)&&h0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function h0(t){var e=Tn(t,1);e!==null&&Ut(e,t,1,-1)}function $m(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=r2.bind(null,ve,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return Pt().memoizedState}function Fa(t,e,n,r){var i=Gt();ve.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function Xl(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&Oh(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function Wm(t,e){return Fa(8390656,8,t,e)}function Mh(t,e){return Xl(2048,8,t,e)}function p0(t,e){return Xl(4,2,t,e)}function m0(t,e){return Xl(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y0(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,g0.bind(null,e,t),n)}function jh(){}function v0(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _0(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Oh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function w0(t,e,n){return Br&21?($t(n,e)||(n=Sv(),ve.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function t2(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=pc.transition;pc.transition={};try{t(!1),e()}finally{oe=n,pc.transition=r}}function x0(){return Pt().memoizedState}function n2(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))T0(e,n);else if(n=r0(t,e,n,r),n!==null){var i=ot();Ut(n,t,r,i),I0(n,e,r)}}function r2(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))T0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,bh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=r0(t,e,i,r),n!==null&&(i=ot(),Ut(n,t,r,i),I0(n,e,r))}}function E0(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function T0(t,e){zs=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mh(t,n)}}var yl={readContext:Rt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},i2={readContext:Rt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n2.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:$m,useDebugValue:jh,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=$m(!1),e=t[0];return t=t2.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Gt();if(me){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Le===null)throw Error(U(349));Br&30||l0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wm(c0.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,u0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=Le.identifierPrefix;if(me){var n=pn,r=fn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},s2={readContext:Rt,useCallback:v0,useContext:Rt,useEffect:Mh,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:_0,useReducer:mc,useRef:f0,useState:function(){return mc(ho)},useDebugValue:jh,useDeferredValue:function(t){var e=Pt();return w0(e,Re.memoizedState,t)},useTransition:function(){var t=mc(ho)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:x0,unstable_isNewReconciler:!1},o2={readContext:Rt,useCallback:v0,useContext:Rt,useEffect:Mh,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:_0,useReducer:gc,useRef:f0,useState:function(){return gc(ho)},useDebugValue:jh,useDeferredValue:function(t){var e=Pt();return Re===null?e.memoizedState=t:w0(e,Re.memoizedState,t)},useTransition:function(){var t=gc(ho)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:x0,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=tr(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Ut(e,t,i,r),Ma(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=tr(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Ut(e,t,i,r),Ma(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=tr(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(Ut(e,t,r,n),Ma(e,t,r))}};function Hm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function S0(t,e,n){var r=!1,i=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=pt(e)?Ur:et.current,r=e.contextTypes,s=(r=r!=null)?Oi(t,i):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=pt(e)?Ur:et.current,i.context=Oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jl.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=OE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a2=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_l||(_l=!0,Id=r),pd(t,e)},n}function A0(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=x2.bind(null,t,e,n),e.then(t,t))}function Gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var l2=bn.ReactCurrentOwner,ht=!1;function st(t,e,n,r){e.child=t===null?n0(e,null,n,r):Li(e,t.child,n,r)}function Ym(t,e,n,r,i){n=n.render;var s=e.ref;return Ai(e,i),r=Vh(t,e,n,r,s,i),n=Lh(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(me&&n&&Th(e),e.flags|=1,st(t,e,r,i),e.child)}function Xm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C0(t,e,s,r,i)):(t=$a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function C0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,In(t,e,i)}return md(t,e,n,r,i)}function b0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ei,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ei,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ei,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ei,vt),vt|=r;return st(t,e,i,n),e.child}function R0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,r,i){var s=pt(n)?Ur:et.current;return s=Oi(e,s),Ai(e,i),n=Vh(t,e,n,r,s,i),r=Lh(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(me&&r&&Th(e),e.flags|=1,st(t,e,n,i),e.child)}function Jm(t,e,n,r,i){if(pt(n)){var s=!0;ul(e)}else s=!1;if(Ai(e,i),e.stateNode===null)Ua(t,e),S0(e,n,r),fd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Rt(d):(d=pt(n)?Ur:et.current,d=Oi(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&qm(e,o,r,d),jn=!1;var g=e.memoizedState;o.state=g,pl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ft.current||jn?(typeof p=="function"&&(hd(e,n,p,r),u=e.memoizedState),(l=jn||Hm(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Vt(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=pt(n)?Ur:et.current,u=Oi(e,u));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&qm(e,o,r,u),jn=!1,g=e.memoizedState,o.state=g,pl(e,r,o,i);var A=e.memoizedState;l!==m||g!==A||ft.current||jn?(typeof w=="function"&&(hd(e,n,w,r),A=e.memoizedState),(d=jn||Hm(e,n,d,r,g,A,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return gd(t,e,n,r,s,i)}function gd(t,e,n,r,i,s){R0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mm(e,n,!1),In(t,e,s);r=e.stateNode,l2.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Li(e,t.child,null,s),e.child=Li(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Mm(e,n,!0),e.child}function P0(t){var e=t.stateNode;e.pendingContext?Lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lm(t,e.context,!1),Ph(t,e.containerInfo)}function Zm(t,e,n,r,i){return Vi(),Sh(i),e.flags|=256,st(t,e,n,r),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function N0(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tu(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=yd,t):Fh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return u2(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nr(l,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fh(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,r){return r!==null&&Sh(r),Li(e,t.child,null,n),t=Fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yc(Error(U(422))),Ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=tu({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Li(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=yd,s);if(!(e.mode&1))return Ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=yc(s,r,void 0),Ta(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),Ut(r,t,i,-1))}return Hh(),r=yc(Error(U(421))),Ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=E2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Jn(i.nextSibling),xt=e,me=!0,Mt=null,t!==null&&(St[kt++]=fn,St[kt++]=pn,St[kt++]=zr,fn=t.id,pn=t.overflow,zr=e),e=Fh(e,r.children),e.flags|=4096,e)}function eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dd(t.return,e,n)}function vc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function D0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,n,e);else if(t.tag===19)eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c2(t,e,n){switch(e.tag){case 3:P0(e),Vi();break;case 5:s0(e);break;case 1:pt(e.type)&&ul(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?N0(t,e,n):(ce(ye,ye.current&1),t=In(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return D0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,b0(t,e,n)}return In(t,e,n)}var O0,_d,V0,L0;O0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};V0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Or(Xt.current);var s=null;switch(n){case"input":i=zc(t,i),r=zc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Wc(t,i),r=Wc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}qc(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xs.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};L0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ts(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function d2(t,e,n){var r=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return pt(e.type)&&ll(),Qe(e),null;case 3:return r=e.stateNode,Mi(),pe(ft),pe(et),Dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Ad(Mt),Mt=null))),_d(t,e),Qe(e),null;case 5:Nh(e);var i=Or(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Qe(e),null}if(t=Or(Xt.current),xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)he(bs[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":um(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":dm(r,s),he("invalid",r)}qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&wa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&wa(r.textContent,l,t),i=["children",""+l]):Xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":ha(r),cm(r,s,!0);break;case"textarea":ha(r),hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[ao]=r,O0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kc(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)he(bs[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":um(t,r),i=zc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),he("invalid",t);break;case"textarea":dm(t,r),i=Wc(t,r),he("invalid",t);break;default:i=r}qc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?fv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&uh(t,s,u,o))}switch(n){case"input":ha(t),cm(t,r,!1);break;case"textarea":ha(t),hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)L0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Or(uo.current),Or(Xt.current),xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))e0(),Vi(),e.flags|=98560,s=!1;else if(s=xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Qt]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Mt!==null&&(Ad(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Pe===0&&(Pe=3):Hh())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Mi(),_d(t,e),t===null&&so(e.stateNode.containerInfo),Qe(e),null;case 10:return Ch(e.type._context),Qe(e),null;case 17:return pt(e.type)&&ll(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ts(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,Ts(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Fi&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*Se()-s.renderingStartTime>Fi&&n!==1073741824&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return Wh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function h2(t,e){switch(Ih(e),e.tag){case 1:return pt(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mi(),pe(ft),pe(et),Dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nh(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Mi(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Ia=!1,Je=!1,f2=typeof WeakSet=="function"?WeakSet:Set,$=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function wd(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var tg=!1;function p2(t,e){if(rd=il,t=zv(),Eh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===t)break t;if(g===n&&++d===i&&(l=o),g===s&&++p===r&&(u=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},il=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,N=A.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?R:Vt(e.type,R),N);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ee(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return A=tg,tg=!1,A}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wd(e,n,s)}i=i.next}while(i!==r)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M0(t){var e=t.alternate;e!==null&&(t.alternate=null,M0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[ao],delete e[ad],delete e[Y1],delete e[X1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j0(t){return t.tag===5||t.tag===3||t.tag===4}function ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var je=null,Lt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Je||xi(n,e);case 6:var r=je,i=Lt;je=null,Vn(t,e,n),je=r,Lt=i,je!==null&&(Lt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Lt?(t=je,n=n.stateNode,t.nodeType===8?dc(t.parentNode,n):t.nodeType===1&&dc(t,n),no(t)):dc(je,n.stateNode));break;case 4:r=je,i=Lt,je=n.stateNode.containerInfo,Lt=!0,Vn(t,e,n),je=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Je&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(t,e,n),Je=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f2),e.forEach(function(r){var i=T2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Lt=!1;break e;case 3:je=l.stateNode.containerInfo,Lt=!0;break e;case 4:je=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(je===null)throw Error(U(160));F0(s,o,i),je=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ee(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),qt(t),r&4){try{Bs(3,t,t.return),Zl(3,t)}catch(R){Ee(t,t.return,R)}try{Bs(5,t,t.return)}catch(R){Ee(t,t.return,R)}}break;case 1:Ot(e,t),qt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(Ot(e,t),qt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(R){Ee(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lv(i,s),Kc(l,o);var d=Kc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?fv(i,m):p==="dangerouslySetInnerHTML"?dv(i,m):p==="children"?Js(i,m):uh(i,p,m,d)}switch(l){case"input":Bc(i,s);break;case"textarea":uv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ti(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ti(i,!!s.multiple,s.defaultValue,!0):Ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(R){Ee(t,t.return,R)}}break;case 6:if(Ot(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ee(t,t.return,R)}}break;case 3:if(Ot(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(R){Ee(t,t.return,R)}break;case 4:Ot(e,t),qt(t);break;case 13:Ot(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bh=Se())),r&4&&rg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(d=Je)||p,Ot(e,t),Je=d):Ot(e,t),qt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(m=$=p;$!==null;){switch(g=$,w=g.child,g.tag){case 0:case 11:case 14:case 15:Bs(4,g,g.return);break;case 1:xi(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(R){Ee(r,n,R)}}break;case 5:xi(g,g.return);break;case 22:if(g.memoizedState!==null){sg(m);continue}}w!==null?(w.return=g,$=w):sg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=hv("display",o))}catch(R){Ee(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(R){Ee(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ot(e,t),qt(t),r&4&&rg(t);break;case 21:break;default:Ot(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=ng(t);Td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ng(t);Ed(t,l,o);break;default:throw Error(U(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m2(t,e,n){$=t,z0(t)}function z0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ia;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=Ia;var d=Je;if(Ia=o,(Je=u)&&!d)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?og(i):u!==null?(u.return=o,$=u):og(i);for(;s!==null;)$=s,z0(s),s=s.sibling;$=i,Ia=l,Je=d}ig(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ig(t)}}function ig(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&no(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Je||e.flags&512&&xd(e)}catch(g){Ee(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function sg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function og(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{xd(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{xd(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var g2=Math.ceil,vl=bn.ReactCurrentDispatcher,Uh=bn.ReactCurrentOwner,Ct=bn.ReactCurrentBatchConfig,re=0,Le=null,Ce=null,ze=0,vt=0,Ei=yr(0),Pe=0,po=null,$r=0,eu=0,zh=0,$s=null,ct=null,Bh=0,Fi=1/0,cn=null,_l=!1,Id=null,er=null,Sa=!1,qn=null,wl=0,Ws=0,Sd=null,za=-1,Ba=0;function ot(){return re&6?Se():za!==-1?za:za=Se()}function tr(t){return t.mode&1?re&2&&ze!==0?ze&-ze:Z1.transition!==null?(Ba===0&&(Ba=Sv()),Ba):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Nv(t.type)),t):1}function Ut(t,e,n,r){if(50<Ws)throw Ws=0,Sd=null,Error(U(185));Ao(t,n,r),(!(re&2)||t!==Le)&&(t===Le&&(!(re&2)&&(eu|=n),Pe===4&&Un(t,ze)),mt(t,r),n===1&&re===0&&!(e.mode&1)&&(Fi=Se()+500,Yl&&vr()))}function mt(t,e){var n=t.callbackNode;ZE(t,e);var r=rl(t,t===Le?ze:0);if(r===0)n!==null&&mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mm(n),e===1)t.tag===0?J1(ag.bind(null,t)):Xv(ag.bind(null,t)),G1(function(){!(re&6)&&vr()}),n=null;else{switch(kv(r)){case 1:n=ph;break;case 4:n=Tv;break;case 16:n=nl;break;case 536870912:n=Iv;break;default:n=nl}n=Q0(n,B0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B0(t,e){if(za=-1,Ba=0,re&6)throw Error(U(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=rl(t,t===Le?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xl(t,r);else{e=r;var i=re;re|=2;var s=W0();(Le!==t||ze!==e)&&(cn=null,Fi=Se()+500,Mr(t,e));do try{_2();break}catch(l){$0(t,l)}while(!0);Ah(),vl.current=s,re=i,Ce!==null?e=0:(Le=null,ze=0,e=Pe)}if(e!==0){if(e===2&&(i=Jc(t),i!==0&&(r=i,e=kd(t,i))),e===1)throw n=po,Mr(t,0),Un(t,r),mt(t,Se()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!y2(i)&&(e=xl(t,r),e===2&&(s=Jc(t),s!==0&&(r=s,e=kd(t,s))),e===1))throw n=po,Mr(t,0),Un(t,r),mt(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Rr(t,ct,cn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Bh+500-Se(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=od(Rr.bind(null,t,ct,cn),e);break}Rr(t,ct,cn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g2(r/1960))-r,10<r){t.timeoutHandle=od(Rr.bind(null,t,ct,cn),r);break}Rr(t,ct,cn);break;case 5:Rr(t,ct,cn);break;default:throw Error(U(329))}}}return mt(t,Se()),t.callbackNode===n?B0.bind(null,t):null}function kd(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=xl(t,e),t!==2&&(e=ct,ct=n,e!==null&&Ad(e)),t}function Ad(t){ct===null?ct=t:ct.push.apply(ct,t)}function y2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~zh,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function ag(t){if(re&6)throw Error(U(327));Ci();var e=rl(t,0);if(!(e&1))return mt(t,Se()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var r=Jc(t);r!==0&&(e=r,n=kd(t,r))}if(n===1)throw n=po,Mr(t,0),Un(t,e),mt(t,Se()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ct,cn),mt(t,Se()),null}function $h(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Fi=Se()+500,Yl&&vr())}}function Wr(t){qn!==null&&qn.tag===0&&!(re&6)&&Ci();var e=re;re|=1;var n=Ct.transition,r=oe;try{if(Ct.transition=null,oe=1,t)return t()}finally{oe=r,Ct.transition=n,re=e,!(re&6)&&vr()}}function Wh(){vt=Ei.current,pe(Ei)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K1(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Mi(),pe(ft),pe(et),Dh();break;case 5:Nh(r);break;case 4:Mi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Ch(r.type._context);break;case 22:case 23:Wh()}n=n.return}if(Le=t,Ce=t=nr(t.current,null),ze=vt=e,Pe=0,po=null,zh=eu=$r=0,ct=$s=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function $0(t,e){do{var n=Ce;try{if(Ah(),ja.current=yl,gl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(Br=0,Ve=Re=ve=null,zs=!1,co=0,Uh.current=null,n===null||n.return===null){Pe=1,po=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Gm(o);if(w!==null){w.flags&=-257,Qm(w,o,l,s,e),w.mode&1&&Km(s,d,e),e=w,u=d;var A=e.updateQueue;if(A===null){var R=new Set;R.add(u),e.updateQueue=R}else A.add(u);break e}else{if(!(e&1)){Km(s,d,e),Hh();break e}u=Error(U(426))}}else if(me&&l.mode&1){var N=Gm(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Qm(N,o,l,s,e),Sh(ji(u,l));break e}}s=u=ji(u,l),Pe!==4&&(Pe=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=k0(s,u,e);zm(s,I);break e;case 1:l=u;var _=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(er===null||!er.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=A0(s,l,e);zm(s,O);break e}}s=s.return}while(s!==null)}q0(n)}catch(V){e=V,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function W0(){var t=vl.current;return vl.current=yl,t===null?yl:t}function Hh(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!($r&268435455)&&!(eu&268435455)||Un(Le,ze)}function xl(t,e){var n=re;re|=2;var r=W0();(Le!==t||ze!==e)&&(cn=null,Mr(t,e));do try{v2();break}catch(i){$0(t,i)}while(!0);if(Ah(),re=n,vl.current=r,Ce!==null)throw Error(U(261));return Le=null,ze=0,Pe}function v2(){for(;Ce!==null;)H0(Ce)}function _2(){for(;Ce!==null&&!WE();)H0(Ce)}function H0(t){var e=G0(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?q0(t):Ce=e,Uh.current=null}function q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h2(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Ce=null;return}}else if(n=d2(n,e,vt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Pe===0&&(Pe=5)}function Rr(t,e,n){var r=oe,i=Ct.transition;try{Ct.transition=null,oe=1,w2(t,e,n,r)}finally{Ct.transition=i,oe=r}return null}function w2(t,e,n,r){do Ci();while(qn!==null);if(re&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e1(t,s),t===Le&&(Ce=Le=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,Q0(nl,function(){return Ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=oe;oe=1;var l=re;re|=4,Uh.current=null,p2(t,n),U0(n,t),U1(id),il=!!rd,id=rd=null,t.current=n,m2(n),HE(),re=l,oe=o,Ct.transition=s}else t.current=n;if(Sa&&(Sa=!1,qn=t,wl=i),s=t.pendingLanes,s===0&&(er=null),GE(n.stateNode),mt(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_l)throw _l=!1,t=Id,Id=null,t;return wl&1&&t.tag!==0&&Ci(),s=t.pendingLanes,s&1?t===Sd?Ws++:(Ws=0,Sd=t):Ws=0,vr(),null}function Ci(){if(qn!==null){var t=kv(wl),e=Ct.transition,n=oe;try{if(Ct.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,wl=0,re&6)throw Error(U(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:Bs(8,p,s)}var m=p.child;if(m!==null)m.return=p,$=m;else for(;$!==null;){p=$;var g=p.sibling,w=p.return;if(M0(p),p===d){$=null;break}if(g!==null){g.return=w,$=g;break}$=w}}}var A=s.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var N=R.sibling;R.sibling=null,R=N}while(R!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,$=k;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zl(9,l)}}catch(V){Ee(l,l.return,V)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(re=i,vr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Hl,t)}catch{}r=!0}return r}finally{oe=n,Ct.transition=e}}return!1}function lg(t,e,n){e=ji(n,e),e=k0(t,e,1),t=Zn(t,e,1),e=ot(),t!==null&&(Ao(t,1,e),mt(t,e))}function Ee(t,e,n){if(t.tag===3)lg(t,t,n);else for(;e!==null;){if(e.tag===3){lg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=ji(n,t),t=A0(e,t,1),e=Zn(e,t,1),t=ot(),e!==null&&(Ao(e,1,t),mt(e,t));break}}e=e.return}}function x2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(ze&n)===n&&(Pe===4||Pe===3&&(ze&130023424)===ze&&500>Se()-Bh?Mr(t,0):zh|=n),mt(t,e)}function K0(t,e){e===0&&(t.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var n=ot();t=Tn(t,e),t!==null&&(Ao(t,e,n),mt(t,n))}function E2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K0(t,n)}function T2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),K0(t,n)}var G0;G0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,c2(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&Jv(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ua(t,e),t=e.pendingProps;var i=Oi(e,et.current);Ai(e,n),i=Vh(null,e,r,t,i,n);var s=Lh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rh(e),i.updater=Jl,e.stateNode=i,i._reactInternals=e,fd(e,r,t,n),e=gd(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Th(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=S2(r),t=Vt(r,t),i){case 0:e=md(null,e,r,t,n);break e;case 1:e=Jm(null,e,r,t,n);break e;case 11:e=Ym(null,e,r,t,n);break e;case 14:e=Xm(null,e,r,Vt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),md(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Jm(t,e,r,i,n);case 3:e:{if(P0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,i0(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(U(423)),e),e=Zm(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(U(424)),e),e=Zm(t,e,r,n,i);break e}else for(_t=Jn(e.stateNode.containerInfo.firstChild),xt=e,me=!0,Mt=null,n=n0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){e=In(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return s0(e),t===null&&cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sd(r,i)?o=null:s!==null&&sd(r,s)&&(e.flags|=32),R0(t,e),st(t,e,o,n),e.child;case 6:return t===null&&cd(e),null;case 13:return N0(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Li(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ym(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(hl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ft.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ai(e,n),i=Rt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Xm(t,e,r,i,n);case 15:return C0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ua(t,e),e.tag=1,pt(r)?(t=!0,ul(e)):t=!1,Ai(e,n),S0(e,r,i),fd(e,r,i,n),gd(null,e,r,!0,t,n);case 19:return D0(t,e,n);case 22:return b0(t,e,n)}throw Error(U(156,e.tag))};function Q0(t,e){return Ev(t,e)}function I2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new I2(t,e,n,r)}function qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S2(t){if(typeof t=="function")return qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dh)return 11;if(t===hh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return jr(n.children,i,s,e);case ch:o=8,i|=8;break;case Mc:return t=At(12,n,e,i|2),t.elementType=Mc,t.lanes=s,t;case jc:return t=At(13,n,e,i),t.elementType=jc,t.lanes=s,t;case Fc:return t=At(19,n,e,i),t.elementType=Fc,t.lanes=s,t;case sv:return tu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rv:o=10;break e;case iv:o=9;break e;case dh:o=11;break e;case hh:o=14;break e;case Mn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function tu(t,e,n,r){return t=At(22,t,r,e),t.elementType=sv,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function k2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kh(t,e,n,r,i,s,o,l,u){return t=new k2(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(s),t}function A2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Y0(t){if(!t)return ur;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(pt(n))return Yv(t,n,e)}return e}function X0(t,e,n,r,i,s,o,l,u){return t=Kh(n,r,!0,t,i,s,o,l,u),t.context=Y0(null),n=t.current,r=ot(),i=tr(n),s=vn(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,Ao(t,i,r),mt(t,r),t}function nu(t,e,n,r){var i=e.current,s=ot(),o=tr(i);return n=Y0(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(Ut(t,i,o,s),Ma(t,i,o)),o}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){ug(t,e),(t=t.alternate)&&ug(t,e)}function C2(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qh(t){this._internalRoot=t}ru.prototype.render=Qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));nu(t,e,null,null)};ru.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){nu(null,t,null,null)}),e[En]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&Pv(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cg(){}function b2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=El(o);s.call(d)}}var o=X0(e,r,t,0,null,!1,!1,"",cg);return t._reactRootContainer=o,t[En]=o.current,so(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=El(u);l.call(d)}}var u=Kh(t,0,!1,null,null,!1,!1,"",cg);return t._reactRootContainer=u,t[En]=u.current,so(t.nodeType===8?t.parentNode:t),Wr(function(){nu(e,u,n,r)}),u}function su(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=El(o);l.call(u)}}nu(e,o,t,i)}else o=b2(n,e,t,i,r);return El(o)}Av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Cs(e.pendingLanes);n!==0&&(mh(e,n|1),mt(e,Se()),!(re&6)&&(Fi=Se()+500,vr()))}break;case 13:Wr(function(){var r=Tn(t,1);if(r!==null){var i=ot();Ut(r,t,1,i)}}),Gh(t,1)}};gh=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=ot();Ut(e,t,134217728,n)}Gh(t,134217728)}};Cv=function(t){if(t.tag===13){var e=tr(t),n=Tn(t,e);if(n!==null){var r=ot();Ut(n,t,e,r)}Gh(t,e)}};bv=function(){return oe};Rv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Qc=function(t,e,n){switch(e){case"input":if(Bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ql(r);if(!i)throw Error(U(90));av(r),Bc(r,i)}}}break;case"textarea":uv(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};gv=$h;yv=Wr;var R2={usingClientEntryPoint:!1,Events:[bo,gi,Ql,pv,mv,$h]},Is={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P2={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wv(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||C2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Hl=ka.inject(P2),Yt=ka}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R2;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(U(200));return A2(t,e,null,n)};Tt.createRoot=function(t,e){if(!Yh(t))throw Error(U(299));var n=!1,r="",i=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kh(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,so(t.nodeType===8?t.parentNode:t),new Qh(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=wv(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Wr(t)};Tt.hydrate=function(t,e,n){if(!iu(e))throw Error(U(200));return su(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X0(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ru(e)};Tt.render=function(t,e,n){if(!iu(e))throw Error(U(200));return su(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!iu(t))throw Error(U(40));return t._reactRootContainer?(Wr(function(){su(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};Tt.unstable_batchedUpdates=$h;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!iu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return su(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(t){console.error(t)}}Z0(),Zy.exports=Tt;var N2=Zy.exports,dg=N2;Vc.createRoot=dg.createRoot,Vc.hydrateRoot=dg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const hg="popstate";function D2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Cd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Tl(i)}return V2(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function O2(){return Math.random().toString(36).substr(2,8)}function fg(t,e){return{usr:t.state,key:t.key,idx:e}}function Cd(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xi(e):e,{state:n,key:e&&e.key||r||O2()})}function Tl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function V2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Kn.Pop,u=null,d=p();d==null&&(d=0,o.replaceState(mo({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=Kn.Pop;let N=p(),I=N==null?null:N-d;d=N,u&&u({action:l,location:R.location,delta:I})}function g(N,I){l=Kn.Push;let _=Cd(R.location,N,I);d=p()+1;let k=fg(_,d),O=R.createHref(_);try{o.pushState(k,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:l,location:R.location,delta:1})}function w(N,I){l=Kn.Replace;let _=Cd(R.location,N,I);d=p();let k=fg(_,d),O=R.createHref(_);o.replaceState(k,"",O),s&&u&&u({action:l,location:R.location,delta:0})}function A(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:Tl(N);return _=_.replace(/ $/,"%20"),ke(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let R={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hg,m),u=N,()=>{i.removeEventListener(hg,m),u=null}},createHref(N){return e(i,N)},createURL:A,encodeLocation(N){let I=A(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:w,go(N){return o.go(N)}};return R}var pg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pg||(pg={}));function L2(t,e,n){return n===void 0&&(n="/"),M2(t,e,n)}function M2(t,e,n,r){let i=typeof e=="string"?Xi(e):e,s=Jh(i.pathname||"/",n);if(s==null)return null;let o=e_(t);j2(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=Y2(s);l=K2(o[u],d)}return l}function e_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=rr([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),e_(s.children,e,p,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:H2(d,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of t_(s.path))i(s,o,u)}),e}function t_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=t_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function j2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:q2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F2=/^:[\w-]+$/,U2=3,z2=2,B2=1,$2=10,W2=-2,mg=t=>t==="*";function H2(t,e){let n=t.split("/"),r=n.length;return n.some(mg)&&(r+=W2),e&&(r+=z2),n.filter(i=>!mg(i)).reduce((i,s)=>i+(F2.test(s)?U2:s===""?B2:$2),r)}function q2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function K2(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",m=G2({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:rr([s,m.pathname]),pathnameBase:tT(rr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=rr([s,m.pathnameBase]))}return o}function G2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Q2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:g,isOptional:w}=p;if(g==="*"){let R=l[m]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const A=l[m];return w&&!A?d[g]=void 0:d[g]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function Q2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Y2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const X2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J2=t=>X2.test(t);function Z2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xi(t):t,s;if(n)if(J2(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Xh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=gg(n.substring(1),"/"):s=gg(n,e)}else s=e;return{pathname:s,search:nT(r),hash:rT(i)}}function gg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zh(t,e){let n=eT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ef(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xi(t):(i=mo({},t),ke(!i.pathname||!i.pathname.includes("?"),xc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),xc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=Z2(i,l),d=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),tT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function iT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n_=["post","put","patch","delete"];new Set(n_);const sT=["get",...n_];new Set(sT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(this,arguments)}const tf=L.createContext(null),oT=L.createContext(null),_r=L.createContext(null),ou=L.createContext(null),Rn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),r_=L.createContext(null);function aT(t,e){let{relative:n}=e===void 0?{}:e;Ji()||ke(!1);let{basename:r,navigator:i}=L.useContext(_r),{hash:s,pathname:o,search:l}=s_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:rr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ji(){return L.useContext(ou)!=null}function Po(){return Ji()||ke(!1),L.useContext(ou).location}function i_(t){L.useContext(_r).static||L.useLayoutEffect(t)}function wr(){let{isDataRoute:t}=L.useContext(Rn);return t?xT():lT()}function lT(){Ji()||ke(!1);let t=L.useContext(tf),{basename:e,future:n,navigator:r}=L.useContext(_r),{matches:i}=L.useContext(Rn),{pathname:s}=Po(),o=JSON.stringify(Zh(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return i_(()=>{l.current=!0}),L.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=ef(d,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:rr([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,s,t])}function uT(){let{matches:t}=L.useContext(Rn),e=t[t.length-1];return e?e.params:{}}function s_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(_r),{matches:i}=L.useContext(Rn),{pathname:s}=Po(),o=JSON.stringify(Zh(i,r.v7_relativeSplatPath));return L.useMemo(()=>ef(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function cT(t,e){return dT(t,e)}function dT(t,e,n,r){Ji()||ke(!1);let{navigator:i}=L.useContext(_r),{matches:s}=L.useContext(Rn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=Po(),p;if(e){var m;let N=typeof e=="string"?Xi(e):e;u==="/"||(m=N.pathname)!=null&&m.startsWith(u)||ke(!1),p=N}else p=d;let g=p.pathname||"/",w=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let A=L2(t,{pathname:w}),R=gT(A&&A.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:rr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:rr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&R?L.createElement(ou.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Kn.Pop}},R):R}function hT(){let t=wT(),e=iT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const fT=L.createElement(hT,null);class pT extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Rn.Provider,{value:this.props.routeContext},L.createElement(r_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mT(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(tf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Rn.Provider,{value:e},r)}function gT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||ke(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:w}=n,A=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||A){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let w,A=!1,R=null,N=null;n&&(w=l&&m.route.id?l[m.route.id]:void 0,R=m.route.errorElement||fT,u&&(d<0&&g===0?(ET("route-fallback"),A=!0,N=null):d===g&&(A=!0,N=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),_=()=>{let k;return w?k=R:A?k=N:m.route.Component?k=L.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=p,L.createElement(mT,{match:m,routeContext:{outlet:p,matches:I,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?L.createElement(pT,{location:n.location,revalidation:n.revalidation,component:R,error:w,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var o_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(o_||{}),a_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(a_||{});function yT(t){let e=L.useContext(tf);return e||ke(!1),e}function vT(t){let e=L.useContext(oT);return e||ke(!1),e}function _T(t){let e=L.useContext(Rn);return e||ke(!1),e}function l_(t){let e=_T(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function wT(){var t;let e=L.useContext(r_),n=vT(),r=l_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xT(){let{router:t}=yT(o_.UseNavigateStable),e=l_(a_.UseNavigateStable),n=L.useRef(!1);return i_(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,go({fromRouteId:e},s)))},[t,e])}const yg={};function ET(t,e,n){yg[t]||(yg[t]=!0)}function TT(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function cr(t){let{to:e,replace:n,state:r,relative:i}=t;Ji()||ke(!1);let{future:s,static:o}=L.useContext(_r),{matches:l}=L.useContext(Rn),{pathname:u}=Po(),d=wr(),p=ef(e,Zh(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(p);return L.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function Kt(t){ke(!1)}function IT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1,future:l}=t;Ji()&&ke(!1);let u=e.replace(/^\/*/,"/"),d=L.useMemo(()=>({basename:u,navigator:s,static:o,future:go({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Xi(r));let{pathname:p="/",search:m="",hash:g="",state:w=null,key:A="default"}=r,R=L.useMemo(()=>{let N=Jh(p,u);return N==null?null:{location:{pathname:N,search:m,hash:g,state:w,key:A},navigationType:i}},[u,p,m,g,w,A,i]);return R==null?null:L.createElement(_r.Provider,{value:d},L.createElement(ou.Provider,{children:n,value:R}))}function ST(t){let{children:e,location:n}=t;return cT(bd(e),n)}new Promise(()=>{});function bd(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,bd(r.props.children,s));return}r.type!==Kt&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rd(){return Rd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rd.apply(this,arguments)}function kT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function AT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CT(t,e){return t.button===0&&(!e||e==="_self")&&!AT(t)}const bT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RT="6";try{window.__reactRouterVersion=RT}catch{}const PT="startTransition",vg=xE[PT];function NT(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=D2({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},p=L.useCallback(m=>{d&&vg?vg(()=>u(m)):u(m)},[u,d]);return L.useLayoutEffect(()=>o.listen(p),[o,p]),L.useEffect(()=>TT(r),[r]),L.createElement(IT,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const DT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Il=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:p,viewTransition:m}=e,g=kT(e,bT),{basename:w}=L.useContext(_r),A,R=!1;if(typeof d=="string"&&OT.test(d)&&(A=d,DT))try{let k=new URL(window.location.href),O=d.startsWith("//")?new URL(k.protocol+d):new URL(d),V=Jh(O.pathname,w);O.origin===k.origin&&V!=null?d=V+O.search+O.hash:R=!0}catch{}let N=aT(d,{relative:i}),I=VT(d,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function _(k){r&&r(k),k.defaultPrevented||I(k)}return L.createElement("a",Rd({},g,{href:A||N,onClick:R||s?r:_,ref:n,target:u}))});var _g;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_g||(_g={}));var wg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wg||(wg={}));function VT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=wr(),d=Po(),p=s_(t,{relative:o});return L.useCallback(m=>{if(CT(m,n)){m.preventDefault();let g=r!==void 0?r:Tl(d)===Tl(p);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,u,p,r,i,n,t,s,o,l])}var xg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,w=d&63;u||(w=64,o||(g=64)),r.push(n[p],n[m],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new MT;const g=s<<2|l>>4;if(r.push(g),d!==64){const w=l<<4&240|d>>2;if(r.push(w),m!==64){const A=d<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jT=function(t){const e=u_(t);return c_.encodeByteArray(e,!0)},Sl=function(t){return jT(t).replace(/\./g,"")},d_=function(t){try{return c_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=()=>FT().__FIREBASE_DEFAULTS__,zT=()=>{if(typeof process>"u"||typeof xg>"u")return;const t=xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&d_(t[1]);return e&&JSON.parse(e)},au=()=>{try{return UT()||zT()||BT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},h_=t=>{var e,n;return(n=(e=au())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=h_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},f_=()=>{var t;return(t=au())===null||t===void 0?void 0:t.config},p_=t=>{var e;return(e=au())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sl(JSON.stringify(n)),Sl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function KT(){var t;const e=(t=au())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XT(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JT(){return!KT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZT(){try{return typeof indexedDB=="object"}catch{return!1}}function eI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tI,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function nI(t,e){return t.replace(rI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rI=/\{\$([^}]+)}/g;function iI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Eg(s)&&Eg(o)){if(!kl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Eg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sI(t,e){const n=new oI(t,e);return n.subscribe.bind(n)}class oI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cI(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uI(t){return t===Pr?void 0:t}function cI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const hI={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},fI=te.INFO,pI={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},mI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nf{constructor(e){this.name=e,this._logLevel=fI,this._logHandler=mI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const gI=(t,e)=>e.some(n=>t instanceof n);let Tg,Ig;function yI(){return Tg||(Tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vI(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,Pd=new WeakMap,g_=new WeakMap,Tc=new WeakMap,rf=new WeakMap;function _I(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),rf.set(e,t),e}function wI(t){if(Pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pd.set(t,e)}let Nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xI(t){Nd=t(Nd)}function EI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return g_.set(r,e.sort?e.sort():[e]),ir(r)}:vI().includes(t)?function(...e){return t.apply(Ic(this),e),ir(m_.get(this))}:function(...e){return ir(t.apply(Ic(this),e))}}function TI(t){return typeof t=="function"?EI(t):(t instanceof IDBTransaction&&wI(t),gI(t,yI())?new Proxy(t,Nd):t)}function ir(t){if(t instanceof IDBRequest)return _I(t);if(Tc.has(t))return Tc.get(t);const e=TI(t);return e!==t&&(Tc.set(t,e),rf.set(e,t)),e}const Ic=t=>rf.get(t);function II(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ir(o.result),u.oldVersion,u.newVersion,ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const SI=["get","getKey","getAll","getAllKeys","count"],kI=["put","add","delete","clear"],Sc=new Map;function Sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Sc.set(e,s),s}xI(t=>({...t,get:(e,n,r)=>Sg(e,n)||t.get(e,n,r),has:(e,n)=>!!Sg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",kg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new nf("@firebase/app"),bI="@firebase/app-compat",RI="@firebase/analytics-compat",PI="@firebase/analytics",NI="@firebase/app-check-compat",DI="@firebase/app-check",OI="@firebase/auth",VI="@firebase/auth-compat",LI="@firebase/database",MI="@firebase/data-connect",jI="@firebase/database-compat",FI="@firebase/functions",UI="@firebase/functions-compat",zI="@firebase/installations",BI="@firebase/installations-compat",$I="@firebase/messaging",WI="@firebase/messaging-compat",HI="@firebase/performance",qI="@firebase/performance-compat",KI="@firebase/remote-config",GI="@firebase/remote-config-compat",QI="@firebase/storage",YI="@firebase/storage-compat",XI="@firebase/firestore",JI="@firebase/vertexai-preview",ZI="@firebase/firestore-compat",eS="firebase",tS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="[DEFAULT]",nS={[Dd]:"fire-core",[bI]:"fire-core-compat",[PI]:"fire-analytics",[RI]:"fire-analytics-compat",[DI]:"fire-app-check",[NI]:"fire-app-check-compat",[OI]:"fire-auth",[VI]:"fire-auth-compat",[LI]:"fire-rtdb",[MI]:"fire-data-connect",[jI]:"fire-rtdb-compat",[FI]:"fire-fn",[UI]:"fire-fn-compat",[zI]:"fire-iid",[BI]:"fire-iid-compat",[$I]:"fire-fcm",[WI]:"fire-fcm-compat",[HI]:"fire-perf",[qI]:"fire-perf-compat",[KI]:"fire-rc",[GI]:"fire-rc-compat",[QI]:"fire-gcs",[YI]:"fire-gcs-compat",[XI]:"fire-fst",[ZI]:"fire-fst-compat",[JI]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map,rS=new Map,Vd=new Map;function Ag(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ui(t){const e=t.name;if(Vd.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of Al.values())Ag(n,t);for(const n of rS.values())Ag(n,t);return!0}function sf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new No("app","Firebase",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=tS;function y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Od,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=f_()),!n)throw sr.create("no-options");const s=Al.get(i);if(s){if(kl(n,s.options)&&kl(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new dI(i);for(const u of Vd.values())o.addComponent(u);const l=new sS(n,r,o);return Al.set(i,l),l}function v_(t=Od){const e=Al.get(t);if(!e&&t===Od&&f_())return y_();if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){var r;let i=(r=nS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}Ui(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebase-heartbeat-database",aS=1,yo="firebase-heartbeat-store";let kc=null;function __(){return kc||(kc=II(oS,aS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function lS(t){try{const n=(await __()).transaction(yo),r=await n.objectStore(yo).get(w_(t));return await n.done,r}catch(e){if(e instanceof Pn)Sn.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Cg(t,e){try{const r=(await __()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,w_(t)),await r.done}catch(n){if(n instanceof Pn)Sn.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=1024,cS=30*24*60*60*1e3;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=cS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:r,unsentEntries:i}=hS(this._heartbeatsCache.heartbeats),s=Sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sn.warn(n),""}}}function bg(){return new Date().toISOString().substring(0,10)}function hS(t,e=uS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZT()?eI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rg(t){return Sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){Ui(new Hr("platform-logger",e=>new AI(e),"PRIVATE")),Ui(new Hr("heartbeat",e=>new dS(e),"PRIVATE")),or(Dd,kg,t),or(Dd,kg,"esm2017"),or("fire-js","")}pS("");function of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mS=x_,E_=new No("auth","Firebase",x_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new nf("@firebase/auth");function gS(t,...e){Cl.logLevel<=te.WARN&&Cl.warn(`Auth (${Zi}): ${t}`,...e)}function Wa(t,...e){Cl.logLevel<=te.ERROR&&Cl.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw lf(t,...e)}function zt(t,...e){return lf(t,...e)}function af(t,e,n){const r=Object.assign(Object.assign({},mS()),{[e]:n});return new No("auth","Firebase",r).create(e,{appName:t.name})}function _n(t){return af(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),af(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E_.create(t,...e)}function K(t,e,...n){if(!t)throw lf(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function kn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vS(){return Pg()==="http:"||Pg()==="https:"}function Pg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||QT()||"connection"in navigator)?navigator.onLine:!0}function wS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=qT()||YT()}get(){return _S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new Oo(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,i={}){return I_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Do(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return GT()||(d.referrerPolicy="no-referrer"),T_.fetch()(S_(t,t.config.apiHost,n,l),d)})}async function I_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xS),e);try{const i=new IS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw af(t,p,d);Nt(t,p)}}catch(i){if(i instanceof Pn)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function Vo(t,e,n,r,i={}){const s=await Er(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function S_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?uf(t.config,i):`${t.config.apiScheme}://${i}`}function TS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),ES.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}function Ng(t){return t!==void 0&&t.enterprise!==void 0}class SS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kS(t,e){return Er(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function k_(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CS(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=cf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(Ac(i.auth_time)),issuedAtTime:Hs(Ac(i.iat)),expirationTime:Hs(Ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=d_(n);return i?JSON.parse(i):(Wa("Failed to decode base64 JWT payload"),null)}catch(i){return Wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dg(t){const e=cf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&bS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vo(t,k_(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?A_(s.providerUserInfo):[],l=NS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Md(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function PS(t){const e=De(t);await bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function A_(t){return t.map(e=>{var{providerId:n}=e,r=of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e){const n=await I_(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=S_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",T_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OS(t,e){return Er(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Md(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CS(this,e)}reload(){return PS(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await vo(this,AS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:O,isAnonymous:V,providerData:F,stsTokenManager:E}=n;K(k&&E,e,"internal-error");const v=bi.fromJSON(this.name,E);K(typeof k=="string",e,"internal-error"),Ln(m,e.name),Ln(g,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof V=="boolean",e,"internal-error"),Ln(w,e.name),Ln(A,e.name),Ln(R,e.name),Ln(N,e.name),Ln(I,e.name),Ln(_,e.name);const x=new gn({uid:k,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:V,photoURL:A,phoneNumber:w,tenantId:R,stsTokenManager:v,createdAt:I,lastLoginAt:_});return F&&Array.isArray(F)&&(x.providerData=F.map(S=>Object.assign({},S))),N&&(x._redirectEventId=N),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?A_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bi;l.updateFromIdToken(r);const u=new gn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Md(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;function yn(t){kn(t instanceof Function,"Expected a class definition");let e=Og.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Og.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C_.type="NONE";const Vg=C_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ha(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ha("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(yn(Vg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||yn(Vg);const o=Ha(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const m=gn._fromJSON(e,p);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ri(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(V_(e))return"Webos";if(R_(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(D_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b_(t=tt()){return/firefox\//i.test(t)}function R_(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(t=tt()){return/crios\//i.test(t)}function N_(t=tt()){return/iemobile/i.test(t)}function D_(t=tt()){return/android/i.test(t)}function O_(t=tt()){return/blackberry/i.test(t)}function V_(t=tt()){return/webos/i.test(t)}function df(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VS(t=tt()){var e;return df(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LS(){return XT()&&document.documentMode===10}function L_(t=tt()){return df(t)||D_(t)||V_(t)||O_(t)||/windows phone/i.test(t)||N_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e=[]){let n;switch(t){case"Browser":n=Lg(tt());break;case"Worker":n=`${Lg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e={}){return Er(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=6;class US{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mg(this),this.idTokenSubscription=new Mg(this),this.beforeStateQueue=new MS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await k_(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(_n(this));const n=e?De(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),n=new US(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new No("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return De(t)}class Mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=sI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BS(t){lu=t}function j_(t){return lu.loadJS(t)}function $S(){return lu.recaptchaEnterpriseScript}function WS(){return lu.gapiScript}function HS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qS="recaptcha-enterprise",KS="NO_RECAPTCHA";class GS{constructor(e){this.type=qS,this.auth=Tr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{kS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new SS(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ng(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(KS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ng(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$S();u.length!==0&&(u+=l),j_(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function jg(t,e,n,r=!1){const i=new GS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function jd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){const n=sf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kl(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function YS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XS(t,e,n){const r=Tr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=F_(e),{host:o,port:l}=JS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZS()}function F_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JS(t){const e=F_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fg(o)}}}function Fg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function ek(t,e){return Er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return Vo(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function rk(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,n,"signInWithPassword",tk);case"emailLink":return nk(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,r,"signUpPassword",ek);case"emailLink":return rk(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="http://localhost";class qr extends hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=of(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ok(t){const e=Rs(Ps(t)).link,n=e?Rs(Ps(e)).deep_link_id:null,r=Rs(Ps(t)).deep_link_id;return(r?Rs(Ps(r)).link:null)||r||n||e||t}class ff{constructor(e){var n,r,i,s,o,l;const u=Rs(Ps(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=sk((i=u.mode)!==null&&i!==void 0?i:null);K(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ok(e);try{return new ff(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return K(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Lo{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Lo{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Lo{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return Vo(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=Ug(r);return new Kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ug(r);return new Kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function U_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function lk(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(_n(r));const i="reauthenticate";try{const s=await vo(t,U_(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=cf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(t,e,n=!1){if(jt(t.app))return Promise.reject(_n(t));const r="signIn",i=await U_(t,r,e),s=await Kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ck(t,e){return z_(Tr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t){const e=Tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dk(t,e,n){if(jt(t.app))return Promise.reject(_n(t));const r=Tr(t),o=await jd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ak).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&B_(t),u}),l=await Kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hk(t,e,n){return jt(t.app)?Promise.reject(_n(t)):ck(De(t),es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&B_(t),r})}function fk(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function pk(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function mk(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function mf(t){return De(t).signOut()}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=1e3,yk=10;class W_ extends $_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const vk=W_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends $_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H_.type="SESSION";const q_=H_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await _k(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=gf("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function xk(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ik(){return K_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="firebaseLocalStorageDb",Sk=1,Nl="firebaseLocalStorage",Q_="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cu(t,e){return t.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function kk(){const t=indexedDB.deleteDatabase(G_);return new Mo(t).toPromise()}function Fd(){const t=indexedDB.open(G_,Sk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nl,{keyPath:Q_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nl)?e(r):(r.close(),await kk(),e(await Fd()))})})}async function zg(t,e,n){const r=cu(t,!0).put({[Q_]:e,value:n});return new Mo(r).toPromise()}async function Ak(t,e){const n=cu(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=cu(t,!0).delete(e);return new Mo(n).toPromise()}const Ck=800,bk=3;class Y_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(Ik()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ek(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fd();return await zg(e,Pl,"1"),await Bg(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ak(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cu(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y_.type="LOCAL";const Rk=Y_;new Oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t,e){return e?yn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pk(t){return z_(t.auth,new yf(t),t.bypassAuthState)}function Nk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),uk(n,new yf(t),t.bypassAuthState)}async function Dk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),lk(n,new yf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pk;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:Nt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=new Oo(2e3,1e4);async function Z_(t,e,n){if(jt(t.app))return Promise.reject(zt(t,"operation-not-supported-in-this-environment"));const r=Tr(t);yS(t,e,pf);const i=X_(r,n);return new Vr(r,"signInViaPopup",e,i).executeNotNull()}class Vr extends J_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ok.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="pendingRedirect",qa=new Map;class Lk extends J_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await Mk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mk(t,e){const n=Uk(e),r=Fk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jk(t,e){qa.set(t._key(),e)}function Fk(t){return yn(t._redirectPersistence)}function Uk(t){return Ha(Vk,t.config.apiKey,t.name)}async function zk(t,e,n=!1){if(jt(t.app))return Promise.reject(_n(t));const r=Tr(t),i=X_(r,e),o=await new Lk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=10*60*1e3;class $k{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ew(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bk&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ew({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ew(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kk=/^https?/;async function Gk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hk(t);for(const n of e)try{if(Qk(n))return}catch{}Nt(t,"unauthorized-domain")}function Qk(t){const e=Ld(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kk.test(n))return!1;if(qk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new Oo(3e4,6e4);function Wg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xk(t){return new Promise((e,n)=>{var r,i,s;function o(){Wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wg(),n(zt(t,"network-request-failed"))},timeout:Yk.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const l=HS("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},j_(`${WS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function Jk(t){return Ka=Ka||Xk(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Oo(5e3,15e3),eA="__/auth/iframe",tA="emulator/auth/iframe",nA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uf(e,tA):`https://${t.config.authDomain}/${eA}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=rA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function sA(t){const e=await Jk(t),n=Jt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:iA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),l=Jt().setTimeout(()=>{s(o)},Zk.get());function u(){Jt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aA=500,lA=600,uA="_blank",cA="http://localhost";class Hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dA(t,e,n,r=aA,i=lA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oA),{width:r.toString(),height:i.toString(),top:s,left:o}),d=tt().toLowerCase();n&&(l=P_(d)?uA:n),b_(d)&&(e=e||cA,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[w,A])=>`${g}${w}=${A},`,"");if(VS(d)&&l!=="_self")return hA(e||"",l),new Hg(null);const m=window.open(e||"",l,p);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Hg(m)}function hA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="__/auth/handler",pA="emulator/auth/handler",mA=encodeURIComponent("fac");async function qg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Lo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${mA}=${encodeURIComponent(u)}`:"";return`${gA(t)}?${Do(l).slice(1)}${d}`}function gA({config:t}){return t.emulator?uf(t,pA):`https://${t.authDomain}/${fA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class yA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q_,this._completeRedirectFn=zk,this._overrideRedirectResult=jk}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qg(e,n,r,Ld(),i);return dA(e,o,gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qg(e,n,r,Ld(),i);return xk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sA(e),r=new $k(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return L_()||R_()||df()}}const vA=yA;var Kg="@firebase/auth",Gg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(t){Ui(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M_(t)},d=new zS(r,i,s,u);return YS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ui(new Hr("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(r=>new _A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(Kg,Gg,wA(t)),or(Kg,Gg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=5*60,TA=p_("authIdTokenMaxAge")||EA;let Qg=null;const IA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TA)return;const i=n==null?void 0:n.token;Qg!==i&&(Qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SA(t=v_()){const e=sf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QS(t,{popupRedirectResolver:vA,persistence:[Rk,vk,q_]}),r=p_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=IA(s.toString());pk(n,o,()=>o(n.currentUser)),fk(n,l=>o(l))}}const i=h_("auth");return i&&XS(n,`http://${i}`),n}function kA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");var AA="firebase",CA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(AA,CA,"app");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,tw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function x(){}x.prototype=v.prototype,E.D=v.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(S,b,C){for(var T=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)T[nt-2]=arguments[nt];return v.prototype[b].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,x){x||(x=0);var S=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)S[b]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;else for(b=0;16>b;++b)S[b]=v[x++]|v[x++]<<8|v[x++]<<16|v[x++]<<24;v=E.g[0],x=E.g[1],b=E.g[2];var C=E.g[3],T=v+(C^x&(b^C))+S[0]+3614090360&4294967295;v=x+(T<<7&4294967295|T>>>25),T=C+(b^v&(x^b))+S[1]+3905402710&4294967295,C=v+(T<<12&4294967295|T>>>20),T=b+(x^C&(v^x))+S[2]+606105819&4294967295,b=C+(T<<17&4294967295|T>>>15),T=x+(v^b&(C^v))+S[3]+3250441966&4294967295,x=b+(T<<22&4294967295|T>>>10),T=v+(C^x&(b^C))+S[4]+4118548399&4294967295,v=x+(T<<7&4294967295|T>>>25),T=C+(b^v&(x^b))+S[5]+1200080426&4294967295,C=v+(T<<12&4294967295|T>>>20),T=b+(x^C&(v^x))+S[6]+2821735955&4294967295,b=C+(T<<17&4294967295|T>>>15),T=x+(v^b&(C^v))+S[7]+4249261313&4294967295,x=b+(T<<22&4294967295|T>>>10),T=v+(C^x&(b^C))+S[8]+1770035416&4294967295,v=x+(T<<7&4294967295|T>>>25),T=C+(b^v&(x^b))+S[9]+2336552879&4294967295,C=v+(T<<12&4294967295|T>>>20),T=b+(x^C&(v^x))+S[10]+4294925233&4294967295,b=C+(T<<17&4294967295|T>>>15),T=x+(v^b&(C^v))+S[11]+2304563134&4294967295,x=b+(T<<22&4294967295|T>>>10),T=v+(C^x&(b^C))+S[12]+1804603682&4294967295,v=x+(T<<7&4294967295|T>>>25),T=C+(b^v&(x^b))+S[13]+4254626195&4294967295,C=v+(T<<12&4294967295|T>>>20),T=b+(x^C&(v^x))+S[14]+2792965006&4294967295,b=C+(T<<17&4294967295|T>>>15),T=x+(v^b&(C^v))+S[15]+1236535329&4294967295,x=b+(T<<22&4294967295|T>>>10),T=v+(b^C&(x^b))+S[1]+4129170786&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^b&(v^x))+S[6]+3225465664&4294967295,C=v+(T<<9&4294967295|T>>>23),T=b+(v^x&(C^v))+S[11]+643717713&4294967295,b=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(b^C))+S[0]+3921069994&4294967295,x=b+(T<<20&4294967295|T>>>12),T=v+(b^C&(x^b))+S[5]+3593408605&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^b&(v^x))+S[10]+38016083&4294967295,C=v+(T<<9&4294967295|T>>>23),T=b+(v^x&(C^v))+S[15]+3634488961&4294967295,b=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(b^C))+S[4]+3889429448&4294967295,x=b+(T<<20&4294967295|T>>>12),T=v+(b^C&(x^b))+S[9]+568446438&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^b&(v^x))+S[14]+3275163606&4294967295,C=v+(T<<9&4294967295|T>>>23),T=b+(v^x&(C^v))+S[3]+4107603335&4294967295,b=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(b^C))+S[8]+1163531501&4294967295,x=b+(T<<20&4294967295|T>>>12),T=v+(b^C&(x^b))+S[13]+2850285829&4294967295,v=x+(T<<5&4294967295|T>>>27),T=C+(x^b&(v^x))+S[2]+4243563512&4294967295,C=v+(T<<9&4294967295|T>>>23),T=b+(v^x&(C^v))+S[7]+1735328473&4294967295,b=C+(T<<14&4294967295|T>>>18),T=x+(C^v&(b^C))+S[12]+2368359562&4294967295,x=b+(T<<20&4294967295|T>>>12),T=v+(x^b^C)+S[5]+4294588738&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^b)+S[8]+2272392833&4294967295,C=v+(T<<11&4294967295|T>>>21),T=b+(C^v^x)+S[11]+1839030562&4294967295,b=C+(T<<16&4294967295|T>>>16),T=x+(b^C^v)+S[14]+4259657740&4294967295,x=b+(T<<23&4294967295|T>>>9),T=v+(x^b^C)+S[1]+2763975236&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^b)+S[4]+1272893353&4294967295,C=v+(T<<11&4294967295|T>>>21),T=b+(C^v^x)+S[7]+4139469664&4294967295,b=C+(T<<16&4294967295|T>>>16),T=x+(b^C^v)+S[10]+3200236656&4294967295,x=b+(T<<23&4294967295|T>>>9),T=v+(x^b^C)+S[13]+681279174&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^b)+S[0]+3936430074&4294967295,C=v+(T<<11&4294967295|T>>>21),T=b+(C^v^x)+S[3]+3572445317&4294967295,b=C+(T<<16&4294967295|T>>>16),T=x+(b^C^v)+S[6]+76029189&4294967295,x=b+(T<<23&4294967295|T>>>9),T=v+(x^b^C)+S[9]+3654602809&4294967295,v=x+(T<<4&4294967295|T>>>28),T=C+(v^x^b)+S[12]+3873151461&4294967295,C=v+(T<<11&4294967295|T>>>21),T=b+(C^v^x)+S[15]+530742520&4294967295,b=C+(T<<16&4294967295|T>>>16),T=x+(b^C^v)+S[2]+3299628645&4294967295,x=b+(T<<23&4294967295|T>>>9),T=v+(b^(x|~C))+S[0]+4096336452&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~b))+S[7]+1126891415&4294967295,C=v+(T<<10&4294967295|T>>>22),T=b+(v^(C|~x))+S[14]+2878612391&4294967295,b=C+(T<<15&4294967295|T>>>17),T=x+(C^(b|~v))+S[5]+4237533241&4294967295,x=b+(T<<21&4294967295|T>>>11),T=v+(b^(x|~C))+S[12]+1700485571&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~b))+S[3]+2399980690&4294967295,C=v+(T<<10&4294967295|T>>>22),T=b+(v^(C|~x))+S[10]+4293915773&4294967295,b=C+(T<<15&4294967295|T>>>17),T=x+(C^(b|~v))+S[1]+2240044497&4294967295,x=b+(T<<21&4294967295|T>>>11),T=v+(b^(x|~C))+S[8]+1873313359&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~b))+S[15]+4264355552&4294967295,C=v+(T<<10&4294967295|T>>>22),T=b+(v^(C|~x))+S[6]+2734768916&4294967295,b=C+(T<<15&4294967295|T>>>17),T=x+(C^(b|~v))+S[13]+1309151649&4294967295,x=b+(T<<21&4294967295|T>>>11),T=v+(b^(x|~C))+S[4]+4149444226&4294967295,v=x+(T<<6&4294967295|T>>>26),T=C+(x^(v|~b))+S[11]+3174756917&4294967295,C=v+(T<<10&4294967295|T>>>22),T=b+(v^(C|~x))+S[2]+718787259&4294967295,b=C+(T<<15&4294967295|T>>>17),T=x+(C^(b|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var x=v-this.blockSize,S=this.B,b=this.h,C=0;C<v;){if(b==0)for(;C<=x;)i(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<v;)if(S[b++]=E.charCodeAt(C++),b==this.blockSize){i(this,S),b=0;break}}else for(;C<v;)if(S[b++]=E[C++],b==this.blockSize){i(this,S),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var x=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=x&255,x/=256;for(this.u(E),E=Array(16),v=x=0;4>v;++v)for(var S=0;32>S;S+=8)E[x++]=this.g[v]>>>S&255;return E};function s(E,v){var x=l;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=v(E)}function o(E,v){this.h=v;for(var x=[],S=!0,b=E.length-1;0<=b;b--){var C=E[b]|0;S&&C==v||(x[b]=C,S=!1)}this.g=x}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return N(d(-E));for(var v=[],x=1,S=0;E>=x;S++)v[S]=E/x|0,x*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(p(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=d(Math.pow(v,8)),S=m,b=0;b<E.length;b+=8){var C=Math.min(8,E.length-b),T=parseInt(E.substring(b,b+C),v);8>C?(C=d(Math.pow(v,C)),S=S.j(C).add(d(T))):(S=S.j(x),S=S.add(d(T)))}return S}var m=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var E=0,v=1,x=0;x<this.g.length;x++){var S=this.i(x);E+=(0<=S?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(R(this))return"-"+N(this).toString(E);for(var v=d(Math.pow(E,6)),x=this,S="";;){var b=O(x,v).g;x=I(x,b.j(v));var C=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=b,A(x))return C+S;for(;6>C.length;)C="0"+C;S=C+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=I(this,E),R(E)?-1:A(E)?0:1};function N(E){for(var v=E.g.length,x=[],S=0;S<v;S++)x[S]=~E.g[S];return new o(x,~E.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],S=0,b=0;b<=v;b++){var C=S+(this.i(b)&65535)+(E.i(b)&65535),T=(C>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);S=T>>>16,C&=65535,T&=65535,x[b]=T<<16|C}return new o(x,x[x.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(N(v))}t.j=function(E){if(A(this)||A(E))return m;if(R(this))return R(E)?N(this).j(N(E)):N(N(this).j(E));if(R(E))return N(this.j(N(E)));if(0>this.l(w)&&0>E.l(w))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,x=[],S=0;S<2*v;S++)x[S]=0;for(S=0;S<this.g.length;S++)for(var b=0;b<E.g.length;b++){var C=this.i(S)>>>16,T=this.i(S)&65535,nt=E.i(b)>>>16,nn=E.i(b)&65535;x[2*S+2*b]+=T*nn,_(x,2*S+2*b),x[2*S+2*b+1]+=C*nn,_(x,2*S+2*b+1),x[2*S+2*b+1]+=T*nt,_(x,2*S+2*b+1),x[2*S+2*b+2]+=C*nt,_(x,2*S+2*b+2)}for(S=0;S<v;S++)x[S]=x[2*S+1]<<16|x[2*S];for(S=v;S<2*v;S++)x[S]=0;return new o(x,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function k(E,v){this.g=E,this.h=v}function O(E,v){if(A(v))throw Error("division by zero");if(A(E))return new k(m,m);if(R(E))return v=O(N(E),v),new k(N(v.g),N(v.h));if(R(v))return v=O(E,N(v)),new k(N(v.g),v.h);if(30<E.g.length){if(R(E)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var x=g,S=v;0>=S.l(E);)x=V(x),S=V(S);var b=F(x,1),C=F(S,1);for(S=F(S,2),x=F(x,2);!A(S);){var T=C.add(S);0>=T.l(E)&&(b=b.add(x),C=T),S=F(S,1),x=F(x,1)}return v=I(E,b.j(v)),new k(b,v)}for(b=m;0<=E.l(v);){for(x=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(x)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),C=d(x),T=C.j(v);R(T)||0<T.l(E);)x-=S,C=d(x),T=C.j(v);A(C)&&(C=g),b=b.add(C),E=I(E,T)}return new k(b,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],S=0;S<v;S++)x[S]=this.i(S)&E.i(S);return new o(x,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],S=0;S<v;S++)x[S]=this.i(S)|E.i(S);return new o(x,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),x=[],S=0;S<v;S++)x[S]=this.i(S)^E.i(S);return new o(x,this.h^E.h)};function V(E){for(var v=E.g.length+1,x=[],S=0;S<v;S++)x[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(x,E.h)}function F(E,v){var x=v>>5;v%=32;for(var S=E.g.length-x,b=[],C=0;C<S;C++)b[C]=0<v?E.i(C+x)>>>v|E.i(C+x+1)<<32-v:E.i(C+x);return new o(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,Fr=o}).apply(typeof Yg<"u"?Yg:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nw,Ns,rw,Ga,Ud,iw,sw,ow;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in h))break e;h=h[P]}a=a[a.length-1],y=h[a],c=c(y),c!=y&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,y=!1,P={next:function(){if(!y&&h<a.length){var D=h++;return{value:c(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,h){return a.call.apply(a.bind,arguments)}function m(a,c,h){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function w(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var y=h.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(y,P,D){for(var z=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)z[ue-2]=arguments[ue];return c.prototype[P].apply(y,z)}}function R(a){const c=a.length;if(0<c){const h=Array(c);for(let y=0;y<c;y++)h[y]=a[y];return h}return[]}function N(a,c){for(let h=1;h<arguments.length;h++){const y=arguments[h];if(u(y)){const P=a.length||0,D=y.length||0;a.length=P+D;for(let z=0;z<D;z++)a[P+z]=y[z]}else a.push(y)}}class I{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var V=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function F(a,c,h){for(const y in a)c.call(h,a[y],y,a)}function E(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let h,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(h in y)a[h]=y[h];for(let D=0;D<x.length;D++)h=x[D],Object.prototype.hasOwnProperty.call(y,h)&&(a[h]=y[h])}}function b(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class nt{constructor(){this.h=this.g=null}add(c,h){const y=nn.get();y.set(c,h),this.h?this.h.next=y:this.g=y,this.h=y}}var nn=new I(()=>new Ht,a=>a.reset());class Ht{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,B=!1,Q=new nt,J=()=>{const a=l.Promise.resolve(void 0);gt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(h){C(h)}var c=nn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function sn(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:on[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}A(sn,Te);var on={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),Ax=0;function Cx(a,c,h,y,P){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!y,this.ha=P,this.key=++Ax,this.da=this.fa=!1}function qo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ko(a){this.src=a,this.g={},this.h=0}Ko.prototype.add=function(a,c,h,y,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Au(a,c,y,P);return-1<z?(c=a[z],h||(c.fa=!1)):(c=new Cx(c,this.src,D,!!y,P),c.fa=h,a.push(c)),c};function ku(a,c){var h=c.type;if(h in a.g){var y=a.g[h],P=Array.prototype.indexOf.call(y,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(y,P,1),D&&(qo(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Au(a,c,h,y){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!h&&D.ha==y)return P}return-1}var Cu="closure_lm_"+(1e6*Math.random()|0),bu={};function ip(a,c,h,y,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)ip(a,c[D],h,y,P);return null}return h=ap(h),a&&a[an]?a.K(c,h,d(y)?!!y.capture:!1,P):bx(a,c,h,!1,y,P)}function bx(a,c,h,y,P,D){if(!c)throw Error("Invalid event type");var z=d(P)?!!P.capture:!!P,ue=Pu(a);if(ue||(a[Cu]=ue=new Ko(a)),h=ue.add(c,h,y,z,D),h.proxy)return h;if(y=Rx(),h.proxy=y,y.src=a,y.listener=h,a.addEventListener)rn||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),y,P);else if(a.attachEvent)a.attachEvent(op(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rx(){function a(h){return c.call(a.src,a.listener,h)}const c=Px;return a}function sp(a,c,h,y,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)sp(a,c[D],h,y,P);else y=d(y)?!!y.capture:!!y,h=ap(h),a&&a[an]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],h=Au(D,h,y,P),-1<h&&(qo(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Pu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Au(c,h,y,P)),(h=-1<a?c[a]:null)&&Ru(h))}function Ru(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[an])ku(c.i,a);else{var h=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(h,y,a.capture):c.detachEvent?c.detachEvent(op(h),y):c.addListener&&c.removeListener&&c.removeListener(y),(h=Pu(c))?(ku(h,a),h.h==0&&(h.src=null,c[Cu]=null)):qo(a)}}}function op(a){return a in bu?bu[a]:bu[a]="on"+a}function Px(a,c){if(a.da)a=!0;else{c=new sn(c,this);var h=a.listener,y=a.ha||a.src;a.fa&&Ru(a),a=h.call(y,c)}return a}function Pu(a){return a=a[Cu],a instanceof Ko?a:null}var Nu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ap(a){return typeof a=="function"?a:(a[Nu]||(a[Nu]=function(c){return a.handleEvent(c)}),a[Nu])}function He(){le.call(this),this.i=new Ko(this),this.M=this,this.F=null}A(He,le),He.prototype[an]=!0,He.prototype.removeEventListener=function(a,c,h,y){sp(this,a,c,h,y)};function rt(a,c){var h,y=a.F;if(y)for(h=[];y;y=y.F)h.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var P=c;c=new Te(y,a),S(c,P)}if(P=!0,h)for(var D=h.length-1;0<=D;D--){var z=c.g=h[D];P=Go(z,y,!0,c)&&P}if(z=c.g=a,P=Go(z,y,!0,c)&&P,P=Go(z,y,!1,c)&&P,h)for(D=0;D<h.length;D++)z=c.g=h[D],P=Go(z,y,!1,c)&&P}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],y=0;y<h.length;y++)qo(h[y]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,h,y){return this.i.add(String(a),c,!1,h,y)},He.prototype.L=function(a,c,h,y){return this.i.add(String(a),c,!0,h,y)};function Go(a,c,h,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var z=c[D];if(z&&!z.da&&z.capture==h){var ue=z.listener,Me=z.ha||z.src;z.fa&&ku(a.i,z),P=ue.call(Me,y)!==!1&&P}}return P&&!y.defaultPrevented}function lp(a,c,h){if(typeof a=="function")h&&(a=g(a,h));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function up(a){a.g=lp(()=>{a.g=null,a.i&&(a.i=!1,up(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Nx extends le{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:up(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(a){le.call(this),this.h=a,this.g={}}A(is,le);var cp=[];function dp(a){F(a.g,function(c,h){this.g.hasOwnProperty(h)&&Ru(c)},a),a.g={}}is.prototype.N=function(){is.aa.N.call(this),dp(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Du=l.JSON.stringify,Dx=l.JSON.parse,Ox=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ou(){}Ou.prototype.h=null;function hp(a){return a.h||(a.h=a.i())}function fp(){}var ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vu(){Te.call(this,"d")}A(Vu,Te);function Lu(){Te.call(this,"c")}A(Lu,Te);var Sr={},pp=null;function Qo(){return pp=pp||new He}Sr.La="serverreachability";function mp(a){Te.call(this,Sr.La,a)}A(mp,Te);function os(a){const c=Qo();rt(c,new mp(c))}Sr.STAT_EVENT="statevent";function gp(a,c){Te.call(this,Sr.STAT_EVENT,a),this.stat=c}A(gp,Te);function it(a){const c=Qo();rt(c,new gp(c,a))}Sr.Ma="timingevent";function yp(a,c){Te.call(this,Sr.Ma,a),this.size=c}A(yp,Te);function as(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ls(){this.g=!0}ls.prototype.xa=function(){this.g=!1};function Vx(a,c,h,y,P,D){a.info(function(){if(a.g)if(D)for(var z="",ue=D.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var qe=ie[0];ie=ie[1];var Ke=qe.split("_");z=2<=Ke.length&&Ke[1]=="type"?z+(qe+"="+ie+"&"):z+(qe+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+h+`
`+z})}function Lx(a,c,h,y,P,D,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+h+`
`+D+" "+z})}function ri(a,c,h,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+jx(a,h)+(y?" "+y:"")})}function Mx(a,c){a.info(function(){return"TIMEOUT: "+c})}ls.prototype.info=function(){};function jx(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var y=h[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Du(h)}catch{return c}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mu;function Xo(){}A(Xo,Ou),Xo.prototype.g=function(){return new XMLHttpRequest},Xo.prototype.i=function(){return{}},Mu=new Xo;function Nn(a,c,h,y){this.j=a,this.i=c,this.l=h,this.R=y||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var wp={},ju={};function Fu(a,c,h){a.L=1,a.v=ta(ln(c)),a.m=h,a.P=!0,xp(a,null)}function xp(a,c){a.F=Date.now(),Jo(a),a.A=ln(a.v);var h=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Vp(h.i,"t",y),a.C=0,h=a.j.J,a.h=new _p,a.g=Zp(a.j,h?c:null,!a.m),0<a.O&&(a.M=new Nx(g(a.Y,a,a.g),a.O)),c=a.U,h=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(cp[0]=P.toString()),P=cp);for(var D=0;D<P.length;D++){var z=ip(h,P[D],y||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),os(),Vx(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const c=this.M;c&&un(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=un(this.g);var c=this.g.Ba();const oi=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Bp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=oi?os(3):os(2)),Uu(this);var h=this.g.Z();this.X=h;t:if(Ep(this)){var y=Bp(this.g);a="";var P=y.length,D=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),us(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(D&&c==P-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=h==200,Lx(this.i,this.u,this.A,this.l,this.R,Ke,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var ie=ue;break t}}ie=null}if(h=ie)ri(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zu(this,h);else{this.o=!1,this.s=3,it(12),kr(this),us(this);break e}}if(this.P){h=!0;let Dt;for(;!this.J&&this.C<z.length;)if(Dt=Fx(this,z),Dt==ju){Ke==4&&(this.s=4,it(14),h=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==wp){this.s=4,it(15),ri(this.i,this.l,z,"[Invalid Chunk]"),h=!1;break}else ri(this.i,this.l,Dt,null),zu(this,Dt);if(Ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||z.length!=0||this.h.h||(this.s=1,it(16),h=!1),this.o=this.o&&h,!h)ri(this.i,this.l,z,"[Invalid Chunked Response]"),kr(this),us(this);else if(0<z.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ku(qe),qe.M=!0,it(11))}}else ri(this.i,this.l,z,null),zu(this,z);Ke==4&&kr(this),this.o&&!this.J&&(Ke==4?Qp(this.j,this):(this.o=!1,Jo(this)))}else nE(this.g),h==400&&0<z.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),kr(this),us(this)}}}catch{}finally{}};function Ep(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Fx(a,c){var h=a.C,y=c.indexOf(`
`,h);return y==-1?ju:(h=Number(c.substring(h,y)),isNaN(h)?wp:(y+=1,y+h>c.length?ju:(c=c.slice(y,y+h),a.C=y+h,c)))}Nn.prototype.cancel=function(){this.J=!0,kr(this)};function Jo(a){a.S=Date.now()+a.I,Tp(a,a.I)}function Tp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=as(g(a.ba,a),c)}function Uu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Mx(this.i,this.A),this.L!=2&&(os(),it(17)),kr(this),this.s=2,us(this)):Tp(this,this.S-a)};function us(a){a.j.G==0||a.J||Qp(a.j,a)}function kr(a){Uu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,dp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function zu(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Bu(h.h,a))){if(!a.K&&Bu(h.h,a)&&h.G==3){try{var y=h.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)aa(h),sa(h);else break e;qu(h),it(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=as(g(h.Za,h),6e3));if(1>=kp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Cr(h,11)}else if((a.K||h.g==a)&&aa(h),!_(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let ie=P[c];if(h.T=ie[0],ie=ie[1],h.G==2)if(ie[0]=="c"){h.K=ie[1],h.ia=ie[2];const qe=ie[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));const Ke=ie[4];Ke!=null&&(h.Aa=Ke,h.j.info("SVER="+h.Aa));const oi=ie[5];oi!=null&&typeof oi=="number"&&0<oi&&(y=1.5*oi,h.L=y,h.j.info("backChannelRequestTimeoutMs_="+y)),y=h;const Dt=a.g;if(Dt){const ua=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var D=y.h;D.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&($u(D,D.h),D.h=null))}if(y.D){const Gu=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(y.ya=Gu,de(y.I,y.D,Gu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),y=h;var z=a;if(y.qa=Jp(y,y.J?y.ia:null,y.W),z.K){Ap(y.h,z);var ue=z,Me=y.L;Me&&(ue.I=Me),ue.B&&(Uu(ue),Jo(ue)),y.g=z}else Kp(y);0<h.i.length&&oa(h)}else ie[0]!="stop"&&ie[0]!="close"||Cr(h,7);else h.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Cr(h,7):Hu(h):ie[0]!="noop"&&h.l&&h.l.ta(ie),h.v=0)}}os(4)}catch{}}var Ux=class{constructor(a,c){this.g=a,this.map=c}};function Ip(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kp(a){return a.h?1:a.g?a.g.size:0}function Bu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function $u(a,c){a.g?a.g.add(c):a.h=c}function Ap(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ip.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return R(a.i)}function zx(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,y=0;y<h;y++)c.push(a[y]);return c}c=[],h=0;for(y in a)c[h++]=a[y];return c}function Bx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const y in a)c[h++]=y;return c}}}function bp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=Bx(a),y=zx(a),P=y.length,D=0;D<P;D++)c.call(void 0,y[D],h&&h[D],a)}var Rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $x(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var y=a[h].indexOf("="),P=null;if(0<=y){var D=a[h].substring(0,y);P=a[h].substring(y+1)}else D=a[h];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,Zo(this,a.j),this.o=a.o,this.g=a.g,ea(this,a.s),this.l=a.l;var c=a.i,h=new hs;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Pp(this,h),this.m=a.m}else a&&(c=String(a).match(Rp))?(this.h=!1,Zo(this,c[1]||"",!0),this.o=cs(c[2]||""),this.g=cs(c[3]||"",!0),ea(this,c[4]),this.l=cs(c[5]||"",!0),Pp(this,c[6]||"",!0),this.m=cs(c[7]||"")):(this.h=!1,this.i=new hs(null,this.h))}Ar.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ds(c,Np,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ds(c,Np,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(ds(h,h.charAt(0)=="/"?qx:Hx,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",ds(h,Gx)),a.join("")};function ln(a){return new Ar(a)}function Zo(a,c,h){a.j=h?cs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ea(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Pp(a,c,h){c instanceof hs?(a.i=c,Qx(a.i,a.h)):(h||(c=ds(c,Kx)),a.i=new hs(c,a.h))}function de(a,c,h){a.i.set(c,h)}function ta(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function cs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,Wx),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Np=/[#\/\?@]/g,Hx=/[#\?:]/g,qx=/[#\?]/g,Kx=/[#\?@]/g,Gx=/#/g;function hs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&$x(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=hs.prototype,t.add=function(a,c){Dn(this),this.i=null,a=ii(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Dp(a,c){Dn(a),c=ii(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Op(a,c){return Dn(a),c=ii(a,c),a.g.has(c)}t.forEach=function(a,c){Dn(this),this.g.forEach(function(h,y){h.forEach(function(P){a.call(c,P,y,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let y=0;y<c.length;y++){const P=a[y];for(let D=0;D<P.length;D++)h.push(c[y])}return h},t.V=function(a){Dn(this);let c=[];if(typeof a=="string")Op(this,a)&&(c=c.concat(this.g.get(ii(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Dn(this),this.i=null,a=ii(this,a),Op(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Vp(a,c,h){Dp(a,c),0<h.length&&(a.i=null,a.g.set(ii(a,c),R(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var y=c[h];const D=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var P=D;z[y]!==""&&(P+="="+encodeURIComponent(String(z[y]))),a.push(P)}}return this.i=a.join("&")};function ii(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Qx(a,c){c&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(h,y){var P=y.toLowerCase();y!=P&&(Dp(this,y),Vp(this,P,h))},a)),a.j=c}function Yx(a,c){const h=new ls;if(l.Image){const y=new Image;y.onload=w(On,h,"TestLoadImage: loaded",!0,c,y),y.onerror=w(On,h,"TestLoadImage: error",!1,c,y),y.onabort=w(On,h,"TestLoadImage: abort",!1,c,y),y.ontimeout=w(On,h,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function Xx(a,c){const h=new ls,y=new AbortController,P=setTimeout(()=>{y.abort(),On(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?On(h,"TestPingServer: ok",!0,c):On(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),On(h,"TestPingServer: error",!1,c)})}function On(a,c,h,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(h)}catch{}}function Jx(){this.g=new Ox}function Zx(a,c,h){const y=h||"";try{bp(a,function(P,D){let z=P;d(P)&&(z=Du(P)),c.push(y+D+"="+encodeURIComponent(z))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function na(a){this.l=a.Ub||null,this.j=a.eb||!1}A(na,Ou),na.prototype.g=function(){return new ra(this.l,this.j)},na.prototype.i=function(a){return function(){return a}}({});function ra(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ra,He),t=ra.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?fs(this):ps(this),this.readyState==3&&Lp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,fs(this))},t.Qa=function(a){this.g&&(this.response=a,fs(this))},t.ga=function(){this.g&&fs(this)};function fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ps(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mp(a){let c="";return F(a,function(h,y){c+=y,c+=":",c+=h,c+=`\r
`}),c}function Wu(a,c,h){e:{for(y in h){var y=!1;break e}y=!0}y||(h=Mp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):de(a,c,h))}function xe(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(xe,He);var eE=/^https?$/i,tE=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mu.g(),this.v=this.o?hp(this.o):hp(Mu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){jp(this,D);return}if(a=h||"",h=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)h.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())h.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tE,c,void 0))||y||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of h)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){jp(this,D)}};function jp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Fp(a),ia(a)}function Fp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ia(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)lp(a.Ea,0,a);else if(rt(a,"readystatechange"),un(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var y;if(y=z===0){var P=String(a.D).match(Rp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!eE.test(P?P.toLowerCase():"")}h=y}if(h)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var D=2<un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Fp(a)}}finally{ia(a)}}}}function ia(a,c){if(a.g){zp(a);const h=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||rt(a,"ready");try{h.onreadystatechange=y}catch{}}}function zp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Dx(c)}};function Bp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nE(a){const c={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var h=b(a[y]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=c[P]||[];c[P]=D,D.push(h)}E(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function $p(a){this.Aa=0,this.i=[],this.j=new ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,a),this.cb=ms("retryDelaySeedMs",1e4,a),this.Wa=ms("forwardChannelMaxRetries",2,a),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ip(a&&a.concurrentRequestLimit),this.Da=new Jx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$p.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,y){it(0),this.W=a,this.H=c||{},h&&y!==void 0&&(this.H.OSID=h,this.H.OAID=y),this.F=this.X,this.I=Jp(this,null,this.W),oa(this)};function Hu(a){if(Wp(a),a.G==3){var c=a.U++,h=ln(a.I);if(de(h,"SID",a.K),de(h,"RID",c),de(h,"TYPE","terminate"),gs(a,h),c=new Nn(a,a.j,c),c.L=2,c.v=ta(ln(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Zp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jo(c)}Xp(a)}function sa(a){a.g&&(Ku(a),a.g.cancel(),a.g=null)}function Wp(a){sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function oa(a){if(!Sp(a.h)&&!a.s){a.s=!0;var c=a.Ga;gt||J(),B||(gt(),B=!0),Q.add(c,a),a.B=0}}function rE(a,c){return kp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=as(g(a.Ga,a,c),Yp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Nn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var y=this.i[h];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=qp(this,P,c),h=ln(this.I),de(h,"RID",a),de(h,"CVER",22),this.D&&de(h,"X-HTTP-Session-Id",this.D),gs(this,h),D&&(this.O?c="headers="+encodeURIComponent(String(Mp(D)))+"&"+c:this.m&&Wu(h,this.m,D)),$u(this.h,P),this.Ua&&de(h,"TYPE","init"),this.P?(de(h,"$req",c),de(h,"SID","null"),P.T=!0,Fu(P,h,null)):Fu(P,h,c),this.G=2}}else this.G==3&&(a?Hp(this,a):this.i.length==0||Sp(this.h)||Hp(this))};function Hp(a,c){var h;c?h=c.l:h=a.U++;const y=ln(a.I);de(y,"SID",a.K),de(y,"RID",h),de(y,"AID",a.T),gs(a,y),a.m&&a.o&&Wu(y,a.m,a.o),h=new Nn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=qp(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$u(a.h,h),Fu(h,y,c)}function gs(a,c){a.H&&F(a.H,function(h,y){de(c,y,h)}),a.l&&bp({},function(h,y){de(c,y,h)})}function qp(a,c,h){h=Math.min(a.i.length,h);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const z=["count="+h];D==-1?0<h?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let ue=!0;for(let Me=0;Me<h;Me++){let ie=P[Me].g;const qe=P[Me].map;if(ie-=D,0>ie)D=Math.max(0,P[Me].g-100),ue=!1;else try{Zx(qe,z,"req"+ie+"_")}catch{y&&y(qe)}}if(ue){y=z.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,y}function Kp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;gt||J(),B||(gt(),B=!0),Q.add(c,a),a.v=0}}function qu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=as(g(a.Fa,a),Yp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=as(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),sa(this),Gp(this))};function Ku(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gp(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=ln(a.qa);de(c,"RID","rpc"),de(c,"SID",a.K),de(c,"AID",a.T),de(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(c,"TO",a.ja),de(c,"TYPE","xmlhttp"),gs(a,c),a.m&&a.o&&Wu(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=ta(ln(c)),h.m=null,h.P=!0,xp(h,a)}t.Za=function(){this.C!=null&&(this.C=null,sa(this),qu(this),it(19))};function aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qp(a,c){var h=null;if(a.g==c){aa(a),Ku(a),a.g=null;var y=2}else if(Bu(a.h,c))h=c.D,Ap(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;y=Qo(),rt(y,new yp(y,h)),oa(a)}else Kp(a);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&rE(a,c)||y==2&&qu(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),P){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function Yp(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Cr(a,c){if(a.j.info("Error code "+c),c==2){var h=g(a.fb,a),y=a.Xa;const P=!y;y=new Ar(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zo(y,"https"),ta(y),P?Yx(y.toString(),h):Xx(y.toString(),h)}else it(2);a.G=0,a.l&&a.l.sa(c),Xp(a),Wp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Xp(a){if(a.G=0,a.ka=[],a.l){const c=Cp(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Jp(a,c,h){var y=h instanceof Ar?ln(h):new Ar(h);if(y.g!="")c&&(y.g=c+"."+y.g),ea(y,y.s);else{var P=l.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new Ar(null);y&&Zo(D,y),c&&(D.g=c),P&&ea(D,P),h&&(D.l=h),y=D}return h=a.D,c=a.ya,h&&c&&de(y,h,c),de(y,"VER",a.la),gs(a,y),y}function Zp(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new xe(new na({eb:h})):new xe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function em(){}t=em.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function la(){}la.prototype.g=function(a,c){return new yt(a,c)};function yt(a,c){He.call(this),this.g=new $p(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new si(this)}A(yt,He),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Hu(this.g)},yt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Du(a),a=h);c.i.push(new Ux(c.Ya++,a)),c.G==3&&oa(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,Hu(this.g),delete this.g,yt.aa.N.call(this)};function tm(a){Vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}A(tm,Vu);function nm(){Lu.call(this),this.status=1}A(nm,Lu);function si(a){this.g=a}A(si,em),si.prototype.ua=function(){rt(this.g,"a")},si.prototype.ta=function(a){rt(this.g,new tm(a))},si.prototype.sa=function(a){rt(this.g,new nm)},si.prototype.ra=function(){rt(this.g,"b")},la.prototype.createWebChannel=la.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,ow=function(){return new la},sw=function(){return Qo()},iw=Sr,Ud={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,Ga=Yo,vp.COMPLETE="complete",rw=vp,fp.EventType=ss,ss.OPEN="a",ss.CLOSE="b",ss.ERROR="c",ss.MESSAGE="d",He.prototype.listen=He.prototype.K,Ns=fp,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,nw=xe}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});const Xg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new nf("@firebase/firestore");function Ss(){return Gr.logLevel}function H(t,...e){if(Gr.logLevel<=te.DEBUG){const n=e.map(vf);Gr.debug(`Firestore (${ts}): ${t}`,...n)}}function An(t,...e){if(Gr.logLevel<=te.ERROR){const n=e.map(vf);Gr.error(`Firestore (${ts}): ${t}`,...n)}}function zi(t,...e){if(Gr.logLevel<=te.WARN){const n=e.map(vf);Gr.warn(`Firestore (${ts}): ${t}`,...n)}}function vf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class RA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PA{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new aw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Xe(e)}}class NA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new OA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=LA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ne(0,0))}static max(){return new Y(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends wo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const MA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends wo{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return MA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}function jA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new dr(i,q.empty(),e)}function FA(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(Y.min(),q.empty(),-1)}static max(){return new dr(Y.max(),q.empty(),-1)}}function UA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==zA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $A(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_f.oe=-1;function du(t){return t==null}function Dl(t){return t===0&&1/t==-1/0}function WA(t){return typeof t=="number"&&Number.isInteger(t)&&!Dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zg(this.data.getIterator())}getIteratorFrom(e){return new Zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new wt([])}unionWith(e){let n=new Be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cw("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=HA.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xf(t){const e=t.mapValue.fields.__previous_value__;return wf(e)?xf(e):e}function xo(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={mapValue:{}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wf(t)?4:GA(t)?9007199254740991:KA(t)?10:11:G()}function tn(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),l=hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?Dl(o)===Dl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Bi(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Jg(o)!==Jg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function To(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ey(t.timestampValue,e.timestampValue);case 4:return ey(xo(t),xo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Qr(s),u=Qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=se(l[d],u[d]);if(p!==0)return p}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ie(s.latitude),Ie(o.latitude));return l!==0?l:se(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ty(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const m=s.fields||{},g=o.fields||{},w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=se(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((p=A==null?void 0:A.values)===null||p===void 0?void 0:p.length)||0);return R!==0?R:ty(w,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ra.mapValue&&o===Ra.mapValue)return 0;if(s===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=se(u[m],p[m]);if(g!==0)return g;const w=$i(l[u[m]],d[p[m]]);if(w!==0)return w}return se(u.length,p.length)}(t.mapValue,e.mapValue);default:throw G()}}function ey(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=hr(t),r=hr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function ty(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=$i(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Wi(t){return zd(t)}function zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zd(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function ny(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bd(t){return!!t&&"integerValue"in t}function Ef(t){return!!t&&"arrayValue"in t}function ry(t){return!!t&&"nullValue"in t}function iy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function KA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=qs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(qs(this.value))}}function dw(t){const e=[];return Zr(t.fields,(n,r)=>{const i=new Ue([n]);if(Qa(r)){const s=dw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.position=e,this.inclusive=n}}function sy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function QA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{}class be extends hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XA(e,n,r):n==="array-contains"?new eC(e,r):n==="in"?new tC(e,r):n==="not-in"?new nC(e,r):n==="array-contains-any"?new rC(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JA(e,r):new ZA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return fw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fw(t){return t.op==="and"}function pw(t){return YA(t)&&fw(t)}function YA(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function $d(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(pw(t))return t.filters.map(e=>$d(e)).join(",");{const e=t.filters.map(n=>$d(n)).join(",");return`${t.op}(${e})`}}function mw(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&mw(o,i.filters[l]),!0):!1}(t,e):void G()}function gw(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Wi(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(gw).join(" ,")+"}"}(t):"Filter"}class XA extends be{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class JA extends be{constructor(e,n){super(e,"in",n),this.keys=yw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZA extends be{constructor(e,n){super(e,"not-in",n),this.keys=yw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class eC extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ef(n)&&To(n.arrayValue,this.value)}}class tC extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class nC extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class rC extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ef(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ay(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iC(t,e,n,r,i,s,o)}function Tf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$d(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.ue=n}return e.ue}function If(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!oy(t.startAt,e.startAt)&&oy(t.endAt,e.endAt)}function Wd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sC(t,e,n,r,i,s,o,l){return new Uo(t,e,n,r,i,s,o,l)}function hu(t){return new Uo(t)}function ly(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vw(t){return t.collectionGroup!==null}function Ks(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vl(s,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new Vl(Ue.keyField(),r))}return e.ce}function Zt(t){const e=X(t);return e.le||(e.le=oC(e,Ks(t))),e.le}function oC(t,e){if(t.limitType==="F")return ay(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vl(i.field,s)});const n=t.endAt?new Ol(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ol(t.startAt.position,t.startAt.inclusive):null;return ay(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hd(t,e){const n=t.filters.concat([e]);return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qd(t,e,n){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return If(Zt(t),Zt(e))&&t.limitType===e.limitType}function _w(t){return`${Tf(Zt(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gw(i)).join(", ")}]`),du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wi(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function pu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=sy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ks(r),i)||r.endAt&&!function(o,l,u){const d=sy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ks(r),i))}(t,e)}function aC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ww(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=lC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?$i(u,d):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new we(q.comparator);function Cn(){return uC}const xw=new we(q.comparator);function Ds(...t){let e=xw;for(const n of t)e=e.insert(n.key,n);return e}function Ew(t){let e=xw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return Gs()}function Tw(){return Gs()}function Gs(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const cC=new we(q.comparator),dC=new Be(q.comparator);function ee(...t){let e=dC;for(const n of t)e=e.add(n);return e}const hC=new Be(se);function fC(){return hC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function Iw(t){return{integerValue:""+t}}function pC(t,e){return WA(e)?Iw(e):Sf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this._=void 0}}function mC(t,e,n){return t instanceof Ll?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wf(s)&&(s=xf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Io?kw(t,e):t instanceof So?Aw(t,e):function(i,s){const o=Sw(i,s),l=uy(o)+uy(i.Pe);return Bd(o)&&Bd(i.Pe)?Iw(l):Sf(i.serializer,l)}(t,e)}function gC(t,e,n){return t instanceof Io?kw(t,e):t instanceof So?Aw(t,e):n}function Sw(t,e){return t instanceof Ml?function(r){return Bd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ll extends mu{}class Io extends mu{constructor(e){super(),this.elements=e}}function kw(t,e){const n=Cw(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class So extends mu{constructor(e){super(),this.elements=e}}function Aw(t,e){let n=Cw(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Ml extends mu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function uy(t){return Ie(t.integerValue||t.doubleValue)}function Cw(t){return Ef(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof So&&i instanceof So?Bi(r.elements,i.elements,tn):r instanceof Ml&&i instanceof Ml?tn(r.Pe,i.Pe):r instanceof Ll&&i instanceof Ll}(t.transform,e.transform)}class vC{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gu{}function bw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kf(t.key,Bt.none()):new zo(t.key,t.data,Bt.none());{const n=t.data,r=dt.empty();let i=new Be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new wt(i.toArray()),Bt.none())}}function _C(t,e,n){t instanceof zo?function(i,s,o){const l=i.value.clone(),u=dy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!Ya(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=dy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Rw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof zo?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const d=s.value.clone(),p=hy(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const d=hy(s.fieldTransforms,u,o),p=o.data;return p.setAll(Rw(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ya(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Sw(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function cy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bi(r,i,(s,o)=>yC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends gu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends gu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Rw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dy(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gC(o,l,n[i]))}return r}function hy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mC(s,o,e))}return r}class kf extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xC extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_C(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=bw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Bi(this.mutations,e.mutations,(n,r)=>cy(n,r))&&Bi(this.baseMutations,e.baseMutations,(n,r)=>cy(n,r))}}class Af{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return cC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Af(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ne;function SC(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Pw(t){if(t===void 0)return An("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ae.OK:return M.OK;case Ae.CANCELLED:return M.CANCELLED;case Ae.UNKNOWN:return M.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return M.INTERNAL;case Ae.UNAVAILABLE:return M.UNAVAILABLE;case Ae.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ae.NOT_FOUND:return M.NOT_FOUND;case Ae.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ae.ABORTED:return M.ABORTED;case Ae.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ae.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(ne=Ae||(Ae={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new Fr([4294967295,4294967295],0);function fy(t){const e=kC().encode(t),n=new tw;return n.update(e),new Uint8Array(n.digest())}function py(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class Cf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fr.fromNumber(r)));return i.compare(AC)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=fy(e),[r,i]=py(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Cf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=fy(e),[r,i]=py(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yu(Y.min(),i,new we(se),Cn(),ee())}}class Bo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bo(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Nw{constructor(e,n){this.targetId=e,this.me=n}}class Dw{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class my{constructor(){this.fe=0,this.ge=yy(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Bo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=yy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=gy(),this.Qe=new we(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Wd(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Ze.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(u){if(u instanceof cw)return zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cf(o,i,s)}catch(u){return zi(u instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Wd(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new yu(e,n,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=gy(),this.Qe=new we(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new my,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new my),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gy(){return new we(q.comparator)}function yy(){return new we(q.comparator)}const bC={asc:"ASCENDING",desc:"DESCENDING"},RC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PC={and:"AND",or:"OR"};class NC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kd(t,e){return t.useProto3Json||du(e)?e:{value:e}}function jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ow(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DC(t,e){return jl(t,e.toTimestamp())}function en(t){return ae(!!t),Y.fromTimestamp(function(n){const r=hr(n);return new Ne(r.seconds,r.nanos)}(t))}function bf(t,e){return Gd(t,e).canonicalString()}function Gd(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Vw(t){const e=fe.fromString(t);return ae(Uw(e)),e}function Qd(t,e){return bf(t.databaseId,e.path)}function bc(t,e){const n=Vw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Mw(n))}function Lw(t,e){return bf(t.databaseId,e)}function OC(t){const e=Vw(t);return e.length===4?fe.emptyPath():Mw(e)}function Yd(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mw(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vy(t,e,n){return{name:Qd(t,e),fields:n.value.mapValue.fields}}function VC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(ae(p===void 0||typeof p=="string"),We.fromBase64String(p||"")):(ae(p===void 0||p instanceof Buffer||p instanceof Uint8Array),We.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?M.UNKNOWN:Pw(d.code);return new W(p,d.message||"")}(o);n=new Dw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bc(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):Y.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Xa(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bc(t,r.document),s=r.readTime?en(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bc(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IC(i,s),l=r.targetId;n=new Nw(l,o)}}return n}function LC(t,e){let n;if(e instanceof zo)n={update:vy(t,e.key,e.value)};else if(e instanceof kf)n={delete:Qd(t,e.key)};else if(e instanceof Ir)n={update:vy(t,e.key,e.data),updateMask:HC(e.fieldMask)};else{if(!(e instanceof xC))return G();n={verify:Qd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ml)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function MC(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(Y.min())&&(o=en(s)),new vC(o,i.transformResults||[])}(n,e))):[]}function jC(t,e){return{documents:[Lw(t,e.path)]}}function FC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lw(t,i);const s=function(d){if(d.length!==0)return Fw(Wt.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(g){return{field:ui(g.field),direction:BC(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function UC(t){let e=OC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=jw(m);return g instanceof Wt&&pw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(A){return new Vl(ci(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,du(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,w=m.values||[];return new Ol(w,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,w=m.values||[];return new Ol(w,g)}(n.endAt)),sC(e,i,o,s,l,"F",u,d)}function zC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return be.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>jw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function BC(t){return bC[t]}function $C(t){return RC[t]}function WC(t){return PC[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return Ue.fromServerFormat(t.fieldPath)}function Fw(t){return t instanceof be?function(n){if(n.op==="=="){if(iy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(ry(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(iy(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(ry(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:$C(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>Fw(i));return r.length===1?r[0]:{compositeFilter:{op:WC(n.op),filters:r}}}(t):G()}function HC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.ct=e}}function KC(t){const e=UC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.un=new QC}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(dr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class QC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hi(0)}static kn(){return new Hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qs(r.mutation,i,wt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cn();const o=Gs(),l=function(){return Gs()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ir)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Qs(p.mutation,d,p.mutation.getFieldMask(),Ne.now())):o.set(d.key,wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new XC(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Gs();let i=new we((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||wt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Tw();p.forEach(g=>{if(!s.has(g)){const w=bw(n.get(g),r.get(g));w!==null&&m.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Lr());let l=-1,u=s;return o.next(d=>j.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?j.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ee())).next(p=>({batchId:l,changes:Ew(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const d=function(m,g){return new Uo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Ze.newInvalidDocument(p)))});let l=Ds();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Qs(p.mutation,d,wt.empty(),Ne.now()),pu(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:KC(i.bundledQuery),readTime:en(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.overlays=new we(q.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Lr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Lr(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Lr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return j.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.Tr=new Be(Oe.Er),this.dr=new Be(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Oe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new fe([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new fe([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(Oe.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Oe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(se);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new q(s),0);let l=new Be(se);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Oe(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.Mr=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||UA(FA(p),r)<=0||(i.has(p.key)||pu(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ib(this)}getSize(e){return j.resolve(this.size)}}class ib extends YC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.persistence=e,this.Nr=new ns(n=>Tf(n),If),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Rf,this.targetCount=0,this.kr=Hi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.qr={},this.overlays={},this.Qr=new _f(0),this.Kr=!1,this.Kr=!0,this.$r=new tb,this.referenceDelegate=e(this),this.Ur=new sb(this),this.indexManager=new GC,this.remoteDocumentCache=function(i){return new rb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qC(n),this.Gr=new ZC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new nb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new ab(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ab extends BA{constructor(e){super(),this.currentSequenceNumber=e}}class Pf{constructor(e){this.persistence=e,this.Jr=new Rf,this.Yr=null}static Zr(e){return new Pf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Nf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return JT()?8:$A(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new lb;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ss()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Ss()<=te.DEBUG&&H("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ss()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):j.resolve())}Yi(e,n){if(ly(n))return j.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qd(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,qd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return ly(n)||i.isEqual(Y.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(Ss()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.rs(e,o,n,jA(i,-1)).next(l=>l))})}ts(e,n){let r=new Be(ww(e));return n.forEach((i,s)=>{pu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ss()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",li(n)),this.Ji.getDocumentsMatchingQuery(e,n,dr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(se),this._s=new ns(s=>Tf(s),If),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function db(t,e,n,r){return new cb(t,e,n,r)}async function zw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function hb(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,g=m.keys();let w=j.resolve();return g.forEach(A=>{w=w.next(()=>p.getEntry(u,A)).next(R=>{const N=d.docVersions.get(A);ae(N!==null),R.version.compareTo(N)<0&&(m.applyToRemoteDocument(R,d),R.isValidDocument()&&(R.setReadTime(d.commitVersion),p.addEntry(R)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Bw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function fb(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,m)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(p.resumeToken,r)),i=i.insert(m,w),function(R,N,I){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,w,p)&&l.push(n.Ur.updateTargetData(s,w))});let u=Cn(),d=ee();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(pb(s,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(Y.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function pb(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function mb(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gb(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Xd(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function _y(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=X(u),g=m._s.get(p);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(d,p)}(r,o,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(yb(r,aC(e),l),{documents:l,Ts:s})))}function yb(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class wy{constructor(){this.activeTargetIds=fC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vb{constructor(){this.so=new wy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa=null;function Rc(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class Eb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Rc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(p=>(H("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw zi("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=wb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rc();return new Promise((o,l)=>{const u=new nw;u.setWithCredentials(!0),u.listenOnce(rw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ga.NO_ERROR:const p=u.getResponseJson();H(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Ga.TIMEOUT:H(Ye,`RPC '${e}' ${s} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const m=u.getStatus();if(H(Ye,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const A=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(w.status);l(new W(A,w.message))}else l(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Ye,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);H(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Rc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ow(),l=sw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");H(Ye,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,w=!1;const A=new xb({Io:N=>{w?H(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(H(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),H(Ye,`RPC '${e}' stream ${i} sending:`,N),m.send(N))},To:()=>m.close()}),R=(N,I,_)=>{N.listen(I,k=>{try{_(k)}catch(O){setTimeout(()=>{throw O},0)}})};return R(m,Ns.EventType.OPEN,()=>{w||(H(Ye,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),R(m,Ns.EventType.CLOSE,()=>{w||(w=!0,H(Ye,`RPC '${e}' stream ${i} transport closed`),A.So())}),R(m,Ns.EventType.ERROR,N=>{w||(w=!0,zi(Ye,`RPC '${e}' stream ${i} transport errored:`,N),A.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),R(m,Ns.EventType.MESSAGE,N=>{var I;if(!w){const _=N.data[0];ae(!!_);const k=_,O=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(O){H(Ye,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let F=function(x){const S=Ae[x];if(S!==void 0)return Pw(S)}(V),E=O.message;F===void 0&&(F=M.INTERNAL,E="Unknown error status: "+V+" with message "+O.message),w=!0,A.So(new W(F,E)),m.close()}else H(Ye,`RPC '${e}' stream ${i} received:`,_),A.bo(_)}}),R(l,iw.STAT_EVENT,N=>{N.stat===Ud.PROXY?H(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ud.NOPROXY&&H(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return new NC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $w(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tb extends Ww{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=VC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?en(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Yd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Wd(u)?{documents:jC(s,u)}:{query:FC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ow(s,o.resumeToken);const d=Kd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=jl(s,o.snapshotVersion.toTimestamp());const d=Kd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=zC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Yd(this.serializer),n.removeTarget=e,this.a_(n)}}class Ib extends Ww{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=MC(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Yd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>LC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Gd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Gd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class kb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(An(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ei(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=X(u);d.L_.add(4),await $o(d),d.q_.set("Unknown"),d.L_.delete(4),await _u(d)}(this))})}),this.q_=new kb(r,i)}}async function _u(t){if(ei(t))for(const e of t.B_)await e(!0)}async function $o(t){for(const e of t.B_)await e(!1)}function Hw(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Lf(n)?Vf(n):rs(n).r_()&&Of(n,e))}function Df(t,e){const n=X(t),r=rs(n);n.N_.delete(e),r.r_()&&qw(n,e),n.N_.size===0&&(r.r_()?r.o_():ei(n)&&n.q_.set("Unknown"))}function Of(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}rs(t).A_(e)}function qw(t,e){t.Q_.xe(e),rs(t).R_(e)}function Vf(t){t.Q_=new CC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),rs(t).start(),t.q_.v_()}function Lf(t){return ei(t)&&!rs(t).n_()&&t.N_.size>0}function ei(t){return X(t).L_.size===0}function Kw(t){t.Q_=void 0}async function Cb(t){t.q_.set("Online")}async function bb(t){t.N_.forEach((e,n)=>{Of(t,e)})}async function Rb(t,e){Kw(t),Lf(t)?(t.q_.M_(e),Vf(t)):t.q_.set("Unknown")}async function Pb(t,e,n){if(t.q_.set("Online"),e instanceof Dw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(t,r)}else if(e instanceof Xa?t.Q_.Ke(e):e instanceof Nw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await Bw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(We.EMPTY_BYTE_STRING,p.snapshotVersion)),qw(s,u);const m=new Gn(p.target,u,d,p.sequenceNumber);Of(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Fl(t,r)}}async function Fl(t,e,n){if(!Fo(e))throw e;t.L_.add(1),await $o(t),t.q_.set("Offline"),n||(n=()=>Bw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _u(t)})}function Gw(t,e){return e().catch(n=>Fl(t,n,e))}async function wu(t){const e=X(t),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Nb(e);)try{const i=await mb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Db(e,i)}catch(i){await Fl(e,i)}Qw(e)&&Yw(e)}function Nb(t){return ei(t)&&t.O_.length<10}function Db(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qw(t){return ei(t)&&!fr(t).n_()&&t.O_.length>0}function Yw(t){fr(t).start()}async function Ob(t){fr(t).p_()}async function Vb(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function Lb(t,e,n){const r=t.O_.shift(),i=Af.from(r,e,n);await Gw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wu(t)}async function Mb(t,e){e&&fr(t).V_&&await async function(r,i){if(function(o){return SC(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();fr(r).s_(),await Gw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wu(r)}}(t,e),Qw(t)&&Yw(t)}async function Ey(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ei(n);n.L_.add(3),await $o(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _u(n)}async function jb(t,e){const n=X(t);e?(n.L_.delete(2),await _u(n)):e||(n.L_.add(2),await $o(n),n.q_.set("Unknown"))}function rs(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Tb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Cb.bind(null,t),Ro:bb.bind(null,t),mo:Rb.bind(null,t),d_:Pb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Lf(t)?Vf(t):t.q_.set("Unknown")):(await t.K_.stop(),Kw(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new Ib(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ob.bind(null,t),mo:Mb.bind(null,t),f_:Vb.bind(null,t),g_:Lb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Mf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(t,e){if(An("AsyncQueue",`${e}: ${t}`),Fo(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ni(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ni;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.W_=new we(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new qi(e,n,Ni.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ub{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Iy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function Iy(){return new ns(t=>_w(t),fu)}async function Ff(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Fb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=jf(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&zf(n)}async function Uf(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zb(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&zf(n)}function Bb(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function zf(t){t.Y_.forEach(e=>{e.next()})}var Jd,Sy;(Sy=Jd||(Jd={})).ea="default",Sy.Cache="cache";class Bf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Jd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.key=e}}class Jw{constructor(e){this.key=e}}class $b{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=ww(e),this.Ra=new Ni(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ty,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const g=i.get(p),w=pu(this.query,m)?m:null,A=!!g&&this.mutatedKeys.has(g.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;g&&w?g.data.isEqual(w.data)?A!==R&&(r.track({type:3,doc:w}),N=!0):this.ga(g,w)||(r.track({type:2,doc:w}),N=!0,(u&&this.Aa(w,u)>0||d&&this.Aa(w,d)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),N=!0):g&&!w&&(r.track({type:1,doc:g}),N=!0,(u||d)&&(l=!0)),N&&(w?(o=o.add(w),s=R?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(w,A){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return R(w)-R(A)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new qi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ty,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Jw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Xw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Wb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Hb{constructor(e){this.key=e,this.va=!1}}class qb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ns(l=>_w(l),fu),this.Ma=new Map,this.xa=new Set,this.Oa=new we(q.comparator),this.Na=new Map,this.La=new Rf,this.Ba={},this.ka=new Map,this.qa=Hi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Kb(t,e,n=!0){const r=ix(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Zw(r,e,n,!0),i}async function Gb(t,e){const n=ix(t);await Zw(n,e,!0,!1)}async function Zw(t,e,n,r){const i=await gb(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Qb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Hw(t.remoteStore,i),l}async function Qb(t,e,n,r,i){t.Ka=(m,g,w)=>async function(R,N,I,_){let k=N.view.ma(I);k.ns&&(k=await _y(R.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,k)));const O=_&&_.targetChanges.get(N.targetId),V=_&&_.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(k,R.isPrimaryClient,O,V);return Ay(R,N.targetId,F.wa),F.snapshot}(t,m,g,w);const s=await _y(t.localStore,e,!0),o=new $b(e,s.Ts),l=o.ma(s.documents),u=Bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Ay(t,n,d.wa);const p=new Wb(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Yb(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!fu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Df(r.remoteStore,i.targetId),Zd(r,i.targetId)}).catch(jo)):(Zd(r,i.targetId),await Xd(r.localStore,i.targetId,!0))}async function Xb(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Df(n.remoteStore,r.targetId))}async function Jb(t,e,n){const r=sR(t);try{const i=await function(o,l){const u=X(o),d=Ne.now(),p=l.reduce((w,A)=>w.add(A.key),ee());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let A=Cn(),R=ee();return u.cs.getEntries(w,p).next(N=>{A=N,A.forEach((I,_)=>{_.isValidDocument()||(R=R.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,A)).next(N=>{m=N;const I=[];for(const _ of l){const k=wC(_,m.get(_.key).overlayedDocument);k!=null&&I.push(new Ir(_.key,k,dw(k.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,d,I,l)}).next(N=>{g=N;const I=N.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(w,N.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Ew(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new we(se)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await Wo(r,i.changes),await wu(r.remoteStore)}catch(i){const s=jf(i,"Failed to persist write");n.reject(s)}}async function ex(t,e){const n=X(t);try{const r=await fb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Wo(n,r,e)}catch(r){await jo(r)}}function ky(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&zf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zb(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=ee().add(s),u=new yu(Y.min(),new Map,new we(se),o,l);await ex(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),$f(r)}else await Xd(r.localStore,e,!1).then(()=>Zd(r,e,n)).catch(jo)}async function eR(t,e){const n=X(t),r=e.batch.batchId;try{const i=await hb(n.localStore,e);nx(n,r,null),tx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,i)}catch(i){await jo(i)}}async function tR(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(ae(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);nx(r,e,n),tx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,i)}catch(i){await jo(i)}}function tx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function nx(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Zd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||rx(t,r)})}function rx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Df(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),$f(t))}function Ay(t,e,n){for(const r of n)r instanceof Xw?(t.La.addReference(r.key,e),nR(t,r)):r instanceof Jw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||rx(t,r.key)):G()}function nR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),$f(t))}function $f(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new Hb(n)),t.Oa=t.Oa.insert(n,r),Hw(t.remoteStore,new Gn(Zt(hu(n.path)),r,"TargetPurposeLimboResolution",_f.oe))}}async function Wo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Nf.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(d,g=>j.forEach(g.$i,w=>p.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>j.forEach(g.Ui,w=>p.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!Fo(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const w=p.os.get(g),A=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(A);p.os=p.os.insert(g,R)}}}(r.localStore,s))}async function rR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await zw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.hs)}}function iR(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function ix(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ex.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zb.bind(null,e),e.Ca.d_=zb.bind(null,e.eventManager),e.Ca.$a=Bb.bind(null,e.eventManager),e}function sR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tR.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return db(this.persistence,new ub,e.initialUser,this.serializer)}Ga(e){return new ob(Pf.Zr,this.serializer)}Wa(e){return new vb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class eh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rR.bind(null,this.syncEngine),await jb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ub}()}createDatastore(e){const n=vu(e.databaseInfo.databaseId),r=function(s){return new Eb(s)}(e.databaseInfo);return function(s,o,l,u){return new Sb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Ab(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ky(this.syncEngine,n,0),function(){return xy.D()?new xy:new _b}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const m=new qb(i,s,o,l,u,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await $o(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}eh.provider={build:()=>new eh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=lw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ey(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ey(e.remoteStore,i)),t._onlineComponents=e}async function aR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;zi("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new Ul)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Nc(t,new Ul);return t._offlineComponents}async function sx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Cy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Cy(t,new eh))),t._onlineComponents}function lR(t){return sx(t).then(e=>e.syncEngine)}async function zl(t){const e=await sx(t),n=e.eventManager;return n.onListen=Kb.bind(null,e.syncEngine),n.onUnlisten=Yb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Gb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Xb.bind(null,e.syncEngine),n}function uR(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new Wf({next:g=>{p.Za(),o.enqueueAndForget(()=>Uf(s,m));const w=g.docs.has(l);!w&&g.fromCache?d.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?d.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new Bf(hu(l.path),p,{includeMetadataChanges:!0,_a:!0});return Ff(s,m)}(await zl(t),t.asyncQueue,e,n,r)),r.promise}function cR(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new Wf({next:g=>{p.Za(),o.enqueueAndForget(()=>Uf(s,m)),g.fromCache&&u.source==="server"?d.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new Bf(l,p,{includeMetadataChanges:!0,_a:!0});return Ff(s,m)}(await zl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dR(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ry(t){if(!q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Py(t){if(q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ox((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ny({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ny(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bA;switch(r.type){case"firstParty":return new DA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=by.get(n);r&&(H("ComponentProvider","Removing Datastore"),by.delete(n),r.terminate())}(this),Promise.resolve()}}function hR(t,e,n,r={}){var i;const s=(t=bt(t,Eu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=HT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(d)}t._authCredentials=new RA(new aw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class ar extends ti{constructor(e,n,r){super(e,n,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new q(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Bl(t,e,...n){if(t=De(t),ax("collection","path",e),t instanceof Eu){const r=fe.fromString(e,...n);return Py(r),new ar(t,null,r)}{if(!(t instanceof at||t instanceof ar))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Py(r),new ar(t.firestore,null,r)}}function Ys(t,e,...n){if(t=De(t),arguments.length===1&&(e=lw.newId()),ax("doc","path",e),t instanceof Eu){const r=fe.fromString(e,...n);return Ry(r),new at(t,null,new q(r))}{if(!(t instanceof at||t instanceof ar))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Ry(r),new at(t.firestore,t instanceof ar?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $w(this,"async_queue_retry"),this.Vu=()=>{const r=Pc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw An("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Mf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Oy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class pr extends Eu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dy(e),this._firestoreClient=void 0,await e}}}function fR(t,e){const n=typeof t=="object"?t:v_(),r=typeof t=="string"?t:"(default)",i=sf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$T("firestore");s&&hR(i,...s)}return i}function Tu(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pR(t),t._firestoreClient}function pR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new qA(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ox(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new oR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ki(We.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ki(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=/^__.*__$/;class gR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class lx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ux(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Gf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $l(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ux(this.Cu)&&mR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class yR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vu(e)}Qu(e,n,r,i=!1){return new Gf({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qf(t){const e=t._freezeSettings(),n=vu(t._databaseId);return new yR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Yf("Data must be an object, but it was:",o,r);const l=cx(r,o);let u,d;if(s.merge)u=new wt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=th(e,m,n);if(!o.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hx(p,g)||p.push(g)}u=new wt(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new gR(new dt(l),u,d)}class Su extends Hf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Su}}function _R(t,e,n,r){const i=t.Qu(1,e,n);Yf("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();Zr(r,(u,d)=>{const p=Xf(e,u,n);d=De(d);const m=i.Nu(p);if(d instanceof Su)s.push(p);else{const g=Ho(d,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new wt(s);return new lx(o,l,i.fieldTransforms)}function wR(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[th(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(th(e,s[g])),u.push(s[g+1]);const d=[],p=dt.empty();for(let g=l.length-1;g>=0;--g)if(!hx(d,l[g])){const w=l[g];let A=u[g];A=De(A);const R=o.Nu(w);if(A instanceof Su)d.push(w);else{const N=Ho(A,R);N!=null&&(d.push(w),p.set(w,N))}}const m=new wt(d);return new lx(p,m,o.fieldTransforms)}function xR(t,e,n,r=!1){return Ho(n,t.Qu(r?4:3,e))}function Ho(t,e){if(dx(t=De(t)))return Yf("Unsupported field value:",e,t),cx(t,e);if(t instanceof Hf)return function(r,i){if(!ux(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ho(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:jl(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jl(i.serializer,s)}}if(r instanceof qf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ki)return{bytesValue:Ow(i.serializer,r._byteString)};if(r instanceof at){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Kf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Sf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${xu(r)}`)}(t,e)}function cx(t,e){const n={};return uw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,i)=>{const s=Ho(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof qf||t instanceof Ki||t instanceof at||t instanceof Hf||t instanceof Kf)}function Yf(t,e,n){if(!dx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function th(t,e,n){if((e=De(e))instanceof Iu)return e._internalPath;if(typeof e=="string")return Xf(t,e);throw $l("Field path arguments must be of type string or ",t,!1,void 0,n)}const ER=new RegExp("[~\\*/\\[\\]]");function Xf(t,e,n){if(e.search(ER)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Iu(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $l(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function hx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(px("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TR extends fx{data(){return super.data()}}function px(t,e){return typeof e=="string"?Xf(t,e):e instanceof Iu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jf{}class IR extends Jf{}function SR(t,e,...n){let r=[];e instanceof Jf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ep).length,l=s.filter(u=>u instanceof Zf).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zf extends IR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zf(e,n,r)}_apply(e){const n=this._parse(e);return gx(e._query,n),new ti(e.firestore,e.converter,Hd(e._query,n))}_parse(e){const n=Qf(e.firestore);return function(s,o,l,u,d,p,m){let g;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ly(m,p);const w=[];for(const A of m)w.push(Vy(u,s,A));g={arrayValue:{values:w}}}else g=Vy(u,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ly(m,p),g=xR(l,o,m,p==="in"||p==="not-in");return be.create(d,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ep extends Jf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ep(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gx(o,u),o=Hd(o,u)}(e._query,n),new ti(e.firestore,e.converter,Hd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vy(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vw(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ny(t,new q(r))}if(n instanceof at)return ny(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xu(n)}.`)}function Ly(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gx(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kR{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ie(o.doubleValue));return new Kf(s)}convertGeoPoint(e){return new qf(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(Uw(r));const i=new Eo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||An(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yx extends fx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(px("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends yx{data(e={}){return super.data(e)}}class vx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:CR(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){t=bt(t,at);const e=bt(t.firestore,pr);return uR(Tu(e),t._key).then(n=>xx(e,t,n))}class tp extends kR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function RR(t){t=bt(t,ti);const e=bt(t.firestore,pr),n=Tu(e),r=new tp(e);return mx(t._query),cR(n,t._query).then(i=>new vx(e,r,t,i))}function My(t,e,n,...r){t=bt(t,at);const i=bt(t.firestore,pr),s=Qf(i);let o;return o=typeof(e=De(e))=="string"||e instanceof Iu?wR(s,"updateDoc",t._key,e,n,r):_R(s,"updateDoc",t._key,e),np(i,[o.toMutation(t._key,Bt.exists(!0))])}function PR(t){return np(bt(t.firestore,pr),[new kf(t._key,Bt.none())])}function _x(t,e){const n=bt(t.firestore,pr),r=Ys(t),i=AR(t.converter,e);return np(n,[vR(Qf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function wx(t,...e){var n,r,i;t=De(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Oy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Oy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,p;if(t instanceof at)d=bt(t.firestore,pr),p=hu(t._key.path),u={next:m=>{e[o]&&e[o](xx(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=bt(t,ti);d=bt(m.firestore,pr),p=m._query;const g=new tp(d);u={next:w=>{e[o]&&e[o](new vx(d,g,m,w))},error:e[o+1],complete:e[o+2]},mx(t._query)}return function(g,w,A,R){const N=new Wf(R),I=new Bf(w,N,A);return g.asyncQueue.enqueueAndForget(async()=>Ff(await zl(g),I)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>Uf(await zl(g),I))}}(Tu(d),p,l,u)}function np(t,e){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>Jb(await lR(r),i,s)),s.promise}(Tu(t),e)}function xx(t,e,n){const r=n.docs.get(e._key),i=new tp(t);return new yx(t,i,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ts=i})(Zi),Ui(new Hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new pr(new PA(r.getProvider("auth-internal")),new VA(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),or(Xg,"4.7.3",e),or(Xg,"4.7.3","esm2017")})();const NR={apiKey:"AIzaSyC7UHaQ9ndrf58hQVr8LRpPGkQiYwUdUcU",authDomain:"nxusdxb.firebaseapp.com",projectId:"nxusdxb",storageBucket:"nxusdxb.firebasestorage.app",messagingSenderId:"518385929367",appId:"1:518385929367:web:c3bf8f1937b9e23443add2"},Ex=y_(NR),mr=SA(Ex),Wn=fR(Ex),Tx=new hn,Ix=L.createContext({user:null,loading:!0});function DR({children:t}){const[e,n]=L.useState(null),[r,i]=L.useState(!0);return L.useEffect(()=>mk(mr,o=>{n(o),i(!1)}),[]),f.jsx(Ix.Provider,{value:{user:e,loading:r},children:t})}function ni(){return L.useContext(Ix)}const OR=[{key:"discord",label:"discord",href:"https://discord.gg/JDxPnzys",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})})},{key:"instagram",label:"instagram",href:"https://www.instagram.com/nxusdxb/",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}],VR="https://api.freewaitlists.com/waitlists/cmnrq1m75087001pnr40o6xtf",LR={discord:{eyebrow:"Community",title:"Join Discord",body:"Meet the first people planning the first drops."},instagram:{eyebrow:"Updates",title:"Follow Instagram",body:"Watch the build, the launch, and the Dubai rollout."}},MR=[{icon:"🏙️",label:"Dubai First"},{icon:"⚡",label:"Real-Time Drops"},{icon:"🎯",label:"No Scroll, Just Show Up"}];function jR(){const t=wr(),{user:e}=ni(),[n,r]=L.useState(0),[i,s]=L.useState(""),[o,l]=L.useState(""),[u,d]=L.useState(!1),[p,m]=L.useState({tone:"idle",message:""}),[g,w]=L.useState(!1),[A,R]=L.useState(!1),[N,I]=L.useState(""),[_,k]=L.useState(""),O=15;L.useEffect(()=>{if(n===0||n>=O)return;const C=window.setTimeout(()=>{r(0)},2500);return()=>window.clearTimeout(C)},[O,n]),L.useEffect(()=>{if(!g&&!A)return;const C=T=>{T.key==="Escape"&&(w(!1),R(!1),I(""),k(""))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[g,A]);const V=()=>{r(C=>{const T=C+1;return T>=O?(t("/login"),0):T})},F=async C=>{C.preventDefault();const T=o.trim(),nt=i.trim();if(!T){m({tone:"error",message:"Drop your email so we know where to send the invite."});return}d(!0),m({tone:"idle",message:""});const nn={email:T,meta:{source:"nxus-coming-soon",...nt?{name:nt}:{}}};try{const Ht=await fetch(VR,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(nn)}),gt=await Ht.json().catch(()=>null);if(!Ht.ok)throw new Error((gt==null?void 0:gt.message)||"Unable to save your spot right now.");m({tone:"success",message:"You're on the waitlist. We'll send your early access code to your email."}),s(""),l("")}catch(Ht){m({tone:"error",message:Ht.message||"Something went wrong. Please try again in a minute."})}finally{d(!1)}},E=()=>{if(e){t("/home");return}I(""),k(""),w(!0)},v=()=>{w(!1),I(""),k("")},x=()=>{R(!0)},S=()=>{R(!1)},b=C=>{if(C.preventDefault(),N.trim()==="NOMOREBORE"){window.sessionStorage.setItem("earlyAccess","true"),t("/signup");return}k("Invalid access code")};return f.jsxs("main",{className:"nxus-shell",children:[f.jsx("style",{children:`
        :root {
          --nxus-red: #E8001C;
          --nxus-black: #0A0A0A;
          --nxus-panel: #111111;
          --nxus-cream: #F0EDE8;
          --nxus-muted: rgba(240, 237, 232, 0.68);
          --nxus-dim: rgba(240, 237, 232, 0.42);
          --nxus-hairline: rgba(232, 0, 28, 0.38);
          --display-font: 'Bebas Neue', 'Barlow Condensed', sans-serif;
          --body-font: 'DM Sans', 'Outfit', sans-serif;
          --mono-font: 'Space Mono', 'IBM Plex Mono', monospace;
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes nxusLogoBreathe {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(232, 0, 28, 0)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 28px rgba(232, 0, 28, 0.42)); }
        }

        @keyframes nxusGlowDrift {
          0%, 100% { transform: translate3d(-3%, 2%, 0) scale(1); opacity: 0.64; }
          50% { transform: translate3d(4%, -3%, 0) scale(1.1); opacity: 0.9; }
        }

        @keyframes nxusDividerPulse {
          0%, 100% { opacity: 0.36; box-shadow: 0 0 0 rgba(232, 0, 28, 0); }
          50% { opacity: 0.86; box-shadow: 0 0 22px rgba(232, 0, 28, 0.72); }
        }

        .nxus-shell {
          min-height: 100vh;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
          position: relative;
          overflow: hidden;
        }

        .nxus-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 42% 48%, rgba(232, 0, 28, 0.24), transparent 32vw),
            radial-gradient(circle at 16% 78%, rgba(232, 0, 28, 0.12), transparent 24vw),
            #0A0A0A;
          animation: nxusGlowDrift 13s ease-in-out infinite;
        }

        .nxus-shell::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.13;
          mix-blend-mode: screen;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(232, 0, 28, 0.6) 0 1px, transparent 1px),
            radial-gradient(circle at 72% 12%, rgba(240, 237, 232, 0.22) 0 1px, transparent 1px),
            radial-gradient(circle at 46% 84%, rgba(232, 0, 28, 0.42) 0 1px, transparent 1px);
          background-size: 17px 19px, 29px 31px, 41px 37px;
        }

        .nxus-layout {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 55% 45%;
        }

        .nxus-left,
        .nxus-right {
          min-height: 100vh;
          position: relative;
        }

        .nxus-left {
          display: grid;
          place-items: center;
          padding: clamp(2rem, 5vw, 5rem);
          overflow: hidden;
        }

        .nxus-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, rgba(232, 0, 28, 0.12), transparent 28%),
            repeating-linear-gradient(90deg, rgba(240, 237, 232, 0.025) 0 1px, transparent 1px 86px);
          opacity: 0.8;
        }

        .nxus-hero {
          width: min(100%, 720px);
          display: grid;
          justify-items: center;
          gap: 1.45rem;
          text-align: center;
          position: relative;
          animation: nxusFadeUp 650ms ease both;
        }

        .nxus-logo-button {
          width: 160px;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: default;
          animation: nxusLogoBreathe 4s ease-in-out infinite;
        }

        .nxus-logo-button img {
          display: block;
          width: 100%;
          height: auto;
          user-select: none;
          pointer-events: none;
        }

        .nxus-kicker,
        .nxus-eyebrow,
        .nxus-field-label,
        .nxus-proof,
        .nxus-footer-mark {
          font-family: var(--mono-font);
          text-transform: uppercase;
        }

        .nxus-kicker {
          color: var(--nxus-red);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          margin-right: -0.4em;
        }

        .nxus-title {
          margin: 0;
          font-family: var(--display-font);
          font-size: clamp(4.5rem, 7.2vw, 5rem);
          line-height: 0.84;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          color: #FFFFFF;
          text-wrap: balance;
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.64);
        }

        .nxus-title span {
          display: inline;
        }

        .nxus-title span + span::before {
          content: ' ';
        }

        .nxus-subhead {
          margin: 0;
          color: var(--nxus-muted);
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1rem, 1.35vw, 1.16rem);
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .nxus-stat-row {
          display: flex;
          justify-content: center;
          gap: 0.72rem;
          flex-wrap: wrap;
          margin-top: 0.6rem;
        }

        .nxus-stat {
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          border: 1px solid rgba(240, 237, 232, 0.12);
          background: rgba(5, 5, 5, 0.54);
          color: rgba(240, 237, 232, 0.84);
          padding: 0.74rem 0.86rem;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          box-shadow: inset 0 -1px 0 rgba(232, 0, 28, 0.28);
        }

        .nxus-about-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          min-height: 3.15rem;
          padding: 0.74rem 1.1rem;
          border: 1px solid rgba(232, 0, 28, 0.7);
          border-radius: 0;
          background: transparent;
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          transition: background 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .nxus-about-trigger:hover,
        .nxus-about-trigger:focus-visible {
          background: rgba(232, 0, 28, 0.08);
          box-shadow: 0 0 26px rgba(232, 0, 28, 0.18);
          transform: translateY(-1px);
          outline: none;
        }

        .nxus-footer-mark {
          position: absolute;
          left: clamp(1.25rem, 3vw, 3rem);
          bottom: clamp(1.25rem, 3vw, 2.4rem);
          color: rgba(240, 237, 232, 0.36);
          font-size: 0.64rem;
          letter-spacing: 0.32em;
        }

        .nxus-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 55%;
          width: 1px;
          background: var(--nxus-red);
          transform: translateX(-0.5px);
          z-index: 3;
          animation: nxusDividerPulse 5s ease-in-out infinite;
        }

        .nxus-right {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 28%),
            var(--nxus-panel);
          border-left: 1px solid rgba(232, 0, 28, 0.08);
          display: grid;
          align-items: center;
          padding: clamp(1.4rem, 4vw, 4.2rem);
        }

        .nxus-action {
          width: min(100%, 520px);
          justify-self: center;
          display: grid;
          gap: 1.45rem;
          animation: nxusFadeUp 650ms 200ms ease both;
        }

        .nxus-action-header {
          display: grid;
          gap: 0.36rem;
        }

        .nxus-eyebrow {
          color: var(--nxus-red);
          font-size: 0.74rem;
          letter-spacing: 0.26em;
        }

        .nxus-action-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(3rem, 5vw, 4.9rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-form {
          display: grid;
          gap: 1rem;
        }

        .nxus-field {
          display: grid;
          gap: 0.48rem;
        }

        .nxus-field-label {
          color: rgba(240, 237, 232, 0.58);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
        }

        .nxus-input-wrap {
          position: relative;
          background: #0A0A0A;
        }

        .nxus-input-wrap::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: var(--nxus-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
        }

        .nxus-input-wrap:focus-within::after {
          transform: scaleX(1);
        }

        .nxus-input {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: transparent;
          color: #FFFFFF;
          font: 500 1rem/1.2 var(--body-font);
          outline: none;
          padding: 1.08rem 1rem;
          transition: border-color 180ms ease, background 180ms ease;
        }

        .nxus-input:focus {
          border-color: rgba(232, 0, 28, 0.42);
          background: rgba(232, 0, 28, 0.035);
        }

        .nxus-input::placeholder {
          color: rgba(240, 237, 232, 0.28);
        }

        .nxus-cta {
          width: 100%;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          min-height: 3.5rem;
          padding: 1rem 1.2rem;
          font-family: var(--mono-font);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }

        .nxus-cta:hover:not(:disabled),
        .nxus-cta:focus-visible:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 34px rgba(232, 0, 28, 0.42);
        }

        .nxus-cta:disabled {
          opacity: 0.66;
          cursor: wait;
        }

        .nxus-access-trigger {
          width: 100%;
          min-height: 3.15rem;
          border: 1px solid rgba(232, 0, 28, 0.48);
          border-radius: 0;
          background: #0A0A0A;
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.68rem;
          font-family: var(--mono-font);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: background 180ms ease, box-shadow 180ms ease, transform 180ms ease;
        }

        .nxus-access-trigger:hover,
        .nxus-access-trigger:focus-visible {
          background: rgba(232, 0, 28, 0.1);
          box-shadow: 0 0 26px rgba(232, 0, 28, 0.22);
          transform: translateY(-1px);
          outline: none;
        }

        .nxus-access-lock {
          color: var(--nxus-red);
          font-size: 1rem;
          line-height: 1;
        }

        .nxus-form-note {
          min-height: 1.2rem;
          margin: 0;
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          line-height: 1.7;
        }

        .nxus-form-note[data-tone='success'] {
          color: #ff8d84;
        }

        .nxus-form-note[data-tone='error'] {
          color: #ffb3ad;
        }

        .nxus-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, var(--nxus-red), rgba(240, 237, 232, 0.08));
          opacity: 0.64;
        }

        .nxus-socials {
          display: grid;
          gap: 0.86rem;
        }

        .nxus-social-card {
          border: 1px solid rgba(240, 237, 232, 0.08);
          border-left: 3px solid var(--nxus-red);
          background: #0B0B0B;
          color: var(--nxus-cream);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 0.9rem;
          padding: 1rem;
          min-height: 5.9rem;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .nxus-social-card:hover,
        .nxus-social-card:focus-visible {
          background: #151010;
          border-color: rgba(232, 0, 28, 0.58);
          transform: translateX(4px);
          outline: none;
        }

        .nxus-social-icon {
          width: 2.35rem;
          height: 2.35rem;
          display: grid;
          place-items: center;
          color: var(--nxus-red);
          background: rgba(232, 0, 28, 0.08);
        }

        .nxus-social-text {
          display: grid;
          gap: 0.22rem;
        }

        .nxus-social-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .nxus-social-title {
          font-family: var(--display-font);
          font-size: 1.55rem;
          letter-spacing: 0.04em;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .nxus-social-body {
          color: rgba(240, 237, 232, 0.52);
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .nxus-social-arrow {
          color: rgba(240, 237, 232, 0.76);
          font-family: var(--mono-font);
          font-size: 1.25rem;
        }

        .nxus-proof {
          color: rgba(240, 237, 232, 0.46);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
        }

        .nxus-mobile-footer {
          display: none;
        }

        .nxus-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          background: rgba(0, 0, 0, 0.74);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .nxus-modal {
          width: min(100%, 430px);
          border: 1px solid rgba(232, 0, 28, 0.48);
          background: #111111;
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.72);
          padding: clamp(1.2rem, 4vw, 1.7rem);
          display: grid;
          gap: 1rem;
          animation: nxusFadeUp 220ms ease both;
        }

        .nxus-modal--about {
          width: min(100%, 560px);
          gap: 1.1rem;
          background:
            linear-gradient(180deg, rgba(232, 0, 28, 0.04), transparent 30%),
            #0D0D0D;
        }

        .nxus-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .nxus-modal-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 2.7rem;
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-modal-close {
          width: 2rem;
          height: 2rem;
          border: 1px solid rgba(240, 237, 232, 0.12);
          border-radius: 0;
          background: #0A0A0A;
          color: rgba(240, 237, 232, 0.78);
          font-family: var(--mono-font);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 180ms ease, color 180ms ease, background 180ms ease;
        }

        .nxus-modal-close:hover,
        .nxus-modal-close:focus-visible {
          border-color: rgba(232, 0, 28, 0.48);
          background: rgba(232, 0, 28, 0.08);
          color: #FFFFFF;
          outline: none;
        }

        .nxus-access-error {
          min-height: 1.1rem;
          margin: -0.3rem 0 0;
          color: #ffb3ad;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }

        .nxus-modal-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          border: 1px solid rgba(232, 0, 28, 0.28);
          border-left: 3px solid var(--nxus-red);
          background: rgba(232, 0, 28, 0.07);
          padding: 0.85rem 1rem;
          border-radius: 0;
        }

        .nxus-modal-notice-icon {
          flex-shrink: 0;
          font-size: 1rem;
          line-height: 1.4;
        }

        .nxus-modal-notice-text {
          display: grid;
          gap: 0.22rem;
        }

        .nxus-modal-notice-title {
          color: var(--nxus-cream);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .nxus-modal-notice-body {
          color: rgba(240, 237, 232, 0.62);
          font-family: var(--body-font);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .nxus-modal-notice-body strong {
          color: var(--nxus-cream);
          font-weight: 600;
        }

        .nxus-modal-copy {
          margin: 0;
          color: rgba(240, 237, 232, 0.72);
          font-size: 1rem;
          line-height: 1.7;
        }

        .nxus-modal-tagline {
          margin: 0;
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        @media (max-width: 920px) {
          .nxus-title {
            font-size: clamp(4rem, 9vw, 4.7rem);
          }

          .nxus-right {
            padding: clamp(1.25rem, 3vw, 2rem);
          }
        }

        @media (max-width: 767px) {
          .nxus-shell {
            min-height: 100svh;
            overflow-x: hidden;
            overflow-y: auto;
          }

          .nxus-shell::before {
            background:
              radial-gradient(circle at 50% 0%, rgba(232, 0, 28, 0.28), transparent 58vw),
              #0A0A0A;
          }

          .nxus-layout {
            min-height: 100svh;
            display: block;
            padding: 1.15rem;
          }

          .nxus-left,
          .nxus-right {
            min-height: auto;
          }

          .nxus-left {
            display: block;
            padding: 1.2rem 0 0.85rem;
          }

          .nxus-left::before,
          .nxus-divider,
          .nxus-footer-mark {
            display: none;
          }

          .nxus-hero {
            width: 100%;
            gap: 1rem;
            text-align: left;
            justify-items: start;
          }

          .nxus-logo-button {
            width: 80px;
          }

          .nxus-kicker {
            display: inline-flex;
            border: 1px solid rgba(232, 0, 28, 0.42);
            background: rgba(232, 0, 28, 0.08);
            padding: 0.45rem 0.6rem;
            border-radius: 999px;
            font-size: 0.66rem;
            letter-spacing: 0.26em;
            margin-right: 0;
          }

          .nxus-title {
            font-size: clamp(3.25rem, 15vw, 4.2rem);
            letter-spacing: 0.025em;
          }

          .nxus-title span {
            display: block;
          }

          .nxus-title span + span::before {
            content: '';
          }

          .nxus-subhead {
            font-size: 1rem;
          }

          .nxus-stat-row {
            justify-content: flex-start;
            gap: 0.48rem;
            margin-top: 0.1rem;
          }

          .nxus-stat {
            padding: 0.58rem 0.62rem;
            font-size: 0.62rem;
          }

          .nxus-about-trigger {
            align-self: flex-start;
            font-size: 0.68rem;
          }

          .nxus-right {
            margin-top: 0.8rem;
            background: transparent;
            border-left: 0;
            padding: 0;
            display: block;
          }

          .nxus-action {
            width: 100%;
            gap: 1.15rem;
          }

          .nxus-action-title {
            font-size: clamp(2.7rem, 13vw, 3.6rem);
          }

          .nxus-input {
            padding: 1rem 0.9rem;
          }

          .nxus-socials {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.7rem;
          }

          .nxus-social-card {
            min-height: 8.2rem;
            grid-template-columns: 1fr auto;
            align-items: start;
            gap: 0.65rem;
            padding: 0.85rem;
          }

          .nxus-social-icon {
            width: 2rem;
            height: 2rem;
          }

          .nxus-social-text {
            grid-column: 1 / -1;
            order: 2;
          }

          .nxus-social-title {
            font-size: 1.35rem;
          }

          .nxus-social-body {
            display: none;
          }

          .nxus-proof {
            text-align: center;
          }

          .nxus-mobile-footer {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin-top: 1.4rem;
            color: rgba(240, 237, 232, 0.44);
            font-family: var(--mono-font);
            font-size: 0.66rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
        }
      `}),f.jsx("div",{className:"nxus-divider","aria-hidden":"true"}),f.jsxs("div",{className:"nxus-layout",children:[f.jsxs("section",{className:"nxus-left","aria-labelledby":"nxus-coming-soon-title",children:[f.jsxs("div",{className:"nxus-hero",children:[f.jsx("button",{type:"button",onClick:V,"aria-label":"NXUS logo",className:"nxus-logo-button",children:f.jsx("img",{src:"/assets/nxus_logo_icon.svg",alt:"NXUS bowtie logo"})}),f.jsx("div",{className:"nxus-kicker",children:"Coming Soon"}),f.jsxs("h1",{className:"nxus-title",id:"nxus-coming-soon-title",children:[f.jsx("span",{children:"Kill your"}),f.jsx("span",{children:"Boredom"})]}),f.jsx("p",{className:"nxus-subhead",children:"Find your people. Show up. Repeat."}),f.jsx("div",{className:"nxus-stat-row","aria-label":"Launch details",children:MR.map(C=>f.jsxs("div",{className:"nxus-stat",children:[f.jsx("span",{"aria-hidden":"true",children:C.icon}),f.jsx("span",{children:C.label})]},C.label))}),f.jsx("button",{className:"nxus-about-trigger",type:"button",onClick:x,"aria-haspopup":"dialog",children:"What Is Nxus"})]}),f.jsx("div",{className:"nxus-footer-mark",children:"NXUS, from us, to you"})]}),f.jsx("section",{className:"nxus-right","aria-label":"Early access waitlist",children:f.jsxs("div",{className:"nxus-action",children:[f.jsxs("header",{className:"nxus-action-header",children:[f.jsx("div",{className:"nxus-eyebrow",children:"Early Access"}),f.jsx("h2",{className:"nxus-action-title",children:"Claim Your Spot"})]}),f.jsxs("form",{className:"nxus-form",onSubmit:F,children:[f.jsxs("label",{className:"nxus-field",children:[f.jsx("span",{className:"nxus-field-label",children:"Name"}),f.jsx("span",{className:"nxus-input-wrap",children:f.jsx("input",{className:"nxus-input",type:"text",value:i,onChange:C=>s(C.target.value),placeholder:"Your name",autoComplete:"name"})})]}),f.jsxs("label",{className:"nxus-field",children:[f.jsx("span",{className:"nxus-field-label",children:"Email"}),f.jsx("span",{className:"nxus-input-wrap",children:f.jsx("input",{className:"nxus-input",type:"email",value:o,onChange:C=>l(C.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})})]}),f.jsx("button",{className:"nxus-cta",type:"submit",disabled:u,children:u?"Saving Your Spot...":"Join The Waitlist →"}),f.jsx("p",{className:"nxus-form-note","data-tone":p.tone,children:p.message||"500+ people already in. Dubai opens first."})]}),f.jsxs("button",{className:"nxus-access-trigger",type:"button",onClick:E,children:[f.jsx("span",{className:"nxus-access-lock","aria-hidden":"true",children:"🔒"}),"Early Access"]}),f.jsx("div",{className:"nxus-rule","aria-hidden":"true"}),f.jsx("div",{className:"nxus-socials","aria-label":"NXUS social links",children:OR.map(C=>{const T=LR[C.key];return f.jsxs("a",{className:"nxus-social-card",href:C.href,target:"_blank",rel:"noopener noreferrer",children:[f.jsx("span",{className:"nxus-social-icon","aria-hidden":"true",children:C.icon}),f.jsxs("span",{className:"nxus-social-text",children:[f.jsx("span",{className:"nxus-social-eyebrow",children:T.eyebrow}),f.jsx("span",{className:"nxus-social-title",children:T.title}),f.jsx("span",{className:"nxus-social-body",children:T.body})]}),f.jsx("span",{className:"nxus-social-arrow","aria-hidden":"true",children:"→"})]},C.key)})}),f.jsxs("footer",{className:"nxus-mobile-footer",children:[f.jsx("span",{children:"More friends. More fun."}),f.jsx("span",{children:"nxus.fun"})]})]})})]}),g?f.jsx("div",{className:"nxus-modal-backdrop",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&v()},children:f.jsxs("section",{className:"nxus-modal",role:"dialog","aria-modal":"true","aria-labelledby":"nxus-access-title",children:[f.jsxs("div",{className:"nxus-modal-header",children:[f.jsxs("div",{children:[f.jsx("div",{className:"nxus-eyebrow",children:"Locked Drop"}),f.jsx("h2",{className:"nxus-modal-title",id:"nxus-access-title",children:"Enter Access Code"})]}),f.jsx("button",{className:"nxus-modal-close",type:"button",onClick:v,"aria-label":"Close access code modal",children:"x"})]}),f.jsxs("div",{className:"nxus-modal-notice",role:"note",children:[f.jsx("span",{className:"nxus-modal-notice-icon","aria-hidden":"true",children:"🔑"}),f.jsxs("div",{className:"nxus-modal-notice-text",children:[f.jsx("span",{className:"nxus-modal-notice-title",children:"New here?"}),f.jsxs("p",{className:"nxus-modal-notice-body",children:["Early access codes are invite-only. If you don’t have one, ",f.jsx("strong",{children:"join the waitlist below"})," and we’ll send your code to your email once you’re on the list."]})]})]}),f.jsxs("form",{className:"nxus-form",onSubmit:b,children:[f.jsxs("label",{className:"nxus-field",children:[f.jsx("span",{className:"nxus-field-label",children:"Access Code"}),f.jsx("span",{className:"nxus-input-wrap",children:f.jsx("input",{className:"nxus-input",type:"password",value:N,onChange:C=>{I(C.target.value),k("")},placeholder:"Enter code",autoComplete:"off",autoFocus:!0})})]}),f.jsx("p",{className:"nxus-access-error","aria-live":"polite",children:_}),f.jsxs("button",{className:"nxus-cta",type:"submit",children:["Unlock Signup ","→"]})]})]})}):null,A?f.jsx("div",{className:"nxus-modal-backdrop",role:"presentation",onMouseDown:C=>{C.target===C.currentTarget&&S()},children:f.jsxs("section",{className:"nxus-modal nxus-modal--about",role:"dialog","aria-modal":"true","aria-labelledby":"nxus-about-title","aria-describedby":"nxus-about-description",children:[f.jsxs("div",{className:"nxus-modal-header",children:[f.jsx("h2",{className:"nxus-modal-title",id:"nxus-about-title",children:"What Is Nxus"}),f.jsx("button",{className:"nxus-modal-close",type:"button",onClick:S,"aria-label":"Close WHAT IS NXUS modal",children:"X"})]}),f.jsx("p",{className:"nxus-modal-copy",id:"nxus-about-description",children:"A social app where you post what you want to do and instantly find people who are down to join you. No endless group chats. No plans that fall apart. Just real people doing real things together, spontaneously."}),f.jsx("p",{className:"nxus-modal-tagline",children:"Post what you want to do. Find who's down."})]})}):null]})}function FR(){const t=wr(),[e,n]=L.useState(""),[r,i]=L.useState(""),[s,o]=L.useState(""),[l,u]=L.useState(""),[d,p]=L.useState(!1),m=async w=>{if(w.preventDefault(),u(""),r.length<6){u("Password must be at least 6 characters.");return}if(r!==s){u("Passwords don’t match.");return}p(!0);try{await dk(mr,e.trim(),r);const A=window.sessionStorage.getItem("redirectAfterLogin")||"/home";window.sessionStorage.removeItem("redirectAfterLogin"),t(A)}catch(A){u(jy(A.code))}finally{p(!1)}},g=async()=>{u(""),p(!0);try{await Z_(mr,Tx);const w=window.sessionStorage.getItem("redirectAfterLogin")||"/home";window.sessionStorage.removeItem("redirectAfterLogin"),t(w)}catch(w){w.code!=="auth/popup-closed-by-user"&&u(jy(w.code))}finally{p(!1)}};return f.jsxs("main",{className:"nxus-auth-shell",children:[f.jsx("style",{children:`
        .nxus-auth-shell {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          position: relative;
          overflow: hidden;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
        }

        .nxus-auth-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 0, 28, 0.22), transparent 48vw),
            radial-gradient(circle at 80% 90%, rgba(232, 0, 28, 0.10), transparent 32vw),
            #0A0A0A;
        }

        .nxus-auth-card {
          position: relative;
          width: min(100%, 460px);
          border: 1px solid rgba(232, 0, 28, 0.36);
          background: var(--nxus-panel);
          padding: clamp(1.6rem, 5vw, 2.6rem);
          display: grid;
          gap: 1.3rem;
          animation: nxusFadeUp 500ms ease both;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-auth-logo {
          width: 64px;
          justify-self: center;
        }

        .nxus-auth-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-auth-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(3rem, 10vw, 4.4rem);
          font-weight: 800;
          line-height: 0.88;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-auth-form {
          display: grid;
          gap: 1rem;
        }

        .nxus-auth-field {
          display: grid;
          gap: 0.42rem;
        }

        .nxus-auth-label {
          color: rgba(240, 237, 232, 0.58);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .nxus-auth-input-wrap {
          position: relative;
          background: var(--nxus-black);
        }

        .nxus-auth-input-wrap::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          background: var(--nxus-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
        }

        .nxus-auth-input-wrap:focus-within::after {
          transform: scaleX(1);
        }

        .nxus-auth-input {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: transparent;
          color: #FFFFFF;
          font: 500 1rem/1.2 var(--body-font);
          outline: none;
          padding: 1rem;
          transition: border-color 180ms ease, background 180ms ease;
        }

        .nxus-auth-input:focus {
          border-color: rgba(232, 0, 28, 0.42);
          background: rgba(232, 0, 28, 0.035);
        }

        .nxus-auth-cta {
          width: 100%;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          min-height: 3.4rem;
          padding: 1rem 1.2rem;
          font-family: var(--mono-font);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }

        .nxus-auth-cta:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 34px rgba(232, 0, 28, 0.42);
        }

        .nxus-auth-cta:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .nxus-auth-divider {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(240, 237, 232, 0.32);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .nxus-auth-divider::before,
        .nxus-auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(232, 0, 28, 0.3), rgba(240, 237, 232, 0.06));
        }

        .nxus-auth-divider::after {
          background: linear-gradient(90deg, rgba(240, 237, 232, 0.06), rgba(232, 0, 28, 0.3));
        }

        .nxus-auth-google {
          width: 100%;
          min-height: 3.15rem;
          border: 1px solid rgba(240, 237, 232, 0.14);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          font-family: var(--mono-font);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .nxus-auth-google:hover {
          background: rgba(240, 237, 232, 0.04);
          border-color: rgba(240, 237, 232, 0.28);
          transform: translateY(-1px);
        }

        .nxus-auth-google svg {
          width: 18px;
          height: 18px;
        }

        .nxus-auth-error {
          min-height: 1.1rem;
          margin: 0;
          color: #ffb3ad;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }

        .nxus-auth-footer {
          text-align: center;
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        .nxus-auth-footer a {
          color: var(--nxus-red);
          text-decoration: none;
          font-weight: 700;
          transition: opacity 180ms ease;
        }

        .nxus-auth-footer a:hover {
          opacity: 0.78;
        }
      `}),f.jsxs("div",{className:"nxus-auth-card",children:[f.jsx("img",{className:"nxus-auth-logo",src:"/assets/nxus_logo_icon.svg",alt:"NXUS logo"}),f.jsxs("div",{children:[f.jsx("div",{className:"nxus-auth-eyebrow",children:"Early Access Unlocked"}),f.jsx("h1",{className:"nxus-auth-title",children:"Sign Up"})]}),f.jsxs("form",{className:"nxus-auth-form",onSubmit:m,children:[f.jsxs("label",{className:"nxus-auth-field",children:[f.jsx("span",{className:"nxus-auth-label",children:"Email"}),f.jsx("span",{className:"nxus-auth-input-wrap",children:f.jsx("input",{className:"nxus-auth-input",type:"email",value:e,onChange:w=>n(w.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})})]}),f.jsxs("label",{className:"nxus-auth-field",children:[f.jsx("span",{className:"nxus-auth-label",children:"Password"}),f.jsx("span",{className:"nxus-auth-input-wrap",children:f.jsx("input",{className:"nxus-auth-input",type:"password",value:r,onChange:w=>i(w.target.value),placeholder:"Min. 6 characters",autoComplete:"new-password",required:!0})})]}),f.jsxs("label",{className:"nxus-auth-field",children:[f.jsx("span",{className:"nxus-auth-label",children:"Confirm Password"}),f.jsx("span",{className:"nxus-auth-input-wrap",children:f.jsx("input",{className:"nxus-auth-input",type:"password",value:s,onChange:w=>o(w.target.value),placeholder:"Repeat password",autoComplete:"new-password",required:!0})})]}),l&&f.jsx("p",{className:"nxus-auth-error","aria-live":"polite",children:l}),f.jsx("button",{className:"nxus-auth-cta",type:"submit",disabled:d,children:d?"Creating Account...":"Create Account →"})]}),f.jsx("div",{className:"nxus-auth-divider",children:"or"}),f.jsxs("button",{className:"nxus-auth-google",type:"button",onClick:g,disabled:d,children:[f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.97.47 3.83 1.28 5.49l3.56-2.77.01-.63z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),f.jsxs("div",{className:"nxus-auth-footer",children:["Already have an account?"," ",f.jsx(Il,{to:"/login",children:"Log in"})]})]})]})}function jy(t){switch(t){case"auth/email-already-in-use":return"That email is already taken.";case"auth/invalid-email":return"That email doesn’t look right.";case"auth/weak-password":return"Password is too weak. Use at least 6 characters.";default:return"Something went wrong. Please try again."}}function UR(){const t=wr(),[e,n]=L.useState(""),[r,i]=L.useState(""),[s,o]=L.useState(""),[l,u]=L.useState(!1),d=async m=>{m.preventDefault(),o(""),u(!0);try{await hk(mr,e.trim(),r);const g=window.sessionStorage.getItem("redirectAfterLogin")||"/home";window.sessionStorage.removeItem("redirectAfterLogin"),t(g)}catch(g){o(Fy(g.code))}finally{u(!1)}},p=async()=>{o(""),u(!0);try{await Z_(mr,Tx);const m=window.sessionStorage.getItem("redirectAfterLogin")||"/home";window.sessionStorage.removeItem("redirectAfterLogin"),t(m)}catch(m){m.code!=="auth/popup-closed-by-user"&&o(Fy(m.code))}finally{u(!1)}};return f.jsxs("main",{className:"nxus-auth-shell",children:[f.jsx("style",{children:`
        .nxus-auth-shell {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          position: relative;
          overflow: hidden;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
        }

        .nxus-auth-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 0%, rgba(232, 0, 28, 0.22), transparent 48vw),
            radial-gradient(circle at 80% 90%, rgba(232, 0, 28, 0.10), transparent 32vw),
            #0A0A0A;
        }

        .nxus-auth-card {
          position: relative;
          width: min(100%, 460px);
          border: 1px solid rgba(232, 0, 28, 0.36);
          background: var(--nxus-panel);
          padding: clamp(1.6rem, 5vw, 2.6rem);
          display: grid;
          gap: 1.3rem;
          animation: nxusFadeUp 500ms ease both;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-auth-logo {
          width: 64px;
          justify-self: center;
        }

        .nxus-auth-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-auth-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(3rem, 10vw, 4.4rem);
          font-weight: 800;
          line-height: 0.88;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-auth-form {
          display: grid;
          gap: 1rem;
        }

        .nxus-auth-field {
          display: grid;
          gap: 0.42rem;
        }

        .nxus-auth-label {
          color: rgba(240, 237, 232, 0.58);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .nxus-auth-input-wrap {
          position: relative;
          background: var(--nxus-black);
        }

        .nxus-auth-input-wrap::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          background: var(--nxus-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms ease;
        }

        .nxus-auth-input-wrap:focus-within::after {
          transform: scaleX(1);
        }

        .nxus-auth-input {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: transparent;
          color: #FFFFFF;
          font: 500 1rem/1.2 var(--body-font);
          outline: none;
          padding: 1rem;
          transition: border-color 180ms ease, background 180ms ease;
        }

        .nxus-auth-input:focus {
          border-color: rgba(232, 0, 28, 0.42);
          background: rgba(232, 0, 28, 0.035);
        }

        .nxus-auth-cta {
          width: 100%;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          min-height: 3.4rem;
          padding: 1rem 1.2rem;
          font-family: var(--mono-font);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }

        .nxus-auth-cta:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 34px rgba(232, 0, 28, 0.42);
        }

        .nxus-auth-cta:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .nxus-auth-divider {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(240, 237, 232, 0.32);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .nxus-auth-divider::before,
        .nxus-auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(232, 0, 28, 0.3), rgba(240, 237, 232, 0.06));
        }

        .nxus-auth-divider::after {
          background: linear-gradient(90deg, rgba(240, 237, 232, 0.06), rgba(232, 0, 28, 0.3));
        }

        .nxus-auth-google {
          width: 100%;
          min-height: 3.15rem;
          border: 1px solid rgba(240, 237, 232, 0.14);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          font-family: var(--mono-font);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .nxus-auth-google:hover {
          background: rgba(240, 237, 232, 0.04);
          border-color: rgba(240, 237, 232, 0.28);
          transform: translateY(-1px);
        }

        .nxus-auth-google svg {
          width: 18px;
          height: 18px;
        }

        .nxus-auth-error {
          min-height: 1.1rem;
          margin: 0;
          color: #ffb3ad;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.04em;
        }

        .nxus-auth-footer {
          text-align: center;
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        .nxus-auth-footer a {
          color: var(--nxus-red);
          text-decoration: none;
          font-weight: 700;
          transition: opacity 180ms ease;
        }

        .nxus-auth-footer a:hover {
          opacity: 0.78;
        }
      `}),f.jsxs("div",{className:"nxus-auth-card",children:[f.jsx("img",{className:"nxus-auth-logo",src:"/assets/nxus_logo_icon.svg",alt:"NXUS logo"}),f.jsxs("div",{children:[f.jsx("div",{className:"nxus-auth-eyebrow",children:"Welcome Back"}),f.jsx("h1",{className:"nxus-auth-title",children:"Log In"})]}),f.jsxs("form",{className:"nxus-auth-form",onSubmit:d,children:[f.jsxs("label",{className:"nxus-auth-field",children:[f.jsx("span",{className:"nxus-auth-label",children:"Email"}),f.jsx("span",{className:"nxus-auth-input-wrap",children:f.jsx("input",{className:"nxus-auth-input",type:"email",value:e,onChange:m=>n(m.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0})})]}),f.jsxs("label",{className:"nxus-auth-field",children:[f.jsx("span",{className:"nxus-auth-label",children:"Password"}),f.jsx("span",{className:"nxus-auth-input-wrap",children:f.jsx("input",{className:"nxus-auth-input",type:"password",value:r,onChange:m=>i(m.target.value),placeholder:"Your password",autoComplete:"current-password",required:!0})})]}),s&&f.jsx("p",{className:"nxus-auth-error","aria-live":"polite",children:s}),f.jsx("button",{className:"nxus-auth-cta",type:"submit",disabled:l,children:l?"Signing In...":"Sign In →"})]}),f.jsx("div",{className:"nxus-auth-divider",children:"or"}),f.jsxs("button",{className:"nxus-auth-google",type:"button",onClick:p,disabled:l,children:[f.jsxs("svg",{viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.97.47 3.83 1.28 5.49l3.56-2.77.01-.63z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),f.jsxs("div",{className:"nxus-auth-footer",children:["Don't have an account?"," ",f.jsx(Il,{to:"/signup",children:"Sign up"})]})]})]})}function Fy(t){switch(t){case"auth/invalid-email":return"That email doesn’t look right.";case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"Wrong email or password.";case"auth/too-many-requests":return"Too many attempts. Try again later.";default:return"Something went wrong. Please try again."}}const zR=[{title:"Desert Stargazing Night",shortDescription:"Watch the stars over Dubai's desert with fellow students.",fullDescription:"Join us for a magical night in the Dubai desert. Bring a blanket, we'll handle the telescope. Open to all university students.",date:"May 10, 2025",location:"Al Qudra Desert, Dubai",formLink:"https://forms.google.com"},{title:"Rooftop Movie Night",shortDescription:"Outdoor cinema with snacks and good company.",fullDescription:"We're screening a fan-favourite film on a rooftop in JLT. Snacks provided. Come alone or bring a friend.",date:"May 17, 2025",location:"JLT Rooftop, Dubai",formLink:"https://forms.google.com"},{title:"Startup Pitch Café",shortDescription:"Pitch your idea in 2 minutes. No slides needed.",fullDescription:"An informal gathering for student founders and idea-havers. Pitch in 2 minutes, get feedback, meet co-founders.",date:"May 24, 2025",location:"Nightjar Coffee, Dubai",formLink:"https://forms.google.com"},{title:"Beach Volleyball Meetup",shortDescription:"Casual volleyball on JBR beach. All levels welcome.",fullDescription:"No experience needed. Show up, meet people, play. We'll split into teams on the spot.",date:"June 1, 2025",location:"JBR Beach, Dubai",formLink:"https://forms.google.com"},{title:"Study & Chill at Business Bay",shortDescription:"Productive co-working session with a view.",fullDescription:"Bring your laptop and assignments. We'll book a table at a café in Business Bay, work together, and take breaks together.",date:"June 7, 2025",location:"Business Bay Café, Dubai",formLink:"https://forms.google.com"}];let Dc=!1;async function BR(t){if(!(Dc||!t)){Dc=!0;try{const e=Bl(Wn,"events");if((await RR(e)).empty){const r=zR.map(i=>_x(e,{...i,hostUid:t}));await Promise.all(r)}}catch(e){console.error("Failed to seed events:",e),Dc=!1}}}function $R(){const{user:t}=ni(),e=wr(),[n,r]=L.useState([]),[i,s]=L.useState(null),[o,l]=L.useState(!0),[u,d]=L.useState(null);L.useEffect(()=>{t!=null&&t.uid&&BR(t.uid).finally(()=>l(!1))},[t]),L.useEffect(()=>{const g=SR(Bl(Wn,"events"));return wx(g,A=>{r(A.docs.map(R=>({id:R.id,...R.data()})))})},[]);const p=async()=>{await mf(mr),e("/login")},m=g=>{s(w=>w===g?null:g)};return f.jsxs("main",{className:"nxus-home-shell",children:[f.jsx("style",{children:`
        .nxus-home-shell {
          min-height: 100vh;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
          position: relative;
        }

        .nxus-home-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.14), transparent 38vw),
            radial-gradient(circle at 80% 85%, rgba(232, 0, 28, 0.08), transparent 28vw),
            #0A0A0A;
        }

        /* ── NAV ── */
        .nxus-home-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem clamp(1.2rem, 4vw, 3rem);
          background: rgba(10, 10, 10, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(232, 0, 28, 0.18);
        }

        .nxus-home-nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nxus-home-nav-logo {
          width: 36px;
          height: auto;
        }

        .nxus-home-nav-brand {
          font-family: var(--display-font);
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .nxus-home-nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nxus-home-nav-email {
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nxus-home-nav-signout {
          border: 1px solid rgba(232, 0, 28, 0.42);
          border-radius: 0;
          background: transparent;
          color: var(--nxus-red);
          padding: 0.45rem 0.9rem;
          font-family: var(--mono-font);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 160ms ease, transform 160ms ease;
        }

        .nxus-home-nav-signout:hover {
          background: rgba(232, 0, 28, 0.08);
          transform: translateY(-1px);
        }

        /* ── CONTENT ── */
        .nxus-home-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(1.4rem, 4vw, 3rem);
        }

        .nxus-home-header {
          display: grid;
          gap: 0.4rem;
          margin-bottom: 2rem;
          animation: nxusHomeIn 500ms ease both;
        }

        @keyframes nxusHomeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-home-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-home-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(2.8rem, 7vw, 4.2rem);
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .nxus-home-subtitle {
          margin: 0.2rem 0 0;
          color: rgba(240, 237, 232, 0.52);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* ── EVENT CARDS ── */
        .nxus-events-list {
          display: grid;
          gap: 1rem;
        }

        .nxus-event-card {
          border: 1px solid rgba(240, 237, 232, 0.08);
          border-left: 3px solid var(--nxus-red);
          background: var(--nxus-panel);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem 1.4rem;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
          animation: nxusHomeIn 400ms ease both;
        }

        .nxus-event-card:hover {
          background: #161212;
          border-color: rgba(232, 0, 28, 0.48);
          transform: translateX(3px);
        }

        .nxus-event-body {
          min-width: 0;
        }

        .nxus-event-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 1.65rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
        }

        .nxus-share-btn {
          background: transparent;
          border: none;
          color: var(--nxus-cream);
          cursor: pointer;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 150ms;
          padding: 0.2rem;
        }

        .nxus-share-btn:hover {
          color: var(--nxus-red);
        }

        .nxus-share-btn svg {
          width: 24px;
          height: 24px;
        }

        .nxus-event-short {
          margin: 0.35rem 0 0;
          color: rgba(240, 237, 232, 0.62);
          font-size: 0.9rem;
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .nxus-event-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.55rem;
          flex-wrap: wrap;
        }

        .nxus-event-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: rgba(240, 237, 232, 0.42);
          font-family: var(--mono-font);
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .nxus-event-meta-icon {
          color: var(--nxus-red);
          font-size: 0.82rem;
          line-height: 1;
        }

        .nxus-event-join {
          flex-shrink: 0;
          border: 1px solid rgba(232, 0, 28, 0.5);
          border-radius: 0;
          background: rgba(232, 0, 28, 0.06);
          color: var(--nxus-red);
          padding: 0.65rem 1.3rem;
          font-family: var(--mono-font);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: background 160ms ease, box-shadow 160ms ease, transform 160ms ease;
        }

        .nxus-event-join:hover {
          background: rgba(232, 0, 28, 0.14);
          box-shadow: 0 0 22px rgba(232, 0, 28, 0.28);
          transform: translateY(-1px);
        }

        /* ── EXPANDED ── */
        .nxus-event-expanded {
          grid-column: 1 / -1;
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(240, 237, 232, 0.06);
          animation: nxusExpandIn 280ms ease both;
        }

        @keyframes nxusExpandIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 300px; }
        }

        .nxus-event-full {
          margin: 0;
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.65;
        }

        /* ── EMPTY STATE ── */
        .nxus-events-empty {
          text-align: center;
          padding: 4rem 1rem;
          color: rgba(240, 237, 232, 0.38);
          font-family: var(--mono-font);
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .nxus-event-card {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            padding: 1rem;
          }

          .nxus-event-join {
            justify-self: stretch;
            text-align: center;
          }

          .nxus-home-nav-email {
            display: none;
          }
        }
      `}),f.jsxs("nav",{className:"nxus-home-nav",children:[f.jsxs("div",{className:"nxus-home-nav-left",children:[f.jsx("img",{className:"nxus-home-nav-logo",src:"/assets/nxus_logo_icon.svg",alt:"NXUS"}),f.jsx("span",{className:"nxus-home-nav-brand",children:"NXUS"})]}),f.jsxs("div",{className:"nxus-home-nav-right",children:[f.jsx("span",{className:"nxus-home-nav-email",children:t==null?void 0:t.email}),f.jsx("button",{className:"nxus-home-nav-signout",onClick:p,children:"Sign Out"})]})]}),f.jsxs("div",{className:"nxus-home-content",children:[f.jsxs("header",{className:"nxus-home-header",children:[f.jsx("div",{className:"nxus-home-eyebrow",children:"Live Drops"}),f.jsx("h1",{className:"nxus-home-title",children:"Upcoming Events"}),f.jsx("p",{className:"nxus-home-subtitle",children:"Tap a card to see more. Hit Join Now to sign up."})]}),o&&n.length===0?f.jsx("div",{className:"nxus-events-empty",children:"Loading events\\u2026"}):n.length===0?f.jsx("div",{className:"nxus-events-empty",children:"No events yet. Check back soon."}):f.jsx("div",{className:"nxus-events-list",children:n.map((g,w)=>f.jsxs("div",{className:"nxus-event-card",style:{animationDelay:`${w*80}ms`},onClick:()=>m(g.id),children:[f.jsxs("div",{className:"nxus-event-body",children:[f.jsx("h2",{className:"nxus-event-title",children:g.title}),i!==g.id&&f.jsx("p",{className:"nxus-event-short",children:g.shortDescription}),f.jsxs("div",{className:"nxus-event-meta",children:[f.jsxs("span",{className:"nxus-event-meta-item",children:[f.jsx("span",{className:"nxus-event-meta-icon",children:"📅"}),g.date]}),f.jsxs("span",{className:"nxus-event-meta-item",children:[f.jsx("span",{className:"nxus-event-meta-icon",children:"📍"}),g.location]})]})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.8rem"},children:[f.jsx("button",{className:"nxus-share-btn",onClick:A=>{A.stopPropagation(),navigator.clipboard.writeText(`${window.location.origin}/event/${g.id}`),d(g.id),setTimeout(()=>d(null),2e3)},title:"Share Event",children:u===g.id?"Copied!":f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"18",cy:"5",r:"3"}),f.jsx("circle",{cx:"6",cy:"12",r:"3"}),f.jsx("circle",{cx:"18",cy:"19",r:"3"}),f.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),f.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]})}),f.jsxs("button",{className:"nxus-event-join",onClick:A=>{A.stopPropagation(),window.open(g.formLink,"_blank","noopener,noreferrer")},children:["Join Now ","→"]})]}),i===g.id&&f.jsx("div",{className:"nxus-event-expanded",style:{gridColumn:"1 / -1"},children:f.jsx("p",{className:"nxus-event-full",children:g.fullDescription})})]},g.id))})]})]})}const Oc={title:"",shortDescription:"",fullDescription:"",date:"",location:"",formLink:""};function WR(){const{user:t}=ni(),e=wr(),[n,r]=L.useState([]),[i,s]=L.useState(Oc),[o,l]=L.useState(!1),[u,d]=L.useState(null),[p,m]=L.useState(null),[g,w]=L.useState("");L.useEffect(()=>wx(Bl(Wn,"events"),F=>{r(F.docs.map(E=>({id:E.id,...E.data()})))}),[]);const A=V=>{s(F=>({...F,[V.target.name]:V.target.value}))},R=async V=>{if(V.preventDefault(),!!i.title.trim()){l(!0);try{u?(await My(Ys(Wn,"events",u),{...i}),d(null)):await _x(Bl(Wn,"events"),{...i,hostUid:t.uid}),s(Oc)}catch(F){console.error("Save event failed:",F)}finally{l(!1)}}},N=V=>{d(V.id),s({title:V.title||"",shortDescription:V.shortDescription||"",fullDescription:V.fullDescription||"",date:V.date||"",location:V.location||"",formLink:V.formLink||""}),window.scrollTo({top:0,behavior:"smooth"})},I=async V=>{try{await PR(Ys(Wn,"events",V))}catch(F){console.error("Delete failed:",F)}},_=(V,F)=>{m(V),w(F||"")},k=async V=>{try{await My(Ys(Wn,"events",V),{formLink:g})}catch(F){console.error("Update link failed:",F)}finally{m(null),w("")}},O=async()=>{await mf(mr),e("/login")};return f.jsxs("main",{className:"nxus-admin-shell",children:[f.jsx("style",{children:`
        .nxus-admin-shell {
          min-height: 100vh;
          background: var(--nxus-black);
          color: var(--nxus-cream);
          font-family: var(--body-font);
          position: relative;
        }

        .nxus-admin-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 30% 15%, rgba(232, 0, 28, 0.14), transparent 34vw),
            #0A0A0A;
        }

        /* ── NAV ── */
        .nxus-admin-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem clamp(1.2rem, 4vw, 3rem);
          background: rgba(10, 10, 10, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(232, 0, 28, 0.18);
        }

        .nxus-admin-nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nxus-admin-nav-logo {
          width: 36px;
          height: auto;
        }

        .nxus-admin-nav-brand {
          font-family: var(--display-font);
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .nxus-admin-nav-badge {
          background: var(--nxus-red);
          color: #FFFFFF;
          font-family: var(--mono-font);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.25rem 0.55rem;
        }

        .nxus-admin-nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nxus-admin-nav-home {
          border: 1px solid rgba(240, 237, 232, 0.14);
          border-radius: 0;
          background: transparent;
          color: rgba(240, 237, 232, 0.72);
          padding: 0.45rem 0.9rem;
          font-family: var(--mono-font);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 160ms ease;
        }

        .nxus-admin-nav-home:hover {
          background: rgba(240, 237, 232, 0.04);
        }

        .nxus-admin-nav-signout {
          border: 1px solid rgba(232, 0, 28, 0.42);
          border-radius: 0;
          background: transparent;
          color: var(--nxus-red);
          padding: 0.45rem 0.9rem;
          font-family: var(--mono-font);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 160ms ease;
        }

        .nxus-admin-nav-signout:hover {
          background: rgba(232, 0, 28, 0.08);
        }

        /* ── LAYOUT ── */
        .nxus-admin-content {
          position: relative;
          z-index: 1;
          max-width: 960px;
          margin: 0 auto;
          padding: clamp(1.4rem, 4vw, 3rem);
          display: grid;
          gap: 2.4rem;
        }

        .nxus-admin-header {
          display: grid;
          gap: 0.3rem;
        }

        .nxus-admin-eyebrow {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .nxus-admin-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: clamp(2.6rem, 7vw, 4rem);
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        /* ── ADD FORM ── */
        .nxus-admin-add-section {
          border: 1px solid rgba(232, 0, 28, 0.28);
          background: var(--nxus-panel);
          padding: clamp(1.2rem, 3vw, 2rem);
          display: grid;
          gap: 1rem;
        }

        .nxus-admin-section-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 1.8rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nxus-admin-form {
          display: grid;
          gap: 0.9rem;
        }

        .nxus-admin-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
        }

        @media (max-width: 640px) {
          .nxus-admin-form-row {
            grid-template-columns: 1fr;
          }
        }

        .nxus-admin-field {
          display: grid;
          gap: 0.38rem;
        }

        .nxus-admin-label {
          color: rgba(240, 237, 232, 0.52);
          font-family: var(--mono-font);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .nxus-admin-input,
        .nxus-admin-textarea {
          width: 100%;
          border: 1px solid rgba(240, 237, 232, 0.1);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          font: 500 0.92rem/1.3 var(--body-font);
          outline: none;
          padding: 0.85rem 0.9rem;
          transition: border-color 180ms ease;
        }

        .nxus-admin-input:focus,
        .nxus-admin-textarea:focus {
          border-color: rgba(232, 0, 28, 0.42);
        }

        .nxus-admin-textarea {
          min-height: 80px;
          resize: vertical;
        }

        .nxus-admin-submit {
          justify-self: start;
          border: 0;
          border-radius: 0;
          background: var(--nxus-red);
          color: #FFFFFF;
          padding: 0.85rem 2rem;
          font-family: var(--mono-font);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
        }

        .nxus-admin-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 0 26px rgba(232, 0, 28, 0.36);
        }

        .nxus-admin-submit:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        /* ── EVENT LIST ── */
        .nxus-admin-list-section {
          display: grid;
          gap: 1rem;
        }

        .nxus-admin-event-row {
          border: 1px solid rgba(240, 237, 232, 0.08);
          border-left: 3px solid var(--nxus-red);
          background: var(--nxus-panel);
          padding: 1rem 1.2rem;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: start;
          gap: 1rem;
          transition: background 160ms ease;
        }

        .nxus-admin-event-row:hover {
          background: #161212;
        }

        .nxus-admin-event-info h3 {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--display-font);
          font-size: 1.4rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
        }

        .nxus-admin-event-info p {
          margin: 0.3rem 0 0;
          color: rgba(240, 237, 232, 0.48);
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .nxus-admin-event-link-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .nxus-admin-event-link-label {
          color: rgba(240, 237, 232, 0.36);
          font-family: var(--mono-font);
          font-size: 0.64rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .nxus-admin-event-link-value {
          color: var(--nxus-red);
          font-family: var(--mono-font);
          font-size: 0.72rem;
          word-break: break-all;
          cursor: pointer;
          border-bottom: 1px dashed rgba(232, 0, 28, 0.38);
          transition: opacity 160ms ease;
        }

        .nxus-admin-event-link-value:hover {
          opacity: 0.7;
        }

        .nxus-admin-link-edit-input {
          flex: 1;
          min-width: 120px;
          border: 1px solid rgba(232, 0, 28, 0.38);
          border-radius: 0;
          background: var(--nxus-black);
          color: #FFFFFF;
          font: 500 0.78rem/1.2 var(--mono-font);
          outline: none;
          padding: 0.4rem 0.6rem;
        }

        .nxus-admin-link-edit-input:focus {
          border-color: var(--nxus-red);
        }

        .nxus-admin-link-save {
          border: 1px solid rgba(52, 168, 83, 0.48);
          border-radius: 0;
          background: rgba(52, 168, 83, 0.08);
          color: #34A853;
          padding: 0.35rem 0.65rem;
          font-family: var(--mono-font);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease;
        }

        .nxus-admin-link-save:hover {
          background: rgba(52, 168, 83, 0.16);
        }

        .nxus-admin-link-cancel {
          border: 1px solid rgba(240, 237, 232, 0.12);
          border-radius: 0;
          background: transparent;
          color: rgba(240, 237, 232, 0.52);
          padding: 0.35rem 0.65rem;
          font-family: var(--mono-font);
          font-size: 0.64rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease;
        }

        .nxus-admin-link-cancel:hover {
          background: rgba(240, 237, 232, 0.04);
        }

        .nxus-admin-edit {
          border: 1px solid rgba(240, 237, 232, 0.32);
          border-radius: 0;
          background: rgba(240, 237, 232, 0.06);
          color: rgba(240, 237, 232, 0.9);
          padding: 0.42rem 0.8rem;
          font-family: var(--mono-font);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease, box-shadow 140ms ease;
          width: 100%;
        }

        .nxus-admin-edit:hover {
          background: rgba(240, 237, 232, 0.14);
          box-shadow: 0 0 18px rgba(240, 237, 232, 0.1);
        }

        .nxus-admin-event-actions {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          align-items: stretch;
        }

        .nxus-admin-delete {
          border: 1px solid rgba(255, 80, 80, 0.32);
          border-radius: 0;
          background: rgba(255, 80, 80, 0.06);
          color: #ff6b6b;
          padding: 0.42rem 0.8rem;
          font-family: var(--mono-font);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 140ms ease, box-shadow 140ms ease;
        }

        .nxus-admin-delete:hover {
          background: rgba(255, 80, 80, 0.14);
          box-shadow: 0 0 18px rgba(255, 80, 80, 0.2);
        }

        .nxus-admin-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: rgba(240, 237, 232, 0.34);
          font-family: var(--mono-font);
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .nxus-admin-event-row {
            grid-template-columns: 1fr;
          }

          .nxus-admin-event-actions {
            flex-direction: row;
            align-items: center;
          }
        }
      `}),f.jsxs("nav",{className:"nxus-admin-nav",children:[f.jsxs("div",{className:"nxus-admin-nav-left",children:[f.jsx("img",{className:"nxus-admin-nav-logo",src:"/assets/nxus_logo_icon.svg",alt:"NXUS"}),f.jsx("span",{className:"nxus-admin-nav-brand",children:"NXUS"}),f.jsx("span",{className:"nxus-admin-nav-badge",children:"Admin"})]}),f.jsxs("div",{className:"nxus-admin-nav-right",children:[f.jsx("button",{className:"nxus-admin-nav-home",onClick:()=>e("/home"),children:"Home"}),f.jsx("button",{className:"nxus-admin-nav-signout",onClick:O,children:"Sign Out"})]})]}),f.jsxs("div",{className:"nxus-admin-content",children:[f.jsxs("header",{className:"nxus-admin-header",children:[f.jsx("div",{className:"nxus-admin-eyebrow",children:"Control Panel"}),f.jsx("h1",{className:"nxus-admin-title",children:"Manage Events"})]}),f.jsxs("section",{className:"nxus-admin-add-section",children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("h2",{className:"nxus-admin-section-title",children:u?"Edit Event":"Add New Event"}),u&&f.jsx("button",{type:"button",className:"nxus-admin-link-cancel",onClick:()=>{d(null),s(Oc)},children:"Cancel Edit"})]}),f.jsxs("form",{className:"nxus-admin-form",onSubmit:R,children:[f.jsxs("label",{className:"nxus-admin-field",children:[f.jsx("span",{className:"nxus-admin-label",children:"Title"}),f.jsx("input",{className:"nxus-admin-input",name:"title",value:i.title,onChange:A,placeholder:"Event title",required:!0})]}),f.jsxs("div",{className:"nxus-admin-form-row",children:[f.jsxs("label",{className:"nxus-admin-field",children:[f.jsx("span",{className:"nxus-admin-label",children:"Date"}),f.jsx("input",{className:"nxus-admin-input",name:"date",value:i.date,onChange:A,placeholder:"e.g. May 10, 2025",required:!0})]}),f.jsxs("label",{className:"nxus-admin-field",children:[f.jsx("span",{className:"nxus-admin-label",children:"Location"}),f.jsx("input",{className:"nxus-admin-input",name:"location",value:i.location,onChange:A,placeholder:"e.g. JBR Beach, Dubai",required:!0})]})]}),f.jsxs("label",{className:"nxus-admin-field",children:[f.jsx("span",{className:"nxus-admin-label",children:"Short Description"}),f.jsx("input",{className:"nxus-admin-input",name:"shortDescription",value:i.shortDescription,onChange:A,placeholder:"One-liner for the card",required:!0})]}),f.jsxs("label",{className:"nxus-admin-field",children:[f.jsx("span",{className:"nxus-admin-label",children:"Full Description"}),f.jsx("textarea",{className:"nxus-admin-textarea",name:"fullDescription",value:i.fullDescription,onChange:A,placeholder:"Expanded details shown when card is clicked",required:!0})]}),f.jsxs("label",{className:"nxus-admin-field",children:[f.jsx("span",{className:"nxus-admin-label",children:"Form Link"}),f.jsx("input",{className:"nxus-admin-input",name:"formLink",value:i.formLink,onChange:A,placeholder:"https://forms.google.com/...",required:!0})]}),f.jsx("button",{className:"nxus-admin-submit",type:"submit",disabled:o,children:o?"Saving...":u?"Update Event →":"Add Event →"})]})]}),f.jsxs("section",{className:"nxus-admin-list-section",children:[f.jsxs("h2",{className:"nxus-admin-section-title",style:{color:"#FFFFFF",fontFamily:"var(--display-font)",fontSize:"1.8rem",letterSpacing:"0.04em",textTransform:"uppercase",margin:0},children:["Existing Events (",n.length,")"]}),n.length===0?f.jsx("div",{className:"nxus-admin-empty",children:"No events yet"}):n.map(V=>f.jsxs("div",{className:"nxus-admin-event-row",children:[f.jsxs("div",{className:"nxus-admin-event-info",children:[f.jsx("h3",{children:V.title}),f.jsx("p",{children:V.shortDescription}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",marginTop:"0.35rem",color:"rgba(240, 237, 232, 0.38)",fontFamily:"var(--mono-font)",fontSize:"0.66rem",letterSpacing:"0.06em",textTransform:"uppercase"},children:[f.jsx("span",{children:V.date}),f.jsx("span",{children:"\\u00b7"}),f.jsx("span",{children:V.location})]}),f.jsxs("div",{className:"nxus-admin-event-link-row",children:[f.jsx("span",{className:"nxus-admin-event-link-label",children:"Form Link:"}),p===V.id?f.jsxs(f.Fragment,{children:[f.jsx("input",{className:"nxus-admin-link-edit-input",value:g,onChange:F=>w(F.target.value),autoFocus:!0,onKeyDown:F=>{F.key==="Enter"&&k(V.id),F.key==="Escape"&&m(null)}}),f.jsx("button",{className:"nxus-admin-link-save",onClick:()=>k(V.id),children:"Save"}),f.jsx("button",{className:"nxus-admin-link-cancel",onClick:()=>m(null),children:"Cancel"})]}):f.jsx("span",{className:"nxus-admin-event-link-value",title:"Click to edit",onClick:()=>_(V.id,V.formLink),children:V.formLink||"No link set"})]})]}),f.jsxs("div",{className:"nxus-admin-event-actions",children:[f.jsx("button",{className:"nxus-admin-edit",onClick:()=>N(V),children:"Edit"}),f.jsx("button",{className:"nxus-admin-delete",onClick:()=>I(V.id),children:"Delete"})]})]},V.id))]})]})]})}function HR(){const[t,e]=L.useState(!1),[n,r]=L.useState(null),[i,s]=L.useState(!1),[o,l]=L.useState(!1);L.useEffect(()=>{if(typeof window>"u")return;const p=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://");let m=!1;try{m=localStorage.getItem("installDismissed")==="true"}catch{console.warn("localStorage is disabled or restricted")}if(p||m)return;const g=window.navigator.userAgent.toLowerCase(),w=/iphone|ipad|ipod/.test(g),A=w&&/safari/.test(g)&&!/crios|fxios/.test(g),R=/android/.test(g);s(w&&A),l(R);const N=I=>{I.preventDefault(),r(I),!m&&!p&&R&&setTimeout(()=>e(!0),3e3)};return window.addEventListener("beforeinstallprompt",N),w&&A&&!m&&!p&&setTimeout(()=>e(!0),3e3),()=>{window.removeEventListener("beforeinstallprompt",N)}},[]);const u=()=>{e(!1);try{localStorage.setItem("installDismissed","true")}catch{}},d=async()=>{if(n){n.prompt();const{outcome:p}=await n.userChoice;if(p==="accepted"){e(!1);try{localStorage.setItem("installDismissed","true")}catch{}}r(null)}};return!t||!i&&!o?null:f.jsxs(f.Fragment,{children:[f.jsx("div",{style:qR,onClick:u}),f.jsxs("div",{style:KR,children:[f.jsx("button",{style:GR,onClick:u,children:"×"}),f.jsxs("div",{style:QR,children:[f.jsx("img",{src:"/assets/nxus_logo_icon.svg",alt:"NXUS App Icon",style:YR}),f.jsx("h3",{style:XR,children:"Add NXUS to Home Screen"}),f.jsx("p",{style:JR,children:"Get the full app experience"})]}),i&&f.jsxs("div",{style:ZR,children:["Tap the Share button"," ",f.jsxs("svg",{style:Uy,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),f.jsx("polyline",{points:"16 6 12 2 8 6"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})," ","below, then select ",f.jsx("br",{}),f.jsx("strong",{children:"'Add to Home Screen'"})," ",f.jsxs("svg",{style:Uy,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),f.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),f.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})]}),o&&f.jsx("button",{style:eP,onClick:d,children:"Install App"})]})]})}const qR={position:"fixed",bottom:0,left:0,width:"100vw",height:"100vh",background:"rgba(0, 0, 0, 0.8)",zIndex:1e4,animation:"fadeIn 0.3s ease"},KR={position:"fixed",bottom:0,left:0,width:"100vw",background:"#0a0a0a",borderTop:"1px solid #E8001C",borderRadius:"16px 16px 0 0",padding:"1.5rem 1.2rem",display:"flex",flexDirection:"column",gap:"0.8rem",zIndex:10001,boxShadow:"0 -5px 30px rgba(232, 0, 28, 0.1)",textAlign:"center",boxSizing:"border-box",animation:"slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1)"},GR={position:"absolute",top:"0.8rem",right:"1rem",background:"transparent",border:"none",color:"rgba(232, 0, 28, 0.5)",fontSize:"1.8rem",cursor:"pointer",lineHeight:1,padding:0,fontWeight:300},QR={display:"flex",flexDirection:"column",alignItems:"center",gap:"0.6rem"},YR={width:"45px",height:"45px",borderRadius:"10px",objectFit:"contain",border:"1px solid rgba(232, 0, 28, 0.5)",background:"#000000",padding:"4px"},XR={fontFamily:"'Bebas Neue', sans-serif",fontSize:"1.4rem",color:"#E8001C",margin:0,letterSpacing:"0.05em",textTransform:"uppercase"},JR={fontFamily:"'DM Sans', sans-serif",fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.6)",margin:0},ZR={background:"rgba(232, 0, 28, 0.05)",border:"1px solid rgba(232, 0, 28, 0.3)",padding:"0.8rem",borderRadius:"8px",fontFamily:"'DM Sans', sans-serif",fontSize:"0.85rem",color:"#ffffff",lineHeight:1.5,textAlign:"center",fontWeight:400},Uy={display:"inline-block",verticalAlign:"middle",width:"18px",height:"18px",margin:"0 4px",stroke:"#E8001C",strokeWidth:"2px"},eP={background:"#E8001C",border:"1px solid #E8001C",borderRadius:0,color:"#000000",fontFamily:"'Bebas Neue', sans-serif",fontSize:"1.1rem",letterSpacing:"0.1em",padding:"0.8rem",cursor:"pointer",width:"100%",textTransform:"uppercase"};if(typeof document<"u"){const t=document.createElement("style");t.innerHTML=`
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,document.head.appendChild(t)}function tP(){return f.jsxs("footer",{className:"nxus-site-footer",children:[f.jsx("style",{children:`
        .nxus-site-footer {
          width: 100%;
          border-top: 1px solid rgba(232, 0, 28, 0.22);
          background: #080808;
          padding: 1rem clamp(1.2rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.6rem;
          flex-wrap: wrap;
          font-family: 'Space Mono', 'IBM Plex Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          position: relative;
          z-index: 2;
        }

        .nxus-site-footer a {
          color: rgba(240, 237, 232, 0.52);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 140ms ease;
        }

        .nxus-site-footer a:hover {
          color: #E8001C;
        }

        .nxus-footer-dot {
          color: rgba(232, 0, 28, 0.4);
          user-select: none;
        }
      `}),f.jsx(Il,{to:"/privacy",children:"Privacy Policy"}),f.jsx("span",{className:"nxus-footer-dot","aria-hidden":"true",children:"·"}),f.jsx(Il,{to:"/terms",children:"Terms of Service"}),f.jsx("span",{className:"nxus-footer-dot","aria-hidden":"true",children:"·"}),f.jsx("a",{href:"mailto:prakarsh@nxus.fun",children:"Support"})]})}function nP(){const{eventId:t}=uT(),e=wr(),{user:n}=ni(),[r,i]=L.useState(null),[s,o]=L.useState(!0),[l,u]=L.useState(!1);L.useEffect(()=>{(async()=>{try{const g=Ys(Wn,"events",t),w=await bR(g);w.exists()?i({id:w.id,...w.data()}):u(!0)}catch(g){console.error("Error fetching event:",g),u(!0)}finally{o(!1)}})()},[t]);const d=()=>{e(n?"/home":"/")},p=async()=>{await mf(mr),e("/login")};return s?f.jsx("div",{className:"nxus-detail-shell",children:f.jsx("div",{className:"nxus-loading",children:"Loading event..."})}):l||!r?f.jsx("div",{className:"nxus-detail-shell",children:f.jsxs("div",{className:"nxus-error",children:[f.jsx("p",{children:"Event not found."}),f.jsx("button",{onClick:d,className:"nxus-back-btn",children:"← Back"})]})}):f.jsxs("main",{className:"nxus-detail-shell",children:[f.jsx("style",{children:`
        .nxus-detail-shell {
          min-height: 100vh;
          background: #000000;
          color: #F0EDE8;
          font-family: 'DM Sans', 'Outfit', sans-serif;
          padding: clamp(1.4rem, 4vw, 3rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        
        .nxus-detail-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.14), transparent 38vw),
            radial-gradient(circle at 80% 85%, rgba(232, 0, 28, 0.08), transparent 28vw);
          z-index: 0;
        }

        /* ── NAV ── */
        .nxus-home-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem clamp(1.2rem, 4vw, 3rem);
          background: rgba(10, 10, 10, 0.82);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(232, 0, 28, 0.18);
          width: 100%;
        }

        .nxus-home-nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nxus-home-nav-logo {
          width: 36px;
          height: auto;
        }

        .nxus-home-nav-brand {
          font-family: 'Bebas Neue', 'Barlow Condensed', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .nxus-home-nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nxus-home-nav-email {
          color: rgba(240, 237, 232, 0.52);
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nxus-home-nav-signout {
          border: 1px solid rgba(232, 0, 28, 0.42);
          border-radius: 0;
          background: transparent;
          color: #E8001C;
          padding: 0.45rem 0.9rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 160ms ease, transform 160ms ease;
        }

        .nxus-home-nav-signout:hover {
          background: rgba(232, 0, 28, 0.08);
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .nxus-home-nav-email {
            display: none;
          }
        }

        .nxus-detail-content {
          position: relative;
          z-index: 1;
          width: min(100%, 700px);
          animation: nxusFadeUp 500ms ease both;
          background: #0A0A0A;
          border: 1px solid rgba(232, 0, 28, 0.2);
          border-left: 3px solid #E8001C;
          padding: 2rem;
        }

        @keyframes nxusFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nxus-back-btn {
          background: transparent;
          border: none;
          color: rgba(240, 237, 232, 0.6);
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
          cursor: pointer;
          margin-bottom: 2rem;
          padding: 0;
          transition: color 150ms;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nxus-back-btn:hover {
          color: #E8001C;
        }

        .nxus-event-title-detail {
          margin: 0;
          color: #FFFFFF;
          font-family: 'Bebas Neue', 'Barlow Condensed', sans-serif;
          font-size: clamp(3rem, 7vw, 4.2rem);
          line-height: 0.9;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .nxus-event-meta-detail {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .nxus-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(240, 237, 232, 0.6);
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .nxus-meta-icon {
          color: #E8001C;
        }

        .nxus-event-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(240, 237, 232, 0.8);
          margin-bottom: 3rem;
          white-space: pre-wrap;
        }

        .nxus-join-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: #E8001C;
          border: 1px solid #E8001C;
          color: #000000;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 1.2rem;
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease;
          text-decoration: none;
        }

        .nxus-join-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 24px rgba(232, 0, 28, 0.4);
        }

        .nxus-loading, .nxus-error {
          position: relative;
          z-index: 1;
          font-family: 'Space Mono', monospace;
          color: rgba(240, 237, 232, 0.5);
          text-transform: uppercase;
          margin-top: 5rem;
        }
      `}),f.jsxs("nav",{className:"nxus-home-nav",children:[f.jsxs("div",{className:"nxus-home-nav-left",style:{cursor:"pointer"},onClick:()=>e("/home"),children:[f.jsx("img",{className:"nxus-home-nav-logo",src:"/assets/nxus_logo_icon.svg",alt:"NXUS"}),f.jsx("span",{className:"nxus-home-nav-brand",children:"NXUS"})]}),n&&f.jsxs("div",{className:"nxus-home-nav-right",children:[f.jsx("span",{className:"nxus-home-nav-email",children:n.email}),f.jsx("button",{className:"nxus-home-nav-signout",onClick:p,children:"Sign Out"})]})]}),f.jsxs("div",{className:"nxus-detail-content",style:{marginTop:"2rem"},children:[f.jsx("button",{className:"nxus-back-btn",onClick:d,children:"← Back"}),f.jsx("h1",{className:"nxus-event-title-detail",children:r.title}),f.jsxs("div",{className:"nxus-event-meta-detail",children:[f.jsxs("span",{className:"nxus-meta-item",children:[f.jsx("span",{className:"nxus-meta-icon",children:"📅"}),r.date]}),f.jsxs("span",{className:"nxus-meta-item",children:[f.jsx("span",{className:"nxus-meta-icon",children:"📍"}),r.location]})]}),f.jsx("div",{className:"nxus-event-desc",children:r.fullDescription||r.shortDescription}),f.jsx("a",{href:r.formLink,target:"_blank",rel:"noopener noreferrer",className:"nxus-join-btn",children:"Join Now →"})]})]})}function rP(){return f.jsxs("main",{className:"nxus-legal-shell",children:[f.jsx("style",{children:`
        .nxus-legal-shell {
          min-height: 100vh;
          background: #0A0A0A;
          color: #F0EDE8;
          font-family: 'DM Sans', 'Outfit', sans-serif;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.2rem, 4vw, 3rem);
          position: relative;
        }

        .nxus-legal-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.12), transparent 40vw),
            #0A0A0A;
        }

        .nxus-legal-wrap {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }

        .nxus-legal-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid rgba(240, 237, 232, 0.15);
          background: transparent;
          color: rgba(240, 237, 232, 0.7);
          padding: 0.5rem 0.9rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 140ms ease, color 140ms ease;
          margin-bottom: 2rem;
        }

        .nxus-legal-back:hover {
          background: rgba(240, 237, 232, 0.06);
          color: #F0EDE8;
        }

        .nxus-legal-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #E8001C;
          margin-bottom: 0.6rem;
        }

        .nxus-legal-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.6rem, 6vw, 4rem);
          line-height: 0.92;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 0.5rem;
        }

        .nxus-legal-updated {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          color: rgba(240, 237, 232, 0.4);
          letter-spacing: 0.08em;
          margin-bottom: 2.4rem;
        }

        .nxus-legal-divider {
          height: 1px;
          background: linear-gradient(90deg, #E8001C, rgba(240, 237, 232, 0.06));
          margin: 0 0 2.4rem;
          opacity: 0.6;
        }

        .nxus-legal-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          margin: 2rem 0 0.6rem;
          border-left: 3px solid #E8001C;
          padding-left: 0.7rem;
        }

        .nxus-legal-body {
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.7;
          margin: 0 0 1rem;
        }

        .nxus-legal-body strong {
          color: rgba(240, 237, 232, 0.9);
        }

        .nxus-legal-list {
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.7;
          padding-left: 1.2rem;
          margin: 0 0 1rem;
        }

        .nxus-legal-list li {
          margin-bottom: 0.35rem;
        }

        .nxus-legal-contact {
          margin-top: 2rem;
          padding: 1rem;
          border: 1px solid rgba(232, 0, 28, 0.3);
          background: rgba(232, 0, 28, 0.04);
        }

        .nxus-legal-contact a {
          color: #E8001C;
          text-decoration: none;
        }

        .nxus-legal-contact a:hover {
          text-decoration: underline;
        }
      `}),f.jsxs("div",{className:"nxus-legal-wrap",children:[f.jsx("a",{href:"/",className:"nxus-legal-back",children:"← Back"}),f.jsx("div",{className:"nxus-legal-eyebrow",children:"Legal"}),f.jsx("h1",{className:"nxus-legal-title",children:"Privacy Policy"}),f.jsx("div",{className:"nxus-legal-updated",children:"Last updated: April 2026"}),f.jsx("div",{className:"nxus-legal-divider"}),f.jsxs("p",{className:"nxus-legal-body",children:["This Privacy Policy describes how ",f.jsx("strong",{children:"NXUS"}),' ("we", "our", or "the Platform") collects, uses, and protects information from users ("you") of the NXUS mobile web application — a social coordination platform designed for university students in Dubai.']}),f.jsx("h2",{className:"nxus-legal-section-title",children:"1. Information We Collect"}),f.jsx("p",{className:"nxus-legal-body",children:"When you create an account or use NXUS, we may collect:"}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsxs("li",{children:[f.jsx("strong",{children:"Account information:"})," name, email address, and university affiliation provided during signup."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"User-generated content:"})," activity posts, event descriptions, and any text you submit through the platform."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Usage data:"})," pages visited, features used, interaction timestamps, and device/browser information collected automatically through analytics."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Authentication data:"})," login credentials managed securely through Firebase Authentication. We do not store passwords in plaintext."]})]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"2. How We Use Your Information"}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsx("li",{children:"To operate and maintain the NXUS platform and your account."}),f.jsx("li",{children:"To display activity listings and facilitate connections between users who want to participate."}),f.jsx("li",{children:"To send important service-related communications (e.g., account verification, security alerts)."}),f.jsx("li",{children:"To improve the platform through aggregated, anonymized usage analytics."}),f.jsx("li",{children:"To enforce our Terms of Service and protect the safety of our community."})]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"3. Data Sharing & Third Parties"}),f.jsxs("p",{className:"nxus-legal-body",children:["We do ",f.jsx("strong",{children:"not"})," sell your personal information to third parties. We may share limited data with:"]}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsxs("li",{children:[f.jsx("strong",{children:"Firebase (Google):"})," for authentication, database hosting, and analytics."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Google Analytics:"})," for anonymized usage metrics."]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Law enforcement:"})," if required by law or to protect the safety of users."]})]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"4. Data Storage & Security"}),f.jsx("p",{className:"nxus-legal-body",children:"Your data is stored on Google Cloud infrastructure through Firebase. We implement reasonable security measures including encrypted connections (HTTPS), secure authentication flows, and access-controlled databases. However, no method of electronic transmission or storage is 100% secure."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"5. Your Rights"}),f.jsx("p",{className:"nxus-legal-body",children:"You have the right to:"}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsx("li",{children:"Access the personal data we hold about you."}),f.jsx("li",{children:"Request correction of inaccurate information."}),f.jsx("li",{children:"Request deletion of your account and associated data."}),f.jsx("li",{children:"Withdraw consent for optional data processing at any time."})]}),f.jsx("p",{className:"nxus-legal-body",children:"To exercise any of these rights, contact us at the email listed below."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"6. Cookies & Local Storage"}),f.jsx("p",{className:"nxus-legal-body",children:"NXUS uses browser local storage and session storage to maintain your authentication state and user preferences. We use Google Analytics cookies for anonymized traffic analysis. No advertising cookies are used."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"7. Children's Privacy"}),f.jsx("p",{className:"nxus-legal-body",children:"NXUS is intended for users aged 18 and older who are enrolled at accredited universities. We do not knowingly collect information from anyone under 18. If we become aware of such collection, we will promptly delete the data."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"8. Changes to This Policy"}),f.jsx("p",{className:"nxus-legal-body",children:'We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of NXUS after changes constitutes acceptance of the updated policy.'}),f.jsx("div",{className:"nxus-legal-contact",children:f.jsxs("p",{className:"nxus-legal-body",style:{margin:0},children:[f.jsx("strong",{children:"Questions or concerns?"})," Reach us at"," ",f.jsx("a",{href:"mailto:prakarsh@nxus.fun",children:"prakarsh@nxus.fun"})]})})]})]})}function iP(){return f.jsxs("main",{className:"nxus-legal-shell",children:[f.jsx("style",{children:`
        .nxus-legal-shell {
          min-height: 100vh;
          background: #0A0A0A;
          color: #F0EDE8;
          font-family: 'DM Sans', 'Outfit', sans-serif;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.2rem, 4vw, 3rem);
          position: relative;
        }

        .nxus-legal-shell::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 10%, rgba(232, 0, 28, 0.12), transparent 40vw),
            #0A0A0A;
        }

        .nxus-legal-wrap {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
        }

        .nxus-legal-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid rgba(240, 237, 232, 0.15);
          background: transparent;
          color: rgba(240, 237, 232, 0.7);
          padding: 0.5rem 0.9rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 140ms ease, color 140ms ease;
          margin-bottom: 2rem;
        }

        .nxus-legal-back:hover {
          background: rgba(240, 237, 232, 0.06);
          color: #F0EDE8;
        }

        .nxus-legal-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #E8001C;
          margin-bottom: 0.6rem;
        }

        .nxus-legal-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.6rem, 6vw, 4rem);
          line-height: 0.92;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 0.5rem;
        }

        .nxus-legal-updated {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          color: rgba(240, 237, 232, 0.4);
          letter-spacing: 0.08em;
          margin-bottom: 2.4rem;
        }

        .nxus-legal-divider {
          height: 1px;
          background: linear-gradient(90deg, #E8001C, rgba(240, 237, 232, 0.06));
          margin: 0 0 2.4rem;
          opacity: 0.6;
        }

        .nxus-legal-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          margin: 2rem 0 0.6rem;
          border-left: 3px solid #E8001C;
          padding-left: 0.7rem;
        }

        .nxus-legal-body {
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.7;
          margin: 0 0 1rem;
        }

        .nxus-legal-body strong {
          color: rgba(240, 237, 232, 0.9);
        }

        .nxus-legal-list {
          color: rgba(240, 237, 232, 0.72);
          font-size: 0.92rem;
          line-height: 1.7;
          padding-left: 1.2rem;
          margin: 0 0 1rem;
        }

        .nxus-legal-list li {
          margin-bottom: 0.35rem;
        }

        .nxus-legal-contact {
          margin-top: 2rem;
          padding: 1rem;
          border: 1px solid rgba(232, 0, 28, 0.3);
          background: rgba(232, 0, 28, 0.04);
        }

        .nxus-legal-contact a {
          color: #E8001C;
          text-decoration: none;
        }

        .nxus-legal-contact a:hover {
          text-decoration: underline;
        }
      `}),f.jsxs("div",{className:"nxus-legal-wrap",children:[f.jsx("a",{href:"/",className:"nxus-legal-back",children:"← Back"}),f.jsx("div",{className:"nxus-legal-eyebrow",children:"Legal"}),f.jsx("h1",{className:"nxus-legal-title",children:"Terms of Service"}),f.jsx("div",{className:"nxus-legal-updated",children:"Last updated: April 2026"}),f.jsx("div",{className:"nxus-legal-divider"}),f.jsxs("p",{className:"nxus-legal-body",children:["Welcome to ",f.jsx("strong",{children:"NXUS"}),'. By accessing or using the NXUS platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.']}),f.jsx("h2",{className:"nxus-legal-section-title",children:"1. Eligibility"}),f.jsx("p",{className:"nxus-legal-body",children:"NXUS is available exclusively to individuals who meet the following criteria:"}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsxs("li",{children:["You must be at least ",f.jsx("strong",{children:"18 years of age"}),"."]}),f.jsx("li",{children:"You must be a currently enrolled student at an accredited university or higher education institution, or have recently graduated (within the last 12 months)."}),f.jsx("li",{children:"You must provide a valid university email address for account verification when required."})]}),f.jsx("p",{className:"nxus-legal-body",children:"By registering, you represent and warrant that you meet these eligibility requirements."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"2. Account Responsibilities"}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsx("li",{children:"You are responsible for maintaining the confidentiality of your login credentials."}),f.jsx("li",{children:"You are responsible for all activity that occurs under your account."}),f.jsx("li",{children:"You agree to provide accurate, current, and complete information during registration."}),f.jsx("li",{children:"You must notify us immediately of any unauthorized use of your account."})]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"3. Acceptable Use"}),f.jsxs("p",{className:"nxus-legal-body",children:["When using NXUS, you agree ",f.jsx("strong",{children:"not"})," to:"]}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsx("li",{children:"Post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable."}),f.jsx("li",{children:"Impersonate any person or entity, or misrepresent your university affiliation."}),f.jsx("li",{children:"Use the platform to promote commercial products, services, or spam."}),f.jsx("li",{children:"Attempt to gain unauthorized access to other users' accounts or platform infrastructure."}),f.jsx("li",{children:"Use automated tools, bots, or scrapers to access the Service."}),f.jsx("li",{children:"Post events or activities that involve illegal substances, underage drinking, or otherwise violate local laws in the UAE."})]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"4. User Content"}),f.jsx("p",{className:"nxus-legal-body",children:"You retain ownership of the content you post on NXUS. However, by posting content, you grant NXUS a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content solely for the purpose of operating and promoting the platform."}),f.jsx("p",{className:"nxus-legal-body",children:"We reserve the right to remove any content that violates these Terms or that we deem inappropriate, without prior notice."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"5. Event Participation & Safety"}),f.jsxs("p",{className:"nxus-legal-body",children:["NXUS is a coordination platform — we facilitate connections between users who want to participate in activities together. ",f.jsx("strong",{children:"NXUS does not organize, host, or supervise any events."})]}),f.jsxs("ul",{className:"nxus-legal-list",children:[f.jsx("li",{children:"You participate in any activity at your own risk."}),f.jsx("li",{children:"You are responsible for your own safety and for exercising reasonable judgement when meeting other users."}),f.jsx("li",{children:"NXUS is not liable for any injury, loss, damage, or dispute arising from in-person interactions or events coordinated through the platform."})]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"6. Limitation of Liability"}),f.jsx("p",{className:"nxus-legal-body",children:"To the maximum extent permitted by applicable law, NXUS and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, personal injury, or property damage, arising out of or relating to your use of the Service."}),f.jsxs("p",{className:"nxus-legal-body",children:["The Service is provided ",f.jsx("strong",{children:'"as is"'})," and ",f.jsx("strong",{children:'"as available"'})," without warranties of any kind, either express or implied."]}),f.jsx("h2",{className:"nxus-legal-section-title",children:"7. Termination"}),f.jsx("p",{className:"nxus-legal-body",children:"We reserve the right to suspend or terminate your account at any time, for any reason, including violation of these Terms. Upon termination, your right to use the Service ceases immediately, and we may delete your data in accordance with our Privacy Policy."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"8. Governing Law"}),f.jsx("p",{className:"nxus-legal-body",children:"These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE."}),f.jsx("h2",{className:"nxus-legal-section-title",children:"9. Changes to Terms"}),f.jsx("p",{className:"nxus-legal-body",children:"We may revise these Terms at any time by updating this page. Your continued use of NXUS following the publication of revised Terms constitutes your acceptance of those changes."}),f.jsx("div",{className:"nxus-legal-contact",children:f.jsxs("p",{className:"nxus-legal-body",style:{margin:0},children:[f.jsx("strong",{children:"Questions about these Terms?"})," Contact us at"," ",f.jsx("a",{href:"mailto:prakarsh@nxus.fun",children:"prakarsh@nxus.fun"})]})})]})]})}const sP="prakarshthakur1@gmail.com";let oP=class extends L.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){console.error("[NXUS] ErrorBoundary caught:",e),"serviceWorker"in navigator?navigator.serviceWorker.getRegistrations().then(n=>{n.forEach(r=>r.unregister()),setTimeout(()=>window.location.reload(!0),300)}):setTimeout(()=>window.location.reload(!0),300)}render(){return this.state.hasError?f.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0A0A0A",color:"#F0EDE8",fontFamily:"monospace"},children:"Reloading…"}):this.props.children}};function Sx(){return typeof window>"u"?!1:window.sessionStorage.getItem("earlyAccess")==="true"}function aP(){return Sx()?window.sessionStorage.getItem("redirectAfterLogin")?f.jsx(cr,{to:"/login",replace:!0}):f.jsx(FR,{}):f.jsx(cr,{to:"/",replace:!0})}function lP({children:t}){const{user:e,loading:n}=ni();return n?f.jsx(rp,{}):e?t:f.jsx(cr,{to:"/login",replace:!0})}function uP({children:t}){const{user:e,loading:n}=ni();return n?f.jsx(rp,{}):e?e.email!==sP?f.jsx(cr,{to:"/home",replace:!0}):t:f.jsx(cr,{to:"/login",replace:!0})}function cP({children:t}){const{user:e,loading:n}=ni();return n?f.jsx(rp,{}):e?t:(window.sessionStorage.setItem("redirectAfterLogin",window.location.pathname),Sx()?f.jsx(cr,{to:"/login",replace:!0}):f.jsx(cr,{to:"/",replace:!0}))}function rp(){return f.jsxs("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:"#0A0A0A"},children:[f.jsx("div",{style:{color:"rgba(240, 237, 232, 0.42)",fontFamily:"'Space Mono', monospace",fontSize:"0.78rem",letterSpacing:"0.18em",textTransform:"uppercase",animation:"pulse 1.5s ease-in-out infinite"},children:"Loading..."}),f.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `})]})}function dP(){return f.jsx(oP,{children:f.jsx(NT,{children:f.jsxs(DR,{children:[f.jsx(HR,{}),f.jsxs(ST,{children:[f.jsx(Kt,{path:"/",element:f.jsx(jR,{})}),f.jsx(Kt,{path:"/signup",element:f.jsx(aP,{})}),f.jsx(Kt,{path:"/login",element:f.jsx(UR,{})}),f.jsx(Kt,{path:"/home",element:f.jsx(lP,{children:f.jsx($R,{})})}),f.jsx(Kt,{path:"/admin",element:f.jsx(uP,{children:f.jsx(WR,{})})}),f.jsx(Kt,{path:"/event/:eventId",element:f.jsx(cP,{children:f.jsx(nP,{})})}),f.jsx(Kt,{path:"/privacy",element:f.jsx(rP,{})}),f.jsx(Kt,{path:"/terms",element:f.jsx(iP,{})}),f.jsx(Kt,{path:"*",element:f.jsx(cr,{to:"/",replace:!0})})]}),f.jsx(tP,{})]})})})}const hP="modulepreload",fP=function(t){return"/"+t},zy={},pP=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=fP(u),u in zy)return;zy[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":hP,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,w)=>{m.addEventListener("load",g),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function mP(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let l,u;const d=async(m=!0)=>{await u};async function p(){if("serviceWorker"in navigator){if(l=await pP(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/sw.js",{scope:"/",type:"classic"})).catch(m=>{o==null||o(m)}),!l)return;l.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),l.addEventListener("installed",m=>{m.isUpdate||r==null||r()}),l.register({immediate:e}).then(m=>{s?s("/sw.js",m):i==null||i(m)}).catch(m=>{o==null||o(m)})}}return u=p(),d}mP({immediate:!0});const kx=document.createElement("style");kx.textContent=`
  :root {
    --nxus-red: #E8001C;
    --nxus-black: #0A0A0A;
    --nxus-panel: #111111;
    --nxus-cream: #F0EDE8;
    --nxus-muted: rgba(240, 237, 232, 0.68);
    --nxus-dim: rgba(240, 237, 232, 0.42);
    --nxus-hairline: rgba(232, 0, 28, 0.38);
    --display-font: 'Bebas Neue', 'Barlow Condensed', sans-serif;
    --body-font: 'DM Sans', 'Outfit', sans-serif;
    --mono-font: 'Space Mono', 'IBM Plex Mono', monospace;
  }
  @font-face {
    font-family: 'grovant';
    src: url('/fonts/grovant.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0A0A0A; color: #ffffff; font-family: 'DM Sans', sans-serif; min-height: 100vh; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; font-family: inherit; }
  input, textarea, select { font-family: inherit; }
  ::placeholder { color: rgba(240,237,232,0.32); }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
`;document.head.appendChild(kx);class gP extends oh.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("React Crash:",e,n)}render(){var e,n;return this.state.hasError?f.jsxs("div",{style:{padding:"2rem",color:"red",background:"black",minHeight:"100vh",fontFamily:"monospace"},children:[f.jsx("h2",{children:"Oops, the app crashed!"}),f.jsx("pre",{children:(e=this.state.error)==null?void 0:e.toString()}),f.jsx("pre",{children:(n=this.state.error)==null?void 0:n.stack})]}):this.props.children}}Vc.createRoot(document.getElementById("root")).render(f.jsx(oh.StrictMode,{children:f.jsx(gP,{children:f.jsx(dP,{})})}));
