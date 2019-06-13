!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,l=[],f=n(0);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");return t.attrs.type="text/css",b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=v(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".c3-area{opacity:.1}",""])},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";n.r(e),n.d(e,"loadChart",function(){return o});n(4);function r(t,e,n,r,o,i){const a=[],s=[],c=[];for(const e of t){const t=e.date.split(".")[0].split("T")[0];let n;n=408==e.code||404==e.code||301==e.code||302==e.code||502==e.code?199:202==e.code?200:e.code,a[a.length-1]!=t&&(a.push(t),s.push(n),c.push(e.access_time))}a.unshift("dates"),s.unshift("Status"),c.unshift("Access Time"),function(t,e,n,r,o,i,a,s){c3.generate({data:{x:"dates",columns:[e,n,t],types:{"Access Time":"area",Status:"bar"},axes:{"Access Time":"y",Status:"y2"},colors:{"Access Time":function(t){return t.value>=160?"#7C151D":"#ff8214"},Status:function(t){return 200==t.value?"#258c3e":"#7C151D"}},order:!1},bar:{width:{ratio:1}},size:{height:Number(a),width:Number(i)},title:{text:s},axis:{y2:{show:!1,tick:{outer:!1,format:function(t){return t%1==0?t:""}},max:4e3,inverted:!1,padding:{left:0}},y:{show:!0,tick:{outer:!1,tooltip:!1},min:0,label:{text:"Access time in milliseconds",position:"outer-center"},padding:{bottom:11}},x:{type:"category",tick:{rotate:90,multiline:!1,outer:!1},label:{text:"Dates",position:"outer-right"},padding:{right:2}}},subchart:{show:!1},padding:{top:0},legend:{padding:5,item:{tile:{width:15,height:2}},show:!1,position:"bottom"},bindto:"#"+r,tooltip:{contents:function(t,e,n,r){let o,i,a,s,c,u,l=this,f=l.config,d=f.tooltip_format_title||e,p=f.tooltip_format_name||function(t){return t},h=f.tooltip_format_value||n,m=0;for(i=0;i<t.length;i++)m+=t[i].value,t[i]&&(t[i].value||0===t[i].value)&&(o||(a=d?d(t[i].x):t[i].x,o="<table class='"+l.CLASS.tooltip+"'>"+(a||0===a?"<tr><th colspan='2'>"+a+"</th></tr>":"")),c=p(t[i].name,t[i].ratio,t[i].id,t[i].index),s=h(t[i].value,t[i].ratio,t[i].id,t[i].index),u="Access Time"==c?t[i].value>=160?"#7C151D":"#ff8214":200==t[i].value?"#258c3e":"#7C151D",o+="<tr class='"+l.CLASS.tooltipName+"-"+t[i].id+"'>",o+="<td class='name'><span style='background-color:"+u+"'></span>"+c+"</td>",o+="Access Time"==c?"<td class='value'>"+s+"ms </td>":200==s?"<td class='value'> Online </td>":199==s?"<td class='value'> Offline </td>":"<td class='value'>"+s+"</td>",o+="</tr>");return o+"</table>"}}})}(a,s,c,e,0,r,o,i)}async function o(t){void 0===t&&(t=document.getElementsByClassName("opebuptime"));let e=0;for(let n of t)try{e++;const t=n.getAttribute("data-id"),o=n.getAttribute("data-url"),a=n.getAttribute("dev");let s=n.getAttribute("data-title");s||(s="");let c=n.getAttribute("data-xaxis");c||(c="false");let u=n.getAttribute("data-w");(u<200||0==u||!u)&&(u=null);let l=n.getAttribute("data-h");(l<200||0==l||!l)&&(l=null);let f=n.getAttribute("data-limit");(!f||f<5)&&(f=5);const d=document.createElement("div"),p=t+e;d.id=p,n.appendChild(d),r(await i(o,f,a),p,0,u,l,s)}catch(t){console.log("Internat error :"+t)}}async function i(t,e,n){try{let r;r=null!=n?"dev-openebench":"openebench";let o=await fetch("https://"+r+".bsc.es/monitor/rest/homepage/"+t+"?limit="+e);return await o.json()}catch(t){console.log(`Invalid Url Error: ${t.stack} `)}}o()}]));