/*! For license information please see component---src-pages-extra-components-tabs-tsx-ca305ac943c290afd1cb.js.LICENSE.txt */
(self.webpackChunkgatsby_admin_template=self.webpackChunkgatsby_admin_template||[]).push([[5840],{2017:function(e,n,t){"use strict";var r,o,a,i,l,c,s,b,u=t(7294),d=t(7452),f=t(753);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var m=Object.keys(f.AV),g=(0,d.iv)(r||(r=p(["\n  ","\n"])),(function(e){var n=e.breakPoint,t=e.theme;return n&&Object.keys(n).sort((function(e,n){return m.indexOf(e)-m.indexOf(n)})).map((function(e){return"number"==typeof n[e]?(0,f.bK)(e)(o||(o=p(["\n            flex: 0 0 ","%;\n            max-width: ","%;\n            display: block;"])),100/(0,f.FP)(t)*n[e],100/(0,f.FP)(t)*n[e]):n[e]?(0,f.bK)(e)(a||(a=p(["\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            display: block;"]))):(0,f.bK)(e)(i||(i=p(["display: none;"])))}))})),h=(0,d.iv)(l||(l=p(["\n  ","\n"])),(function(e){var n=e.offset,t=e.theme;return n&&Object.keys(n).map((function(e){return(0,f.bK)(e)(c||(c=p(["\n          margin-",": \n          ","%;"])),"rtl"==t.dir?"right":"left",100/(0,f.FP)(t)*n[e])}))})),v=d.ZP.div(s||(s=p(["\n  ","\n"])),(function(e){var n=e.theme,t=e.first,r=e.last,o=e.order;return(0,d.iv)(b||(b=p(["\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ","px;\n  padding-left: ","px;\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,f.Y_)(n)/2,(0,f.Y_)(n)/2,g,h,t&&"order: -1;",r&&"order: ".concat((0,f.FP)(n)+1,";"),o&&"order: ".concat(o,";"))}));n.Z=function(e){return u.createElement(v,e,e.children)}},7141:function(e,n,t){"use strict";var r,o,a,i,l,c,s,b,u,d,f=t(7294),p=t(7452),m=t(753);function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h=p.ZP.div(r||(r=g(["\n  display: flex;\n  flex-wrap: wrap;\n  ","\n"])),(function(e){return(0,p.iv)(o||(o=g(["\n    margin-right: ","px;\n    margin-left: ","px;\n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  "])),(0,m.Y_)(e.theme)/-2,(0,m.Y_)(e.theme)/-2,e.reverse&&"flex-direction: row-reverse;",e.start&&(0,m.bK)(e.start)(a||(a=g(["\n      justify-content: flex-start;\n    "]))),e.center&&(0,m.bK)(e.center)(i||(i=g(["\n      justify-content: center;\n    "]))),e.end&&(0,m.bK)(e.end)(l||(l=g(["\n      justify-content: flex-end;\n    "]))),e.top&&(0,m.bK)(e.top)(c||(c=g(["\n      align-items: flex-start;\n    "]))),e.middle&&(0,m.bK)(e.middle)(s||(s=g(["\n      align-items: center;\n    "]))),e.bottom&&(0,m.bK)(e.bottom)(b||(b=g(["\n      align-items: flex-end;\n    "]))),e.around&&(0,m.bK)(e.around)(u||(u=g(["\n      justify-content: space-around;\n    "]))),e.between&&(0,m.bK)(e.between)(d||(d=g(["\n      justify-content: space-between;\n    "]))))}));n.Z=function(e){return f.createElement(h,e,e.children)}},2827:function(e,n,t){"use strict";t.d(n,{O:function(){return v},m:function(){return y}});var r,o,a=t(7294),i=t(7452),l=t(8216);function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s=i.ZP.div(r||(r=c(["\n  ","\n"])),(function(e){var n=e.theme,t=e.fullWidth;return(0,i.iv)(o||(o=c(["\n    display: block;\n    background-color: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    .tabs {\n      border-bottom: "," "," ",";\n      display: flex;\n      flex-direction: row;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      ","\n\n      .tab {\n        cursor: pointer;\n        margin-bottom: -1px;\n        text-align: center;\n        position: relative;\n        &.active a::before {\n          display: block;\n        }\n        a {\n          background-color: ",";\n          padding: ",";\n          color: ",";\n          font-family: ",";\n          font-size: ",";\n          font-weight: ",";\n          line-height: ",";\n          text-transform: ",";\n          display: flex;\n          align-items: center;\n          position: relative;\n          text-decoration: none;\n\n          &::before {\n            display: none;\n            position: absolute;\n            content: '';\n            width: 100%;\n            border-radius: 3px;\n            bottom: -2px;\n            left: 0;\n            background-color: ",";\n            height: ",";\n          }\n          .tabs-icon {\n            vertical-align: middle;\n          }\n\n          .tabs-icon + span {\n            margin-",": 0.5rem;\n          }\n        }\n\n        &.active {\n          a {\n            background-color: ",";\n            color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n        &:focus {\n          a {\n            background-color: ",";\n            color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n\n        &:hover {\n          a {\n            color: ",";\n            background-color: ",";\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n        &.disabled {\n          & > * {\n            opacity: 0.5;\n          }\n          cursor: default;\n          pointer-events: none;\n          a {\n            background-color: ",";\n            color: ",";\n            cursor: default;\n            pointer-events: none;\n            &::before {\n              background-color: ",";\n            }\n          }\n        }\n\n        &.responsive {\n          @media screen and (max-width: ",") {\n            a span {\n              display: none;\n            }\n          }\n        }\n      }\n    }\n    .tab-content {\n      flex: 1;\n      -ms-flex: 1 1 auto;\n      overflow: auto;\n      background-color: ",";\n      color: ",";\n      font-family: ",";\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      padding: ",";\n      ","\n    }\n  "])),n.tabsetBackgroundColor,n.tabsetBorderRadius,n.tabsetShadow,n.tabsetDividerWidth,n.tabsetDividerStyle,n.tabsetDividerColor,t&&"justify-content: space-around;",n.tabsetTabBackgroundColor,n.tabsetTabPadding,n.tabsetTabTextColor,n.tabsetTabTextFontFamily,n.tabsetTabTextFontSize,n.tabsetTabTextFontWeight,n.tabsetTabTextLineHeight,n.tabsetTabTextTransform,n.tabsetTabUnderlineColor,n.tabsetTabUnderlineWidth,"rtl"===n.dir?"right":"left",n.tabsetTabActiveBackgroundColor,n.tabsetTabActiveTextColor,n.tabsetTabActiveUnderlineColor,n.tabsetTabFocusBackgroundColor,n.tabsetTabFocusTextColor,n.tabsetTabFocusUnderlineColor,n.tabsetTabHoverTextColor,n.tabsetTabHoverBackgroundColor,n.tabsetTabHoverUnderlineColor,n.tabsetTabDisabledBackgroundColor,n.tabsetTabDisabledTextColor,n.tabsetTabDisabledUnderlineColor,n.tabsetTabTextHideBreakpoint,n.tabsetContentBackgroundColor,n.tabsetContentTextColor,n.tabsetContentTextFontFamily,n.tabsetContentTextFontSize,n.tabsetContentTextFontWeight,n.tabsetContentTextLineHeight,n.tabsetContentPadding,(0,l.q9)(n.tabsetScrollbarColor,n.tabsetScrollbarBackgroundColor,n.tabsetScrollbarWidth))})),b=t(6886),u=t(2851);function d(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||g(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var v=function(e){return a.createElement("div",{className:"tab-content"},e.children)},y=function(e){var n,t=m(a.useState([]),2),r=t[0],o=t[1],i=m(a.useState(null!==(n=e.activeIndex)&&void 0!==n?n:0),2),l=i[0],c=i[1];return a.useEffect((function(){e.activeIndex&&c(e.activeIndex)}),[e.activeIndex]),a.useEffect((function(){var n=[];a.Children.forEach(e.children,(function(e){(e.props.icon||e.props.title)&&n.push(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props))})),o(n)}),[e.children]),a.createElement(s,{className:e.className,style:e.style,fullWidth:e.fullWidth},a.createElement("ul",{className:"tabs"},r.map((function(n,t){var r=["tab"];return t===l&&r.push("active"),n.responsive&&r.push("responsive"),n.disabled&&r.push("disabled"),n.className&&r.push.apply(r,d(n.className.split(" "))),a.createElement("li",{style:n.style,key:t,className:r.join(" "),onClick:function(){return!n.disabled&&function(n){"function"==typeof e.onSelect&&e.onSelect(n),c(n)}(t)}},a.createElement("a",null,n.icon&&a.createElement(u.S5,{icon:n.icon,className:"tabs-icon"}),n.title&&a.createElement("span",null,n.title)),n.badge&&a.createElement(b.Z,{status:n.badge.status,position:n.badge.position},n.badge.title))}))),a.Children.map(e.children,(function(e,n){if(n===l&&e.props.children)return e})))}},4846:function(e,n,t){"use strict";t.r(n);var r=t(2827),o=t(7141),a=t(2017),i=t(402),l=t(7294),c=t(2722);n.default=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{title:"Tabs"}),l.createElement(o.Z,null,l.createElement(a.Z,{breakPoint:{xs:12}},l.createElement(i.Zb,null,l.createElement(r.m,{activeIndex:0,fullWidth:!0},l.createElement(r.O,{title:"Tab 1",icon:"icon ion-ios-home",badge:{status:"Danger",title:"11",position:"topStart"},responsive:!0},l.createElement("h1",null,"Content 1")),l.createElement(r.O,{title:"Tab 2",icon:"icon ion-ios-star-outline",badge:{status:"Info",title:"11",position:"bottomEnd"},responsive:!0},l.createElement("h1",null,"Content 2")),l.createElement(r.O,{title:"Tab 3",icon:"icon ion-ios-switch",badge:{status:"Success",title:"11",position:"topStart"},responsive:!0},l.createElement("h1",null,"Content 3")))))))}}}]);
//# sourceMappingURL=component---src-pages-extra-components-tabs-tsx-ca305ac943c290afd1cb.js.map