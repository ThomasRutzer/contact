(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8G0I":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);n("ukjK");t.a=function(e){var t=e.items;return a.a.createElement("ul",{className:"featureList pl-2"},t.map((function(e,t){return a.a.createElement("li",{key:t,className:"featureList__item text-sm text-grey-lighter"},e)})))}},QgIm:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.children;return a.a.createElement("h2",{className:"text-2xl"},a.a.createElement("span",null,t),a.a.createElement("span",{className:"text-primary"},"."))}},VKVG:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return Re}));var r=n("q1tI"),a=n.n(r),o=n("jNNy"),l=n("I/Ru"),c=n("nYRv");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?v(e):t}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function x(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,o=t.allowMultipleExpanded,l=void 0!==o&&o,c=t.allowZeroExpanded,s=void 0!==c&&c;i(this,e),u(this,"expanded",void 0),u(this,"allowMultipleExpanded",void 0),u(this,"allowZeroExpanded",void 0),u(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(x(n.expanded),[e]):[e]})})),u(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),u(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),u(this,"getPanelAttributes",(function(e,t){var r=null!=t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),u(this,"getHeadingAttributes",(function(){return{role:"heading"}})),u(this,"getButtonAttributes",(function(e,t){var r=null!=t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),u(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),u(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),u(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=l,this.allowZeroExpanded=s},O=Object(r.createContext)(null),N=function(e){m(n,e);var t=E(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"state",new I({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),u(v(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),u(v(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),u(v(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),u(v(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),u(v(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),u(v(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return d(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(r.createElement)(O.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(r.PureComponent);u(N,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var j,C=function(e){m(n,e);var t=E(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return d(n,[{key:"render",value:function(){return Object(r.createElement)(O.Consumer,null,this.renderChildren)}}]),n}(r.PureComponent),A=function(e){var t=e.className,n=void 0===t?"accordion":t,a=e.allowMultipleExpanded,o=e.allowZeroExpanded,l=e.onChange,c=e.preExpanded,i=g(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(r.createElement)(N,{preExpanded:c,allowMultipleExpanded:a,allowZeroExpanded:o,onChange:l},Object(r.createElement)("div",p({"data-accordion-component":"Accordion",className:n},i)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(j||(j={}));var P=j,_=0;function k(){var e=_;return _+=1,"raa-".concat(e)}var T=/[\u0009\u000a\u000c\u000d\u0020]/g;function S(e){return""!==e&&!T.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var D=Object(r.createContext)(null),R=function(e){m(n,e);var t=E(n);function n(){var e;i(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return u(v(e=t.call.apply(t,[this].concat(o))),"toggleExpanded",(function(){e.props.accordionContext.toggleExpanded(e.props.uuid)})),u(v(e),"renderChildren",(function(t){var n=e.props,a=n.uuid,o=n.dangerouslySetExpanded,l=null!=o?o:t.isItemExpanded(a),c=t.isItemDisabled(a),i=t.getPanelAttributes(a,o),s=t.getHeadingAttributes(a),d=t.getButtonAttributes(a,o);return Object(r.createElement)(D.Provider,{value:{uuid:a,expanded:l,disabled:c,toggleExpanded:e.toggleExpanded,panelAttributes:i,headingAttributes:s,buttonAttributes:d}},e.props.children)})),e}return d(n,[{key:"render",value:function(){return Object(r.createElement)(C,null,this.renderChildren)}}]),n}(r.Component),M=function(e){return Object(r.createElement)(C,null,(function(t){return Object(r.createElement)(R,p({},e,{accordionContext:t}))}))},F=function(e){m(n,e);var t=E(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return d(n,[{key:"render",value:function(){return Object(r.createElement)(D.Consumer,null,this.renderChildren)}}]),n}(r.PureComponent),B=function(e){m(n,e);var t=E(n);function n(){var e;i(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return u(v(e=t.call.apply(t,[this].concat(o))),"instanceUuid",k()),u(v(e),"renderChildren",(function(t){var n=e.props,a=(n.uuid,n.className),o=n.activeClassName,l=(n.dangerouslySetExpanded,g(n,["uuid","className","activeClassName","dangerouslySetExpanded"])),c=t.expanded&&o?o:a;return Object(r.createElement)("div",p({"data-accordion-component":"AccordionItem",className:c},l))})),e}return d(n,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,a=e.dangerouslySetExpanded,o=g(e,["uuid","dangerouslySetExpanded"]);return S(n),o.id&&S(o.id),Object(r.createElement)(M,{uuid:n,dangerouslySetExpanded:a},Object(r.createElement)(F,null,this.renderChildren))}}]),n}(r.Component);function Z(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}u(B,"defaultProps",{className:"accordion__item"}),u(B,"displayName",P.AccordionItem);var H="40",L="35",K="13",q="36",z="37",V="39",J="32",U="38",W=function(e){var t=e.toggleExpanded,n=e.className,a=void 0===n?"accordion__button":n,o=g(e,["toggleExpanded","className"]);return o.id&&S(o.id),Object(r.createElement)("div",p({className:a},o,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n,r,a=e.which.toString();if(a!==K&&a!==J||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(a){case q:e.preventDefault(),n=e.target,(r=(Z(n)||[])[0])&&r.focus();break;case L:e.preventDefault(),function(e){var t=Z(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case z:case U:e.preventDefault(),function(e){var t=Z(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case V:case H:e.preventDefault(),function(e){var t=Z(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},G=function(e){return Object(r.createElement)(F,null,(function(t){var n=t.toggleExpanded,a=t.buttonAttributes;return Object(r.createElement)(W,p({toggleExpanded:n},e,a))}))},Q=function(e){m(n,e);var t=E(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(v(e=t.call.apply(t,[this].concat(a))),"ref",void 0),u(v(e),"setRef",(function(t){e.ref=t})),e}return d(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(r.createElement)("div",p({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”\n\n")}}]),n}(r.PureComponent);u(Q,"defaultProps",{className:"accordion__heading","aria-level":3});var Y=function(e){return Object(r.createElement)(F,null,(function(t){var n=t.headingAttributes;return e.id&&S(e.id),Object(r.createElement)(Q,p({},e,n))}))};Y.displayName=P.AccordionItemHeading;var $=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,a=e.id,o=g(e,["className","id"]),l=function(e){var t=e.panelAttributes;return a&&S(a),Object(r.createElement)("div",p({"data-accordion-component":"AccordionItemPanel",className:n},o,t))};return Object(r.createElement)(F,null,l)},X=function(e){var t=e.children;return _=0,a.a.createElement(A,{allowZeroExpanded:!0},t)},ee=n("9eSz"),te=n.n(ee),ne=function(e){var t=e.src,n=e.alt,r=e.className,o=void 0===r?"accordion-item__image":r;return a.a.createElement("div",{className:""+o},a.a.createElement(te.a,{alt:n,fixed:t}))},re=function(e){var t=e.children,n=e.title,r=e.subTitle,o=e.imgSrc,l=e.imgAlt;return a.a.createElement(B,{activeClassName:"accordion-item accordion-item--expanded",className:"accordion-item"},a.a.createElement("div",{className:"accordion-item__content-wrapper flex flex-col"},a.a.createElement(Y,{className:"accordion-item__heading"},a.a.createElement(G,{className:" accordion-item__title flex flex-row items-center"},a.a.createElement(ne,{alt:l,src:o,className:"accordion-item__image"}),a.a.createElement("div",{className:"ml-4 -mt-3"},a.a.createElement("h2",{className:"text-3xl md:text-5xl md:text-stroke md:text-stroke-white"},n),a.a.createElement("h3",null,r)))),a.a.createElement($,{className:"accordion-item__panel py-3"},t)))},ae=n("6zjD"),oe=n("8G0I");function le(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var ce=le("Tab"),ie=le("TabList"),se=le("TabPanel");function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return ce(e)||ie(e)||se(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(r.cloneElement)(e,ue(ue({},e.props),{},{children:fe(e.props.children,t)})):e}))}function me(e,t){return r.Children.forEach(e,(function(e){null!==e&&(ce(e)||se(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(ie(e)&&t(e),me(e.props.children,t)))}))}function be(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=be(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var he,ge=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=be(e))&&(r&&(r+=" "),r+=t);return r},ve=0;function ye(){return"react-tabs-"+ve++}function Ee(e){var t=0;return me(e,(function(e){ce(e)&&t++})),t}function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function we(e){return e&&"getAttribute"in e}function Ie(e){return we(e)&&"tab"===e.getAttribute("role")}function Oe(e){return we(e)&&"true"===e.getAttribute("aria-disabled")}try{he=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(Me){he=!1}var Ne=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props.direction;if(t.isTabFromContainer(e.target)){var r=t.props.selectedIndex,a=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(a=!0,o=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(r="rtl"===n?t.getNextTab(r):t.getPrevTab(r),a=!0,o=!0):39===e.keyCode||40===e.keyCode?(r="rtl"===n?t.getPrevTab(r):t.getNextTab(r),a=!0,o=!0):35===e.keyCode?(r=t.getLastTab(),a=!0,o=!0):36===e.keyCode&&(r=t.getFirstTab(),a=!0,o=!0),a&&e.preventDefault(),o&&t.setSelected(r,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(Oe(n))return;var r=[].slice.call(n.parentNode.children).filter(Ie).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=o.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!Oe(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!Oe(this.getTab(r)))return r;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!Oe(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!Oe(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!Oe(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!Oe(this.getTab(e)))return e;return null},l.getTabsCount=function(){return Ee(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return me(e,(function(e){se(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,n=this.props,o=n.children,l=n.disabledTabClassName,c=n.focus,i=n.forceRenderTabPanel,s=n.selectedIndex,d=n.selectedTabClassName,u=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var p=this.tabIds.length-this.getTabsCount();p++<0;)this.tabIds.push(ye()),this.panelIds.push(ye());return fe(o,(function(n){var o=n;if(ie(n)){var p=0,f=!1;he&&(f=a.a.Children.toArray(n.props.children).filter(ce).some((function(t,n){return document.activeElement===e.getTab(n)}))),o=Object(r.cloneElement)(n,{children:fe(n.props.children,(function(t){var n="tabs-"+p,a=s===p,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[p],panelId:e.panelIds[p],selected:a,focus:a&&(c||f)};return d&&(o.selectedClassName=d),l&&(o.disabledClassName=l),p++,Object(r.cloneElement)(t,o)}))})}else if(se(n)){var m={id:e.panelIds[t],tabId:e.tabIds[t],selected:s===t};i&&(m.forceRender=i),u&&(m.selectedClassName=u),t++,o=Object(r.cloneElement)(n,m)}return o}))},l.isTabFromContainer=function(e){if(!Ie(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,n=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return a.a.createElement("div",xe({},o,{className:ge(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},o}(r.Component);Ne.defaultProps={className:"react-tabs",focus:!1};var je=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,o=n.state.mode;if("function"!=typeof a||!1!==a(e,t,r)){var l={focus:"keydown"===r.type};1===o&&(l.selectedIndex=e),n.setState(l)}},n.state=r.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){return r.copyPropsToState(e,t)},r.getModeFromProps=function(e){return null===e.selectedIndex?1:0},r.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var a={focus:n,mode:r.getModeFromProps(e)};if(1===a.mode){var o=Ee(e.children)-1,l=null;l=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,a.selectedIndex=l}return a},r.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","defaultIndex","defaultFocus"])),r=this.state,o=r.focus,l=r.selectedIndex;return n.focus=o,n.onSelect=this.handleSelected,null!=l&&(n.selectedIndex=l),a.a.createElement(Ne,n,t)},r}(r.Component);function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}je.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},je.tabsRole="Tabs";var Ae=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]);return a.a.createElement("ul",Ce({},r,{className:ge(n),role:"tablist"}),t)},r}(r.Component);function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Ae.defaultProps={className:"react-tabs__tab-list"},Ae.tabsRole="TabList";var _e=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},o.render=function(){var e,t=this,n=this.props,r=n.children,o=n.className,l=n.disabled,c=n.disabledClassName,i=(n.focus,n.id),s=n.panelId,d=n.selected,u=n.selectedClassName,p=n.tabIndex,f=n.tabRef,m=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return a.a.createElement("li",Pe({},m,{className:ge(o,(e={},e[u]=d,e[c]=l,e)),ref:function(e){t.node=e,f&&f(e)},role:"tab",id:i,"aria-selected":d?"true":"false","aria-disabled":l?"true":"false","aria-controls":s,tabIndex:p||(d?"0":null)}),r)},r}(r.Component);function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}_e.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},_e.tabsRole="Tab";var Te=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.children,r=t.className,o=t.forceRender,l=t.id,c=t.selected,i=t.selectedClassName,s=t.tabId,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return a.a.createElement("div",ke({},d,{className:ge(r,(e={},e[i]=c,e)),role:"tabpanel",id:l,"aria-labelledby":s}),o||c?n:null)},r}(r.Component);Te.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},Te.tabsRole="TabPanel";var Se=function(e){var t=e.children,n=e.defaultIndex;return a.a.createElement(je,{defaultIndex:n,className:"tabs"},a.a.createElement(Ae,{className:"tabs__tab-list"},t.map((function(e,t){return a.a.createElement(_e,{key:t,className:"tabs__tab",selectedClassName:"tabs__tab--selected"},e.props.label)}))),t.map((function(e,t){return a.a.createElement(Te,{key:t,className:"tabs__tab-panel",selectedClassName:"tabs__tab-panel--selected"},e.props.children)})))},De=n("QgIm"),Re=(t.default=function(e){var t=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"all works"}),a.a.createElement(l.b,null,a.a.createElement(c.a,{imgPath:t.header.childImageSharp.fluid,title:"(Almost) everything I design & code down the road"}),a.a.createElement(l.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(De.a,{appearance:"primary"},"by year")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},a.a.createElement(Se,{defaultIndex:Math.floor(Math.random()*t.allWorksJson.group.length-1)+1},t.allWorksJson.group.map((function(e,t){return a.a.createElement("section",{key:t,label:""+e.edges[0].node.year},a.a.createElement(X,null,e.edges.map((function(e,t){return a.a.createElement(re,{key:t,imgSrc:e.node.fields.teaserImageAsset.childImageSharp.fixed,imgAlt:e.node.teaserImage.alt,subTitle:e.node.subTitle,title:e.node.title},a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-project-archive-descr gap-2 md:gap-4 leading-7"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement("span",{className:"text-tertiary-lighter block text-sm"},"key facts"),a.a.createElement(oe.a,{items:e.node.features})),a.a.createElement("div",{className:"md:col-start-2 md:col-span-2"},e.node.teaserDescription),a.a.createElement("div",{className:"md:col-start-4 md:col-span-1"},e.node.links.map((function(e,t){var n=e.link,r=e.label;return a.a.createElement("div",{className:"whitespace-no-wrap",key:t},a.a.createElement(ae.a,{appearance:"primary",link:n},r))})))))}))))})))))),a.a.createElement("section",{className:"bg-grey-darkest-pattern"},a.a.createElement(l.a,null,a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},a.a.createElement("div",{className:"col-start-1 col-span-1"},a.a.createElement(De.a,{appearance:"primary"},"credits")),a.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},a.a.createElement("p",{className:"mb-2 font-bold"},"teaser images"),t.allWorksJson.group.map((function(e,t){return a.a.createElement("ul",{key:t,className:"text-sm"},a.a.createElement("li",{className:"text-tertiary-lighter mb-1"},e.edges[0].node.year),e.edges.map((function(e,n){return a.a.createElement("li",{key:n+t,className:"mb-2 block"},e.node.teaserImage.reference.link&&a.a.createElement(ae.a,{link:e.node.teaserImage.reference.link,size:"small"},e.node.title+" "+e.node.subTitle," by ",e.node.teaserImage.reference.author),!e.node.teaserImage.reference.link&&e.node.title+" "+e.node.subTitle+" "+e.node.teaserImage.reference.link+"by"+e.node.teaserImage.reference.author)})))}))))))))},"1279961047")},nYRv:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("9eSz"),l=n.n(o),c=n("6zjD"),i=n("I/Ru"),s=function(){return a.a.createElement("header",null,a.a.createElement(i.a,{variant:"large"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(c.b,{link:"/"},a.a.createElement("svg",{className:"external-link__icon transform -rotate-90 mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs"},a.a.createElement("path",{d:"M7 17l9.2-9.2M17 17V7H7"})),"Go to start view")))))};t.a=function(e){var t=e.imgPath,n=e.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(i.a,{additionalClasses:"flex items-end overflow-hidden"},a.a.createElement("div",{className:"absolute top-0 left-0 r-8 w-full h-full"},a.a.createElement(l.a,{className:"w-full h-full",objectFit:"cover",fluid:t})),a.a.createElement("h1",{className:"relative text-4xl md:text-5xl text-primary max-w-screen-md z-10"},n)))}},ukjK:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-project-archive-js-4fe87319f24e1dd6419e.js.map