(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GiJa:function(e,t,r){},Gx3p:function(e,t,r){r("YBKJ"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("zGcK"),r("HQhv"),r("HXzo"),r("AqHK"),r("sc67"),r("MIFh"),r("wZFJ"),r("n7j8"),e.exports=function(){"use strict";var e=document,t=e.createTextNode.bind(e);function r(e,t,r){e.style.setProperty(t,r)}function n(e,t){return e.appendChild(t)}function a(t,r,a,o){var i=e.createElement("span");return r&&(i.className=r),a&&(!o&&i.setAttribute("data-"+r,a),i.textContent=a),t&&n(t,i)||i}function o(e,t){return e.getAttribute("data-"+t)}function i(t,r){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(r||e).querySelectorAll(t)):[]}function c(e){for(var t=[];e--;)t[e]=[];return t}function l(e,t){e&&e.some(t)}function s(e){return function(t){return e[t]}}var u={};function m(e,t,r,n){return{by:e,depends:t,key:r,split:n}}function f(e){return function e(t,r,n){var a=n.indexOf(t);if(-1==a)n.unshift(t),l(u[t].depends,(function(r){e(r,t,n)}));else{var o=n.indexOf(r);n.splice(a,1),n.splice(o,0,t)}return n}(e,0,[]).map(s(u))}function d(e){u[e.by]=e}function h(e,r,o,c,s){e.normalize();var u=[],m=document.createDocumentFragment();c&&u.push(e.previousSibling);var f=[];return i(e.childNodes).some((function(e){if(!e.tagName||e.hasChildNodes()){if(e.childNodes&&e.childNodes.length)return f.push(e),void u.push.apply(u,h(e,r,o,c,s));var n=e.wholeText||"",i=n.trim();i.length&&(" "===n[0]&&f.push(t(" ")),l(i.split(o),(function(e,t){t&&s&&f.push(a(m,"whitespace"," ",s));var n=a(m,r,e);u.push(n),f.push(n)}))," "===n[n.length-1]&&f.push(t(" ")))}else f.push(e)})),l(f,(function(e){n(m,e)})),e.innerHTML="",n(e,m),u}var p=m("words",0,"word",(function(e){return h(e,"word",/\s+/,0,1)})),v=m("chars",["words"],"char",(function(e,t,r){var n=[];return l(r.words,(function(e,r){n.push.apply(n,h(e,"char","",t.whitespace&&r))})),n}));function g(e){var t=(e=e||{}).key;return i(e.target||"[data-splitting]").map((function(n){var a=n["🍌"];if(!e.force&&a)return a;a=n["🍌"]={el:n};var i=f(e.by||o(n,"splitting")||"chars"),c=function(e,t){for(var r in t)e[r]=t[r];return e}({},e);return l(i,(function(e){if(e.split){var o=e.by,i=(t?"-"+t:"")+e.key,s=e.split(n,c,a);i&&function(e,t,n){var a="--"+t,o=a+"-index";l(n,(function(e,t){Array.isArray(e)?l(e,(function(e){r(e,o,t)})):r(e,o,t)})),r(e,a+"-total",n.length)}(n,i,s),a[o]=s,n.classList.add(o)}})),n.classList.add("splitting"),a}))}function y(e,t,r){var n=i(t.matching||e.children,e),a={};return l(n,(function(e){var t=Math.round(e[r]);(a[t]||(a[t]=[])).push(e)})),Object.keys(a).map(Number).sort(w).map(s(a))}function w(e,t){return e-t}g.html=function(e){var t=(e=e||{}).target=a();return t.innerHTML=e.content,g(e),t.outerHTML},g.add=d;var E=m("lines",["words"],"line",(function(e,t,r){return y(e,{matching:r.words},"offsetTop")})),x=m("items",0,"item",(function(e,t){return i(t.matching||e.children,e)})),b=m("rows",0,"row",(function(e,t){return y(e,t,"offsetTop")})),N=m("cols",0,"col",(function(e,t){return y(e,t,"offsetLeft")})),k=m("grid",["rows","cols"]),L=m("layout",0,0,(function(e,t){var c=t.rows=+(t.rows||o(e,"rows")||1),l=t.columns=+(t.columns||o(e,"columns")||1);if(t.image=t.image||o(e,"image")||e.currentSrc||e.src,t.image){var s=i("img",e)[0];t.image=s&&(s.currentSrc||s.src)}t.image&&r(e,"background-image","url("+t.image+")");for(var u=c*l,m=[],f=a(0,"cell-grid");u--;){var d=a(f,"cell");a(d,"cell-inner"),m.push(d)}return n(e,f),m})),O=m("cellRows",["layout"],"row",(function(e,t,r){var n=t.rows,a=c(n);return l(r.layout,(function(e,t,r){a[Math.floor(t/(r.length/n))].push(e)})),a})),j=m("cellColumns",["layout"],"col",(function(e,t,r){var n=t.columns,a=c(n);return l(r.layout,(function(e,t){a[t%n].push(e)})),a})),_=m("cells",["cellRows","cellColumns"],"cell",(function(e,t,r){return r.layout}));return d(p),d(v),d(E),d(x),d(b),d(N),d(k),d(L),d(O),d(j),d(_),g}()},HXzo:function(e,t,r){"use strict";r("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},RJWs:function(e,t,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("m210"),r("4DPX");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,o=Object.create(a.prototype),i=new b(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var s={};function u(){}function m(){}function f(){}var d={};d[a]=function(){return this};var h=Object.getPrototypeOf,p=h&&h(h(N([])));p&&p!==t&&r.call(p,a)&&(d=p);var v=f.prototype=u.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v.constructor=f,f.constructor=m,f[i]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new y(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return T}));r("y7hu");var n=r("q1tI"),a=r.n(n),o=(r("6kNP"),r("8npG"),r("kD0k")),i=r.n(o),c=(r("ls82"),r("EgnG")),l=r("Gx3p"),s=r.n(l),u=r("jO9Q"),m=r.n(u),f=(r("qA13"),a.a.forwardRef((function(e,t){return a.a.createElement("h1",{ref:t,className:"title text-primary"},e.children)}))),d=r("9eSz"),h=r.n(d),p=a.a.lazy((function(){return Promise.all([r.e(3),r.e(11)]).then(r.bind(null,"YTX8"))})),v=function(e){var t=e.imgPath,r=Object(n.useState)(),o=r[0],i=r[1];return Object(n.useEffect)((function(){i(navigator.connection&&"cellular"!==navigator.connection.type&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))}),[]),a.a.createElement(a.a.Fragment,null,o&&a.a.createElement(n.Suspense,{fallback:a.a.createElement("span",{role:"img","aria-label":"loading..."},"🏋️")},a.a.createElement(p,{img:t.src})),!o&&a.a.createElement(h.a,{className:"w-full h-full",alt:"Portrait of Thomas Rutzer",fluid:t}))};function g(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}var y=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).headline=a.a.createRef(),r.main=a.a.createRef(),r.subline=a.a.createRef(),r.bg=a.a.createRef(),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){var e,t=(e=i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s()({target:this.headline.current}),(r=c.a.timeline()).add({targets:this.main.current,opacity:[0,1],duration:0}).add({targets:this.bg.current,opacity:[0,1],keyframes:[{clipPath:"inset(0)"},{clipPath:"inset(32px)"}],duration:2e3,easing:"easeInOutExpo"}).add({targets:this.headline.current,opacity:[0,1],duration:0},"-=300").add({targets:t[0].chars,rotate:[20,0],translateY:["100%",0],opacity:[0,1],duration:2700,delay:c.a.stagger(20,{}),easing:"easeInOutExpo"},"-=1200").add({targets:this.subline.current,opacity:[0,1],translateY:[20,0],duration:1e3,easing:"easeOutQuad"},"-=1600"),r.play();case 4:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){g(o,n,a,i,c,"next",e)}function c(e){g(o,n,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),o.render=function(){return a.a.createElement("div",{className:"relative flex items-center overflow-hidden",style:{opacity:0},ref:this.main},a.a.createElement("div",{"aria-hidden":"true",ref:this.bg,className:m.a.bg},a.a.createElement(v,{imgPath:this.props.imgPath})),a.a.createElement("div",{className:"min-h-screen flex justify-between flex-col p-6 md:p-7",variant:"large"},a.a.createElement(f,{ref:this.headline},"hay, I'm thomas"),a.a.createElement("div",{ref:this.subline,className:"max-w-screen-sm"},a.a.createElement("p",null,"— creative developer who feels most comfortable where sophisticated design meets well structured code."))))},n}(a.a.Component),w=r("mv9s"),E=r("6d1X"),x=function(e){return{x:(e=e||window.event).clientX+document.body.scrollLeft+document.documentElement.scrollLeft,y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop}},b=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},N=function(e,t,r){return(1-r)*e+r*t},k=function(e,t,r,n,a){return(e-t)*(a-n)/(r-t)+n},L=r("TSYQ"),O=r.n(L),j=function(e){var t=e.src,r=e.alt,o=e.fit,i=void 0===o?"cover":o,c=e.tiles,l=e.index,s=e.offsetX,u=void 0===s?0:s,m=e.offsetY,f=void 0===m?0:m,d=Object(n.useMemo)((function(){var e;return O()(((e={})["col-start-"+(l%2==0?"1":"2")+" col-span-5"]=!0,e["md:col-start-"+c[0][0]]=!0,e["md:col-span-"+c[0][1]]=!0,e["md:row-start-"+c[1][0]]=!0,e["md:row-span-"+c[1][1]]=!0,e))}),[l,c]);return a.a.createElement("div",{style:{transform:"translate("+u+"px, "+f+"px)"},className:d+" \n        overflow-hidden\n        mt-"+(0===l?"0":"4")+" md:mt-0\n        flex items-center flex-col\n        transition-transform duration-1000 delay-"+75*l+" ease-in"},a.a.createElement(h.a,{className:"w-full",imgStyle:{objectFit:i},fluid:t.childImageSharp.fluid,alt:r}),a.a.createElement("figcaption",{className:"px-1 text-xs italic text-center text-grey-lighter mt-2"},"Fig.",l+1,": ",r))},_=function(e){var t=e.title,r=e.subtitle,o=e.images,i=void 0===o?[]:o,c=Object(n.useState)(0),l=c[0],s=c[1],u=Object(n.useState)(0),m=u[0],f=u[1],d=Object(n.useCallback)((function(e){var t=b(5,30),r=b(5,15),n=x(e),a=n.x,o=n.y;s((function(e){return N(e,k(a,0,window.innerWidth,-t,t),.07)})),f((function(e){return N(e,k(o,0,window.innerHeight,-r,r),.07)}))}),[]);return Object(n.useEffect)((function(){return document.addEventListener("mousemove",d),function(){return document.removeEventListener("mousemove",d)}}),[d]),a.a.createElement("div",{className:"relative"},a.a.createElement("div",{className:" mb-6 md:absolute md:w-full md:h-full  flex items-center justify-center flex-col z-10 pointer-events-none "},a.a.createElement("h3",{className:"text-4xl md:text-6xl underline underline-under"},t),a.a.createElement("h4",{className:"mt-4"},r)),a.a.createElement("div",{className:"grid grid-cols-6 md:grid-rows-3 md:gap-5 md:h-screen"},i.map((function(e,t){return a.a.createElement(j,{key:t,index:t,src:e.src,alt:e.alt,fit:e.fit,tiles:e.tiles,offsetX:l,offsetY:m})}))))},S=(r("GiJa"),function(e){var t=e.items;return a.a.createElement("ul",{className:"featureList pl-2"},t.map((function(e,t){return a.a.createElement("li",{key:t,className:"featureList__item text-tertiary-lighter"},e)})))}),G=r("4Zzn"),P=function(e){var t=e.additionalClasses,r=void 0===t?"":t,o=e.children,i=e.link,c=e.appearance,l=e.size,s=Object(n.useMemo)((function(){return O()({"external-link--large text-3xl md:text-5xl":"large"===l,"external-link--small text-sm":"small"===l})}),[l]),u=Object(n.useMemo)((function(){return O()({"external-link--primary text-primary":"primary"===c})}),[c]);return a.a.createElement("a",{className:"external-link "+r+" "+u+" "+s,href:i,rel:"noopener",target:"blank"},o,a.a.createElement("svg",{className:"external-link__icon",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs"},a.a.createElement("path",{d:"M7 17l9.2-9.2M17 17V7H7"})))},z=function(e){var t=e.children;return a.a.createElement("h2",{className:"text-2xl"},a.a.createElement("span",null,t),a.a.createElement("span",{className:"text-primary"},"."))},T=(t.default=function(e){var t=e.data;return a.a.createElement(w.a,null,a.a.createElement(E.a,null),a.a.createElement(y,{imgPath:t.portrait.childImageSharp.fluid}),a.a.createElement(G.a,{verticalSpacing:!1,additionalClasses:"pt-4 md:pt-7"},a.a.createElement(z,null,"works")),t.allWorksJson.edges.map((function(e,t){return a.a.createElement("section",{key:t,className:t%2==0?"bg-grey-darkest":"bg-grey-darker"},a.a.createElement(G.a,{variant:"large",additionalClasses:"md:px-5 pt-6 md:pt-7",verticalSpacing:!1,horizontalSpacing:!1},a.a.createElement(_,{images:e.node.images.map((function(t,r){return{src:e.node.fields.workImageAssets[r],alt:t.alt,tiles:t.grid.tiles,mobileRow:t.grid.mobileRow,fit:t.grid.fit}})),title:e.node.title,subtitle:e.node.subTitle})),a.a.createElement(G.a,null,a.a.createElement("div",{className:"grid grid-cols-6 md:gap-5"},a.a.createElement("div",{className:" flex md:flex-col justify-between  col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0 "},a.a.createElement("p",null,a.a.createElement("span",{className:"text-grey-lighter block"},"first release"),a.a.createElement("span",{className:"text-grey"},e.node.year)),a.a.createElement(S,{items:e.node.features})),a.a.createElement("div",{className:"my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4"},a.a.createElement("p",{className:"whitespace-pre-line"},e.node.leadingDescription),a.a.createElement("p",{className:"whitespace-pre-line mt-3"},e.node.description)),a.a.createElement("div",{className:"col-start-1 col-span-6 md:col-start-6 md:col-span-1"},a.a.createElement("div",{className:"flex flex-col md:items-end"},a.a.createElement("div",{className:"md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right"},e.node.links.map((function(e,t){var r=e.link,n=e.label;return a.a.createElement("div",{className:"whitespace-no-wrap",key:t},a.a.createElement(P,{appearance:"primary",link:r},n))}))))))))})),a.a.createElement("section",{className:"bg-grey-darkest-pattern"},a.a.createElement(G.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(z,{appearance:"primary"},"thoughts")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},t.allWritesJson.edges.map((function(e,t){return a.a.createElement("div",{key:t,className:0===t?"mb-4 md:mb-7":"mb-0"},a.a.createElement(P,{link:e.node.link,appearance:"primary",size:"large"},e.node.title),a.a.createElement("small",{className:"block italic text-grey-lighter mt-4"},"— ",e.node.description))})))))),a.a.createElement("section",{className:"bg-tertiary"},a.a.createElement(G.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(z,null,"about")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},a.a.createElement("p",null,"I'm leading JavaScript developer with focus on unique interfaces and interactions, currently working at ",a.a.createElement(P,{link:"https://artcom.de",appearance:"primary"},"art+com"),", a studio for media installations and spaces."),a.a.createElement("p",{className:"mt-4"},'In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting custom solutions with web technologies and mqtt based realtime communications.'),a.a.createElement("p",{className:"mt-4"},"My personal reasearch focus at the moment is blending interfaces into spaces with the new webXR API.")),a.a.createElement("div",{className:"col-start-1 md:col-start-3 col-span-1"},a.a.createElement("div",{className:"flex flex-col md:items-end"},a.a.createElement("div",{className:"md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right md:pl-2"},a.a.createElement("div",null,a.a.createElement(P,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"twitter.com/thomasrutzer",size:"large"},"twitter")),a.a.createElement("div",null,a.a.createElement(P,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"mailto:thomas@rutzer.de",size:"large"},"mail")),a.a.createElement("div",null,a.a.createElement(P,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"https://github.com/ThomasRutzer",size:"large"},"github")))))))),a.a.createElement("section",{className:"bg-grey-darkest-pattern text-tertiary-lighter"},a.a.createElement(G.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(z,{appearance:"primary"},"credits")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},a.a.createElement("p",{className:"mb-2 font-bold"},"images"),t.allWorksJson.edges.map((function(e,t){return a.a.createElement("ul",{key:t,className:0===t?"mb-4":"mb-0"},e.node.images.map((function(t,r){return a.a.createElement("li",{key:r},t.reference.link&&a.a.createElement(P,{link:t.reference.link,size:"small"},"Fig.",r+1,": ",e.node.title," ",a.a.createElement("i",null,e.node.subTitle)," by ",t.reference.author),!t.reference.link&&a.a.createElement("p",{className:"text-sm"},"Fig.",r+1,": ",e.node.title," ",a.a.createElement("i",null,e.node.subTitle)," by ",t.reference.author))})))}))),a.a.createElement("div",{className:"col-start-1 md:col-start-3 col-span-1"},a.a.createElement("p",{className:"mb-2 font-bold"},"this site"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(P,{link:"https://www.gatsbyjs.org/",size:"small"},"Gatsby.js")),a.a.createElement("li",null,a.a.createElement(P,{link:"https://tailwindcss.com/",size:"small"},"Tailwind.css")),a.a.createElement("li",null,a.a.createElement(P,{link:"https://github.com/features/actions",size:"small"},"Github actions")),a.a.createElement("li",null,a.a.createElement(P,{link:"https://fonts.google.com/specimen/IBM+Plex+Mono",size:"small"},"IBM Plex Mono"))))))))},"2292674231")},jO9Q:function(e,t,r){e.exports={bg:"intro-module--bg--3V0GM"}},kD0k:function(e,t,r){e.exports=r("RJWs")},ls82:function(e,t,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("m210"),r("4DPX");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,o=Object.create(a.prototype),i=new b(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var s={};function u(){}function m(){}function f(){}var d={};d[a]=function(){return this};var h=Object.getPrototypeOf,p=h&&h(h(N([])));p&&p!==t&&r.call(p,a)&&(d=p);var v=f.prototype=u.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v.constructor=f,f.constructor=m,f[i]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new y(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},qA13:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-js-9f49eabab54a560e04e8.js.map