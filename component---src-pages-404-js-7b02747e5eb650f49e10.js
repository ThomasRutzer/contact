(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(180),i=(n(99),n(67),n(42),n(100),n(203),n(41),n(8)),o=n.n(i),s=n(184),c=n(43),u=n.n(c),m=n(164),d=n.n(m),p=n(165),f=n.n(p),h=function(e){var t=e.symbol,n=e.evaluated;return r.a.createElement("div",{className:f.a.symbol+" "+(n?f.a.evaluated:"")},t)},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).$symbols=r.a.createRef(),n.state={complete:null},window.addEventListener("resize",n.reset.bind(u()(n))),n}o()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e){!e.spin&&this.props.spin&&(this.reset(),this.startSpinning())},n.componentWillUnmount=function(){window.removeEventListener("resize",this.reset.bind(this))},n.reset=function(){this.setState({complete:!1}),Object(s.a)({targets:this.$symbols.current,translateY:0,duration:0})},n.startSpinning=function(){var e=this;Object(s.a)({targets:this.$symbols.current,translateY:"-"+this.$symbols.current.offsetHeight/3*(this.props.symbols.length-3)+"px",duration:2e3,easing:"easeInOutQuad",delay:500*this.props.slotIndex,complete:function(){e.setState({complete:!0},e.props.evaluate(e.props.slotIndex,e.props.symbols[e.props.symbols.length-2]))}})},n.render=function(){var e=this;return r.a.createElement("div",{ref:this.$symbols,className:d.a.slot},this.props.symbols.map(function(t,n){return r.a.createElement(h,{key:n,evaluated:e.state.complete&&n===e.props.symbols.length-2,symbol:t})}))},t}(r.a.Component),y=n(166),b=n.n(y),g=n(167),E=n.n(g),k=function(e){return r.a.createElement("button",{className:E.a.secondary,onClick:e.onClick,disabled:e.disabled},e.label)},S=["0","1"],N=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isSpinning:!1,jackpot:!1},n.slots=[{symbols:[n.getRandomSymbol(),"4",n.getRandomSymbol()],evaluation:null},{symbols:[n.getRandomSymbol(),"0",n.getRandomSymbol()],evaluation:null},{symbols:[n.getRandomSymbol(),"4",n.getRandomSymbol()],evaluation:null}],n.prepare(!0),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.spin()},n.spin=function(){this.state.isSpinning||this.setState({isSpinning:!0,jackpot:!1})},n.storeResult=function(e,t){return this.slots[e].evaluation=t,0===this.slots.filter(function(e){return null===e.evaluation}).length?(this.setState({isSpinning:!1,jackpot:this.evaluateJackpot()}),this.prepare(!1)):null},n.evaluateJackpot=function(){var e=this;return!!this.slots.every(function(t){return t.evaluation===e.slots[0].evaluation})&&(Object(s.a)({targets:document.body,duration:1200,keyframes:[{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"},{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"}],easing:"easeInOutQuad",complete:function(){document.body.removeAttribute("style")}}),!0)},n.prepare=function(e){var t=this;this.slots=this.slots.map(function(n){var a=e?[].concat(t.fillUpSlot(19),n.symbols.slice(n.symbols.length-3,n.symbols.length)):[].concat(n.symbols.slice(n.symbols.length-3,n.symbols.length),t.fillUpSlot(19));return Object.assign({},n,{evaluation:null,symbols:a})})},n.fillUpSlot=function(e){var t=this;return Array.from(Array(e).keys()).reduce(function(e){return[].concat(e,[t.getRandomSymbol()])},[])},n.getRandomSymbol=function(){return S[Math.floor(Math.random()*S.length)]},n.render=function(){var e=this;return r.a.createElement("div",{className:b.a.wrapper,"aria-hidden":!0},r.a.createElement("div",{className:b.a.slotMachine},this.slots.map(function(t,n){return r.a.createElement(v,{key:n,slotIndex:n,spin:e.state.isSpinning,evaluate:e.storeResult.bind(e),jackpot:e.state.jackpot,symbols:t.symbols})})),r.a.createElement("div",{className:b.a.cta},r.a.createElement(k,{disabled:this.state.isSpinning,onClick:this.state.isSpinning?null:this.spin.bind(this),label:"Spin to win!"})))},t}(r.a.Component),w=n(185),R=n(182),x=n(168),C=n.n(x),j=function(e){var t=e.children,n=e.size;return r.a.createElement("div",{className:C.a.container+" "+(n?C.a[n]:null)},t)},L=(n(189),n(177)),A=n(169),q=n.n(A),T=function(e){return r.a.createElement(L.a,{className:q.a.link,to:e.to},e.label)},D={display:"flex",flexDirection:"column",height:"calc(100vh - 140px)"},I={width:"400px",maxWidth:"100%",margin:"0 auto",opacity:"0.2"};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"404 — Too bad"}),r.a.createElement(R.a,null,r.a.createElement("div",{style:D},r.a.createElement(j,{size:"small"},r.a.createElement(w.a,{center:!0},"Too bad ",r.a.createElement("br",null)," — I couldn't find what you were looking for. Go"," ",r.a.createElement(T,{to:"/",label:"home"})," or try your luck."),r.a.createElement("hr",{style:I})),r.a.createElement(N,null))))}},177:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),l=n(5),i=n.n(l),o=n(40),s=n.n(o);n.d(t,"a",function(){return s.a});n(178);var c=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,l=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,a=e.render,l=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||l,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},178:function(e,t,n){var a;e.exports=(a=n(179))&&a.default||a},179:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),l=n(5),i=n.n(l),o=n(65),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},180:function(e,t,n){"use strict";var a=n(181),r=n(0),l=n.n(r),i=n(183),o=n.n(i),s=n(5),c=n.n(s),u=n(177),m=function(e){var t=e.title,n=void 0===t?null:t,r=e.description,i=void 0===r?null:r;return l.a.createElement(u.b,{query:"2714768346",render:function(e){var t=e.site.siteMetadata,a=t.defaultTitle,r=t.defaultDescription,s={title:n||a,description:i||r};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:s.title},l.a.createElement("meta",{name:"description",content:s.description})))},data:a})};m.propTypes={title:c.a.string,description:c.a.string},t.a=m},181:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Hay! I am thomas — a creative developer and foo/bar",defaultDescription:"default github.io user page of Thomas Rutzer"}}}}},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(158),i=n.n(l),o=n(177),s=n(159),c=n.n(s),u=function(e){return r.a.createElement("footer",{className:c.a.footer},r.a.createElement("ul",{className:c.a.footerList},r.a.createElement("li",null,r.a.createElement(o.a,{className:c.a.footerLink,to:"/legal/",activeClassName:c.a.footerLinkActive},"Legal notice"))))},m=n(160),d=n.n(m),p=function(e){return r.a.createElement("header",{className:d.a.header},r.a.createElement("ul",{className:d.a.headerList},r.a.createElement("li",null,r.a.createElement(o.a,{className:d.a.headerLink,to:"/",activeClassName:d.a.headerLinkActive},"start"))))};t.a=function(e){var t=e.children;e.seo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.layoutWrapper},r.a.createElement(p,null),t,r.a.createElement(u,null)))}},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(161),i=n.n(l);t.a=function(e){return r.a.createElement("p",{className:i.a.copy+" "+(e.center?i.a.center:null)},e.children)}},203:function(e,t,n){"use strict";var a=n(19),r=n(9),l=n(32),i=n(96),o=n(97),s=n(17),c=n(204),u=n(98);r(r.S+r.F*!n(66)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,m,d=l(e),p="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,v=void 0!==h,y=0,b=u(d);if(v&&(h=a(h,f>2?arguments[2]:void 0,2)),null==b||p==Array&&o(b))for(n=new p(t=s(d.length));t>y;y++)c(n,y,v?h(d[y],y):d[y]);else for(m=b.call(d),n=new p;!(r=m.next()).done;y++)c(n,y,v?i(m,h,[r.value,y],!0):r.value);return n.length=y,n}})},204:function(e,t,n){"use strict";var a=n(12),r=n(31);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-pages-404-js-7b02747e5eb650f49e10.js.map