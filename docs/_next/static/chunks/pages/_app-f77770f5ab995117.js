(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(493)}])},2126:function(e,t){"use strict";t.Z={name:"Groningen Algorithmic Programming Contest 2023",shortname:"GAPC 2023",nickname:"Fully Connected Graph",basePath:"/GAPC-2023/",tracking_id:"G-68QG15FVMH",contact:"https://github.com/fully-connected-graph",srcDir:"_obsidian",sponsors:[{href:"https://klippa.com/",src:"sponsors/klippa.png",alt:"Klippa logo"},{href:"https://researchable.nl/",src:"sponsors/researchable.png",alt:"Researchable logo"}],partners:[{href:"https://rug.nl/",src:"partners/rug.svg",alt:"University of Groningen logo"},{href:"https://svcover.nl/",src:"partners/cover.svg",alt:"Study Assosiation Cover logo"}]}},493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),o=n(7294),a=n(9089),i=n(2126);a.ZP.initialize(i.Z.tracking_id),n(4744);var c=n(1163);function s(e){let{Component:t,pageProps:n}=e,i=(0,c.useRouter)();return(0,o.useEffect)(()=>{let e=e=>{a.ZP.send({hitType:"pageview",page:e})};return i.events.on("routeChangeComplete",e),()=>{i.events.off("routeChangeComplete",e)}},[]),(0,r.jsx)(t,{...n})}},4744:function(){},1163:function(e,t,n){e.exports=n(880)},9559:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=!(arguments.length>1)||void 0===arguments[1]||arguments[1],a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=r||"";return o&&(i=r.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,r){return t>0&&t+e.length!==r.length&&e.search(n)>-1&&":"!==r.charAt(t-2)&&("-"!==r.charAt(t+e.length)||"-"===r.charAt(t-1))&&0>r.charAt(t-1).search(/[^\s-]/)?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})),a&&(i="string"==typeof(t=e=i)&&-1!==t.indexOf("@")?(console.warn("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e),i};var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},1638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var r=s(n(6161)),o=s(n(9559)),a=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],c=["page","hitType"];function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function m(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}var _=function(){var e;function t(){var e=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),m(this,"reset",function(){e.isInitialized=!1,e._testMode=!1,e._currentMeasurementId,e._hasLoadedGA=!1,e._isQueuing=!1,e._queueGtag=[]}),m(this,"_gtag",function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];e._testMode?e._queueGtag.push(n):e._isQueuing?e._queueGtag.push(n):r.default.apply(void 0,n)}),m(this,"_loadGA",function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!=typeof window&&"undefined"!=typeof document&&!e._hasLoadedGA){var o=document.createElement("script");o.async=!0,o.src="".concat(r,"?id=").concat(t),n&&o.setAttribute("nonce",n),document.body.appendChild(o),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},e._hasLoadedGA=!0}}),m(this,"_toGtagOptions",function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce(function(e,n){var r=function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(n,2)||d(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],a=r[1];return t[o]?e[t[o]]=a:e[o]=a,e},{})}}),m(this,"initialize",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw Error("Require GA_MEASUREMENT_ID");var r="string"==typeof t?[{trackingId:t}]:t;e._currentMeasurementId=r[0].trackingId;var o=n.gaOptions,a=n.gtagOptions,i=n.nonce,c=n.testMode,s=void 0!==c&&c,u=n.gtagUrl;if(e._testMode=s,s||e._loadGA(e._currentMeasurementId,i,u),e.isInitialized||(e._gtag("js",new Date),r.forEach(function(t){var n=p(p(p({},e._toGtagOptions(p(p({},o),t.gaOptions))),a),t.gtagOptions);Object.keys(n).length?e._gtag("config",t.trackingId,n):e._gtag("config",t.trackingId)})),e.isInitialized=!0,!s){var l=g(e._queueGtag);for(e._queueGtag=[],e._isQueuing=!1;l.length;){var f=l.shift();e._gtag.apply(e,g(f)),"get"===f[0]&&(e._isQueuing=!0)}}}),m(this,"set",function(t){if(!t){console.warn("`fieldsObject` is required in .set()");return}if("object"!==l(t)){console.warn("Expected `fieldsObject` arg to be an Object");return}0===Object.keys(t).length&&console.warn("empty `fieldsObject` given to .set()"),e._gaCommand("set",t)}),m(this,"_gaCommandSendEvent",function(t,n,r,o,a){e._gtag("event",n,p(p({event_category:t,event_label:r,value:o},a&&{non_interaction:a.nonInteraction}),e._toGtagOptions(a)))}),m(this,"_gaCommandSendEventParameters",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommandSendEvent.apply(e,g(n.slice(1)));else{var o=n[0],i=o.eventCategory,c=o.eventAction,s=o.eventLabel,l=o.eventValue,f=(o.hitType,u(o,a));e._gaCommandSendEvent(i,c,s,l,f)}}),m(this,"_gaCommandSendTiming",function(t,n,r,o){e._gtag("event","timing_complete",{name:n,value:r,event_category:t,event_label:o})}),m(this,"_gaCommandSendPageview",function(t,n){if(n&&Object.keys(n).length){var r=e._toGtagOptions(n),o=r.title,a=r.location,c=u(r,i);e._gtag("event","page_view",p(p(p(p({},t&&{page_path:t}),o&&{page_title:o}),a&&{page_location:a}),c))}else t?e._gtag("event","page_view",{page_path:t}):e._gtag("event","page_view")}),m(this,"_gaCommandSendPageviewParameters",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommandSendPageview.apply(e,g(n.slice(1)));else{var o=n[0],a=o.page,i=(o.hitType,u(o,c));e._gaCommandSendPageview(a,i)}}),m(this,"_gaCommandSend",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o="string"==typeof n[0]?n[0]:n[0].hitType;switch(o){case"event":e._gaCommandSendEventParameters.apply(e,n);break;case"pageview":e._gaCommandSendPageviewParameters.apply(e,n);break;case"timing":e._gaCommandSendTiming.apply(e,g(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(o));break;default:console.warn("Send command doesn't exist: ".concat(o))}}),m(this,"_gaCommandSet",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]=m({},n[0],n[1])),e._gtag("set",e._toGtagOptions(n[0]))}),m(this,"_gaCommand",function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];switch(t){case"send":e._gaCommandSend.apply(e,r);break;case"set":e._gaCommandSet.apply(e,r);break;default:console.warn("Command doesn't exist: ".concat(t))}}),m(this,"ga",function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("string"==typeof n[0])e._gaCommand.apply(e,n);else{var o=n[0];e._gtag("get",e._currentMeasurementId,"client_id",function(t){e._isQueuing=!1;var n=e._queueGtag;for(o({get:function(n){return"clientId"===n?t:"trackingId"===n?e._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var r=n.shift();e._gtag.apply(e,g(r))}}),e._isQueuing=!0}return e.ga}),m(this,"event",function(t,n){if("string"==typeof t)e._gtag("event",t,e._toGtagOptions(n));else{var r=t.action,a=t.category,i=t.label,c=t.value,s=t.nonInteraction,u=t.transport;if(!a||!r){console.warn("args.category AND args.action are required in event()");return}var l={hitType:"event",eventCategory:(0,o.default)(a),eventAction:(0,o.default)(r)};i&&(l.eventLabel=(0,o.default)(i)),void 0!==c&&("number"!=typeof c?console.warn("Expected `args.value` arg to be a Number."):l.eventValue=c),void 0!==s&&("boolean"!=typeof s?console.warn("`args.nonInteraction` must be a boolean."):l.nonInteraction=s),void 0!==u&&("string"!=typeof u?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(u)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=u)),e._gaCommand("send",l)}}),m(this,"send",function(t){e._gaCommand("send",t)}),this.reset()}return v(t.prototype,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),e&&v(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();t.GA4=_;var b=new _;t.default=b},6161:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"undefined"!=typeof window&&(void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(e=window).gtag.apply(e,n))}},9089:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.ZP=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=i?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(o,c,s):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(1638));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}o.GA4;var i=o.default;t.ZP=i}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);