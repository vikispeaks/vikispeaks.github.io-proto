/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-prefixedcss-prefixedcssvalue !*/
!function(e,n,t){function r(e,n){return typeof e===n}function i(){var e,n,t,i,o,s,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),g.push((i?"":"no-")+a.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function s(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return!!~(""+e).indexOf(n)}function u(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var i;for(var o in e)if(e[o]in n)return t===!1?e[o]:(i=n[e[o]],r(i,"function")?u(i,t||n):i);return!1}function d(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function c(e,t,r,i){var o,s,f,l,u="modernizr",p=a("div"),c=d();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=i?i[r]:u+(r+1),p.appendChild(f);return o=a("style"),o.type="text/css",o.id="s"+u,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=l,S.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(s(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+s(n[i])+":"+r+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,i,o){function s(){p&&(delete T.style,delete T.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var u=m(e,i);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!T.style;)p=!0,T.modElem=a(y.shift()),T.style=T.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=T.style[v],l(v,"-")&&(v=f(v)),T.style[v]!==t){if(o||r(i,"undefined"))return s(),"pfx"==n?v:!0;try{T.style[v]=i}catch(g){}if(T.style[v]!=h)return s(),"pfx"==n?v:!0}return s(),!1}function h(e,n,t,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,i,o):(a=(e+" "+b.join(s+" ")+s).split(" "),p(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],x={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),w="Moz O ms Webkit",b=x._config.usePrefixes?w.toLowerCase().split(" "):[];x._domPrefixes=b;var E=function(e,n){var t=!1,r=a("div"),i=r.style;if(e in i){var o=b.length;for(i[e]=n,t=i[e];o--&&!t;)i[e]="-"+b[o]+"-"+n,t=i[e]}return""===t&&(t=!1),t};x.prefixedCSSValue=E;var N=x._config.usePrefixes?w.split(" "):[];x._cssomPrefixes=N;var P=function(n){var r,i=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var s=0;i>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in o)return"@-"+a.toLowerCase()+"-"+n}return!1};x.atRule=P;var z={elem:a("modernizr")};Modernizr._q.push(function(){delete z.elem});var T={style:z.elem.style};Modernizr._q.unshift(function(){delete T.style}),x.testAllProps=h,x.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0));var j=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=f(e)),n?h(e,n,t):h(e,"pfx"))};x.prefixedCSS=function(e){var n=j(e);return n&&s(n)};i(),o(g),delete x.addTest,delete x.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);