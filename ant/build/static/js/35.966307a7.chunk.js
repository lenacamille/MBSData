(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1236:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(1210),c=a(115),r=a(9),m=a.n(r);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&(a[n[l]]=e[n[l]])}return a},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).apply(this,arguments))}var a,l,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n["Component"]),a=t,(l=[{key:"render",value:function(){var e,t,a=this.props,l=a.prefixCls,i=a.className,c=a.color,r=void 0===c?"":c,s=a.children,d=a.pending,p=a.dot,b=v(a,["prefixCls","className","color","children","pending","dot"]),E=m()((u(e={},"".concat(l,"-item"),!0),u(e,"".concat(l,"-item-pending"),d),e),i),N=m()((u(t={},"".concat(l,"-item-head"),!0),u(t,"".concat(l,"-item-head-custom"),p),u(t,"".concat(l,"-item-head-").concat(r),!0),t));return n.createElement("li",o({},b,{className:E}),n.createElement("div",{className:"".concat(l,"-item-tail")}),n.createElement("div",{className:N,style:{borderColor:/blue|red|green/.test(r)?void 0:r}},p),n.createElement("div",{className:"".concat(l,"-item-content")},s))}}])&&d(a.prototype,l),i&&d(a,i),t}();N.defaultProps={prefixCls:"ant-timeline",color:"blue",pending:!1};var f=a(2);function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function x(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&(a[n[l]]=e[n[l]])}return a},S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,O(t).apply(this,arguments))}var a,l,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,n["Component"]),a=t,(l=[{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,l=t.pending,i=void 0===l?null:l,c=t.pendingDot,r=t.children,s=t.className,o=t.reverse,u=t.mode,d=P(t,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),p="boolean"===typeof i?null:i,b=m()(a,(q(e={},"".concat(a,"-pending"),!!i),q(e,"".concat(a,"-reverse"),!!o),q(e,"".concat(a,"-").concat(u),!!u),e),s),E=i?n.createElement(N,{pending:!!i,dot:c||n.createElement(f.a,{type:"loading"})},p):null,v=(o?[E].concat(g(n.Children.toArray(r).reverse())):[].concat(g(n.Children.toArray(r)),[E])).filter(function(e){return!!e}),y=n.Children.count(v),x="".concat(a,"-item-last"),w=n.Children.map(v,function(e,t){return n.cloneElement(e,{className:m()([e.props.className,!o&&i?t===y-2?x:"":t===y-1?x:"","alternate"===u?"".concat(a,t%2===0?"-item-left":"-item-right"):"right"===u?"".concat(a,"-item-right"):""])})});return n.createElement("ul",h({},d,{className:b}),w)}}])&&x(a.prototype,l),i&&x(a,i),t}();S.Item=N,S.defaultProps={prefixCls:"ant-timeline",reverse:!1,mode:""};var k=S,C=function(){return l.a.createElement("div",{className:"box box-default"},l.a.createElement("div",{className:"box-header"},"Color"),l.a.createElement("div",{className:"box-body"},l.a.createElement(k,null,l.a.createElement(k.Item,{color:"green"},"Create a services site 2015-09-01"),l.a.createElement(k.Item,{color:"green"},"Create a services site 2015-09-01"),l.a.createElement(k.Item,{color:"red"},l.a.createElement("p",null,"Solve initial network problems 1"),l.a.createElement("p",null,"Solve initial network problems 2"),l.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),l.a.createElement(k.Item,null,l.a.createElement("p",null,"Technical testing 1"),l.a.createElement("p",null,"Technical testing 2"),l.a.createElement("p",null,"Technical testing 3 2015-09-01")))))},I=function(){return l.a.createElement("div",{className:"box box-default"},l.a.createElement("div",{className:"box-header"},"Custom"),l.a.createElement("div",{className:"box-body"},l.a.createElement(k,null,l.a.createElement(k.Item,null,"Create a services site 2015-09-01"),l.a.createElement(k.Item,null,"Solve initial network problems 2015-09-01"),l.a.createElement(k.Item,{dot:l.a.createElement(f.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),l.a.createElement(k.Item,null,"Network problems being solved 2015-09-01"))))},_=function(){return l.a.createElement("div",{className:"container-fluid no-breadcrumb container-mw-md chapter"},l.a.createElement("article",{className:"article"},l.a.createElement("h2",{className:"article-title"},"Timeline"),l.a.createElement(c.a,{type:"bottom",className:"ui-animate"},l.a.createElement("div",{key:"1",className:"mb-3"},l.a.createElement(C,null)),l.a.createElement("div",{key:"2",className:"mb-3"},l.a.createElement(I,null)))))},A=a(1203),T=function(){return l.a.createElement("div",{className:"container-fluid container-mw-xl py-3"},l.a.createElement("section",{className:"ui-timeline"},l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-caption"},l.a.createElement("button",{className:"btn btn-primary btn-block"},"Today"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"3 min ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-info"},l.a.createElement(f.a,{type:"camera"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-primary"},"Go hiking"),l.a.createElement("p",null,"Consectetur adipisicing elit. Error, accusantium debitis voluptatem dolore excepturi ducimus fugiat nulla perspiciatis quo ipsum non eligendi nisi veniam maxime in quas atque omnis cumque!"))))),l.a.createElement("article",{className:"tl-item alt"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"1 hour ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-warning"},l.a.createElement(f.a,{type:"shop"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-danger"},"Buy some toys"),l.a.createElement("p",null,"Ullam, commodi, modi, impedit nostrum odio sit odit necessitatibus accusantium enim voluptates culpa cupiditate cum pariatur a recusandae tenetur aspernatur at beatae."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"3 hours ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-success"},l.a.createElement(f.a,{type:"camera"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-warning"},"Soluta nihil"),l.a.createElement("img",{src:"assets/images-demo/assets/600_400-4.jpg",className:"rounded",alt:"cover"}),l.a.createElement("p",null,"Incidunt, molestias odio soluta nihil accusantium sit nostrum doloremque. Recusandae, ullam, odio consequatur facere totam reiciendis similique dicta explicabo!"))))),l.a.createElement("article",{className:"tl-item alt"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"7 hours ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-danger"},l.a.createElement(f.a,{type:"check"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-success"},"Odio sit odit necessitatibus"),l.a.createElement("img",{src:"assets/images-demo/assets/600_400-1.jpg",className:"rounded",alt:"cover"}),l.a.createElement("p",null,"Ullam, commodi, modi, impedit nostrum odio sit odit necessitatibus accusantium enim voluptates culpa cupiditate cum pariatur a recusandae tenetur aspernatur at beatae."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"10 hours ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-primary"},l.a.createElement(f.a,{type:"video-camera"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-info"},"Accusantium sint"),l.a.createElement("p",null,"Ipsam, minus, quam, sit officiis accusantium sint voluptates voluptatibus minima cum non quos corrupti dolorem eligendi modi eius magnam unde!"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-caption"},l.a.createElement("button",{className:"btn btn-danger btn-block"},"Yesterday"))))),l.a.createElement("article",{className:"tl-item alt"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"8:30 PM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-warning"},l.a.createElement(f.a,{type:"message"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title"},"Enim asperiores facere"),l.a.createElement("p",null,"Odit, iusto, dolorem, aut ipsum rem atque enim asperiores facere tempore explicabo omnis corporis hic! Molestias, dolores, iure esse at illo aliquam temporibus in eum cupiditate magni velit eveniet unde facilis quisquam numquam nihil atque tempore vitae porro maxime repellendus quas a sit repellat delectus expedita nam natus fugiat ut ipsam eaque voluptates omnis ratione?"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"7:00 PM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-success"},l.a.createElement(f.a,{type:"folder"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-warning"},"Illum veniam atque"),l.a.createElement("p",null,"Illum veniam atque iste voluptatem eos saepe quisquam aperiam voluptatum sunt."))))),l.a.createElement("article",{className:"tl-item alt"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"12:55 PM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-danger"},l.a.createElement(f.a,{type:"message"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-success"},"Voluptas molestias"),l.a.createElement("p",null,"At, veniam, officia pariatur voluptas molestias nobis distinctio quo temporibus! Nisi, fugit, ipsum, veritatis, optio consectetur nam molestiae quidem placeat deleniti animi ad nobis iure modi eius recusandae odio adipisci nesciunt."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"10:13 AM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-primary"},l.a.createElement(f.a,{type:"mail"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-info"},"Nulla magni sequi"),l.a.createElement("p",null,"Laborum, ducimus, perferendis nulla magni sequi cumque nisi eum praesentium omnis voluptas id molestias adipisci accusamus nobis totam. Odit, hic suscipit necessitatibus quos"))))),l.a.createElement("article",{className:"tl-item alt"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"9:10 AM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-info"},l.a.createElement(f.a,{type:"gift"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-primary"},"Sed cumque temporibus"),l.a.createElement("p",null,"Deserunt sed cumque temporibus. Doloribus, iste, sit recusandae fugiat assumenda ea magni at doloremque ipsum amet molestias error mollitia maxime ad alias eos id cumque corporis placeat nisi a quaerat nemo magnam ab numquam ratione facere dolorum. Cumque, dolores, sint molestiae eaque quibusdam illo error!")))))))},M=function(){return l.a.createElement("div",{className:"container-fluid container-mw-md py-3"},l.a.createElement("section",{className:"ui-timeline ui-timline-left"},l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-caption"},l.a.createElement("button",{className:"btn btn-primary btn-block"},"Today"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"3 min ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-info"},l.a.createElement(f.a,{type:"camera"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-primary"},"Go hiking"),l.a.createElement("p",null,"Consectetur adipisicing elit. Error, accusantium debitis voluptatem dolore excepturi ducimus fugiat nulla perspiciatis quo ipsum non eligendi nisi veniam maxime in quas atque omnis cumque!"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"1 hour ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-warning"},l.a.createElement(f.a,{type:"shop"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-danger"},"Buy some toys"),l.a.createElement("p",null,"Ullam, commodi, modi, impedit nostrum odio sit odit necessitatibus accusantium enim voluptates culpa cupiditate cum pariatur a recusandae tenetur aspernatur at beatae."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"3 hours ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-success"},l.a.createElement(f.a,{type:"camera"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-warning"},"Soluta nihil"),l.a.createElement("p",null,"Incidunt, molestias odio soluta nihil accusantium sit nostrum doloremque. Recusandae, ullam, odio consequatur facere totam reiciendis similique dicta explicabo!"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"7 hours ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-danger"},l.a.createElement(f.a,{type:"check"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-success"},"Odio sit odit necessitatibus"),l.a.createElement("p",null,"Ullam, commodi, modi, impedit nostrum odio sit odit necessitatibus accusantium enim voluptates culpa cupiditate cum pariatur a recusandae tenetur aspernatur at beatae."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"10 hours ago"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-primary"},l.a.createElement(f.a,{type:"video-camera"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-info"},"Accusantium sint"),l.a.createElement("p",null,"Ipsam, minus, quam, sit officiis accusantium sint voluptates voluptatibus minima cum non quos corrupti dolorem eligendi modi eius magnam unde!"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-caption"},l.a.createElement("button",{className:"btn btn-danger btn-block"},"Yesterday"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"8:30 PM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-warning"},l.a.createElement(f.a,{type:"message"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title"},"Enim asperiores facere"),l.a.createElement("p",null,"Odit, iusto, dolorem, aut ipsum rem atque enim asperiores facere tempore explicabo omnis corporis hic! Molestias, dolores, iure esse at illo aliquam temporibus in eum cupiditate magni velit eveniet unde facilis quisquam numquam nihil atque tempore vitae porro maxime repellendus quas a sit repellat delectus expedita nam natus fugiat ut ipsam eaque voluptates omnis ratione?"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"7:00 PM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-success"},l.a.createElement(f.a,{type:"folder"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-warning"},"Illum veniam atque"),l.a.createElement("p",null,"Illum veniam atque iste voluptatem eos saepe quisquam aperiam voluptatum sunt."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"12:55 PM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-danger"},l.a.createElement(f.a,{type:"message"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-success"},"Voluptas molestias"),l.a.createElement("p",null,"At, veniam, officia pariatur voluptas molestias nobis distinctio quo temporibus! Nisi, fugit, ipsum, veritatis, optio consectetur nam molestiae quidem placeat deleniti animi ad nobis iure modi eius recusandae odio adipisci nesciunt."))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"10:13 AM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-primary"},l.a.createElement(f.a,{type:"mail"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-info"},"Nulla magni sequi"),l.a.createElement("p",null,"Laborum, ducimus, perferendis nulla magni sequi cumque nisi eum praesentium omnis voluptas id molestias adipisci accusamus nobis totam. Odit, hic suscipit necessitatibus quos"))))),l.a.createElement("article",{className:"tl-item"},l.a.createElement("div",{className:"tl-body"},l.a.createElement("div",{className:"tl-entry"},l.a.createElement("div",{className:"tl-time"},"9:10 AM"),l.a.createElement("div",{className:"tl-icon icon-btn-round icon-btn icon-btn-thin btn-info"},l.a.createElement(f.a,{type:"gift"})),l.a.createElement("div",{className:"tl-content"},l.a.createElement("h4",{className:"tl-title text-primary"},"Sed cumque temporibus"),l.a.createElement("p",null,"Deserunt sed cumque temporibus. Doloribus, iste, sit recusandae fugiat assumenda ea magni at doloremque ipsum amet molestias error mollitia maxime ad alias eos id cumque corporis placeat nisi a quaerat nemo magnam ab numquam ratione facere dolorum. Cumque, dolores, sint molestiae eaque quibusdam illo error!")))))))},D=A.a.TabPane,R=function(){return l.a.createElement("section",{className:"page-with-tabs"},l.a.createElement(c.a,{type:"bottom",className:"ui-animate"},l.a.createElement("div",{key:"1"},l.a.createElement("div",{className:"page-title"},l.a.createElement("h1",null,"Timeline"))),l.a.createElement("div",{key:"2"},l.a.createElement(A.a,{className:"page-tabs",defaultActiveKey:"1"},l.a.createElement(D,{tab:"Two Sides",key:"1"},l.a.createElement(T,null)),l.a.createElement(D,{tab:"Left Sides",key:"2"},l.a.createElement(M,null))))))};t.default=function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement(i.a,{path:"".concat(t.url,"/timeline"),component:_}),l.a.createElement(i.a,{path:"".concat(t.url,"/timeline-lg"),component:R}))}}}]);
//# sourceMappingURL=35.966307a7.chunk.js.map