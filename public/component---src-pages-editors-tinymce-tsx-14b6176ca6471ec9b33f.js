/*! For license information please see component---src-pages-editors-tinymce-tsx-14b6176ca6471ec9b33f.js.LICENSE.txt */
(self.webpackChunkgatsby_admin_template=self.webpackChunkgatsby_admin_template||[]).push([[309],{402:function(n,t,e){"use strict";e.d(t,{Zb:function(){return E},Ol:function(){return S},iR:function(){return b},eW:function(){return w},UE:function(){return C}});var o,r,i,a,c,d,u,s,l,p,f,h=e(7452),g=e(8216),v=e(7294);function y(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var b=h.ZP.footer(o||(o=y([""]))),m=(0,h.iv)(r||(r=y(["\n  ","\n"])),(function(n){var t=n.theme,e=n.status,o=n.accent;return(0,h.iv)(i||(i=y(["\n    padding: ",";\n    border-bottom: "," "," ",";\n    border-top-left-radius: ",";\n    border-top-right-radius: ",";\n    color: ",";\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n\n    ","\n\n    ","\n    ","\n  "])),t.cardPadding,t.cardDividerWidth,t.cardDividerStyle,t.cardDividerColor,t.cardBorderRadius,t.cardBorderRadius,t.cardHeaderTextColor,t.cardHeaderTextFontFamily,t.cardHeaderTextFontSize,t.cardHeaderTextFontWeight,t.cardHeaderTextLineHeight,g.o3,e&&(0,h.iv)(a||(a=y(["\n        background-color: ",";\n        border-bottom-color: ",";\n        border-bottom-width: 0;\n        color: ",";\n        a,\n        a:hover {\n          color: ",";\n        }\n      "])),t["cardHeader".concat(e,"BackgroundColor")],t["cardHeader".concat(e,"BackgroundColor")],t["cardHeader".concat(e,"TextColor")],t["cardHeader".concat(e,"TextColor")]),o&&"border-radius: 0;")})),C=h.ZP.div(c||(c=y(["\n  ",";\n"])),(function(n){var t=n.theme,e=n.accent,o=n.size;return(0,h.iv)(d||(d=y(["\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    border: "," "," ",";\n    border-radius: ",";\n    box-shadow: ",";\n    color: ",";\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n    margin-bottom: ",";\n\n    ","\n\n    ","\n\n    ","\n\n    & > header {\n      ","\n    }\n    \n    ",",\n    & > footer {\n      padding: ",";\n      border-top: "," "," ",";\n      border-bottom-left-radius: ",";\n      border-bottom-right-radius: ",";\n    }\n  "])),t.cardBackgroundColor,t.cardBorderWidth,t.cardBorderStyle,t.cardBorderColor,t.cardBorderRadius,t.cardShadow,t.cardTextColor,t.cardTextFontFamily,t.cardTextFontSize,t.cardTextFontWeight,t.cardTextLineHeight,t.cardMarginBottom,(0,g.q9)(t.cardScrollbarColor,t.cardScrollbarBackgroundColor,t.cardScrollbarWidth),e&&(0,h.iv)(u||(u=y(["\n        border-top-color: ",";\n        border-top-style: ",";\n        border-top-width: ",";\n      "])),t["cardHeader".concat(e,"BackgroundColor")],t.cardBorderStyle,t.cardBorderRadius),o&&(0,h.iv)(s||(s=y(["\n        height: ",";\n      "])),t["cardHeight".concat(o)]),m,b,t.cardPadding,t.cardDividerWidth,t.cardDividerStyle,t.cardDividerColor,t.cardBorderRadius,t.cardBorderRadius)})),S=h.ZP.header(l||(l=y(["\n  ","\n"])),m),w=h.ZP.div(p||(p=y(["\n  ","\n"])),(function(n){var t=n.theme;return(0,h.iv)(f||(f=y(["\n    padding: ",";\n    overflow: auto;\n    flex: 1;\n    -ms-flex: 1 1 auto;\n    position: relative;\n    ","\n  "])),t.cardPadding,(0,g.q9)(t.cardScrollbarColor,t.cardScrollbarBackgroundColor,t.cardScrollbarWidth))})),E=function(n){return v.createElement(C,n,n.children)}},7650:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var o,r,i=e(7294),a=e(402),c=e(2722),d=e(5697),u=function(){return(u=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},s={onActivate:d.func,onAddUndo:d.func,onBeforeAddUndo:d.func,onBeforeExecCommand:d.func,onBeforeGetContent:d.func,onBeforeRenderUI:d.func,onBeforeSetContent:d.func,onBeforePaste:d.func,onBlur:d.func,onChange:d.func,onClearUndos:d.func,onClick:d.func,onContextMenu:d.func,onCopy:d.func,onCut:d.func,onDblclick:d.func,onDeactivate:d.func,onDirty:d.func,onDrag:d.func,onDragDrop:d.func,onDragEnd:d.func,onDragGesture:d.func,onDragOver:d.func,onDrop:d.func,onExecCommand:d.func,onFocus:d.func,onFocusIn:d.func,onFocusOut:d.func,onGetContent:d.func,onHide:d.func,onInit:d.func,onKeyDown:d.func,onKeyPress:d.func,onKeyUp:d.func,onLoadContent:d.func,onMouseDown:d.func,onMouseEnter:d.func,onMouseLeave:d.func,onMouseMove:d.func,onMouseOut:d.func,onMouseOver:d.func,onMouseUp:d.func,onNodeChange:d.func,onObjectResizeStart:d.func,onObjectResized:d.func,onObjectSelected:d.func,onPaste:d.func,onPostProcess:d.func,onPostRender:d.func,onPreProcess:d.func,onProgressState:d.func,onRedo:d.func,onRemove:d.func,onReset:d.func,onSaveContent:d.func,onSelectionChange:d.func,onSetAttrib:d.func,onSetContent:d.func,onShow:d.func,onSubmit:d.func,onUndo:d.func,onVisualAid:d.func},l=u({apiKey:d.string,id:d.string,inline:d.bool,init:d.object,initialValue:d.string,onEditorChange:d.func,outputFormat:d.oneOf(["html","text"]),value:d.string,tagName:d.string,cloudChannel:d.string,plugins:d.oneOfType([d.string,d.array]),toolbar:d.oneOfType([d.string,d.array]),disabled:d.bool,textareaName:d.string,tinymceScriptSrc:d.string,scriptLoading:d.shape({async:d.bool,defer:d.bool,delay:d.number})},s),p=function(n){return"function"==typeof n},f=function(n){return n in s},h=function(n){return n.substr(2)},g=function(n,t,e,o,r){return function(n,t,e,o,r,i,a){var c=Object.keys(r).filter(f),d=Object.keys(i).filter(f),u=c.filter((function(n){return void 0===i[n]})),s=d.filter((function(n){return void 0===r[n]}));u.forEach((function(n){var t=h(n),o=a[t];e(t,o),delete a[t]})),s.forEach((function(e){var r=o(n,e),i=h(e);a[i]=r,t(i,r)}))}(r,n.on.bind(n),n.off.bind(n),(function(t,e){return function(o){var r;return null===(r=t(e))||void 0===r?void 0:r(o,n)}}),t,e,o)},v=0,y=function(n){var t=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++v+String(t)},b=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},m=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},C=function(){return{listeners:[],scriptId:y("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},S=(o=C(),{load:function(n,t,e,r,i,a){var c=function(){return function(n,t,e,o,r,i){var a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=n,a.src=e,a.async=o,a.defer=r,a.addEventListener("load",(function n(){a.removeEventListener("load",n),i()})),t.head&&t.head.appendChild(a)}(o.scriptId,n,t,e,r,(function(){o.listeners.forEach((function(n){return n()})),o.scriptLoaded=!0}))};o.scriptLoaded?a():(o.listeners.push(a),o.scriptLoading||(o.scriptLoading=!0,i>0?setTimeout(c,i):c()))},reinitialize:function(){o=C()}}),w=function(){var n="undefined"!=typeof window?window:e.g;return n&&n.tinymce?n.tinymce:null},E=(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),k=function(){return(k=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},O=function(n){function t(t){var e,o,r,a=n.call(this,t)||this;return a.handleEditorChange=function(n){var t=a.editor;if(t&&t.initialized){var e=t.getContent();if(e!==a.currentContent&&(a.currentContent=e,p(a.props.onEditorChange))){var o=a.props.outputFormat,r="html"===o?e:t.getContent({format:o});a.props.onEditorChange(r,t)}}},a.initialise=function(){var n=a.elementRef.current;if(n){var t=w();if(!t)throw new Error("tinymce should have been loaded into global scope");var e,o,r=k(k({},a.props.init),{selector:void 0,target:n,readonly:a.props.disabled,inline:a.inline,plugins:(e=a.props.init&&a.props.init.plugins,o=a.props.plugins,m(e).concat(m(o))),toolbar:a.props.toolbar||a.props.init&&a.props.init.toolbar,setup:function(t){a.editor=t,a.bindHandlers({}),a.inline&&!b(n)&&t.once("PostRender",(function(n){t.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&p(a.props.init.setup)&&a.props.init.setup(t)},init_instance_callback:function(n){var t,e,o=a.getInitialValue();a.currentContent=null!==(t=a.currentContent)&&void 0!==t?t:n.getContent(),a.currentContent!==o&&(a.currentContent=o,n.setContent(o),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var r=null!==(e=a.props.disabled)&&void 0!==e&&e;n.setMode(r?"readonly":"design"),a.props.init&&p(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(n)}});a.inline||(n.style.visibility=""),b(n)&&(n.value=a.getInitialValue()),t.init(r)}},a.id=a.props.id||y("tiny-react"),a.elementRef=i.createRef(),a.inline=null!==(r=null!==(e=a.props.inline)&&void 0!==e?e:null===(o=a.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,a.boundHandlers={},a}return E(t,n),t.prototype.componentDidUpdate=function(n){var t,e,o=this;if(this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"==typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"==typeof this.props.value&&this.props.value!==this.currentContent){var r=this.editor;r.undoManager.transact((function(){var n=r.selection.getBookmark(3);r.setContent(o.props.value);try{r.selection.moveToBookmark(n)}catch(t){}}))}if(this.props.disabled!==n.disabled){var i=null!==(e=this.props.disabled)&&void 0!==e&&e;this.editor.setMode(i?"readonly":"design")}}},t.prototype.componentDidMount=function(){var n,t,e,o,r,i;null!==w()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&S.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async)&&void 0!==t&&t,null!==(o=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.defer)&&void 0!==o&&o,null!==(i=null===(r=this.props.scriptLoading)||void 0===r?void 0:r.delay)&&void 0!==i?i:0,this.initialise)},t.prototype.componentWillUnmount=function(){var n=this,t=this.editor;t&&(t.off("change keyup compositionend setcontent",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(e){t.off(e,n.boundHandlers[e])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var n=this.props.tagName,t=void 0===n?"div":n;return i.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return i.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"==typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var n=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+n+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"==typeof this.props.initialValue?this.props.initialValue:"string"==typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(n){var t=this;if(void 0!==this.editor){g(this.editor,n,this.props,this.boundHandlers,(function(n){return t.props[n]}));var e=function(n){return void 0!==n.onEditorChange||void 0!==n.value},o=e(n),r=e(this.props);!o&&r?this.editor.on("change keyup compositionend setcontent",this.handleEditorChange):o&&!r&&this.editor.off("change keyup compositionend setcontent",this.handleEditorChange)}},t.propTypes=l,t.defaultProps={cloudChannel:"5"},t}(i.Component);function x(){return i.createElement(a.Zb,null,i.createElement(c.Z,{title:"Tiny MCE"}),i.createElement("header",null,"Tiny MCE"),i.createElement(a.eW,null,i.createElement(O,{initialValue:"<p>This is the initial content of the editor</p>",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |             alignleft aligncenter alignright alignjustify |             bullist numlist outdent indent | removeformat | help"},onEditorChange:function(n,t){console.log("Content was updated:",n)}})))}}}]);
//# sourceMappingURL=component---src-pages-editors-tinymce-tsx-14b6176ca6471ec9b33f.js.map