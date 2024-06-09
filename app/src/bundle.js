(()=>{var o={54:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=n(o,e,t);var a=domlogger.func["String.prototype.split"].call(t,":");t=domlogger.func["Array.prototype.pop"].call(a);const[p,f]=g(domlogger.func["String.prototype.split"].call(t,"."));if(0===a.length&&(a=["set","get"]),!p||!(f in p))return void domlogger.func["console.log"](`[DOMLogger++] ${t} (attribute) does not exist!`);try{if("function"==typeof p[f])return void domlogger.func["console.log"](`[DOMLogger++] ${t} can't be a function or a class!`)}catch{}const u=c(p,f);if(u.configurable){var d;if(!u.set||!u.get)try{d=p[f]}catch{if(u.set||!u.get)return void domlogger.func["console.log"](`[DOMLogger++] ${t} can't be hook for now!`);if(domlogger.func["Array.prototype.includes"].call(a,"set"))return void domlogger.func["console.log"](`[DOMLogger++] Only the getter can be hooked for ${t}, remove set!`)}Object.defineProperty(p,f,{get:function(){if(u.get?output=u.get.call(this):output=d,domlogger.func["Array.prototype.includes"].call(a,"get")){const n=l(s.match,output,!0),g=l(s["!match"],output,!1);output=i(s.hookFunction,output),!g&&n&&r(o,e,this.nodeName?`get:${this.nodeName.toLowerCase()}.${f}`:`get:${t}`,output,s)}return output},set:function(n){if(domlogger.func["Array.prototype.includes"].call(a,"set")&&n){const g=l(s.match,n,!0),c=l(s["!match"],n,!1);n=i(s.hookFunction,n),!c&&g&&r(o,e,this.nodeName?`set:${this.nodeName.toLowerCase()}.${f}`:`set:${t}`,n,s)}return u.set?u.set.call(this,n):void(d=n)}})}else domlogger.func["console.log"](`[DOMLogger++] ${t} is not configurable, can't hook it!`)}},825:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,checkRegexs:c,execCode:l}=t(191);o.exports=(o,e,t)=>{const i=n(o,e,t),[s,a]=g(domlogger.func["String.prototype.split"].call(t,"."));var p=s[a];const f=c(i.match,p,!1),u=c(i["!match"],p,!1);f&&!u&&(p=l(i.hookFunction,p),r(o,e,t,p,i))}},746:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=n(o,e,t);var[a,p]=g(domlogger.func["String.prototype.split"].call(t,"."));a&&p in a?"function"==typeof a[p]?c(a,p).configurable?a[p]=new domlogger.func.Proxy(a[p],{construct:function(n,g){const c=l(s.match,g,!0),a=l(s["!match"],g,!1);return g=i(s.hookFunction,g),!a&&c&&r(o,e,t,g,s),new n(...g)}}):domlogger.func["console.log"](`[DOMLogger++] ${t} is not configurable, can't hook it!`):domlogger.func["console.log"](`[DOMLogger++] ${t} is not a class!`):domlogger.func["console.log"](`[DOMLogger++] ${t} (class) does not exist!`)}},3:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g}=t(191),c={function:t(4),class:t(746),attribute:t(54)};o.exports=o=>{for(let e=0;e<o.length;e++)o[e].info=domlogger.func["String.prototype.split"].call(o[e].target,":"),o[e].config=n(o[e].hook,o[e].type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(o[e].info,1),":")),o[e].t=domlogger.func["Array.prototype.pop"].call(domlogger.func["Array.prototype.slice"].call(o[e].info,1));const e=domlogger.func.setInterval((()=>{for(const e of o){var[t,n]=g(domlogger.func["String.prototype.split"].call(e.t,"."));t&&n in t&&("attribute"!==e.info[0]||"set"!==e.info[1]&&"set"!==e.info[2]||r(e.hook,e.type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(e.info,1),":"),t[n],e.config),c[e.info[0]](e.hook,e.type,domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.slice"].call(e.info,1),":")),domlogger.func["Array.prototype.splice"].call(o,domlogger.func["Array.prototype.indexOf"].call(o,e),1))}0===o.length&&domlogger.func.clearInterval(e)}),50)}},454:(o,e,t)=>{const r=t(54),{log:n,getConfig:g,stringify:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(r,a,p){if(domlogger.func["Array.prototype.includes"].call(t,r)){const t=g(o,e,r),s=l(t.match,`${a}${p?`;options=${c(p)}`:""}`,!0),f=l(t["!match"],`${a}${p?`;options=${c(p)}`:""}`,!1);args=i(t.hookFunction,a),!f&&s&&n(o,e,`on${r}`,`${a}${p?`;options=${c(p)}`:""}`,t)}return s.call(this,r,a,p)};for(const n of t)`on${n}`in window?r(o,e,`set:on${n}`):domlogger.func["console.log"](`[DOMLogger++] on${n} (event) does not exist!`)}},4:(o,e,t)=>{const{log:r,getConfig:n,getTargets:g,getOwnPropertyDescriptor:c,checkRegexs:l,execCode:i}=t(191);o.exports=(o,e,t)=>{const s=n(o,e,t);var[a,p]=g(domlogger.func["String.prototype.split"].call(t,"."));if(!a||!(p in a))return void domlogger.func["console.log"](`[DOMLogger++] ${t} (function) does not exist!`);if("function"!=typeof a[p])return void domlogger.func["console.log"](`[DOMLogger++] ${t} is not a function!`);if(!c(a,p).configurable)return void domlogger.func["console.log"](`[DOMLogger++] ${t} is not configurable, can't hook it!`);const f=a[p];a[p]=new domlogger.func.Proxy(a[p],{apply:function(n,g,c){const a=l(s.match,c,!0),p=l(s["!match"],c,!1);return c=i(s.hookFunction,c),!p&&a&&r(o,e,t,c,s),domlogger.func.Reflect.apply(f,g,c)}})}},191:o=>{const e=async(o,e)=>{var t="";try{cleanUrl=e[0].split("@")[1].split(":"),execLine=cleanUrl.splice(cleanUrl.length-2).join(":"),cleanUrl=cleanUrl.splice(0,2).join(":"),t=`${new URL(cleanUrl).origin}:${execLine}`}catch{t=e[0]}return await(async o=>{const e=(new domlogger.func.TextEncoder).encode(o),t=await crypto.subtle.digest("SHA-256",e),r=domlogger.func["Array.from"](new domlogger.func.Uint8Array(t));return domlogger.func["Array.prototype.join"].call(domlogger.func["Array.prototype.map"].call(r,(o=>o.toString(16).padStart(2,"0"))),"")})(`${t}||${o}`)},t=o=>(void 0===o?o="undefined":"function"==typeof o?o=domlogger.func["Function.prototype.toString"].call(o):"string"!=typeof o&&(o=domlogger.func["JSON.stringify"](o)),o),r=(o,e,r)=>{if(!o)return r;e=t(e);for(let t of o){"exec"===domlogger.func["String.prototype.split"].call(t,":")[0]&&(t=g(t,e));try{new domlogger.func.RegExp(t)}catch{domlogger.func["console.log"](`[DOMLogger++] ${t} (regex) is invalid!`);continue}if(domlogger.func["String.prototype.match"].call(e,t))return!0}return!1},n=o=>{if(o&&o.requiredHooks)for(const e of o.requiredHooks)if(!domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,e))return!1;return!0},g=(o,e="")=>{if(!o)return e;o=o.split(":").splice(1).join(":");var r=e;try{r=domlogger.func.Function("args",o)(e)}catch{domlogger.func["console.log"](`[DOMLogger++] ${t(o)} is an invalid code to evaluate!`)}return r};o.exports={log:async(o,g,c,l,i)=>{var s=(()=>{let o=(new domlogger.func.Error).stack;return o=domlogger.func["String.prototype.split"].call(o,"\n"),domlogger.func["Array.prototype.filter"].call(o,(o=>!domlogger.func["String.prototype.includes"].call(o,"/src/bundle.js")))})();"Error"===s[0]&&domlogger.func["Array.prototype.shift"].call(s);const a=await e(c,s);if(domlogger.debugCanary===a)debugger;var p=!1,f=!1;if(i.alert){const o=r(i.alert.match,l,!0);!r(i.alert["!match"],l,!1)&&o&&(p=!0,i.alert.notification&&(f=!0))}let u={ext:"domlogger++",date:domlogger.func["Date.now"](),href:location.href,type:g,hook:o,frame:top===self?"top":"subframe",sink:c,data:t(l),trace:s,debug:a,badge:p,notification:f};domlogger.func["Array.prototype.includes"].call(domlogger.hookTypeHistory,g)||domlogger.func["Array.prototype.push"].call(domlogger.hookTypeHistory,g),n(i)&&domlogger.func.postMessage(u,"*")},getConfig:(o,e,t)=>{var r=domlogger.hooksConfig["*"]?domlogger.hooksConfig["*"]:{},n=domlogger.hooksConfig[o]?domlogger.hooksConfig[o]:{},g=domlogger.hooksConfig[e]?domlogger.hooksConfig[e]:{},c=domlogger.hooksConfig[t]?domlogger.hooksConfig[t]:{};return domlogger.func["Object.assign"]({},r,c,n,g)},getTargets:o=>{var e=domlogger.func["Array.prototype.pop"].call(o),t=window;"window"===o[0]&&domlogger.func["Array.prototype.shift"].call(o);for(const e of o){if(!(e in t))return[null,null];t=t[e]}return[t,e]},getOwnPropertyDescriptor:(o,e)=>{for(;o;){const t=domlogger.func["Object.getOwnPropertyDescriptor"](o,e);if(t)return t;o=domlogger.func["Object.getPrototypeOf"](o)}},stringify:t,checkRegexs:r,execCode:g}}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var g=e[r]={exports:{}};return o[r](g,g.exports,t),g.exports}(()=>{const o={function:t(4),class:t(746),attribute:t(54),event:t(454),checkContent:t(825),custom:t(3)},e=new URL(document.currentScript.src),r=new URLSearchParams(e.search),n=JSON.parse(atob(r.get("hookSettings")));window.domlogger={},domlogger.clean=()=>{domlogger.debugCanary=""},domlogger.hooksTargets=n.hooks,domlogger.hooksConfig={},domlogger.hookTypeHistory=[],domlogger.debugCanary="undefined"===r.get("debugCanary")?void 0:r.get("debugCanary");for(const o of Object.keys(n.config))for(const e of o.split("|"))domlogger.hooksConfig[e]=n.config[o];domlogger.func={"Array.from":Array.from,"Array.prototype.filter":Array.prototype.filter,"Array.prototype.includes":Array.prototype.includes,"Array.prototype.indexOf":Array.prototype.indexOf,"Array.prototype.join":Array.prototype.join,"Array.prototype.map":Array.prototype.map,"Array.prototype.pop":Array.prototype.pop,"Array.prototype.push":Array.prototype.push,"Array.prototype.shift":Array.prototype.shift,"Array.prototype.slice":Array.prototype.slice,"Array.prototype.splice":Array.prototype.splice,clearInterval:clearInterval.bind(window),"console.log":console.log,"Date.now":Date.now,Error,Function,"Function.prototype.toString":Function.prototype.toString,"JSON.stringify":JSON.stringify,"Object.assign":Object.assign,"Object.entries":Object.entries,"Object.getOwnPropertyDescriptor":Object.getOwnPropertyDescriptor,"Object.getPrototypeOf":Object.getPrototypeOf,postMessage:postMessage.bind(window),Proxy,Reflect,RegExp,setInterval:setInterval.bind(window),"String.prototype.includes":String.prototype.includes,"String.prototype.match":String.prototype.match,"String.prototype.split":String.prototype.split,TextEncoder,Uint8Array},domlogger.customTargets=[];for(const[e,t]of domlogger.func["Object.entries"](domlogger.hooksTargets))for(const[r,n]of domlogger.func["Object.entries"](t))if("event"!==r)for(const t of n)"custom"!==r?o[r](r,e,t):domlogger.customTargets.push({hook:r,type:e,target:t});else o[r](r,e,n);o.custom(domlogger.customTargets)})()})();