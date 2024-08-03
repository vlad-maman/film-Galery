/*
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var i={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},M={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},j=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],l={CSS:{},springs:{}};function C(n,e,t){return Math.min(Math.max(n,e),t)}function u(n,e){return-1<n.indexOf(e)}function o(n,e){return n.apply(null,e)}var w={arr:function(n){return Array.isArray(n)},obj:function(n){return u(Object.prototype.toString.call(n),"Object")},pth:function(n){return w.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||w.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return w.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return w.hex(n)||w.rgb(n)||w.hsl(n)},key:function(n){return!i.hasOwnProperty(n)&&!M.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function d(n){n=/\(([^)]+)\)/.exec(n);return n?n[1].split(",").map(function(n){return parseFloat(n)}):[]}function c(r,t){var n=d(r),e=C(w.und(n[0])?1:n[0],.1,100),a=C(w.und(n[1])?100:n[1],.1,100),o=C(w.und(n[2])?10:n[2],.1,100),n=C(w.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/e),i=o/(2*Math.sqrt(a*e)),c=i<1?u*Math.sqrt(1-i*i):0,s=i<1?(i*u-n)/c:-n+u;function f(n){var e=t?t*n/1e3:n,e=i<1?Math.exp(-e*i*u)*(+Math.cos(c*e)+s*Math.sin(c*e)):(1+s*e)*Math.exp(-e*u);return 0===n||1===n?n:1-e}return t?f:function(){var n=l.springs[r];if(n)return n;for(var e=0,t=0;;)if(1===f(e+=1/6)){if(16<=++t)break}else t=0;return n=e*(1/6)*1e3,l.springs[r]=n}}function q(e){return void 0===e&&(e=10),function(n){return Math.ceil(C(n,1e-6,1)*e)*(1/e)}}var H=function(b,e,M,t){if(0<=b&&b<=1&&0<=M&&M<=1){var x=new Float32Array(11);if(b!==e||M!==t)for(var n=0;n<11;++n)x[n]=k(.1*n,b,M);return function(n){return b===e&&M===t||0===n||1===n?n:k(r(n),e,t)}}function r(n){for(var e=0,t=1;10!==t&&x[t]<=n;++t)e+=.1;var r=e+.1*((n-x[--t])/(x[t+1]-x[t])),a=O(r,b,M);if(.001<=a){for(var o=n,u=r,i=b,c=M,s=0;s<4;++s){var f=O(u,i,c);if(0===f)return u;u-=(k(u,i,c)-o)/f}return u}if(0===a)return r;for(var l,d,p=n,h=e,g=e+.1,m=b,v=M,y=0;0<(l=k(d=h+(g-h)/2,m,v)-p)?g=d:h=d,1e-7<Math.abs(l)&&++y<10;);return d}};function r(n,e){return 1-3*e+3*n}function k(n,e,t){return((r(e,t)*n+(3*t-6*e))*n+3*e)*n}function O(n,e,t){return 3*r(e,t)*n*n+2*(3*t-6*e)*n+3*e}e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===e&&(e=.5);var t=C(n=void 0===n?1:n,1,10),r=C(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(n,e){t[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(t).forEach(function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}});var e,t,s=e;function P(n,e){if(w.fnc(n))return n;var t=n.split("(")[0],r=s[t],a=d(n);switch(t){case"spring":return c(n,e);case"cubicBezier":return o(H,a);case"steps":return o(q,a);default:return o(r,a)}}function a(n){try{return document.querySelectorAll(n)}catch(n){}}function I(n,e){for(var t,r=n.length,a=2<=arguments.length?e:void 0,o=[],u=0;u<r;u++)u in n&&(t=n[u],e.call(a,t,u,n))&&o.push(t);return o}function f(n){return n.reduce(function(n,e){return n.concat(w.arr(e)?f(e):e)},[])}function p(n){return w.arr(n)?n:(n=w.str(n)?a(n)||n:n)instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n]}function h(n,e){return n.some(function(n){return n===e})}function g(n){var e,t={};for(e in n)t[e]=n[e];return t}function x(n,e){var t,r=g(n);for(t in n)r[t]=(e.hasOwnProperty(t)?e:n)[t];return r}function D(n,e){var t,r=g(n);for(t in e)r[t]=(w.und(n[t])?e:n)[t];return r}function V(n){var e,t,r,a,o,u,i;return w.rgb(n)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=n))?"rgba("+e[1]+",1)":t:w.hex(n)?(e=(e=n).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"):w.hsl(n)?(t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t=n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(t[1],10)/360,u=parseInt(t[2],10)/100,i=parseInt(t[3],10)/100,t=t[4]||1,0==u?r=a=o=i:(r=c(u=2*i-(i=i<.5?i*(1+u):i+u-i*u),i,n+1/3),a=c(u,i,n),o=c(u,i,n-1/3)),"rgba("+255*r+","+255*a+","+255*o+","+t+")"):void 0;function c(n,e,t){return t<0&&(t+=1),1<t&&--t,t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}}function B(n){n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(n)return n[1]}function m(n,e){return w.fnc(n)?n(e.target,e.id,e.total):n}function v(n,e){return n.getAttribute(e)}function y(n,e,t){var r,a,o;return h([t,"deg","rad","turn"],B(e))?e:(r=l.CSS[e+t],w.und(r)?(a=document.createElement(n.tagName),(n=n.parentNode&&n.parentNode!==document?n.parentNode:document.body).appendChild(a),a.style.position="absolute",a.style.width=100+t,o=100/a.offsetWidth,n.removeChild(a),n=o*parseFloat(e),l.CSS[e+t]=n):r)}function $(n,e,t){var r;if(e in n.style)return r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0",t?y(n,e,t):e}function b(n,e){return w.dom(n)&&!w.inp(n)&&(!w.nil(v(n,e))||w.svg(n)&&n[e])?"attribute":w.dom(n)&&h(j,e)?"transform":w.dom(n)&&"transform"!==e&&$(n,e)?"css":null!=n[e]?"object":void 0}function W(n){if(w.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function X(n,e,t,r){var a=u(e,"scale")?1:0+(u(a=e,"translate")||"perspective"===a?"px":u(a,"rotate")||u(a,"skew")?"deg":void 0),o=W(n).get(e)||a;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?y(n,o,r):o}function T(n,e,t,r){switch(b(n,e)){case"transform":return X(n,e,r,t);case"css":return $(n,e,t);case"attribute":return v(n,e);default:return n[e]||0}}function E(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=B(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function Y(n,e){var t;return w.col(n)?V(n):/\s/g.test(n)?n:(t=(t=B(n))?n.substr(0,n.length-t.length):n,e?t+e:t)}function F(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function Z(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);0<a&&(r+=F(e,o)),e=o}return r}function G(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return 2*Math.PI*v(n,"r");case"rect":return 2*v(t=n,"width")+2*v(t,"height");case"line":return F({x:v(t=n,"x1"),y:v(t,"y1")},{x:v(t,"x2"),y:v(t,"y2")});case"polyline":return Z(n);case"polygon":return e=n.points,Z(n)+F(e.getItem(e.numberOfItems-1),e.getItem(0))}var e,t}function Q(n,e){var e=e||{},n=e.el||function(n){for(var e=n.parentNode;w.svg(e)&&w.svg(e.parentNode);)e=e.parentNode;return e}(n),t=n.getBoundingClientRect(),r=v(n,"viewBox"),a=t.width,t=t.height,e=e.viewBox||(r?r.split(" "):[0,0,a,t]);return{el:n,viewBox:e,x:+e[0],y:+e[1],w:a,h:t,vW:e[2],vH:e[3]}}function z(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Y(w.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:w.str(n)||e?r.split(t):[]}}function A(n){return I(n?f(w.arr(n)?n.map(p):p(n)):[],function(n,e,t){return t.indexOf(n)===e})}function _(n){var t=A(n);return t.map(function(n,e){return{target:n,id:e,total:t.length,transforms:{list:W(n)}}})}function R(e){for(var t=I(f(e.map(function(n){return Object.keys(n)})),function(n){return w.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),a={},n=0;n<t.length;n++)!function(n){var r=t[n];a[r]=e.map(function(n){var e,t={};for(e in n)w.key(e)?e==r&&(t.value=n[e]):t[e]=n[e];return t})}(n);return a}function J(n,e){var t,r=[],a=e.keyframes;for(t in e=a?D(R(a),e):e)w.key(t)&&r.push({name:t,tweens:function(n,t){var e,r=g(t),a=(/^spring/.test(r.easing)&&(r.duration=c(r.easing)),w.arr(n)&&(2===(e=n.length)&&!w.obj(n[0])?n={value:n}:w.fnc(t.duration)||(r.duration=t.duration/e)),w.arr(n)?n:[n]);return a.map(function(n,e){n=w.obj(n)&&!w.pth(n)?n:{value:n};return w.und(n.delay)&&(n.delay=e?0:t.delay),w.und(n.endDelay)&&(n.endDelay=e===a.length-1?t.endDelay:0),n}).map(function(n){return D(n,r)})}(e[t],n)});return r}function K(i,c){var s;return i.tweens.map(function(n){var n=function(n,e){var t,r={};for(t in n){var a=m(n[t],e);w.arr(a)&&1===(a=a.map(function(n){return m(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(n,c),e=n.value,t=w.arr(e)?e[1]:e,r=B(t),a=T(c.target,i.name,r,c),o=s?s.to.original:a,u=w.arr(e)?e[0]:o,a=B(u)||B(a),r=r||a;return w.und(t)&&(t=o),n.from=z(u,r),n.to=z(E(t,u),r),n.start=s?s.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=P(n.easing,n.duration),n.isPath=w.pth(e),n.isPathTargetInsideSVG=n.isPath&&w.svg(c.target),n.isColor=w.col(n.from.original),n.isColor&&(n.round=1),s=n})}var U={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){var o;r.list.set(e,t),e!==r.last&&!a||(o="",r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o)}};function nn(n,u){_(n).forEach(function(n){for(var e in u){var t=m(u[e],n),r=n.target,a=B(t),o=T(r,e,a,n),t=E(Y(t,a||B(o)),o),a=b(r,e);U[a](r,e,t,n.transforms,!0)}})}function en(n,e){return I(f(n.map(function(o){return e.map(function(n){var e,t,r=o,a=b(r.target,n.name);if(a)return t=(e=K(n,r))[e.length-1],{type:a,property:n.name,animatable:r,tweens:e,duration:t.end,delay:e[0].delay,endDelay:t.endDelay}})})),function(n){return!w.und(n)})}function tn(n,e){function t(n){return n.timelineOffset||0}var r=n.length,a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var rn=0;var N,S=[],an=("undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){L.suspendWhenDocumentHidden&&(n()?N=cancelAnimationFrame(N):(S.forEach(function(n){return n._onDocumentVisibility()}),an()))}),function(){!(N||n()&&L.suspendWhenDocumentHidden)&&0<S.length&&(N=requestAnimationFrame(on))});function on(n){for(var e=S.length,t=0;t<e;){var r=S[t];r.paused?(S.splice(t,1),e--):(r.tick(n),t++)}N=0<t?requestAnimationFrame(on):void 0}function n(){return document&&document.hidden}function L(n){var c,s=0,f=0,l=0,d=0,p=null;function h(n){var e=window.Promise&&new Promise(function(n){return p=n});return n.finished=e}e=x(i,n=n=void 0===n?{}:n),t=J(r=x(M,n),n),n=_(n.targets),r=tn(t=en(n,t),r),a=rn,rn++;var e,t,r,a,k=D(e,{id:a,children:[],animatables:n,animations:t,duration:r.duration,delay:r.delay,endDelay:r.endDelay});h(k);function g(){var n=k.direction;"alternate"!==n&&(k.direction="normal"!==n?"normal":"reverse"),k.reversed=!k.reversed,c.forEach(function(n){return n.reversed=k.reversed})}function m(n){return k.reversed?k.duration-n:n}function o(){s=0,f=m(k.currentTime)*(1/L.speed)}function v(n,e){e&&e.seek(n-e.timelineOffset)}function y(e){for(var n=0,t=k.animations,r=t.length;n<r;){for(var a=t[n],o=a.animatable,u=a.tweens,i=u.length-1,c=u[i],i=(i&&(c=I(u,function(n){return e<n.end})[0]||c),C(e-c.start-c.delay,0,c.duration)/c.duration),s=isNaN(i)?1:c.easing(i),f=c.to.strings,l=c.round,d=[],p=c.to.numbers.length,h=void 0,g=0;g<p;g++){var m=void 0,v=c.to.numbers[g],y=c.from.numbers[g]||0,m=c.isPath?function(e,t,n){function r(n){return e.el.getPointAtLength(1<=t+(n=void 0===n?0:n)?t+n:0)}var a=Q(e.el,e.svg),o=r(),u=r(-1),i=r(1),c=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}(c.value,s*v,c.isPathTargetInsideSVG):y+s*(v-y);!l||c.isColor&&2<g||(m=Math.round(m*l)/l),d.push(m)}var b=f.length;if(b)for(var h=f[0],M=0;M<b;M++){f[M];var x=f[M+1],w=d[M];isNaN(w)||(h+=x?w+x:w+" ")}else h=d[0];U[a.type](o.target,a.property,h,o.transforms),a.currentValue=h,n++}}function b(n){k[n]&&!k.passThrough&&k[n](k)}function u(n){var e=k.duration,t=k.delay,r=e-k.endDelay,a=m(n);if(k.progress=C(a/e*100,0,100),k.reversePlayback=a<k.currentTime,c){var o=a;if(k.reversePlayback)for(var u=d;u--;)v(o,c[u]);else for(var i=0;i<d;i++)v(o,c[i])}!k.began&&0<k.currentTime&&(k.began=!0,b("begin")),!k.loopBegan&&0<k.currentTime&&(k.loopBegan=!0,b("loopBegin")),a<=t&&0!==k.currentTime&&y(0),(r<=a&&k.currentTime!==e||!e)&&y(e),t<a&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,b("changeBegin")),b("change"),y(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,b("changeComplete")),k.currentTime=C(a,0,e),k.began&&b("update"),e<=n&&(f=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(s=l,b("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&g()):(k.paused=!0,k.completed||(k.completed=!0,b("loopComplete"),b("complete"),!k.passThrough&&"Promise"in window&&(p(),h(k)))))}return k.reset=function(){var n=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===n,k.remaining=k.loop,c=k.children;for(var e=d=c.length;e--;)k.children[e].reset();(k.reversed&&!0!==k.loop||"alternate"===n&&1===k.loop)&&k.remaining++,y(k.reversed?k.duration:0)},k._onDocumentVisibility=o,k.set=function(n,e){return nn(n,e),k},k.tick=function(n){u(((l=n)+(f-(s=s||l)))*L.speed)},k.seek=function(n){u(m(n))},k.pause=function(){k.paused=!0,o()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,S.push(k),o(),an())},k.reverse=function(){g(),k.completed=!k.reversed,o()},k.restart=function(){k.reset(),k.play()},k.remove=function(n){cn(A(n),k)},k.reset(),k.autoplay&&k.play(),k}function un(n,e){for(var t=e.length;t--;)h(n,e[t].animatable.target)&&e.splice(t,1)}function cn(n,e){var t=e.animations,r=e.children;un(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;un(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return L.version="3.2.2",L.speed=1,L.suspendWhenDocumentHidden=!0,L.running=S,L.remove=function(n){for(var e=A(n),t=S.length;t--;)cn(e,S[t])},L.get=T,L.set=nn,L.convertPx=y,L.path=function(n,e){var t=w.str(n)?a(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:Q(t),totalLength:G(t)*(r/100)}}},L.setDashoffset=function(n){var e=G(n);return n.setAttribute("stroke-dasharray",e),e},L.stagger=function(n,e){var i=(e=void 0===e?{}:e).direction||"normal",c=e.easing?P(e.easing):null,s=e.grid,f=e.axis,l=e.from||0,d="first"===l,p="center"===l,h="last"===l,g=w.arr(n),m=g?parseFloat(n[0]):parseFloat(n),v=g?parseFloat(n[1]):0,y=B(g?n[1]:n)||0,b=e.start||0+(g?m:0),M=[],x=0;return function(n,e,t){if(d&&(l=0),p&&(l=(t-1)/2),h&&(l=t-1),!M.length){for(var r,a,o,u=0;u<t;u++)s?(r=p?(s[0]-1)/2:l%s[0],a=p?(s[1]-1)/2:Math.floor(l/s[0]),r=r-u%s[0],a=a-Math.floor(u/s[0]),o=Math.sqrt(r*r+a*a),"x"===f&&(o=-r),M.push(o="y"===f?-a:o)):M.push(Math.abs(l-u)),x=Math.max.apply(Math,M);c&&(M=M.map(function(n){return c(n/x)*x})),"reverse"===i&&(M=M.map(function(n){return f?n<0?-1*n:-n:Math.abs(x-n)}))}return b+(g?(v-m)/x:m)*(Math.round(100*M[e])/100)+y}},L.timeline=function(u){var i=L(u=void 0===u?{}:u);return i.duration=0,i.add=function(n,e){var t=S.indexOf(i),r=i.children;function a(n){n.passThrough=!0}-1<t&&S.splice(t,1);for(var o=0;o<r.length;o++)a(r[o]);t=D(n,x(M,u)),t.targets=t.targets||u.targets,n=i.duration,t.autoplay=!1,t.direction=i.direction,t.timelineOffset=w.und(e)?n:E(e,n),a(i),i.seek(t.timelineOffset),e=L(t),a(e),r.push(e),n=tn(r,u);return i.delay=n.delay,i.endDelay=n.endDelay,i.duration=n.duration,i.seek(0),i.reset(),i.autoplay&&i.play(),i},i},L.easing=P,L.penner=s,L.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},L});






     



















let CARDNAME = document.querySelector('.CARDNAME')




    let cookieValue1 = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user_name="))
    ?.split("=")[1];
  
    


    let cookieValue2 = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user_name2="))
    ?.split("=")[1];
    
    
    
CARDNAME.innerHTML = cookieValue1 + "  "  +  cookieValue2



function DontHaveName() {
    document.cookie = `user_name=${inputFIELD.value};max-age=5000000000000000`
    Name.style.display = 'none'
    Name.innerHTML =  inputFIELD.value
}




	function DontHaveName() {
		document.cookie = `user_name=${inputFIELD.value};max-age=5000000000000000`
		Name.style.display = 'none'
		Name.innerHTML =  inputFIELD.value
	}









    let photomas = [
          
        "../imgProfile/(.jpg ",
        "../imgProfile/2abedb36-1dd1-43b3-a2b8-30e3bd6a3a77.jpg ",
        "../imgProfile/4fb377d7-28a9-4ffd-b207-008719b72deb.jpg ",
        "../imgProfile/05d7f474-3c67-467b-be14-b026d7e31b28.jpg ",
        "../imgProfile/7d7dde30-3999-4c4f-9283-c10fa82b1215.jpg",
        "../imgProfile/48b80b58-5cba-4c0e-81f8-40424c1f9f7b.jpg ",
        "../imgProfile/60fb33b5-f869-41fe-97e5-f503dbb6d08d.jpg ",
        "../imgProfile/63dbd280-c5c3-4f03-aa37-51d9a2c57080.jpg ",
        "../imgProfile/372b6367-ca95-4fd6-b2ab-66483a6c782c.jpg ",
        "../imgProfile/3187cb2c-b7c2-4732-add1-815e687c8547.jpg ",
        "../imgProfile/6847a4f2-1022-4ed0-87a8-161ca57d6521.jpg ",
        "../imgProfile/6897f017-c12a-49cb-bffc-623bc2021bcf.jpg ",
        "../imgProfile/a943c073-1413-4fa5-9645-4dde907a6d7c.jpg ",
        "../imgProfile/audrey 👻.jpg ",
        "../imgProfile/Baby Patrick.jpg ",
        "../imgProfile/bf14aff4-db95-4904-91b6-deb7753e0fd7.jpg ",
        "../imgProfile/c2bc4ba5-9ddc-4f3a-96b4-ff4a8ddbfd3a.jpg ",
        "../imgProfile/c137f57d-3979-4f4f-a96c-349c96aeea80.jpg ",
        "../imgProfile/cat.jpg ",
        "../imgProfile/Cat🎀.jpg ",
        "../imgProfile/cc1f8e7c-347d-4e99-953a-da0ee08e3f8e.jpg ",
        "../imgProfile/d5a5ac4a-8934-453e-99bb-96c659114767.jpg ",
        "../imgProfile/e9c46e73-0e86-4475-9343-e80187001df3.jpg ",
        "../imgProfile/líkє whαt чσu ѕєє_ fσllσw mє_ ριитєяєѕт….jpg ",
        "../imgProfile/Lilith (@wiitadaech).jpg ",
        "../imgProfile/𝐌𝐲 𝐥𝐨𝐯𝐞𝐫 ; 𝐒𝐜𝐚𝐫𝐚𝐦𝐨𝐮𝐜𝐡𝐞  - 3_ Detention_ A date_.jpg ",
        "../imgProfile/Tag someone with a temper.jpg ",
        "../imgProfile/Аватарки на все случаи жизни.jpg ",
        "../imgProfile/вот вам на аву!.jpg ",
        "../imgProfile/завантаження (1).jpg ",
        "../imgProfile/завантаження (2).jpg ",
        "../imgProfile/завантаження.jpg ",
        "../imgProfile/Стикер телеграм ✋ из набора «DL TSP II».jpg ",
        "../imgProfile/физрук до 1999.jpg ",
        "../imgProfile/Хомяк.jpg ",
        "../imgProfile/Чмош 2.jpg ",
        "../imgProfile/Я не знаю.jpg ",

        "../imgProfile/Zxc Cat GIF – Zxc Cat – Ищите GIF-файлы и обменивайтесь ими.gif ",
        "../imgProfile/завантаження.gif ",
        "../imgProfile/Str00pwafell.gif ",
        "../imgProfile/Cat Fear GIF - Cat Fear Kitty - Discover & Share GIFs.gif ",


    ]

     

    
    let conPhoto = document.querySelector('.con-Photo')
    let openconphoto = document.querySelector('#addphoto')

    openconphoto.addEventListener('click', function(){
        conPhoto.style.display = "flex"
    })





    for (let i = 0; i < photomas.length; i++) {
        let photoFor = photomas[i];
        
    function renderDataaaa() {



            conPhoto.innerHTML += `<img src="${photoFor}" class="photo-photo"></img>`

     
    }
   

    renderDataaaa()

    }
	
let photoPHOTO = document.querySelectorAll('.photo-photo')
let imgPROfleYEA = document.querySelector('#img')
let lol 










 
let cookieValueProfile = document.cookie

          
.split("; ")
.find((row) => row.startsWith("IMG-profile="))
?.split("=")[1];





photoPHOTO.forEach(element => {
    
    element.addEventListener('click', function(){
        conPhoto.style.display = "none"
        lol = element.src

        function delete_cookie(lol) {
            document.cookie = `IMG-profile=${lol};max-age=-1`
          }
        
          delete_cookie()
        

           document.cookie = `IMG-profile=${lol};max-age=5000000000000000`
           location. reload()

    })
});
 

imgPROfleYEA.src = cookieValueProfile


imgPROfleYEA.addEventListener('click', function(){
    conPhoto.style.display = "flex"
})




let closeconphoto = document.querySelector('.close-con-photo')



closeconphoto.addEventListener('click', function(){
    conPhoto.style.display = "none"
})

let removePhoto = document.querySelector('#removephoto')


removePhoto.addEventListener('click', function(){

    let phoroREM

    

    phoroREM = '/Acount/8847419.png'

    function delete_cookie(lol) {
        document.cookie = `IMG-profile=${lol};max-age=-1`
      }
    
      delete_cookie()



      
      document.cookie = `IMG-profile=${phoroREM};max-age=5000000000000000`
      location. reload()


      imgPROfleYEA.src =  phoroREM
      .split("; ")
      .find((row) => row.startsWith("IMG-profile="))
      ?.split("=")[1];



    
})





let BTNmEnu = document.querySelector('.btn-menu')
let menuOpen = document.querySelector('.menu-open')

let BTNMENOClose = document.querySelector('.menu-close')

BTNmEnu.addEventListener('click', function(){
menuOpen.style.display = 'flex'
    menuOpen.style.zIndex = 10000
    anime({
        targets: '.menu-open',
        top:0,
        duration: 200,
        
    })
})

BTNMENOClose.addEventListener('click', function(){
    anime({
        targets: '.menu-open',
        top:'-50%',
        duration: 200,
        
    })
})

let RENEMEbtn = document.querySelector('.btnn')

let renameBack = document.querySelector('.lola')
let logIN = document.querySelector('.login-box')
let inputBox = document.querySelectorAll('.input-box')

RENEMEbtn.addEventListener('click',function(){
    renameBack.style.display = 'flex'
    BTNMENOClose.style.display = 'none'
    RENEMEbtn.style.display = 'none'
    logIN.style.opacity = 1
    logIN.style.zIndex = 1

    anime({
        targets: '.login-box',
        top:'0%',
        duration: 200,
        
    })
    
})

renameBack.addEventListener('click',function(){
    renameBack.style.display = 'none'
    BTNMENOClose.style.display = 'flex'
    RENEMEbtn.style.display = 'inline'

    anime({
        targets: '.login-box',
        top:'-220%',
        duration: 500,
        
    }).finished({
function(){
    logIN.style.opacity = 0
    logIN.style.zIndex = -2

}
    })

})




let buttonSEND = document.querySelector('.buttonn')
let inputFIELD =  document.querySelector('.input_field')
let CARDNAMEe = document.querySelector('.CARDNAME')


let cookies = document.cookie.split('; ')
let isCookieSaved = false
let user_name = 0
for (let i = 0; i < cookies.length; i += 1) {
    if (cookies[i].split('=')[0] == 'user_name') {
        isCookieSaved = true
        user_name = cookies[i].split('=')[1]
        console.log(user_name)
        break
    }
}



function DontHaveNamee() {
    document.cookie = `user_name=${inputFIELD.value};max-age=5000000000000000`
    Name.style.display = 'none'
    Name.innerHTML =  inputFIELD.value
}



let SurnameField = document.querySelector('.input_fieldSURNAME')



let cookies2 = document.cookie.split('; ')
let isCookieSaved2 = false
let user_name2 = 0
for (let i = 0; i < cookies2.length; i += 1) {
    if (cookies2[i].split('=')[0] == 'user_name2') {
        isCookieSaved2 = true
        user_name2 = cookies2[i].split('=')[1]
        console.log(user_name2)
        break
    }
}




function DontHaveName22() {
    document.cookie = `user_name2=${SurnameField.value};max-age=50000000000000`
    SurName.style.display = 'none'
    SurName.innerHTML =  SurnameField.value
}




if (isCookieSaved) {

    
} else {
 buttonSEND.addEventListener('click', DontHaveNamee )
 buttonSEND.addEventListener('click', DontHaveName22 )
}




inputFIELD.oninput = function(){
    this.value = this.value.substr(0, 12)
  
}

SurnameField.oninput = function(){
    this.value = this.value.substr(0, 12)
}



