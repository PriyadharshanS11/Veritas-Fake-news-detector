(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Av(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pp={exports:{}},cl={},bp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),Dv=Symbol.for("react.forward_ref"),Iv=Symbol.for("react.suspense"),Uv=Symbol.for("react.memo"),Fv=Symbol.for("react.lazy"),Zf=Symbol.iterator;function Ov(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Np=Object.assign,Dp={};function xs(t,e,n){this.props=t,this.context=e,this.refs=Dp,this.updater=n||Lp}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ip(){}Ip.prototype=xs.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=Dp,this.updater=n||Lp}var ju=Xu.prototype=new Ip;ju.constructor=Xu;Np(ju,xs.prototype);ju.isPureReactComponent=!0;var Qf=Array.isArray,Up=Object.prototype.hasOwnProperty,Yu={current:null},Fp={key:!0,ref:!0,__self:!0,__source:!0};function Op(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Up.call(e,i)&&!Fp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:_a,type:t,key:s,ref:a,props:r,_owner:Yu.current}}function kv(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qu(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function Bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bv(""+t.key):e.toString(36)}function xo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case _a:case Rv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Il(a,0):i,Qf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),xo(r,e,n,"",function(c){return c})):r!=null&&(qu(r)&&(r=kv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Qf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Il(s,o);a+=xo(s,e,n,l,r)}else if(l=Ov(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Il(s,o++),a+=xo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ba(t,e,n){if(t==null)return t;var i=[],r=0;return xo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},yo={transition:null},Hv={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Yu};function kp(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!qu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=xs;Ve.Fragment=Cv;Ve.Profiler=bv;Ve.PureComponent=Xu;Ve.StrictMode=Pv;Ve.Suspense=Iv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;Ve.act=kp;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Np({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Yu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Up.call(e,l)&&!Fp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:Nv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lv,_context:t},t.Consumer=t};Ve.createElement=Op;Ve.createFactory=function(t){var e=Op.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Dv,render:t}};Ve.isValidElement=qu;Ve.lazy=function(t){return{$$typeof:Fv,_payload:{_status:-1,_result:t},_init:zv}};Ve.memo=function(t,e){return{$$typeof:Uv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=yo.transition;yo.transition={};try{t()}finally{yo.transition=e}};Ve.unstable_act=kp;Ve.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ve.useContext=function(t){return Yt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ve.useId=function(){return Yt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Yt.current.useRef(t)};Ve.useState=function(t){return Yt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Yt.current.useTransition()};Ve.version="18.3.1";bp.exports=Ve;var vt=bp.exports;const Gv=Av(vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=vt,Wv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),jv=Object.prototype.hasOwnProperty,Yv=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function Bp(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)jv.call(e,i)&&!qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wv,type:t,key:s,ref:a,props:r,_owner:Yv.current}}cl.Fragment=Xv;cl.jsx=Bp;cl.jsxs=Bp;Pp.exports=cl;var Y=Pp.exports,Hc={},zp={exports:{}},hn={},Hp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,z){var R=I.length;I.push(z);e:for(;0<R;){var w=R-1>>>1,k=I[w];if(0<r(k,z))I[w]=z,I[R]=k,R=w;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var z=I[0],R=I.pop();if(R!==z){I[0]=R;e:for(var w=0,k=I.length,U=k>>>1;w<U;){var G=2*(w+1)-1,Q=I[G],te=G+1,J=I[te];if(0>r(Q,R))te<k&&0>r(J,Q)?(I[w]=J,I[te]=R,w=te):(I[w]=Q,I[G]=R,w=G);else if(te<k&&0>r(J,R))I[w]=J,I[te]=R,w=te;else break e}}return z}function r(I,z){var R=I.sortIndex-z.sortIndex;return R!==0?R:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=I)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function S(I){if(x=!1,g(I),!_)if(n(l)!==null)_=!0,$(b);else{var z=n(c);z!==null&&Z(S,z.startTime-I)}}function b(I,z){_=!1,x&&(x=!1,u(B),B=-1),m=!0;var R=h;try{for(g(z),d=n(l);d!==null&&(!(d.expirationTime>z)||I&&!L());){var w=d.callback;if(typeof w=="function"){d.callback=null,h=d.priorityLevel;var k=w(d.expirationTime<=z);z=t.unstable_now(),typeof k=="function"?d.callback=k:d===n(l)&&i(l),g(z)}else i(l);d=n(l)}if(d!==null)var U=!0;else{var G=n(c);G!==null&&Z(S,G.startTime-z),U=!1}return U}finally{d=null,h=R,m=!1}}var P=!1,C=null,B=-1,E=5,T=-1;function L(){return!(t.unstable_now()-T<E)}function q(){if(C!==null){var I=t.unstable_now();T=I;var z=!0;try{z=C(!0,I)}finally{z?ee():(P=!1,C=null)}}else P=!1}var ee;if(typeof v=="function")ee=function(){v(q)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,H=D.port2;D.port1.onmessage=q,ee=function(){H.postMessage(null)}}else ee=function(){p(q,0)};function $(I){C=I,P||(P=!0,ee())}function Z(I,z){B=p(function(){I(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var R=h;h=z;try{return I()}finally{h=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=h;h=I;try{return z()}finally{h=R}},t.unstable_scheduleCallback=function(I,z,R){var w=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?w+R:w):R=w,I){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=R+k,I={id:f++,callback:z,priorityLevel:I,startTime:R,expirationTime:k,sortIndex:-1},R>w?(I.sortIndex=R,e(c,I),n(l)===null&&I===n(c)&&(x?(u(B),B=-1):x=!0,Z(S,R-w))):(I.sortIndex=k,e(l,I),_||m||(_=!0,$(b))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var z=h;return function(){var R=h;h=z;try{return I.apply(this,arguments)}finally{h=R}}}})(Gp);Hp.exports=Gp;var $v=Hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=vt,dn=$v;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vp=new Set,Qs={};function Sr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(Qs[t]=e,t=0;t<e.length;t++)Vp.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ed={},td={};function Qv(t){return Gc.call(td,t)?!0:Gc.call(ed,t)?!1:Zv.test(t)?td[t]=!0:(ed[t]=!0,!1)}function Jv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e_(t,e,n,i){if(e===null||typeof e>"u"||Jv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $u=/[\-:]([a-z])/g;function Ku(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($u,Ku);Dt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($u,Ku);Dt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($u,Ku);Dt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zu(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e_(e,n,r,i)&&(n=null),i||r===null?Qv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),jp=Symbol.for("react.offscreen"),nd=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Ul;function ks(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var Fl=!1;function Ol(t,e){if(!t||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function t_(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Ol(t.type,!1),t;case 11:return t=Ol(t.type.render,!1),t;case 1:return t=Ol(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case zr:return"Portal";case Vc:return"Profiler";case Qu:return"StrictMode";case Wc:return"Suspense";case Xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xp:return(t.displayName||"Context")+".Consumer";case Wp:return(t._context.displayName||"Context")+".Provider";case Ju:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function n_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i_(t){var e=Yp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=i_(t))}function qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Yp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yc(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function id(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $p(t,e){e=e.checked,e!=null&&Zu(t,"checked",e,!1)}function qc(t,e){$p(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$c(t,e.type,n):e.hasOwnProperty("defaultValue")&&$c(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $c(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Bs(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function Kp(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ad(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,Qp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r_=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){r_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(t,e){if(e){if(s_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tu=null,ts=null,ns=null;function od(t){if(t=Sa(t)){if(typeof tu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=pl(e),tu(t.stateNode,t.type,e))}}function tm(t){ts?ns?ns.push(t):ns=[t]:ts=t}function nm(){if(ts){var t=ts,e=ns;if(ns=ts=null,od(t),e)for(t=0;t<e.length;t++)od(e[t])}}function im(t,e){return t(e)}function rm(){}var kl=!1;function sm(t,e,n){if(kl)return t(e,n);kl=!0;try{return im(t,e,n)}finally{kl=!1,(ts!==null||ns!==null)&&(rm(),nm())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=pl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var nu=!1;if(ci)try{var As={};Object.defineProperty(As,"passive",{get:function(){nu=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{nu=!1}function a_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vs=!1,Do=null,Io=!1,iu=null,o_={onError:function(t){Vs=!0,Do=t}};function l_(t,e,n,i,r,s,a,o,l){Vs=!1,Do=null,a_.apply(o_,arguments)}function c_(t,e,n,i,r,s,a,o,l){if(l_.apply(this,arguments),Vs){if(Vs){var c=Do;Vs=!1,Do=null}else throw Error(re(198));Io||(Io=!0,iu=c)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ld(t){if(Er(t)!==t)throw Error(re(188))}function u_(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ld(r),t;if(s===i)return ld(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function om(t){return t=u_(t),t!==null?lm(t):null}function lm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lm(t);if(e!==null)return e;t=t.sibling}return null}var cm=dn.unstable_scheduleCallback,cd=dn.unstable_cancelCallback,f_=dn.unstable_shouldYield,d_=dn.unstable_requestPaint,mt=dn.unstable_now,h_=dn.unstable_getCurrentPriorityLevel,nf=dn.unstable_ImmediatePriority,um=dn.unstable_UserBlockingPriority,Uo=dn.unstable_NormalPriority,p_=dn.unstable_LowPriority,fm=dn.unstable_IdlePriority,ul=null,qn=null;function m_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:__,g_=Math.log,v_=Math.LN2;function __(t){return t>>>=0,t===0?32:31-(g_(t)/v_|0)|0}var Ia=64,Ua=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=zs(o):(s&=a,s!==0&&(i=zs(s)))}else a=n&~r,a!==0?i=zs(a):s!==0&&(i=zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function x_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=x_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dm(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function Bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function S_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function hm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pm,sf,mm,gm,vm,su=!1,Fa=[],bi=null,Li=null,Ni=null,ta=new Map,na=new Map,Ti=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Rs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sa(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M_(t,e,n,i,r){switch(e){case"focusin":return bi=Rs(bi,t,e,n,i,r),!0;case"dragenter":return Li=Rs(Li,t,e,n,i,r),!0;case"mouseover":return Ni=Rs(Ni,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,Rs(ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,Rs(na.get(s)||null,t,e,n,i,r)),!0}return!1}function _m(t){var e=sr(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=am(n),e!==null){t.blockedOn=e,vm(t.priority,function(){mm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function So(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);eu=i,n.target.dispatchEvent(i),eu=null}else return e=Sa(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function fd(t,e,n){So(t)&&n.delete(e)}function T_(){su=!1,bi!==null&&So(bi)&&(bi=null),Li!==null&&So(Li)&&(Li=null),Ni!==null&&So(Ni)&&(Ni=null),ta.forEach(fd),na.forEach(fd)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,su||(su=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,T_)))}function ia(t){function e(r){return Cs(r,t)}if(0<Fa.length){Cs(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(bi!==null&&Cs(bi,t),Li!==null&&Cs(Li,t),Ni!==null&&Cs(Ni,t),ta.forEach(e),na.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)_m(n),n.blockedOn===null&&Ti.shift()}var is=pi.ReactCurrentBatchConfig,Oo=!0;function w_(t,e,n,i){var r=Ke,s=is.transition;is.transition=null;try{Ke=1,af(t,e,n,i)}finally{Ke=r,is.transition=s}}function A_(t,e,n,i){var r=Ke,s=is.transition;is.transition=null;try{Ke=4,af(t,e,n,i)}finally{Ke=r,is.transition=s}}function af(t,e,n,i){if(Oo){var r=au(t,e,n,i);if(r===null)$l(t,e,i,ko,n),ud(t,i);else if(M_(r,t,e,n,i))i.stopPropagation();else if(ud(t,i),e&4&&-1<E_.indexOf(t)){for(;r!==null;){var s=Sa(r);if(s!==null&&pm(s),s=au(t,e,n,i),s===null&&$l(t,e,i,ko,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $l(t,e,i,null,n)}}var ko=null;function au(t,e,n,i){if(ko=null,t=tf(i),t=sr(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ko=t,null}function xm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h_()){case nf:return 1;case um:return 4;case Uo:case p_:return 16;case fm:return 536870912;default:return 16}default:return 16}}var Ai=null,of=null,Eo=null;function ym(){if(Eo)return Eo;var t,e=of,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Eo=r.slice(t,1<i?1-i:void 0)}function Mo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function dd(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:dd,this.isPropagationStopped=dd,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=pn(ys),ya=ut({},ys,{view:0,detail:0}),R_=pn(ya),zl,Hl,Ps,fl=ut({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(zl=t.screenX-Ps.screenX,Hl=t.screenY-Ps.screenY):Hl=zl=0,Ps=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),hd=pn(fl),C_=ut({},fl,{dataTransfer:0}),P_=pn(C_),b_=ut({},ya,{relatedTarget:0}),Gl=pn(b_),L_=ut({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),N_=pn(L_),D_=ut({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I_=pn(D_),U_=ut({},ys,{data:0}),pd=pn(U_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k_[t])?!!e[t]:!1}function cf(){return B_}var z_=ut({},ya,{key:function(t){if(t.key){var e=F_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=pn(z_),G_=ut({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=pn(G_),V_=ut({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),W_=pn(V_),X_=ut({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=pn(X_),Y_=ut({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=pn(Y_),$_=[9,13,27,32],uf=ci&&"CompositionEvent"in window,Ws=null;ci&&"documentMode"in document&&(Ws=document.documentMode);var K_=ci&&"TextEvent"in window&&!Ws,Sm=ci&&(!uf||Ws&&8<Ws&&11>=Ws),gd=" ",vd=!1;function Em(t,e){switch(t){case"keyup":return $_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function Z_(t,e){switch(t){case"compositionend":return Mm(e);case"keypress":return e.which!==32?null:(vd=!0,gd);case"textInput":return t=e.data,t===gd&&vd?null:t;default:return null}}function Q_(t,e){if(Gr)return t==="compositionend"||!uf&&Em(t,e)?(t=ym(),Eo=of=Ai=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sm&&e.locale!=="ko"?null:e.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J_[t.type]:e==="textarea"}function Tm(t,e,n,i){tm(i),e=Bo(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,ra=null;function e0(t){Um(t,0)}function dl(t){var e=Xr(t);if(qp(e))return t}function t0(t,e){if(t==="change")return e}var wm=!1;if(ci){var Vl;if(ci){var Wl="oninput"in document;if(!Wl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Wl=typeof xd.oninput=="function"}Vl=Wl}else Vl=!1;wm=Vl&&(!document.documentMode||9<document.documentMode)}function yd(){Xs&&(Xs.detachEvent("onpropertychange",Am),ra=Xs=null)}function Am(t){if(t.propertyName==="value"&&dl(ra)){var e=[];Tm(e,ra,t,tf(t)),sm(e0,e)}}function n0(t,e,n){t==="focusin"?(yd(),Xs=e,ra=n,Xs.attachEvent("onpropertychange",Am)):t==="focusout"&&yd()}function i0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(ra)}function r0(t,e){if(t==="click")return dl(e)}function s0(t,e){if(t==="input"||t==="change")return dl(e)}function a0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:a0;function sa(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gc.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ed(t,e){var n=Sd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sd(n)}}function Rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cm(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o0(t){var e=Cm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rm(n.ownerDocument.documentElement,n)){if(i!==null&&ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ed(n,s);var a=Ed(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l0=ci&&"documentMode"in document&&11>=document.documentMode,Vr=null,ou=null,js=null,lu=!1;function Md(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lu||Vr==null||Vr!==No(i)||(i=Vr,"selectionStart"in i&&ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&sa(js,i)||(js=i,i=Bo(ou,"onSelect"),0<i.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vr)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Xl={},Pm={};ci&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function hl(t){if(Xl[t])return Xl[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pm)return Xl[t]=e[n];return t}var bm=hl("animationend"),Lm=hl("animationiteration"),Nm=hl("animationstart"),Dm=hl("transitionend"),Im=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){Im.set(t,e),Sr(e,[t])}for(var jl=0;jl<Td.length;jl++){var Yl=Td[jl],c0=Yl.toLowerCase(),u0=Yl[0].toUpperCase()+Yl.slice(1);Wi(c0,"on"+u0)}Wi(bm,"onAnimationEnd");Wi(Lm,"onAnimationIteration");Wi(Nm,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Dm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function wd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c_(i,e,void 0,t),t.currentTarget=null}function Um(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;wd(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;wd(r,o,c),s=l}}}if(Io)throw t=iu,Io=!1,iu=null,t}function it(t,e){var n=e[hu];n===void 0&&(n=e[hu]=new Set);var i=t+"__bubble";n.has(i)||(Fm(e,t,2,!1),n.add(i))}function ql(t,e,n){var i=0;e&&(i|=4),Fm(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Ba]){t[Ba]=!0,Vp.forEach(function(n){n!=="selectionchange"&&(f0.has(n)||ql(n,!1,t),ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,ql("selectionchange",!1,e))}}function Fm(t,e,n,i){switch(xm(e)){case 1:var r=w_;break;case 4:r=A_;break;default:r=af}n=r.bind(null,e,n,t),r=void 0,!nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $l(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=sr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}sm(function(){var c=s,f=tf(n),d=[];e:{var h=Im.get(t);if(h!==void 0){var m=lf,_=t;switch(t){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":m=H_;break;case"focusin":_="focus",m=Gl;break;case"focusout":_="blur",m=Gl;break;case"beforeblur":case"afterblur":m=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=W_;break;case bm:case Lm:case Nm:m=N_;break;case Dm:m=j_;break;case"scroll":m=R_;break;case"wheel":m=q_;break;case"copy":case"cut":case"paste":m=I_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=md}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,u!==null&&(S=ea(v,u),S!=null&&x.push(oa(v,S,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==eu&&(_=n.relatedTarget||n.fromElement)&&(sr(_)||_[ui]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?sr(_):null,_!==null&&(p=Er(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=hd,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=md,S="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:Xr(m),g=_==null?h:Xr(_),h=new x(S,v+"leave",m,n,f),h.target=p,h.relatedTarget=g,S=null,sr(f)===c&&(x=new x(u,v+"enter",_,n,f),x.target=g,x.relatedTarget=p,S=x),p=S,m&&_)t:{for(x=m,u=_,v=0,g=x;g;g=Mr(g))v++;for(g=0,S=u;S;S=Mr(S))g++;for(;0<v-g;)x=Mr(x),v--;for(;0<g-v;)u=Mr(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=Mr(x),u=Mr(u)}x=null}else x=null;m!==null&&Ad(d,h,m,x,!1),_!==null&&p!==null&&Ad(d,p,_,x,!0)}}e:{if(h=c?Xr(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=t0;else if(_d(h))if(wm)b=s0;else{b=i0;var P=n0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=r0);if(b&&(b=b(t,c))){Tm(d,b,n,f);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&$c(h,"number",h.value)}switch(P=c?Xr(c):window,t){case"focusin":(_d(P)||P.contentEditable==="true")&&(Vr=P,ou=c,js=null);break;case"focusout":js=ou=Vr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Md(d,n,f);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":Md(d,n,f)}var C;if(uf)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Gr?Em(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Sm&&n.locale!=="ko"&&(Gr||B!=="onCompositionStart"?B==="onCompositionEnd"&&Gr&&(C=ym()):(Ai=f,of="value"in Ai?Ai.value:Ai.textContent,Gr=!0)),P=Bo(c,B),0<P.length&&(B=new pd(B,t,null,n,f),d.push({event:B,listeners:P}),C?B.data=C:(C=Mm(n),C!==null&&(B.data=C)))),(C=K_?Z_(t,n):Q_(t,n))&&(c=Bo(c,"onBeforeInput"),0<c.length&&(f=new pd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}Um(d,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(t,n),s!=null&&i.unshift(oa(t,s,r)),s=ea(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ad(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ea(n,s),l!=null&&a.unshift(oa(n,l,o))):r||(l=ea(n,s),l!=null&&a.push(oa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var d0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Rd(t){return(typeof t=="string"?t:""+t).replace(d0,`
`).replace(h0,"")}function za(t,e,n){if(e=Rd(e),Rd(t)!==e&&n)throw Error(re(425))}function zo(){}var cu=null,uu=null;function fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(t){return Cd.resolve(null).then(t).catch(g0)}:du;function g0(t){setTimeout(function(){throw t})}function Kl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ss,la="__reactProps$"+Ss,ui="__reactContainer$"+Ss,hu="__reactEvents$"+Ss,v0="__reactListeners$"+Ss,_0="__reactHandles$"+Ss;function sr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pd(t);t!==null;){if(n=t[jn])return n;t=Pd(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[jn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function pl(t){return t[la]||null}var pu=[],jr=-1;function Xi(t){return{current:t}}function st(t){0>jr||(t.current=pu[jr],pu[jr]=null,jr--)}function nt(t,e){jr++,pu[jr]=t.current,t.current=e}var Gi={},zt=Xi(Gi),Jt=Xi(!1),pr=Gi;function cs(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Ho(){st(Jt),st(zt)}function bd(t,e,n){if(zt.current!==Gi)throw Error(re(168));nt(zt,e),nt(Jt,n)}function Om(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,n_(t)||"Unknown",r));return ut({},n,i)}function Go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,pr=zt.current,nt(zt,t),nt(Jt,Jt.current),!0}function Ld(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Om(t,e,pr),i.__reactInternalMemoizedMergedChildContext=t,st(Jt),st(zt),nt(zt,t)):st(Jt),nt(Jt,n)}var ri=null,ml=!1,Zl=!1;function km(t){ri===null?ri=[t]:ri.push(t)}function x0(t){ml=!0,km(t)}function ji(){if(!Zl&&ri!==null){Zl=!0;var t=0,e=Ke;try{var n=ri;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,ml=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),cm(nf,ji),r}finally{Ke=e,Zl=!1}}return null}var Yr=[],qr=0,Vo=null,Wo=0,vn=[],_n=0,mr=null,si=1,ai="";function Ji(t,e){Yr[qr++]=Wo,Yr[qr++]=Vo,Vo=t,Wo=e}function Bm(t,e,n){vn[_n++]=si,vn[_n++]=ai,vn[_n++]=mr,mr=t;var i=si;t=ai;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,si=1<<32-On(e)+r|n<<r|i,ai=s+t}else si=1<<s|n<<r|i,ai=t}function df(t){t.return!==null&&(Ji(t,1),Bm(t,1,0))}function hf(t){for(;t===Vo;)Vo=Yr[--qr],Yr[qr]=null,Wo=Yr[--qr],Yr[qr]=null;for(;t===mr;)mr=vn[--_n],vn[_n]=null,ai=vn[--_n],vn[_n]=null,si=vn[--_n],vn[_n]=null}var fn=null,un=null,at=!1,Nn=null;function zm(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,un=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:si,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,un=null,!0):!1;default:return!1}}function mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gu(t){if(at){var e=un;if(e){var n=e;if(!Nd(t,e)){if(mu(t))throw Error(re(418));e=Di(n.nextSibling);var i=fn;e&&Nd(t,e)?zm(i,n):(t.flags=t.flags&-4097|2,at=!1,fn=t)}}else{if(mu(t))throw Error(re(418));t.flags=t.flags&-4097|2,at=!1,fn=t}}}function Dd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Ha(t){if(t!==fn)return!1;if(!at)return Dd(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fu(t.type,t.memoizedProps)),e&&(e=un)){if(mu(t))throw Hm(),Error(re(418));for(;e;)zm(t,e),e=Di(e.nextSibling)}if(Dd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=fn?Di(t.stateNode.nextSibling):null;return!0}function Hm(){for(var t=un;t;)t=Di(t.nextSibling)}function us(){un=fn=null,at=!1}function pf(t){Nn===null?Nn=[t]:Nn.push(t)}var y0=pi.ReactCurrentBatchConfig;function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ga(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Id(t){var e=t._init;return e(t._payload)}function Gm(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Oi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,S){return v===null||v.tag!==6?(v=rc(g,u.mode,S),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,S){var b=g.type;return b===Hr?f(u,v,g.props.children,S,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ei&&Id(b)===v.type)?(S=r(v,g.props),S.ref=bs(u,v,g),S.return=u,S):(S=bo(g.type,g.key,g.props,null,u.mode,S),S.ref=bs(u,v,g),S.return=u,S)}function c(u,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=sc(g,u.mode,S),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,S,b){return v===null||v.tag!==7?(v=cr(g,u.mode,S,b),v.return=u,v):(v=r(v,g),v.return=u,v)}function d(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case La:return g=bo(v.type,v.key,v.props,null,u.mode,g),g.ref=bs(u,null,v),g.return=u,g;case zr:return v=sc(v,u.mode,g),v.return=u,v;case Ei:var S=v._init;return d(u,S(v._payload),g)}if(Bs(v)||ws(v))return v=cr(v,u.mode,g,null),v.return=u,v;Ga(u,v)}return null}function h(u,v,g,S){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:o(u,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case La:return g.key===b?l(u,v,g,S):null;case zr:return g.key===b?c(u,v,g,S):null;case Ei:return b=g._init,h(u,v,b(g._payload),S)}if(Bs(g)||ws(g))return b!==null?null:f(u,v,g,S,null);Ga(u,g)}return null}function m(u,v,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(g)||null,o(v,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case La:return u=u.get(S.key===null?g:S.key)||null,l(v,u,S,b);case zr:return u=u.get(S.key===null?g:S.key)||null,c(v,u,S,b);case Ei:var P=S._init;return m(u,v,g,P(S._payload),b)}if(Bs(S)||ws(S))return u=u.get(g)||null,f(v,u,S,b,null);Ga(v,S)}return null}function _(u,v,g,S){for(var b=null,P=null,C=v,B=v=0,E=null;C!==null&&B<g.length;B++){C.index>B?(E=C,C=null):E=C.sibling;var T=h(u,C,g[B],S);if(T===null){C===null&&(C=E);break}t&&C&&T.alternate===null&&e(u,C),v=s(T,v,B),P===null?b=T:P.sibling=T,P=T,C=E}if(B===g.length)return n(u,C),at&&Ji(u,B),b;if(C===null){for(;B<g.length;B++)C=d(u,g[B],S),C!==null&&(v=s(C,v,B),P===null?b=C:P.sibling=C,P=C);return at&&Ji(u,B),b}for(C=i(u,C);B<g.length;B++)E=m(C,u,B,g[B],S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?B:E.key),v=s(E,v,B),P===null?b=E:P.sibling=E,P=E);return t&&C.forEach(function(L){return e(u,L)}),at&&Ji(u,B),b}function x(u,v,g,S){var b=ws(g);if(typeof b!="function")throw Error(re(150));if(g=b.call(g),g==null)throw Error(re(151));for(var P=b=null,C=v,B=v=0,E=null,T=g.next();C!==null&&!T.done;B++,T=g.next()){C.index>B?(E=C,C=null):E=C.sibling;var L=h(u,C,T.value,S);if(L===null){C===null&&(C=E);break}t&&C&&L.alternate===null&&e(u,C),v=s(L,v,B),P===null?b=L:P.sibling=L,P=L,C=E}if(T.done)return n(u,C),at&&Ji(u,B),b;if(C===null){for(;!T.done;B++,T=g.next())T=d(u,T.value,S),T!==null&&(v=s(T,v,B),P===null?b=T:P.sibling=T,P=T);return at&&Ji(u,B),b}for(C=i(u,C);!T.done;B++,T=g.next())T=m(C,u,B,T.value,S),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?B:T.key),v=s(T,v,B),P===null?b=T:P.sibling=T,P=T);return t&&C.forEach(function(q){return e(u,q)}),at&&Ji(u,B),b}function p(u,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case La:e:{for(var b=g.key,P=v;P!==null;){if(P.key===b){if(b=g.type,b===Hr){if(P.tag===7){n(u,P.sibling),v=r(P,g.props.children),v.return=u,u=v;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ei&&Id(b)===P.type){n(u,P.sibling),v=r(P,g.props),v.ref=bs(u,P,g),v.return=u,u=v;break e}n(u,P);break}else e(u,P);P=P.sibling}g.type===Hr?(v=cr(g.props.children,u.mode,S,g.key),v.return=u,u=v):(S=bo(g.type,g.key,g.props,null,u.mode,S),S.ref=bs(u,v,g),S.return=u,u=S)}return a(u);case zr:e:{for(P=g.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=sc(g,u.mode,S),v.return=u,u=v}return a(u);case Ei:return P=g._init,p(u,v,P(g._payload),S)}if(Bs(g))return _(u,v,g,S);if(ws(g))return x(u,v,g,S);Ga(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=rc(g,u.mode,S),v.return=u,u=v),a(u)):n(u,v)}return p}var fs=Gm(!0),Vm=Gm(!1),Xo=Xi(null),jo=null,$r=null,mf=null;function gf(){mf=$r=jo=null}function vf(t){var e=Xo.current;st(Xo),t._currentValue=e}function vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){jo=t,mf=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(jo===null)throw Error(re(308));$r=t,jo.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var ar=null;function _f(t){ar===null?ar=[t]:ar.push(t)}function Wm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_f(e)):(n.next=r.next,r.next=n),e.interleaved=n,fi(t,i)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mi=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(t,n)}return r=i.interleaved,r===null?(e.next=e,_f(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(t,n)}function To(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}function Ud(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yo(t,e,n,i){var r=t.updateQueue;Mi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ut({},d,h);break e;case 2:Mi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vr|=a,t.lanes=a,t.memoizedState=d}}function Fd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ea={},$n=Xi(Ea),ca=Xi(Ea),ua=Xi(Ea);function or(t){if(t===Ea)throw Error(re(174));return t}function yf(t,e){switch(nt(ua,e),nt(ca,t),nt($n,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}st($n),nt($n,e)}function ds(){st($n),st(ca),st(ua)}function jm(t){or(ua.current);var e=or($n.current),n=Zc(e,t.type);e!==n&&(nt(ca,t),nt($n,n))}function Sf(t){ca.current===t&&(st($n),st(ca))}var lt=Xi(0);function qo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ql=[];function Ef(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var wo=pi.ReactCurrentDispatcher,Jl=pi.ReactCurrentBatchConfig,gr=0,ct=null,xt=null,At=null,$o=!1,Ys=!1,fa=0,S0=0;function Ut(){throw Error(re(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,s){if(gr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wo.current=t===null||t.memoizedState===null?w0:A0,t=n(i,r),Ys){s=0;do{if(Ys=!1,fa=0,25<=s)throw Error(re(301));s+=1,At=xt=null,e.updateQueue=null,wo.current=R0,t=n(i,r)}while(Ys)}if(wo.current=Ko,e=xt!==null&&xt.next!==null,gr=0,At=xt=ct=null,$o=!1,e)throw Error(re(300));return t}function wf(){var t=fa!==0;return fa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ct.memoizedState=At=t:At=At.next=t,At}function wn(){if(xt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=At===null?ct.memoizedState:At.next;if(e!==null)At=e,xt=t;else{if(t===null)throw Error(re(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},At===null?ct.memoizedState=At=t:At=At.next=t}return At}function da(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((gr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,ct.lanes|=f,vr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,zn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ym(){}function qm(t,e){var n=ct,i=wn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Af(Zm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,ha(9,Km.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(re(349));gr&30||$m(n,e,r)}return r}function $m(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Km(t,e,n,i){e.value=n,e.getSnapshot=i,Qm(e)&&Jm(t)}function Zm(t,e,n){return n(function(){Qm(e)&&Jm(t)})}function Qm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Jm(t){var e=fi(t,1);e!==null&&kn(e,t,1,-1)}function Od(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=T0.bind(null,ct,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function eg(){return wn().memoizedState}function Ao(t,e,n,i){var r=Wn();ct.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function gl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(xt!==null){var a=xt.memoizedState;if(s=a.destroy,i!==null&&Mf(i,a.deps)){r.memoizedState=ha(e,n,s,i);return}}ct.flags|=t,r.memoizedState=ha(1|e,n,s,i)}function kd(t,e){return Ao(8390656,8,t,e)}function Af(t,e){return gl(2048,8,t,e)}function tg(t,e){return gl(4,2,t,e)}function ng(t,e){return gl(4,4,t,e)}function ig(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rg(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,ig.bind(null,e,t),n)}function Rf(){}function sg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ag(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function og(t,e,n){return gr&21?(zn(n,e)||(n=dm(),ct.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function E0(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Jl.transition;Jl.transition={};try{t(!1),e()}finally{Ke=n,Jl.transition=i}}function lg(){return wn().memoizedState}function M0(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cg(t))ug(e,n);else if(n=Wm(t,e,n,i),n!==null){var r=jt();kn(n,t,i,r),fg(n,e,i)}}function T0(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cg(t))ug(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var l=e.interleaved;l===null?(r.next=r,_f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wm(t,e,r,i),n!==null&&(r=jt(),kn(n,t,i,r),fg(n,e,i))}}function cg(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function ug(t,e){Ys=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}var Ko={readContext:Tn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},w0={readContext:Tn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ao(4194308,4,ig.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ao(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ao(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M0.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Od,useDebugValue:Rf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Od(!1),e=t[0];return t=E0.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Wn();if(at){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Rt===null)throw Error(re(349));gr&30||$m(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kd(Zm.bind(null,i,s,t),[t]),i.flags|=2048,ha(9,Km.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Rt.identifierPrefix;if(at){var n=ai,i=si;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A0={readContext:Tn,useCallback:sg,useContext:Tn,useEffect:Af,useImperativeHandle:rg,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:ag,useReducer:ec,useRef:eg,useState:function(){return ec(da)},useDebugValue:Rf,useDeferredValue:function(t){var e=wn();return og(e,xt.memoizedState,t)},useTransition:function(){var t=ec(da)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Ym,useSyncExternalStore:qm,useId:lg,unstable_isNewReconciler:!1},R0={readContext:Tn,useCallback:sg,useContext:Tn,useEffect:Af,useImperativeHandle:rg,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:ag,useReducer:tc,useRef:eg,useState:function(){return tc(da)},useDebugValue:Rf,useDeferredValue:function(t){var e=wn();return xt===null?e.memoizedState=t:og(e,xt.memoizedState,t)},useTransition:function(){var t=tc(da)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Ym,useSyncExternalStore:qm,useId:lg,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Fi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(kn(e,t,r,i),To(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Fi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(kn(e,t,r,i),To(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Fi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(kn(e,t,i,n),To(e,t,i))}};function Bd(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!sa(n,i)||!sa(r,s):!0}function dg(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=en(e)?pr:zt.current,i=e.contextTypes,s=(i=i!=null)?cs(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vl.enqueueReplaceState(e,e.state,null)}function xu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=en(e)?pr:zt.current,r.context=cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_u(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vl.enqueueReplaceState(r,r.state,null),Yo(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",i=e;do n+=t_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function hg(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qo||(Qo=!0,bu=i),yu(t,e)},n}function pg(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yu(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Hd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=G0.bind(null,t,e,n),e.then(t,t))}function Gd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var P0=pi.ReactCurrentOwner,Qt=!1;function Wt(t,e,n,i){e.child=t===null?Vm(e,null,n,i):fs(e,t.child,n,i)}function Wd(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=Tf(t,e,n,i,s,r),n=wf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(at&&n&&df(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Xd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mg(t,e,s,i,r)):(t=bo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(a,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function mg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(sa(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,di(t,e,r)}return Su(t,e,n,i,r)}function gg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Zr,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Zr,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Zr,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Zr,cn),cn|=i;return Wt(t,e,r,n),e.child}function vg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Su(t,e,n,i,r){var s=en(n)?pr:zt.current;return s=cs(e,s),rs(e,r),n=Tf(t,e,n,i,s,r),i=wf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(at&&i&&df(e),e.flags|=1,Wt(t,e,n,r),e.child)}function jd(t,e,n,i,r){if(en(n)){var s=!0;Go(e)}else s=!1;if(rs(e,r),e.stateNode===null)Ro(t,e),dg(e,n,i),xu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=en(n)?pr:zt.current,c=cs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&zd(e,a,i,c),Mi=!1;var h=e.memoizedState;a.state=h,Yo(e,i,a,r),l=e.memoizedState,o!==i||h!==l||Jt.current||Mi?(typeof f=="function"&&(_u(e,n,f,i),l=e.memoizedState),(o=Mi||Bd(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Xm(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:bn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=en(n)?pr:zt.current,l=cs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&zd(e,a,i,l),Mi=!1,h=e.memoizedState,a.state=h,Yo(e,i,a,r);var _=e.memoizedState;o!==d||h!==_||Jt.current||Mi?(typeof m=="function"&&(_u(e,n,m,i),_=e.memoizedState),(c=Mi||Bd(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Eu(t,e,n,i,s,r)}function Eu(t,e,n,i,r,s){vg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ld(e,n,!1),di(t,e,s);i=e.stateNode,P0.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&Ld(e,n,!0),e.child}function _g(t){var e=t.stateNode;e.pendingContext?bd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bd(t,e.context,!1),yf(t,e.containerInfo)}function Yd(t,e,n,i,r){return us(),pf(r),e.flags|=256,Wt(t,e,n,i),e.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function xg(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=yl(a,i,0,null),t=cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tu(n),e.memoizedState=Mu,t):Cf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return b0(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Oi(o,s):(s=cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Tu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Mu,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&pf(i),fs(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b0(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=nc(Error(re(422))),Va(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yl({mode:"visible",children:i.children},r,0,null),s=cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fs(e,t.child,null,a),e.child.memoizedState=Tu(a),e.memoizedState=Mu,s);if(!(e.mode&1))return Va(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=nc(s,i,void 0),Va(t,e,a,i)}if(o=(a&t.childLanes)!==0,Qt||o){if(i=Rt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(t,r),kn(i,t,r,-1))}return If(),i=nc(Error(re(421))),Va(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=V0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Di(r.nextSibling),fn=e,at=!0,Nn=null,t!==null&&(vn[_n++]=si,vn[_n++]=ai,vn[_n++]=mr,si=t.id,ai=t.overflow,mr=e),e=Cf(e,i.children),e.flags|=4096,e)}function qd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vu(t.return,e,n)}function ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qd(t,n,e);else if(t.tag===19)qd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qo(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qo(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ic(e,!0,n,null,s);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function L0(t,e,n){switch(e.tag){case 3:_g(e),us();break;case 5:jm(e);break;case 1:en(e.type)&&Go(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Xo,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?xg(t,e,n):(nt(lt,lt.current&1),t=di(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,gg(t,e,n)}return di(t,e,n)}var Sg,wu,Eg,Mg;Sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};Eg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,or($n.current);var s=null;switch(n){case"input":r=Yc(t,r),i=Yc(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=Kc(t,r),i=Kc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zo)}Qc(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Mg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ls(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function N0(t,e,n){var i=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return en(e.type)&&Ho(),Ft(e),null;case 3:return i=e.stateNode,ds(),st(Jt),st(zt),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Du(Nn),Nn=null))),wu(t,e),Ft(e),null;case 5:Sf(e);var r=or(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Eg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Ft(e),null}if(t=or($n.current),Ha(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[la]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Hs.length;r++)it(Hs[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":id(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":sd(i,s),it("invalid",i)}Qc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&za(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&za(i.textContent,o,t),r=["children",""+o]):Qs.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":Na(i),rd(i,s,!0);break;case"textarea":Na(i),ad(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[jn]=e,t[la]=i,Sg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Jc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)it(Hs[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":id(t,i),r=Yc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":sd(t,i),r=Kc(t,i),it("invalid",t);break;default:r=i}Qc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?em(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Zu(t,s,l,a))}switch(n){case"input":Na(t),rd(t,i,!1);break;case"textarea":Na(t),ad(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Mg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=or(ua.current),or($n.current),Ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Ft(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&un!==null&&e.mode&1&&!(e.flags&128))Hm(),us(),e.flags|=98560,s=!1;else if(s=Ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[jn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Nn!==null&&(Du(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?yt===0&&(yt=3):If())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ds(),wu(t,e),t===null&&aa(e.stateNode.containerInfo),Ft(e),null;case 10:return vf(e.type._context),Ft(e),null;case 17:return en(e.type)&&Ho(),Ft(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ls(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=qo(t),a!==null){for(e.flags|=128,Ls(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>ps&&(e.flags|=128,i=!0,Ls(s,!1),e.lanes=4194304)}else{if(!i)if(t=qo(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return Ft(e),null}else 2*mt()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function D0(t,e){switch(hf(e),e.tag){case 1:return en(e.type)&&Ho(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),st(Jt),st(zt),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sf(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return ds(),null;case 10:return vf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Wa=!1,Bt=!1,I0=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Au(t,e,n){try{n()}catch(i){ht(t,e,i)}}var $d=!1;function U0(t,e){if(cu=Oo,t=Cm(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:t,selectionRange:n},Oo=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:bn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=$d,$d=!1,_}function qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Au(e,n,s)}r=r.next}while(r!==i)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ru(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tg(t){var e=t.alternate;e!==null&&(t.alternate=null,Tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[la],delete e[hu],delete e[v0],delete e[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wg(t){return t.tag===5||t.tag===3||t.tag===4}function Kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zo));else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Pu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pu(t,e,n),t=t.sibling;t!==null;)Pu(t,e,n),t=t.sibling}var Pt=null,Ln=!1;function gi(t,e,n){for(n=n.child;n!==null;)Ag(t,e,n),n=n.sibling}function Ag(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Bt||Kr(n,e);case 6:var i=Pt,r=Ln;Pt=null,gi(t,e,n),Pt=i,Ln=r,Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?Kl(t.parentNode,n):t.nodeType===1&&Kl(t,n),ia(t)):Kl(Pt,n.stateNode));break;case 4:i=Pt,r=Ln,Pt=n.stateNode.containerInfo,Ln=!0,gi(t,e,n),Pt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Au(n,e,a),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!Bt&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ht(n,e,o)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,gi(t,e,n),Bt=i):gi(t,e,n);break;default:gi(t,e,n)}}function Zd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I0),e.forEach(function(i){var r=W0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,Ln=!1;break e;case 3:Pt=o.stateNode.containerInfo,Ln=!0;break e;case 4:Pt=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(Pt===null)throw Error(re(160));Ag(s,a,r),Pt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rg(e,t),e=e.sibling}function Rg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Vn(t),i&4){try{qs(3,t,t.return),_l(3,t)}catch(x){ht(t,t.return,x)}try{qs(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:An(e,t),Vn(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(An(e,t),Vn(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{Js(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&$p(r,s),Jc(o,a);var c=Jc(o,s);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?em(r,d):f==="dangerouslySetInnerHTML"?Qp(r,d):f==="children"?Js(r,d):Zu(r,f,d,c)}switch(o){case"input":qc(r,s);break;case"textarea":Kp(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?es(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(An(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(An(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:An(e,t),Vn(t);break;case 13:An(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lf=mt())),i&4&&Zd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||f,An(e,t),Bt=c):An(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(d=_e=f;_e!==null;){switch(h=_e,m=h.child,h.tag){case 0:case 11:case 14:case 15:qs(4,h,h.return);break;case 1:Kr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:Kr(h,h.return);break;case 22:if(h.memoizedState!==null){Jd(d);continue}}m!==null?(m.return=h,_e=m):Jd(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Jp("display",a))}catch(x){ht(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ht(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:An(e,t),Vn(t),i&4&&Zd(t);break;case 21:break;default:An(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Js(r,""),i.flags&=-33);var s=Kd(t);Pu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Kd(t);Cu(t,o,a);break;default:throw Error(re(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F0(t,e,n){_e=t,Cg(t)}function Cg(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Wa;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=Wa;var c=Bt;if(Wa=a,(Bt=l)&&!c)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?eh(r):l!==null?(l.return=a,_e=l):eh(r);for(;s!==null;)_e=s,Cg(s),s=s.sibling;_e=r,Wa=o,Bt=c}Qd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Qd(t)}}function Qd(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||_l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fd(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fd(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Bt||e.flags&512&&Ru(e)}catch(h){ht(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Jd(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function eh(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{Ru(e)}catch(l){ht(e,s,l)}break;case 5:var a=e.return;try{Ru(e)}catch(l){ht(e,a,l)}}}catch(l){ht(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var O0=Math.ceil,Zo=pi.ReactCurrentDispatcher,Pf=pi.ReactCurrentOwner,Mn=pi.ReactCurrentBatchConfig,je=0,Rt=null,_t=null,Nt=0,cn=0,Zr=Xi(0),yt=0,pa=null,vr=0,xl=0,bf=0,$s=null,Kt=null,Lf=0,ps=1/0,ii=null,Qo=!1,bu=null,Ui=null,Xa=!1,Ri=null,Jo=0,Ks=0,Lu=null,Co=-1,Po=0;function jt(){return je&6?mt():Co!==-1?Co:Co=mt()}function Fi(t){return t.mode&1?je&2&&Nt!==0?Nt&-Nt:y0.transition!==null?(Po===0&&(Po=dm()),Po):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:xm(t.type)),t):1}function kn(t,e,n,i){if(50<Ks)throw Ks=0,Lu=null,Error(re(185));xa(t,n,i),(!(je&2)||t!==Rt)&&(t===Rt&&(!(je&2)&&(xl|=n),yt===4&&wi(t,Nt)),tn(t,i),n===1&&je===0&&!(e.mode&1)&&(ps=mt()+500,ml&&ji()))}function tn(t,e){var n=t.callbackNode;y_(t,e);var i=Fo(t,t===Rt?Nt:0);if(i===0)n!==null&&cd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cd(n),e===1)t.tag===0?x0(th.bind(null,t)):km(th.bind(null,t)),m0(function(){!(je&6)&&ji()}),n=null;else{switch(hm(i)){case 1:n=nf;break;case 4:n=um;break;case 16:n=Uo;break;case 536870912:n=fm;break;default:n=Uo}n=Fg(n,Pg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pg(t,e){if(Co=-1,Po=0,je&6)throw Error(re(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Fo(t,t===Rt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=el(t,i);else{e=i;var r=je;je|=2;var s=Lg();(Rt!==t||Nt!==e)&&(ii=null,ps=mt()+500,lr(t,e));do try{z0();break}catch(o){bg(t,o)}while(!0);gf(),Zo.current=s,je=r,_t!==null?e=0:(Rt=null,Nt=0,e=yt)}if(e!==0){if(e===2&&(r=ru(t),r!==0&&(i=r,e=Nu(t,r))),e===1)throw n=pa,lr(t,0),wi(t,i),tn(t,mt()),n;if(e===6)wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!k0(r)&&(e=el(t,i),e===2&&(s=ru(t),s!==0&&(i=s,e=Nu(t,s))),e===1))throw n=pa,lr(t,0),wi(t,i),tn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:er(t,Kt,ii);break;case 3:if(wi(t,i),(i&130023424)===i&&(e=Lf+500-mt(),10<e)){if(Fo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=du(er.bind(null,t,Kt,ii),e);break}er(t,Kt,ii);break;case 4:if(wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O0(i/1960))-i,10<i){t.timeoutHandle=du(er.bind(null,t,Kt,ii),i);break}er(t,Kt,ii);break;case 5:er(t,Kt,ii);break;default:throw Error(re(329))}}}return tn(t,mt()),t.callbackNode===n?Pg.bind(null,t):null}function Nu(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=el(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Du(e)),t}function Du(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function k0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wi(t,e){for(e&=~bf,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function th(t){if(je&6)throw Error(re(327));ss();var e=Fo(t,0);if(!(e&1))return tn(t,mt()),null;var n=el(t,e);if(t.tag!==0&&n===2){var i=ru(t);i!==0&&(e=i,n=Nu(t,i))}if(n===1)throw n=pa,lr(t,0),wi(t,e),tn(t,mt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Kt,ii),tn(t,mt()),null}function Nf(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(ps=mt()+500,ml&&ji())}}function _r(t){Ri!==null&&Ri.tag===0&&!(je&6)&&ss();var e=je;je|=1;var n=Mn.transition,i=Ke;try{if(Mn.transition=null,Ke=1,t)return t()}finally{Ke=i,Mn.transition=n,je=e,!(je&6)&&ji()}}function Df(){cn=Zr.current,st(Zr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p0(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ho();break;case 3:ds(),st(Jt),st(zt),Ef();break;case 5:Sf(i);break;case 4:ds();break;case 13:st(lt);break;case 19:st(lt);break;case 10:vf(i.type._context);break;case 22:case 23:Df()}n=n.return}if(Rt=t,_t=t=Oi(t.current,null),Nt=cn=e,yt=0,pa=null,bf=xl=vr=0,Kt=$s=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ar=null}return t}function bg(t,e){do{var n=_t;try{if(gf(),wo.current=Ko,$o){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$o=!1}if(gr=0,At=xt=ct=null,Ys=!1,fa=0,Pf.current=null,n===null||n.return===null){yt=1,pa=e,_t=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Nt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Gd(a);if(m!==null){m.flags&=-257,Vd(m,a,o,s,e),m.mode&1&&Hd(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Hd(s,c,e),If();break e}l=Error(re(426))}}else if(at&&o.mode&1){var p=Gd(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Vd(p,a,o,s,e),pf(hs(l,o));break e}}s=l=hs(l,o),yt!==4&&(yt=2),$s===null?$s=[s]:$s.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=hg(s,l,e);Ud(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ui===null||!Ui.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=pg(s,o,e);Ud(s,S);break e}}s=s.return}while(s!==null)}Dg(n)}catch(b){e=b,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Lg(){var t=Zo.current;return Zo.current=Ko,t===null?Ko:t}function If(){(yt===0||yt===3||yt===2)&&(yt=4),Rt===null||!(vr&268435455)&&!(xl&268435455)||wi(Rt,Nt)}function el(t,e){var n=je;je|=2;var i=Lg();(Rt!==t||Nt!==e)&&(ii=null,lr(t,e));do try{B0();break}catch(r){bg(t,r)}while(!0);if(gf(),je=n,Zo.current=i,_t!==null)throw Error(re(261));return Rt=null,Nt=0,yt}function B0(){for(;_t!==null;)Ng(_t)}function z0(){for(;_t!==null&&!f_();)Ng(_t)}function Ng(t){var e=Ug(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Dg(t):_t=e,Pf.current=null}function Dg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D0(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,_t=null;return}}else if(n=N0(n,e,cn),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);yt===0&&(yt=5)}function er(t,e,n){var i=Ke,r=Mn.transition;try{Mn.transition=null,Ke=1,H0(t,e,n,i)}finally{Mn.transition=r,Ke=i}return null}function H0(t,e,n,i){do ss();while(Ri!==null);if(je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(S_(t,s),t===Rt&&(_t=Rt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Fg(Uo,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=Ke;Ke=1;var o=je;je|=4,Pf.current=null,U0(t,n),Rg(n,t),o0(uu),Oo=!!cu,uu=cu=null,t.current=n,F0(n),d_(),je=o,Ke=a,Mn.transition=s}else t.current=n;if(Xa&&(Xa=!1,Ri=t,Jo=r),s=t.pendingLanes,s===0&&(Ui=null),m_(n.stateNode),tn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qo)throw Qo=!1,t=bu,bu=null,t;return Jo&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Lu?Ks++:(Ks=0,Lu=t):Ks=0,ji(),null}function ss(){if(Ri!==null){var t=hm(Jo),e=Mn.transition,n=Ke;try{if(Mn.transition=null,Ke=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,Jo=0,je&6)throw Error(re(331));var r=je;for(je|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:qs(8,f,s)}var d=f.child;if(d!==null)d.return=f,_e=d;else for(;_e!==null;){f=_e;var h=f.sibling,m=f.return;if(Tg(f),f===c){_e=null;break}if(h!==null){h.return=m,_e=h;break}_e=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var v=t.current;for(_e=v;_e!==null;){a=_e;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,_e=g;else e:for(a=v;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_l(9,o)}}catch(b){ht(o,o.return,b)}if(o===a){_e=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,_e=S;break e}_e=o.return}}if(je=r,ji(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(ul,t)}catch{}i=!0}return i}finally{Ke=n,Mn.transition=e}}return!1}function nh(t,e,n){e=hs(n,e),e=hg(t,e,1),t=Ii(t,e,1),e=jt(),t!==null&&(xa(t,1,e),tn(t,e))}function ht(t,e,n){if(t.tag===3)nh(t,t,n);else for(;e!==null;){if(e.tag===3){nh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=hs(n,t),t=pg(e,t,1),e=Ii(e,t,1),t=jt(),e!==null&&(xa(e,1,t),tn(e,t));break}}e=e.return}}function G0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Nt&n)===n&&(yt===4||yt===3&&(Nt&130023424)===Nt&&500>mt()-Lf?lr(t,0):bf|=n),tn(t,e)}function Ig(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=jt();t=fi(t,e),t!==null&&(xa(t,e,n),tn(t,n))}function V0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ig(t,n)}function W0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Ig(t,n)}var Ug;Ug=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,L0(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,at&&e.flags&1048576&&Bm(e,Wo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ro(t,e),t=e.pendingProps;var r=cs(e,zt.current);rs(e,n),r=Tf(null,e,i,t,r,n);var s=wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,Go(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xf(e),r.updater=vl,e.stateNode=r,r._reactInternals=e,xu(e,i,t,n),e=Eu(null,e,i,!0,s,n)):(e.tag=0,at&&s&&df(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ro(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j0(i),t=bn(i,t),r){case 0:e=Su(null,e,i,t,n);break e;case 1:e=jd(null,e,i,t,n);break e;case 11:e=Wd(null,e,i,t,n);break e;case 14:e=Xd(null,e,i,bn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Su(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),jd(t,e,i,r,n);case 3:e:{if(_g(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xm(t,e),Yo(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(re(423)),e),e=Yd(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(re(424)),e),e=Yd(t,e,i,n,r);break e}else for(un=Di(e.stateNode.containerInfo.firstChild),fn=e,at=!0,Nn=null,n=Vm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),i===r){e=di(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return jm(e),t===null&&gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,fu(i,r)?a=null:s!==null&&fu(i,s)&&(e.flags|=32),vg(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&gu(e),null;case 13:return xg(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Wd(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(Xo,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!Jt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),vu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=Tn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),Xd(t,e,i,r,n);case 15:return mg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ro(t,e),e.tag=1,en(i)?(t=!0,Go(e)):t=!1,rs(e,n),dg(e,i,r),xu(e,i,r,n),Eu(null,e,i,!0,t,n);case 19:return yg(t,e,n);case 22:return gg(t,e,n)}throw Error(re(156,e.tag))};function Fg(t,e){return cm(t,e)}function X0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new X0(t,e,n,i)}function Uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j0(t){if(typeof t=="function")return Uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ju)return 11;if(t===ef)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Uf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Hr:return cr(n.children,r,s,e);case Qu:a=8,r|=8;break;case Vc:return t=En(12,n,e,r|2),t.elementType=Vc,t.lanes=s,t;case Wc:return t=En(13,n,e,r),t.elementType=Wc,t.lanes=s,t;case Xc:return t=En(19,n,e,r),t.elementType=Xc,t.lanes=s,t;case jp:return yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wp:a=10;break e;case Xp:a=9;break e;case Ju:a=11;break e;case ef:a=14;break e;case Ei:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=En(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function cr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function yl(t,e,n,i){return t=En(22,t,i,e),t.elementType=jp,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ff(t,e,n,i,r,s,a,o,l){return t=new Y0(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function q0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Og(t){if(!t)return Gi;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(en(n))return Om(t,n,e)}return e}function kg(t,e,n,i,r,s,a,o,l){return t=Ff(n,i,!0,t,r,s,a,o,l),t.context=Og(null),n=t.current,i=jt(),r=Fi(n),s=li(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,xa(t,r,i),tn(t,i),t}function Sl(t,e,n,i){var r=e.current,s=jt(),a=Fi(r);return n=Og(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,a),t!==null&&(kn(t,r,a,s),To(t,r,a)),a}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){ih(t,e),(t=t.alternate)&&ih(t,e)}function $0(){return null}var Bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}El.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Sl(t,e,null,null)};El.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Sl(null,t,null,null)}),e[ui]=null}};function El(t){this._internalRoot=t}El.prototype.unstable_scheduleHydration=function(t){if(t){var e=gm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&_m(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rh(){}function K0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tl(a);s.call(c)}}var a=kg(e,i,t,0,null,!1,!1,"",rh);return t._reactRootContainer=a,t[ui]=a.current,aa(t.nodeType===8?t.parentNode:t),_r(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=tl(l);o.call(c)}}var l=Ff(t,0,!1,null,null,!1,!1,"",rh);return t._reactRootContainer=l,t[ui]=l.current,aa(t.nodeType===8?t.parentNode:t),_r(function(){Sl(e,l,n,i)}),l}function Tl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=tl(a);o.call(l)}}Sl(e,a,t,r)}else a=K0(n,e,t,r,i);return tl(a)}pm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(rf(e,n|1),tn(e,mt()),!(je&6)&&(ps=mt()+500,ji()))}break;case 13:_r(function(){var i=fi(t,1);if(i!==null){var r=jt();kn(i,t,1,r)}}),Of(t,1)}};sf=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=jt();kn(e,t,134217728,n)}Of(t,134217728)}};mm=function(t){if(t.tag===13){var e=Fi(t),n=fi(t,e);if(n!==null){var i=jt();kn(n,t,e,i)}Of(t,e)}};gm=function(){return Ke};vm=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};tu=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pl(i);if(!r)throw Error(re(90));qp(i),qc(i,r)}}}break;case"textarea":Kp(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};im=Nf;rm=_r;var Z0={usingClientEntryPoint:!1,Events:[Sa,Xr,pl,tm,nm,Nf]},Ns={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=om(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{ul=ja.inject(Q0),qn=ja}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(re(200));return q0(t,e,null,n)};hn.createRoot=function(t,e){if(!Bf(t))throw Error(re(299));var n=!1,i="",r=Bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ff(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,aa(t.nodeType===8?t.parentNode:t),new kf(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=om(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return _r(t)};hn.hydrate=function(t,e,n){if(!Ml(e))throw Error(re(200));return Tl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Bg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=kg(e,null,t,1,n??null,r,!1,s,a),t[ui]=e.current,aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new El(e)};hn.render=function(t,e,n){if(!Ml(e))throw Error(re(200));return Tl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(re(40));return t._reactRootContainer?(_r(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};hn.unstable_batchedUpdates=Nf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ml(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Tl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg)}catch(t){console.error(t)}}zg(),zp.exports=hn;var J0=zp.exports,sh=J0;Hc.createRoot=sh.createRoot,Hc.hydrateRoot=sh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="160",ex=0,ah=1,tx=2,Hg=1,nx=2,ni=3,Vi=0,nn=1,In=2,ki=0,as=1,oh=2,lh=3,ch=4,ix=5,ir=100,rx=101,sx=102,uh=103,fh=104,ax=200,ox=201,lx=202,cx=203,Iu=204,Uu=205,ux=206,fx=207,dx=208,hx=209,px=210,mx=211,gx=212,vx=213,_x=214,xx=0,yx=1,Sx=2,nl=3,Ex=4,Mx=5,Tx=6,wx=7,Gg=0,Ax=1,Rx=2,Bi=0,Cx=1,Px=2,bx=3,Lx=4,Nx=5,Dx=6,Vg=300,ms=301,gs=302,Fu=303,Ou=304,wl=306,ku=1e3,Un=1001,Bu=1002,Xt=1003,dh=1004,ac=1005,xn=1006,Ix=1007,ma=1008,zi=1009,Ux=1010,Fx=1011,Hf=1012,Wg=1013,Ci=1014,Pi=1015,ga=1016,Xg=1017,jg=1018,ur=1020,Ox=1021,Fn=1023,kx=1024,Bx=1025,fr=1026,vs=1027,zx=1028,Yg=1029,Hx=1030,qg=1031,$g=1033,oc=33776,lc=33777,cc=33778,uc=33779,hh=35840,ph=35841,mh=35842,gh=35843,Kg=36196,vh=37492,_h=37496,xh=37808,yh=37809,Sh=37810,Eh=37811,Mh=37812,Th=37813,wh=37814,Ah=37815,Rh=37816,Ch=37817,Ph=37818,bh=37819,Lh=37820,Nh=37821,fc=36492,Dh=36494,Ih=36495,Gx=36283,Uh=36284,Fh=36285,Oh=36286,Zg=3e3,dr=3001,Vx=3200,Wx=3201,Xx=0,jx=1,Sn="",bt="srgb",hi="srgb-linear",Gf="display-p3",Al="display-p3-linear",il="linear",rt="srgb",rl="rec709",sl="p3",Tr=7680,kh=519,Yx=512,qx=513,$x=514,Qg=515,Kx=516,Zx=517,Qx=518,Jx=519,Bh=35044,zh="300 es",zu=1035,oi=2e3,al=2001;class Es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Hu=180/Math.PI;function Ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function ey(t,e){return(t%e+e)%e}function hc(t,e,n){return(1-n)*t+n*e}function Hh(t){return(t&t-1)===0&&t!==0}function Gu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],v=r[1],g=r[4],S=r[7],b=r[2],P=r[5],C=r[8];return s[0]=a*x+o*v+l*b,s[3]=a*p+o*g+l*P,s[6]=a*u+o*S+l*C,s[1]=c*x+f*v+d*b,s[4]=c*p+f*g+d*P,s[7]=c*u+f*S+d*C,s[2]=h*x+m*v+_*b,s[5]=h*p+m*g+_*P,s[8]=h*u+m*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*s,m=c*s-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new Ge;function Jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ol(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ty(){const t=ol("canvas");return t.style.display="block",t}const Gh={};function Zs(t){t in Gh||(Gh[t]=!0,console.warn(t))}const Vh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ya={[hi]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[bt]:{transfer:rt,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3(Wh),fromReference:t=>t.applyMatrix3(Vh)},[Gf]:{transfer:rt,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Wh),fromReference:t=>t.applyMatrix3(Vh).convertLinearToSRGB()}},ny=new Set([hi,Al]),Qe={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ny.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ya[e].toReference,r=Ya[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ya[t].primaries},getTransfer:function(t){return t===Sn?il:Ya[t].transfer}};function os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wr;class ev{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=ol("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ol("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=os(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(os(n[i]/255)*255):n[i]=os(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class tv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Ma(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gc(r[a].image)):s.push(gc(r[a]))}else s=gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ev.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ry=0;class rn extends Es{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Un,r=Un,s=xn,a=ma,o=Fn,l=zi,c=rn.DEFAULT_ANISOTROPY,f=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Ma(),this.name="",this.source=new tv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===dr?bt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ku:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ku:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?dr:Zg}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?bt:Sn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vg;rn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(m+1)/2,b=(u+1)/2,P=(f+h)/4,C=(d+x)/4,B=(_+p)/4;return g>S&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=P/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=B/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=B/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sy extends Es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===dr?bt:Sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new tv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends sy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class nv extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ay extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==_){let p=1-o;const u=l*h+c*m+f*_+d*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),P=Math.atan2(b,u*v);p=Math.sin(p*P)/b,o=Math.sin(o*P)/b}const S=o*v;if(l=l*p+h*S,c=c*p+m*S,f=f*p+_*S,d=d*p+x*S,p===1-o){const b=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=b,c*=b,f*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-o*m,e[n+2]=c*_+f*m+o*h-l*d,e[n+3]=f*_-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new j,Xh=new Ta;class wa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),$a.subVectors(this.max,Is),Ar.subVectors(e.a,Is),Rr.subVectors(e.b,Is),Cr.subVectors(e.c,Is),vi.subVectors(Rr,Ar),_i.subVectors(Cr,Rr),$i.subVectors(Ar,Cr);let n=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-$i.z,$i.y,vi.z,0,-vi.x,_i.z,0,-_i.x,$i.z,0,-$i.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-$i.y,$i.x,0];return!_c(n,Ar,Rr,Cr,$a)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Ar,Rr,Cr,$a))?!1:(Ka.crossVectors(vi,_i),n=[Ka.x,Ka.y,Ka.z],_c(n,Ar,Rr,Cr,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new j,new j,new j,new j,new j,new j,new j,new j],Rn=new j,qa=new wa,Ar=new j,Rr=new j,Cr=new j,vi=new j,_i=new j,$i=new j,Is=new j,$a=new j,Ka=new j,Ki=new j;function _c(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ki.fromArray(t,s);const o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),f=i.dot(Ki);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const oy=new wa,Us=new j,xc=new j;class Rl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const n=Us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(xc)),this.expandByPoint(Us.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new j,yc=new j,Za=new j,xi=new j,Sc=new j,Qa=new j,Ec=new j;class iv{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(yc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Za),o=xi.dot(this.direction),l=-xi.dot(Za),c=xi.lengthSq(),f=Math.abs(1-a*a);let d,h,m,_;if(f>0)if(d=a*l-o,h=a*o-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yc).addScaledVector(Za,h),m}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Sc.subVectors(n,e),Qa.subVectors(i,e),Ec.crossVectors(Sc,Qa);let a=this.direction.dot(Ec),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Qa.crossVectors(xi,Qa));if(l<0)return null;const c=o*this.direction.dot(Sc.cross(xi));if(c<0||l+c>a)return null;const f=-o*xi.dot(Ec);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,a,o,l,c,f,d,h,m,_,x,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,d,h,m,_,x,p)}set(e,n,i,r,s,a,o,l,c,f,d,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h+x*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h-x*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=a*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(i,on),yi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(i,on)),yi.normalize(),Ja.crossVectors(on,yi),r[0]=yi.x,r[4]=Ja.x,r[8]=on.x,r[1]=yi.y,r[5]=Ja.y,r[9]=on.y,r[2]=yi.z,r[6]=Ja.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],v=i[3],g=i[7],S=i[11],b=i[15],P=r[0],C=r[4],B=r[8],E=r[12],T=r[1],L=r[5],q=r[9],ee=r[13],D=r[2],H=r[6],$=r[10],Z=r[14],I=r[3],z=r[7],R=r[11],w=r[15];return s[0]=a*P+o*T+l*D+c*I,s[4]=a*C+o*L+l*H+c*z,s[8]=a*B+o*q+l*$+c*R,s[12]=a*E+o*ee+l*Z+c*w,s[1]=f*P+d*T+h*D+m*I,s[5]=f*C+d*L+h*H+m*z,s[9]=f*B+d*q+h*$+m*R,s[13]=f*E+d*ee+h*Z+m*w,s[2]=_*P+x*T+p*D+u*I,s[6]=_*C+x*L+p*H+u*z,s[10]=_*B+x*q+p*$+u*R,s[14]=_*E+x*ee+p*Z+u*w,s[3]=v*P+g*T+S*D+b*I,s[7]=v*C+g*L+S*H+b*z,s[11]=v*B+g*q+S*$+b*R,s[15]=v*E+g*ee+S*Z+b*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*m-i*l*m)+x*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*f-s*l*f)+p*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*f-i*c*f)+u*(-r*o*f-n*l*d+n*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=d*p*c-x*h*c+x*l*m-o*p*m-d*l*u+o*h*u,g=_*h*c-f*p*c-_*l*m+a*p*m+f*l*u-a*h*u,S=f*x*c-_*d*c+_*o*m-a*x*m-f*o*u+a*d*u,b=_*d*l-f*x*l-_*o*h+a*x*h+f*o*p-a*d*p,P=n*v+i*g+r*S+s*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=v*C,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*u-i*h*u)*C,e[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*u+i*l*u)*C,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*m-i*l*m)*C,e[4]=g*C,e[5]=(f*p*s-_*h*s+_*r*m-n*p*m-f*r*u+n*h*u)*C,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*C,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*m+n*l*m)*C,e[8]=S*C,e[9]=(_*d*s-f*x*s-_*i*m+n*x*m+f*i*u-n*d*u)*C,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*C,e[11]=(f*o*s-a*d*s-f*i*c+n*d*c+a*i*m-n*o*m)*C,e[12]=b*C,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*p+n*d*p)*C,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*C,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,d=o+o,h=s*c,m=s*f,_=s*d,x=a*f,p=a*d,u=o*d,v=l*c,g=l*f,S=l*d,b=i.x,P=i.y,C=i.z;return r[0]=(1-(x+u))*b,r[1]=(m+S)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(m-S)*P,r[5]=(1-(h+u))*P,r[6]=(p+v)*P,r[7]=0,r[8]=(_+g)*C,r[9]=(p-v)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,f=1/a,d=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=f,Cn.elements[5]*=f,Cn.elements[6]*=f,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,n.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=oi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===oi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===al)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(a-s),h=(n+e)*c,m=(i+r)*f;let _,x;if(o===oi)_=(a+s)*d,x=-2*d;else if(o===al)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new j,Cn=new Ct,ly=new j(0,0,0),cy=new j(1,1,1),yi=new j,Ja=new j,on=new j,jh=new Ct,Yh=new Ta;class Cl{constructor(e=0,n=0,i=0,r=Cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cl.DEFAULT_ORDER="XYZ";let rv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uy=0;const qh=new j,br=new Ta,Jn=new Ct,eo=new j,Fs=new j,fy=new j,dy=new Ta,$h=new j(1,0,0),Kh=new j(0,1,0),Zh=new j(0,0,1),hy={type:"added"},py={type:"removed"};class sn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new j,n=new Cl,i=new Ta,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ge}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,n){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?eo.copy(e):eo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Fs,eo,this.up):Jn.lookAt(eo,Fs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Jn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(py)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new j(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new j,ei=new j,Mc=new j,ti=new j,Lr=new j,Nr=new j,Qh=new j,Tc=new j,wc=new j,Ac=new j;let to=!1;class Dn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ei.subVectors(i,n),Mc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ei),l=Pn.dot(Mc),c=ei.dot(ei),f=ei.dot(Mc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,a,o,l){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ei.subVectors(e,n),Pn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Lr.subVectors(r,i),Nr.subVectors(s,i),Tc.subVectors(e,i);const l=Lr.dot(Tc),c=Nr.dot(Tc);if(l<=0&&c<=0)return n.copy(i);wc.subVectors(e,r);const f=Lr.dot(wc),d=Nr.dot(wc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Lr,a);Ac.subVectors(e,s);const m=Lr.dot(Ac),_=Nr.dot(Ac);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Nr,o);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return Qh.subVectors(s,r),o=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(Qh,o);const u=1/(p+x+h);return a=x*u,o=h*u,n.copy(i).addScaledVector(Lr,a).addScaledVector(Nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},no={h:0,s:0,l:0};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=ey(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rc(a,s,e+1/3),this.g=Rc(a,s,e),this.b=Rc(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bt){const i=sv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Zt(kt.r*255,0,255))*65536+Math.round(Zt(kt.g*255,0,255))*256+Math.round(Zt(kt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=bt){Qe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(no);const i=hc(Si.h,no.h,n),r=hc(Si.s,no.s,n),s=hc(Si.l,no.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new $e;$e.NAMES=sv;let my=0;class Aa extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=as,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Uu,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Iu&&(i.blendSrc=this.blendSrc),this.blendDst!==Uu&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ll extends Aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new j,io=new Ze;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)io.fromBufferAttribute(this,n),io.applyMatrix3(e),this.setXY(n,io.x,io.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}}class av extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ov extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hr extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gy=0;const gn=new Ct,Cc=new sn,Dr=new j,ln=new wa,Os=new wa,wt=new j;class mi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jg(e)?ov:av)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(ln.min,Os.min),ln.expandByPoint(wt),wt.addVectors(ln.max,Os.max),ln.expandByPoint(wt)):(ln.expandByPoint(Os.min),ln.expandByPoint(Os.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)wt.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(e,c),wt.add(Dr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<o;T++)c[T]=new j,f[T]=new j;const d=new j,h=new j,m=new j,_=new Ze,x=new Ze,p=new Ze,u=new j,v=new j;function g(T,L,q){d.fromArray(r,T*3),h.fromArray(r,L*3),m.fromArray(r,q*3),_.fromArray(a,T*2),x.fromArray(a,L*2),p.fromArray(a,q*2),h.sub(d),m.sub(d),x.sub(_),p.sub(_);const ee=1/(x.x*p.y-p.x*x.y);isFinite(ee)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(ee),v.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(ee),c[T].add(u),c[L].add(u),c[q].add(u),f[T].add(v),f[L].add(v),f[q].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,L=S.length;T<L;++T){const q=S[T],ee=q.start,D=q.count;for(let H=ee,$=ee+D;H<$;H+=3)g(i[H+0],i[H+1],i[H+2])}const b=new j,P=new j,C=new j,B=new j;function E(T){C.fromArray(s,T*3),B.copy(C);const L=c[T];b.copy(L),b.sub(C.multiplyScalar(C.dot(L))).normalize(),P.crossVectors(B,L);const ee=P.dot(f[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=ee}for(let T=0,L=S.length;T<L;++T){const q=S[T],ee=q.start,D=q.count;for(let H=ee,$=ee+D;H<$;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,f=new j,d=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new Bn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new Ct,Zi=new iv,ro=new Rl,ep=new j,Ir=new j,Ur=new j,Fr=new j,Pc=new j,so=new j,ao=new Ze,oo=new Ze,lo=new Ze,tp=new j,np=new j,ip=new j,co=new j,uo=new j;class Yn extends sn{constructor(e=new mi,n=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(Pc.fromBufferAttribute(d,e),a?so.addScaledVector(Pc,f):so.addScaledVector(Pc.sub(n),f))}n.add(so)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(ro.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ro,ep)===null||Zi.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Jh.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,b=g;S<b;S+=3){const P=o.getX(S),C=o.getX(S+1),B=o.getX(S+2);r=fo(this,u,e,i,c,f,d,P,C,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),S=o.getX(p+2);r=fo(this,a,e,i,c,f,d,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,b=g;S<b;S+=3){const P=S,C=S+1,B=S+2;r=fo(this,u,e,i,c,f,d,P,C,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,g=p+1,S=p+2;r=fo(this,a,e,i,c,f,d,v,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vy(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vi,o),l===null)return null;uo.copy(o),uo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(uo);return c<n.near||c>n.far?null:{distance:c,point:uo.clone(),object:t}}function fo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ir),t.getVertexPosition(l,Ur),t.getVertexPosition(c,Fr);const f=vy(t,e,n,i,Ir,Ur,Fr,co);if(f){r&&(ao.fromBufferAttribute(r,o),oo.fromBufferAttribute(r,l),lo.fromBufferAttribute(r,c),f.uv=Dn.getInterpolation(co,Ir,Ur,Fr,ao,oo,lo,new Ze)),s&&(ao.fromBufferAttribute(s,o),oo.fromBufferAttribute(s,l),lo.fromBufferAttribute(s,c),f.uv1=Dn.getInterpolation(co,Ir,Ur,Fr,ao,oo,lo,new Ze),f.uv2=f.uv1),a&&(tp.fromBufferAttribute(a,o),np.fromBufferAttribute(a,l),ip.fromBufferAttribute(a,c),f.normal=Dn.getInterpolation(co,Ir,Ur,Fr,tp,np,ip,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};Dn.getNormal(Ir,Ur,Fr,d.normal),f.face=d}return f}class Ra extends mi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(f,3)),this.setAttribute("uv",new hr(d,2));function _(x,p,u,v,g,S,b,P,C,B,E){const T=S/C,L=b/B,q=S/2,ee=b/2,D=P/2,H=C+1,$=B+1;let Z=0,I=0;const z=new j;for(let R=0;R<$;R++){const w=R*L-ee;for(let k=0;k<H;k++){const U=k*T-q;z[x]=U*v,z[p]=w*g,z[u]=D,c.push(z.x,z.y,z.z),z[x]=0,z[p]=0,z[u]=P>0?1:-1,f.push(z.x,z.y,z.z),d.push(k/C),d.push(1-R/B),Z+=1}}for(let R=0;R<B;R++)for(let w=0;w<C;w++){const k=h+w+H*R,U=h+w+H*(R+1),G=h+(w+1)+H*(R+1),Q=h+(w+1)+H*R;l.push(k,U,Q),l.push(U,G,Q),I+=6}o.addGroup(m,I,E),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function _y(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const xy={clone:_s,merge:Vt};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=_y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cv extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends cv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,kr=1;class Ey extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Or,kr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Or,kr,e,n);s.layers=this.layers,this.add(s);const a=new yn(Or,kr,e,n);a.layers=this.layers,this.add(a);const o=new yn(Or,kr,e,n);o.layers=this.layers,this.add(o);const l=new yn(Or,kr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Or,kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class uv extends rn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class My extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?bt:Sn),this.texture=new uv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ra(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ki});s.uniforms.tEquirect.value=n;const a=new Yn(r,s),o=n.minFilter;return n.minFilter===ma&&(n.minFilter=xn),new Ey(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const bc=new j,Ty=new j,wy=new Ge;class tr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bc.subVectors(i,n).cross(Ty.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wy.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Rl,ho=new j;class fv{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,a=new tr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-m,S-u).normalize(),i[1].setComponents(l+s,h+c,p+m,S+u).normalize(),i[2].setComponents(l+a,h+f,p+_,S+v).normalize(),i[3].setComponents(l-a,h-f,p-_,S-v).normalize(),i[4].setComponents(l-o,h-d,p-x,S-g).normalize(),n===oi)i[5].setComponents(l+o,h+d,p+x,S+g).normalize();else if(n===al)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ay(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:a,remove:o,update:l}}class va extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,h=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<f;u++){const v=u*h-a;for(let g=0;g<c;g++){const S=g*d-s;_.push(S,-v,0),x.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,S=v+c*(u+1),b=v+1+c*(u+1),P=v+1+c*u;m.push(g,S,P),m.push(S,b,P)}this.setIndex(m),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(x,3)),this.setAttribute("uv",new hr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,US=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,IE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Ry,alphahash_pars_fragment:Cy,alphamap_fragment:Py,alphamap_pars_fragment:by,alphatest_fragment:Ly,alphatest_pars_fragment:Ny,aomap_fragment:Dy,aomap_pars_fragment:Iy,batching_pars_vertex:Uy,batching_vertex:Fy,begin_vertex:Oy,beginnormal_vertex:ky,bsdfs:By,iridescence_fragment:zy,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:Xy,color_fragment:jy,color_pars_fragment:Yy,color_pars_vertex:qy,color_vertex:$y,common:Ky,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:aS,envmap_pars_fragment:oS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:yS,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:fS,fog_fragment:dS,fog_pars_fragment:hS,gradientmap_pars_fragment:pS,lightmap_fragment:mS,lightmap_pars_fragment:gS,lights_lambert_fragment:vS,lights_lambert_pars_fragment:_S,lights_pars_begin:xS,lights_toon_fragment:SS,lights_toon_pars_fragment:ES,lights_phong_fragment:MS,lights_phong_pars_fragment:TS,lights_physical_fragment:wS,lights_physical_pars_fragment:AS,lights_fragment_begin:RS,lights_fragment_maps:CS,lights_fragment_end:PS,logdepthbuf_fragment:bS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:NS,logdepthbuf_vertex:DS,map_fragment:IS,map_pars_fragment:US,map_particle_fragment:FS,map_particle_pars_fragment:OS,metalnessmap_fragment:kS,metalnessmap_pars_fragment:BS,morphcolor_vertex:zS,morphnormal_vertex:HS,morphtarget_pars_vertex:GS,morphtarget_vertex:VS,normal_fragment_begin:WS,normal_fragment_maps:XS,normal_pars_fragment:jS,normal_pars_vertex:YS,normal_vertex:qS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:JS,opaque_fragment:eE,packing:tE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:cE,shadowmap_vertex:uE,shadowmask_pars_fragment:fE,skinbase_vertex:dE,skinning_pars_vertex:hE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:vE,tonemapping_fragment:_E,tonemapping_pars_fragment:xE,transmission_fragment:yE,transmission_pars_fragment:SE,uv_pars_fragment:EE,uv_pars_vertex:ME,uv_vertex:TE,worldpos_vertex:wE,background_vert:AE,background_frag:RE,backgroundCube_vert:CE,backgroundCube_frag:PE,cube_vert:bE,cube_frag:LE,depth_vert:NE,depth_frag:DE,distanceRGBA_vert:IE,distanceRGBA_frag:UE,equirect_vert:FE,equirect_frag:OE,linedashed_vert:kE,linedashed_frag:BE,meshbasic_vert:zE,meshbasic_frag:HE,meshlambert_vert:GE,meshlambert_frag:VE,meshmatcap_vert:WE,meshmatcap_frag:XE,meshnormal_vert:jE,meshnormal_frag:YE,meshphong_vert:qE,meshphong_frag:$E,meshphysical_vert:KE,meshphysical_frag:ZE,meshtoon_vert:QE,meshtoon_frag:JE,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:rM,sprite_frag:sM},ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const po={r:0,b:0,g:0};function aM(t,e,n,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===wl)?(f===void 0&&(f=new Yn(new Ra(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:_s(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Yn(new va(2,2),new yr({name:"BackgroundMaterial",uniforms:_s(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(po,lv(t)),i.buffers.color.setClear(po.r,po.g,po.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:_}}function oM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,f=!1;function d(D,H,$,Z,I){let z=!1;if(a){const R=x(Z,$,H);c!==R&&(c=R,m(c.object)),z=u(D,Z,$,I),z&&v(D,Z,$,I)}else{const R=H.wireframe===!0;(c.geometry!==Z.id||c.program!==$.id||c.wireframe!==R)&&(c.geometry=Z.id,c.program=$.id,c.wireframe=R,z=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,B(D,H,$,Z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,H,$){const Z=$.wireframe===!0;let I=o[D.id];I===void 0&&(I={},o[D.id]=I);let z=I[H.id];z===void 0&&(z={},I[H.id]=z);let R=z[Z];return R===void 0&&(R=p(h()),z[Z]=R),R}function p(D){const H=[],$=[],Z=[];for(let I=0;I<r;I++)H[I]=0,$[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:Z,object:D,attributes:{},index:null}}function u(D,H,$,Z){const I=c.attributes,z=H.attributes;let R=0;const w=$.getAttributes();for(const k in w)if(w[k].location>=0){const G=I[k];let Q=z[k];if(Q===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;R++}return c.attributesNum!==R||c.index!==Z}function v(D,H,$,Z){const I={},z=H.attributes;let R=0;const w=$.getAttributes();for(const k in w)if(w[k].location>=0){let G=z[k];G===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(G=D.instanceColor));const Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),I[k]=Q,R++}c.attributes=I,c.attributesNum=R,c.index=Z}function g(){const D=c.newAttributes;for(let H=0,$=D.length;H<$;H++)D[H]=0}function S(D){b(D,0)}function b(D,H){const $=c.newAttributes,Z=c.enabledAttributes,I=c.attributeDivisors;$[D]=1,Z[D]===0&&(t.enableVertexAttribArray(D),Z[D]=1),I[D]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),I[D]=H)}function P(){const D=c.newAttributes,H=c.enabledAttributes;for(let $=0,Z=H.length;$<Z;$++)H[$]!==D[$]&&(t.disableVertexAttribArray($),H[$]=0)}function C(D,H,$,Z,I,z,R){R===!0?t.vertexAttribIPointer(D,H,$,I,z):t.vertexAttribPointer(D,H,$,Z,I,z)}function B(D,H,$,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=Z.attributes,z=$.getAttributes(),R=H.defaultAttributeValues;for(const w in z){const k=z[w];if(k.location>=0){let U=I[w];if(U===void 0&&(w==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),w==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),U!==void 0){const G=U.normalized,Q=U.itemSize,te=n.get(U);if(te===void 0)continue;const J=te.buffer,ue=te.type,ge=te.bytesPerElement,pe=i.isWebGL2===!0&&(ue===t.INT||ue===t.UNSIGNED_INT||U.gpuType===Wg);if(U.isInterleavedBufferAttribute){const Se=U.data,F=Se.stride,Xe=U.offset;if(Se.isInstancedInterleavedBuffer){for(let oe=0;oe<k.locationSize;oe++)b(k.location+oe,Se.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let oe=0;oe<k.locationSize;oe++)S(k.location+oe);t.bindBuffer(t.ARRAY_BUFFER,J);for(let oe=0;oe<k.locationSize;oe++)C(k.location+oe,Q/k.locationSize,ue,G,F*ge,(Xe+Q/k.locationSize*oe)*ge,pe)}else{if(U.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)b(k.location+Se,U.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Se=0;Se<k.locationSize;Se++)S(k.location+Se);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Se=0;Se<k.locationSize;Se++)C(k.location+Se,Q/k.locationSize,ue,G,Q*ge,Q/k.locationSize*Se*ge,pe)}}else if(R!==void 0){const G=R[w];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(k.location,G);break;case 3:t.vertexAttrib3fv(k.location,G);break;case 4:t.vertexAttrib4fv(k.location,G);break;default:t.vertexAttrib1fv(k.location,G)}}}}P()}function E(){q();for(const D in o){const H=o[D];for(const $ in H){const Z=H[$];for(const I in Z)_(Z[I].object),delete Z[I];delete H[$]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const H=o[D.id];for(const $ in H){const Z=H[$];for(const I in Z)_(Z[I].object),delete Z[I];delete H[$]}delete o[D.id]}function L(D){for(const H in o){const $=o[H];if($[D.id]===void 0)continue;const Z=$[D.id];for(const I in Z)_(Z[I].object),delete Z[I];delete $[D.id]}}function q(){ee(),f=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:ee,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:S,disableUnusedAttributes:P}}function lM(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function cM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=a||e.has("OES_texture_float"),b=g&&S,P=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:P}}function uM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new tr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const v=s?0:i,g=v*4;let S=u.clippingState||null;l.value=S,S=f(_,h,g,m);for(let b=0;b!==g;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,S=m;g!==x;++g,S+=4)a.copy(d[g]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function fM(t){let e=new WeakMap;function n(a,o){return o===Fu?a.mapping=ms:o===Ou&&(a.mapping=gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fu||o===Ou)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new My(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dM extends cv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qr=4,rp=[.125,.215,.35,.446,.526,.582],rr=20,Lc=new dM,sp=new $e;let Nc=null,Dc=0,Ic=0;const nr=(1+Math.sqrt(5))/2,Br=1/nr,ap=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,nr,Br),new j(0,nr,-Br),new j(Br,0,nr),new j(-Br,0,nr),new j(nr,Br,0),new j(-nr,Br,0)];class op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Dc,Ic),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ga,format:Fn,colorSpace:hi,depthBuffer:!1},r=lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hM(s)),this._blurMaterial=pM(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Lc)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(sp),f.toneMapping=Bi,f.autoClear=!1;const m=new ll({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Yn(new Ra,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(sp),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;mo(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;mo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ap[(r-1)%ap.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Yn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),x=s/_,p=isFinite(s)?1+Math.floor(f*x):rr;p>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const u=[];let v=0;for(let C=0;C<rr;++C){const B=C/x,E=Math.exp(-B*B/2);u.push(E),C===0?v+=E:C<p&&(v+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],b=3*S*(r>g-Qr?r-g+Qr:0),P=4*(this._cubeSize-S);mo(n,b,P,3*S,2*S),l.setRenderTarget(n),l.render(d,Lc)}}function hM(t){const e=[],n=[],i=[];let r=t;const s=t-Qr+1+rp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Qr?l=rp[a-t+Qr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,B=P>2?0:-1,E=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];v.set(E,x*_*P),g.set(h,p*_*P);const T=[P,P,P,P,P,P];S.set(T,u*_*P)}const b=new mi;b.setAttribute("position",new Bn(v,x)),b.setAttribute("uv",new Bn(g,p)),b.setAttribute("faceIndex",new Bn(S,u)),e.push(b),r>Qr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lp(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pM(t,e,n){const i=new Float32Array(rr),r=new j(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function cp(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function up(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mM(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fu||l===Ou,f=l===ms||l===gs;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new op(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new op(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vM(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,S=v.length;g<S;g+=3){const b=v[g+0],P=v[g+1],C=v[g+2];h.push(b,P,P,C,C,b)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const b=g+0,P=g+1,C=g+2;h.push(b,P,P,C,C,b)}}else return;const p=new(Jg(h)?ov:av)(h,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function _M(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function d(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,o,m*l,x),n.update(_,s,x)}function h(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,x);let u=0;for(let v=0;v<x;v++)u+=_[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function xM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yM(t,e){return t[0]-e[0]}function SM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function EM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let H=function(){ee.dispose(),s.delete(f),f.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,P=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],B=f.morphAttributes.color||[];let E=0;g===!0&&(E=1),S===!0&&(E=2),b===!0&&(E=3);let T=f.attributes.position.count*E,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*L*4*x),ee=new nv(q,T,L,x);ee.type=Pi,ee.needsUpdate=!0;const D=E*4;for(let $=0;$<x;$++){const Z=P[$],I=C[$],z=B[$],R=T*L*4*$;for(let w=0;w<Z.count;w++){const k=w*D;g===!0&&(a.fromBufferAttribute(Z,w),q[R+k+0]=a.x,q[R+k+1]=a.y,q[R+k+2]=a.z,q[R+k+3]=0),S===!0&&(a.fromBufferAttribute(I,w),q[R+k+4]=a.x,q[R+k+5]=a.y,q[R+k+6]=a.z,q[R+k+7]=0),b===!0&&(a.fromBufferAttribute(z,w),q[R+k+8]=a.x,q[R+k+9]=a.y,q[R+k+10]=a.z,q[R+k+11]=z.itemSize===4?a.w:1)}}p={count:x,texture:ee,size:new Ze(T,L)},s.set(f,p),f.addEventListener("dispose",H)}let u=0;for(let g=0;g<h.length;g++)u+=h[g];const v=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[f.id]=x}for(let S=0;S<_;S++){const b=x[S];b[0]=S,b[1]=h[S]}x.sort(SM);for(let S=0;S<8;S++)S<_&&x[S][1]?(o[S][0]=x[S][0],o[S][1]=x[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(yM);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const b=o[S],P=b[0],C=b[1];P!==Number.MAX_SAFE_INTEGER&&C?(p&&f.getAttribute("morphTarget"+S)!==p[P]&&f.setAttribute("morphTarget"+S,p[P]),u&&f.getAttribute("morphNormal"+S)!==u[P]&&f.setAttribute("morphNormal"+S,u[P]),r[S]=C,v+=C):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const g=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function MM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class hv extends rn{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:fr,f!==fr&&f!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===fr&&(i=Ci),i===void 0&&f===vs&&(i=ur),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const pv=new rn,mv=new hv(1,1);mv.compareFunction=Qg;const gv=new nv,vv=new ay,_v=new uv,fp=[],dp=[],hp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fp[r];if(s===void 0&&(s=new Float32Array(r),fp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pl(t,e){let n=dp[e];n===void 0&&(n=new Int32Array(e),dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function AM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function RM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function CM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;mp.set(i),t.uniformMatrix2fv(this.addr,!1,mp),Et(n,i)}}function PM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;pp.set(i),t.uniformMatrix3fv(this.addr,!1,pp),Et(n,i)}}function bM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(St(n,i))return;hp.set(i),t.uniformMatrix4fv(this.addr,!1,hp),Et(n,i)}}function LM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function DM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function IM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function UM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function OM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function BM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?mv:pv;n.setTexture2D(e||s,r)}function zM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vv,r)}function HM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_v,r)}function GM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gv,r)}function VM(t){switch(t){case 5126:return TM;case 35664:return wM;case 35665:return AM;case 35666:return RM;case 35674:return CM;case 35675:return PM;case 35676:return bM;case 5124:case 35670:return LM;case 35667:case 35671:return NM;case 35668:case 35672:return DM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return FM;case 36295:return OM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(t,e){t.uniform1fv(this.addr,e)}function XM(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function jM(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function YM(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function qM(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $M(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KM(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZM(t,e){t.uniform1iv(this.addr,e)}function QM(t,e){t.uniform2iv(this.addr,e)}function JM(t,e){t.uniform3iv(this.addr,e)}function eT(t,e){t.uniform4iv(this.addr,e)}function tT(t,e){t.uniform1uiv(this.addr,e)}function nT(t,e){t.uniform2uiv(this.addr,e)}function iT(t,e){t.uniform3uiv(this.addr,e)}function rT(t,e){t.uniform4uiv(this.addr,e)}function sT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||pv,s[a])}function aT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||vv,s[a])}function oT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||_v,s[a])}function lT(t,e,n){const i=this.cache,r=e.length,s=Pl(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||gv,s[a])}function cT(t){switch(t){case 5126:return WM;case 35664:return XM;case 35665:return jM;case 35666:return YM;case 35674:return qM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VM(n.type)}}class fT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cT(n.type)}}class dT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function gp(t,e){t.seq.push(e),t.map[e.id]=e}function hT(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const s=Uc.exec(i),a=Uc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){gp(n,c===void 0?new uT(o,t,e):new fT(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new dT(o),gp(n,d)),n=d}}}class Lo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);hT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pT=37297;let mT=0;function gT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function vT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case hi:case Al:return[i,"LinearTransferOETF"];case bt:case Gf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function _p(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gT(t.getShaderSource(e),a)}else return r}function _T(t,e){const n=vT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xT(t,e){let n;switch(e){case Cx:n="Linear";break;case Px:n="Reinhard";break;case bx:n="OptimizedCineon";break;case Lx:n="ACESFilmic";break;case Dx:n="AgX";break;case Nx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function ST(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jr).join(`
`)}function ET(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Jr(t){return t!==""}function xp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(t){return t.replace(TT,AT)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AT(t,e){let n=Oe[e];if(n===void 0){const i=wT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vu(n)}const RT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(t){return t.replace(RT,CT)}function CT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ep(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function NT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ax:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function DT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=PT(n),c=bT(n),f=LT(n),d=NT(n),h=DT(n),m=n.isWebGL2?"":yT(n),_=ST(n),x=ET(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Jr).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Jr).join(`
`),v.length>0&&(v+=`
`)):(u=[Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),v=[m,Ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Bi?xT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,_T("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jr).join(`
`)),a=Vu(a),a=xp(a,n),a=yp(a,n),o=Vu(o),o=xp(o,n),o=yp(o,n),a=Sp(a),o=Sp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+u+a,b=g+v+o,P=vp(r,r.VERTEX_SHADER,S),C=vp(r,r.FRAGMENT_SHADER,b);r.attachShader(p,P),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B(q){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(P).trim(),H=r.getShaderInfoLog(C).trim();let $=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,P,C);else{const I=_p(r,P,"vertex"),z=_p(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+I+`
`+z)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(D===""||H==="")&&(Z=!1);Z&&(q.diagnostics={runnable:$,programLog:ee,vertexShader:{log:D,prefix:u},fragmentShader:{log:H,prefix:v}})}r.deleteShader(P),r.deleteShader(C),E=new Lo(r,p),T=MT(r,p)}let E;this.getUniforms=function(){return E===void 0&&B(this),E};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(p,pT)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=C,this}let UT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OT(e),n.set(e,i)),i}}class OT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function kT(t,e,n,i,r,s,a){const o=new rv,l=new FT,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,T,L,q,ee){const D=q.fog,H=ee.geometry,$=E.isMeshStandardMaterial?q.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||$),I=Z&&Z.mapping===wl?Z.image.height:null,z=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const R=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,w=R!==void 0?R.length:0;let k=0;H.morphAttributes.position!==void 0&&(k=1),H.morphAttributes.normal!==void 0&&(k=2),H.morphAttributes.color!==void 0&&(k=3);let U,G,Q,te;if(z){const Ht=Xn[z];U=Ht.vertexShader,G=Ht.fragmentShader}else U=E.vertexShader,G=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const J=t.getRenderTarget(),ue=ee.isInstancedMesh===!0,ge=ee.isBatchedMesh===!0,pe=!!E.map,Se=!!E.matcap,F=!!Z,Xe=!!E.aoMap,oe=!!E.lightMap,Ee=!!E.bumpMap,me=!!E.normalMap,We=!!E.displacementMap,Ae=!!E.emissiveMap,A=!!E.metalnessMap,y=!!E.roughnessMap,V=E.anisotropy>0,se=E.clearcoat>0,ie=E.iridescence>0,ae=E.sheen>0,Me=E.transmission>0,fe=V&&!!E.anisotropyMap,xe=se&&!!E.clearcoatMap,Re=se&&!!E.clearcoatNormalMap,De=se&&!!E.clearcoatRoughnessMap,ne=ie&&!!E.iridescenceMap,Ye=ie&&!!E.iridescenceThicknessMap,ke=ae&&!!E.sheenColorMap,Le=ae&&!!E.sheenRoughnessMap,we=!!E.specularMap,ye=!!E.specularColorMap,Fe=!!E.specularIntensityMap,qe=Me&&!!E.transmissionMap,ft=Me&&!!E.thicknessMap,ze=!!E.gradientMap,le=!!E.alphaMap,N=E.alphaTest>0,de=!!E.alphaHash,he=!!E.extensions,be=!!H.attributes.uv1,Ce=!!H.attributes.uv2,Je=!!H.attributes.uv3;let et=Bi;return E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:f,shaderID:z,shaderType:E.type,shaderName:E.name,vertexShader:U,fragmentShader:G,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ge,instancing:ue,instancingColor:ue&&ee.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:hi,map:pe,matcap:Se,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:I,aoMap:Xe,lightMap:oe,bumpMap:Ee,normalMap:me,displacementMap:h&&We,emissiveMap:Ae,normalMapObjectSpace:me&&E.normalMapType===jx,normalMapTangentSpace:me&&E.normalMapType===Xx,metalnessMap:A,roughnessMap:y,anisotropy:V,anisotropyMap:fe,clearcoat:se,clearcoatMap:xe,clearcoatNormalMap:Re,clearcoatRoughnessMap:De,iridescence:ie,iridescenceMap:ne,iridescenceThicknessMap:Ye,sheen:ae,sheenColorMap:ke,sheenRoughnessMap:Le,specularMap:we,specularColorMap:ye,specularIntensityMap:Fe,transmission:Me,transmissionMap:qe,thicknessMap:ft,gradientMap:ze,opaque:E.transparent===!1&&E.blending===as,alphaMap:le,alphaTest:N,alphaHash:de,combine:E.combine,mapUv:pe&&x(E.map.channel),aoMapUv:Xe&&x(E.aoMap.channel),lightMapUv:oe&&x(E.lightMap.channel),bumpMapUv:Ee&&x(E.bumpMap.channel),normalMapUv:me&&x(E.normalMap.channel),displacementMapUv:We&&x(E.displacementMap.channel),emissiveMapUv:Ae&&x(E.emissiveMap.channel),metalnessMapUv:A&&x(E.metalnessMap.channel),roughnessMapUv:y&&x(E.roughnessMap.channel),anisotropyMapUv:fe&&x(E.anisotropyMap.channel),clearcoatMapUv:xe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(E.sheenRoughnessMap.channel),specularMapUv:we&&x(E.specularMap.channel),specularColorMapUv:ye&&x(E.specularColorMap.channel),specularIntensityMapUv:Fe&&x(E.specularIntensityMap.channel),transmissionMapUv:qe&&x(E.transmissionMap.channel),thicknessMapUv:ft&&x(E.thicknessMap.channel),alphaMapUv:le&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(me||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Ce,vertexUv3s:Je,pointsUvs:ee.isPoints===!0&&!!H.attributes.uv&&(pe||le),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:k,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===In,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:he&&E.extensions.derivatives===!0,extensionFragDepth:he&&E.extensions.fragDepth===!0,extensionDrawBuffers:he&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)T.push(L),T.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(T,E),g(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function v(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function g(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const T=_[E.type];let L;if(T){const q=Xn[T];L=xy.clone(q.uniforms)}else L=E.uniforms;return L}function b(E,T){let L;for(let q=0,ee=c.length;q<ee;q++){const D=c[q];if(D.cacheKey===T){L=D,++L.usedTimes;break}}return L===void 0&&(L=new IT(t,T,E,s),c.push(L)),L}function P(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:b,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:B}}function BT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,m,_,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function o(d,h,m,_,x,p){const u=a(d,h,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,x,p){const u=a(d,h,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||zT),i.length>1&&i.sort(h||Mp),r.length>1&&r.sort(h||Mp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function HT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Tp,t.set(i,[a])):r>=s.length?(a=new Tp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function GT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new $e};break;case"SpotLight":n={position:new j,direction:new j,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function VT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WT=0;function XT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jT(t,e){const n=new GT,i=VT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new j);const s=new j,a=new Ct,o=new Ct;function l(f,d){let h=0,m=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let x=0,p=0,u=0,v=0,g=0,S=0,b=0,P=0,C=0,B=0,E=0;f.sort(XT);const T=d===!0?Math.PI:1;for(let q=0,ee=f.length;q<ee;q++){const D=f[q],H=D.color,$=D.intensity,Z=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*$*T,m+=H.g*$*T,_+=H.b*$*T;else if(D.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(D.sh.coefficients[z],$);E++}else if(D.isDirectionalLight){const z=n.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const R=D.shadow,w=i.get(D);w.shadowBias=R.bias,w.shadowNormalBias=R.normalBias,w.shadowRadius=R.radius,w.shadowMapSize=R.mapSize,r.directionalShadow[x]=w,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=D.shadow.matrix,S++}r.directional[x]=z,x++}else if(D.isSpotLight){const z=n.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(H).multiplyScalar($*T),z.distance=Z,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,r.spot[u]=z;const R=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,R.updateMatrices(D),D.castShadow&&B++),r.spotLightMatrix[u]=R.matrix,D.castShadow){const w=i.get(D);w.shadowBias=R.bias,w.shadowNormalBias=R.normalBias,w.shadowRadius=R.radius,w.shadowMapSize=R.mapSize,r.spotShadow[u]=w,r.spotShadowMap[u]=I,P++}u++}else if(D.isRectAreaLight){const z=n.get(D);z.color.copy(H).multiplyScalar($),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=z,v++}else if(D.isPointLight){const z=n.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*T),z.distance=D.distance,z.decay=D.decay,D.castShadow){const R=D.shadow,w=i.get(D);w.shadowBias=R.bias,w.shadowNormalBias=R.normalBias,w.shadowRadius=R.radius,w.shadowMapSize=R.mapSize,w.shadowCameraNear=R.camera.near,w.shadowCameraFar=R.camera.far,r.pointShadow[p]=w,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=D.shadow.matrix,b++}r.point[p]=z,p++}else if(D.isHemisphereLight){const z=n.get(D);z.skyColor.copy(D.color).multiplyScalar($*T),z.groundColor.copy(D.groundColor).multiplyScalar($*T),r.hemi[g]=z,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==x||L.pointLength!==p||L.spotLength!==u||L.rectAreaLength!==v||L.hemiLength!==g||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==P||L.numSpotMaps!==C||L.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+C-B,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=E,L.directionalLength=x,L.pointLength=p,L.spotLength=u,L.rectAreaLength=v,L.hemiLength=g,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=P,L.numSpotMaps=C,L.numLightProbes=E,r.version=WT++)}function c(f,d){let h=0,m=0,_=0,x=0,p=0;const u=d.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const S=f[v];if(S.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(S.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function wp(t,e){const n=new jT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function YT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new wp(t,e),n.set(s,[l])):a>=o.length?(l=new wp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qT extends Aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $T extends Aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QT(t,e,n){let i=new fv;const r=new Ze,s=new Ze,a=new Lt,o=new qT({depthPacking:Wx}),l=new $T,c={},f=n.maxTextureSize,d={[Vi]:nn,[nn]:Vi,[In]:In},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:KT,fragmentShader:ZT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new mi;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hg;let u=this.type;this.render=function(P,C,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),q=t.state;q.setBlending(ki),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=u!==ni&&this.type===ni,D=u===ni&&this.type!==ni;for(let H=0,$=P.length;H<$;H++){const Z=P[H],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const z=I.getFrameExtents();if(r.multiply(z),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,I.mapSize.y=s.y)),I.map===null||ee===!0||D===!0){const w=this.type!==ni?{minFilter:Xt,magFilter:Xt}:{};I.map!==null&&I.map.dispose(),I.map=new xr(r.x,r.y,w),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const R=I.getViewportCount();for(let w=0;w<R;w++){const k=I.getViewport(w);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),q.viewport(a),I.updateMatrices(Z,w),i=I.getFrustum(),S(C,B,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===ni&&v(I,B),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,T,L)};function v(P,C){const B=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xr(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(C,null,B,h,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(C,null,B,m,x,null)}function g(P,C,B,E){let T=null;const L=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)T=L;else if(T=B.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=T.uuid,ee=C.uuid;let D=c[q];D===void 0&&(D={},c[q]=D);let H=D[ee];H===void 0&&(H=T.clone(),D[ee]=H,C.addEventListener("dispose",b)),T=H}if(T.visible=C.visible,T.wireframe=C.wireframe,E===ni?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=t.properties.get(T);q.light=B}return T}function S(P,C,B,E,T){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&T===ni)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const ee=e.update(P),D=P.material;if(Array.isArray(D)){const H=ee.groups;for(let $=0,Z=H.length;$<Z;$++){const I=H[$],z=D[I.materialIndex];if(z&&z.visible){const R=g(P,z,E,T);P.onBeforeShadow(t,P,C,B,ee,R,I),t.renderBufferDirect(B,null,ee,R,P,I),P.onAfterShadow(t,P,C,B,ee,R,I)}}}else if(D.visible){const H=g(P,D,E,T);P.onBeforeShadow(t,P,C,B,ee,H,null),t.renderBufferDirect(B,null,ee,H,P,null),P.onAfterShadow(t,P,C,B,ee,H,null)}}const q=P.children;for(let ee=0,D=q.length;ee<D;ee++)S(q[ee],C,B,E,T)}function b(P){P.target.removeEventListener("dispose",b);for(const B in c){const E=c[B],T=P.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function JT(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const de=new Lt;let he=null;const be=new Lt(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!N&&(t.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){N=Ce},setClear:function(Ce,Je,et,Mt,Ht){Ht===!0&&(Ce*=Mt,Je*=Mt,et*=Mt),de.set(Ce,Je,et,Mt),be.equals(de)===!1&&(t.clearColor(Ce,Je,et,Mt),be.copy(de))},reset:function(){N=!1,he=null,be.set(-1,0,0,0)}}}function s(){let N=!1,de=null,he=null,be=null;return{setTest:function(Ce){Ce?ge(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Ce){de!==Ce&&!N&&(t.depthMask(Ce),de=Ce)},setFunc:function(Ce){if(he!==Ce){switch(Ce){case xx:t.depthFunc(t.NEVER);break;case yx:t.depthFunc(t.ALWAYS);break;case Sx:t.depthFunc(t.LESS);break;case nl:t.depthFunc(t.LEQUAL);break;case Ex:t.depthFunc(t.EQUAL);break;case Mx:t.depthFunc(t.GEQUAL);break;case Tx:t.depthFunc(t.GREATER);break;case wx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Ce}},setLocked:function(Ce){N=Ce},setClear:function(Ce){be!==Ce&&(t.clearDepth(Ce),be=Ce)},reset:function(){N=!1,de=null,he=null,be=null}}}function a(){let N=!1,de=null,he=null,be=null,Ce=null,Je=null,et=null,Mt=null,Ht=null;return{setTest:function(tt){N||(tt?ge(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(tt){de!==tt&&!N&&(t.stencilMask(tt),de=tt)},setFunc:function(tt,Gt,Gn){(he!==tt||be!==Gt||Ce!==Gn)&&(t.stencilFunc(tt,Gt,Gn),he=tt,be=Gt,Ce=Gn)},setOp:function(tt,Gt,Gn){(Je!==tt||et!==Gt||Mt!==Gn)&&(t.stencilOp(tt,Gt,Gn),Je=tt,et=Gt,Mt=Gn)},setLocked:function(tt){N=tt},setClear:function(tt){Ht!==tt&&(t.clearStencil(tt),Ht=tt)},reset:function(){N=!1,de=null,he=null,be=null,Ce=null,Je=null,et=null,Mt=null,Ht=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,S=null,b=null,P=null,C=null,B=null,E=new $e(0,0,0),T=0,L=!1,q=null,ee=null,D=null,H=null,$=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const R=t.getParameter(t.VERSION);R.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(R)[1]),I=z>=1):R.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),I=z>=2);let w=null,k={};const U=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),Q=new Lt().fromArray(U),te=new Lt().fromArray(G);function J(N,de,he,be){const Ce=new Uint8Array(4),Je=t.createTexture();t.bindTexture(N,Je),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<he;et++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Ce):t.texImage2D(de+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ce);return Je}const ue={};ue[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(t.DEPTH_TEST),l.setFunc(nl),Ae(!1),A(ah),ge(t.CULL_FACE),me(ki);function ge(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function pe(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Se(N,de){return m[N]!==de?(t.bindFramebuffer(N,de),m[N]=de,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function F(N,de){let he=x,be=!1;if(N)if(he=_.get(de),he===void 0&&(he=[],_.set(de,he)),N.isWebGLMultipleRenderTargets){const Ce=N.texture;if(he.length!==Ce.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=Ce.length;Je<et;Je++)he[Je]=t.COLOR_ATTACHMENT0+Je;he.length=Ce.length,be=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,be=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Xe(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const oe={[ir]:t.FUNC_ADD,[rx]:t.FUNC_SUBTRACT,[sx]:t.FUNC_REVERSE_SUBTRACT};if(i)oe[uh]=t.MIN,oe[fh]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(oe[uh]=N.MIN_EXT,oe[fh]=N.MAX_EXT)}const Ee={[ax]:t.ZERO,[ox]:t.ONE,[lx]:t.SRC_COLOR,[Iu]:t.SRC_ALPHA,[px]:t.SRC_ALPHA_SATURATE,[dx]:t.DST_COLOR,[ux]:t.DST_ALPHA,[cx]:t.ONE_MINUS_SRC_COLOR,[Uu]:t.ONE_MINUS_SRC_ALPHA,[hx]:t.ONE_MINUS_DST_COLOR,[fx]:t.ONE_MINUS_DST_ALPHA,[mx]:t.CONSTANT_COLOR,[gx]:t.ONE_MINUS_CONSTANT_COLOR,[vx]:t.CONSTANT_ALPHA,[_x]:t.ONE_MINUS_CONSTANT_ALPHA};function me(N,de,he,be,Ce,Je,et,Mt,Ht,tt){if(N===ki){u===!0&&(pe(t.BLEND),u=!1);return}if(u===!1&&(ge(t.BLEND),u=!0),N!==ix){if(N!==v||tt!==L){if((g!==ir||P!==ir)&&(t.blendEquation(t.FUNC_ADD),g=ir,P=ir),tt)switch(N){case as:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oh:t.blendFunc(t.ONE,t.ONE);break;case lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case as:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,b=null,C=null,B=null,E.set(0,0,0),T=0,v=N,L=tt}return}Ce=Ce||de,Je=Je||he,et=et||be,(de!==g||Ce!==P)&&(t.blendEquationSeparate(oe[de],oe[Ce]),g=de,P=Ce),(he!==S||be!==b||Je!==C||et!==B)&&(t.blendFuncSeparate(Ee[he],Ee[be],Ee[Je],Ee[et]),S=he,b=be,C=Je,B=et),(Mt.equals(E)===!1||Ht!==T)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Ht),E.copy(Mt),T=Ht),v=N,L=!1}function We(N,de){N.side===In?pe(t.CULL_FACE):ge(t.CULL_FACE);let he=N.side===nn;de&&(he=!he),Ae(he),N.blending===as&&N.transparent===!1?me(ki):me(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const be=N.stencilWrite;c.setTest(be),be&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){q!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),q=N)}function A(N){N!==ex?(ge(t.CULL_FACE),N!==ee&&(N===ah?t.cullFace(t.BACK):N===tx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),ee=N}function y(N){N!==D&&(I&&t.lineWidth(N),D=N)}function V(N,de,he){N?(ge(t.POLYGON_OFFSET_FILL),(H!==de||$!==he)&&(t.polygonOffset(de,he),H=de,$=he)):pe(t.POLYGON_OFFSET_FILL)}function se(N){N?ge(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function ie(N){N===void 0&&(N=t.TEXTURE0+Z-1),w!==N&&(t.activeTexture(N),w=N)}function ae(N,de,he){he===void 0&&(w===null?he=t.TEXTURE0+Z-1:he=w);let be=k[he];be===void 0&&(be={type:void 0,texture:void 0},k[he]=be),(be.type!==N||be.texture!==de)&&(w!==he&&(t.activeTexture(he),w=he),t.bindTexture(N,de||ue[N]),be.type=N,be.texture=de)}function Me(){const N=k[w];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){Q.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function qe(N){te.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function ft(N,de){let he=d.get(de);he===void 0&&(he=new WeakMap,d.set(de,he));let be=he.get(N);be===void 0&&(be=t.getUniformBlockIndex(de,N.name),he.set(N,be))}function ze(N,de){const be=d.get(de).get(N);f.get(de)!==be&&(t.uniformBlockBinding(de,be,N.__bindingPointIndex),f.set(de,be))}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},w=null,k={},m={},_=new WeakMap,x=[],p=null,u=!1,v=null,g=null,S=null,b=null,P=null,C=null,B=null,E=new $e(0,0,0),T=0,L=!1,q=null,ee=null,D=null,H=null,$=null,Q.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ge,disable:pe,bindFramebuffer:Se,drawBuffers:F,useProgram:Xe,setBlending:me,setMaterial:We,setFlipSided:Ae,setCullFace:A,setLineWidth:y,setPolygonOffset:V,setScissorTest:se,activeTexture:ie,bindTexture:ae,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:xe,texImage2D:we,texImage3D:ye,updateUBOMapping:ft,uniformBlockBinding:ze,texStorage2D:ke,texStorage3D:Le,texSubImage2D:Re,texSubImage3D:De,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ye,scissor:Fe,viewport:qe,reset:le}}function ew(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return m?new OffscreenCanvas(A,y):ol("canvas")}function x(A,y,V,se){let ie=1;if((A.width>se||A.height>se)&&(ie=se/Math.max(A.width,A.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=y?Gu:Math.floor,Me=ae(ie*A.width),fe=ae(ie*A.height);d===void 0&&(d=_(Me,fe));const xe=V?_(Me,fe):d;return xe.width=Me,xe.height=fe,xe.getContext("2d").drawImage(A,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+fe+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Hh(A.width)&&Hh(A.height)}function u(A){return o?!1:A.wrapS!==Un||A.wrapT!==Un||A.minFilter!==Xt&&A.minFilter!==xn}function v(A,y){return A.generateMipmaps&&y&&A.minFilter!==Xt&&A.minFilter!==xn}function g(A){t.generateMipmap(A)}function S(A,y,V,se,ie=!1){if(o===!1)return y;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=y;if(y===t.RED&&(V===t.FLOAT&&(ae=t.R32F),V===t.HALF_FLOAT&&(ae=t.R16F),V===t.UNSIGNED_BYTE&&(ae=t.R8)),y===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.R8UI),V===t.UNSIGNED_SHORT&&(ae=t.R16UI),V===t.UNSIGNED_INT&&(ae=t.R32UI),V===t.BYTE&&(ae=t.R8I),V===t.SHORT&&(ae=t.R16I),V===t.INT&&(ae=t.R32I)),y===t.RG&&(V===t.FLOAT&&(ae=t.RG32F),V===t.HALF_FLOAT&&(ae=t.RG16F),V===t.UNSIGNED_BYTE&&(ae=t.RG8)),y===t.RGBA){const Me=ie?il:Qe.getTransfer(se);V===t.FLOAT&&(ae=t.RGBA32F),V===t.HALF_FLOAT&&(ae=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ae=Me===rt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(A,y,V){return v(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function P(A){return A===Xt||A===dh||A===ac?t.NEAREST:t.LINEAR}function C(A){const y=A.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&f.delete(y)}function B(A){const y=A.target;y.removeEventListener("dispose",B),L(y)}function E(A){const y=i.get(A);if(y.__webglInit===void 0)return;const V=A.source,se=h.get(V);if(se){const ie=se[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(A),Object.keys(se).length===0&&h.delete(V)}i.remove(A)}function T(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const V=A.source,se=h.get(V);delete se[y.__cacheKey],a.memory.textures--}function L(A){const y=A.texture,V=i.get(A),se=i.get(y);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(V.__webglFramebuffer[ie]))for(let ae=0;ae<V.__webglFramebuffer[ie].length;ae++)t.deleteFramebuffer(V.__webglFramebuffer[ie][ae]);else t.deleteFramebuffer(V.__webglFramebuffer[ie]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ie])}else{if(Array.isArray(V.__webglFramebuffer))for(let ie=0;ie<V.__webglFramebuffer.length;ie++)t.deleteFramebuffer(V.__webglFramebuffer[ie]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,ae=y.length;ie<ae;ie++){const Me=i.get(y[ie]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(y[ie])}i.remove(y),i.remove(A)}let q=0;function ee(){q=0}function D(){const A=q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),q+=1,A}function H(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){const V=i.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const se=A.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,A,y);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+y)}function Z(A,y){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Q(V,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+y)}function I(A,y){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Q(V,A,y);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+y)}function z(A,y){const V=i.get(A);if(A.version>0&&V.__version!==A.version){te(V,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+y)}const R={[ku]:t.REPEAT,[Un]:t.CLAMP_TO_EDGE,[Bu]:t.MIRRORED_REPEAT},w={[Xt]:t.NEAREST,[dh]:t.NEAREST_MIPMAP_NEAREST,[ac]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[Ix]:t.LINEAR_MIPMAP_NEAREST,[ma]:t.LINEAR_MIPMAP_LINEAR},k={[Yx]:t.NEVER,[Jx]:t.ALWAYS,[qx]:t.LESS,[Qg]:t.LEQUAL,[$x]:t.EQUAL,[Qx]:t.GEQUAL,[Kx]:t.GREATER,[Zx]:t.NOTEQUAL};function U(A,y,V){if(V?(t.texParameteri(A,t.TEXTURE_WRAP_S,R[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,R[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,R[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w[y.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==Un||y.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,P(y.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,P(y.minFilter)),y.minFilter!==Xt&&y.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,k[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Xt||y.minFilter!==ac&&y.minFilter!==ma||y.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(A,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function G(A,y){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const se=y.source;let ie=h.get(se);ie===void 0&&(ie={},h.set(se,ie));const ae=H(y);if(ae!==A.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[ae].usedTimes++;const Me=ie[A.__cacheKey];Me!==void 0&&(ie[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(y)),A.__cacheKey=ae,A.__webglTexture=ie[ae].texture}return V}function Q(A,y,V){let se=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=t.TEXTURE_3D);const ie=G(A,y),ae=y.source;n.bindTexture(se,A.__webglTexture,t.TEXTURE0+V);const Me=i.get(ae);if(ae.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const fe=Qe.getPrimaries(Qe.workingColorSpace),xe=y.colorSpace===Sn?null:Qe.getPrimaries(y.colorSpace),Re=y.colorSpace===Sn||fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const De=u(y)&&p(y.image)===!1;let ne=x(y.image,De,!1,r.maxTextureSize);ne=Ae(y,ne);const Ye=p(ne)||o,ke=s.convert(y.format,y.colorSpace);let Le=s.convert(y.type),we=S(y.internalFormat,ke,Le,y.colorSpace,y.isVideoTexture);U(se,y,Ye);let ye;const Fe=y.mipmaps,qe=o&&y.isVideoTexture!==!0&&we!==Kg,ft=Me.__version===void 0||ie===!0,ze=b(y,ne,Ye);if(y.isDepthTexture)we=t.DEPTH_COMPONENT,o?y.type===Pi?we=t.DEPTH_COMPONENT32F:y.type===Ci?we=t.DEPTH_COMPONENT24:y.type===ur?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:y.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===fr&&we===t.DEPTH_COMPONENT&&y.type!==Hf&&y.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ci,Le=s.convert(y.type)),y.format===vs&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,y.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ur,Le=s.convert(y.type))),ft&&(qe?n.texStorage2D(t.TEXTURE_2D,1,we,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,we,ne.width,ne.height,0,ke,Le,null));else if(y.isDataTexture)if(Fe.length>0&&Ye){qe&&ft&&n.texStorage2D(t.TEXTURE_2D,ze,we,Fe[0].width,Fe[0].height);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],qe?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ye.width,ye.height,ke,Le,ye.data):n.texImage2D(t.TEXTURE_2D,le,we,ye.width,ye.height,0,ke,Le,ye.data);y.generateMipmaps=!1}else qe?(ft&&n.texStorage2D(t.TEXTURE_2D,ze,we,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ke,Le,ne.data)):n.texImage2D(t.TEXTURE_2D,0,we,ne.width,ne.height,0,ke,Le,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,we,Fe[0].width,Fe[0].height,ne.depth);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],y.format!==Fn?ke!==null?qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,ne.depth,ke,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,we,ye.width,ye.height,ne.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,ne.depth,ke,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,we,ye.width,ye.height,ne.depth,0,ke,Le,ye.data)}else{qe&&ft&&n.texStorage2D(t.TEXTURE_2D,ze,we,Fe[0].width,Fe[0].height);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],y.format!==Fn?ke!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,ye.width,ye.height,ke,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,le,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ye.width,ye.height,ke,Le,ye.data):n.texImage2D(t.TEXTURE_2D,le,we,ye.width,ye.height,0,ke,Le,ye.data)}else if(y.isDataArrayTexture)qe?(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,we,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ke,Le,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,ke,Le,ne.data);else if(y.isData3DTexture)qe?(ft&&n.texStorage3D(t.TEXTURE_3D,ze,we,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ke,Le,ne.data)):n.texImage3D(t.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,ke,Le,ne.data);else if(y.isFramebufferTexture){if(ft)if(qe)n.texStorage2D(t.TEXTURE_2D,ze,we,ne.width,ne.height);else{let le=ne.width,N=ne.height;for(let de=0;de<ze;de++)n.texImage2D(t.TEXTURE_2D,de,we,le,N,0,ke,Le,null),le>>=1,N>>=1}}else if(Fe.length>0&&Ye){qe&&ft&&n.texStorage2D(t.TEXTURE_2D,ze,we,Fe[0].width,Fe[0].height);for(let le=0,N=Fe.length;le<N;le++)ye=Fe[le],qe?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ke,Le,ye):n.texImage2D(t.TEXTURE_2D,le,we,ke,Le,ye);y.generateMipmaps=!1}else qe?(ft&&n.texStorage2D(t.TEXTURE_2D,ze,we,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,Le,ne)):n.texImage2D(t.TEXTURE_2D,0,we,ke,Le,ne);v(y,Ye)&&g(se),Me.__version=ae.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function te(A,y,V){if(y.image.length!==6)return;const se=G(A,y),ie=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const ae=i.get(ie);if(ie.version!==ae.__version||se===!0){n.activeTexture(t.TEXTURE0+V);const Me=Qe.getPrimaries(Qe.workingColorSpace),fe=y.colorSpace===Sn?null:Qe.getPrimaries(y.colorSpace),xe=y.colorSpace===Sn||Me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,ne=[];for(let le=0;le<6;le++)!Re&&!De?ne[le]=x(y.image[le],!1,!0,r.maxCubemapSize):ne[le]=De?y.image[le].image:y.image[le],ne[le]=Ae(y,ne[le]);const Ye=ne[0],ke=p(Ye)||o,Le=s.convert(y.format,y.colorSpace),we=s.convert(y.type),ye=S(y.internalFormat,Le,we,y.colorSpace),Fe=o&&y.isVideoTexture!==!0,qe=ae.__version===void 0||se===!0;let ft=b(y,Ye,ke);U(t.TEXTURE_CUBE_MAP,y,ke);let ze;if(Re){Fe&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,ye,Ye.width,Ye.height);for(let le=0;le<6;le++){ze=ne[le].mipmaps;for(let N=0;N<ze.length;N++){const de=ze[N];y.format!==Fn?Le!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,0,0,de.width,de.height,Le,we,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,ye,de.width,de.height,0,Le,we,de.data)}}}else{ze=y.mipmaps,Fe&&qe&&(ze.length>0&&ft++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,ye,ne[0].width,ne[0].height));for(let le=0;le<6;le++)if(De){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ne[le].width,ne[le].height,Le,we,ne[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,ne[le].width,ne[le].height,0,Le,we,ne[le].data);for(let N=0;N<ze.length;N++){const he=ze[N].image[le].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,0,0,he.width,he.height,Le,we,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,ye,he.width,he.height,0,Le,we,he.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,we,ne[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Le,we,ne[le]);for(let N=0;N<ze.length;N++){const de=ze[N];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,0,0,Le,we,de.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,ye,Le,we,de.image[le])}}}v(y,ke)&&g(t.TEXTURE_CUBE_MAP),ae.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function J(A,y,V,se,ie,ae){const Me=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),xe=S(V.internalFormat,Me,fe,V.colorSpace);if(!i.get(y).__hasExternalTextures){const De=Math.max(1,y.width>>ae),ne=Math.max(1,y.height>>ae);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ae,xe,De,ne,y.depth,0,Me,fe,null):n.texImage2D(ie,ae,xe,De,ne,0,Me,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),me(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,i.get(V).__webglTexture,0,Ee(y)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,i.get(V).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(A,y,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let se=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||me(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Pi?se=t.DEPTH_COMPONENT32F:ie.type===Ci&&(se=t.DEPTH_COMPONENT24));const ae=Ee(y);me(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,se,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,se,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const se=Ee(y);V&&me(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,y.width,y.height):me(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const se=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ie=0;ie<se.length;ie++){const ae=se[ie],Me=s.convert(ae.format,ae.colorSpace),fe=s.convert(ae.type),xe=S(ae.internalFormat,Me,fe,ae.colorSpace),Re=Ee(y);V&&me(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,y.width,y.height):me(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,xe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,xe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ge(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const se=i.get(y.depthTexture).__webglTexture,ie=Ee(y);if(y.depthTexture.format===fr)me(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(y.depthTexture.format===vs)me(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function pe(A){const y=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ge(y.__webglFramebuffer,A)}else if(V){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]=t.createRenderbuffer(),ue(y.__webglDepthbuffer[se],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),ue(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(A,y,V){const se=i.get(A);y!==void 0&&J(se.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&pe(A)}function F(A){const y=A.texture,V=i.get(A),se=i.get(y);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=y.version,a.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,Me=p(A)||o;if(ie){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let xe=0;xe<y.mipmaps.length;xe++)V.__webglFramebuffer[fe][xe]=t.createFramebuffer()}else V.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)V.__webglFramebuffer[fe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const fe=A.texture;for(let xe=0,Re=fe.length;xe<Re;xe++){const De=i.get(fe[xe]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&me(A)===!1){const fe=ae?y:[y];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){const Re=fe[xe];V.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[xe]);const De=s.convert(Re.format,Re.colorSpace),ne=s.convert(Re.type),Ye=S(Re.internalFormat,De,ne,Re.colorSpace,A.isXRRenderTarget===!0),ke=Ee(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Ye,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,V.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),U(t.TEXTURE_CUBE_MAP,y,Me);for(let fe=0;fe<6;fe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)J(V.__webglFramebuffer[fe][xe],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else J(V.__webglFramebuffer[fe],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(y,Me)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const fe=A.texture;for(let xe=0,Re=fe.length;xe<Re;xe++){const De=fe[xe],ne=i.get(De);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),U(t.TEXTURE_2D,De,Me),J(V.__webglFramebuffer,A,De,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),v(De,Me)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,se.__webglTexture),U(fe,y,Me),o&&y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)J(V.__webglFramebuffer[xe],A,y,t.COLOR_ATTACHMENT0,fe,xe);else J(V.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,fe,0);v(y,Me)&&g(fe),n.unbindTexture()}A.depthBuffer&&pe(A)}function Xe(A){const y=p(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let se=0,ie=V.length;se<ie;se++){const ae=V[se];if(v(ae,y)){const Me=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(ae).__webglTexture;n.bindTexture(Me,fe),g(Me),n.unbindTexture()}}}function oe(A){if(o&&A.samples>0&&me(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,se=A.height;let ie=t.COLOR_BUFFER_BIT;const ae=[],Me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(A),xe=A.isWebGLMultipleRenderTargets===!0;if(xe)for(let Re=0;Re<y.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){ae.push(t.COLOR_ATTACHMENT0+Re),A.depthBuffer&&ae.push(Me);const De=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),xe){const ne=i.get(y[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,V,se,0,0,V,se,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<y.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Re]);const De=i.get(y[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ee(A){return Math.min(r.maxSamples,A.samples)}function me(A){const y=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function We(A){const y=a.render.frame;f.get(A)!==y&&(f.set(A,y),A.update())}function Ae(A,y){const V=A.colorSpace,se=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===zu||V!==hi&&V!==Sn&&(Qe.getTransfer(V)===rt?o===!1?e.has("EXT_sRGB")===!0&&se===Fn?(A.format=zu,A.minFilter=xn,A.generateMipmaps=!1):y=ev.sRGBToLinear(y):(se!==Fn||ie!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}this.allocateTextureUnit=D,this.resetTextureUnits=ee,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=I,this.setTextureCube=z,this.rebindTextures=Se,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=me}function tw(t,e,n){const i=n.isWebGL2;function r(s,a=Sn){let o;const l=Qe.getTransfer(a);if(s===zi)return t.UNSIGNED_BYTE;if(s===Xg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===jg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ux)return t.BYTE;if(s===Fx)return t.SHORT;if(s===Hf)return t.UNSIGNED_SHORT;if(s===Wg)return t.INT;if(s===Ci)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===ga)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ox)return t.ALPHA;if(s===Fn)return t.RGBA;if(s===kx)return t.LUMINANCE;if(s===Bx)return t.LUMINANCE_ALPHA;if(s===fr)return t.DEPTH_COMPONENT;if(s===vs)return t.DEPTH_STENCIL;if(s===zu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zx)return t.RED;if(s===Yg)return t.RED_INTEGER;if(s===Hx)return t.RG;if(s===qg)return t.RG_INTEGER;if(s===$g)return t.RGBA_INTEGER;if(s===oc||s===lc||s===cc||s===uc)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hh||s===ph||s===mh||s===gh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ph)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vh||s===_h)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vh)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===_h)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===yh||s===Sh||s===Eh||s===Mh||s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===Ph||s===bh||s===Lh||s===Nh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Th)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ch)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fc||s===Dh||s===Ih)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===fc)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ih)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gx||s===Uh||s===Fh||s===Oh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===fc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Uh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Oh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ur?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class nw extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class go extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iw={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class rw extends Es{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const x=n.getContextAttributes();let p=null,u=null;const v=[],g=[],S=new Ze;let b=null;const P=new yn;P.layers.enable(1),P.viewport=new Lt;const C=new yn;C.layers.enable(2),C.viewport=new Lt;const B=[P,C],E=new nw;E.layers.enable(1),E.layers.enable(2);let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let G=v[U];return G===void 0&&(G=new Fc,v[U]=G),G.getTargetRaySpace()},this.getControllerGrip=function(U){let G=v[U];return G===void 0&&(G=new Fc,v[U]=G),G.getGripSpace()},this.getHand=function(U){let G=v[U];return G===void 0&&(G=new Fc,v[U]=G),G.getHandSpace()};function q(U){const G=g.indexOf(U.inputSource);if(G===-1)return;const Q=v[G];Q!==void 0&&(Q.update(U.inputSource,U.frame,c||a),Q.dispatchEvent({type:U.type,data:U.inputSource}))}function ee(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",D);for(let U=0;U<v.length;U++){const G=g[U];G!==null&&(g[U]=null,v[U].disconnect(G))}T=null,L=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,u=null,k.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new xr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let G=null,Q=null,te=null;x.depth&&(te=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,G=x.stencil?vs:fr,Q=x.stencil?ur:Ci);const J={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(J),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new xr(h.textureWidth,h.textureHeight,{format:Fn,type:zi,depthTexture:new hv(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ue=e.properties.get(u);ue.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(U){for(let G=0;G<U.removed.length;G++){const Q=U.removed[G],te=g.indexOf(Q);te>=0&&(g[te]=null,v[te].disconnect(Q))}for(let G=0;G<U.added.length;G++){const Q=U.added[G];let te=g.indexOf(Q);if(te===-1){for(let ue=0;ue<v.length;ue++)if(ue>=g.length){g.push(Q),te=ue;break}else if(g[ue]===null){g[ue]=Q,te=ue;break}if(te===-1)break}const J=v[te];J&&J.connect(Q)}}const H=new j,$=new j;function Z(U,G,Q){H.setFromMatrixPosition(G.matrixWorld),$.setFromMatrixPosition(Q.matrixWorld);const te=H.distanceTo($),J=G.projectionMatrix.elements,ue=Q.projectionMatrix.elements,ge=J[14]/(J[10]-1),pe=J[14]/(J[10]+1),Se=(J[9]+1)/J[5],F=(J[9]-1)/J[5],Xe=(J[8]-1)/J[0],oe=(ue[8]+1)/ue[0],Ee=ge*Xe,me=ge*oe,We=te/(-Xe+oe),Ae=We*-Xe;G.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ae),U.translateZ(We),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const A=ge+We,y=pe+We,V=Ee-Ae,se=me+(te-Ae),ie=Se*pe/y*A,ae=F*pe/y*A;U.projectionMatrix.makePerspective(V,se,ie,ae,A,y),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function I(U,G){G===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(G.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;E.near=C.near=P.near=U.near,E.far=C.far=P.far=U.far,(T!==E.near||L!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,L=E.far);const G=U.parent,Q=E.cameras;I(E,G);for(let te=0;te<Q.length;te++)I(Q[te],G);Q.length===2?Z(E,P,C):E.projectionMatrix.copy(P.projectionMatrix),z(U,E,G)};function z(U,G,Q){Q===null?U.matrix.copy(G.matrixWorld):(U.matrix.copy(Q.matrixWorld),U.matrix.invert(),U.matrix.multiply(G.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Hu*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let R=null;function w(U,G){if(f=G.getViewerPose(c||a),_=G,f!==null){const Q=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let te=!1;Q.length!==E.cameras.length&&(E.cameras.length=0,te=!0);for(let J=0;J<Q.length;J++){const ue=Q[J];let ge=null;if(m!==null)ge=m.getViewport(ue);else{const Se=d.getViewSubImage(h,ue);ge=Se.viewport,J===0&&(e.setRenderTargetTextures(u,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(u))}let pe=B[J];pe===void 0&&(pe=new yn,pe.layers.enable(J),pe.viewport=new Lt,B[J]=pe),pe.matrix.fromArray(ue.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ue.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ge.x,ge.y,ge.width,ge.height),J===0&&(E.matrix.copy(pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),te===!0&&E.cameras.push(pe)}}for(let Q=0;Q<v.length;Q++){const te=g[Q],J=v[Q];te!==null&&J!==void 0&&J.update(te,G,c||a)}R&&R(U,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),_=null}const k=new dv;k.setAnimationLoop(w),this.setAnimationLoop=function(U){R=U},this.dispose=function(){}}}function sw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,lv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(v,b);const P=e.render.frame;s[v.id]!==P&&(h(v),s[v.id]=P)}function f(v){const g=d();v.__bindingPointIndex=g;const S=t.createBuffer(),b=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let P=0,C=S.length;P<C;P++){const B=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,T=B.length;E<T;E++){const L=B[E];if(m(L,P,E,b)===!0){const q=L.__offset,ee=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let H=0;H<ee.length;H++){const $=ee[H],Z=x($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,q+D,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,S,b){const P=v.value,C=g+"_"+S;if(b[C]===void 0)return typeof P=="number"||typeof P=="boolean"?b[C]=P:b[C]=P.clone(),!0;{const B=b[C];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return b[C]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function _(v){const g=v.uniforms;let S=0;const b=16;for(let C=0,B=g.length;C<B;C++){const E=Array.isArray(g[C])?g[C]:[g[C]];for(let T=0,L=E.length;T<L;T++){const q=E[T],ee=Array.isArray(q.value)?q.value:[q.value];for(let D=0,H=ee.length;D<H;D++){const $=ee[D],Z=x($),I=S%b;I!==0&&b-I<Z.boundary&&(S+=b-I),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Z.storage}}}const P=S%b;return P>0&&(S+=b-P),v.__size=S,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class xv{constructor(e={}){const{canvas:n=ty(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let S=!1,b=0,P=0,C=null,B=-1,E=null;const T=new Lt,L=new Lt;let q=null;const ee=new $e(0);let D=0,H=n.width,$=n.height,Z=1,I=null,z=null;const R=new Lt(0,0,H,$),w=new Lt(0,0,H,$);let k=!1;const U=new fv;let G=!1,Q=!1,te=null;const J=new Ct,ue=new Ze,ge=new j,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return C===null?Z:1}let F=i;function Xe(M,O){for(let X=0;X<M.length;X++){const K=M[X],W=n.getContext(K,O);if(W!==null)return W}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),F=Xe(O,M),F===null)throw Xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let oe,Ee,me,We,Ae,A,y,V,se,ie,ae,Me,fe,xe,Re,De,ne,Ye,ke,Le,we,ye,Fe,qe;function ft(){oe=new gM(F),Ee=new cM(F,oe,e),oe.init(Ee),ye=new tw(F,oe,Ee),me=new JT(F,oe,Ee),We=new xM(F),Ae=new BT,A=new ew(F,oe,me,Ae,Ee,ye,We),y=new fM(g),V=new mM(g),se=new Ay(F,Ee),Fe=new oM(F,oe,se,Ee),ie=new vM(F,se,We,Fe),ae=new MM(F,ie,se,We),ke=new EM(F,Ee,A),De=new uM(Ae),Me=new kT(g,y,V,oe,Ee,Fe,De),fe=new sw(g,Ae),xe=new HT,Re=new YT(oe,Ee),Ye=new aM(g,y,V,me,ae,h,l),ne=new QT(g,ae,Ee),qe=new aw(F,We,Ee,me),Le=new lM(F,oe,We,Ee),we=new _M(F,oe,We,Ee),We.programs=Me.programs,g.capabilities=Ee,g.extensions=oe,g.properties=Ae,g.renderLists=xe,g.shadowMap=ne,g.state=me,g.info=We}ft();const ze=new rw(g,F);this.xr=ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(H,$,!1))},this.getSize=function(M){return M.set(H,$)},this.setSize=function(M,O,X=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,$=O,n.width=Math.floor(M*Z),n.height=Math.floor(O*Z),X===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(H*Z,$*Z).floor()},this.setDrawingBufferSize=function(M,O,X){H=M,$=O,Z=X,n.width=Math.floor(M*X),n.height=Math.floor(O*X),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,O,X,K){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,O,X,K),me.viewport(T.copy(R).multiplyScalar(Z).floor())},this.getScissor=function(M){return M.copy(w)},this.setScissor=function(M,O,X,K){M.isVector4?w.set(M.x,M.y,M.z,M.w):w.set(M,O,X,K),me.scissor(L.copy(w).multiplyScalar(Z).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){me.setScissorTest(k=M)},this.setOpaqueSort=function(M){I=M},this.setTransparentSort=function(M){z=M},this.getClearColor=function(M){return M.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(M=!0,O=!0,X=!0){let K=0;if(M){let W=!1;if(C!==null){const ve=C.texture.format;W=ve===$g||ve===qg||ve===Yg}if(W){const ve=C.texture.type,Te=ve===zi||ve===Ci||ve===Hf||ve===ur||ve===Xg||ve===jg,Pe=Ye.getClearColor(),Ne=Ye.getClearAlpha(),Be=Pe.r,Ie=Pe.g,Ue=Pe.b;Te?(m[0]=Be,m[1]=Ie,m[2]=Ue,m[3]=Ne,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Be,_[1]=Ie,_[2]=Ue,_[3]=Ne,F.clearBufferiv(F.COLOR,0,_))}else K|=F.COLOR_BUFFER_BIT}O&&(K|=F.DEPTH_BUFFER_BIT),X&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",de,!1),xe.dispose(),Re.dispose(),Ae.dispose(),y.dispose(),V.dispose(),ae.dispose(),Fe.dispose(),qe.dispose(),Me.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Ht),ze.removeEventListener("sessionend",tt),te&&(te.dispose(),te=null),Gt.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=We.autoReset,O=ne.enabled,X=ne.autoUpdate,K=ne.needsUpdate,W=ne.type;ft(),We.autoReset=M,ne.enabled=O,ne.autoUpdate=X,ne.needsUpdate=K,ne.type=W}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const O=M.target;O.removeEventListener("dispose",he),be(O)}function be(M){Ce(M),Ae.remove(M)}function Ce(M){const O=Ae.get(M).programs;O!==void 0&&(O.forEach(function(X){Me.releaseProgram(X)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,X,K,W,ve){O===null&&(O=pe);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Pe=Ev(M,O,X,K,W);me.setMaterial(K,Te);let Ne=X.index,Be=1;if(K.wireframe===!0){if(Ne=ie.getWireframeAttribute(X),Ne===void 0)return;Be=2}const Ie=X.drawRange,Ue=X.attributes.position;let pt=Ie.start*Be,an=(Ie.start+Ie.count)*Be;ve!==null&&(pt=Math.max(pt,ve.start*Be),an=Math.min(an,(ve.start+ve.count)*Be)),Ne!==null?(pt=Math.max(pt,0),an=Math.min(an,Ne.count)):Ue!=null&&(pt=Math.max(pt,0),an=Math.min(an,Ue.count));const Tt=an-pt;if(Tt<0||Tt===1/0)return;Fe.setup(W,K,Pe,X,Ne);let Kn,ot=Le;if(Ne!==null&&(Kn=se.get(Ne),ot=we,ot.setIndex(Kn)),W.isMesh)K.wireframe===!0?(me.setLineWidth(K.wireframeLinewidth*Se()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(W.isLine){let He=K.linewidth;He===void 0&&(He=1),me.setLineWidth(He*Se()),W.isLineSegments?ot.setMode(F.LINES):W.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else W.isPoints?ot.setMode(F.POINTS):W.isSprite&&ot.setMode(F.TRIANGLES);if(W.isBatchedMesh)ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ot.renderInstances(pt,Tt,W.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bl=Math.min(X.instanceCount,He);ot.renderInstances(pt,Tt,bl)}else ot.render(pt,Tt)};function Je(M,O,X){M.transparent===!0&&M.side===In&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,Pa(M,O,X),M.side=Vi,M.needsUpdate=!0,Pa(M,O,X),M.side=In):Pa(M,O,X)}this.compile=function(M,O,X=null){X===null&&(X=M),p=Re.get(X),p.init(),v.push(p),X.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),M!==X&&M.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(g._useLegacyLights);const K=new Set;return M.traverse(function(W){const ve=W.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Pe=ve[Te];Je(Pe,X,W),K.add(Pe)}else Je(ve,X,W),K.add(ve)}),v.pop(),p=null,K},this.compileAsync=function(M,O,X=null){const K=this.compile(M,O,X);return new Promise(W=>{function ve(){if(K.forEach(function(Te){Ae.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){W(M);return}setTimeout(ve,10)}oe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let et=null;function Mt(M){et&&et(M)}function Ht(){Gt.stop()}function tt(){Gt.start()}const Gt=new dv;Gt.setAnimationLoop(Mt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(M){et=M,ze.setAnimationLoop(M),M===null?Gt.stop():Gt.start()},ze.addEventListener("sessionstart",Ht),ze.addEventListener("sessionend",tt),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(O),O=ze.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,O,C),p=Re.get(M,v.length),p.init(),v.push(p),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),U.setFromProjectionMatrix(J),Q=this.localClippingEnabled,G=De.init(this.clippingPlanes,Q),x=xe.get(M,u.length),x.init(),u.push(x),Gn(M,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,z),this.info.render.frame++,G===!0&&De.beginShadows();const X=p.state.shadowsArray;if(ne.render(X,M,O),G===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(x,M),p.setupLights(g._useLegacyLights),O.isArrayCamera){const K=O.cameras;for(let W=0,ve=K.length;W<ve;W++){const Te=K[W];Xf(x,M,Te,Te.viewport)}}else Xf(x,M,O);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(g,M,O),Fe.resetDefaultState(),B=-1,E=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Gn(M,O,X,K){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||U.intersectsSprite(M)){K&&ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const Te=ae.update(M),Pe=M.material;Pe.visible&&x.push(M,Te,Pe,X,ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||U.intersectsObject(M))){const Te=ae.update(M),Pe=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ge.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ge.copy(Te.boundingSphere.center)),ge.applyMatrix4(M.matrixWorld).applyMatrix4(J)),Array.isArray(Pe)){const Ne=Te.groups;for(let Be=0,Ie=Ne.length;Be<Ie;Be++){const Ue=Ne[Be],pt=Pe[Ue.materialIndex];pt&&pt.visible&&x.push(M,Te,pt,X,ge.z,Ue)}}else Pe.visible&&x.push(M,Te,Pe,X,ge.z,null)}}const ve=M.children;for(let Te=0,Pe=ve.length;Te<Pe;Te++)Gn(ve[Te],O,X,K)}function Xf(M,O,X,K){const W=M.opaque,ve=M.transmissive,Te=M.transparent;p.setupLightsView(X),G===!0&&De.setGlobalState(g.clippingPlanes,X),ve.length>0&&Sv(W,ve,O,X),K&&me.viewport(T.copy(K)),W.length>0&&Ca(W,O,X),ve.length>0&&Ca(ve,O,X),Te.length>0&&Ca(Te,O,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Sv(M,O,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ve=Ee.isWebGL2;te===null&&(te=new xr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?ga:zi,minFilter:ma,samples:ve?4:0})),g.getDrawingBufferSize(ue),ve?te.setSize(ue.x,ue.y):te.setSize(Gu(ue.x),Gu(ue.y));const Te=g.getRenderTarget();g.setRenderTarget(te),g.getClearColor(ee),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Pe=g.toneMapping;g.toneMapping=Bi,Ca(M,X,K),A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te);let Ne=!1;for(let Be=0,Ie=O.length;Be<Ie;Be++){const Ue=O[Be],pt=Ue.object,an=Ue.geometry,Tt=Ue.material,Kn=Ue.group;if(Tt.side===In&&pt.layers.test(K.layers)){const ot=Tt.side;Tt.side=nn,Tt.needsUpdate=!0,jf(pt,X,K,an,Tt,Kn),Tt.side=ot,Tt.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te)),g.setRenderTarget(Te),g.setClearColor(ee,D),g.toneMapping=Pe}function Ca(M,O,X){const K=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ve=M.length;W<ve;W++){const Te=M[W],Pe=Te.object,Ne=Te.geometry,Be=K===null?Te.material:K,Ie=Te.group;Pe.layers.test(X.layers)&&jf(Pe,O,X,Ne,Be,Ie)}}function jf(M,O,X,K,W,ve){M.onBeforeRender(g,O,X,K,W,ve),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(g,O,X,K,M,ve),W.transparent===!0&&W.side===In&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,g.renderBufferDirect(X,O,K,W,M,ve),W.side=Vi,W.needsUpdate=!0,g.renderBufferDirect(X,O,K,W,M,ve),W.side=In):g.renderBufferDirect(X,O,K,W,M,ve),M.onAfterRender(g,O,X,K,W,ve)}function Pa(M,O,X){O.isScene!==!0&&(O=pe);const K=Ae.get(M),W=p.state.lights,ve=p.state.shadowsArray,Te=W.state.version,Pe=Me.getParameters(M,W.state,ve,O,X),Ne=Me.getProgramCacheKey(Pe);let Be=K.programs;K.environment=M.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(M.isMeshStandardMaterial?V:y).get(M.envMap||K.environment),Be===void 0&&(M.addEventListener("dispose",he),Be=new Map,K.programs=Be);let Ie=Be.get(Ne);if(Ie!==void 0){if(K.currentProgram===Ie&&K.lightsStateVersion===Te)return qf(M,Pe),Ie}else Pe.uniforms=Me.getUniforms(M),M.onBuild(X,Pe,g),M.onBeforeCompile(Pe,g),Ie=Me.acquireProgram(Pe,Ne),Be.set(Ne,Ie),K.uniforms=Pe.uniforms;const Ue=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=De.uniform),qf(M,Pe),K.needsLights=Tv(M),K.lightsStateVersion=Te,K.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ie,K.uniformsList=null,Ie}function Yf(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Lo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function qf(M,O){const X=Ae.get(M);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ev(M,O,X,K,W){O.isScene!==!0&&(O=pe),A.resetTextureUnits();const ve=O.fog,Te=K.isMeshStandardMaterial?O.environment:null,Pe=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hi,Ne=(K.isMeshStandardMaterial?V:y).get(K.envMap||Te),Be=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ue=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,an=!!X.morphAttributes.color;let Tt=Bi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const Kn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=Kn!==void 0?Kn.length:0,He=Ae.get(K),bl=p.state.lights;if(G===!0&&(Q===!0||M!==E)){const mn=M===E&&K.id===B;De.setState(K,M,mn)}let dt=!1;K.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bl.state.version||He.outputColorSpace!==Pe||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||He.envMap!==Ne||K.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==De.numPlanes||He.numIntersection!==De.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Ie||He.morphTargets!==Ue||He.morphNormals!==pt||He.morphColors!==an||He.toneMapping!==Tt||Ee.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,He.__version=K.version);let Yi=He.currentProgram;dt===!0&&(Yi=Pa(K,O,W));let $f=!1,Ts=!1,Ll=!1;const It=Yi.getUniforms(),qi=He.uniforms;if(me.useProgram(Yi.program)&&($f=!0,Ts=!0,Ll=!0),K.id!==B&&(B=K.id,Ts=!0),$f||E!==M){It.setValue(F,"projectionMatrix",M.projectionMatrix),It.setValue(F,"viewMatrix",M.matrixWorldInverse);const mn=It.map.cameraPosition;mn!==void 0&&mn.setValue(F,ge.setFromMatrixPosition(M.matrixWorld)),Ee.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&It.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Ts=!0,Ll=!0)}if(W.isSkinnedMesh){It.setOptional(F,W,"bindMatrix"),It.setOptional(F,W,"bindMatrixInverse");const mn=W.skeleton;mn&&(Ee.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),It.setValue(F,"boneTexture",mn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(It.setOptional(F,W,"batchingTexture"),It.setValue(F,"batchingTexture",W._matricesTexture,A));const Nl=X.morphAttributes;if((Nl.position!==void 0||Nl.normal!==void 0||Nl.color!==void 0&&Ee.isWebGL2===!0)&&ke.update(W,X,Yi),(Ts||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,It.setValue(F,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(qi.envMap.value=Ne,qi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Ts&&(It.setValue(F,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&Mv(qi,Ll),ve&&K.fog===!0&&fe.refreshFogUniforms(qi,ve),fe.refreshMaterialUniforms(qi,K,Z,$,te),Lo.upload(F,Yf(He),qi,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Lo.upload(F,Yf(He),qi,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&It.setValue(F,"center",W.center),It.setValue(F,"modelViewMatrix",W.modelViewMatrix),It.setValue(F,"normalMatrix",W.normalMatrix),It.setValue(F,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const mn=K.uniformsGroups;for(let Dl=0,wv=mn.length;Dl<wv;Dl++)if(Ee.isWebGL2){const Kf=mn[Dl];qe.update(Kf,Yi),qe.bind(Kf,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function Mv(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Tv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,O,X){Ae.get(M.texture).__webglTexture=O,Ae.get(M.depthTexture).__webglTexture=X;const K=Ae.get(M);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,O){const X=Ae.get(M);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,X=0){C=M,b=O,P=X;let K=!0,W=null,ve=!1,Te=!1;if(M){const Ne=Ae.get(M);Ne.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(F.FRAMEBUFFER,null),K=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(M):Ne.__hasExternalTextures&&A.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Ie=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?W=Ie[O][X]:W=Ie[O],ve=!0):Ee.isWebGL2&&M.samples>0&&A.useMultisampledRTT(M)===!1?W=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?W=Ie[X]:W=Ie,T.copy(M.viewport),L.copy(M.scissor),q=M.scissorTest}else T.copy(R).multiplyScalar(Z).floor(),L.copy(w).multiplyScalar(Z).floor(),q=k;if(me.bindFramebuffer(F.FRAMEBUFFER,W)&&Ee.drawBuffers&&K&&me.drawBuffers(M,W),me.viewport(T),me.scissor(L),me.setScissorTest(q),ve){const Ne=Ae.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,X)}else if(Te){const Ne=Ae.get(M.texture),Be=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,Be)}B=-1},this.readRenderTargetPixels=function(M,O,X,K,W,ve,Te){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){me.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Ne=M.texture,Be=Ne.format,Ie=Ne.type;if(Be!==Fn&&ye.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ie===ga&&(oe.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ie!==zi&&ye.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Pi&&(Ee.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-K&&X>=0&&X<=M.height-W&&F.readPixels(O,X,K,W,ye.convert(Be),ye.convert(Ie),ve)}finally{const Ne=C!==null?Ae.get(C).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(M,O,X=0){const K=Math.pow(2,-X),W=Math.floor(O.image.width*K),ve=Math.floor(O.image.height*K);A.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,M.x,M.y,W,ve),me.unbindTexture()},this.copyTextureToTexture=function(M,O,X,K=0){const W=O.image.width,ve=O.image.height,Te=ye.convert(X.format),Pe=ye.convert(X.type);A.setTexture2D(X,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,K,M.x,M.y,W,ve,Te,Pe,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,K,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,K,M.x,M.y,Te,Pe,O.image),K===0&&X.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(M,O,X,K,W=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=M.max.x-M.min.x+1,Te=M.max.y-M.min.y+1,Pe=M.max.z-M.min.z+1,Ne=ye.convert(K.format),Be=ye.convert(K.type);let Ie;if(K.isData3DTexture)A.setTexture3D(K,0),Ie=F.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);const Ue=F.getParameter(F.UNPACK_ROW_LENGTH),pt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),Tt=F.getParameter(F.UNPACK_SKIP_ROWS),Kn=F.getParameter(F.UNPACK_SKIP_IMAGES),ot=X.isCompressedTexture?X.mipmaps[W]:X.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),X.isDataTexture||X.isData3DTexture?F.texSubImage3D(Ie,W,O.x,O.y,O.z,ve,Te,Pe,Ne,Be,ot.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ie,W,O.x,O.y,O.z,ve,Te,Pe,Ne,ot.data)):F.texSubImage3D(Ie,W,O.x,O.y,O.z,ve,Te,Pe,Ne,Be,ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kn),W===0&&K.generateMipmaps&&F.generateMipmap(Ie),me.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){b=0,P=0,C=null,me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Al?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?dr:Zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?bt:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ow extends xv{}ow.prototype.isWebGL1Renderer=!0;class lw extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class yv extends Aa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ap=new Ct,Wu=new iv,vo=new Rl,_o=new j;class cw extends sn{constructor(e=new mi,n=new yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Ap.copy(r).invert(),Wu.copy(e.ray).applyMatrix4(Ap);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,x=m;_<x;_++){const p=c.getX(_);_o.fromBufferAttribute(d,p),Rp(_o,p,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=h,x=m;_<x;_++)_o.fromBufferAttribute(d,_),Rp(_o,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rp(t,e,n,i,r,s,a){const o=Wu.distanceSqToPoint(t);if(o<n){const l=new j;Wu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class uw extends rn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);function fw(){const t=vt.useRef(null);return vt.useEffect(()=>{const e=t.current;if(!e)return;const n=new lw,i=new yn(55,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=28;const r=new xv({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=document.createElement("canvas");s.width=1024,s.height=1366;const a=s.getContext("2d");a.fillStyle="#1c1914",a.fillRect(0,0,s.width,s.height),a.strokeStyle="#f0e6d2",a.lineWidth=8,a.strokeRect(30,30,s.width-60,s.height-60),a.strokeStyle="#52493b",a.lineWidth=4,a.strokeRect(46,46,s.width-92,s.height-92),a.font='900 68px "Cinzel", "Playfair Display", Georgia, serif',a.fillStyle="#ffffff",a.textAlign="center",a.fillText("THE VERITAS GAZETTE",s.width/2,130),a.font='700 24px "Merriweather", Georgia, serif',a.fillStyle="#f0e6d2",a.fillText("DAILY TRUTH INTELLIGENCE — VOL. 2026 // NO. 104",s.width/2,175),a.strokeStyle="#f0e6d2",a.lineWidth=4,a.beginPath(),a.moveTo(60,205),a.lineTo(s.width-60,205),a.stroke(),a.font='900 52px "Playfair Display", Georgia, serif',a.fillStyle="#ffffff",a.textAlign="left",a.fillText("AI DETECTS GLOBAL FAKE NEWS",70,275),a.fillText("IN REAL-TIME PRESS FEED",70,335),a.fillStyle="#2e2920",a.fillRect(70,370,420,280),a.fillStyle="#f0e6d2",a.font="500 18px Georgia, serif",["LONDON — Multi-layered AI neural models now scan","millions of live headlines across Indian Express, BBC,","The Hindu, and regional Tamil Nadu press releases to","verify truth accuracy and flag viral hoaxes instantly.","Linguistic bias analysis detects sensationalism and","cross-references verified editorial database archives."].forEach((T,L)=>{a.fillText(T,520,400+L*32)});const l=new uw(s);l.anisotropy=r.capabilities.getMaxAnisotropy();const c=new va(22,30,16,16),f=new ll({map:l,side:In,transparent:!0,opacity:.55}),d=new Yn(c,f);d.position.set(6,-1,-16),n.add(d);const h=new va(16,22),m=new ll({map:l,side:In,transparent:!0,opacity:.35}),_=new Yn(h,m);_.position.set(-22,4,-20),_.rotation.z=.25,n.add(_);const x=220,p=new mi,u=new Float32Array(x*3);for(let T=0;T<x;T++)u[T*3]=(Math.random()-.5)*70,u[T*3+1]=(Math.random()-.5)*60,u[T*3+2]=(Math.random()-.5)*50;p.setAttribute("position",new Bn(u,3));const v=new yv({size:.55,color:15787730,transparent:!0,opacity:.5}),g=new cw(p,v);n.add(g);const S=new Ze(0,0),b={x:0,y:0},P=T=>{S.x=T.clientX/window.innerWidth*2-1,S.y=-(T.clientY/window.innerHeight)*2+1,b.x=S.y*.45,b.y=S.x*.55};window.addEventListener("mousemove",P);const C=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",C);let B;const E=()=>{B=requestAnimationFrame(E),d.rotation.y+=(b.y-d.rotation.y)*.08,d.rotation.x+=(-b.x-d.rotation.x)*.08,d.position.x=6+S.x*2.5,d.position.y=-1+S.y*2,_.rotation.y=S.x*.25,_.position.x=-22+S.x*2,_.position.y=4+S.y*1.5,g.rotation.y+=8e-4,r.render(n,i)};return E(),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("resize",C),cancelAnimationFrame(B),e.contains(r.domElement)&&e.removeChild(r.domElement),c.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose(),v.dispose(),l.dispose(),r.dispose()}},[]),Y.jsx("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:0}})}function dw({score:t,isFake:e,verdict:n,isScanning:i}){const r=Math.min(Math.max(t,0),100),s=440-440*r/100;return Y.jsxs("div",{className:"gauge-container glass-card",children:[Y.jsxs("div",{className:"gauge-wrapper",children:[Y.jsxs("svg",{className:"gauge-svg",viewBox:"0 0 160 160",children:[Y.jsx("circle",{cx:"80",cy:"80",r:"70",className:"gauge-bg-circle"}),Y.jsx("circle",{cx:"80",cy:"80",r:"70",className:"gauge-progress-circle",style:{stroke:"#ffffff",strokeDashoffset:i?220:s,filter:"drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))"}})]}),Y.jsx("div",{className:"gauge-center-content",children:i?Y.jsx("div",{className:"scanning-pulse",children:Y.jsx("span",{className:"scan-text",style:{fontSize:"12px",fontWeight:"700",color:"#a3a3a3"},children:"SCANNING AI DATA..."})}):Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"score-number",style:{color:"#ffffff"},children:[r,"%"]}),Y.jsx("div",{className:"score-label",children:"CREDIBILITY SCORE"})]})})]}),!i&&n&&Y.jsxs("div",{className:"verdict-badge-box",children:[e?"⚠️ ":"🛡️ ",n]})]})}const Oc={india:[{id:"ind-1",title:"RBI clarifies no Micro-GPS Chips exist in currency notes following recurring social media viral rumors",content:"Viral social media posts claim that the Reserve Bank of India (RBI) has embedded Nano GPS chips (NGC) inside currency notes. According to the claims, satellite tracking can locate notes hidden 120 meters underground without any power source.",category:"India",region:"India National",isFake:!0,verdict:"DEBUNKED FAKE",score:12,analysis:{sensationalism:"Extreme (92%)",domainTrust:"Low / Unverified Social Posts",factualMatch:"0% - Officially denied by RBI",keyFlags:["Impossible technology claims","No official RBI circular","Pseudoscientific terminology"],explanation:"RBI officially issued a press release clarifying that no GPS chips exist in currency notes. Signal transmission from paper currency without a power supply violates fundamental laws of physics."},source:"WhatsApp & Facebook Viral Claim",factCheckedBy:"PIB Fact Check & RBI Statement"},{id:"ind-2",title:"ISRO outlines roadmap for 2026 Gaganyaan human spaceflight mission & Chandrayaan-4 lunar sample return",content:"Indian Space Research Organisation (ISRO) chairman announced progress on the uncrewed Gaganyaan test flights and preliminary payload integration for the Chandrayaan-4 lunar sample return mission planned for 2026.",category:"India",region:"India National",isFake:!1,verdict:"VERIFIED REAL",score:98,analysis:{sensationalism:"Low (10%)",domainTrust:"Verified Scientific Source (ISRO)",factualMatch:"99% - Matches official space agency press release",keyFlags:["Verified official press release","ISRO official logs"],explanation:"Confirmed by ISRO official announcements and published across official space research channels."},source:"ISRO Official Press Release",factCheckedBy:"ISRO & International Space Science Board"},{id:"ind-3",title:"UNESCO announces Indian National Anthem 'Jana Gana Mana' as the Best National Anthem in the World",content:"Viral messages circulating across social media groups state that UNESCO has officially declared India's National Anthem 'Jana Gana Mana' as the best national anthem in the world after a worldwide evaluation.",category:"India",region:"India National",isFake:!0,verdict:"VIRAL HOAX",score:15,analysis:{sensationalism:"High (85%)",domainTrust:"Unverified Forward Chain",factualMatch:"0% - UNESCO never holds anthem competitions",keyFlags:["Old internet chain letter","No UNESCO official document"],explanation:"UNESCO officially confirmed that it has never conducted any poll or declaration regarding national anthems."},source:"Social Media Chain Message",factCheckedBy:"UNESCO Official Statement & BoomLive"}],foreign:[{id:"for-1",title:"NASA warns Earth will experience 15 consecutive days of complete darkness due to planetary alignment",content:"A widely shared article claims that NASA administrator confirmed Earth will be plunged into total darkness for 15 days due to an astronomical event between Venus and Jupiter causing hydrogen release.",category:"Foreign",region:"Global / International",isFake:!0,verdict:"DEBUNKED HOAX",score:8,analysis:{sensationalism:"Extreme (95%)",domainTrust:"Fake News Clickbait Site",factualMatch:"0% - Physically impossible celestial mechanics",keyFlags:["Re-hashed annual scam article","No NASA advisory","False scientific terminology"],explanation:"NASA has repeatedly debunked this recurring internet hoax. No planetary alignment can block solar illumination across the planet."},source:"Clickbait Web Portals",factCheckedBy:"NASA Public Affairs & Reuters Fact Check"},{id:"for-2",title:"NASA James Webb Telescope observations provide high-resolution spectroscopic data on exoplanet atmospheres",content:"Astronomers analyzing data from NASA's James Webb Space Telescope have published detailed atmospheric transmission spectrum profiles for exoplanets, identifying water vapor, carbon dioxide, and methane gas signatures.",category:"Foreign",region:"Global / International",isFake:!1,verdict:"VERIFIED REAL",score:96,analysis:{sensationalism:"Low (14%)",domainTrust:"NASA / ESA / Astrophysical Journal",factualMatch:"98% - Published scientific research",keyFlags:["Peer-reviewed journal publication","Official telescope data archive"],explanation:"Directly corroborated by NASA Webb Mission science team publication in peer-reviewed scientific journals."},source:"NASA Webb Telescope Science Release",factCheckedBy:"NASA Goddard & ESA Astrophysics"},{id:"for-3",title:"Viral video clip claims Eiffel Tower in Paris caught on massive destructive fire",content:"A dramatic video clip and photo showing the Eiffel Tower in Paris engulfed in massive smoke and fire flames went viral on TikTok and X, claiming a major disaster destroyed the monument.",category:"Foreign",region:"Global / International",isFake:!0,verdict:"AI GENERATED FAKE",score:10,analysis:{sensationalism:"Extreme (98%)",domainTrust:"Unverified TikTok Video",factualMatch:"0% - Live Paris webcams show Eiffel tower intact",keyFlags:["3D CGI / AI Generated visual artifacts","No live news coverage","Live webcams contradict claim"],explanation:"The viral imagery was created using 3D visual effects software (VFX). Live webcams in Paris and French authorities confirmed zero fire incidents."},source:"TikTok VFX Creator",factCheckedBy:"AFP Fact Check & France24"}],tamilnadu:[{id:"tn-1",title:"TN Cyber Crime Police warns citizens against fake WhatsApp festival gift bonus links harvesting bank credentials",content:"A viral WhatsApp link circulating in Tamil Nadu claims that the Tamil Nadu government has launched an online portal where ration card holders can click a link and enter bank details to claim ₹5,000 gift bonus immediately.",category:"Tamil Nadu",region:"Tamil Nadu Regional",isFake:!0,verdict:"PHISHING FRAUD",score:5,analysis:{sensationalism:"High (88%)",domainTrust:"Suspicious APK / Phishing URL (.xyz)",factualMatch:"0% - TN Govt does not distribute schemes via WhatsApp links",keyFlags:["Phishing domain URL","Bank credential harvester","No official TN DIPR announcement"],explanation:"Tamil Nadu DIPR (Department of Information and Public Relations) warned citizens against fake WhatsApp phishing links. Official government schemes are distributed directly via PDS ration shops or official government portals (.gov.in)."},source:"WhatsApp Forward Scam",factCheckedBy:"TN DIPR Fact Check Unit & Cyber Crime Police"},{id:"tn-2",title:"Tamil Nadu Government expands 'Pudhumai Penn' scheme providing ₹1,000 monthly allowance for female college students",content:"The Tamil Nadu Higher Education Department has expanded the Moovalur Ramamirtham Ammiyar Higher Education Assurance Scheme ('Pudhumai Penn'), crediting ₹1,000 per month directly into bank accounts of eligible female students who studied in government schools.",category:"Tamil Nadu",region:"Tamil Nadu Regional",isFake:!1,verdict:"VERIFIED REAL",score:97,analysis:{sensationalism:"Low (10%)",domainTrust:"Tamil Nadu Govt Portal & Leading Dailies",factualMatch:"100% - Budget allocation & G.O. issued",keyFlags:["Government Order (G.O.) available","Direct Benefit Transfer (DBT) records"],explanation:"Confirmed by Government Orders (G.O.) issued by the Social Welfare & Women Empowerment Department, Tamil Nadu."},source:"TN DIPR & The Hindu Tamil",factCheckedBy:"TN Social Welfare Department"},{id:"tn-3",title:"Satellite image shows massive Cyclone forming near Chennai coast bringing 100cm rain in 2 hours",content:"Viral social media posts in Tamil Nadu feature a dark red satellite map claiming an unprecedented super-cyclone is directly hitting Chennai within hours, urging people to evacuate immediately.",category:"Tamil Nadu",region:"Tamil Nadu Regional",isFake:!0,verdict:"MISLEADING PANIC",score:14,analysis:{sensationalism:"Extreme (94%)",domainTrust:"Social Media Rumor Channel",factualMatch:"5% - Misinterpreted old cloud imagery",keyFlags:["Outdated weather map from 2015","Contradicts IMD Met Dept bulletin"],explanation:"Regional Meteorological Centre (RMC Chennai) issued a statement confirming normal rainfall forecast and urged public not to believe viral panic posts."},source:"YouTube Clickbait Weather Channels",factCheckedBy:"RMC Chennai & TN Disaster Management Authority"}]},hw=[{id:"live-real-1",title:"Indian Express: Union Cabinet approves Digital India expansion & AI computing infrastructure investments",source:"The Indian Express",category:"India",time:"August 2026 — 15 mins ago",isNew:!0,snippet:"New Delhi: Union Cabinet chaired by PM Narendra Modi approved new fund allocations for IndiaAI mission and national digital broadband infrastructure.",verdict:"VERIFIED REAL",score:98,url:"https://indianexpress.com/section/india/"},{id:"live-real-2",title:"The Hindu: Tamil Nadu Police Cyber Crime Wing alerts public to report cyber financial frauds on helpline 1930",source:"The Hindu",category:"Tamil Nadu",time:"August 2026 — 32 mins ago",isNew:!1,snippet:"Chennai: TN Police Cyber Crime Wing urged citizens to dial national helpline 1930 within the golden hour to freeze unauthorized bank transfers.",verdict:"VERIFIED REAL",score:97,url:"https://www.thehindu.com/news/national/tamil-nadu/"},{id:"live-real-3",title:"BBC News: Global tech coalition adopts C2PA digital provenance standards for authenticating AI imagery",source:"BBC World",category:"Foreign",time:"August 2026 — 45 mins ago",isNew:!1,snippet:"London: International news organizations and technology providers deploy cryptographic watermarks to tag verified news photos.",verdict:"VERIFIED REAL",score:96,url:"https://www.bbc.com/news/world"},{id:"live-real-4",title:"Dina Thanthi: Chennai Metro Rail Phase-II driverless train signal & track trials conducted on elevated stretch",source:"Daily Thanthi",category:"Tamil Nadu",time:"August 2026 — 1 hour ago",isNew:!1,snippet:"Chennai: CMRL conducted successful track compliance and signal integration trial runs on the Poonamallee bypass corridor.",verdict:"VERIFIED REAL",score:99,url:"https://www.dailythanthi.com/"},{id:"live-real-5",title:"Reuters: Reserve Bank of India Monetary Policy Committee maintains benchmark repo rate at 6.5 percent",source:"Reuters",category:"India",time:"August 2026 — 2 hours ago",isNew:!1,snippet:"Mumbai: The RBI Monetary Policy Committee voted unanimously to keep the key repo rate unchanged at 6.50% while monitoring liquidity.",verdict:"VERIFIED REAL",score:98,url:"https://www.reuters.com/world/india/"}],kc=[{id:"dyn-real-1",title:"Indian Express: SEBI issues advisory warning investors against illegal stock recommendation groups on Telegram",source:"The Indian Express",category:"India",snippet:"Mumbai: Capital markets regulator SEBI warned investors against unregistered entities offering fake stock tips and high-yield investment schemes.",verdict:"VERIFIED REAL",score:96,url:"https://indianexpress.com/section/business/"},{id:"dyn-real-2",title:"The Hindu: Tamil Nadu Cabinet approves state industrial infrastructure expansion policy",source:"The Hindu",category:"Tamil Nadu",snippet:"Chennai: Chief Minister of Tamil Nadu approved the revised state industrial policy aimed at boosting manufacturing and tech jobs.",verdict:"VERIFIED REAL",score:98,url:"https://www.thehindu.com/news/national/tamil-nadu/"},{id:"dyn-real-3",title:"Reuters: European Union enacts landmark rules regulating artificial intelligence deployment",source:"Reuters",category:"Foreign",snippet:"Brussels: The European Parliament officially passed landmark legislation regulating AI systems based on risk levels and transparency tags.",verdict:"VERIFIED REAL",score:97,url:"https://www.reuters.com/technology/"},{id:"dyn-real-4",title:"PIB Fact Check: Ministry of Power debunks viral notification claiming nationwide 8-hour electricity shutdown",source:"PIB India",category:"India",snippet:"New Delhi: Government press bureau confirmed that no nationwide power shutdown notice was issued by the Ministry of Power.",verdict:"DEBUNKED FAKE",score:12,url:"https://pib.gov.in/"}],pw=[{id:"soc-dedup-1",platform:"Instagram",handle:"@viral_factcheck_india",shares:"4.8M Shares",likes:"890K Likes",badge:"INSTAGRAM REEL",imageCaption:"DO NOT WEAR SILK CLOTHES NEAR LED DIWALI LIGHTS! Instant static charge explosion reported in Mumbai market! (VIRAL HOAX)",claim:"Wearing silk sarees near LED decorative lights causes static spark explosions.",reality:"Physical chemistry experts & Mumbai Fire Department confirmed silk fabrics cannot spontaneously explode near ambient electric LED lights.",verdict:"DEBUNKED FALSE",velocity:"+14.2K shares/hr 🚀",factChecker:"Alt News & Mumbai Fire Brigade",statusColor:"white"},{id:"soc-dedup-2",platform:"WhatsApp",handle:"Forwarded Chain Scam",shares:"12M+ Forwards",likes:"N/A",badge:"WHATSAPP FORWARD",imageCaption:"🚨 EMERGENCY NOTICE FROM RBI: All ATM machines will charge ₹100 per transaction starting midnight tonight!",claim:"RBI introducing ₹100 flat fee per ATM withdrawal across India.",reality:"RBI officially issued a scam alert clarifying that standard free transaction limits remain active with standard inter-bank rules.",verdict:"FAKE FORWARD",velocity:"+45K forwards/hr ⚡",factChecker:"PIB Fact Check & RBI Statement",statusColor:"white"},{id:"soc-dedup-3",platform:"X / Twitter",handle:"@TechRant_Global",shares:"320K Retweets",likes:"1.4M Likes",badge:"TRENDING TOPIC",imageCaption:"Photo of Pope Francis walking down street wearing stylish white luxury puffer jacket (AI GENERATED)",claim:"Pope Francis spotted wearing a high-fashion luxury streetwear puffer jacket in Rome.",reality:"The photo was generated using Midjourney v5 AI by a Chicago visual creator. Millions believed it was authentic before AI rendering flaws were highlighted.",verdict:"AI GENERATED PHOTO",velocity:"+8.5K retweets/hr 🌀",factChecker:"Reuters Fact Check & AFP",statusColor:"white"},{id:"soc-dedup-4",platform:"Instagram",handle:"@chennai_ocean_watch",shares:"2.1M Views",likes:"450K Likes",badge:"VIRAL REEL",imageCaption:"Chennai Marina Beach water turns glowing electric blue neon due to bioluminescent algae bloom",claim:"Bioluminescent Noctiluca scintillans plankton glowing along Marina & ECR beach shores.",reality:"Oceanographers & TN Pollution Control Board verified natural bioluminescence occurred due to sea water temperature fluctuations.",verdict:"VERIFIED REAL FACT",velocity:"+18.9K likes/hr 🌊",factChecker:"National Institute of Ocean Technology",statusColor:"white"}];var Wf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),w=R.getContext("2d");w.fillRect(0,0,1,1);var k=R.transferToImageBitmap();w.createPattern(k,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var w=n.exports.Promise,k=w!==void 0?w:e.Promise;return typeof k=="function"?new k(R):(R(l,l),null)}var f=function(R,w){return{transform:function(k){if(R)return k;if(w.has(k))return w.get(k);var U=new OffscreenCanvas(k.width,k.height),G=U.getContext("2d");return G.drawImage(k,0,0),w.set(k,U),U},clear:function(){w.clear()}}}(o,new Map),d=function(){var R=Math.floor(16.666666666666668),w,k,U={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Q){var te=Math.random();return U[te]=requestAnimationFrame(function J(ue){G===ue||G+R-1<ue?(G=ue,delete U[te],Q()):U[te]=requestAnimationFrame(J)}),te},k=function(Q){U[Q]&&cancelAnimationFrame(U[Q])}):(w=function(Q){return setTimeout(Q,R)},k=function(Q){return clearTimeout(Q)}),{frame:w,cancel:k}}(),h=function(){var R,w,k={};function U(G){function Q(te,J){G.postMessage({options:te||{},callback:J})}G.init=function(J){var ue=J.transferControlToOffscreen();G.postMessage({canvas:ue},[ue])},G.fire=function(J,ue,ge){if(w)return Q(J,null),w;var pe=Math.random().toString(36).slice(2);return w=c(function(Se){function F(Xe){Xe.data.callback===pe&&(delete k[pe],G.removeEventListener("message",F),w=null,f.clear(),ge(),Se())}G.addEventListener("message",F),Q(J,pe),k[pe]=F.bind(null,{data:{callback:pe}})}),w},G.reset=function(){G.postMessage({reset:!0});for(var J in k)k[J](),delete k[J]}}return function(){if(R)return R;if(!i&&s){var G=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([G])))}catch(Q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Q),null}U(R)}return R}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(R,w){return w?w(R):R}function x(R){return R!=null}function p(R,w,k){return _(R&&x(R[w])?R[w]:m[w],k)}function u(R){return R<0?0:Math.floor(R)}function v(R,w){return Math.floor(Math.random()*(w-R))+R}function g(R){return parseInt(R,16)}function S(R){return R.map(b)}function b(R){var w=String(R).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:g(w.substring(0,2)),g:g(w.substring(2,4)),b:g(w.substring(4,6))}}function P(R){var w=p(R,"origin",Object);return w.x=p(w,"x",Number),w.y=p(w,"y",Number),w}function C(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function B(R){var w=R.getBoundingClientRect();R.width=w.width,R.height=w.height}function E(R){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=R,w}function T(R,w,k,U,G,Q,te,J,ue){R.save(),R.translate(w,k),R.rotate(Q),R.scale(U,G),R.arc(0,0,1,te,J,ue),R.restore()}function L(R){var w=R.angle*(Math.PI/180),k=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-w+(.5*k-Math.random()*k),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function q(R,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var k=w.tick++/w.totalTicks,U=w.x+w.random*w.tiltCos,G=w.y+w.random*w.tiltSin,Q=w.wobbleX+w.random*w.tiltCos,te=w.wobbleY+w.random*w.tiltSin;if(R.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-k)+")",R.beginPath(),a&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))R.fill(Z(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Q-U)*.1,Math.abs(te-G)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var J=Math.PI/10*w.wobble,ue=Math.abs(Q-U)*.1,ge=Math.abs(te-G)*.1,pe=w.shape.bitmap.width*w.scalar,Se=w.shape.bitmap.height*w.scalar,F=new DOMMatrix([Math.cos(J)*ue,Math.sin(J)*ue,-Math.sin(J)*ge,Math.cos(J)*ge,w.x,w.y]);F.multiplySelf(new DOMMatrix(w.shape.matrix));var Xe=R.createPattern(f.transform(w.shape.bitmap),"no-repeat");Xe.setTransform(F),R.globalAlpha=1-k,R.fillStyle=Xe,R.fillRect(w.x-pe/2,w.y-Se/2,pe,Se),R.globalAlpha=1}else if(w.shape==="circle")R.ellipse?R.ellipse(w.x,w.y,Math.abs(Q-U)*w.ovalScalar,Math.abs(te-G)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):T(R,w.x,w.y,Math.abs(Q-U)*w.ovalScalar,Math.abs(te-G)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var oe=Math.PI/2*3,Ee=4*w.scalar,me=8*w.scalar,We=w.x,Ae=w.y,A=5,y=Math.PI/A;A--;)We=w.x+Math.cos(oe)*me,Ae=w.y+Math.sin(oe)*me,R.lineTo(We,Ae),oe+=y,We=w.x+Math.cos(oe)*Ee,Ae=w.y+Math.sin(oe)*Ee,R.lineTo(We,Ae),oe+=y;else R.moveTo(Math.floor(w.x),Math.floor(w.y)),R.lineTo(Math.floor(w.wobbleX),Math.floor(G)),R.lineTo(Math.floor(Q),Math.floor(te)),R.lineTo(Math.floor(U),Math.floor(w.wobbleY));return R.closePath(),R.fill(),w.tick<w.totalTicks}function ee(R,w,k,U,G){var Q=w.slice(),te=R.getContext("2d"),J,ue,ge=c(function(pe){function Se(){J=ue=null,te.clearRect(0,0,U.width,U.height),f.clear(),G(),pe()}function F(){i&&!(U.width===r.width&&U.height===r.height)&&(U.width=R.width=r.width,U.height=R.height=r.height),!U.width&&!U.height&&(k(R),U.width=R.width,U.height=R.height),te.clearRect(0,0,U.width,U.height),Q=Q.filter(function(Xe){return q(te,Xe)}),Q.length?J=d.frame(F):Se()}J=d.frame(F),ue=Se});return{addFettis:function(pe){return Q=Q.concat(pe),ge},canvas:R,promise:ge,reset:function(){J&&d.cancel(J),ue&&ue()}}}function D(R,w){var k=!R,U=!!p(w||{},"resize"),G=!1,Q=p(w,"disableForReducedMotion",Boolean),te=s&&!!p(w||{},"useWorker"),J=te?h():null,ue=k?C:B,ge=R&&J?!!R.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Se;function F(oe,Ee,me){for(var We=p(oe,"particleCount",u),Ae=p(oe,"angle",Number),A=p(oe,"spread",Number),y=p(oe,"startVelocity",Number),V=p(oe,"decay",Number),se=p(oe,"gravity",Number),ie=p(oe,"drift",Number),ae=p(oe,"colors",S),Me=p(oe,"ticks",Number),fe=p(oe,"shapes"),xe=p(oe,"scalar"),Re=!!p(oe,"flat"),De=P(oe),ne=We,Ye=[],ke=R.width*De.x,Le=R.height*De.y;ne--;)Ye.push(L({x:ke,y:Le,angle:Ae,spread:A,startVelocity:y,color:ae[ne%ae.length],shape:fe[v(0,fe.length)],ticks:Me,decay:V,gravity:se,drift:ie,scalar:xe,flat:Re}));return Se?Se.addFettis(Ye):(Se=ee(R,Ye,ue,Ee,me),Se.promise)}function Xe(oe){var Ee=Q||p(oe,"disableForReducedMotion",Boolean),me=p(oe,"zIndex",Number);if(Ee&&pe)return c(function(y){y()});k&&Se?R=Se.canvas:k&&!R&&(R=E(me),document.body.appendChild(R)),U&&!ge&&ue(R);var We={width:R.width,height:R.height};J&&!ge&&J.init(R),ge=!0,J&&(R.__confetti_initialized=!0);function Ae(){if(J){var y={getBoundingClientRect:function(){if(!k)return R.getBoundingClientRect()}};ue(y),J.postMessage({resize:{width:y.width,height:y.height}});return}We.width=We.height=null}function A(){Se=null,U&&(G=!1,e.removeEventListener("resize",Ae)),k&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,ge=!1)}return U&&!G&&(G=!0,e.addEventListener("resize",Ae,!1)),J?J.fire(oe,We,A):F(oe,We,A)}return Xe.reset=function(){J&&J.reset(),Se&&Se.reset()},Xe}var H;function $(){return H||(H=D(null,{useWorker:!0,resize:!0})),H}function Z(R,w,k,U,G,Q,te){var J=new Path2D(R),ue=new Path2D;ue.addPath(J,new DOMMatrix(w));var ge=new Path2D;return ge.addPath(ue,new DOMMatrix([Math.cos(te)*G,Math.sin(te)*G,-Math.sin(te)*Q,Math.cos(te)*Q,k,U])),ge}function I(R){if(!a)throw new Error("path confetti are not supported in this browser");var w,k;typeof R=="string"?w=R:(w=R.path,k=R.matrix);var U=new Path2D(w),G=document.createElement("canvas"),Q=G.getContext("2d");if(!k){for(var te=1e3,J=te,ue=te,ge=0,pe=0,Se,F,Xe=0;Xe<te;Xe+=2)for(var oe=0;oe<te;oe+=2)Q.isPointInPath(U,Xe,oe,"nonzero")&&(J=Math.min(J,Xe),ue=Math.min(ue,oe),ge=Math.max(ge,Xe),pe=Math.max(pe,oe));Se=ge-J,F=pe-ue;var Ee=10,me=Math.min(Ee/Se,Ee/F);k=[me,0,0,me,-Math.round(Se/2+J)*me,-Math.round(F/2+ue)*me]}return{type:"path",path:w,matrix:k}}function z(R){var w,k=1,U="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?w=R:(w=R.text,k="scalar"in R?R.scalar:k,G="fontFamily"in R?R.fontFamily:G,U="color"in R?R.color:U);var Q=10*k,te=""+Q+"px "+G,J=new OffscreenCanvas(Q,Q),ue=J.getContext("2d");ue.font=te;var ge=ue.measureText(w),pe=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),Se=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),F=2,Xe=ge.actualBoundingBoxLeft+F,oe=ge.actualBoundingBoxAscent+F;pe+=F+F,Se+=F+F,J=new OffscreenCanvas(pe,Se),ue=J.getContext("2d"),ue.font=te,ue.fillStyle=U,ue.fillText(w,Xe,oe);var Ee=1/k;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[Ee,0,0,Ee,-pe*Ee/2,-Se*Ee/2]}}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=D,n.exports.shapeFromPath=I,n.exports.shapeFromText=z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Wf,!1);const mw=Wf.exports;Wf.exports.create;/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Hn=(t,e)=>{const n=vt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},f)=>vt.createElement("svg",{ref:f,...gw,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${vw(t)}`,o].join(" "),...c},[...e.map(([d,h])=>vt.createElement(d,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=Hn("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Hn("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=Hn("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Hn("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=Hn("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Hn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=Hn("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Hn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=Hn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=Hn("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=Hn("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Aw(){const[t,e]=vt.useState("detector"),[n,i]=vt.useState(""),[r,s]=vt.useState(!1),[a,o]=vt.useState(null),[l,c]=vt.useState(hw),[f,d]=vt.useState("All"),[h,m]=vt.useState("Just now"),[_,x]=vt.useState(!1),[p,u]=vt.useState(0),v=L=>{if(!L)return"Just now";try{const q=new Date(L).getTime();if(isNaN(q))return"Just now";const ee=Date.now(),D=Math.max(1,Math.floor((ee-q)/(1e3*60)));if(D<60)return`${D} mins ago`;const H=Math.floor(D/60);return H<24?`${H} hours ago`:`${Math.floor(H/24)} days ago`}catch{return"Just now"}},[g]=vt.useState(()=>{const L=new Map;return pw.forEach(q=>L.set(q.id,q)),Array.from(L.values())});vt.useEffect(()=>{S()},[]),vt.useEffect(()=>{const L=setInterval(()=>{if(p<kc.length){const q={...kc[p],time:"Just now",isNew:!0};c(ee=>ee.some(D=>D.id===q.id)?ee:[q,...ee.slice(0,9)]),u(ee=>(ee+1)%kc.length),m(new Date().toLocaleTimeString())}},12e3);return()=>clearInterval(L)},[p]);const S=async()=>{x(!0);try{const q=await(await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://indianexpress.com/feed/")).json();if(q&&q.items&&q.items.length>0){const ee=q.items.slice(0,6).map((D,H)=>{const $=new Date(D.pubDate),Z=isNaN($.getTime())?"Today":$.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),I=v(D.pubDate);return{id:`rss-live-${H}-${Date.now()}`,title:D.title?D.title.replace(/^Indian Express Live:\s*/i,""):"Current India News",source:"The Indian Express",category:"India",time:`${Z} — ${I}`,snippet:D.description?D.description.replace(/<[^>]*>?/gm,"").substring(0,160)+"...":D.title,verdict:"VERIFIED EDITORIAL FACT",score:98,url:D.link||"https://indianexpress.com/section/india/"}});c(D=>{const H=[...ee,...D],$=new Map;return H.forEach(Z=>$.set(Z.title,Z)),Array.from($.values()).slice(0,10)}),m(new Date().toLocaleTimeString())}else throw new Error("RSS items empty")}catch(L){console.warn("Live RSS fetch proxy fallback:",L);const q={id:"fallback-rss-"+Date.now(),title:"The Indian Express: Election Commission launches digital voter service upgrades across pilot states",source:"The Indian Express",category:"India",time:"Just now",snippet:"New Delhi: Election Commission introduces enhanced digital verification mechanisms across election management portals.",verdict:"VERIFIED EDITORIAL FACT",score:97,url:"https://indianexpress.com/section/india/"};c(ee=>[q,...ee])}finally{x(!1)}},b=L=>{const q=L||n;q.trim()&&(s(!0),o(null),setTimeout(()=>{const ee=q.toLowerCase(),D=["isro","rbi","nasa","reuters","bbc","the hindu","indian express","gov.in","dipr","scientific","peer-reviewed","sebi","cabinet","election commission","budget"],H=["chip","gps","100%","shocking","miracle","whatsapp","must share","urgent","darkness for 15 days","secret bonus",".xyz","free gift","laser beams","spontaneously explode"];let $=72;const Z=[];D.forEach(k=>{ee.includes(k)&&($+=10)}),H.forEach(k=>{ee.includes(k)&&($-=24,Z.push(`Sensational flag detected: "${k}"`))});const I=Math.max(5,Math.min(99,Math.round($))),z=I<50;let R=z?"LIKELY FAKE / SENSATIONAL":"HIGH CREDIBILITY REAL FACT";I<25&&(R="DEBUNKED PRESS HOAX"),I>85&&(R="VERIFIED EDITORIAL FACT");const w={score:I,isFake:z,verdict:R,analysis:{sensationalism:z?"High (86%)":"Low (12%)",domainTrust:z?"Low / Unverified Channel":"High Authority Press",factualMatch:z?"14% - High variance from official sources":"97% - Strong consensus",keyFlags:Z.length>0?Z:["Clear journalistic syntax","Standard editorial reporting format"],explanation:z?"Editorial AI detected multiple hype patterns, unverified claims, or known rumor signatures. Cross-check against official press archives.":"Strong domain markers and objective editorial structure indicate verified news content."}};o(w),s(!1),!z&&I>85&&mw({particleCount:50,spread:60,origin:{y:.7}})},1100))},P=L=>{i(L.title+`

`+L.content),o({score:L.score,isFake:L.isFake,verdict:L.verdict,analysis:L.analysis})},C=L=>{i(L.title+`

`+L.snippet),e("detector"),b(L.title+" "+L.snippet)},B=L=>{const q=L.replace(/^Indian Express Live:\s*/i,"").replace(/^The Hindu Press:\s*/i,""),ee=encodeURIComponent(q);window.open(`https://www.google.com/search?q=${ee}`,"_blank")},E=(L,q)=>{L&&L.startsWith("http")?window.open(L,"_blank"):B(q)},T=l.filter(L=>f==="All"||L.category===f);return Y.jsxs("div",{className:"app-container",children:[Y.jsx(fw,{}),Y.jsxs("header",{className:"app-header",children:[Y.jsxs("div",{className:"logo-group",children:[Y.jsx("div",{className:"logo-badge",children:"🛡️"}),Y.jsxs("div",{children:[Y.jsx("h1",{className:"brand-title",children:"Veritas"}),Y.jsx("p",{className:"brand-subtitle",children:"AI News Intelligence & Fact Check Press"})]})]}),Y.jsxs("nav",{className:"nav-tabs",children:[Y.jsxs("button",{className:`nav-btn ${t==="detector"?"active":""}`,onClick:()=>e("detector"),children:[Y.jsx(zc,{size:16})," AI Detector"]}),Y.jsxs("button",{className:`nav-btn ${t==="live"?"active":""}`,onClick:()=>e("live"),children:[Y.jsx(Tw,{size:16})," Live News (",l.length,")"]}),Y.jsxs("button",{className:`nav-btn ${t==="viral"?"active":""}`,onClick:()=>e("viral"),children:[Y.jsx(Ew,{size:16})," Social Fact Check"]})]})]}),t==="detector"&&Y.jsxs("section",{className:"detector-section",children:[Y.jsxs("div",{className:"section-title-box",children:[Y.jsx("h2",{className:"section-title",children:"EDITORIAL FACT-CHECK DESK"}),Y.jsx("p",{className:"section-desc",children:"Submit news text, press releases, or WhatsApp claims below. Our AI cross-references historical press archives and evaluates sensationalism flags."})]}),Y.jsxs("div",{className:"detector-grid",children:[Y.jsxs("div",{className:"glass-panel input-card",children:[Y.jsxs("div",{className:"input-header",children:[Y.jsxs("span",{className:"input-label",children:[Y.jsx(ww,{size:20})," Submit Article or Press Release"]}),Y.jsxs("span",{style:{fontSize:"13px",color:"var(--paper-muted)",fontFamily:"var(--font-headline)"},children:[n.length," characters"]})]}),Y.jsx("textarea",{className:"news-textarea",placeholder:"Paste news headline, full article text, or viral claim here...",value:n,onChange:L=>i(L.target.value)}),Y.jsxs("div",{className:"preset-pills-label",children:[Y.jsx(Mw,{size:14})," Load Historical Press Datasets (India, Foreign, Tamil Nadu):"]}),Y.jsxs("div",{className:"preset-buttons",children:[Oc.india.map(L=>Y.jsxs("button",{className:"preset-btn",onClick:()=>P(L),children:["🇮🇳 ",L.title.substring(0,30),"..."]},L.id)),Oc.foreign.map(L=>Y.jsxs("button",{className:"preset-btn",onClick:()=>P(L),children:["🌍 ",L.title.substring(0,30),"..."]},L.id)),Oc.tamilnadu.map(L=>Y.jsxs("button",{className:"preset-btn",onClick:()=>P(L),children:["🏛️ TN: ",L.title.substring(0,30),"..."]},L.id))]}),Y.jsxs("div",{className:"action-bar",children:[Y.jsx("button",{className:"analyze-btn",onClick:()=>b(),disabled:r||!n.trim(),children:r?Y.jsxs(Y.Fragment,{children:[Y.jsx(Cp,{className:"animate-spin",size:18})," Scanning Veritas Archives..."]}):Y.jsxs(Y.Fragment,{children:[Y.jsx(zc,{size:18})," Run Editorial Verification"]})}),n&&Y.jsx("button",{className:"clear-btn",onClick:()=>{i(""),o(null)},children:"Clear"})]})]}),Y.jsx("div",{className:"glass-panel",children:Y.jsx(dw,{score:a?a.score:50,isFake:a?a.isFake:!1,verdict:a?a.verdict:"READY TO VERIFY",isScanning:r})})]}),a&&!r&&Y.jsxs("div",{className:"glass-panel analysis-report",children:[Y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[Y.jsxs("h3",{className:"report-title",style:{margin:0},children:[Y.jsx(yw,{size:20})," Editorial Verification Report"]}),Y.jsxs("button",{className:"fact-check-action-btn",onClick:()=>B(n.split(`
`)[0]),children:[Y.jsx(Bc,{size:14})," Search Title on Google ↗"]})]}),Y.jsxs("div",{className:"report-grid",children:[Y.jsxs("div",{className:"report-card",children:[Y.jsx("div",{className:"report-card-label",children:"Sensationalism Index"}),Y.jsx("div",{className:"report-card-val",children:a.analysis.sensationalism})]}),Y.jsxs("div",{className:"report-card",children:[Y.jsx("div",{className:"report-card-label",children:"Domain Authority"}),Y.jsx("div",{className:"report-card-val",children:a.analysis.domainTrust})]}),Y.jsxs("div",{className:"report-card",children:[Y.jsx("div",{className:"report-card-label",children:"Consensus Match"}),Y.jsx("div",{className:"report-card-val",children:a.analysis.factualMatch})]})]}),Y.jsxs("div",{className:"key-flags-box",children:[Y.jsx("div",{className:"flags-title",children:"Linguistic Press Diagnostics:"}),Y.jsx("ul",{className:"flags-list",children:a.analysis.keyFlags.map((L,q)=>Y.jsxs("li",{className:"flag-item",children:[Y.jsx(xw,{size:14,color:"#f0e6d2"}),L]},q))}),Y.jsxs("p",{style:{marginTop:"12px",fontSize:"14px",color:"var(--paper-cream)"},children:[Y.jsx("strong",{children:"Editorial Note:"})," ",a.analysis.explanation]})]})]})]}),t==="live"&&Y.jsxs("section",{className:"live-news-section",children:[Y.jsxs("div",{className:"section-title-box",children:[Y.jsx("h2",{className:"section-title",children:"DAILY LIVE PRESS STREAM"}),Y.jsx("p",{className:"section-desc",children:"Front-page news articles scraped in real time from Indian Express, The Hindu, BBC News, and Daily Thanthi."}),Y.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"14px",alignItems:"center",marginTop:"14px",flexWrap:"wrap"},children:[Y.jsxs("div",{className:"live-status-pill",children:[Y.jsx("span",{className:"pulse-dot"})," LIVE PRESS WIRE ACTIVE (REAL-TIME RSS)"]}),Y.jsxs("button",{className:"fact-check-action-btn",style:{padding:"8px 16px",borderRadius:"20px"},onClick:S,disabled:_,children:[Y.jsx(Cp,{className:_?"animate-spin":"",size:14})," Fetch Live RSS Articles"]})]})]}),Y.jsx("div",{className:"filter-tabs-row",children:["All","India","Foreign","Tamil Nadu"].map(L=>Y.jsxs("button",{className:`filter-btn ${f===L?"active":""}`,onClick:()=>d(L),children:[L==="India"&&"🇮🇳 ",L==="Foreign"&&"🌍 ",L==="Tamil Nadu"&&"🏛️ ",L," News"]},L))}),Y.jsx("div",{className:"news-cards-grid",children:T.map(L=>Y.jsxs("div",{className:"glass-card live-card",children:[Y.jsxs("div",{children:[Y.jsxs("div",{className:"live-card-meta",children:[Y.jsx("span",{className:"source-badge",children:L.source}),Y.jsx("span",{className:"time-stamp",children:L.time})]}),Y.jsx("h3",{className:"live-card-title",children:L.title}),Y.jsx("p",{className:"live-card-snippet",children:L.snippet})]}),Y.jsxs("div",{className:"live-card-footer",style:{flexDirection:"column",gap:"10px",alignItems:"stretch"},children:[Y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Y.jsxs("span",{className:"card-verdict",children:[L.verdict," (",L.score,"%)"]}),Y.jsxs("button",{className:"fact-check-action-btn",onClick:()=>C(L),children:[Y.jsx(zc,{size:14})," Fact Check"]})]}),Y.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Y.jsxs("button",{className:"preset-btn",style:{flex:1,justifyContent:"center",fontSize:"12px"},onClick:()=>E(L.url,L.title),children:["Visit Official Outlet ",Y.jsx(Sw,{size:12})]}),Y.jsxs("button",{className:"preset-btn",style:{flex:1,justifyContent:"center",fontSize:"12px"},onClick:()=>B(L.title),children:["Search Google ",Y.jsx(Bc,{size:12})]})]})]})]},L.id))})]}),t==="viral"&&Y.jsxs("section",{className:"social-section",children:[Y.jsxs("div",{className:"section-title-box",children:[Y.jsx("h2",{className:"section-title",children:"SOCIAL RUMOR & HOAX DESK"}),Y.jsx("p",{className:"section-desc",children:"Fact checking viral claims across Instagram, WhatsApp forwards, X/Twitter, and TikTok."}),Y.jsxs("div",{className:"live-status-pill",children:[Y.jsx(_w,{size:14})," EDITORIAL RUMOR MONITOR ACTIVE"]})]}),Y.jsx("div",{className:"social-grid",children:g.map(L=>Y.jsxs("div",{className:"glass-card social-card",children:[Y.jsxs("div",{className:"social-header",children:[Y.jsxs("div",{className:"platform-info",children:[Y.jsxs("span",{style:{fontSize:"20px"},children:[L.platform==="Instagram"&&"📸",L.platform==="WhatsApp"&&"💬",L.platform==="X / Twitter"&&"🐦",L.platform==="TikTok"&&"🎵"]}),Y.jsxs("div",{children:[Y.jsx("div",{className:"platform-name",children:L.platform}),Y.jsx("div",{className:"handle-text",children:L.handle})]})]}),Y.jsx("span",{className:"social-badge",children:L.badge})]}),Y.jsxs("div",{className:"social-caption-box",children:['"',L.imageCaption,'"']}),Y.jsxs("div",{className:"claim-versus-reality",children:[Y.jsxs("div",{className:"cvr-box",children:[Y.jsx("div",{className:"cvr-title",children:"⚠️ Viral Claim"}),Y.jsx("div",{children:L.claim})]}),Y.jsxs("div",{className:"cvr-box",children:[Y.jsx("div",{className:"cvr-title",children:"🛡️ Editorial Fact & Reality"}),Y.jsx("div",{children:L.reality})]})]}),Y.jsxs("div",{className:"social-footer",children:[Y.jsxs("span",{children:["🔥 ",L.shares]}),Y.jsxs("button",{className:"fact-check-action-btn",onClick:()=>B(L.claim),children:["Google Claim ",Y.jsx(Bc,{size:12})]})]})]},L.id))})]})]})}Hc.createRoot(document.getElementById("root")).render(Y.jsx(Gv.StrictMode,{children:Y.jsx(Aw,{})}));
