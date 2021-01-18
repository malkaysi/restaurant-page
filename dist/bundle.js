(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(645),i=t.n(r),o=t(667),a=t.n(o),s=t(599),l=i()((function(e){return e[1]})),c=a()(s);l.push([e.id,"html {\n    height: 100%;\n}\n\nnav {\n    display: inline-block;\n    text-align: right;\n    margin-right: 50px;\n    margin-top: 40px;\n    margin-bottom: 50px;\n    margin-left: 1200px\n}\n\nnav a {\n  text-align: center;\n  display: inline;\n  color: white;\n  text-decoration: none;\n  margin: 15px;\n  font-family: 'Lucida Grande';\n  font-size: larger;\n}\n\n.logo {\n    display: inline-block;\n    font-size: x-large;\n    font-family:cursive ;\n    margin-left: 50px;\n    color: white;\n}\n\nbody {\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+c+");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n\n\n\n.active{\n    border-bottom: 1px solid #bbb;\n}\n\n  #content{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n}\n.contentButton{\n    text-align: center;\n    margin-right: 600px;\n}\n\n.image{\n    max-width: 300px;\n    max-height: 300px;\n}\n\n#menu{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.button{\n    background-color:rgb(92, 78, 60);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: larger;\n    font-weight:bold;\n    width: 150px;\n    padding: 25px 15px;\n    color: rgb(255, 255, 255);\n    float: left;\n    text-decoration: none;\n    border: none;\n    outline: none;\n}\n\n.button-clicked{\n    background-color: rgb(255, 255, 255);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: larger;\n    font-weight:bold;\n    width: 150px;\n    padding: 25px 15px;\n    color:rgb(92, 78, 60);\n    float: left;\n    text-decoration: none;\n    border: none;\n    outline: none;\n}\n\n.tabSelected{\n    background-color: white;\n    padding: 25px;\n    height: 500px;\n    width: 1000px;\n    margin-top: 0px;\n    font-family: monospace;\n    font-size: large;\n    color: black;\n}\n\n\n\n#menuOne{\n    background-color: white;\n    padding: 25px;\n    height: 500px;\n    width: 1000px;\n    margin-top: 0px;\n}\n\nh1{\n    font-family: 'Lucida Grande';\n    color: white;\n}\n\np {\n    font-family: 'Lucida Grande';\n    height: 100%;\n    width: 500px;\n    color: white;\n    font-size: large;\n}\n\n\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var s=e[i],l=n.base?s[0]+n.base:s[0],c=t[l]||0,u="".concat(l," ").concat(c);t[l]=c+1;var d=a(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:u,updater:g(m,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function d(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function m(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,b=0;function g(e,n){var t,r,i;if(n.singleton){var o=b++;t=p||(p=l(n)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=l(n),r=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var l=s(e,n),c=0;c<t.length;c++){var u=a(t[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=l}}}},599:(e,n,t)=>{e.exports=t.p+"0130724c9ba288e333d0.png"}},n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(28);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,(()=>{let e=document.querySelector("body"),n=document.createElement("nav"),t=document.createElement("a"),r=document.createElement("a"),i=document.createElement("a");t.href="#home",t.textContent="Home",t.id="homeNav",r.href="#menu",r.textContent="Menu",r.id="menuNav",i.href="#about",i.textContent="About",i.id="aboutNav",e.appendChild(n),n.appendChild(t),n.appendChild(r),n.appendChild(i)})();const i=["7 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>\n        8 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>\n        5 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>\n        9 &nbsp Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>\n        5 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>\n        7 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>\n        8 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>\n        5 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>\n        9 &nbsp  Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>\n        5 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>\n        6 &nbsp  Proin consectetur tortor nec est pretium fringilla","11 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>\n        13 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>\n        9 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>\n        9 &nbsp Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>\n        13 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>\n        12 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>\n        15 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>\n        14 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>\n        18 &nbsp  Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>\n        12 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>\n        8 &nbsp  Proin consectetur tortor nec est pretium fringilla","17 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>\n        16 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>\n        9 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>\n        14 &nbsp Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>\n        22 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>\n        25 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>\n        20 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>\n        14 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>\n        18 &nbsp  Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>\n        12 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>\n        30 &nbsp  Proin consectetur tortor nec est pretium fringilla"],o=e=>{const n=document.querySelector("#menu");document.querySelector(".tabSelected")&&n.removeChild(n.lastElementChild);let t=document.createElement("p");t.classList.add("tabSelected"),t.innerHTML=i[e],n.appendChild(t)},a=document.querySelector("#menuNav"),s=document.querySelector("#homeNav"),l=document.querySelector("#aboutNav"),c=document.querySelector("body");let u;s.addEventListener("click",(()=>{document.querySelector(".pageContent")&&c.removeChild(document.querySelector(".pageContent"))})),a.addEventListener("click",(()=>{document.querySelector(".pageContent")&&c.removeChild(document.querySelector(".pageContent")),(()=>{let e=document.querySelector("body");const n=document.createElement("div");n.id="menu",n.className="pageContent";const t=document.createElement("div");t.className="contentButton",t.id="content-button";const r=document.createElement("button");r.className="button-clicked",r.id="0",r.textContent="Appetizers";const i=document.createElement("button");i.className="button",i.id="1",i.textContent="Lunch";const o=document.createElement("button");o.className="button",o.id="2",o.textContent="Dinner",e.appendChild(n),n.appendChild(t),t.appendChild(r),t.appendChild(i),t.appendChild(o)})(),o(0),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".button-clicked")&&(document.querySelector(".button-clicked").className="button"),u=parseInt(e.id),o(u),e.className="button-clicked"}))}))})),l.addEventListener("click",(()=>{document.querySelector(".pageContent")&&c.removeChild(document.querySelector(".pageContent")),(()=>{const e=document.createElement("div"),n=document.querySelector("body");e.className="pageContent",e.id="content";const t=document.createElement("h1"),r=document.createElement("p");t.innerHTML="ABOUT US",r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n    Nullam tellus augue, pharetra non nulla id, interdum bibendum tortor. \n    Praesent mollis, mauris in volutpat gravida, velit odio lobortis nulla, eget sollicitudin ante mauris sit amet enim. \n    Donec eu sapien ac dolor fermentum lacinia et a mi. Suspendisse non elementum eros. \n    Sed convallis massa eget lectus dictum, ac feugiat nisi convallis. \n    Cras vehicula lacus leo, eu placerat ligula consectetur vitae. \n    Suspendisse enim augue, aliquam sed sem vel, rutrum hendrerit arcu.\n    <br> <br>\n\n    Fusce egestas in ante efficitur sodales. \n    Nam ornare molestie libero et accumsan. \n    Donec auctor imperdiet molestie. \n    Integer mattis justo luctus, placerat nisl sed, posuere ex. \n    Nunc lacinia quis arcu ut hendrerit. \n    Phasellus fringilla est cursus, maximus sapien nec, ornare ex. \n    Aliquam varius lorem interdum dictum suscipit. Vivamus egestas metus vitae ipsum fermentum sollicitudin. \n    Vestibulum metus magna, hendrerit a eros non, maximus malesuada nisl. Maecenas mi risus, tristique et eros eu, fringilla consequat dolor.",n.appendChild(e),e.appendChild(t),e.appendChild(r)})()}))})()})();