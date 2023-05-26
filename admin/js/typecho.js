function scrollableEditor(d,h){var t,e=d.css(),n=d.width(),l=null,g=[],c=[],s=500,m=[],o={display:"block",position:"absolute",left:"-99999px",top:"-99999px"},r=$("<div></div>").appendTo(document.body),u=!1;for(t in e)t.match(/^(direction|font-family|font-size|font-style|font-weight|letter-spacing|line-height|text-align|vertical-align|white-space|word-wrap|word-break|word-spacing)$/i)&&(o[t]=e[t]);function a(e){var t=d.val().split("\n"),n=0;r.width(d.width()),c=[];for(var o=0;o<t.length;o++)r.text(t[o]),n+=r.height(),c.push(n);r.html(""),function(e){var r=0;m=[],g=[],$(".line",h).each(function(){var e=$(this),t=e.data("start"),n=e.data("end"),o=e.data("start-original"),e=e.position().top+h.scrollTop();m.push([t,n,e,this]),void 0!==o?(g.push([t,o-1,c[o-1],r,0]),g.push([o,n,c[n],c[o-1],1])):g.push([t,n,c[n],r,1]),r=c[n]});var t=v();e?null!==t&&i(t):i()}(e)}r.css(o),r.css("min-height",o["line-height"]);var f={};function p(e,n){var o,r,a=e.get(0),i=a.id;f[i]!=n&&(f[i]=n,o=performance.now(),r=a.scrollTop,window.requestAnimationFrame(function e(t){f[i]==n&&((t-=o)<s?(a.scrollTo({top:r+t/s*(n-r)}),window.requestAnimationFrame(e)):(a.scrollTo({top:n}),f[i]=-1))}))}function i(e){var t=d.height(),t=(d.innerHeight()-t)/2,n=d.scrollTop()-t,o=h.scrollTop(),r=0,a=null;if(void 0===e){for(var i=0;i<g.length;i++)if(n<=(a=g[i])[2]){r=(n-a[3])*a[4]/(a[2]-a[3]);break}if(a)for(var l=0;l<m.length;l++){u=m[l];if(a[0]>=u[0]&&a[1]<=u[1]){var c=m[l+1]?m[l+1][2]:h.get(0).scrollHeight,s=(0==i?0:u[2])+(c-u[2])*r;p(h,s);break}}}else for(var u,f=0;f<m.length;f++)if(e>=(u=m[f])[0]&&e<=u[1]){(f==m.length-1||u[2]<o||m[f+1][2]>o+h.height())&&h.scrollTop(u[2]);break}}function b(e){var t=$(e),e=t.parent();return 0<t.length&&t.prop("tagName").match(/^(hr|tr)$/i)?t:0<e.length&&"div"==e.prop("tagName").toLowerCase()?t.next():e}function v(){var e=d.val(),t=d.getSelection().start,n=0,o=0,r=null;if(!u)return r;for(;;){if(!(0<=(n=e.indexOf("\n",n))&&n<t))break;o++,n+=1}for(var a=0;a<m.length;a++){var i=m[a];if(o>=i[0]&&o<=i[1]){b(l).removeClass("focus"),b(i[3]).addClass("focus"),l=i[3],r=o;break}}return r}d.on("touch keypress click",v),d.on("focus",function(){u=!0}).on("blur",function(){u=!1,b(l).removeClass("focus")}),d.on("resize",a);var D={editor:[!1,0,i],preview:[!1,0,function(){var e=d.height(),t=(d.innerHeight()-e)/2,n=h.scrollTop(),o=!1;if(!(m.length<=0)){for(var r=0;r<m.length;r++)if(n<m[r][2]){o=!0;break}var a=0<(l=o?m[0<r?r-1:0]:m[m.length-1])[0]?c[l[0]-1]:0,i=c[l[1]],e=o?m[0<r?r:1][2]:h.get(0).scrollHeight,l=(n-l[2])/(e-l[2]);p(d,a+(i-a)*l+t)}}]};return d.on("DOMMouseScroll mousewheel touchmove",function(){D.editor[0]=!0,D.editor[1]=performance.now()}),h.on("DOMMouseScroll mousewheel touchmove",function(){D.preview[0]=!0,D.preview[1]=performance.now()}),setInterval(function(){for(t in d.width()!=n&&(n=d.width(),d.trigger("resize")),D){var e=D[t];e[0]&&100<=performance.now()-e[1]&&(e[0]=!1,e[2]())}},50),a}window.Typecho={insertFileToEditor:function(e,t,n){},uploadFile:function(e){},editorResize:function(e,t){$("#"+e).resizeable({minHeight:100,afterResize:function(e){$.post(t,{size:e})}})},uploadComplete:function(e){}},function(u){u.fn.dropdownMenu=function(n){this.each(function(){var e=this,t=u.extend({menuEl:null,btnEl:null},n);u(t.btnEl,e).click(function(){return u(this).toggleClass("active"),u(t.menuEl,e).toggle(),!1})})},u.fn.resizeable=function(e){var s=u.extend({minHeight:100,afterResize:null},e);return this.each(function(){var o,e=u('<span class="resize"><i></i></span>').insertAfter(this),r=0,a=s.minHeight,n=this;function i(e){var t=c(e).y,n=o+t;return t<=r&&(n-=5),r=t,n=Math.max(a,n),textarea.height(n+"px"),n<a&&l(),!1}function l(e){var t=textarea.outerHeight();u(document).unbind("mousemove",i).unbind("mouseup",l),textarea.css("opacity",1),textarea.focus(),textarea=null,o=null,r=0,s.afterResize&&s.afterResize.call(n,t)}function c(e){return{x:e.clientX+document.documentElement.scrollLeft,y:e.clientY+document.documentElement.scrollTop}}e.bind("mousedown",{el:this},function(e){return textarea=u(e.data.el),textarea.blur(),r=c(e).y,o=textarea.height()-r,textarea.css("opacity",.25),u(document).mousemove(i).mouseup(l),!1})})},u.fn.tableSelectable=function(e){var n=this,o=u.extend({checkEl:null,rowEl:null,selectAllEl:null,actionEl:null},e);function r(e){var e=u(e),t=u(o.checkEl,e),n=t.prop("checked");t.length&&(t.prop("checked",!n),n?e.removeClass("checked"):e.addClass("checked"))}u(o.rowEl,this).each(function(){u(o.checkEl,this).click(function(e){r(u(this).parents(o.rowEl))})}).click(function(e){var t=u(e.toElement||e.target),n=t.prop("tagName").toLowerCase();0<=u.inArray(n,["input","textarea","a","button","i"])&&"checkbox"!=t.attr("type")?e.stopPropagation():r(this)}),u(o.selectAllEl).click(function(){u(this).prop("checked")?u(o.rowEl,n).each(function(){var e=u(this);0<u(o.checkEl,this).prop("checked",!0).length&&e.addClass("checked")}):u(o.rowEl,n).each(function(){var e=u(this);0<u(o.checkEl,this).prop("checked",!1).length&&e.removeClass("checked")})}),u(o.actionEl).click(function(){var e=u(this),t=e.attr("lang");return t&&!confirm(t)||n.parents("form").attr("action",e.attr("href")).submit(),!1})}}($),function(l){l.tableDnD={currentTable:null,dragObject:null,mouseOffset:null,oldY:0,build:function(o){return o=o||{},this.each(function(){var e,t,n;this.tableDnDConfig={onDragStyle:o.onDragStyle,onDropStyle:o.onDropStyle,onDragClass:o.onDragClass||"tDnD_whileDrag",onDrop:o.onDrop,onDragStart:o.onDragStart,scrollAmount:o.scrollAmount||5},l.tableDnD.makeDraggable(this),0==$("tfoot",this).length&&0<$("thead",this).length&&(t=$("thead",this),n=$("th",t).length,e=$('<tfoot class="kit-hidden-mb"><tr><td style="padding:0;height:0;line-height:0;border:none" colspan="'+n+'"></td></tr></tfoot>').insertAfter(t),"tfoot"!=(n=$("tr:last",this)).parent().prop("tagName").toLowerCase()&&(n=(t=$("td",n)).height(),t.height(n-e.outerHeight())))}),l(document).bind("mousemove",l.tableDnD.mousemove).bind("mouseup",l.tableDnD.mouseup),this},makeDraggable:function(t){for(var e=t.rows,n=t.tableDnDConfig,o=0;o<e.length;o++)$(e[o]).hasClass("nodrag")||l(e[o]).mousedown(function(e){if("TD"==e.target.tagName)return l.tableDnD.dragObject=this,l.tableDnD.currentTable=t,l.tableDnD.mouseOffset=l.tableDnD.getMouseOffset(this,e),n.onDragStart&&n.onDragStart(t,this),!1}).css("cursor","move")},mouseCoords:function(e){return e.pageX||e.pageY?{x:e.pageX,y:e.pageY}:{x:e.clientX+document.body.scrollLeft-document.body.clientLeft,y:e.clientY+document.body.scrollTop-document.body.clientTop}},getMouseOffset:function(e,t){t=t||window.event;e=this.getPosition(e),t=this.mouseCoords(t);return{x:t.x-e.x,y:t.y-e.y}},getPosition:function(e){var t=0,n=0;for(0==e.offsetHeight&&(e=e.firstChild);e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return{x:t+=e.offsetLeft,y:n+=e.offsetTop}},mousemove:function(e){if(null!=l.tableDnD.dragObject){var t=l(l.tableDnD.dragObject),n=l.tableDnD.currentTable.tableDnDConfig,o=l.tableDnD.mouseCoords(e),r=o.y-l.tableDnD.mouseOffset.y,e=window.pageYOffset;return document.all&&(void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop)),o.y-e<n.scrollAmount?window.scrollBy(0,-n.scrollAmount):(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-(o.y-e)<n.scrollAmount&&window.scrollBy(0,n.scrollAmount),r!=l.tableDnD.oldY&&(e=r>l.tableDnD.oldY,l.tableDnD.oldY=r,n.onDragClass?t.addClass(n.onDragClass):t.css(n.onDragStyle),(r=l.tableDnD.findDropTargetRow(t,r))&&(e&&l.tableDnD.dragObject!=r?l.tableDnD.dragObject.parentNode.insertBefore(l.tableDnD.dragObject,r.nextSibling):e||l.tableDnD.dragObject==r||l.tableDnD.dragObject.parentNode.insertBefore(l.tableDnD.dragObject,r))),!1}},findDropTargetRow:function(e,t){for(var n=l.tableDnD.currentTable.rows,o=0;o<n.length;o++){var r=n[o],a=this.getPosition(r).y,i=parseInt(r.offsetHeight)/2;if(0==r.offsetHeight&&(a=this.getPosition(r.firstChild).y,i=parseInt(r.firstChild.offsetHeight)/2),a-i<t&&t<a+i){if(r==e)return null;i=l.tableDnD.currentTable.tableDnDConfig;return i.onAllowDrop?i.onAllowDrop(e,r)?r:null:$(r).hasClass("nodrop")?null:r}}return null},mouseup:function(e){var t,n;l.tableDnD.currentTable&&l.tableDnD.dragObject&&(t=l.tableDnD.dragObject,(n=l.tableDnD.currentTable.tableDnDConfig).onDragClass?l(t).removeClass(n.onDragClass):l(t).css(n.onDropStyle),l.tableDnD.dragObject=null,n.onDrop&&n.onDrop(l.tableDnD.currentTable,t),l.tableDnD.currentTable=null)},serialize:function(){if(l.tableDnD.currentTable){for(var e="",t=l.tableDnD.currentTable.id,n=l.tableDnD.currentTable.rows,o=0;o<n.length;o++)0<e.length&&(e+="&"),e+=t+"[]="+n[o].id;return e}return"Error: No Table id set, you need to set an id on your table and every row"}},l.fn.extend({tableDnD:l.tableDnD.build})}($),function(b){var v,e,t,D=(e=document.createElement("input"),t="onpaste",e.setAttribute(t,""),("function"==typeof e[t]?"paste":"input")+".mask"),n=navigator.userAgent,w=/iphone/i.test(n),y=/android/i.test(n);b.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},b.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,d){var o,h,g,m,p;return!n&&0<this.length?b(this[0]).data(b.mask.dataName)():(d=b.extend({placeholder:b.mask.placeholder,completed:null},d),o=b.mask.definitions,h=[],g=p=n.length,m=null,b.each(n.split(""),function(e,t){"?"==t?(p--,g=e):o[t]?(h.push(new RegExp(o[t])),null===m&&(m=h.length-1)):h.push(null)}),this.trigger("unmask").each(function(){var a=b(this),i=b.map(n.split(""),function(e,t){if("?"!=e)return o[e]?d.placeholder:e}),r=a.val();function l(e){for(;++e<p&&!h[e];);return e}function c(e,t){var n,o;if(!(e<0)){for(n=e,o=l(t);n<p;n++)if(h[n]){if(!(o<p&&h[n].test(i[o])))break;i[n]=i[o],i[o]=d.placeholder,o=l(o)}u(),a.caret(Math.max(m,e))}}function e(e){var t,n,o=e.which;8===o||46===o||w&&127===o?(t=(n=a.caret()).begin,(n=n.end)-t==0&&(t=46!==o?function(e){for(;0<=--e&&!h[e];);return e}(t):n=l(t-1),n=46===o?l(n):n),s(t,n),c(t,n-1),e.preventDefault()):27==o&&(a.val(r),a.caret(0,f()),e.preventDefault())}function t(e){var t=e.which,n=a.caret();e.ctrlKey||e.altKey||e.metaKey||t<32||t&&(n.end-n.begin!=0&&(s(n.begin,n.end),c(n.begin,n.end-1)),(n=l(n.begin-1))<p&&(t=String.fromCharCode(t),h[n].test(t)&&(function(e){for(var t,n,o=e,r=d.placeholder;o<p;o++)if(h[o]){if(t=l(o),n=i[o],i[o]=r,!(t<p&&h[t].test(n)))break;r=n}}(n),i[n]=t,u(),n=l(n),y?setTimeout(b.proxy(b.fn.caret,a,n),0):a.caret(n),d.completed&&p<=n&&d.completed.call(a))),e.preventDefault())}function s(e,t){for(var n=e;n<t&&n<p;n++)h[n]&&(i[n]=d.placeholder)}function u(){a.val(i.join(""))}function f(e){var t,n=a.val(),o=-1,r=0;for(pos=0;r<p;r++)if(h[r]){for(i[r]=d.placeholder;pos++<n.length;)if(t=n.charAt(pos-1),h[r].test(t)){i[r]=t,o=r;break}if(pos>n.length)break}else i[r]===n.charAt(pos)&&r!==g&&(pos++,o=r);return e?u():o+1<g?(a.val(""),s(0,p)):(u(),a.val(a.val().substring(0,o+1))),g?r:m}a.data(b.mask.dataName,function(){return b.map(i,function(e,t){return h[t]&&e!=d.placeholder?e:null}).join("")}),a.attr("readonly")||a.one("unmask",function(){a.unbind(".mask").removeData(b.mask.dataName)}).bind("focus.mask",function(){var e;clearTimeout(v),r=a.val(),e=f(),v=setTimeout(function(){u(),e==n.length?a.caret(0,e):a.caret(e)},10)}).bind("blur.mask",function(){f(),a.val()!=r&&a.change()}).bind("keydown.mask",e).bind("keypress.mask",t).bind(D,function(){setTimeout(function(){var e=f(!0);a.caret(e),d.completed&&e==a.val().length&&d.completed.call(a)},0)}),f()}))}})}(jQuery),jQuery.fn.extend({getSelection:function(){var o=this.get(0);return o?(("selectionStart"in o?function(){var e=o.selectionEnd-o.selectionStart;return{start:o.selectionStart,end:o.selectionEnd,length:e,text:o.value.substr(o.selectionStart,e)}}:window.getSelection()&&function(){var e=window.getSelection().getRangeAt(0);return{start:e.startOffset,end:e.endOffset,length:e.endOffset-e.startOffset,text:e.toString()}})||document.selection&&function(){o.focus();var e=document.selection.createRange();if(null===e)return{start:0,end:o.value.length,length:0};var t=o.createTextRange(),n=t.duplicate();return t.moveToBookmark(e.getBookmark()),n.setEndPoint("EndToStart",t),{start:n.text.length,end:n.text.length+e.text.length,length:e.text.length,text:e.text}}||function(){return null})():null},setSelection:function(e,t){var n=this.get(0);n&&(n.setSelectionRange?(n.focus(),n.setSelectionRange(e,t)):n.createTextRange&&((n=n.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select()))},replaceSelection:function(){var e=this.get(0);if(!e)return null;var t=arguments[0]||"";return(("selectionStart"in e?function(){return e.value=e.value.substr(0,e.selectionStart)+t+e.value.substr(e.selectionEnd,e.value.length),this}:document.selection&&function(){return e.focus(),document.selection.createRange().text=t,this})||function(){return e.value+=t,jQuery(e)})()}}),jQuery.cookie=function(e,t,n){if(1<arguments.length&&"[object Object]"!==String(t))return n=jQuery.extend({},n),null==t&&(n.expires=-1),"number"==typeof n.expires&&(o=n.expires,(r=n.expires=new Date).setDate(r.getDate()+o)),t=String(t),document.cookie=[encodeURIComponent(e),"=",n.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("");var o,r=(n=t||{}).raw?function(e){return e}:decodeURIComponent;return(o=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?r(o[1]):null},function(r){var m=r.scrollTo=function(e,t,n){r(window).scrollTo(e,t,n)};function e(e){return"object"==typeof e?e:{top:e,left:e}}m.defaults={axis:"xy",duration:1.3<=parseFloat(r.fn.jquery)?0:1,limit:!0},m.window=function(e){return r(window)._scrollable()},r.fn._scrollable=function(){return this.map(function(){var e=this;if(!(!e.nodeName||-1!=r.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])))return e;e=(e.contentWindow||e).document||e.ownerDocument||e;return/webkit/i.test(navigator.userAgent)||"BackCompat"==e.compatMode?e.body:e.documentElement})},r.fn.scrollTo=function(t,n,g){return"object"==typeof n&&(g=n,n=0),"function"==typeof g&&(g={onAfter:g}),"max"==t&&(t=9e9),g=r.extend({},m.defaults,g),n=n||g.duration,g.queue=g.queue&&1<g.axis.length,g.queue&&(n/=2),g.offset=e(g.offset),g.over=e(g.over),this._scrollable().each(function(){if(null!=t){var l,c=this,s=r(c),u=t,f={},d=s.is("html,body");switch(typeof u){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(u)){u=e(u);break}if(!(u=r(u,this)).length)return;case"object":(u.is||u.style)&&(l=(u=r(u)).offset())}r.each(g.axis.split(""),function(e,t){var n="x"==t?"Left":"Top",o=n.toLowerCase(),r="scroll"+n,a=c[r],i=m.max(c,t);l?(f[r]=l[o]+(d?0:a-s.offset()[o]),g.margin&&(f[r]-=parseInt(u.css("margin"+n))||0,f[r]-=parseInt(u.css("border"+n+"Width"))||0),f[r]+=g.offset[o]||0,g.over[o]&&(f[r]+=u["x"==t?"width":"height"]()*g.over[o])):(o=u[o],f[r]=o.slice&&"%"==o.slice(-1)?parseFloat(o)/100*i:o),g.limit&&/^\d+$/.test(f[r])&&(f[r]=f[r]<=0?0:Math.min(f[r],i)),!e&&g.queue&&(a!=f[r]&&h(g.onAfterFirst),delete f[r])}),h(g.onAfter)}function h(e){s.animate(f,n,g.easing,e&&function(){e.call(this,t,g)})}}).end()},m.max=function(e,t){var n="x"==t?"Width":"Height",o="scroll"+n;if(!r(e).is("html,body"))return e[o]-r(e)[n.toLowerCase()]();t="client"+n,n=e.ownerDocument.documentElement,e=e.ownerDocument.body;return Math.max(n[o],e[o])-Math.min(n[t],e[t])}}(jQuery),jQuery.fn.css2=jQuery.fn.css,jQuery.fn.css=function(){if(arguments.length)return jQuery.fn.css2.apply(this,arguments);for(var e=["font-family","font-size","font-weight","font-style","color","box-sizing","text-transform","text-decoration","letter-spacing","box-shadow","line-height","text-align","vertical-align","direction","background-color","background-image","background-repeat","background-position","background-attachment","opacity","width","height","top","right","bottom","left","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","position","display","visibility","z-index","overflow-x","overflow-y","white-space","clip","float","clear","cursor","list-style-image","list-style-position","list-style-type","marker-offset","word-wrap","word-break","word-spacing"],t=e.length,n={},o=0;o<t;o++)n[e[o]]=jQuery.fn.css2.call(this,e[o]);return n};