(()=>{var e={842:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){t=!1}function r(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,o,d;s(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(d=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===d&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";n(842);const e=()=>{const e=document?.querySelectorAll(".fixed-block"),t=document.body,n=parseInt(t.dataset.position,10);e.forEach((e=>{e.style.paddingRight="0px"})),t.style.paddingRight="",t.style.top="",t.classList.remove("lock"),window.scroll({top:n,left:0}),t.removeAttribute("data-position")};window.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=navigator.userAgent||navigator.vendor||window.opera,t=document.querySelector("html");/android/i.test(e)?t.classList.add("android"):/iPad|iPhone|iPod/.test(e)&&!window.MSStream&&t.classList.add("ios")})(),((e,t,n,o,i=!1)=>{const s=document.querySelector(e);s&&s.addEventListener("click",(e=>{if(e.target.classList.contains(t)){if(i){const e=s.querySelectorAll(`.${o}`);e.length>0&&e.forEach((e=>{e.classList.remove(o),e.lastElementChild.style.maxHeight=""}))}let t=e.target.closest(n),a=t.lastElementChild;t.classList.toggle(o),a.style.maxHeight?a.style.maxHeight="":a.style.maxHeight=a.scrollHeight+"px"}}))})(".faq__body","faq__question",".faq__wrapper","active"),(()=>{const t=document?.querySelector("[data-burger]"),n=document?.querySelector("[data-menu]"),o=document?.querySelector("[data-overlay]");t?.addEventListener("click",(()=>{t?.classList.toggle("burger--active"),n?.classList.toggle("menu--active"),n?.classList.contains("menu--active")?(t?.setAttribute("aria-expanded","true"),t?.setAttribute("aria-label","Закрыть меню"),o?.setAttribute("data-overlay","true"),(()=>{const e=document?.querySelectorAll(".fixed-block"),t=document.body,n=window.scrollY,o=window.innerWidth-t.offsetWidth+"px";e.forEach((e=>{e.style.paddingRight=o})),t.classList.add("lock"),t.dataset.position=n,t.style.paddingRight=o,t.style.top=`-${n}px`})()):(t?.setAttribute("aria-expanded","false"),t?.setAttribute("aria-label","Открыть меню"),o?.setAttribute("data-overlay","false"),e())})),o?.addEventListener("click",(i=>{i.target&&i.target.hasAttribute("data-overlay")&&(t?.setAttribute("aria-expanded","false"),t?.setAttribute("aria-label","Открыть меню"),o?.setAttribute("data-overlay","false"),t?.classList.remove("burger--active"),n?.classList.remove("menu--active"),e())})),n?.addEventListener("click",(i=>{i.target.hasAttribute("data-menu-item")&&(t?.setAttribute("aria-expanded","false"),t?.setAttribute("aria-label","Открыть меню"),o?.setAttribute("data-overlay","false"),t.classList.remove("burger--active"),n.classList.remove("menu--active"),e())}))})()}))})()})();