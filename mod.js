// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,l.get),y&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[g],i=g,r=null!=(o=t)&&v.call(o,i);try{t[g]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[g]=e:delete t[g],n}:function(t){return b.call(t)},s=Number,_=s.prototype.toString;var d=y();function m(t){return"object"==typeof t&&(t instanceof s||(d?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function j(t){return f(t)||m(t)}c(j,"isPrimitive",f),c(j,"isObject",m);var S=Number.POSITIVE_INFINITY,w=s.NEGATIVE_INFINITY,O=Math.floor;function T(t){return t<S&&t>w&&O(r=t)===r;var r}function I(t){return f(t)&&T(t)}function E(t){return m(t)&&T(t.valueOf())}function P(t){return I(t)||E(t)}function N(t){return"string"==typeof t}c(P,"isPrimitive",I),c(P,"isObject",E);var A=String.prototype.valueOf;var C=y();function V(t){return"object"==typeof t&&(t instanceof String||(C?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function F(t){return N(t)||V(t)}function G(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}c(F,"isPrimitive",N),c(F,"isObject",V);var k=void 0!==String.prototype.startsWith;var x=String.prototype.startsWith;var R=k?function(t,r,e){var n;return n=e<0?t.length+e:e,0===r.length||!(n<0||n+r.length>t.length)&&x.call(t,r,n)}:function(t,r,e){var n,o;if(n=e<0?t.length+e:e,0===r.length)return!0;if(n<0||n+r.length>t.length)return!1;for(o=0;o<r.length;o++)if(t.charCodeAt(n+o)!==r.charCodeAt(o))return!1;return!0};function W(t,r,e){var n;if(!N(t))throw new TypeError(G("0hd3R",t));if(!N(r))throw new TypeError(G("0hd3L",r));if(arguments.length>2){if(!I(e))throw new TypeError(G("0hd3B",e));n=e}else n=0;return R(t,r,n)}export{W as default};
//# sourceMappingURL=mod.js.map
