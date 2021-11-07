(()=>{"use strict";var e,t={206:(e,t,n)=>{var r=n(247);function i(e,t){for(var n=0,r=e.slice(Math.max(e.length-t,1)),i=0;i<r.length;i++)n+=r[i];return Math.ceil(n/t)}function o(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var r=arguments[t];if(r)for(var i in r)r.hasOwnProperty(i)&&("[object Object]"!==Object.prototype.toString.call(r[i])?e[i]=r[i]:e[i]=o(e[i],r[i]))}return e}const s=function(e,t){return function(n){var r=[],s={m:{up:!0,down:!0}};s.k=o({},s.m);var l,c=!1;try{var a=Object.defineProperty({},"passive",{get:function(){c=!0}});e.addEventListener("testPassive",null,a),e.removeEventListener("testPassive",null,a)}catch(e){}function u(n){n?function(){var n,r="";e.addEventListener?n="addEventListener":(n="attachEvent",r="on");var i="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!c&&{passive:!1};"DOMMouseScroll"==i?t[n](r+"MozMousePixelScroll",d,o):t[n](r+i,d,o)}():t.addEventListener?(t.removeEventListener("mousewheel",d,!1),t.removeEventListener("wheel",d,!1),t.removeEventListener("MozMousePixelScroll",d,!1)):t.detachEvent("onmousewheel",d)}void 0!==l?(l=l.replace(/ /g,"").split(",")).forEach((function(e){f(true,e,"m")})):f(true,"all","m"),u(!0);var h=(new Date).getTime();function d(t){var o=(new Date).getTime(),s=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,l=Math.max(-1,Math.min(1,s)),c=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!c;r.length>149&&r.shift(),r.push(Math.abs(s));var u=o-h;return h=o,u>200&&(r=[]),i(r,10)>=i(r,70)&&a&&n(l<0?"down":"up"),!1}function f(e,t,n){"all"!==t?s[n][t]=e:Object.keys(s[n]).forEach((function(t){s[n][t]=e}))}return u}};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.ZP.use([r.W_]);var u={preview:{name:"preview",theme:"dark"},about:{name:"about",theme:"light"},services:{name:"services",theme:"dark"},projects:{name:"projects",theme:"light"},process:{name:"process",theme:"dark"},team:{name:"team",theme:"dark"},contacts:{name:"contacts",theme:"light"}};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".main[data-hash]").forEach((function(e,t){var n=e.getAttribute("data-hash");u[n].index=t,u[t]=u[n]}));var e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||document.body.clientWidth<1200?"mobile":"desktop";"desktop"===e?function(e){document.body.classList.add("desktop-app","desktop-fp"),document.querySelectorAll(".slider-controls-wrapper").forEach((function(e){e.innerHTML='\n    <div class="slider-controls"> \n      <div class="arrow arrow--left"></div>\n        <div class="slider-controls__info"> \n          <span class="slider-controls__current">6</span>\n          <span class="slider-controls__count">14</span></div>\n      <div class="arrow arrow--right"></div>\n    </div>'}));var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1300,n=null==e?void 0:e.querySelectorAll(".process-item");if(null==n||!n.length)return{processListAnimationPlay:function(){},processListAnimationStop:function(){}};var r=n.length,i={current:void 0};function o(){if(r<n.length)n[r].classList.add("active"),r++;else{for(var e=0;e<r;e++)n[e].classList.remove("active");r=0}}return{processListAnimationPlay:function(){return setTimeout((function(){o(),i.current=setInterval((function(){o()}),t)}),800)},processListAnimationStop:function(){clearInterval(i.current),r=n.length,o()}}}(document.getElementById("process-list")),n=t.processListAnimationPlay,i=t.processListAnimationStop;document.querySelector("html").style="\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    -webkit-tap-highlight-color: transparent\n  ";var o=document.querySelectorAll("a.header-nav__item"),l={slide:e.preview,changeSlide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.preview;switch(l.slide=t,l.slide.theme){case"light":var n=document.querySelector(".header-wrapper");n.classList.add("theme-light"),n.classList.remove("theme-dark");break;case"dark":default:var r=document.querySelector(".header-wrapper");r.classList.add("theme-dark"),r.classList.remove("theme-light")}}},c={element:document.querySelector(".screens"),isScrolling:!1,props:{direction:"vertical",slidesPerView:1,speed:800,slideClass:"main",wrapperClass:"screens-wrapper",allowTouchMove:!1,mousewheel:!1,initialSlide:f(),on:{slideChangeTransitionStart:function(){c.isScrolling=!0},slideChangeTransitionEnd:function(){c.isScrolling=!1},slideChange:function(t){"process"===e[t.activeIndex].name?n():i(),l.changeSlide(e[t.activeIndex])},afterInit:function(t){l.changeSlide(e[t.activeIndex])}}}},a=c.element,u=c.props;new r.ZP(a,u);var h=c.element.swiper;function d(){o.forEach((function(e){e.getAttribute("href")===location.hash?e.classList.add("active"):e.classList.remove("active")}))}function f(){var t=location.hash.replace("#","")||"preview";return e[t].index}function p(){var t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=r<0?0:r>h.slides.length-1?h.slides.length-1:r,o="preview"!==(null===(t=e[i])||void 0===t?void 0:t.name)?null===(n=e[i])||void 0===n?void 0:n.name:"";location.hash="#"+o}document.querySelectorAll(".scroll-below").forEach((function(e){return e.onclick=function(){return p(h.activeIndex+1)}})),s(window,document)((function(e){if(!c.isScrolling)switch(e){case"down":p(h.activeIndex+1);break;case"up":p(h.activeIndex-1)}}))(!0),d(),window.onhashchange=function(){h.slideTo(f()),d()}}(u):function(){document.body.classList.add("mobile-app");var e,t=document.querySelector(".menu-wrapper"),n=t.querySelector(".menu__nav"),r=function(e){if("number"==typeof e)if(t.style.height=e,e>0){var n=setTimeout((function(){i("auto")}),2e3);t.addEventListener("transitionend",(function(){i("auto"),clearTimeout(n)}),{once:!0})}else i("hidden")},i=function(e){n.style.overflow=e},o=function(){e=document.body.clientHeight-t.offsetTop,s.opened&&s.open();var n=document.querySelector(".main__background");n.clientWidth/n.clientHeight<1920/1080?n.querySelector(".background__video").classList.add("is-vertical"):n.querySelector(".background__video").classList.remove("is-vertical")},s={opened:!1,close:function(){s.opened=!1,s.callback()},open:function(){s.opened=!0,s.callback()},toggle:function(){s.opened=!s.opened,s.callback()},callback:function(){s.opened?(document.body.classList.add("menu-opened"),r(e)):(document.body.classList.remove("menu-opened"),r(0))}};o(),window.addEventListener("resize",o),document.querySelector(".menu-icon").onclick=function(){return s.toggle()},t.querySelectorAll(".menu__item").forEach((function(e){e.onclick=function(){s.close(),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("#")[1],t=document.querySelector('[data-hash="'.concat(e,'"')).getBoundingClientRect().top,n=window.pageYOffset+t;window.scrollTo({top:n,behavior:"smooth"})}(e.href)}}))}();var t,n,i=function(t){"desktop"===e&&(t.el.querySelector(".slider-controls__current").innerText=t.activeIndex+1)},o=function(t){return{speed:400,on:{slideChange:i,afterInit:function(n){"desktop"===e&&(t.querySelector(".slider-controls__count").innerText=n.slides.length-n.params.slidesPerView+1,i(n))}}}},l={element:t=document.querySelector(".projects-list-wrapper"),props:c({slidesPerView:3,slideClass:"project-slide",wrapperClass:"projects-list",navigation:"desktop"===e&&{prevEl:t.querySelector(".arrow--left"),nextEl:t.querySelector(".arrow--right")}},o(t))},a=function(t){return{element:t,props:c(c({slidesPerView:1,slideClass:"team-slide",wrapperClass:"team-list",navigation:"desktop"===e&&{prevEl:t.querySelector(".arrow--left"),nextEl:t.querySelector(".arrow--right")}},o(t)),{},{breakpoints:{600:{slidesPerView:2},1100:{slidesPerView:4,spaceBetween:"desktop"===e?94:0}}})}}(document.querySelector(".team-list-wrapper")),h=function(e){return{element:e,props:c(c({slidesPerView:1,freeMode:!0,slideClass:"process-item",wrapperClass:"process-list"},o(e)),{},{breakpoints:{600:{slidesPerView:2}}})}}(document.querySelector(".process-list-wrapper")),d=[a];"desktop"===e?d.push(l):(null===(n=h.element)||void 0===n||n.querySelectorAll(".process-item").forEach((function(e){return e.classList.add("active")})),d.push(h)),d.forEach((function(e){var t=e.element,n=e.props;t.classList.add("is-slider"),t&&new r.ZP(t,n)}))}))},259:(e,t,n)=>{n.d(t,{$:()=>l,cn:()=>c,R3:()=>A,Lj:()=>d,pI:()=>X,oq:()=>H,iv:()=>O,S6:()=>k,eq:()=>_,hX:()=>x,sE:()=>J,pv:()=>h,dy:()=>P,Kz:()=>q,is:()=>M,lp:()=>C,eG:()=>D,S1:()=>g,cv:()=>L,on:()=>v,Pb:()=>E,iO:()=>w,qm:()=>I,wV:()=>B,Ce:()=>T,mp:()=>N,pJ:()=>V,Od:()=>z,uV:()=>f,IV:()=>a,W2:()=>S,fL:()=>j,Vj:()=>u,vs:()=>p,eR:()=>m,ld:()=>b,X$:()=>y});var r=n(296);class i extends Array{constructor(e){super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this)}}function o(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...o(e)):t.push(e)})),t}function s(e,t){return Array.prototype.filter.call(e,t)}function l(e,t){const n=(0,r.Jj)(),o=(0,r.Me)();let s=[];if(!t&&e instanceof i)return e;if(!e)return new i(s);if("string"==typeof e){const n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let e="div";0===n.indexOf("<li")&&(e="ul"),0===n.indexOf("<tr")&&(e="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(e="tr"),0===n.indexOf("<tbody")&&(e="table"),0===n.indexOf("<option")&&(e="select");const t=o.createElement(e);t.innerHTML=n;for(let e=0;e<t.childNodes.length;e+=1)s.push(t.childNodes[e])}else s=function(e,t){if("string"!=typeof e)return[e];const n=[],r=t.querySelectorAll(e);for(let e=0;e<r.length;e+=1)n.push(r[e]);return n}(e.trim(),t||o)}else if(e.nodeType||e===n||e===o)s.push(e);else if(Array.isArray(e)){if(e instanceof i)return e;s=e}return new i(function(e){const t=[];for(let n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(s))}function c(...e){const t=o(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this}function a(...e){const t=o(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this}function u(...e){const t=o(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))}function h(...e){const t=o(e.map((e=>e.split(" "))));return s(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0}function d(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(e,t);else for(const t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this}function f(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function p(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function m(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this}function v(...e){let[t,n,r,i]=e;function o(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),l(t).is(n))r.apply(t,i);else{const e=l(t).parents();for(let t=0;t<e.length;t+=1)l(e[t]).is(n)&&r.apply(e[t],i)}}function s(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof e[1]&&([t,r,i]=e,n=void 0),i||(i=!1);const c=t.split(" ");let a;for(let e=0;e<this.length;e+=1){const t=this[e];if(n)for(a=0;a<c.length;a+=1){const e=c[a];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,i)}else for(a=0;a<c.length;a+=1){const e=c[a];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:s}),t.addEventListener(e,s,i)}}return this}function g(...e){let[t,n,r,i]=e;"function"==typeof e[1]&&([t,r,i]=e,n=void 0),i||(i=!1);const o=t.split(" ");for(let e=0;e<o.length;e+=1){const t=o[e];for(let e=0;e<this.length;e+=1){const o=this[e];let s;if(!n&&o.dom7Listeners?s=o.dom7Listeners[t]:n&&o.dom7LiveListeners&&(s=o.dom7LiveListeners[t]),s&&s.length)for(let e=s.length-1;e>=0;e-=1){const n=s[e];r&&n.listener===r||r&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===r?(o.removeEventListener(t,n.proxyListener,i),s.splice(e,1)):r||(o.removeEventListener(t,n.proxyListener,i),s.splice(e,1))}}}return this}function y(...e){const t=(0,r.Jj)(),n=e[0].split(" "),i=e[1];for(let r=0;r<n.length;r+=1){const o=n[r];for(let n=0;n<this.length;n+=1){const r=this[n];if(t.CustomEvent){const n=new t.CustomEvent(o,{detail:i,bubbles:!0,cancelable:!0});r.dom7EventData=e.filter(((e,t)=>t>0)),r.dispatchEvent(n),r.dom7EventData=[],delete r.dom7EventData}}}return this}function b(e){const t=this;return e&&t.on("transitionend",(function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))})),this}function w(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function E(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function L(){if(this.length>0){const e=(0,r.Jj)(),t=(0,r.Me)(),n=this[0],i=n.getBoundingClientRect(),o=t.body,s=n.clientTop||o.clientTop||0,l=n.clientLeft||o.clientLeft||0,c=n===e?e.scrollY:n.scrollTop,a=n===e?e.scrollX:n.scrollLeft;return{top:i.top+c-s,left:i.left+a-l}}return null}function S(){const e=(0,r.Jj)();return this[0]?e.getComputedStyle(this[0],null):{}}function O(e,t){const n=(0,r.Jj)();let i;if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(const t in e)this[i].style[t]=e[t];return this}if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this}function k(e){return e?(this.forEach(((t,n)=>{e.apply(t,[t,n])})),this):this}function x(e){return l(s(this,e))}function P(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function j(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function M(e){const t=(0,r.Jj)(),n=(0,r.Me)(),o=this[0];let s,c;if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(s=l(e),c=0;c<s.length;c+=1)if(s[c]===o)return!0;return!1}if(e===n)return o===n;if(e===t)return o===t;if(e.nodeType||e instanceof i){for(s=e.nodeType?[e]:e,c=0;c<s.length;c+=1)if(s[c]===o)return!0;return!1}return!1}function q(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}}function _(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return l([]);if(e<0){const n=t+e;return l(n<0?[]:[this[n]])}return l([this[e]])}function A(...e){let t;const n=(0,r.Me)();for(let r=0;r<e.length;r+=1){t=e[r];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const r=n.createElement("div");for(r.innerHTML=t;r.firstChild;)this[e].appendChild(r.firstChild)}else if(t instanceof i)for(let n=0;n<t.length;n+=1)this[e].appendChild(t[n]);else this[e].appendChild(t)}return this}function T(e){const t=(0,r.Me)();let n,o;for(n=0;n<this.length;n+=1)if("string"==typeof e){const r=t.createElement("div");for(r.innerHTML=e,o=r.childNodes.length-1;o>=0;o-=1)this[n].insertBefore(r.childNodes[o],this[n].childNodes[0])}else if(e instanceof i)for(o=0;o<e.length;o+=1)this[n].insertBefore(e[o],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function C(e){return this.length>0?e?this[0].nextElementSibling&&l(this[0].nextElementSibling).is(e)?l([this[0].nextElementSibling]):l([]):this[0].nextElementSibling?l([this[0].nextElementSibling]):l([]):l([])}function D(e){const t=[];let n=this[0];if(!n)return l([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?l(r).is(e)&&t.push(r):t.push(r),n=r}return l(t)}function N(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&l(t.previousElementSibling).is(e)?l([t.previousElementSibling]):l([]):t.previousElementSibling?l([t.previousElementSibling]):l([])}return l([])}function V(e){const t=[];let n=this[0];if(!n)return l([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?l(r).is(e)&&t.push(r):t.push(r),n=r}return l(t)}function I(e){const t=[];for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?l(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return l(t)}function B(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?l(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return l(t)}function H(e){let t=this;return void 0===e?l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function J(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let e=0;e<r.length;e+=1)t.push(r[e])}return l(t)}function X(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let n=0;n<r.length;n+=1)e&&!l(r[n]).is(e)||t.push(r[n])}return l(t)}function z(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}l.fn=i.prototype;const F="resize scroll".split(" ");function W(e){return function(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)F.indexOf(e)<0&&(e in this[t]?this[t][e]():l(this[t]).trigger(e));return this}return this.on(e,...t)}}W("click"),W("blur"),W("focus"),W("focusin"),W("focusout"),W("keyup"),W("keydown"),W("keypress"),W("submit"),W("change"),W("mousedown"),W("mousemove"),W("mouseup"),W("mouseenter"),W("mouseleave"),W("mouseout"),W("mouseover"),W("touchstart"),W("touchend"),W("touchmove"),W("resize"),W("scroll")},296:(e,t,n)=>{function r(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:r(t[n])&&r(e[n])&&Object.keys(t[n]).length>0&&i(e[n],t[n])}))}n.d(t,{Me:()=>s,Jj:()=>c});const o={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function s(){const e="undefined"!=typeof document?document:{};return i(e,o),e}const l={document:o,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function c(){const e="undefined"!=typeof window?window:{};return i(e,l),e}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,i,o)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,i,o]=e[u],l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){e.splice(u--,1);var a=i();void 0!==a&&(t=a)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.j=826,(()=>{var e={826:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[s,l,c]=n,a=0;for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var u=c(r);for(t&&t(n);a<s.length;a++)o=s[a],r.o(e,o)&&e[o]&&e[o][0](),e[s[a]]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[46],(()=>r(206)));i=r.O(i)})();