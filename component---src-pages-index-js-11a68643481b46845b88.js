(self.webpackChunkgithub_user_page=self.webpackChunkgithub_user_page||[]).push([[678],{108:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#787878","images":{"fallback":{"src":"/static/377338a2d5b9c74e930269af8433960c/0f3fe/me.jpg","srcSet":"/static/377338a2d5b9c74e930269af8433960c/c7834/me.jpg 750w,\\n/static/377338a2d5b9c74e930269af8433960c/11edd/me.jpg 1080w,\\n/static/377338a2d5b9c74e930269af8433960c/f1cbc/me.jpg 1366w,\\n/static/377338a2d5b9c74e930269af8433960c/0f3fe/me.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/377338a2d5b9c74e930269af8433960c/4e534/me.webp 750w,\\n/static/377338a2d5b9c74e930269af8433960c/e5dd4/me.webp 1080w,\\n/static/377338a2d5b9c74e930269af8433960c/1de46/me.webp 1366w,\\n/static/377338a2d5b9c74e930269af8433960c/b65f1/me.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.565625}')},7757:function(e,t,r){e.exports=r(5666)},4567:function(e){e.exports=function(){"use strict";var e=document,t=e.createTextNode.bind(e);function r(e,t,r){e.style.setProperty(t,r)}function n(e,t){return e.appendChild(t)}function a(t,r,a,i){var o=e.createElement("span");return r&&(o.className=r),a&&(!i&&o.setAttribute("data-"+r,a),o.textContent=a),t&&n(t,o)||o}function i(e,t){return e.getAttribute("data-"+t)}function o(t,r){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(r||e).querySelectorAll(t)):[]}function s(e){for(var t=[];e--;)t[e]=[];return t}function l(e,t){e&&e.some(t)}function c(e){return function(t){return e[t]}}function u(e,t,n){var a="--"+t,i=a+"-index";l(n,(function(e,t){Array.isArray(e)?l(e,(function(e){r(e,i,t)})):r(e,i,t)})),r(e,a+"-total",n.length)}var m={};function d(e,t,r){var n=r.indexOf(e);if(-1==n)r.unshift(e),l(m[e].depends,(function(t){d(t,e,r)}));else{var a=r.indexOf(t);r.splice(n,1),r.splice(a,0,e)}return r}function f(e,t,r,n){return{by:e,depends:t,key:r,split:n}}function h(e){return d(e,0,[]).map(c(m))}function p(e){m[e.by]=e}function g(e,r,i,s,c){e.normalize();var u=[],m=document.createDocumentFragment();s&&u.push(e.previousSibling);var d=[];return o(e.childNodes).some((function(e){if(!e.tagName||e.hasChildNodes()){if(e.childNodes&&e.childNodes.length)return d.push(e),void u.push.apply(u,g(e,r,i,s,c));var n=e.wholeText||"",o=n.trim();o.length&&(" "===n[0]&&d.push(t(" ")),l(o.split(i),(function(e,t){t&&c&&d.push(a(m,"whitespace"," ",c));var n=a(m,r,e);u.push(n),d.push(n)}))," "===n[n.length-1]&&d.push(t(" ")))}else d.push(e)})),l(d,(function(e){n(m,e)})),e.innerHTML="",n(e,m),u}var v=0;function y(e,t){for(var r in t)e[r]=t[r];return e}var w="words",b=f(w,v,"word",(function(e){return g(e,"word",/\s+/,0,1)})),E="chars",x=f(E,[w],"char",(function(e,t,r){var n=[];return l(r[w],(function(e,r){n.push.apply(n,g(e,"char","",t.whitespace&&r))})),n}));function k(e){var t=(e=e||{}).key;return o(e.target||"[data-splitting]").map((function(r){var n=r["🍌"];if(!e.force&&n)return n;n=r["🍌"]={el:r};var a=h(e.by||i(r,"splitting")||E),o=y({},e);return l(a,(function(e){if(e.split){var a=e.by,i=(t?"-"+t:"")+e.key,s=e.split(r,o,n);i&&u(r,i,s),n[a]=s,r.classList.add(a)}})),r.classList.add("splitting"),n}))}function N(e){var t=(e=e||{}).target=a();return t.innerHTML=e.content,k(e),t.outerHTML}function L(e,t,r){var n=o(t.matching||e.children,e),a={};return l(n,(function(e){var t=Math.round(e[r]);(a[t]||(a[t]=[])).push(e)})),Object.keys(a).map(Number).sort(S).map(c(a))}function S(e,t){return e-t}k.html=N,k.add=p;var V=f("lines",[w],"line",(function(e,t,r){return L(e,{matching:r[w]},"offsetTop")})),j=f("items",v,"item",(function(e,t){return o(t.matching||e.children,e)})),O=f("rows",v,"row",(function(e,t){return L(e,t,"offsetTop")})),_=f("cols",v,"col",(function(e,t){return L(e,t,"offsetLeft")})),M=f("grid",["rows","cols"]),C="layout",I=f(C,v,v,(function(e,t){var s=t.rows=+(t.rows||i(e,"rows")||1),l=t.columns=+(t.columns||i(e,"columns")||1);if(t.image=t.image||i(e,"image")||e.currentSrc||e.src,t.image){var c=o("img",e)[0];t.image=c&&(c.currentSrc||c.src)}t.image&&r(e,"background-image","url("+t.image+")");for(var u=s*l,m=[],d=a(v,"cell-grid");u--;){var f=a(d,"cell");a(f,"cell-inner"),m.push(f)}return n(e,d),m})),z=f("cellRows",[C],"row",(function(e,t,r){var n=t.rows,a=s(n);return l(r[C],(function(e,t,r){a[Math.floor(t/(r.length/n))].push(e)})),a})),P=f("cellColumns",[C],"col",(function(e,t,r){var n=t.columns,a=s(n);return l(r[C],(function(e,t){a[t%n].push(e)})),a})),A=f("cells",["cellRows","cellColumns"],"cell",(function(e,t,r){return r[C]}));return p(b),p(x),p(V),p(j),p(O),p(_),p(M),p(I),p(z),p(P),p(A),k}()},2350:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.items;return n.createElement("ul",{className:"featureList pl-2"},t.map((function(e,t){return n.createElement("li",{key:t,className:"featureList__item text-sm text-grey-lighter"},e)})))}},8586:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement("h2",{className:"text-2xl"},n.createElement("span",null,t),n.createElement("span",{className:"text-primary"},"."))}},8531:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var n=r(7294),a=function(e){return{x:(e=e||window.event).clientX,y:e.clientY}},i=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},o=function(e,t,r){return(1-r)*e+r*t},s=r(906),l=function(e,t,r,l,c){var u=(0,n.useState)(null),m=u[0],d=u[1],f=(0,n.useState)(null),h=f[0],p=f[1],g=(0,n.useRef)(null),v=(0,n.useRef)(null),y=(0,n.useCallback)((function(e){var t=a(e),r=t.x,n=t.y;v.current=r,g.current=n}),[]);return(0,n.useEffect)((function(){if(!c){var n=null,a=i(e,t),u=i(r,l);return n=requestAnimationFrame((function e(){d((function(e){return o(e,(0,s.Z)(v.current,0,window.innerWidth,-a,a),.07)})),p((function(e){return o(e,(0,s.Z)(g.current,0,window.innerHeight,-u,u),.07)})),n=requestAnimationFrame(e)})),function(){return cancelAnimationFrame(n)}}}),[c,e,t,r,l]),(0,n.useEffect)((function(){return c?window.removeEventListener("mousemove",y):window.addEventListener("mousemove",y),function(){window.removeEventListener("mousemove",y)}}),[y,c]),{tx:m,ty:h}}},3923:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var n=r(7294);function a(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,a)}var i=r(3552),o=r(7757),s=r.n(o),l=r(7956),c=r(4567),u=r.n(c),m=n.forwardRef((function(e,t){return n.createElement("h1",{ref:t,className:"intro__title text-primary"},e.children)}));function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=new Map,g=new Map,v=0;function y(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(g.has(r)||(v+=1,g.set(r,v.toString())),g.get(r)):"0":e[t]);var r})).toString()}function w(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=y(e),r=p.get(t);if(!r){var n,a=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var r,i=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(r=a.get(t.target))||r.forEach((function(e){e(i,t)}))}))}),e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:a},p.set(t,r)}return r}(r),a=n.id,i=n.observer,o=n.elements,s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),p.delete(a))}}function b(e){return"function"!=typeof e.children}var E=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),b(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,a=e.trackVisibility,i=e.delay;this._unobserveCb=w(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:a,delay:i})}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!b(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var a=this.props,i=a.children,o=a.as,s=a.tag,l=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,n.createElement)(o||s||"div",h({ref:this.handleNode},l),i)},a}(n.Component);E.displayName="InView",E.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var x=E;function k(e,t,r){if(void 0===t&&(t=0),void 0===r&&(r=window),!r)return 0;var n=(r instanceof Element?r.clientHeight:r.innerHeight)||0,a=t*e.height,i=(e.bottom-a)/(n+e.height-2*a);return 1-Math.max(0,Math.min(1,i))}function N(e,t,r){if(void 0===t&&(t=0),void 0===r&&(r=window),!r)return 0;var n=(r instanceof Element?r.clientWidth:r.innerWidth)||0,a=t*e.width,i=(e.right-a)/(n+e.width-2*a);return 1-Math.max(0,Math.min(1,i))}function L(e){return"function"!=typeof e.children}var S=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return f(d(t=e.call.apply(e,[this].concat(n))||this),"state",{percentage:0,inView:!1,entry:void 0}),f(d(t),"node",void 0),f(d(t),"monitoring",!1),f(d(t),"handleScroll",(function(){if(t.node){var e=t.node.getBoundingClientRect(),r=t.props.horizontal?N(e,t.props.threshold,t.props.root):k(e,t.props.threshold,t.props.root);r!==t.state.percentage&&t.setState({percentage:r})}})),f(d(t),"handleInView",(function(e,r){t.node=r.target,t.setState({entry:r,inView:e})})),f(d(t),"handleRenderProps",(function(e){var r=e.ref,n=t.state,a=n.percentage,i=n.entry,o=n.inView;return L(t.props)?null:t.props.children({percentage:a,entry:i,inView:o,ref:r})})),t}(0,i.Z)(t,e);var r=t.prototype;return r.componentDidUpdate=function(e,t){!this.props.onChange||t.percentage===this.state.percentage&&t.inView===this.state.inView||this.props.onChange(this.state.percentage,this.state.entry),e.root!==this.props.root&&this.monitoring&&(this.monitorScroll(!1,e.root),this.monitorScroll(this.state.inView)),t.inView!==this.state.inView&&this.monitorScroll(this.state.inView,e.root)},r.componentWillUnmount=function(){this.monitorScroll(!1)},r.monitorScroll=function(e,t){var r=t||this.props.root||window;if(e){if(this.monitoring)return;r.addEventListener("scroll",this.handleScroll,{passive:!0}),r.addEventListener("resize",this.handleScroll),this.handleScroll(),this.monitoring=!0}else{if(!this.monitoring)return;r.removeEventListener("scroll",this.handleScroll),r.removeEventListener("resize",this.handleScroll),this.monitoring=!1}},r.render=function(){return(0,n.createElement)(x,{onChange:this.handleInView},L(this.props)?this.props.children:this.handleRenderProps)},t}(n.Component);function V(e){void 0===e&&(e={});var t=function(e){var t=void 0===e?{}:e,r=t.threshold,a=t.delay,i=t.trackVisibility,o=t.rootMargin,s=t.root,l=t.triggerOnce,c=t.skip,u=t.initialInView,m=(0,n.useRef)(),d=(0,n.useState)({inView:!!u}),f=d[0],h=d[1],p=(0,n.useCallback)((function(e){void 0!==m.current&&(m.current(),m.current=void 0),c||e&&(m.current=w(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&l&&m.current&&(m.current(),m.current=void 0)}),{root:s,rootMargin:o,threshold:r,trackVisibility:i,delay:a}))}),[Array.isArray(r)?r.toString():r,s,o,l,c,i,a]);(0,n.useEffect)((function(){m.current||!f.entry||l||c||h({inView:!!u})}));var g=[p,f.inView,f.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}(e),r=t[0],a=t[1],i=t[2],o=(0,n.useState)(0),s=o[0],l=o[1],c=i&&i.target;return(0,n.useEffect)((function(){var t=function(){if(c){var t=c.getBoundingClientRect(),r=e.horizontal?N(t,e.threshold,e.root):k(t,e.threshold,e.root);l(r)}};if(a){var r=e.root||window;return r.addEventListener("scroll",t,{passive:!0}),r.addEventListener("resize",t),function(){r.removeEventListener("scroll",t),r.removeEventListener("resize",t)}}t()}),[a,e.root,e.horizontal,e.threshold,c]),[r,s,i]}f(S,"displayName","ScrollPercentage"),f(S,"defaultProps",{threshold:0});var j=r(8590),O=function(){return navigator.connection&&"cellular"!==navigator.connection.type},_=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},M=r(906),C=n.lazy((function(){return Promise.all([r.e(844),r.e(232)]).then(r.bind(r,7232))})),I=function(e){var t=e.onReady,a=(0,n.useState)(),i=a[0],o=a[1];(0,n.useEffect)((function(){o(O()&&!_())}),[]);var s=V({threshold:0}),l=s[0],c=s[1];return n.createElement("div",{ref:l,className:"portrait","aria-hidden":"true",style:{opacity:1-(0,M.Z)(c,.5,1,0,1)}},i&&n.createElement(n.Suspense,{fallback:n.createElement("span",{role:"img","aria-label":"loading..."},"🏋️")},n.createElement(C,{onReady:t})),!i&&n.createElement(j.S,{loading:"eager",layout:"fullWidth",onLoad:t,className:"w-full h-full",alt:"Portrait of Thomas Rutzer",src:"./../../images/me.jpg",__imageData:r(108)}))},z=function(e){function t(t){var r;return(r=e.call(this,t)||this).headline=n.createRef(),r.main=n.createRef(),r.subline=n.createRef(),r.bg=n.createRef(),r}(0,i.Z)(t,e);var r=t.prototype;return r.startAnimation=function(){var e,t=(e=s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u()({target:this.headline.current}),r=l.Z.timeline(),console.log(t),r.add({targets:this.main.current,opacity:[0,1],duration:0}).add({targets:this.bg.current,opacity:[0,1],keyframes:[{clipPath:"inset(0)"},{clipPath:"inset(32px)"}],duration:2e3,easing:"easeInOutExpo"}).add({targets:this.headline.current,opacity:[0,1],duration:0},"-=300").add({targets:t[0].chars,rotate:[20,0],translateY:["100%",0],opacity:[0,1],duration:2700,delay:l.Z.stagger(20,{}),easing:"easeInOutExpo"},"-=1200").add({targets:this.subline.current,opacity:[0,1],translateY:[20,0],duration:1e3,easing:"easeOutQuad"},"-=1600"),r.play();case 5:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,l,"next",e)}function l(e){a(o,n,i,s,l,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),r.render=function(){return n.createElement("div",{className:"intro relative flex items-center overflow-hidden",ref:this.main},n.createElement("div",{ref:this.bg,className:"intro__bg"},n.createElement(I,{onReady:this.startAnimation.bind(this)})),n.createElement("div",{className:"min-h-screen flex justify-between flex-col p-6 md:p-7",variant:"large"},n.createElement(m,{ref:this.headline},"hay I’m Thomas"),n.createElement("div",{ref:this.subline,className:"max-w-screen-sm"},n.createElement("p",{className:"relative text-xl md:text-3xl"},"creative developer who feels most comfortable where sophisticated design meets well structured code."))))},t}(n.Component),P=r(3101),A=r(9384),R=r(3235),T=r(8586),Z=r(5900),F=r.n(Z),W=function(e){var t=e.gatsbyImageData,r=e.alt,a=e.fit,i=void 0===a?"cover":a,o=e.tiles,s=e.index,l=e.offsetX,c=void 0===l?0:l,u=e.offsetY,m=void 0===u?0:u,d=(0,n.useMemo)((function(){var e;return F()(((e={})["col-start-"+(s%2==0?"1":"2")+" col-span-5"]=!0,e["lg:col-start-"+o[0][0]]=!0,e["lg:col-span-"+o[0][1]]=!0,e["lg:row-start-"+o[1][0]]=!0,e["lg:row-span-"+o[1][1]]=!0,e))}),[s,o]);return n.createElement("div",{style:{transform:"translate("+c+"px, "+m+"px)"},className:d+" \n        overflow-hidden\n        mt-"+(0===s?"0":"4")+" lg:mt-0\n        flex items-center flex-col\n        transition-transform duration-1000 ease-out"},n.createElement(j.G,{className:"w-full",imgStyle:{objectFit:i},image:t,alt:r}),n.createElement("figcaption",{className:"text-xs italic text-center mt-2 px-1"},"Fig.",s+1,": ",r))},D=r(8531),G=r(7741),J=function(e){var t=e.appearance,r=e.title,a=e.subtitle,i=e.images,o=void 0===i?[]:i,s=(0,n.useState)(!0),l=s[0],c=s[1],u=(0,D.$)(10,20,10,20,l),m=(0,n.useMemo)((function(){var e="undefined"!=typeof window&&(0,G.Z)();return{onMouseEnter:e?null:function(){return c(!1)},onMouseLeave:e?null:function(){return c(!1)}}}),[]);return n.createElement("div",Object.assign({className:"relative"},m),n.createElement("div",{className:"flex items-center justify-center flex-col  lg:absolute lg:w-full lg:h-full z-10 mb-6 pointer-events-none"},n.createElement("h3",{className:"text-4xl md:text-6xl md:text-stroke-white md:text-stroke-2 italic"},r),n.createElement("h4",null,a)),n.createElement("div",{className:"grid grid-cols-6 lg:grid-rows-3 lg:gap-5 lg:h-screen"},o.map((function(e,r){var a=e.gatsbyImageData,i=e.alt,o=e.fit,s=e.tiles;return n.createElement(W,{appearance:t,key:r,index:r,gatsbyImageData:a,alt:i,fit:o,tiles:s,offsetX:u.tx,offsetY:u.ty})}))))},Y=r(2350),B=function(e){var t=e.work,r=F()({"bg-grey-darkest":"dark"===t.selectedAppearance,"bg-secondary":"secondary"===t.selectedAppearance});return n.createElement("section",{className:r},n.createElement(A.v,{variant:"large",additionalClasses:"md:px-5 pt-6 md:pb-6 md:pt-7",verticalSpacing:!1,horizontalSpacing:!1},n.createElement(J,{appearance:"dark"===t.selectedAppearance?"light":"dark",images:t.images.map((function(e,r){return{gatsbyImageData:t.fields.workImageAssets[r].childImageSharp.gatsbyImageData,alt:e.alt,tiles:e.grid.tiles,mobileRow:e.grid.mobileRow,fit:e.grid.fit}})),title:t.title,subtitle:t.subTitle})),n.createElement(A.v,null,n.createElement("div",{className:"grid grid-cols-6 md:gap-5 leading-7"},n.createElement("div",{className:"flex md:flex-col justify-between text-sm col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0"},n.createElement("p",null,n.createElement("span",{className:("dark"===t.selectedAppearance?"text-secondary-lighter":"text-grey-darkest")+" block"},"first release"),n.createElement("span",{className:"text-grey-lighter"},t.year)),n.createElement("div",null,n.createElement("span",{className:("dark"===t.selectedAppearance?"text-secondary-lighter":"text-grey-darkest")+" block"},"key facts"),n.createElement(Y.Z,{items:t.features}))),n.createElement("div",{className:"my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4"},n.createElement("p",{className:"whitespace-pre-line"},t.leadingDescription),n.createElement("p",{className:"whitespace-pre-line mt-3"},t.description)),n.createElement("div",{className:"col-start-1 col-span-6 md:col-start-6 md:col-span-1"},n.createElement("div",{className:"flex flex-col md:items-end"},n.createElement("div",{className:"md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right"},t.links.map((function(e,t){var r=e.link,a=e.label;return n.createElement("div",{className:"whitespace-no-wrap",key:t},n.createElement(R.d,{appearance:"primary",link:r},a))}))))))))},H=r(7790),q=function(e){var t=e.data;return n.createElement(A.W,null,n.createElement(P.Z,null),n.createElement(z,null),n.createElement(A.v,{verticalSpacing:!1,additionalClasses:"pt-4 md:pt-7"},n.createElement(T.Z,null,"work")),t.allWorksJson.edges.map((function(e,t){return n.createElement(B,{work:e.node,key:t})})),n.createElement("section",{className:"no-js:hidden md:py-4 bg-black bg-gradient-to-b from-grey-darkest"},n.createElement(A.v,null,n.createElement("div",{className:"flex flex-col md:flex-row items-center justify-center"},n.createElement("h2",{className:"mb-4 md:mb-0 md:mr-5 md:-mt-6"},n.createElement("span",{className:"text-4xl md:text-6xl md:text-stroke-white md:text-stroke italic md:ml-4"},"There"),n.createElement("span",{className:"text-4xl ml-4 md:ml-0 block"},"is more")),n.createElement(H.n,{link:"/project-archive"},"project archive")))),n.createElement("section",{className:"bg-grey-darkest-pattern"},n.createElement(A.v,null,n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},n.createElement("div",{className:"col-start-1 col-span-1"},n.createElement(T.Z,{appearance:"primary"},"thoughts")),n.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},t.allWritesJson.edges.map((function(e,t){return n.createElement("div",{key:t,className:0===t?"mt-0":"mt-4 md:mt-7"},n.createElement(R.d,{link:e.node.link,appearance:"primary",size:"large"},e.node.title),n.createElement("small",{className:"block italic text-grey-lighter mt-4"},"— ",e.node.description))})))))),n.createElement("section",{className:"bg-secondary"},n.createElement(A.v,null,n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},n.createElement("div",{className:"col-start-1 col-span-1"},n.createElement(T.Z,null,"about")),n.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},n.createElement("p",null,"I'm a leading JavaScript developer with a focus on unique interfaces and interactions, currently working at ",n.createElement(R.d,{link:"https://artcom.de",appearance:"primary"},"art+com"),", a studio for media installations and spaces."),n.createElement("p",{className:"mt-4"},'In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting custom solutions, mostly with full-stack JavaScript and MQTT based realtime communication.'),n.createElement("p",{className:"mt-4"},"Personally, I do everything possible with Javascript. My research focus at the moment is blending interfaces into spaces with the new WebXR Device API.")),n.createElement("div",{className:"col-start-1 md:col-start-3 col-span-1"},n.createElement("div",{className:"flex flex-col md:items-end"},n.createElement("div",{className:"md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right md:pl-2"},n.createElement("div",null,n.createElement(R.d,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"twitter.com/thomasrutzer",size:"large"},"twitter")),n.createElement("div",null,n.createElement(R.d,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"mailto:thomas@rutzer.de",size:"large"},"mail")),n.createElement("div",null,n.createElement(R.d,{additionalClasses:"whitespace-no-wrap",appearance:"primary",link:"https://github.com/ThomasRutzer",size:"large"},"github")))))))),n.createElement("section",{className:"bg-grey-darkest-pattern"},n.createElement(A.v,null,n.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},n.createElement("div",{className:"col-start-1 col-span-1"},n.createElement(T.Z,{appearance:"primary"},"credits")),n.createElement("div",{className:"col-start-1 md:col-start-2 col-span-1"},n.createElement("p",{className:"mb-2 font-bold"},"images"),t.allWorksJson.edges.map((function(e,t){return n.createElement("div",{key:t,className:0===t?"mt-0":"mt-4"},n.createElement("p",{className:"text-sm text-secondary-lighter"},e.node.title," ",n.createElement("i",null,e.node.subTitle)),n.createElement("ul",null,e.node.images.map((function(e,t){return n.createElement("li",{key:t},e.reference.link&&n.createElement(R.d,{link:e.reference.link,size:"small"},"Fig.",t+1," by ",e.reference.author),!e.reference.link&&n.createElement("p",{className:"text-sm"},"Fig.",t+1," by ",e.reference.author))}))))}))),n.createElement("div",{className:"col-start-1 md:col-start-3 col-span-1"},n.createElement("p",{className:"mb-2 font-bold"},"this site"),n.createElement("ul",null,n.createElement("li",null,n.createElement(R.d,{link:"https://www.gatsbyjs.org/",size:"small"},"Gatsby.js")),n.createElement("li",null,n.createElement(R.d,{link:"https://tailwindcss.com/",size:"small"},"Tailwind.css")),n.createElement("li",null,n.createElement(R.d,{link:"https://animejs.com/",size:"small"},"anime.js")),n.createElement("li",null,n.createElement(R.d,{link:"https://github.com/features/actions",size:"small"},"Github actions")),n.createElement("li",null,n.createElement(R.d,{link:"https://fonts.google.com/specimen/IBM+Plex+Mono",size:"small"},"IBM Plex Mono"))))))))}},7741:function(e,t){"use strict";t.Z=function(){return window&&window.matchMedia("(pointer: coarse)").matches}},906:function(e,t){"use strict";t.Z=function(e,t,r,n,a){return(e-t)*(a-n)/(r-t)+n}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(M){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new j(n||[]);return i._invoke=function(e,t,r){var n=m;return function(a,i){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw i;return _()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=L(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===m)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?h:d,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(M){return{type:"throw",arg:M}}}e.wrap=c;var m="suspendedStart",d="suspendedYield",f="executing",h="completed",p={};function g(){}function v(){}function y(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(O([])));E&&E!==r&&n.call(E,i)&&(w=E);var x=y.prototype=g.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function r(a,i,o,s){var l=u(e[a],e,i);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(m).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(l.arg)}var a;this._invoke=function(e,n){function i(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(i,i):i()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function V(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:_}}function _(){return{value:t,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,v.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(N.prototype),N.prototype[o]=function(){return this},e.AsyncIterator=N,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new N(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(x),l(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(V),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),V(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;V(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-11a68643481b46845b88.js.map