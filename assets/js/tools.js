!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=2)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(3).__importDefault(e(4)),o=e(1),i=function(){function t(){}return t.decode=function(r){return t.baseX.decode(r)},t.encode=function(r){return t.baseX.encode(r)},t.encodeString=function(r){try{var e=new o.Buffer(r);return t.baseX.encode(e)}catch(t){return console.error(t),""}},t.ALPHABET="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",t.baseX=n.default(t.ALPHABET),t}();r.Base58=i},function(t,r,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=e(7),o=e(8),i=e(9);function u(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(t,r){if(u()<r)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=a.prototype:(null===t&&(t=new a(r)),t.length=r),t}function a(t,r,e){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);a.TYPED_ARRAY_SUPPORT?(t=r).__proto__=a.prototype:t=l(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!a.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(r,e),o=(t=f(t,n)).write(r,e);o!==n&&(t=t.slice(0,o));return t}(t,r,e):function(t,r){if(a.isBuffer(r)){var e=0|p(r.length);return 0===(t=f(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?f(t,0):l(t,r);if("Buffer"===r.type&&i(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,r){if(c(r),t=f(t,r<0?0:0|p(r)),!a.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=f(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function y(t,r){if(a.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return z(t).length;default:if(n)return N(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function d(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=a.from(r,n)),a.isBuffer(r))return 0===r.length?-1:w(t,r,e,n,o);if("number"==typeof r)return r&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):w(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function w(t,r,e,n,o){var i,u=1,f=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,a/=2,e/=2}function s(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var c=-1;for(i=e;i<f;i++)if(s(t,i)===s(r,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===a)return c*u}else-1!==c&&(i-=i-c),c=-1}else for(e+a>f&&(e=f-a),i=e;i>=0;i--){for(var h=!0,l=0;l<a;l++)if(s(t,i+l)!==s(r,l)){h=!1;break}if(h)return i}return-1}function v(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function b(t,r,e,n){return F(N(r,t.length-e),t,e,n)}function _(t,r,e,n){return F(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function m(t,r,e,n){return _(t,r,e,n)}function A(t,r,e,n){return F(z(r),t,e,n)}function E(t,r,e,n){return F(function(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)e=t.charCodeAt(u),n=e>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function P(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function R(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,f,a,s=t[o],c=null,h=s>239?4:s>223?3:s>191?2:1;if(o+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(i=t[o+1]))&&(a=(31&s)<<6|63&i)>127&&(c=a);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(a=(15&s)<<12|(63&i)<<6|63&u)>2047&&(a<55296||a>57343)&&(c=a);break;case 4:i=t[o+1],u=t[o+2],f=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&f)&&(a=(15&s)<<18|(63&i)<<12|(63&u)<<6|63&f)>65535&&a<1114112&&(c=a)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var r=t.length;if(r<=T)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=T));return e}(n)}r.Buffer=a,r.SlowBuffer=function(t){+t!=t&&(t=0);return a.alloc(+t)},r.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=u(),a.poolSize=8192,a._augment=function(t){return t.__proto__=a.prototype,t},a.from=function(t,r,e){return s(null,t,r,e)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(t,r,e){return function(t,r,e,n){return c(r),r<=0?f(t,r):void 0!==e?"string"==typeof n?f(t,r).fill(e,n):f(t,r).fill(e):f(t,r)}(null,t,r,e)},a.allocUnsafe=function(t){return h(null,t)},a.allocUnsafeSlow=function(t){return h(null,t)},a.isBuffer=function(t){return!(null==t||!t._isBuffer)},a.compare=function(t,r){if(!a.isBuffer(t)||!a.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,r){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=a.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var u=t[e];if(!a.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},a.byteLength=y,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)g(this,r,r+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)g(this,r,r+3),g(this,r+1,r+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)g(this,r,r+7),g(this,r+1,r+6),g(this,r+2,r+5),g(this,r+3,r+4);return this},a.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?R(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,r,e);case"utf8":case"utf-8":return R(this,r,e);case"ascii":return S(this,r,e);case"latin1":case"binary":return B(this,r,e);case"base64":return P(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},a.prototype.compare=function(t,r,e,n,o){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),f=Math.min(i,u),s=this.slice(n,o),c=t.slice(r,e),h=0;h<f;++h)if(s[h]!==c[h]){i=s[h],u=c[h];break}return i<u?-1:u<i?1:0},a.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},a.prototype.indexOf=function(t,r,e){return d(this,t,r,e,!0)},a.prototype.lastIndexOf=function(t,r,e){return d(this,t,r,e,!1)},a.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return v(this,t,r,e);case"utf8":case"utf-8":return b(this,t,r,e);case"ascii":return _(this,t,r,e);case"latin1":case"binary":return m(this,t,r,e);case"base64":return A(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function S(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function B(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function U(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=k(t[i]);return o}function O(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function I(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function x(t,r,e,n,o,i){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function Y(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function M(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function C(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function L(t,r,e,n,i){return i||C(t,0,e,4),o.write(t,r,e,n,23,4),e+4}function j(t,r,e,n,i){return i||C(t,0,e,8),o.write(t,r,e,n,52,8),e+8}a.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),a.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=a.prototype;else{var o=r-t;e=new a(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},a.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},a.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},a.prototype.readUInt8=function(t,r){return r||I(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,r){return r||I(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,r){return r||I(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,r){return r||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUInt32BE=function(t,r){return r||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},a.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||I(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},a.prototype.readInt8=function(t,r){return r||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,r){r||I(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},a.prototype.readInt16BE=function(t,r){r||I(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},a.prototype.readInt32LE=function(t,r){return r||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,r){return r||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,r){return r||I(t,4,this.length),o.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,r){return r||I(t,4,this.length),o.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,r){return r||I(t,8,this.length),o.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,r){return r||I(t,8,this.length),o.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||x(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},a.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||x(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},a.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,1,255,0),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},a.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},a.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},a.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):M(this,t,r,!0),r+4},a.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):M(this,t,r,!1),r+4},a.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);x(this,t,r,e,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},a.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);x(this,t,r,e,o-1,-o)}var i=e-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},a.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,1,127,-128),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},a.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},a.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},a.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):M(this,t,r,!0),r+4},a.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||x(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),a.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):M(this,t,r,!1),r+4},a.prototype.writeFloatLE=function(t,r,e){return L(this,t,r,!0,e)},a.prototype.writeFloatBE=function(t,r,e){return L(this,t,r,!1,e)},a.prototype.writeDoubleLE=function(t,r,e){return j(this,t,r,!0,e)},a.prototype.writeDoubleBE=function(t,r,e){return j(this,t,r,!1,e)},a.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!a.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},a.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var u=a.isBuffer(t)?t:N(new a(t,n).toString()),f=u.length;for(i=0;i<e-r;++i)this[i+r]=u[i%f]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function k(t){return t<16?"0"+t.toString(16):t.toString(16)}function N(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function z(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}}).call(this,e(6))},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(0),o=e(0);r.Base58=o.Base58,"undefined"!=typeof window&&(window.tools={Base58:n.Base58})},function(t,r,e){"use strict";e.r(r),e.d(r,"__extends",function(){return o}),e.d(r,"__assign",function(){return i}),e.d(r,"__rest",function(){return u}),e.d(r,"__decorate",function(){return f}),e.d(r,"__param",function(){return a}),e.d(r,"__metadata",function(){return s}),e.d(r,"__awaiter",function(){return c}),e.d(r,"__generator",function(){return h}),e.d(r,"__exportStar",function(){return l}),e.d(r,"__values",function(){return p}),e.d(r,"__read",function(){return y}),e.d(r,"__spread",function(){return g}),e.d(r,"__await",function(){return d}),e.d(r,"__asyncGenerator",function(){return w}),e.d(r,"__asyncDelegator",function(){return v}),e.d(r,"__asyncValues",function(){return b}),e.d(r,"__makeTemplateObject",function(){return _}),e.d(r,"__importStar",function(){return m}),e.d(r,"__importDefault",function(){return A});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function o(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var i=function(){return(i=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function u(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&(e[n[o]]=t[n[o]])}return e}function f(t,r,e,n){var o,i=arguments.length,u=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,r,e,n);else for(var f=t.length-1;f>=0;f--)(o=t[f])&&(u=(i<3?o(u):i>3?o(r,e,u):o(r,e))||u);return i>3&&u&&Object.defineProperty(r,e,u),u}function a(t,r){return function(e,n){r(e,n,t)}}function s(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)}function c(t,r,e,n){return new(e||(e=Promise))(function(o,i){function u(t){try{a(n.next(t))}catch(t){i(t)}}function f(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(u,f)}a((n=n.apply(t,r||[])).next())})}function h(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:f(0),throw:f(1),return:f(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function f(i){return function(f){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,f])}}}function l(t,r){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])}function p(t){var r="function"==typeof Symbol&&t[Symbol.iterator],e=0;return r?r.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}}function y(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function g(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(y(arguments[r]));return t}function d(t){return this instanceof d?(this.v=t,this):new d(t)}function w(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(t,r||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){o[t]&&(n[t]=function(r){return new Promise(function(e,n){i.push([t,r,e,n])>1||f(t,r)})})}function f(t,r){try{(e=o[t](r)).value instanceof d?Promise.resolve(e.value.v).then(a,s):c(i[0][2],e)}catch(t){c(i[0][3],t)}var e}function a(t){f("next",t)}function s(t){f("throw",t)}function c(t,r){t(r),i.shift(),i.length&&f(i[0][0],i[0][1])}}function v(t){var r,e;return r={},n("next"),n("throw",function(t){throw t}),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=t[n]?function(r){return(e=!e)?{value:d(t[n](r)),done:"return"===n}:o?o(r):r}:o}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,e=t[Symbol.asyncIterator];return e?e.call(t):(t=p(t),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(e){r[e]=t[e]&&function(r){return new Promise(function(n,o){(function(t,r,e,n){Promise.resolve(n).then(function(r){t({value:r,done:e})},r)})(n,o,(r=t[e](r)).done,r.value)})}}}function _(t,r){return Object.defineProperty?Object.defineProperty(t,"raw",{value:r}):t.raw=r,t}function m(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r.default=t,r}function A(t){return t&&t.__esModule?t:{default:t}}},function(t,r,e){const n=e(5).Buffer;t.exports=function(t){if(t.length>=255)throw new TypeError("Alphabet too long");const r=new Uint8Array(256);r.fill(255);for(let e=0;e<t.length;e++){const n=t.charAt(e),o=n.charCodeAt(0);if(255!==r[o])throw new TypeError(n+" is ambiguous");r[o]=e}const e=t.length,o=t.charAt(0),i=Math.log(e)/Math.log(256),u=Math.log(256)/Math.log(e);function f(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return n.alloc(0);let u=0;if(" "===t[u])return;let f=0,a=0;for(;t[u]===o;)f++,u++;const s=(t.length-u)*i+1>>>0,c=new Uint8Array(s);for(;t[u];){let n=r[t.charCodeAt(u)];if(255===n)return;let o=0;for(let t=s-1;(0!==n||o<a)&&-1!==t;t--,o++)n+=e*c[t]>>>0,c[t]=n%256>>>0,n=n/256>>>0;if(0!==n)throw new Error("Non-zero carry");a=o,u++}if(" "===t[u])return;let h=s-a;for(;h!==s&&0===c[h];)h++;const l=n.allocUnsafe(f+(s-h));l.fill(0,0,f);let p=f;for(;h!==s;)l[p++]=c[h++];return l}return{encode:function(r){if(!n.isBuffer(r))throw new TypeError("Expected Buffer");if(0===r.length)return"";let i=0,f=0,a=0;const s=r.length;for(;a!==s&&0===r[a];)a++,i++;const c=(s-a)*u+1>>>0,h=new Uint8Array(c);for(;a!==s;){let t=r[a],n=0;for(let r=c-1;(0!==t||n<f)&&-1!==r;r--,n++)t+=256*h[r]>>>0,h[r]=t%e>>>0,t=t/e>>>0;if(0!==t)throw new Error("Non-zero carry");f=n,a++}let l=c-f;for(;l!==c&&0===h[l];)l++;let p=o.repeat(i);for(;l<c;++l)p+=t.charAt(h[l]);return p},decodeUnsafe:f,decode:function(t){const r=f(t);if(r)return r;throw new Error("Non-base"+e+" character")}}}},function(t,r,e){var n=e(1),o=n.Buffer;function i(t,r){for(var e in t)r[e]=t[e]}function u(t,r,e){return o(t,r,e)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?t.exports=n:(i(n,r),r.Buffer=u),i(o,u),u.from=function(t,r,e){if("number"==typeof t)throw new TypeError("Argument must not be a number");return o(t,r,e)},u.alloc=function(t,r,e){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=o(t);return void 0!==r?"string"==typeof e?n.fill(r,e):n.fill(r):n.fill(0),n},u.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return o(t)},u.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";r.byteLength=function(t){var r=s(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){for(var r,e=s(t),n=e[0],u=e[1],f=new i(function(t,r,e){return 3*(r+e)/4-e}(0,n,u)),a=0,c=u>0?n-4:n,h=0;h<c;h+=4)r=o[t.charCodeAt(h)]<<18|o[t.charCodeAt(h+1)]<<12|o[t.charCodeAt(h+2)]<<6|o[t.charCodeAt(h+3)],f[a++]=r>>16&255,f[a++]=r>>8&255,f[a++]=255&r;2===u&&(r=o[t.charCodeAt(h)]<<2|o[t.charCodeAt(h+1)]>>4,f[a++]=255&r);1===u&&(r=o[t.charCodeAt(h)]<<10|o[t.charCodeAt(h+1)]<<4|o[t.charCodeAt(h+2)]>>2,f[a++]=r>>8&255,f[a++]=255&r);return f},r.fromByteArray=function(t){for(var r,e=t.length,o=e%3,i=[],u=0,f=e-o;u<f;u+=16383)i.push(c(t,u,u+16383>f?f:u+16383));1===o?(r=t[e-1],i.push(n[r>>2]+n[r<<4&63]+"==")):2===o&&(r=(t[e-2]<<8)+t[e-1],i.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return i.join("")};for(var n=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,a=u.length;f<a;++f)n[f]=u[f],o[u.charCodeAt(f)]=f;function s(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function c(t,r,e){for(var o,i,u=[],f=r;f<e;f+=3)o=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),u.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return u.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,e,n,o){var i,u,f=8*o-n-1,a=(1<<f)-1,s=a>>1,c=-7,h=e?o-1:0,l=e?-1:1,p=t[r+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=f;c>0;i=256*i+t[r+h],h+=l,c-=8);for(u=i&(1<<-c)-1,i>>=-c,c+=n;c>0;u=256*u+t[r+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var u,f,a,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=c):(u=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-u))<1&&(u--,a*=2),(r+=u+h>=1?l/a:l*Math.pow(2,1-h))*a>=2&&(u++,a/=2),u+h>=c?(f=0,u=c):u+h>=1?(f=(r*a-1)*Math.pow(2,o),u+=h):(f=r*Math.pow(2,h-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&f,p+=y,f/=256,o-=8);for(u=u<<o|f,s+=o;s>0;t[e+p]=255&u,p+=y,u/=256,s-=8);t[e+p-y]|=128*g}},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}}]);