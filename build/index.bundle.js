(()=>{"use strict";var e,r,t,n,o,a,i={2629:(e,r,t)=>{Promise.all([t.e(934),t.e(950),t.e(181),t.e(362)]).then(t.bind(t,1130))},2459:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof Divesitesapp)return e();t.l("https://atadnmz.github.io/mf-dive-sites/remoteEntry.js",(t=>{if("undefined"!=typeof Divesitesapp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"Divesitesapp")})).then((()=>Divesitesapp))}},l={};function s(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=i,s.c=l,s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);s.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,s.d(o,a),o},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>e+".index.bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="mf-container:",s.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o={842:[2842]},a={2842:["default","./Divesitesapp",2459]},s.f.remotes=(e,r)=>{s.o(o,e)&&o[e].forEach((e=>{var t=s.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),i[e]=()=>{throw r},n.p=0},l=(e,t,a,i,l,s)=>{try{var u=e(t,a);if(!u||!u.then)return l(u,i,s);var f=u.then((e=>l(e,i)),o);if(!s)return f;r.push(n.p=f)}catch(e){o(e)}},u=(e,r,o)=>l(r.get,n[1],t,0,f,o),f=r=>{n.p=1,i[e]=e=>{e.exports=r()}};l(s,n[2],0,0,((e,r,t)=>e?l(s.I,n[0],0,e,u,t):o()),1)}}))},(()=>{s.S={};var e={},r={};s.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];s.o(s.S,t)||(s.S[t]={});var a=s.S[t],i="mf-container",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("antd","4.18.3",(()=>Promise.all([s.e(902),s.e(950),s.e(181),s.e(700)]).then((()=>()=>s(6884))))),l("react-dom","17.0.2",(()=>Promise.all([s.e(935),s.e(950)]).then((()=>()=>s(3935))))),l("react-router-dom","6.2.1",(()=>Promise.all([s.e(68),s.e(950)]).then((()=>()=>s(6068))))),l("react","17.0.2",(()=>s.e(294).then((()=>()=>s(7294))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=s(2459);if(!o)return;var a=e=>e&&e.init&&e.init(s.S[t],n);if(o.then)return u.push(o.then(a,r));var i=a(o);i&&i.then&&u.push(i.catch(r))}catch(e){r(e)}})()),u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return n}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():t(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,l=1,s=!0;;l++,i++){var u,f,d=l<r.length?(typeof r[l])[0]:"";if(i>=t.length||"o"==(f=(typeof(u=t[i]))[0]))return!s||("u"==d?l>o&&!a:""==d!=a);if("u"==f){if(!s||"u"!=d)return!1}else if(s)if(d==f)if(l<=o){if(u!=r[l])return!1}else{if(a?u>r[l]:u<r[l])return!1;u!=r[l]&&(s=!1)}else if("s"!=d&&"n"!=d){if(a||l<=o)return!1;s=!1,l--}else{if(l<=o||f<d!=a)return!1;s=!1}else"s"!=d&&"n"!=d&&(s=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?n(h,t):!p())}return!!p()},o=(e,o,i,l)=>{var s=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,i);return n(l,s)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,i,s,l)),a(e[i][s])},a=e=>(e.loaded=1,e.get()),i=e=>function(r,t,n,o){var a=s.I(r);return a&&a.then?a.then(e.bind(e,r,s.S[r],t,n,o)):e(r,s.S[r],t,n,o)},l=i(((e,r,t,n,a)=>r&&s.o(r,t)?o(r,0,t,n):a())),u=i(((e,t,o,i,l)=>{var u=t&&s.o(t,o)&&((e,t,o)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&a[t]})(t,o,i);return u?a(u):l()})),f={},d={2950:()=>l("default","react",[1,17,0,2],(()=>s.e(294).then((()=>()=>s(7294))))),2181:()=>l("default","react-dom",[1,17,0,2],(()=>s.e(935).then((()=>()=>s(3935))))),5128:()=>u("default","react-router-dom",[1,6,2,1],(()=>s.e(68).then((()=>()=>s(6068))))),5893:()=>u("default","antd",[1,4,18,3],(()=>Promise.all([s.e(902),s.e(532)]).then((()=>()=>s(6884)))))},c={181:[2181],362:[5128,5893],950:[2950]};s.f.consumes=(e,r)=>{s.o(c,e)&&c[e].forEach((e=>{if(s.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,s.m[e]=t=>{delete s.c[e],t.exports=r()}},n=r=>{delete f[e],s.m[e]=t=>{throw delete s.c[e],r}};try{var o=d[e]();o.then?r.push(f[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{s.b=document.baseURI||self.location.href;var e={179:0};s.f.j=(r,t)=>{var n=s.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(181|842|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=s.p+s.u(r),i=new Error;s.l(a,(t=>{if(s.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);l&&l(s)}for(r&&r(t);u<a.length;u++)o=a[u],s.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0},t=self.webpackChunkmf_container=self.webpackChunkmf_container||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),(()=>{if(!window.liveReload){window.liveReload=!0;const e=new WebSocket("ws://localhost:40001");e.addEventListener("open",(function(e){console.log("Client opened connection to server.")})),e.addEventListener("message",(function(e){"reload"===JSON.parse(e.data).type&&(console.log("Reloading page due to reload event..."),window.location.reload())})),e.addEventListener("close",(r=>{console.log("Closing socket"),e.close()}))}})(),s(2629)})();