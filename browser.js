// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=a):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&i&&i.call(t,e,c.set),t};function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",h=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[g],i=g,e=null!=(o=t)&&s.call(o,i);try{t[g]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[g]=r:delete t[g],n}:function(t){return b.call(t)},_=Number,d=_.prototype.toString,v=y();function m(t){return"object"==typeof t&&(t instanceof _||(v?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function j(t){return f(t)||m(t)}a(j,"isPrimitive",f),a(j,"isObject",m);var S=Number.POSITIVE_INFINITY,w=_.NEGATIVE_INFINITY,O=Math.floor;function T(t){return t<S&&t>w&&O(e=t)===e;var e}function P(t){return f(t)&&T(t)}function E(t){return m(t)&&T(t.valueOf())}function I(t){return P(t)||E(t)}function N(t){return"string"==typeof t}a(I,"isPrimitive",P),a(I,"isObject",E);var A=String.prototype.valueOf,x=y();function C(t){return"object"==typeof t&&(t instanceof String||(x?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function F(t){return N(t)||C(t)}function G(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a(F,"isPrimitive",N),a(F,"isObject",C);var V=void 0!==String.prototype.startsWith,W=String.prototype.startsWith,Z=V?function(t,e,r){var n;return n=r<0?t.length+r:r,0===e.length||!(n<0||n+e.length>t.length)&&W.call(t,e,n)}:function(t,e,r){var n,o;if(n=r<0?t.length+r:r,0===e.length)return!0;if(n<0||n+e.length>t.length)return!1;for(o=0;o<e.length;o++)if(t.charCodeAt(n+o)!==e.charCodeAt(o))return!1;return!0};return function(t,e,r){var n;if(!N(t))throw new TypeError(G("1PZ3F,Ex",t));if(!N(e))throw new TypeError(G("1PZ39,Ey",e));if(arguments.length>2){if(!P(r))throw new TypeError(G("1PZ2z,GL",r));n=r}else n=0;return Z(t,e,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).startsWith=e();
//# sourceMappingURL=browser.js.map
