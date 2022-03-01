(()=>{"use strict";var e,t={682:(e,t,n)=>{var r=n(247);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r.ZP.use([r.Gk]);var l=function(e){var t;document.body.classList.add("desktop-app"),document.querySelector("html").style="\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    -webkit-tap-highlight-color: transparent\n  ",document.body.classList.add("desktop-fp");var n=document.querySelectorAll(".header-nav__item"),l=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.blocks=t,this.slide=this.blocks.preview}var t,n;return t=e,(n=[{key:"getCurrentSlide",value:function(){return this.slide}},{key:"getSlide",value:function(e){return this.blocks[e]}},{key:"setSlide",value:function(e){this.slide=this.blocks[e],this.onSlideChange()}},{key:"onSlideChange",value:function(){switch(this.slide.theme){case"light":var e=document.querySelector(".header-wrapper");e.classList.add("theme-light"),e.classList.remove("theme-dark");break;case"dark":default:var t=document.querySelector(".header-wrapper");t.classList.add("theme-dark"),t.classList.remove("theme-light")}g(),window.location.hash=this.slide.url}}])&&s(t.prototype,n),e}())(e);document.querySelectorAll(".slider-controls-wrapper").forEach((function(e){e.innerHTML='\n    <div class="slider-controls"> \n      <div class="arrow arrow--left"></div>\n        <div class="slider-controls__info"> \n          <span class="slider-controls__current">6</span>\n          <span class="slider-controls__count">14</span></div>\n      <div class="arrow arrow--right"></div>\n    </div>'}));var c,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1300,n=null==e?void 0:e.querySelectorAll(".process-item");if(null==n||!n.length)return{processListAnimationPlay:function(){},processListAnimationStop:function(){}};var r=n.length,i={current:void 0};function o(){if(r<n.length)n[r].classList.add("active"),r++;else{for(var e=0;e<r;e++)n[e].classList.remove("active");r=0}}return{processListAnimationPlay:function(){return setTimeout((function(){o(),i.current=setInterval((function(){o()}),t)}),800)},processListAnimationStop:function(){clearInterval(i.current),r=n.length,o()}}}(document.getElementById("process-list")),a=u.processListAnimationPlay,f=u.processListAnimationStop,h={element:document.querySelector(".screens"),props:(t={direction:"vertical",slidesPerView:1,speed:900,slideClass:"main",wrapperClass:"screens-wrapper",allowTouchMove:!1,mousewheel:!1,initialSlide:(c=location.hash.replace("#","")||"preview",e[c].index)},o(t,"mousewheel",{thresholdDelta:40,thresholdTime:200}),o(t,"on",{slideChange:function(e){l.setSlide(e.activeIndex),"process"===l.getCurrentSlide().name?a():f()},afterInit:function(e){l.setSlide(e.activeIndex)}}),t)},d=h.element,p=h.props;new r.ZP(d,p);var m,v=h.element.swiper;function g(){n.forEach((function(e){e.getAttribute("href")===l.getCurrentSlide().url?e.classList.add("active"):e.classList.remove("active")}))}document.querySelectorAll(".scroll-below").forEach((function(e){return e.onclick=function(){v.slideNext()}})),g(),[document.querySelector(".header-logo"),document.querySelector(".header__call .call-button")].concat((m=n,function(e){if(Array.isArray(e))return i(e)}(m)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(m)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).forEach((function(e){e.onclick=function(t){var n;t.preventDefault();var r=(null===(n=e.getAttribute("href"))||void 0===n?void 0:n.replace(/#/g,""))||"preview";v.slideTo(l.getSlide(r).index)}}))};function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){var t,n,r=e.menuItemClick,i=document.querySelector(".menu-wrapper"),o=i.querySelector(".menu__nav"),s=function(e){if("number"==typeof e)if(i.style.height=e,e>0){var t=setTimeout((function(){l("auto")}),2e3);i.addEventListener("transitionend",(function(){l("auto"),clearTimeout(t)}),{once:!0})}else l("hidden")},l=function(e){o.style.overflow=e},u=function(){t=document.body.clientHeight-i.offsetTop,a.opened&&a.open()},a={opened:!1,close:function(){a.opened=!1,a.callback()},open:function(){a.opened=!0,a.callback()},toggle:function(){a.opened=!a.opened,a.callback()},callback:function(){a.opened?(document.body.classList.add("menu-opened"),s(t)):(document.body.classList.remove("menu-opened"),s(0))}};return u(),window.addEventListener("resize",u),document.querySelector(".menu-icon").onclick=function(){return a.toggle()},[i.querySelector(".call-button")].concat((n=i.querySelectorAll(".menu__item"),function(e){if(Array.isArray(e))return c(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).forEach((function(e){e.onclick=function(){a.close(),r&&r(e.href)}})),{menu:i}},a=function(e){var t=e.getBoundingClientRect().top,n=window.pageYOffset+t;window.scrollTo({top:n,behavior:"smooth"})};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.ZP.use([r.W_]);var p={preview:{name:"preview",theme:"dark",url:""},about:{name:"about",theme:"light",url:"#about"},services:{name:"services",theme:"dark",url:"#services"},projects:{name:"projects",theme:"light",url:"#projects"},process:{name:"process",theme:"dark",url:"#process"},team:{name:"team",theme:"dark",url:"#team"},contacts:{name:"contacts",theme:"light",url:"#contacts"}};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".main[data-hash]").forEach((function(e,t){var n=e.getAttribute("data-hash");p[n].index=t,p[t]=p[n]})),setTimeout(m,1e3),window.addEventListener("resize",m);var e,t,n,i,o,s,c,f,d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||document.body.clientWidth<1200?"mobile":"desktop";function m(){var e=document.querySelector(".main__background");e.clientWidth/e.clientHeight<1920/1080?e.querySelector(".background__video").classList.add("is-vertical"):e.querySelector(".background__video").classList.remove("is-vertical")}"desktop"===d&&l(p),n=function(e){e.el.querySelector(".slider-controls__current").innerText=e.activeIndex+1},i=function(e){return{speed:400,on:h({},"desktop"===d?{slideChange:n,afterInit:function(t){e.querySelector(".slider-controls__count").innerText=t.slides.length-t.params.slidesPerView+1,n(t)}}:{})}},o={element:e=document.querySelector(".projects-list-wrapper"),props:h(h({slidesPerView:3,slideClass:"project-slide",wrapperClass:"projects-list"},"desktop"===d?{navigation:{prevEl:e.querySelector(".arrow--left"),nextEl:e.querySelector(".arrow--right")}}:{}),i(e))},s=function(e){return{element:e,props:h(h(h({slidesPerView:1,slideClass:"team-slide",wrapperClass:"team-list"},"desktop"===d?{navigation:{prevEl:e.querySelector(".arrow--left"),nextEl:e.querySelector(".arrow--right")}}:{}),i(e)),{},{breakpoints:{600:{slidesPerView:2},1100:{slidesPerView:4,spaceBetween:"desktop"===d?94:0}}})}}(document.querySelector(".team-list-wrapper")),c=function(e){return{element:e,props:h(h({slidesPerView:1,freeMode:!0,slideClass:"process-item",wrapperClass:"process-list"},i(e)),{},{breakpoints:{600:{slidesPerView:2}}})}}(document.querySelector(".process-list-wrapper")),f=[s],"desktop"===d?f.push(o):(null===(t=c.element)||void 0===t||t.querySelectorAll(".process-item").forEach((function(e){return e.classList.add("active")})),f.push(c)),f.forEach((function(e){var t=e.element,n=e.props;t.classList.add("is-slider"),t&&new r.ZP(t,n)})),"mobile"===d&&function(){function e(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("#")[1],t=document.querySelector('[data-hash="'.concat(e,'"'));a(t)}document.body.classList.add("mobile-app"),u({menuItemClick:e}),e(location.hash||"#preview"),document.querySelector(".header-icon-link").onclick=function(t){t.preventDefault(),e("#contacts")},document.querySelectorAll(".services-item__hover").forEach((function(t){t.onclick=function(n){n.preventDefault(),e(t.getAttribute("href"))}}))}()}))},259:(e,t,n)=>{n.d(t,{$:()=>l,cn:()=>c,R3:()=>_,Lj:()=>h,pI:()=>F,oq:()=>H,iv:()=>k,S6:()=>O,eq:()=>P,hX:()=>A,sE:()=>J,pv:()=>f,dy:()=>j,Kz:()=>C,is:()=>q,lp:()=>M,eG:()=>I,S1:()=>g,cv:()=>L,on:()=>v,Pb:()=>S,iO:()=>w,qm:()=>D,wV:()=>B,Ce:()=>T,mp:()=>N,pJ:()=>V,Od:()=>W,uV:()=>d,IV:()=>u,W2:()=>E,fL:()=>x,Vj:()=>a,vs:()=>p,eR:()=>m,ld:()=>b,X$:()=>y});var r=n(296);class i extends Array{constructor(e){super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this)}}function o(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...o(e)):t.push(e)})),t}function s(e,t){return Array.prototype.filter.call(e,t)}function l(e,t){const n=(0,r.Jj)(),o=(0,r.Me)();let s=[];if(!t&&e instanceof i)return e;if(!e)return new i(s);if("string"==typeof e){const n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let e="div";0===n.indexOf("<li")&&(e="ul"),0===n.indexOf("<tr")&&(e="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(e="tr"),0===n.indexOf("<tbody")&&(e="table"),0===n.indexOf("<option")&&(e="select");const t=o.createElement(e);t.innerHTML=n;for(let e=0;e<t.childNodes.length;e+=1)s.push(t.childNodes[e])}else s=function(e,t){if("string"!=typeof e)return[e];const n=[],r=t.querySelectorAll(e);for(let e=0;e<r.length;e+=1)n.push(r[e]);return n}(e.trim(),t||o)}else if(e.nodeType||e===n||e===o)s.push(e);else if(Array.isArray(e)){if(e instanceof i)return e;s=e}return new i(function(e){const t=[];for(let n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(s))}function c(...e){const t=o(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this}function u(...e){const t=o(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this}function a(...e){const t=o(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))}function f(...e){const t=o(e.map((e=>e.split(" "))));return s(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0}function h(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(e,t);else for(const t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this}function d(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function p(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function m(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this}function v(...e){let[t,n,r,i]=e;function o(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),l(t).is(n))r.apply(t,i);else{const e=l(t).parents();for(let t=0;t<e.length;t+=1)l(e[t]).is(n)&&r.apply(e[t],i)}}function s(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof e[1]&&([t,r,i]=e,n=void 0),i||(i=!1);const c=t.split(" ");let u;for(let e=0;e<this.length;e+=1){const t=this[e];if(n)for(u=0;u<c.length;u+=1){const e=c[u];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,i)}else for(u=0;u<c.length;u+=1){const e=c[u];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:s}),t.addEventListener(e,s,i)}}return this}function g(...e){let[t,n,r,i]=e;"function"==typeof e[1]&&([t,r,i]=e,n=void 0),i||(i=!1);const o=t.split(" ");for(let e=0;e<o.length;e+=1){const t=o[e];for(let e=0;e<this.length;e+=1){const o=this[e];let s;if(!n&&o.dom7Listeners?s=o.dom7Listeners[t]:n&&o.dom7LiveListeners&&(s=o.dom7LiveListeners[t]),s&&s.length)for(let e=s.length-1;e>=0;e-=1){const n=s[e];r&&n.listener===r||r&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===r?(o.removeEventListener(t,n.proxyListener,i),s.splice(e,1)):r||(o.removeEventListener(t,n.proxyListener,i),s.splice(e,1))}}}return this}function y(...e){const t=(0,r.Jj)(),n=e[0].split(" "),i=e[1];for(let r=0;r<n.length;r+=1){const o=n[r];for(let n=0;n<this.length;n+=1){const r=this[n];if(t.CustomEvent){const n=new t.CustomEvent(o,{detail:i,bubbles:!0,cancelable:!0});r.dom7EventData=e.filter(((e,t)=>t>0)),r.dispatchEvent(n),r.dom7EventData=[],delete r.dom7EventData}}}return this}function b(e){const t=this;return e&&t.on("transitionend",(function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))})),this}function w(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function S(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function L(){if(this.length>0){const e=(0,r.Jj)(),t=(0,r.Me)(),n=this[0],i=n.getBoundingClientRect(),o=t.body,s=n.clientTop||o.clientTop||0,l=n.clientLeft||o.clientLeft||0,c=n===e?e.scrollY:n.scrollTop,u=n===e?e.scrollX:n.scrollLeft;return{top:i.top+c-s,left:i.left+u-l}}return null}function E(){const e=(0,r.Jj)();return this[0]?e.getComputedStyle(this[0],null):{}}function k(e,t){const n=(0,r.Jj)();let i;if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(const t in e)this[i].style[t]=e[t];return this}if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this}function O(e){return e?(this.forEach(((t,n)=>{e.apply(t,[t,n])})),this):this}function A(e){return l(s(this,e))}function j(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function x(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function q(e){const t=(0,r.Jj)(),n=(0,r.Me)(),o=this[0];let s,c;if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(s=l(e),c=0;c<s.length;c+=1)if(s[c]===o)return!0;return!1}if(e===n)return o===n;if(e===t)return o===t;if(e.nodeType||e instanceof i){for(s=e.nodeType?[e]:e,c=0;c<s.length;c+=1)if(s[c]===o)return!0;return!1}return!1}function C(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}}function P(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return l([]);if(e<0){const n=t+e;return l(n<0?[]:[this[n]])}return l([this[e]])}function _(...e){let t;const n=(0,r.Me)();for(let r=0;r<e.length;r+=1){t=e[r];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const r=n.createElement("div");for(r.innerHTML=t;r.firstChild;)this[e].appendChild(r.firstChild)}else if(t instanceof i)for(let n=0;n<t.length;n+=1)this[e].appendChild(t[n]);else this[e].appendChild(t)}return this}function T(e){const t=(0,r.Me)();let n,o;for(n=0;n<this.length;n+=1)if("string"==typeof e){const r=t.createElement("div");for(r.innerHTML=e,o=r.childNodes.length-1;o>=0;o-=1)this[n].insertBefore(r.childNodes[o],this[n].childNodes[0])}else if(e instanceof i)for(o=0;o<e.length;o+=1)this[n].insertBefore(e[o],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function M(e){return this.length>0?e?this[0].nextElementSibling&&l(this[0].nextElementSibling).is(e)?l([this[0].nextElementSibling]):l([]):this[0].nextElementSibling?l([this[0].nextElementSibling]):l([]):l([])}function I(e){const t=[];let n=this[0];if(!n)return l([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?l(r).is(e)&&t.push(r):t.push(r),n=r}return l(t)}function N(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&l(t.previousElementSibling).is(e)?l([t.previousElementSibling]):l([]):t.previousElementSibling?l([t.previousElementSibling]):l([])}return l([])}function V(e){const t=[];let n=this[0];if(!n)return l([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?l(r).is(e)&&t.push(r):t.push(r),n=r}return l(t)}function D(e){const t=[];for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?l(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return l(t)}function B(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?l(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return l(t)}function H(e){let t=this;return void 0===e?l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function J(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let e=0;e<r.length;e+=1)t.push(r[e])}return l(t)}function F(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let n=0;n<r.length;n+=1)e&&!l(r[n]).is(e)||t.push(r[n])}return l(t)}function W(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}l.fn=i.prototype;const z="resize scroll".split(" ");function $(e){return function(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)z.indexOf(e)<0&&(e in this[t]?this[t][e]():l(this[t]).trigger(e));return this}return this.on(e,...t)}}$("click"),$("blur"),$("focus"),$("focusin"),$("focusout"),$("keyup"),$("keydown"),$("keypress"),$("submit"),$("change"),$("mousedown"),$("mousemove"),$("mouseup"),$("mouseenter"),$("mouseleave"),$("mouseout"),$("mouseover"),$("touchstart"),$("touchend"),$("touchmove"),$("resize"),$("scroll")},296:(e,t,n)=>{function r(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:r(t[n])&&r(e[n])&&Object.keys(t[n]).length>0&&i(e[n],t[n])}))}n.d(t,{Me:()=>s,Jj:()=>c});const o={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function s(){const e="undefined"!=typeof document?document:{};return i(e,o),e}const l={document:o,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function c(){const e="undefined"!=typeof window?window:{};return i(e,l),e}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,i,o)=>{if(!n){var s=1/0;for(a=0;a<e.length;a++){for(var[n,i,o]=e[a],l=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,o<s&&(s=o));if(l){e.splice(a--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[n,i,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.j=826,(()=>{var e={826:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[s,l,c]=n,u=0;for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var a=c(r);for(t&&t(n);u<s.length;u++)o=s[u],r.o(e,o)&&e[o]&&e[o][0](),e[s[u]]=0;return r.O(a)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[46],(()=>r(682)));i=r.O(i)})();