(()=>{var t={344:()=>{!function(){var t={hasErrors:[],firstClick:!0,setHasErrors:function(e){var r=e.type,n=e.prop;!0===r?t.hasErrors.includes(n)||t.hasErrors.push(n):t.hasErrors=t.hasErrors.filter((function(t){return t!==n})),t.listener&&t.listener({hasErrors:t.hasErrors,firstClick:t.firstClick})}};function e(t){t.style.height="initial",t.style.height=t.clientHeight}document.addEventListener("DOMContentLoaded",(function(){!function(r){e(r),window.addEventListener("resize",(function(){return e(r)}));var n=r.querySelector("form"),s=n.querySelector('input[name="name"]'),o=n.querySelector('input[name="phone"]'),c=n.querySelector("button");function a(t){null!=t&&t.ok?function(t){t.innerHTML='\n        <div class="form-success">\n          <div class="form-success__description">'.concat(t.getAttribute("data-success-desc"),'</div>\n          <div class="form-success__title">\n            <img class="form-success__icon" src="/upload/images/success.svg"/>\n            ').concat(t.getAttribute("data-success"),"\n          </div>\n        </div>\n      ")}(r):function(t){console.log(t)}(t)}function i(e){var r=e.target,n="name";r.value?(l({type:"success",target:r}),t.setHasErrors({type:!1,prop:n})):(l({type:"empty",target:r}),t.setHasErrors({type:!0,prop:n}))}function u(e){var r=e.target,n="phone";r.value?(l({type:"success",target:r}),t.setHasErrors({type:!1,prop:n})):(l({type:"empty",target:r}),t.setHasErrors({type:!0,prop:n}))}function l(t){var e=t.target,r=t.type;"empty"===r?e.parentElement.classList.add("empty"):"success"===r&&e.parentElement.classList.remove("empty")}function p(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(n.classList.remove("error"),c.removeAttribute("disabled")):(n.classList.add("error"),c.setAttribute("disabled",!0))}c.onclick=function(e){if(e.preventDefault(),t.hasErrors.length&&t.firstClick)return t.firstClick=!1,p(!0),!1;var r="name=".concat(s.value,"&phone=").concat(o.value,"&antispam=antispam"),c="".concat(n.action,"?").concat(r);fetch(c).then((function(t){return t.json()})).then((function(t){return a(t)})).catch((function(t){return console.log(t)}))},t.listener=function(t){var e=t.hasErrors,r=t.firstClick;e.length||r?e.length&&!r&&p(!0):p(!1)},i({target:s}),u({target:o}),["onchange","onkeyup","onBlur"].forEach((function(t){s[t]=i,o[t]=u}))}(document.querySelector(".form-container"))}))}()}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(344)})()})();