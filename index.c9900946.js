!function(){var e,t,n,i,c;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=document.querySelector(".menu__list"),c=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")},t.addEventListener("click",c),n.addEventListener("click",c),i.addEventListener("click",(function(){e.classList.remove("is-open"),t.setAttribute("aria-expanded",!0)})),window.matchMedia("(min-width: 1280px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.c9900946.js.map
