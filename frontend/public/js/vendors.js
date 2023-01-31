if(function(t,e){var i,n=t.jQuery||t.Cowboy||(t.Cowboy={})
n.throttle=i=function(t,i,o,s){function r(){function n(){l=+new Date,o.apply(c,d)}function r(){a=e}var c=this,h=+new Date-l,d=arguments
s&&!a&&n(),a&&clearTimeout(a),s===e&&h>t?n():i!==!0&&(a=setTimeout(s?r:n,s===e?t-h:t))}var a,l=0
return"boolean"!=typeof i&&(s=o,o=i,i=e),n.guid&&(r.guid=o.guid=o.guid||n.guid++),r},n.debounce=function(t,n,o){return o===e?i(t,n,!1):i(t,o,n!==!1)}}(this),"undefined"==typeof jQuery)throw Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict"
var e=t.fn.jquery.split(" ")[0].split(".")
if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict"
function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var i in e)if(void 0!==t.style[i])return{end:e[i]}
return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this
t(this).one("bsTransitionEnd",function(){i=!0})
var o=function(){i||t(n).trigger(t.support.transition.end)}
return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),o=i.data("bs.alert")
o||i.data("bs.alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})}var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)}
n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function i(){r.detach().trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target")
s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""))
var r=t(s)
e&&e.preventDefault(),r.length||(r=o.closest(".alert")),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i())}
var o=t.fn.alert
t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.button"),s="object"==typeof e&&e
o||n.data("bs.button",o=new i(this,s)),"toggle"==e?o.toggle():e&&o.setState(e)})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.isLoading=!1}
i.VERSION="3.3.6",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",n=this.$element,o=n.is("input")?"val":"html",s=n.data()
e+="Text",null==s.resetText&&n.data("resetText",n[o]()),setTimeout(t.proxy(function(){n[o](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]')
if(e.length){var i=this.$element.find("input")
"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")}
var n=t.fn.button
t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=t(i.target)
n.hasClass("btn")||(n=n.closest(".btn")),e.call(n,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.carousel"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide
o||n.data("bs.carousel",o=new i(this,s)),"number"==typeof e?o.to(e):r?o[r]():s.interval&&o.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))}
i.VERSION="3.3.6",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),n="prev"==t&&0===i||"next"==t&&i==this.$items.length-1
if(n&&!this.options.wrap)return e
var o="prev"==t?-1:1,s=(i+o)%this.$items.length
return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"))
return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,n){var o=this.$element.find(".item.active"),s=n||this.getItemForDirection(e,o),r=this.interval,a="next"==e?"left":"right",l=this
if(s.hasClass("active"))return this.sliding=!1
var c=s[0],h=t.Event("slide.bs.carousel",{relatedTarget:c,direction:a})
if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var d=t(this.$indicators.children()[this.getItemIndex(s)])
d&&d.addClass("active")}var u=t.Event("slid.bs.carousel",{relatedTarget:c,direction:a})
return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,o.addClass(a),s.addClass(a),o.one("bsTransitionEnd",function(){s.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(u)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(u)),r&&this.cycle(),this}}
var n=t.fn.carousel
t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this}
var o=function(i){var n,o=t(this),s=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""))
if(s.hasClass("carousel")){var r=t.extend({},s.data(),o.data()),a=o.attr("data-slide-to")
a&&(r.interval=!1),e.call(s,r),a&&s.data("bs.carousel").to(a),i.preventDefault()}}
t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this)
e.call(i,i.data())})})}(jQuery),+function(t){"use strict"
function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")
return t(n)}function i(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e)
!o&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),o||i.data("bs.collapse",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}
n.VERSION="3.3.6",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width")
return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing")
if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse")
if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),e||o.data("bs.collapse",null))
var r=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1
var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!t.support.transition)return a.call(this)
var l=t.camelCase(["scroll",r].join("-"))
this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse")
if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension()
this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1
var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")}
return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var o=t(n)
this.addAriaAndCollapsedClass(e(o),o)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in")
t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)}
var o=t.fn.collapse
t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o=t(this)
o.attr("data-target")||n.preventDefault()
var s=e(o),r=s.data("bs.collapse"),a=r?"toggle":o.data()
i.call(s,a)})}(jQuery),+function(t){"use strict"
function e(e){var i=e.attr("data-target")
i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""))
var n=i&&t(i)
return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(o).remove(),t(s).each(function(){var n=t(this),o=e(n),s={relatedTarget:this}
o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown")
n||i.data("bs.dropdown",n=new r(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)}
r.VERSION="3.3.6",r.prototype.toggle=function(n){var o=t(this)
if(!o.is(".disabled, :disabled")){var s=e(o),r=s.hasClass("open")
if(i(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i)
var a={relatedTarget:this}
if(s.trigger(n=t.Event("show.bs.dropdown",a)),n.isDefaultPrevented())return
o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},r.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this)
if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=e(n),r=o.hasClass("open")
if(!r&&27!=i.which||r&&27==i.which)return 27==i.which&&o.find(s).trigger("focus"),n.trigger("click")
var a=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+a)
if(l.length){var c=l.index(i.target)
38==i.which&&c>0&&c--,40==i.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}}
var a=t.fn.dropdown
t.fn.dropdown=n,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),+function(t){"use strict"
function e(e,n){return this.each(function(){var o=t(this),s=o.data("bs.modal"),r=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e)
s||o.data("bs.modal",s=new i(this,r)),"string"==typeof e?s[e](n):r.show&&s.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}
i.VERSION="3.3.6",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e})
this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&n.$element.hasClass("fade")
n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus()
var s=t.Event("shown.bs.modal",{relatedTarget:e})
o?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this
this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o
if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return
s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var r=function(){n.removeBackdrop(),e&&e()}
t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth
if(!t){var e=document.documentElement.getBoundingClientRect()
t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10)
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div")
t.className="modal-scrollbar-measure",this.$body.append(t)
var e=t.offsetWidth-t.clientWidth
return this.$body[0].removeChild(t),e}
var n=t.fn.modal
t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),o=n.attr("href"),s=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),n.data())
n.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(s,r,this)})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tooltip"),s="object"==typeof e&&e;(o||!/destroy|hide/.test(e))&&(o||n.data("bs.tooltip",o=new i(this,s)),"string"==typeof e&&o[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)}
i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
for(var o=this.options.trigger.split(" "),s=o.length;s--;){var r=o[s]
if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))
else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout"
this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults()
return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0
return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!n)return
var o=this,s=this.tip(),r=this.getUID(this.type)
this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade")
var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(a)
c&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type)
var h=this.getPosition(),d=s[0].offsetWidth,u=s[0].offsetHeight
if(c){var p=a,f=this.getPosition(this.$viewport)
a="bottom"==a&&h.bottom+u>f.bottom?"top":"top"==a&&h.top-u<f.top?"bottom":"right"==a&&h.right+d>f.width?"left":"left"==a&&h.left-d<f.left?"right":a,s.removeClass(p).addClass(a)}var m=this.getCalculatedOffset(a,h,d,u)
this.applyPlacement(m,a)
var g=function(){var t=o.hoverState
o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)}
t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var n=this.tip(),o=n[0].offsetWidth,s=n[0].offsetHeight,r=parseInt(n.css("margin-top"),10),a=parseInt(n.css("margin-left"),10)
isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in")
var l=n[0].offsetWidth,c=n[0].offsetHeight
"top"==i&&c!=s&&(e.top=e.top+s-c)
var h=this.getViewportAdjustedDelta(i,e,l,c)
h.left?e.left+=h.left:e.top+=h.top
var d=/top|bottom/.test(i),u=d?2*h.left-o+l:2*h.top-s+c,p=d?"offsetWidth":"offsetHeight"
n.offset(e),this.replaceArrow(u,n[0][p],d)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle()
t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function n(){"in"!=o.hoverState&&s.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type)
return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element
var i=e[0],n="BODY"==i.tagName,o=i.getBoundingClientRect()
null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}))
var s=n?{top:0,left:0}:e.offset(),r={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=n?{width:t(window).width(),height:t(window).height()}:null
return t.extend({},o,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,n){var o={top:0,left:0}
if(!this.$viewport)return o
var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport)
if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+n
a<r.top?o.top=r.top-a:l>r.top+r.height&&(o.top=r.top+r.height-l)}else{var c=e.left-s,h=e.left+s+i
c<r.left?o.left=r.left-c:h>r.right&&(o.left=r.left+r.width-h)}return o},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options
return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random())
while(document.getElementById(t))
return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw Error(this.type+" `template` option must consist of exactly 1 top-level element!")
return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this
e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this
clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})}
var n=t.fn.tooltip
t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.popover"),s="object"==typeof e&&e;(o||!/destroy|hide/.test(e))&&(o||n.data("bs.popover",o=new i(this,s)),"string"==typeof e&&o[e]())})}var i=function(t,e){this.init("popover",t,e)}
if(!t.fn.tooltip)throw Error("Popover requires tooltip.js")
i.VERSION="3.3.6",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent()
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options
return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")}
var n=t.fn.popover
t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery),+function(t){"use strict"
function e(i,n){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var n=t(this),o=n.data("bs.scrollspy"),s="object"==typeof i&&i
o||n.data("bs.scrollspy",o=new e(this,s)),"string"==typeof i&&o[i]()})}e.VERSION="3.3.6",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),o=e.data("target")||e.attr("href"),s=/^#./.test(o)&&t(o)
return s&&s.length&&s.is(":visible")&&[[s[i]().top+n,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget
if(this.scrollHeight!=i&&this.refresh(),e>=n)return r!=(t=s[s.length-1])&&this.activate(t)
if(r&&e<o[0])return this.activeTarget=null,this.clear()
for(t=o.length;t--;)r!=s[t]&&e>=o[t]&&(void 0===o[t+1]||e<o[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear()
var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active")
n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}
var n=t.fn.scrollspy
t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this)
i.call(e,e.data())})})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tab")
o||n.data("bs.tab",o=new i(this)),"string"==typeof e&&o[e]()})}var i=function(e){this.element=t(e)}
i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target")
if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:o[0]})
if(o.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(n)
this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},i.prototype.activate=function(e,n,o){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var r=n.find("> .active"),a=o&&t.support.transition&&(r.length&&r.hasClass("fade")||!!n.find("> .fade").length)
r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),r.removeClass("in")}
var n=t.fn.tab
t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this}
var o=function(i){i.preventDefault(),e.call(t(this),"show")}
t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof e&&e
o||n.data("bs.affix",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()}
i.VERSION="3.3.6",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var o=this.$target.scrollTop(),s=this.$element.offset(),r=this.$target.height()
if(null!=i&&"top"==this.affixed)return i>o?"top":!1
if("bottom"==this.affixed)return null!=i?o+this.unpin<=s.top?!1:"bottom":t-n>=o+r?!1:"bottom"
var a=null==this.affixed,l=a?o:s.top,c=a?r:e
return null!=i&&i>=o?"top":null!=n&&l+c>=t-n?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(i.RESET).addClass("affix")
var t=this.$target.scrollTop(),e=this.$element.offset()
return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,o=n.top,s=n.bottom,r=Math.max(t(document).height(),t(document.body).height())
"object"!=typeof n&&(s=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof s&&(s=n.bottom(this.$element))
var a=this.getState(r,e,o,s)
if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","")
var l="affix"+(a?"-"+a:""),c=t.Event(l+".bs.affix")
if(this.$element.trigger(c),c.isDefaultPrevented())return
this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-e-s})}}
var n=t.fn.affix
t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data()
n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery),!function(t){"use strict"
"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict"
function e(t){if(t instanceof Date)return t
if((t+"").match(r))return(t+"").match(/^[0-9]*$/)&&(t=+t),(t+"").match(/\-/)&&(t=(t+"").replace(/\-/g,"/")),new Date(t)
throw Error("Couldn't cast `"+t+"` to a date object.")}function i(t){var e=(""+t).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
return RegExp(e)}function n(t){return function(e){var n=e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi)
if(n)for(var s=0,r=n.length;r>s;++s){var a=n[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),c=i(a[0]),h=a[1]||"",d=a[3]||"",u=null
a=a[2],l.hasOwnProperty(a)&&(u=l[a],u=+t[u]),null!==u&&("!"===h&&(u=o(d,u)),""===h&&10>u&&(u="0"+u),e=e.replace(c,""+u))}return e=e.replace(/%%/,"%")}}function o(t,e){var i="s",n=""
return t&&(t=t.replace(/(:|;|\s)/gi,"").split(/\,/),1===t.length?i=t[0]:(n=t[0],i=t[1])),1===Math.abs(e)?n:i}var s=[],r=[],a={precision:100,elapse:!1}
r.push(/^[0-9]*$/.source),r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),r=RegExp(r.join("|"))
var l={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},c=function(e,i,n){this.el=e,this.$el=t(e),this.interval=null,this.offset={},this.options=t.extend({},a),this.instanceNumber=s.length,s.push(this),this.$el.data("countdown-instance",this.instanceNumber),n&&("function"==typeof n?(this.$el.on("update.countdown",n),this.$el.on("stoped.countdown",n),this.$el.on("finish.countdown",n)):this.options=t.extend({},a,n)),this.setFinalDate(i),this.start()}
t.extend(c.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval)
var t=this
this.update(),this.interval=setInterval(function(){t.update.call(t)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),s[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(t){this.finalDate=e(t)},update:function(){if(0===this.$el.closest("html").length)return void this.remove()
var e,i=void 0!==t._data(this.el,"events"),n=new Date
e=this.finalDate.getTime()-n.getTime(),e=Math.ceil(e/1e3),e=!this.options.elapse&&0>e?0:Math.abs(e),this.totalSecsLeft!==e&&i&&(this.totalSecsLeft=e,this.elapsed=n>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-n.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(e){var i=t.Event(e+".countdown")
i.finalDate=this.finalDate,i.elapsed=this.elapsed,i.offset=t.extend({},this.offset),i.strftime=n(this.offset),this.$el.trigger(i)}}),t.fn.countdown=function(){var e=Array.prototype.slice.call(arguments,0)
return this.each(function(){var i=t(this).data("countdown-instance")
if(void 0!==i){var n=s[i],o=e[0]
c.prototype.hasOwnProperty(o)?n[o].apply(n,e.slice(1)):null===(o+"").match(/^[$A-Z_][0-9A-Z_$]*$/i)?(n.setFinalDate.call(n,o),n.start()):t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,o))}else new c(this,e[0],e[1])})}}),!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict"
function i(i,s,a){function l(t,e,n){var o,s="$()."+i+'("'+e+'")'
return t.each(function(t,l){var c=a.data(l,i)
if(!c)return void r(i+" not initialized. Cannot call methods, i.e. "+s)
var h=c[e]
if(!h||"_"==e.charAt(0))return void r(s+" is not a valid method")
var d=h.apply(c,n)
o=void 0===o?d:o}),void 0!==o?o:t}function c(t,e){t.each(function(t,n){var o=a.data(n,i)
o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1)
return l(this,t,e)}return c(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r=void 0===s?function(){}:function(t){s.error(t)}
return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype
return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[]
return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e)
var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{}
return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t]
if(i&&i.length){var n=i.indexOf(e)
return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t]
if(i&&i.length){var n=0,o=i[n]
e=e||[]
for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o]
r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict"
"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict"
function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e)
return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;c>e;e++){var i=l[e]
t[i]=0}return t}function n(t){var e=getComputedStyle(t)
return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!h){h=!0
var e=document.createElement("div")
e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box"
var i=document.body||document.documentElement
i.appendChild(e)
var o=n(e)
s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e)
if("none"==s.display)return i()
var a={}
a.width=e.offsetWidth,a.height=e.offsetHeight
for(var h=a.isBorderBox="border-box"==s.boxSizing,d=0;c>d;d++){var u=l[d],p=s[u],f=parseFloat(p)
a[u]=isNaN(f)?0:f}var m=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,w=a.borderTopWidth+a.borderBottomWidth,x=h&&r,_=t(s.width)
_!==!1&&(a.width=_+(x?0:m+b))
var C=t(s.height)
return C!==!1&&(a.height=C+(x?0:g+w)),a.innerWidth=a.width-(m+b),a.innerHeight=a.height-(g+w),a.outerWidth=a.width+v,a.outerHeight=a.height+y,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],c=l.length,h=!1
return s}),function(t,e){"use strict"
"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict"
var t=function(){var t=Element.prototype
if(t.matches)return"matches"
if(t.matchesSelector)return"matchesSelector"
for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector"
if(t[o])return o}}()
return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={}
i.extend=function(t,e){for(var i in e)t[i]=e[i]
return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[]
if(Array.isArray(t))e=t
else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i])
else e.push(t)
return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t)
var o=[]
return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t)
e(t,n)&&o.push(t)
for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout"
t.prototype[e]=function(){var t=this[o]
t&&clearTimeout(t)
var e=arguments,s=this
this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState
"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}
var n=t.console
return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),l=document.querySelectorAll(".js-"+s),c=i.makeArray(a).concat(i.makeArray(l)),h=r+"-options",d=t.jQuery
c.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(h)
try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var l=new e(t,i)
d&&d.data(t,o,l)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype
return n.create=function(){this.element.style.position="absolute",this.x=0,this.shift=0},n.destroy=function(){this.element.style.position=""
var t=this.parent.originSide
this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight"
this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide
this.element.style[e]=this.parent.getPositionValue(t)},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict"
function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype
return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x
var e=this.isOriginLeft?"marginLeft":"marginRight"
this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i)
this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.changeSelectedClass("add")},e.unselect=function(){this.changeSelectedClass("remove")},e.changeSelectedClass=function(t){this.cells.forEach(function(e){e.element.classList[t]("is-selected")})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){var i=t.requestAnimationFrame||t.webkitRequestAnimationFrame,n=0
i||(i=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),o=setTimeout(t,i)
return n=e+i,o})
var o={}
o.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},o.animate=function(){this.applyDragForce(),this.applySelectedAttraction()
var t=this.x
if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this
i(function(){e.animate()})}}
var s=function(){var t=document.documentElement.style
return"string"==typeof t.transform?"transform":"WebkitTransform"}()
return o.positionSlider=function(){var t=this.x
this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft&&s?-t:t
var i=this.getPositionValue(t)
this.slider.style[s]=this.isAnimating?"translate3d("+i+",0,0)":"translateX("+i+")"
var n=this.slides[0]
if(n){var o=-this.x-n.target,r=o/this.slidesWidth
this.dispatchEvent("scroll",null,[r,o])}},o.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.positionSlider())},o.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},o.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle"))},o.shiftWrapCells=function(t){var e=this.cursorPosition+t
this._shiftCells(this.beforeShiftCells,e,-1)
var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition)
this._shiftCells(this.afterShiftCells,i,1)},o._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var o=t[n],s=e>0?i:0
o.wrapShift(s),e-=o.size.outerWidth}},o._unshiftCells=function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},o.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},o.applyForce=function(t){this.velocity+=t},o.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},o.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},o.applyDragForce=function(){if(this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity
this.applyForce(e)}},o.applySelectedAttraction=function(){if(!this.isPointerDown&&!this.isFreeScrolling&&this.cells.length){var t=-1*this.selectedSlide.target-this.x,e=t*this.options.selectedAttraction
this.applyForce(e)}},o}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)})
else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"))
else{var i=t.Flickity
t.Flickity=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,o,s,r){function a(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}function l(t,e){var i=n.getQueryElement(t)
if(!i)return void(d&&d.error("Bad element for Flickity: "+(i||t)))
if(this.element=i,this.element.flickityGUID){var o=p[this.element.flickityGUID]
return o.option(e),o}c&&(this.$element=c(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e),this._create()}var c=t.jQuery,h=t.getComputedStyle,d=t.console,u=0,p={}
l.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},l.createMethods=[]
var f=l.prototype
n.extend(f,e.prototype),f._create=function(){var e=this.guid=++u
this.element.flickityGUID=e,p[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this),l.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},f.option=function(t){n.extend(this.options,t)},f.activate=function(){if(!this.isActive){this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize()
var t=this._filterFindCellElements(this.element.children)
a(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate")
var e,i=this.options.initialIndex
e=this.isInitActivated?this.selectedIndex:void 0!==i&&this.cells[i]?i:0,this.select(e,!1,!0),this.isInitActivated=!0}},f._createSlider=function(){var t=document.createElement("div")
t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},f._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},f.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},f._makeCells=function(t){var e=this._filterFindCellElements(t),i=e.map(function(t){return new o(t,this)},this)
return i},f.getLastCell=function(){return this.cells[this.cells.length-1]},f.getLastSlide=function(){return this.slides[this.slides.length-1]},f.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},f._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0
var e=0
if(t>0){var i=this.cells[t-1]
e=i.x+i.size.outerWidth}for(var n=this.cells.length,o=t;n>o;o++){var s=this.cells[o]
s.setPosition(e),e+=s.size.outerWidth,this.maxCellHeight=Math.max(s.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},f._sizeCells=function(t){t.forEach(function(t){t.getSize()})},f.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new s(this)
this.slides.push(t)
var e="left"==this.originSide,i=e?"marginRight":"marginLeft",n=this._getCanCellFit()
this.cells.forEach(function(e,o){if(!t.cells.length)return void t.addCell(e)
var r=t.outerWidth-t.firstMargin+(e.size.outerWidth-e.size[i])
n.call(this,o,r)?t.addCell(e):(t.updateTarget(),t=new s(this),this.slides.push(t),t.addCell(e))},this),t.updateTarget(),this.updateSelectedSlide()}},f._getCanCellFit=function(){var t=this.options.groupCells
if(!t)return function(){return!1}
if("number"==typeof t){var e=parseInt(t,10)
return function(t){return t%e!==0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1
return function(t,e){return e<=(this.size.innerWidth+1)*n}},f._init=f.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},f.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign}
var m={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}}
return f.setCellAlign=function(){var t=m[this.options.cellAlign]
this.cellAlign=t?t[this.originSide]:this.options.cellAlign},f.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight
this.viewport.style.height=t+"px"}},f._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells)
var t=this.cursorPosition,e=this.cells.length-1
this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},f._getGapCells=function(t,e,i){for(var n=[];t>0;){var o=this.cells[e]
if(!o)break
n.push(o),e+=i,t-=o.size.outerWidth}return n},f._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],o=n<this.size.innerWidth,s=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign)
this.slides.forEach(function(t){o?t.target=n*this.cellAlign:(t.target=Math.max(t.target,s),t.target=Math.min(t.target,r))},this)}},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i
if(this.emitEvent(t,n),c&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":""
var o=t
if(e){var s=c.Event(e)
s.type=t,o=s}this.$element.trigger(o,i)}},f.select=function(t,e,i){this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t]&&(this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select"),this.dispatchEvent("cellSelect")))},f._wrapSelect=function(t){var e=this.slides.length,i=this.options.wrapAround&&e>1
if(!i)return t
var o=n.modulo(t,e),s=Math.abs(o-this.selectedIndex),r=Math.abs(o+e-this.selectedIndex),a=Math.abs(o-e-this.selectedIndex)
!this.isDragSelect&&s>r?t+=e:!this.isDragSelect&&s>a&&(t-=e),0>t?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},f.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},f.next=function(t,e){this.select(this.selectedIndex+1,t,e)},f.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex]
t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},f.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},f.selectCell=function(t,e,i){var n
"number"==typeof t?n=this.cells[t]:("string"==typeof t&&(t=this.element.querySelector(t)),n=this.getCell(t))
for(var o=0;n&&o<this.slides.length;o++){var s=this.slides[o],r=s.cells.indexOf(n)
if(-1!=r)return void this.select(o,e,i)}},f.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e]
if(i.element==t)return i}},f.getCells=function(t){t=n.makeArray(t)
var e=[]
return t.forEach(function(t){var i=this.getCell(t)
i&&e.push(i)},this),e},f.getCellElements=function(){return this.cells.map(function(t){return t.element})},f.getParentCell=function(t){var e=this.getCell(t)
return e?e:(t=n.getParent(t,".flickity-slider > *"),this.getCell(t))},f.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements()
e=void 0===e?this.selectedIndex:e
var i=this.slides.length
if(1+2*t>=i)return this.getCellElements()
for(var o=[],s=e-t;e+t>=s;s++){var r=this.options.wrapAround?n.modulo(s,i):s,a=this.slides[r]
a&&(o=o.concat(a.getCellElements()))}return o},f.uiChange=function(){this.emitEvent("uiChange")},f.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},f.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(l,"onresize",150),f.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize")
var t=this.selectedElements&&this.selectedElements[0]
this.selectCell(t,!1,!0)}},f.watchCSS=function(){var t=this.options.watchCSS
if(t){var e=h(this.element,":after").content;-1!=e.indexOf("flickity")?this.activate():this.deactivate()}},f.onkeydown=function(t){if(this.options.accessibility&&(!document.activeElement||document.activeElement==this.element))if(37==t.keyCode){var e=this.options.rightToLeft?"next":"previous"
this.uiChange(),this[e]()}else if(39==t.keyCode){var i=this.options.rightToLeft?"previous":"next"
this.uiChange(),this[i]()}},f.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.cells.forEach(function(t){t.destroy()}),this.unselectSelectedSlide(),this.element.removeChild(this.viewport),a(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},f.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.emitEvent("destroy"),c&&this.$element&&c.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete p[this.guid]},n.extend(f,r),l.data=function(t){t=n.getQueryElement(t)
var e=t&&t.flickityGUID
return e&&p[e]},n.htmlInit(l,"flickity"),c&&c.bridget&&c.bridget("flickity",l),l.Cell=o,l}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}function n(){}var o=n.prototype=Object.create(e.prototype)
o.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o._bindStartEvent=function(e,i){i=void 0===i||!!i
var n=i?"addEventListener":"removeEventListener"
t.navigator.pointerEnabled?e[n]("pointerdown",this):t.navigator.msPointerEnabled?e[n]("MSPointerDown",this):(e[n]("mousedown",this),e[n]("touchstart",this))},o.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},o.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e]
if(i.identifier==this.pointerIdentifier)return i}},o.onmousedown=function(t){var e=t.button
e&&0!==e&&1!==e||this._pointerDown(t,t)},o.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.onMSPointerDown=o.onpointerdown=function(t){this._pointerDown(t,t)},o._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},o.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])}
var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]}
return o._bindPostStartEvents=function(e){if(e){var i=s[e.type]
i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},o._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},o.onmousemove=function(t){this._pointerMove(t,t)},o.onMSPointerMove=o.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.ontouchmove=function(t){var e=this.getTouch(t.changedTouches)
e&&this._pointerMove(t,e)},o._pointerMove=function(t,e){this.pointerMove(t,e)},o.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},o.onmouseup=function(t){this._pointerUp(t,t)},o.onMSPointerUp=o.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.ontouchend=function(t){var e=this.getTouch(t.changedTouches)
e&&this._pointerUp(t,e)},o._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},o.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},o._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.pointerDone=i,o.onMSPointerCancel=o.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches)
e&&this._pointerCancel(t,e)},o._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},o.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}function n(){}var o=n.prototype=Object.create(e.prototype)
o.bindHandles=function(){this._bindHandles(!0)},o.unbindHandles=function(){this._bindHandles(!1)}
var s=t.navigator
return o._bindHandles=function(t){t=void 0===t||!!t
var e
e=s.pointerEnabled?function(e){e.style.touchAction=t?"none":""}:s.msPointerEnabled?function(e){e.style.msTouchAction=t?"none":""}:i
for(var n=t?"addEventListener":"removeEventListener",o=0;o<this.handles.length;o++){var r=this.handles[o]
this._bindStartEvent(r,t),e(r),r[n]("click",this)}},o.pointerDown=function(t,e){if("INPUT"==t.target.nodeName&&"range"==t.target.type)return this.isPointerDown=!1,void delete this.pointerIdentifier
this._dragPointerDown(t,e)
var i=document.activeElement
i&&i.blur&&i.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])},o._dragPointerDown=function(t,i){this.pointerDownPoint=e.getPointerPoint(i)
var n=this.canPreventDefaultOnPointerDown(t,i)
n&&t.preventDefault()},o.canPreventDefaultOnPointerDown=function(t){return"SELECT"!=t.target.nodeName},o.pointerMove=function(t,e){var i=this._dragPointerMove(t,e)
this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},o._dragPointerMove=function(t,i){var n=e.getPointerPoint(i),o={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y}
return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,i),o},o.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},o.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},o._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},o._dragStart=function(t,i){this.isDragging=!0,this.dragStartPoint=e.getPointerPoint(i),this.isPreventingClicks=!0,this.dragStart(t,i)},o.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},o._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},o.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},o._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},o.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},o.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},o._staticClick=function(t,e){if(!this.isIgnoringMouseUp||"mouseup"!=t.type){var i=t.target.nodeName
"INPUT"!=i&&"TEXTAREA"!=i||t.target.focus(),this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400))}},o.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},n.getPointerPoint=e.getPointerPoint,n}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,o){return e(t,i,n,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){function o(){return{x:t.pageXOffset,y:t.pageYOffset}}n.extend(e.defaults,{draggable:!0,dragThreshold:3}),e.createMethods.push("_createDrag")
var s=e.prototype
n.extend(s,i.prototype)
var r="createTouch"in document,a=!1
s._createDrag=function(){this.on("activate",this.bindDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag),r&&!a&&(t.addEventListener("touchmove",function(){}),a=!0)},s.bindDrag=function(){this.options.draggable&&!this.isDragBound&&(this.element.classList.add("is-draggable"),this.handles=[this.viewport],this.bindHandles(),this.isDragBound=!0)},s.unbindDrag=function(){this.isDragBound&&(this.element.classList.remove("is-draggable"),this.unbindHandles(),delete this.isDragBound)},s._uiChangeDrag=function(){delete this.isFreeScrolling},s._childUIPointerDownDrag=function(t){t.preventDefault(),this.pointerDownFocus(t)}
var l={TEXTAREA:!0,INPUT:!0,OPTION:!0},c={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0}
s.pointerDown=function(e,i){var n=l[e.target.nodeName]&&!c[e.target.type]
if(n)return this.isPointerDown=!1,void delete this.pointerIdentifier
this._dragPointerDown(e,i)
var s=document.activeElement
s&&s.blur&&s!=this.element&&s!=document.body&&s.blur(),this.pointerDownFocus(e),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this._bindPostStartEvents(e),this.pointerDownScroll=o(),t.addEventListener("scroll",this),this.dispatchEvent("pointerDown",e,[i])}
var h={touchstart:!0,MSPointerDown:!0},d={INPUT:!0,SELECT:!0}
return s.pointerDownFocus=function(e){if(this.options.accessibility&&!h[e.type]&&!d[e.target.nodeName]){var i=t.pageYOffset
this.element.focus(),t.pageYOffset!=i&&t.scrollTo(t.pageXOffset,i)}},s.canPreventDefaultOnPointerDown=function(t){var e="touchstart"==t.type,i=t.target.nodeName
return!e&&"SELECT"!=i},s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},s.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},s.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},s.dragStart=function(e,i){this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i])},s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e)
this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},s.dragMove=function(t,e,i){t.preventDefault(),this.previousDragX=this.dragX
var n=this.options.rightToLeft?-1:1,o=this.dragStartPosition+i.x*n
if(!this.options.wrapAround&&this.slides.length){var s=Math.max(-this.slides[0].target,this.dragStartPosition)
o=o>s?.5*(o+s):o
var r=Math.min(-this.getLastSlide().target,this.dragStartPosition)
o=r>o?.5*(o+r):o}this.dragX=o,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])},s.dragEnd=function(t,e){this.options.freeScroll&&(this.isFreeScrolling=!0)
var i=this.dragEndRestingSelect()
if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition()
this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect())
delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])},s.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),o=i.distance<n.distance?i.index:n.index
return o},s._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,o=1/0,s=this.options.contain&&!this.options.wrapAround?function(t,e){return e>=t}:function(t,e){return e>t};s(e,o)&&(n+=i,o=e,e=this.getSlideDistance(-t,n),null!==e);)e=Math.abs(e)
return{distance:o,index:n-i}},s.getSlideDistance=function(t,e){var i=this.slides.length,o=this.options.wrapAround&&i>1,s=o?n.modulo(e,i):e,r=this.slides[s]
if(!r)return null
var a=o?this.slideableWidth*Math.floor(e/i):0
return t-(r.target+a)},s.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0
var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX
return t>0&&e>0?1:0>t&&0>e?-1:0},s.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,o=i&&this.cells.indexOf(i)
this.dispatchEvent("staticClick",t,[e,n,o])},s.onscroll=function(){var t=o(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){this.bindTap(t)}var n=i.prototype=Object.create(e.prototype)
return n.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},n.pointerUp=function(i,n){if(!this.isIgnoringMouseUp||"mouseup"!=i.type){var o=e.getPointerPoint(n),s=this.tapElement.getBoundingClientRect(),r=t.pageXOffset,a=t.pageYOffset,l=o.x>=s.left+r&&o.x<=s.right+r&&o.y>=s.top+a&&o.y<=s.bottom+a
if(l&&this.emitEvent("tap",[i,n]),"mouseup"!=i.type){this.isIgnoringMouseUp=!0
var c=this
setTimeout(function(){delete c.isIgnoringMouseUp},400)}}},n.destroy=function(){this.pointerDone(),this.unbindTap()},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o){return e(t,i,n,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict"
function o(t,e){this.direction=t,this.parent=e,this._create()}function s(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var r="http://www.w3.org/2000/svg"
o.prototype=new i,o.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction
var t=this.parent.options.rightToLeft?1:-1
this.isLeft=this.direction==t
var e=this.element=document.createElement("button")
e.className="flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"previous":"next")
var i=this.createSVG()
e.appendChild(i),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),i.prototype.destroy.call(this),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(r,"svg")
t.setAttribute("viewBox","0 0 100 100")
var e=document.createElementNS(r,"path"),i=s(this.parent.options.arrowShape)
return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange()
var t=this.isPrevious?"previous":"next"
this.parent[t]()}},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){var t=document.activeElement
t&&t==this.element&&this.onTap()},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides
if(this.parent.options.wrapAround&&t.length>1)return void this.enable()
var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable"
this[n]()},o.prototype.destroy=function(){this.deactivate()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons")
var a=e.prototype
return a._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},a.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o){return e(t,i,n,o)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){function o(t){this.parent=t,this._create()}o.prototype=new i,o.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),i.prototype.destroy.call(this)},o.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length
t>0?this.addDots(t):0>t&&this.removeDots(-t)},o.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[];t;){var n=document.createElement("li")
n.className="dot",e.appendChild(n),i.push(n),t--}this.holder.appendChild(e),this.dots=this.dots.concat(i)},o.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t)
e.forEach(function(t){this.holder.removeChild(t)},this)},o.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot"),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected")},o.prototype.onTap=function(t){var e=t.target
if("LI"==e.nodeName){this.parent.uiChange()
var i=this.dots.indexOf(e)
this.parent.select(i)}},o.prototype.destroy=function(){this.deactivate()},e.PageDots=o,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots")
var s=e.prototype
return s._createPageDots=function(){this.options.pageDots&&(this.pageDots=new o(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},s.activatePageDots=function(){this.pageDots.activate()},s.updateSelectedPageDots=function(){this.pageDots.updateSelected()},s.updatePageDots=function(){this.pageDots.setDots()},s.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=o,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",s&&(this.onVisibilityChange=function(){this.visibilityChange()}.bind(this),this.onVisibilityPlay=function(){this.visibilityPlay()}.bind(this))}var o,s
"hidden"in document?(o="hidden",s="visibilitychange"):"webkitHidden"in document&&(o="webkitHidden",s="webkitvisibilitychange"),n.prototype=Object.create(t.prototype),n.prototype.play=function(){if("playing"!=this.state){var t=document[o]
if(s&&t)return void document.addEventListener(s,this.onVisibilityPlay)
this.state="playing",s&&document.addEventListener(s,this.onVisibilityChange),this.tick()}},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay
t="number"==typeof t?t:3e3
var e=this
this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),s&&document.removeEventListener(s,this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){var t=document[o]
this[t?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener(s,this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer")
var r=i.prototype
return r._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},r.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},r.playPlayer=function(){this.player.play()},r.stopPlayer=function(){this.player.stop()},r.pausePlayer=function(){this.player.pause()},r.unpausePlayer=function(){this.player.unpause()},r.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},r.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},r.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){var e=document.createDocumentFragment()
return t.forEach(function(t){e.appendChild(t.element)}),e}var o=e.prototype
return o.insert=function(t,e){var i=this._makeCells(t)
if(i&&i.length){var o=this.cells.length
e=void 0===e?o:e
var s=n(i),r=e==o
if(r)this.slider.appendChild(s)
else{var a=this.cells[e].element
this.slider.insertBefore(s,a)}if(0===e)this.cells=i.concat(this.cells)
else if(r)this.cells=this.cells.concat(i)
else{var l=this.cells.splice(e,o-e)
this.cells=this.cells.concat(i).concat(l)}this._sizeCells(i)
var c=e>this.selectedIndex?0:i.length
this._cellAddedRemoved(e,c)}},o.append=function(t){this.insert(t,this.cells.length)},o.prepend=function(t){this.insert(t,0)},o.remove=function(t){var e,n,o=this.getCells(t),s=0,r=o.length
for(e=0;r>e;e++){n=o[e]
var a=this.cells.indexOf(n)<this.selectedIndex
s-=a?1:0}for(e=0;r>e;e++)n=o[e],n.remove(),i.removeFrom(this.cells,n)
o.length&&this._cellAddedRemoved(0,s)},o._cellAddedRemoved=function(t,e){e=e||0,this.selectedIndex+=e,this.selectedIndex=Math.max(0,Math.min(this.slides.length-1,this.selectedIndex)),this.cellChange(t,!0),this.emitEvent("cellAddedRemoved",[t,e])},o.cellSizeChange=function(t){var e=this.getCell(t)
if(e){e.getSize()
var i=this.cells.indexOf(e)
this.cellChange(i)}},o.cellChange=function(t,e){var i=this.slideableWidth
if(this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("cellChange",[t]),this.options.freeScroll){var n=i-this.slideableWidth
this.x+=n*this.cellAlign,this.positionSlider()}else e&&this.positionSliderAtSelected(),this.select(this.selectedIndex)},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){"use strict"
function n(t){if("IMG"==t.nodeName&&t.getAttribute("data-flickity-lazyload"))return[t]
var e=t.querySelectorAll("img[data-flickity-lazyload]")
return i.makeArray(e)}function o(t,e){this.img=t,this.flickity=e,this.load()}e.createMethods.push("_createLazyload")
var s=e.prototype
return s._createLazyload=function(){this.on("select",this.lazyLoad)},s.lazyLoad=function(){var t=this.options.lazyLoad
if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),s=[]
i.forEach(function(t){var e=n(t)
s=s.concat(e)}),s.forEach(function(t){new o(t,this)},this)}},o.prototype.handleEvent=i.handleEvent,o.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.img.getAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload")},o.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},o.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},o.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)
var i=this.flickity.getParentCell(this.img),n=i&&i.element
this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=o,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(t,e){function i(t,e,i){return(e-t)*i+t}t.createMethods.push("_createAsNavFor")
var n=t.prototype
return n._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor)
var t=this.options.asNavFor
if(t){var e=this
setTimeout(function(){e.setNavCompanion(t)})}},n.setNavCompanion=function(i){i=e.getQueryElement(i)
var n=t.data(i)
if(n&&n!=this){this.navCompanion=n
var o=this
this.onNavCompanionSelect=function(){o.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},n.navCompanionSelect=function(t){if(this.navCompanion){var e=this.navCompanion.selectedCells[0],n=this.navCompanion.cells.indexOf(e),o=n+this.navCompanion.selectedCells.length-1,s=Math.floor(i(n,o,this.navCompanion.cellAlign))
if(this.selectCell(s,!1,t),this.removeNavSelectedElements(),!(s>=this.cells.length)){var r=this.cells.slice(n,o+1)
this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},n.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},n.activateAsNavFor=function(){this.navCompanionSelect(!0)},n.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},n.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},n.deactivateAsNavFor=function(){this.removeNavSelectedElements()},n.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"use strict"
"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i]
return t}function n(t){var e=[]
if(Array.isArray(t))e=t
else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i])
else e.push(t)
return e}function o(t,e,s){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?s=e:i(this.options,e),s&&this.on("always",s),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,s)}function s(t){this.img=t}function r(t,e){this.url=t,this.element=e,this.img=new Image}var a=t.jQuery,l=t.console
o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t)
var e=t.nodeType
if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n]
this.addImage(o)}if("string"==typeof this.options.background){var s=t.querySelectorAll(this.options.background)
for(n=0;n<s.length;n++){var r=s[n]
this.addElementBackgroundImages(r)}}}}
var c={1:!0,9:!0,11:!0}
return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t)
if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2]
o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new s(t)
this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new r(t,e)
this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this
return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&l&&l.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done"
if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve"
this.jqDeferred[e](this)}},s.prototype=Object.create(e.prototype),s.prototype.check=function(){var t=this.getIsImageComplete()
return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},s.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},s.prototype.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},s.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},s.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},s.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype=Object.create(s.prototype),r.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url
var t=this.getIsImageComplete()
t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(a=e,a.fn.imagesLoaded=function(t,e){var i=new o(this,t,e)
return i.jqDeferred.promise(a(this))})},o.makeJQueryPlugin(),o}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){"use strict"
e.createMethods.push("_createImagesLoaded")
var n=e.prototype
return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img)
e.cellSizeChange(n&&n.element),e.options.freeScroll||e.positionSliderAtSelected()}if(this.options.imagesLoaded){var e=this
i(this.slider).on("progress",t)}},e}),fotoramaVersion="4.6.4",function(t,e,i,n,o){"use strict"
function s(t){var e="bez_"+n.makeArray(arguments).join("_").replace(".","p")
if("function"!=typeof n.easing[e]){var i=function(t,e){var i=[null,null],n=[null,null],o=[null,null],s=function(s,r){return o[r]=3*t[r],n[r]=3*(e[r]-t[r])-o[r],i[r]=1-o[r]-n[r],s*(o[r]+s*(n[r]+s*i[r]))},r=function(t){return o[0]+t*(2*n[0]+3*i[0]*t)},a=function(t){for(var e,i=t,n=0;++n<14&&(e=s(i,0)-t,!(Math.abs(e)<.001));)i-=e/r(i)
return i}
return function(t){return s(a(t),1)}}
n.easing[e]=function(e,n,o,s,r){return s*i([t[0],t[1]],[t[2],t[3]])(n/r)+o}}return e}function r(){}function a(t,e,i){return Math.max(isNaN(e)?-1/0:e,Math.min(isNaN(i)?1/0:i,t))}function l(t){return t.match(/ma/)&&t.match(/-?\d+(?!d)/g)[t.match(/3d/)?12:4]}function c(t){return ze?+l(t.css("transform")):+t.css("left").replace("px","")}function h(t){var e={}
return ze?e.transform="translate3d("+t+"px,0,0)":e.left=t,e}function d(t){return{"transition-duration":t+"ms"}}function u(t,e){return isNaN(t)?e:t}function p(t,e){return u(+(t+"").replace(e||"px",""))}function f(t){return/%$/.test(t)?p(t,"%"):o}function m(t,e){return u(f(t)/100*e,p(t))}function g(t){return(!isNaN(p(t))||!isNaN(p(t,"%")))&&t}function v(t,e,i,n){return(t-(n||0))*(e+(i||0))}function y(t,e,i,n){return-Math.round(t/(e+(i||0))-(n||0))}function b(t){var e=t.data()
if(!e.tEnd){var i=t[0],n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"}
X(i,n[we.prefixed("transition")],function(t){e.tProp&&t.propertyName.match(e.tProp)&&e.onEndFn()}),e.tEnd=!0}}function w(t,e,i,n){var o,s=t.data()
s&&(s.onEndFn=function(){o||(o=!0,clearTimeout(s.tT),i())},s.tProp=e,clearTimeout(s.tT),s.tT=setTimeout(function(){s.onEndFn()},1.5*n),b(t))}function x(t,e){if(t.length){var i=t.data()
ze?(t.css(d(0)),i.onEndFn=r,clearTimeout(i.tT)):t.stop()
var n=_(e,function(){return c(t)})
return t.css(h(n)),n}}function _(){for(var t,e=0,i=arguments.length;i>e&&(t=e?arguments[e]():arguments[e],"number"!=typeof t);e++);return t}function C(t,e){return Math.round(t+(e-t)/1.5)}function S(){return S.p=S.p||("https:"===i.protocol?"https://":"http://"),S.p}function E(t){var i=e.createElement("a")
return i.href=t,i}function T(t,e){if("string"!=typeof t)return t
t=E(t)
var i,n
if(t.host.match(/youtube\.com/)&&t.search){if(i=t.search.split("v=")[1]){var o=i.indexOf("&");-1!==o&&(i=i.substring(0,o)),n="youtube"}}else t.host.match(/youtube\.com|youtu\.be/)?(i=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),n="youtube"):t.host.match(/vimeo\.com/)&&(n="vimeo",i=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""))
return i&&n||!e||(i=t.href,n="custom"),i?{id:i,type:n,s:t.search.replace(/^\?/,""),p:S()}:!1}function k(t,e,i){var o,s,r=t.video
return"youtube"===r.type?(s=S()+"img.youtube.com/vi/"+r.id+"/default.jpg",o=s.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===r.type?n.ajax({url:S()+"vimeo.com/api/v2/video/"+r.id+".json",dataType:"jsonp",success:function(n){t.thumbsReady=!0,I(e,{img:n[0].thumbnail_large,thumb:n[0].thumbnail_small},t.i,i)}}):t.thumbsReady=!0,{img:o,thumb:s}}function I(t,e,i,o){for(var s=0,r=t.length;r>s;s++){var a=t[s]
if(a.i===i&&a.thumbsReady){var l={videoReady:!0}
l[Ve]=l[Ge]=l[Ze]=!1,o.splice(s,1,n.extend({},a,l,e))
break}}}function P(t){function e(t,e,o){var s=t.children("img").eq(0),r=t.attr("href"),a=t.attr("src"),l=s.attr("src"),c=e.video,h=o?T(r,c===!0):!1
h?r=!1:h=c,i(t,s,n.extend(e,{video:h,img:e.img||r||a||l,thumb:e.thumb||l||a||r}))}function i(t,e,i){var o=i.thumb&&i.img!==i.thumb,s=p(i.width||t.attr("width")),r=p(i.height||t.attr("height"))
n.extend(i,{width:s,height:r,thumbratio:Y(i.thumbratio||p(i.thumbwidth||e&&e.attr("width")||o||s)/p(i.thumbheight||e&&e.attr("height")||o||r))})}var o=[]
return t.children().each(function(){var t=n(this),s=B(n.extend(t.data(),{id:t.attr("id")}))
if(t.is("a, img"))e(t,s,!0)
else{if(t.is(":empty"))return
i(t,null,n.extend(s,{html:this,_html:t.html()}))}o.push(s)}),o}function $(t){return 0===t.offsetWidth&&0===t.offsetHeight}function D(t){return!n.contains(e.documentElement,t)}function A(t,e,i,n){return A.i||(A.i=1,A.ii=[!0]),n=n||A.i,void 0===A.ii[n]&&(A.ii[n]=!0),t()?e():A.ii[n]&&setTimeout(function(){A.ii[n]&&A(t,e,i,n)},i||100),A.i++}function M(t){i.replace(i.protocol+"//"+i.host+i.pathname.replace(/^\/?/,"/")+i.search+"#"+t)}function z(t,e,i,n){var o=t.data(),s=o.measures
if(s&&(!o.l||o.l.W!==s.width||o.l.H!==s.height||o.l.r!==s.ratio||o.l.w!==e.w||o.l.h!==e.h||o.l.m!==i||o.l.p!==n)){var r=s.width,l=s.height,c=e.w/e.h,h=s.ratio>=c,d="scaledown"===i,u="contain"===i,p="cover"===i,f=K(n)
h&&(d||u)||!h&&p?(r=a(e.w,0,d?r:1/0),l=r/s.ratio):(h&&p||!h&&(d||u))&&(l=a(e.h,0,d?l:1/0),r=l*s.ratio),t.css({width:r,height:l,left:m(f.x,e.w-r),top:m(f.y,e.h-l)}),o.l={W:s.width,H:s.height,r:s.ratio,w:e.w,h:e.h,m:i,p:n}}return!0}function L(t,e){var i=t[0]
i.styleSheet?i.styleSheet.cssText=e:t.html(e)}function O(t,e,i){return e===i?!1:e>=t?"left":t>=i?"right":"left right"}function j(t,e,i,n){if(!i)return!1
if(!isNaN(t))return t-(n?0:1)
for(var o,s=0,r=e.length;r>s;s++){var a=e[s]
if(a.id===t){o=s
break}}return o}function N(t,e,i){i=i||{},t.each(function(){var t,o=n(this),s=o.data()
s.clickOn||(s.clickOn=!0,n.extend(it(o,{onStart:function(e){t=e,(i.onStart||r).call(this,e)},onMove:i.onMove||r,onTouchEnd:i.onTouchEnd||r,onEnd:function(i){i.moved||e.call(this,t)}}),{noMove:!0}))})}function R(t,e){return'<div class="'+t+'">'+(e||"")+"</div>"}function W(t){for(var e=t.length;e;){var i=Math.floor(Math.random()*e--),n=t[e]
t[e]=t[i],t[i]=n}return t}function F(t){return"[object Array]"==Object.prototype.toString.call(t)&&n.map(t,function(t){return n.extend({},t)})}function H(t,e,i){t.scrollLeft(e||0).scrollTop(i||0)}function B(t){if(t){var e={}
return n.each(t,function(t,i){e[t.toLowerCase()]=i}),e}}function Y(t){if(t){var e=+t
return isNaN(e)?(e=t.split("/"),+e[0]/+e[1]||o):e}}function X(t,e,i,n){e&&(t.addEventListener?t.addEventListener(e,i,!!n):t.attachEvent("on"+e,i))}function U(t){return!!t.getAttribute("disabled")}function q(t){return{tabindex:-1*t+"",disabled:t}}function Q(t,e){X(t,"keyup",function(i){U(t)||13==i.keyCode&&e.call(t,i)})}function V(t,e){X(t,"focus",t.onfocusin=function(i){e.call(t,i)},!0)}function Z(t,e){t.preventDefault?t.preventDefault():t.returnValue=!1,e&&t.stopPropagation&&t.stopPropagation()}function G(t){return t?">":"<"}function K(t){return t=(t+"").split(/\s+/),{x:g(t[0])||ei,y:g(t[1])||ei}}function J(t,e){var i=t.data(),o=Math.round(e.pos),s=function(){i.sliding=!1,(e.onEnd||r)()}
void 0!==e.overPos&&e.overPos!==e.pos&&(o=e.overPos,s=function(){J(t,n.extend({},e,{overPos:e.pos,time:Math.max(He,e.time/2)}))})
var a=n.extend(h(o),e.width&&{width:e.width})
i.sliding=!0,ze?(t.css(n.extend(d(e.time),a)),e.time>10?w(t,"transform",s,e.time):s()):t.stop().animate(a,e.time,Je,s)}function tt(t,e,i,o,s,a){var l=void 0!==a
if(l||(s.push(arguments),Array.prototype.push.call(arguments,s.length),!(s.length>1))){t=t||n(t),e=e||n(e)
var c=t[0],h=e[0],d="crossfade"===o.method,u=function(){if(!u.done){u.done=!0
var t=(l||s.shift())&&s.shift()
t&&tt.apply(this,t),(o.onEnd||r)(!!t)}},p=o.time/(a||1)
i.removeClass(Bt+" "+Ht),t.stop().addClass(Bt),e.stop().addClass(Ht),d&&h&&t.fadeTo(0,0),t.fadeTo(d?p:0,1,d&&u),e.fadeTo(p,0,u),c&&d||h||u()}}function et(t){var e=(t.touches||[])[0]||t
t._x=e.pageX,t._y=e.clientY,t._now=n.now()}function it(t,i){function o(t){return u=n(t.target),w.checked=m=g=y=!1,h||w.flow||t.touches&&t.touches.length>1||t.which>1||oi&&oi.type!==t.type&&ri||(m=i.select&&u.is(i.select,b))?m:(f="touchstart"===t.type,g=u.is("a, a *",b),p=w.control,v=w.noMove||w.noSwipe||p?16:w.snap?0:4,et(t),d=oi=t,si=t.type.replace(/down|start/,"move").replace(/Down/,"Move"),(i.onStart||r).call(b,t,{control:p,$target:u}),h=w.flow=!0,void((!f||w.go)&&Z(t)))}function s(t){if(t.touches&&t.touches.length>1||Re&&!t.isPrimary||si!==t.type||!h)return h&&a(),void(i.onTouchEnd||r)()
et(t)
var e=Math.abs(t._x-d._x),n=Math.abs(t._y-d._y),o=e-n,s=(w.go||w.x||o>=0)&&!w.noSwipe,l=0>o
f&&!w.checked?(h=s)&&Z(t):(Z(t),(i.onMove||r).call(b,t,{touch:f})),!y&&Math.sqrt(Math.pow(e,2)+Math.pow(n,2))>v&&(y=!0),w.checked=w.checked||s||l}function a(t){(i.onTouchEnd||r)()
var e=h
w.control=h=!1,e&&(w.flow=!1),!e||g&&!w.checked||(t&&Z(t),ri=!0,clearTimeout(ai),ai=setTimeout(function(){ri=!1},1e3),(i.onEnd||r).call(b,{moved:y,$target:u,control:p,touch:f,startEvent:d,aborted:!t||"MSPointerCancel"===t.type}))}function l(){w.flow||setTimeout(function(){w.flow=!0},10)}function c(){w.flow&&setTimeout(function(){w.flow=!1},Fe)}var h,d,u,p,f,m,g,v,y,b=t[0],w={}
return Re?(X(b,"MSPointerDown",o),X(e,"MSPointerMove",s),X(e,"MSPointerCancel",a),X(e,"MSPointerUp",a)):(X(b,"touchstart",o),X(b,"touchmove",s),X(b,"touchend",a),X(e,"touchstart",l),X(e,"touchend",c),X(e,"touchcancel",c),$e.on("scroll",c),t.on("mousedown",o),De.on("mousemove",s).on("mouseup",a)),t.on("click","a",function(t){w.checked&&Z(t)}),w}function nt(t,e){function i(i,n){T=!0,c=d=i._x,g=i._now,m=[[g,c]],u=p=P.noMove||n?0:x(t,(e.getPos||r)()),(e.onStart||r).call(k,i)}function o(t,e){y=P.min,b=P.max,w=P.snap,_=t.altKey,T=E=!1,S=e.control,S||I.sliding||i(t)}function s(n,o){P.noSwipe||(T||i(n),d=n._x,m.push([n._now,d]),p=u-(c-d),f=O(p,y,b),y>=p?p=C(p,y):p>=b&&(p=C(p,b)),P.noMove||(t.css(h(p)),E||(E=!0,o.touch||Re||t.addClass(oe)),(e.onMove||r).call(k,n,{pos:p,edge:f})))}function l(o){if(!P.noSwipe||!o.moved){T||i(o.startEvent,!0),o.touch||Re||t.removeClass(oe),v=n.now()
for(var s,l,c,h,f,g,x,C,S,E=v-Fe,I=null,$=He,D=e.friction,A=m.length-1;A>=0;A--){if(s=m[A][0],l=Math.abs(s-E),null===I||c>l)I=s,h=m[A][1]
else if(I===E||l>c)break
c=l}x=a(p,y,b)
var M=h-d,z=M>=0,L=v-I,O=L>Fe,j=!O&&p!==u&&x===p
w&&(x=a(Math[j?z?"floor":"ceil":"round"](p/w)*w,y,b),y=b=x),j&&(w||x===p)&&(S=-(M/L),$*=a(Math.abs(S),e.timeLow,e.timeHigh),f=Math.round(p+S*$/D),w||(x=f),(!z&&f>b||z&&y>f)&&(g=z?y:b,C=f-g,w||(x=g),C=a(x+.03*C,g-50,g+50),$=Math.abs((p-C)/(S/D)))),$*=_?10:1,(e.onEnd||r).call(k,n.extend(o,{moved:o.moved||O&&w,pos:p,newPos:x,overPos:C,time:$}))}}var c,d,u,p,f,m,g,v,y,b,w,_,S,E,T,k=t[0],I=t.data(),P={}
return P=n.extend(it(e.$wrap,n.extend({},e,{onStart:o,onMove:s,onEnd:l})),P)}function ot(t,e){var i,o,s,a=t[0],l={prevent:{}}
return X(a,We,function(t){var a=t.wheelDeltaY||-1*t.deltaY||0,c=t.wheelDeltaX||-1*t.deltaX||0,h=Math.abs(c)&&!Math.abs(a),d=G(0>c),u=o===d,p=n.now(),f=Fe>p-s
o=d,s=p,h&&l.ok&&(!l.prevent[d]||i)&&(Z(t,!0),i&&u&&f||(e.shift&&(i=!0,clearTimeout(l.t),l.t=setTimeout(function(){i=!1},Be)),(e.onEnd||r)(t,e.shift?d:c)))}),l}function st(){n.each(n.Fotorama.instances,function(t,e){e.index=t})}function rt(t){n.Fotorama.instances.push(t),st()}function at(t){n.Fotorama.instances.splice(t.index,1),st()}var lt="fotorama",ct="fullscreen",ht=lt+"__wrap",dt=ht+"--css2",ut=ht+"--css3",pt=ht+"--video",ft=ht+"--fade",mt=ht+"--slide",gt=ht+"--no-controls",vt=ht+"--no-shadows",yt=ht+"--pan-y",bt=ht+"--rtl",wt=ht+"--only-active",xt=ht+"--no-captions",_t=ht+"--toggle-arrows",Ct=lt+"__stage",St=Ct+"__frame",Et=St+"--video",Tt=Ct+"__shaft",kt=lt+"__grab",It=lt+"__pointer",Pt=lt+"__arr",$t=Pt+"--disabled",Dt=Pt+"--prev",At=Pt+"--next",Mt=lt+"__nav",zt=Mt+"-wrap",Lt=Mt+"__shaft",Ot=Mt+"--dots",jt=Mt+"--thumbs",Nt=Mt+"__frame",Rt=Nt+"--dot",Wt=Nt+"--thumb",Ft=lt+"__fade",Ht=Ft+"-front",Bt=Ft+"-rear",Yt=lt+"__shadow",Xt=Yt+"s",Ut=Xt+"--left",qt=Xt+"--right",Qt=lt+"__active",Vt=lt+"__select",Zt=lt+"--hidden",Gt=lt+"--fullscreen",Kt=lt+"__fullscreen-icon",Jt=lt+"__error",te=lt+"__loading",ee=lt+"__loaded",ie=ee+"--full",ne=ee+"--img",oe=lt+"__grabbing",se=lt+"__img",re=se+"--full",ae=lt+"__dot",le=lt+"__thumb",ce=le+"-border",he=lt+"__html",de=lt+"__video",ue=de+"-play",pe=de+"-close",fe=lt+"__caption",me=lt+"__caption__wrap",ge=lt+"__spinner",ve='" tabindex="0" role="button',ye=n&&n.fn.jquery.split(".")
if(!ye||ye[0]<1||1==ye[0]&&ye[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it."
var be={},we=function(t,e,i){function n(t){v.cssText=t}function o(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var n in t){var o=t[n]
if(!s(o,"-")&&v[o]!==i)return"pfx"==e?o:!0}return!1}function a(t,e,n){for(var s in t){var r=e[t[s]]
if(r!==i)return n===!1?t[s]:o(r,"function")?r.bind(n||e):r}return!1}function l(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+w.join(n+" ")+n).split(" ")
return o(e,"string")||o(e,"undefined")?r(s,e):(s=(t+" "+x.join(n+" ")+n).split(" "),a(s,e,i))}var c,h,d,u="2.6.2",p={},f=e.documentElement,m="modernizr",g=e.createElement(m),v=g.style,y=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),b="Webkit Moz O ms",w=b.split(" "),x=b.toLowerCase().split(" "),_={},C=[],S=C.slice,E=function(t,i,n,o){var s,r,a,l,c=e.createElement("div"),h=e.body,d=h||e.createElement("body")
if(parseInt(n,10))for(;n--;)a=e.createElement("div"),a.id=o?o[n]:m+(n+1),c.appendChild(a)
return s='&#173;<style id="s'+m+'">'+t+"</style>",c.id=m,(h?c:d).innerHTML+=s,d.appendChild(c),h||(d.style.background="",d.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),r=i(c,t),h?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),f.style.overflow=l),!!r},T={}.hasOwnProperty
d=o(T,"undefined")||o(T.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return T.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this
if("function"!=typeof e)throw new TypeError
var i=S.call(arguments,1),n=function(){if(this instanceof n){var o=function(){}
o.prototype=e.prototype
var s=new o,r=e.apply(s,i.concat(S.call(arguments)))
return Object(r)===r?r:s}return e.apply(t,i.concat(S.call(arguments)))}
return n}),_.csstransforms3d=function(){var t=!!l("perspective")
return t}
for(var k in _)d(_,k)&&(h=k.toLowerCase(),p[h]=_[k](),C.push((p[h]?"":"no-")+h))
return p.addTest=function(t,e){if("object"==typeof t)for(var n in t)d(t,n)&&p.addTest(n,t[n])
else{if(t=t.toLowerCase(),p[t]!==i)return p
e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(f.className+=" "+(e?"":"no-")+t),p[t]=e}return p},n(""),g=c=null,p._version=u,p._prefixes=y,p._domPrefixes=x,p._cssomPrefixes=w,p.testProp=function(t){return r([t])},p.testAllProps=l,p.testStyles=E,p.prefixed=function(t,e,i){return e?l(t,e,i):l(t,"pfx")},p}(t,e),xe={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},_e="webkit moz o ms khtml".split(" ")
if(void 0!==e.cancelFullScreen)xe.ok=!0
else for(var Ce=0,Se=_e.length;Se>Ce;Ce++)if(xe.prefix=_e[Ce],void 0!==e[xe.prefix+"CancelFullScreen"]){xe.ok=!0
break}xe.ok&&(xe.event=xe.prefix+"fullscreenchange",xe.is=function(){switch(this.prefix){case"":return e.fullScreen
case"webkit":return e.webkitIsFullScreen
default:return e[this.prefix+"FullScreen"]}},xe.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},xe.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()})
var Ee,Te={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},ke={top:"auto",left:"auto",className:""}
!function(t,e){Ee=e()}(this,function(){function t(t,i){var n,o=e.createElement(t||"div")
for(n in i)o[n]=i[n]
return o}function i(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e])
return t}function n(t,e,i,n){var o=["opacity",e,~~(100*t),i,n].join("-"),s=.01+i/n*100,r=Math.max(1-(1-t)/e*(100-s),t),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||""
return f[o]||(m.insertRule("@"+l+"keyframes "+o+"{0%{opacity:"+r+"}"+s+"%{opacity:"+t+"}"+(s+.01)+"%{opacity:1}"+(s+e)%100+"%{opacity:"+t+"}100%{opacity:"+r+"}}",m.cssRules.length),f[o]=1),o}function s(t,e){var i,n,s=t.style
for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<p.length;n++)if(i=p[n]+e,s[i]!==o)return i
return s[e]!==o?e:void 0}function r(t,e){for(var i in e)t.style[s(t,i)||i]=e[i]
return t}function a(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]
for(var n in i)t[n]===o&&(t[n]=i[n])}return t}function l(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop
return e}function c(t,e){return"string"==typeof t?t:t[e%t.length]}function h(t){return void 0===this?new h(t):void(this.opts=a(t||{},h.defaults,g))}function d(){function e(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(t,n){function o(){return r(e("group",{coordsize:h+" "+h,coordorigin:-l+" "+-l}),{width:h,height:h})}function s(t,s,a){i(u,i(r(o(),{rotation:360/n.lines*t+"deg",left:~~s}),i(r(e("roundrect",{arcsize:n.corners}),{width:l,height:n.width,left:n.radius,top:-n.width>>1,filter:a}),e("fill",{color:c(n.color,t),opacity:n.opacity}),e("stroke",{opacity:0}))))}var a,l=n.length+n.width,h=2*l,d=2*-(n.width+n.length)+"px",u=r(o(),{position:"absolute",top:d,left:d})
if(n.shadow)for(a=1;a<=n.lines;a++)s(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
for(a=1;a<=n.lines;a++)s(a)
return i(t,u)},h.prototype.opacity=function(t,e,i,n){var o=t.firstChild
n=n.shadow&&n.lines||0,o&&e+n<o.childNodes.length&&(o=o.childNodes[e+n],o=o&&o.firstChild,o=o&&o.firstChild,o&&(o.opacity=i))}}var u,p=["webkit","Moz","ms","O"],f={},m=function(){var n=t("style",{type:"text/css"})
return i(e.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),g={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"}
h.defaults={},a(h.prototype,{spin:function(e){this.stop()
var i,n,o=this,s=o.opts,a=o.el=r(t(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),c=s.radius+s.length+s.width
if(e&&(e.insertBefore(a,e.firstChild||null),n=l(e),i=l(a),r(a,{left:("auto"==s.left?n.x-i.x+(e.offsetWidth>>1):parseInt(s.left,10)+c)+"px",top:("auto"==s.top?n.y-i.y+(e.offsetHeight>>1):parseInt(s.top,10)+c)+"px"})),a.setAttribute("role","progressbar"),o.lines(a,o.opts),!u){var h,d=0,p=(s.lines-1)*(1-s.direction)/2,f=s.fps,m=f/s.speed,g=(1-s.opacity)/(m*s.trail/100),v=m/s.lines
!function y(){d++
for(var t=0;t<s.lines;t++)h=Math.max(1-(d+(s.lines-t)*v)%m*g,s.opacity),o.opacity(a,t*s.direction+p,h,s)
o.timeout=o.el&&setTimeout(y,~~(1e3/f))}()}return o},stop:function(){var t=this.el
return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=o),this},lines:function(e,o){function s(e,i){return r(t(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*l+o.rotate)+"deg) translate("+o.radius+"px,0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var a,l=0,h=(o.lines-1)*(1-o.direction)/2;l<o.lines;l++)a=r(t(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&n(o.opacity,o.trail,h+l*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&i(a,r(s("#000","0 0 4px #000"),{top:"2px"})),i(e,i(a,s(c(o.color,l),"0 0 1px rgba(0,0,0,.1)")))
return e},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}})
var v=r(t("group"),{behavior:"url(#default#VML)"})
return!s(v,"transform")&&v.adj?d():u=s(v,"animation"),h})
var Ie,Pe,$e=n(t),De=n(e),Ae="quirks"===i.hash.replace("#",""),Me=we.csstransforms3d,ze=Me&&!Ae,Le=Me||"CSS1Compat"===e.compatMode,Oe=xe.ok,je=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Ne=!ze||je,Re=navigator.msPointerEnabled,We="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==o?"mousewheel":"DOMMouseScroll",Fe=250,He=300,Be=1400,Ye=5e3,Xe=2,Ue=64,qe=500,Qe=333,Ve="$stageFrame",Ze="$navDotFrame",Ge="$navThumbFrame",Ke="auto",Je=s([.1,0,.25,1]),ti=99999,ei="50%",ii={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Xe,glimpse:0,fit:"contain",position:ei,thumbposition:ei,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Ue,thumbheight:Ue,thumbmargin:Xe,thumbborderwidth:Xe,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:He,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},ni={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1}
A.stop=function(t){A.ii[t]=!1}
var oi,si,ri,ai
jQuery.Fotorama=function(t,o){function s(){n.each(Si,function(t,e){if(!e.i){e.i=pn++
var i=T(e.video,!0)
if(i){var n={}
e.video=i,e.img||e.thumb?e.thumbsReady=!0:n=k(e,Si,cn),I(Si,{img:n.img,thumb:n.thumb},e.i,cn)}}})}function r(t){return Gi[t]||cn.fullScreen}function l(t){var e="keydown."+lt,i=lt+hn,n="keydown."+i,s="resize."+i+" orientationchange."+i
t?(De.on(n,function(t){var e,i
Ii&&27===t.keyCode?(e=!0,ui(Ii,!0,!0)):(cn.fullScreen||o.keyboard&&!cn.index)&&(27===t.keyCode?(e=!0,cn.cancelFullScreen()):t.shiftKey&&32===t.keyCode&&r("space")||37===t.keyCode&&r("left")||38===t.keyCode&&r("up")?i="<":32===t.keyCode&&r("space")||39===t.keyCode&&r("right")||40===t.keyCode&&r("down")?i=">":36===t.keyCode&&r("home")?i="<<":35===t.keyCode&&r("end")&&(i=">>")),(e||i)&&Z(t),i&&cn.show({index:i,slow:t.altKey,user:!0})}),cn.index||De.off(e).on(e,"textarea, input, select",function(t){!Pe.hasClass(ct)&&t.stopPropagation()}),$e.on(s,cn.resize)):(De.off(n),$e.off(s))}function c(e){e!==c.f&&(e?(t.html("").addClass(lt+" "+dn).append(vn).before(mn).before(gn),rt(cn)):(vn.detach(),mn.detach(),gn.detach(),t.html(fn.urtext).removeClass(dn),at(cn)),l(e),c.f=e)}function u(){Si=cn.data=Si||F(o.data)||P(t),Ei=cn.size=Si.length,!Ci.ok&&o.shuffle&&W(Si),s(),On=S(On),Ei&&c(!0)}function f(){var t=2>Ei&&!o.enableifsingleframe||Ii
Rn.noMove=t||Yi,Rn.noSwipe=t||!o.swipe,!Qi&&bn.toggleClass(kt,!o.click&&!Rn.noMove&&!Rn.noSwipe),Re&&vn.toggleClass(yt,!Rn.noSwipe)}function b(t){t===!0&&(t=""),o.autoplay=Math.max(+t||Ye,1.5*qi)}function w(){function t(t,i){e[t?"add":"remove"].push(i)}cn.options=o=B(o),Yi="crossfade"===o.transition||"dissolve"===o.transition,Ni=o.loop&&(Ei>2||Yi&&(!Qi||"slide"!==Qi)),qi=+o.transitionduration||He,Zi="rtl"===o.direction,Gi=n.extend({},o.keyboard&&ni,o.keyboard)
var e={add:[],remove:[]}
Ei>1||o.enableifsingleframe?(Ri=o.nav,Fi="top"===o.navposition,e.remove.push(Vt),Cn.toggle(!!o.arrows)):(Ri=!1,Cn.hide()),Bt(),ki=new Ee(n.extend(Te,o.spinner,ke,{direction:Zi?-1:1})),Ae(),Me(),o.autoplay&&b(o.autoplay),Xi=p(o.thumbwidth)||Ue,Ui=p(o.thumbheight)||Ue,Wn.ok=Hn.ok=o.trackpad&&!Ne,f(),oi(o,[Nn]),Wi="thumbs"===Ri,Wi?(de(Ei,"navThumb"),Ti=In,ln=Ge,L(mn,n.Fotorama.jst.style({w:Xi,h:Ui,b:o.thumbborderwidth,m:o.thumbmargin,s:hn,q:!Le})),En.addClass(jt).removeClass(Ot)):"dots"===Ri?(de(Ei,"navDot"),Ti=kn,ln=Ze,En.addClass(Ot).removeClass(jt)):(Ri=!1,En.removeClass(jt+" "+Ot)),Ri&&(Fi?Sn.insertBefore(yn):Sn.insertAfter(yn),_e.nav=!1,_e(Ti,Tn,"nav")),Hi=o.allowfullscreen,Hi?($n.prependTo(yn),Bi=Oe&&"native"===Hi):($n.detach(),Bi=!1),t(Yi,ft),t(!Yi,mt),t(!o.captions,xt),t(Zi,bt),t("always"!==o.arrows,_t),Vi=o.shadows&&!Ne,t(!Vi,vt),vn.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")),jn=n.extend({},o)}function C(t){return 0>t?(Ei+t%Ei)%Ei:t>=Ei?t%Ei:t}function S(t){return a(t,0,Ei-1)}function E(t){return Ni?C(t):S(t)}function $(t){return t>0||Ni?t-1:!1}function U(t){return Ei-1>t||Ni?t+1:!1}function K(){Rn.min=Ni?-1/0:-v(Ei-1,Nn.w,o.margin,Di),Rn.max=Ni?1/0:-v(0,Nn.w,o.margin,Di),Rn.snap=Nn.w+o.margin}function et(){Fn.min=Math.min(0,Nn.nw-Tn.width()),Fn.max=0,Tn.toggleClass(kt,!(Fn.noMove=Fn.min===Fn.max))}function it(t,e,i){if("number"==typeof t){t=Array(t)
var o=!0}return n.each(t,function(t,n){if(o&&(n=t),"number"==typeof n){var s=Si[C(n)]
if(s){var r="$"+e+"Frame",a=s[r]
i.call(this,t,n,s,a,r,a&&a.data())}}})}function st(t,e,i,n){(!Ki||"*"===Ki&&n===ji)&&(t=g(o.width)||g(t)||qe,e=g(o.height)||g(e)||Qe,cn.resize({width:t,ratio:o.ratio||i||t/e},0,n!==ji&&"*"))}function Ft(t,e,i,s,r,a){it(t,e,function(t,l,c,h,d,u){function p(t){var e=C(l)
si(t,{index:e,src:_,frame:Si[e]})}function f(){b.remove(),n.Fotorama.cache[_]="error",c.html&&"stage"===e||!S||S===_?(!_||c.html||v?"stage"===e&&(h.trigger("f:load").removeClass(te+" "+Jt).addClass(ee),p("load"),st()):(h.trigger("f:error").removeClass(te).addClass(Jt),p("error")),u.state="error",!(Ei>1&&Si[l]===c)||c.html||c.deleted||c.video||v||(c.deleted=!0,cn.splice(l,1))):(c[x]=_=S,Ft([l],e,i,s,r,!0))}function m(){n.Fotorama.measures[_]=w.measures=n.Fotorama.measures[_]||{width:y.width,height:y.height,ratio:y.width/y.height},st(w.measures.width,w.measures.height,w.measures.ratio,l),b.off("load error").addClass(se+(v?" "+re:"")).prependTo(h),z(b,(n.isFunction(i)?i():i)||Nn,s||c.fit||o.fit,r||c.position||o.position),n.Fotorama.cache[_]=u.state="loaded",setTimeout(function(){h.trigger("f:load").removeClass(te+" "+Jt).addClass(ee+" "+(v?ie:ne)),"stage"===e?p("load"):(c.thumbratio===Ke||!c.thumbratio&&o.thumbratio===Ke)&&(c.thumbratio=w.measures.ratio,xi())},0)}function g(){var t=10
A(function(){return!rn||!t--&&!Ne},function(){m()})}if(h){var v=cn.fullScreen&&c.full&&c.full!==c.img&&!u.$full&&"stage"===e
if(!u.$img||a||v){var y=new Image,b=n(y),w=b.data()
u[v?"$full":"$img"]=b
var x="stage"===e?v?"full":"img":"thumb",_=c[x],S=v?null:c["stage"===e?"thumb":"img"]
if("navThumb"===e&&(h=u.$wrap),!_)return void f()
n.Fotorama.cache[_]?!function E(){"error"===n.Fotorama.cache[_]?f():"loaded"===n.Fotorama.cache[_]?setTimeout(g,0):setTimeout(E,100)}():(n.Fotorama.cache[_]="*",b.on("load",g).on("error",f)),u.state="",y.src=_}}})}function Ht(t){Ln.append(ki.spin().el).appendTo(t)}function Bt(){Ln.detach(),ki&&ki.stop()}function Yt(){var t=Pi[Ve]
t&&!t.data().state&&(Ht(t),t.on("f:load f:error",function(){t.off("f:load f:error"),Bt()}))}function oe(t){Q(t,yi),V(t,function(){setTimeout(function(){H(En)},0),Be({time:qi,guessIndex:n(this).data().eq,minMax:Fn})})}function de(t,e){it(t,e,function(t,i,o,s,r,a){if(!s){s=o[r]=vn[r].clone(),a=s.data(),a.data=o
var l=s[0]
"stage"===e?(o.html&&n('<div class="'+he+'"></div>').append(o._html?n(o.html).removeAttr("id").html(o._html):o.html).appendTo(s),o.caption&&n(R(fe,R(me,o.caption))).appendTo(s),o.video&&s.addClass(Et).append(An.clone()),V(l,function(){setTimeout(function(){H(yn)},0),mi({index:a.eq,user:!0})}),wn=wn.add(s)):"navDot"===e?(oe(l),kn=kn.add(s)):"navThumb"===e&&(oe(l),a.$wrap=s.children(":first"),In=In.add(s),o.video&&a.$wrap.append(An.clone()))}})}function ye(t,e,i,n){return t&&t.length&&z(t,e,i,n)}function be(t){it(t,"stage",function(t,e,i,s,r,a){if(s){var l=C(e),c=i.fit||o.fit,h=i.position||o.position
a.eq=l,Yn[Ve][l]=s.css(n.extend({left:Yi?0:v(e,Nn.w,o.margin,Di)},Yi&&d(0))),D(s[0])&&(s.appendTo(bn),ui(i.$video)),ye(a.$img,Nn,c,h),ye(a.$full,Nn,c,h)}})}function we(t,e){if("thumbs"===Ri&&!isNaN(t)){var i=-t,s=-t+Nn.nw
In.each(function(){var t=n(this),r=t.data(),a=r.eq,l=function(){return{h:Ui,w:r.w}},c=l(),h=Si[a]||{},d=h.thumbfit||o.thumbfit,u=h.thumbposition||o.thumbposition
c.w=r.w,r.l+r.w<i||r.l>s||ye(r.$img,c,d,u)||e&&Ft([a],"navThumb",l,d,u)})}}function _e(t,e,i){if(!_e[i]){var s="nav"===i&&Wi,r=0
e.append(t.filter(function(){for(var t,e=n(this),i=e.data(),o=0,s=Si.length;s>o;o++)if(i.data===Si[o]){t=!0,i.eq=o
break}return t||e.remove()&&!1}).sort(function(t,e){return n(t).data().eq-n(e).data().eq}).each(function(){if(s){var t=n(this),e=t.data(),i=Math.round(Ui*e.data.thumbratio)||Xi
e.l=r,e.w=i,t.css({width:i}),r+=i+o.thumbmargin}})),_e[i]=!0}}function Ce(t){return t-Xn>Nn.w/3}function Se(t){return!(Ni||On+t&&On-Ei+t||Ii)}function Ae(){var t=Se(0),e=Se(1)
xn.toggleClass($t,t).attr(q(t)),_n.toggleClass($t,e).attr(q(e))}function Me(){Wn.ok&&(Wn.prevent={"<":Se(0),">":Se(1)})}function je(t){var e,i,n=t.data()
return Wi?(e=n.l,i=n.w):(e=t.position().left,i=t.width()),{c:e+i/2,min:-e+10*o.thumbmargin,max:-e+Nn.w-i-10*o.thumbmargin}}function We(t){var e=Pi[ln].data()
J(Pn,{time:1.2*t,pos:e.l,width:e.w-2*o.thumbborderwidth})}function Be(t){var e=Si[t.guessIndex][ln]
if(e){var i=Fn.min!==Fn.max,n=t.minMax||i&&je(Pi[ln]),o=i&&(t.keep&&Be.l?Be.l:a((t.coo||Nn.nw/2)-je(e).c,n.min,n.max)),s=i&&a(o,Fn.min,Fn.max),r=1.1*t.time
J(Tn,{time:r,pos:s||0,onEnd:function(){we(s,!0)}}),di(En,O(s,Fn.min,Fn.max)),Be.l=o}}function Xe(){Je(ln),Bn[ln].push(Pi[ln].addClass(Qt))}function Je(t){for(var e=Bn[t];e.length;)e.shift().removeClass(Qt)}function ei(t){var e=Yn[t]
n.each($i,function(t,i){delete e[C(i)]}),n.each(e,function(t,i){delete e[t],i.detach()})}function ii(t){Di=Ai=On
var e=Pi[Ve]
e&&(Je(Ve),Bn[Ve].push(e.addClass(Qt)),t||cn.show.onEnd(!0),x(bn,0,!0),ei(Ve),be($i),K(),et())}function oi(t,e){t&&n.each(e,function(e,i){i&&n.extend(i,{width:t.width||i.width,height:t.height,minwidth:t.minwidth,maxwidth:t.maxwidth,minheight:t.minheight,maxheight:t.maxheight,ratio:Y(t.ratio)})})}function si(e,i){t.trigger(lt+":"+e,[cn,i])}function ri(){clearTimeout(ai.t),rn=1,o.stopautoplayontouch?cn.stopAutoplay():nn=!0}function ai(){rn&&(o.stopautoplayontouch||(li(),ci()),ai.t=setTimeout(function(){rn=0},He+Fe))}function li(){nn=!(!Ii&&!on)}function ci(){if(clearTimeout(ci.t),A.stop(ci.w),!o.autoplay||nn)return void(cn.autoplay&&(cn.autoplay=!1,si("stopautoplay")))
cn.autoplay||(cn.autoplay=!0,si("startautoplay"))
var t=On,e=Pi[Ve].data()
ci.w=A(function(){return e.state||t!==On},function(){ci.t=setTimeout(function(){if(!nn&&t===On){var e=Oi,i=Si[e][Ve].data()
ci.w=A(function(){return i.state||e!==Oi},function(){nn||e!==Oi||cn.show(Ni?G(!Zi):Oi)})}},o.autoplay)})}function hi(){cn.fullScreen&&(cn.fullScreen=!1,Oe&&xe.cancel(un),Pe.removeClass(ct),Ie.removeClass(ct),t.removeClass(Gt).insertAfter(gn),Nn=n.extend({},sn),ui(Ii,!0,!0),vi("x",!1),cn.resize(),Ft($i,"stage"),H($e,tn,Ji),si("fullscreenexit"))}function di(t,e){Vi&&(t.removeClass(Ut+" "+qt),e&&!Ii&&t.addClass(e.replace(/^|\s/g," "+Xt+"--")))}function ui(t,e,i){e&&(vn.removeClass(pt),Ii=!1,f()),t&&t!==Ii&&(t.remove(),si("unloadvideo")),i&&(li(),ci())}function pi(t){vn.toggleClass(gt,t)}function fi(t){if(!Rn.flow){var e=t?t.pageX:fi.x,i=e&&!Se(Ce(e))&&o.click
fi.p!==i&&yn.toggleClass(It,i)&&(fi.p=i,fi.x=e)}}function mi(t){clearTimeout(mi.t),o.clicktransition&&o.clicktransition!==o.transition?setTimeout(function(){var e=o.transition
cn.setOptions({transition:o.clicktransition}),Qi=e,mi.t=setTimeout(function(){cn.show(t)},10)},0):cn.show(t)}function gi(t,e){var i=t.target,s=n(i)
s.hasClass(ue)?cn.playVideo():i===Dn?cn.toggleFullScreen():Ii?i===zn&&ui(Ii,!0,!0):e?pi():o.click&&mi({index:t.shiftKey||G(Ce(t._x)),slow:t.altKey,user:!0})}function vi(t,e){Rn[t]=Fn[t]=e}function yi(t){var e=n(this).data().eq
mi({index:e,slow:t.altKey,user:!0,coo:t._x-En.offset().left})}function bi(t){mi({index:Cn.index(this)?">":"<",slow:t.altKey,user:!0})}function wi(t){V(t,function(){setTimeout(function(){H(yn)},0),pi(!1)})}function xi(){if(u(),w(),!xi.i){xi.i=!0
var t=o.startindex;(t||o.hash&&i.hash)&&(ji=j(t||i.hash.replace(/^#/,""),Si,0===cn.index||t,t)),On=Di=Ai=Mi=ji=E(ji)||0}if(Ei){if(_i())return
Ii&&ui(Ii,!0),$i=[],ei(Ve),xi.ok=!0,cn.show({index:On,time:0}),cn.resize()}else cn.destroy()}function _i(){return!_i.f===Zi?(_i.f=Zi,On=Ei-1-On,cn.reverse(),!0):void 0}function Ci(){Ci.ok||(Ci.ok=!0,si("ready"))}Ie=n("html"),Pe=n("body")
var Si,Ei,Ti,ki,Ii,Pi,$i,Di,Ai,Mi,zi,Li,Oi,ji,Ni,Ri,Wi,Fi,Hi,Bi,Yi,Xi,Ui,qi,Qi,Vi,Zi,Gi,Ki,Ji,tn,en,nn,on,sn,rn,an,ln,cn=this,hn=n.now(),dn=lt+hn,un=t[0],pn=1,fn=t.data(),mn=n("<style></style>"),gn=n(R(Zt)),vn=n(R(ht)),yn=n(R(Ct)).appendTo(vn),bn=(yn[0],n(R(Tt)).appendTo(yn)),wn=n(),xn=n(R(Pt+" "+Dt+ve)),_n=n(R(Pt+" "+At+ve)),Cn=xn.add(_n).appendTo(yn),Sn=n(R(zt)),En=n(R(Mt)).appendTo(Sn),Tn=n(R(Lt)).appendTo(En),kn=n(),In=n(),Pn=(bn.data(),Tn.data(),n(R(ce)).appendTo(Tn)),$n=n(R(Kt+ve)),Dn=$n[0],An=n(R(ue)),Mn=n(R(pe)).appendTo(yn),zn=Mn[0],Ln=n(R(ge)),On=!1,jn={},Nn={},Rn={},Wn={},Fn={},Hn={},Bn={},Yn={},Xn=0,Un=[]
vn[Ve]=n(R(St)),vn[Ge]=n(R(Nt+" "+Wt+ve,R(le))),vn[Ze]=n(R(Nt+" "+Rt+ve,R(ae))),Bn[Ve]=[],Bn[Ge]=[],Bn[Ze]=[],Yn[Ve]={},vn.addClass(ze?ut:dt).toggleClass(gt,!o.controlsonstart),fn.fotorama=this,cn.startAutoplay=function(t){return cn.autoplay?this:(nn=on=!1,b(t||o.autoplay),ci(),this)},cn.stopAutoplay=function(){return cn.autoplay&&(nn=on=!0,ci()),this},cn.show=function(t){var e
"object"!=typeof t?(e=t,t={}):e=t.index,e=">"===e?Ai+1:"<"===e?Ai-1:"<<"===e?0:">>"===e?Ei-1:e,e=isNaN(e)?j(e,Si,!0):e,e=void 0===e?On||0:e,cn.activeIndex=On=E(e),zi=$(On),Li=U(On),Oi=C(On+(Zi?-1:1)),$i=[On,zi,Li],Ai=Ni?e:On
var i=Math.abs(Mi-Ai),n=_(t.time,function(){return Math.min(qi*(1+(i-1)/12),2*qi)}),s=t.overPos
t.slow&&(n*=10)
var r=Pi
cn.activeFrame=Pi=Si[On]
var l=r===Pi&&!t.user
ui(Ii,Pi.i!==Si[C(Di)].i),de($i,"stage"),be(Ne?[Ai]:[Ai,$(Ai),U(Ai)]),vi("go",!0),l||si("show",{user:t.user,time:n}),nn=!0
var c=cn.show.onEnd=function(e){if(!c.ok){if(c.ok=!0,e||ii(!0),l||si("showend",{user:t.user}),!e&&Qi&&Qi!==o.transition)return cn.setOptions({transition:Qi}),void(Qi=!1)
Yt(),Ft($i,"stage"),vi("go",!1),Me(),fi(),li(),ci()}}
if(Yi){var h=Pi[Ve],d=On!==Mi?Si[Mi][Ve]:null
tt(h,d,wn,{time:n,method:o.transition,onEnd:c},Un)}else J(bn,{pos:-v(Ai,Nn.w,o.margin,Di),overPos:s,time:n,onEnd:c})
if(Ae(),Ri){Xe()
var u=S(On+a(Ai-Mi,-1,1))
Be({time:n,coo:u!==On&&t.coo,guessIndex:void 0!==t.coo?u:On,keep:l}),Wi&&We(n)}return en=void 0!==Mi&&Mi!==On,Mi=On,o.hash&&en&&!cn.eq&&M(Pi.id||On+1),this},cn.requestFullScreen=function(){return Hi&&!cn.fullScreen&&(Ji=$e.scrollTop(),tn=$e.scrollLeft(),H($e),vi("x",!0),sn=n.extend({},Nn),t.addClass(Gt).appendTo(Pe.addClass(ct)),Ie.addClass(ct),ui(Ii,!0,!0),cn.fullScreen=!0,Bi&&xe.request(un),cn.resize(),Ft($i,"stage"),Yt(),si("fullscreenenter")),this},cn.cancelFullScreen=function(){return Bi&&xe.is()?xe.cancel(e):hi(),this},cn.toggleFullScreen=function(){return cn[(cn.fullScreen?"cancel":"request")+"FullScreen"]()},X(e,xe.event,function(){!Si||xe.is()||Ii||hi()}),cn.resize=function(t){if(!Si)return this
var e=arguments[1]||0,i=arguments[2]
oi(cn.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:B(t),[Nn,i||cn.fullScreen||o])
var n=Nn.width,s=Nn.height,r=Nn.ratio,l=$e.height()-(Ri?En.height():0)
return g(n)&&(vn.addClass(wt).css({width:n,minWidth:Nn.minwidth||0,maxWidth:Nn.maxwidth||ti}),n=Nn.W=Nn.w=vn.width(),Nn.nw=Ri&&m(o.navwidth,n)||n,o.glimpse&&(Nn.w-=Math.round(2*(m(o.glimpse,n)||0))),bn.css({width:Nn.w,marginLeft:(Nn.W-Nn.w)/2}),s=m(s,l),s=s||r&&n/r,s&&(n=Math.round(n),s=Nn.h=Math.round(a(s,m(Nn.minheight,l),m(Nn.maxheight,l))),yn.stop().animate({width:n,height:s},e,function(){vn.removeClass(wt)}),ii(),Ri&&(En.stop().animate({width:Nn.nw},e),Be({guessIndex:On,time:e,keep:!0}),Wi&&_e.nav&&We(e)),Ki=i||!0,Ci())),Xn=yn.offset().left,this},cn.setOptions=function(t){return n.extend(o,t),xi(),this},cn.shuffle=function(){return Si&&W(Si)&&xi(),this},cn.destroy=function(){return cn.cancelFullScreen(),cn.stopAutoplay(),Si=cn.data=null,c(),$i=[],ei(Ve),xi.ok=!1,this},cn.playVideo=function(){var t=Pi,e=t.video,i=On
return"object"==typeof e&&t.videoReady&&(Bi&&cn.fullScreen&&cn.cancelFullScreen(),A(function(){return!xe.is()||i!==On},function(){i===On&&(t.$video=t.$video||n(n.Fotorama.jst.video(e)),t.$video.appendTo(t[Ve]),vn.addClass(pt),Ii=t.$video,f(),Cn.blur(),$n.blur(),si("loadvideo"))})),this},cn.stopVideo=function(){return ui(Ii,!0,!0),this},yn.on("mousemove",fi),Rn=nt(bn,{onStart:ri,onMove:function(t,e){di(yn,e.edge)},onTouchEnd:ai,onEnd:function(t){di(yn)
var e=(Re&&!an||t.touch)&&o.arrows&&"always"!==o.arrows
if(t.moved||e&&t.pos!==t.newPos&&!t.control){var i=y(t.newPos,Nn.w,o.margin,Di)
cn.show({index:i,time:Yi?qi:t.time,overPos:t.overPos,user:!0})}else t.aborted||t.control||gi(t.startEvent,e)},timeLow:1,timeHigh:1,friction:2,select:"."+Vt+", ."+Vt+" *",$wrap:yn}),Fn=nt(Tn,{onStart:ri,onMove:function(t,e){di(En,e.edge)},onTouchEnd:ai,onEnd:function(t){function e(){Be.l=t.newPos,li(),ci(),we(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(nn=!0,J(Tn,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),we(t.newPos),Vi&&di(En,O(t.newPos,Fn.min,Fn.max))):e()
else{var i=t.$target.closest("."+Nt,Tn)[0]
i&&yi.call(i,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:En}),Wn=ot(yn,{shift:!0,onEnd:function(t,e){ri(),ai(),cn.show({index:e,slow:t.altKey})}}),Hn=ot(En,{onEnd:function(t,e){ri(),ai()
var i=x(Tn)+.25*e
Tn.css(h(a(i,Fn.min,Fn.max))),Vi&&di(En,O(i,Fn.min,Fn.max)),Hn.prevent={"<":i>=Fn.max,">":i<=Fn.min},clearTimeout(Hn.t),Hn.t=setTimeout(function(){Be.l=i,we(i,!0)},Fe),we(i)}}),vn.hover(function(){setTimeout(function(){rn||pi(!(an=!0))},0)},function(){an&&pi(!(an=!1))}),N(Cn,function(t){Z(t),bi.call(this,t)},{onStart:function(){ri(),Rn.control=!0},onTouchEnd:ai}),Cn.each(function(){Q(this,function(t){bi.call(this,t)}),wi(this)}),Q(Dn,cn.toggleFullScreen),wi(Dn),n.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){cn[e]=function(){return Si=Si||[],"load"!==e?Array.prototype[e].apply(Si,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Si=F(arguments[0])),xi(),cn}}),xi()},n.fn.fotorama=function(e){return this.each(function(){var i=this,o=n(this),s=o.data(),r=s.fotorama
r?r.setOptions(e,!0):A(function(){return!$(i)},function(){s.urtext=o.html(),new n.Fotorama(o,n.extend({},ii,t.fotoramaDefaults,e,s))})})},n.Fotorama.instances=[],n.Fotorama.cache={},n.Fotorama.measures={},n=n||{},n.Fotorama=n.Fotorama||{},n.Fotorama.jst=n.Fotorama.jst||{},n.Fotorama.jst.style=function(t){var e,i=""
return be.escape,i+=".fotorama"+(null==(e=t.s)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(e=t.m)?"":e)+"px;\nheight:"+(null==(e=t.h)?"":e)+"px}\n.fotorama"+(null==(e=t.s)?"":e)+" .fotorama__thumb-border{\nheight:"+(null==(e=t.h-t.b*(t.q?0:2))?"":e)+"px;\nborder-width:"+(null==(e=t.b)?"":e)+"px;\nmargin-top:"+(null==(e=t.m)?"":e)+"px}"},n.Fotorama.jst.video=function(t){function e(){i+=n.call(arguments,"")}var i="",n=(be.escape,Array.prototype.join)
return i+='<div class="fotorama__video"><iframe src="',e(("youtube"==t.type?t.p+"youtube.com/embed/"+t.id+"?autoplay=1":"vimeo"==t.type?t.p+"player.vimeo.com/video/"+t.id+"?autoplay=1&badge=0":t.id)+(t.s&&"custom"!=t.type?"&"+t.s:"")),i+='" frameborder="0" allowfullscreen></iframe></div>\n'},n(function(){n("."+lt+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery),!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(t){var e,i,n,o,s,r,a="Close",l="BeforeClose",c="AfterClose",h="BeforeAppend",d="MarkupParse",u="Open",p="Change",f="mfp",m="."+f,g="mfp-ready",v="mfp-removing",y="mfp-prevent-close",b=function(){},w=!!window.jQuery,x=t(window),_=function(t,i){e.ev.on(f+t+m,i)},C=function(e,i,n,o){var s=document.createElement("div")
return s.className="mfp-"+e,n&&(s.innerHTML=n),o?i&&i.appendChild(s):(s=t(s),i&&s.appendTo(i)),s},S=function(i,n){e.ev.triggerHandler(f+i,n),e.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),e.st.callbacks[i]&&e.st.callbacks[i].apply(e,t.isArray(n)?n:[n]))},E=function(i){return i===r&&e.currTemplate.closeBtn||(e.currTemplate.closeBtn=t(e.st.closeMarkup.replace("%title%",e.st.tClose)),r=i),e.currTemplate.closeBtn},T=function(){t.magnificPopup.instance||(e=new b,e.init(),t.magnificPopup.instance=e)},k=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"]
if(void 0!==t.transition)return!0
for(;e.length;)if(e.pop()+"Transition"in t)return!0
return!1}
b.prototype={constructor:b,init:function(){var i=navigator.appVersion
e.isLowIE=e.isIE8=document.all&&!document.addEventListener,e.isAndroid=/android/gi.test(i),e.isIOS=/iphone|ipad|ipod/gi.test(i),e.supportsTransition=k(),e.probablyMobile=e.isAndroid||e.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=t(document),e.popupsCache={}},open:function(i){var o
if(i.isObj===!1){e.items=i.items.toArray(),e.index=0
var r,a=i.items
for(o=0;o<a.length;o++)if(r=a[o],r.parsed&&(r=r.el[0]),r===i.el[0]){e.index=o
break}}else e.items=t.isArray(i.items)?i.items:[i.items],e.index=i.index||0
if(e.isOpen)return void e.updateItemHTML()
e.types=[],s="",i.mainEl&&i.mainEl.length?e.ev=i.mainEl.eq(0):e.ev=n,i.key?(e.popupsCache[i.key]||(e.popupsCache[i.key]={}),e.currTemplate=e.popupsCache[i.key]):e.currTemplate={},e.st=t.extend(!0,{},t.magnificPopup.defaults,i),e.fixedContentPos="auto"===e.st.fixedContentPos?!e.probablyMobile:e.st.fixedContentPos,e.st.modal&&(e.st.closeOnContentClick=!1,e.st.closeOnBgClick=!1,e.st.showCloseBtn=!1,e.st.enableEscapeKey=!1),e.bgOverlay||(e.bgOverlay=C("bg").on("click"+m,function(){e.close()}),e.wrap=C("wrap").attr("tabindex",-1).on("click"+m,function(t){e._checkIfClose(t.target)&&e.close()}),e.container=C("container",e.wrap)),e.contentContainer=C("content"),e.st.preloader&&(e.preloader=C("preloader",e.container,e.st.tLoading))
var l=t.magnificPopup.modules
for(o=0;o<l.length;o++){var c=l[o]
c=c.charAt(0).toUpperCase()+c.slice(1),e["init"+c].call(e)}S("BeforeOpen"),e.st.showCloseBtn&&(e.st.closeBtnInside?(_(d,function(t,e,i,n){i.close_replaceWith=E(n.type)}),s+=" mfp-close-btn-in"):e.wrap.append(E())),e.st.alignTop&&(s+=" mfp-align-top"),e.fixedContentPos?e.wrap.css({overflow:e.st.overflowY,overflowX:"hidden",overflowY:e.st.overflowY}):e.wrap.css({top:x.scrollTop(),position:"absolute"}),(e.st.fixedBgPos===!1||"auto"===e.st.fixedBgPos&&!e.fixedContentPos)&&e.bgOverlay.css({height:n.height(),position:"absolute"}),e.st.enableEscapeKey&&n.on("keyup"+m,function(t){27===t.keyCode&&e.close()}),x.on("resize"+m,function(){e.updateSize()}),e.st.closeOnContentClick||(s+=" mfp-auto-cursor"),s&&e.wrap.addClass(s)
var h=e.wH=x.height(),p={}
if(e.fixedContentPos&&e._hasScrollBar(h)){var f=e._getScrollbarSize()
f&&(p.marginRight=f)}e.fixedContentPos&&(e.isIE7?t("body, html").css("overflow","hidden"):p.overflow="hidden")
var v=e.st.mainClass
return e.isIE7&&(v+=" mfp-ie7"),v&&e._addClassToMFP(v),e.updateItemHTML(),S("BuildControls"),t("html").css(p),e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo||t(document.body)),e._lastFocusedEl=document.activeElement,setTimeout(function(){e.content?(e._addClassToMFP(g),e._setFocus()):e.bgOverlay.addClass(g),n.on("focusin"+m,e._onFocusIn)},16),e.isOpen=!0,e.updateSize(h),S(u),i},close:function(){e.isOpen&&(S(l),e.isOpen=!1,e.st.removalDelay&&!e.isLowIE&&e.supportsTransition?(e._addClassToMFP(v),setTimeout(function(){e._close()},e.st.removalDelay)):e._close())},_close:function(){S(a)
var i=v+" "+g+" "
if(e.bgOverlay.detach(),e.wrap.detach(),e.container.empty(),e.st.mainClass&&(i+=e.st.mainClass+" "),e._removeClassFromMFP(i),e.fixedContentPos){var o={marginRight:""}
e.isIE7?t("body, html").css("overflow",""):o.overflow="",t("html").css(o)}n.off("keyup"+m+" focusin"+m),e.ev.off(m),e.wrap.attr("class","mfp-wrap").removeAttr("style"),e.bgOverlay.attr("class","mfp-bg"),e.container.attr("class","mfp-container"),!e.st.showCloseBtn||e.st.closeBtnInside&&e.currTemplate[e.currItem.type]!==!0||e.currTemplate.closeBtn&&e.currTemplate.closeBtn.detach(),e.st.autoFocusLast&&e._lastFocusedEl&&t(e._lastFocusedEl).focus(),e.currItem=null,e.content=null,e.currTemplate=null,e.prevHeight=0,S(c)},updateSize:function(t){if(e.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i
e.wrap.css("height",n),e.wH=n}else e.wH=t||x.height()
e.fixedContentPos||e.wrap.css("height",e.wH),S("Resize")},updateItemHTML:function(){var i=e.items[e.index]
e.contentContainer.detach(),e.content&&e.content.detach(),i.parsed||(i=e.parseEl(e.index))
var n=i.type
if(S("BeforeChange",[e.currItem?e.currItem.type:"",n]),e.currItem=i,!e.currTemplate[n]){var s=e.st[n]?e.st[n].markup:!1
S("FirstMarkupParse",s),s?e.currTemplate[n]=t(s):e.currTemplate[n]=!0}o&&o!==i.type&&e.container.removeClass("mfp-"+o+"-holder")
var r=e["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,e.currTemplate[n])
e.appendContent(r,n),i.preloaded=!0,S(p,i),o=i.type,e.container.prepend(e.contentContainer),S("AfterChange")},appendContent:function(t,i){e.content=t,t?e.st.showCloseBtn&&e.st.closeBtnInside&&e.currTemplate[i]===!0?e.content.find(".mfp-close").length||e.content.append(E()):e.content=t:e.content="",S(h),e.container.addClass("mfp-"+i+"-holder"),e.contentContainer.append(e.content)},parseEl:function(i){var n,o=e.items[i]
if(o.tagName?o={el:t(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var s=e.types,r=0;r<s.length;r++)if(o.el.hasClass("mfp-"+s[r])){n=s[r]
break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||e.st.type||"inline",o.index=i,o.parsed=!0,e.items[i]=o,S("ElementParse",o),e.items[i]},addGroup:function(t,i){var n=function(n){n.mfpEl=this,e._openClick(n,t,i)}
i||(i={})
var o="click.magnificPopup"
i.mainEl=t,i.items?(i.isObj=!0,t.off(o).on(o,n)):(i.isObj=!1,i.delegate?t.off(o).on(o,i.delegate,n):(i.items=t,t.off(o).on(o,n)))},_openClick:function(i,n,o){var s=void 0!==o.midClick?o.midClick:t.magnificPopup.defaults.midClick
if(s||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var r=void 0!==o.disableOn?o.disableOn:t.magnificPopup.defaults.disableOn
if(r)if(t.isFunction(r)){if(!r.call(e))return!0}else if(x.width()<r)return!0
i.type&&(i.preventDefault(),e.isOpen&&i.stopPropagation()),o.el=t(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),e.open(o)}},updateStatus:function(t,n){if(e.preloader){i!==t&&e.container.removeClass("mfp-s-"+i),n||"loading"!==t||(n=e.st.tLoading)
var o={status:t,text:n}
S("UpdateStatus",o),t=o.status,n=o.text,e.preloader.html(n),e.preloader.find("a").on("click",function(t){t.stopImmediatePropagation()}),e.container.addClass("mfp-s-"+t),i=t}},_checkIfClose:function(i){if(!t(i).hasClass(y)){var n=e.st.closeOnContentClick,o=e.st.closeOnBgClick
if(n&&o)return!0
if(!e.content||t(i).hasClass("mfp-close")||e.preloader&&i===e.preloader[0])return!0
if(i===e.content[0]||t.contains(e.content[0],i)){if(n)return!0}else if(o&&t.contains(document,i))return!0
return!1}},_addClassToMFP:function(t){e.bgOverlay.addClass(t),e.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),e.wrap.removeClass(t)},_hasScrollBar:function(t){return(e.isIE7?n.height():document.body.scrollHeight)>(t||x.height())},_setFocus:function(){(e.st.focus?e.content.find(e.st.focus).eq(0):e.wrap).focus()},_onFocusIn:function(i){return i.target===e.wrap[0]||t.contains(e.wrap[0],i.target)?void 0:(e._setFocus(),!1)},_parseMarkup:function(e,i,n){var o
n.data&&(i=t.extend(n.data,i)),S(d,[e,i,n]),t.each(i,function(i,n){if(void 0===n||n===!1)return!0
if(o=i.split("_"),o.length>1){var s=e.find(m+"-"+o[0])
if(s.length>0){var r=o[1]
"replaceWith"===r?s[0]!==n[0]&&s.replaceWith(n):"img"===r?s.is("img")?s.attr("src",n):s.replaceWith(t("<img>").attr("src",n).attr("class",s.attr("class"))):s.attr(o[1],n)}}else e.find(m+"-"+i).html(n)})},_getScrollbarSize:function(){if(void 0===e.scrollbarSize){var t=document.createElement("div")
t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),e.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return e.scrollbarSize}},t.magnificPopup={instance:null,proto:b.prototype,modules:[],open:function(e,i){return T(),e=e?t.extend(!0,{},e):{},e.isObj=!0,e.index=i||0,this.instance.open(e)},close:function(){return t.magnificPopup.instance&&t.magnificPopup.instance.close()},registerModule:function(e,i){i.options&&(t.magnificPopup.defaults[e]=i.options),t.extend(this.proto,i.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},t.fn.magnificPopup=function(i){T()
var n=t(this)
if("string"==typeof i)if("open"===i){var o,s=w?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0
s.items?o=s.items[r]:(o=n,s.delegate&&(o=o.find(s.delegate)),o=o.eq(r)),e._openClick({mfpEl:o},n,s)}else e.isOpen&&e[i].apply(e,Array.prototype.slice.call(arguments,1))
else i=t.extend(!0,{},i),w?n.data("magnificPopup",i):n[0].magnificPopup=i,e.addGroup(n,i)
return n}
var I,P,$,D="inline",A=function(){$&&(P.after($.addClass(I)).detach(),$=null)}
t.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){e.types.push(D),_(a+"."+D,function(){A()})},getInline:function(i,n){if(A(),i.src){var o=e.st.inline,s=t(i.src)
if(s.length){var r=s[0].parentNode
r&&r.tagName&&(P||(I=o.hiddenClass,P=C(I),I="mfp-"+I),$=s.after(P).detach().removeClass(I)),e.updateStatus("ready")}else e.updateStatus("error",o.tNotFound),s=t("<div>")
return i.inlineElement=s,s}return e.updateStatus("ready"),e._parseMarkup(n,{},i),n}}})
var M,z="ajax",L=function(){M&&t(document.body).removeClass(M)},O=function(){L(),e.req&&e.req.abort()}
t.magnificPopup.registerModule(z,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){e.types.push(z),M=e.st.ajax.cursor,_(a+"."+z,O),_("BeforeChange."+z,O)},getAjax:function(i){M&&t(document.body).addClass(M),e.updateStatus("loading")
var n=t.extend({url:i.src,success:function(n,o,s){var r={data:n,xhr:s}
S("ParseAjax",r),e.appendContent(t(r.data),z),i.finished=!0,L(),e._setFocus(),setTimeout(function(){e.wrap.addClass(g)},16),e.updateStatus("ready"),S("AjaxContentAdded")},error:function(){L(),i.finished=i.loadError=!0,e.updateStatus("error",e.st.ajax.tError.replace("%url%",i.src))}},e.st.ajax.settings)
return e.req=t.ajax(n),""}}})
var j,N=function(i){if(i.data&&void 0!==i.data.title)return i.data.title
var n=e.st.image.titleSrc
if(n){if(t.isFunction(n))return n.call(e,i)
if(i.el)return i.el.attr(n)||""}return""}
t.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=e.st.image,n=".image"
e.types.push("image"),_(u+n,function(){"image"===e.currItem.type&&i.cursor&&t(document.body).addClass(i.cursor)}),_(a+n,function(){i.cursor&&t(document.body).removeClass(i.cursor),x.off("resize"+m)}),_("Resize"+n,e.resizeImage),e.isLowIE&&_("AfterChange",e.resizeImage)},resizeImage:function(){var t=e.currItem
if(t&&t.img&&e.st.image.verticalFit){var i=0
e.isLowIE&&(i=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",e.wH-i)}},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,j&&clearInterval(j),t.isCheckingImgSize=!1,S("ImageHasSize",t),t.imgHidden&&(e.content&&e.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(t){var i=0,n=t.img[0],o=function(s){j&&clearInterval(j),j=setInterval(function(){return n.naturalWidth>0?void e._onImageHasSize(t):(i>200&&clearInterval(j),i++,void(3===i?o(10):40===i?o(50):100===i&&o(500)))},s)}
o(1)},getImage:function(i,n){var o=0,s=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===e.currItem&&(e._onImageHasSize(i),e.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,S("ImageLoadComplete")):(o++,200>o?setTimeout(s,100):r()))},r=function(){i&&(i.img.off(".mfploader"),i===e.currItem&&(e._onImageHasSize(i),e.updateStatus("error",a.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},a=e.st.image,l=n.find(".mfp-img")
if(l.length){var c=document.createElement("img")
c.className="mfp-img",i.el&&i.el.find("img").length&&(c.alt=i.el.find("img").attr("alt")),i.img=t(c).on("load.mfploader",s).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),c=i.img[0],c.naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return e._parseMarkup(n,{title:N(i),img_replaceWith:i.img},i),e.resizeImage(),i.hasSize?(j&&clearInterval(j),i.loadError?(n.addClass("mfp-loading"),e.updateStatus("error",a.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),e.updateStatus("ready")),n):(e.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),e.findImageSize(i)),n)}}})
var R,W=function(){return void 0===R&&(R=void 0!==document.createElement("p").style.MozTransform),R}
t.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t,i=e.st.zoom,n=".zoom"
if(i.enabled&&e.supportsTransition){var o,s,r=i.duration,c=function(t){var e=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},s="transition"
return o["-webkit-"+s]=o["-moz-"+s]=o["-o-"+s]=o[s]=n,e.css(o),e},h=function(){e.content.css("visibility","visible")}
_("BuildControls"+n,function(){if(e._allowZoom()){if(clearTimeout(o),e.content.css("visibility","hidden"),t=e._getItemToZoom(),!t)return void h()
s=c(t),s.css(e._getOffset()),e.wrap.append(s),o=setTimeout(function(){s.css(e._getOffset(!0)),o=setTimeout(function(){h(),setTimeout(function(){s.remove(),t=s=null,S("ZoomAnimationEnded")},16)},r)},16)}}),_(l+n,function(){if(e._allowZoom()){if(clearTimeout(o),e.st.removalDelay=r,!t){if(t=e._getItemToZoom(),!t)return
s=c(t)}s.css(e._getOffset(!0)),e.wrap.append(s),e.content.css("visibility","hidden"),setTimeout(function(){s.css(e._getOffset())},16)}}),_(a+n,function(){e._allowZoom()&&(h(),s&&s.remove(),t=null)})}},_allowZoom:function(){return"image"===e.currItem.type},_getItemToZoom:function(){return e.currItem.hasSize?e.currItem.img:!1},_getOffset:function(i){var n
n=i?e.currItem.img:e.st.zoom.opener(e.currItem.el||e.currItem)
var o=n.offset(),s=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10)
o.top-=t(window).scrollTop()-s
var a={width:n.width(),height:(w?n.innerHeight():n[0].offsetHeight)-r-s}
return W()?a["-moz-transform"]=a.transform="translate("+o.left+"px,"+o.top+"px)":(a.left=o.left,a.top=o.top),a}}})
var F="iframe",H="//about:blank",B=function(t){if(e.currTemplate[F]){var i=e.currTemplate[F].find("iframe")
i.length&&(t||(i[0].src=H),e.isIE8&&i.css("display",t?"block":"none"))}}
t.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){e.types.push(F),_("BeforeChange",function(t,e,i){e!==i&&(e===F?B():i===F&&B(!0))}),_(a+"."+F,function(){B()})},getIframe:function(i,n){var o=i.src,s=e.st.iframe
t.each(s.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0})
var r={}
return s.srcAction&&(r[s.srcAction]=o),e._parseMarkup(n,r,i),e.updateStatus("ready"),n}}})
var Y=function(t){var i=e.items.length
return t>i-1?t-i:0>t?i+t:t},X=function(t,e,i){return t.replace(/%curr%/gi,e+1).replace(/%total%/gi,i)}
t.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=e.st.gallery,o=".mfp-gallery"
return e.direction=!0,i&&i.enabled?(s+=" mfp-gallery",_(u+o,function(){i.navigateByImgClick&&e.wrap.on("click"+o,".mfp-img",function(){return e.items.length>1?(e.next(),!1):void 0}),n.on("keydown"+o,function(t){37===t.keyCode?e.prev():39===t.keyCode&&e.next()})}),_("UpdateStatus"+o,function(t,i){i.text&&(i.text=X(i.text,e.currItem.index,e.items.length))}),_(d+o,function(t,n,o,s){var r=e.items.length
o.counter=r>1?X(i.tCounter,s.index,r):""}),_("BuildControls"+o,function(){if(e.items.length>1&&i.arrows&&!e.arrowLeft){var n=i.arrowMarkup,o=e.arrowLeft=t(n.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(y),s=e.arrowRight=t(n.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(y)
o.click(function(){e.prev()}),s.click(function(){e.next()}),e.container.append(o.add(s))}}),_(p+o,function(){e._preloadTimeout&&clearTimeout(e._preloadTimeout),e._preloadTimeout=setTimeout(function(){e.preloadNearbyImages(),e._preloadTimeout=null},16)}),void _(a+o,function(){n.off(o),e.wrap.off("click"+o),e.arrowRight=e.arrowLeft=null})):!1},next:function(){e.direction=!0,e.index=Y(e.index+1),e.updateItemHTML()},prev:function(){e.direction=!1,e.index=Y(e.index-1),e.updateItemHTML()},goTo:function(t){e.direction=t>=e.index,e.index=t,e.updateItemHTML()},preloadNearbyImages:function(){var t,i=e.st.gallery.preload,n=Math.min(i[0],e.items.length),o=Math.min(i[1],e.items.length)
for(t=1;t<=(e.direction?o:n);t++)e._preloadItem(e.index+t)
for(t=1;t<=(e.direction?n:o);t++)e._preloadItem(e.index-t)},_preloadItem:function(i){if(i=Y(i),!e.items[i].preloaded){var n=e.items[i]
n.parsed||(n=e.parseEl(i)),S("LazyLoad",n),"image"===n.type&&(n.img=t('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0,S("LazyLoadError",n)}).attr("src",n.src)),n.preloaded=!0}}}})
var U="retina"
t.magnificPopup.registerModule(U,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(t){return"@2x"+t})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var t=e.st.retina,i=t.ratio
i=isNaN(i)?i():i,i>1&&(_("ImageHasSize."+U,function(t,e){e.img.css({"max-width":e.img[0].naturalWidth/i,width:"100%"})}),_("ElementParse."+U,function(e,n){n.src=t.replaceSrc(n,i)}))}}}}),T()}),!function(t,e,i,n){function o(e,i){this.settings=null,this.options=t.extend({},o.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(o.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(o.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}o.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},o.Width={Default:"default",Inner:"inner",Outer:"outer"},o.Type={Event:"event",State:"state"},o.Plugins={},o.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,n=this.settings.rtl,o={width:"auto","margin-left":n?e:"","margin-right":n?"":e}
!i&&this.$stage.children().css(o),t.css=o}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,n=this._items.length,o=!this.settings.autoWidth,s=[]
for(t.items={merge:!1,width:e};n--;)i=this._mergers[n],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,s[n]=o?e*i:this._items[n].width()
this._widths=s}},{filter:["items","settings"],run:function(){var e=[],i=this._items,n=this.settings,o=Math.max(2*n.items,4),s=2*Math.ceil(i.length/2),r=n.loop&&i.length?n.rewind?o:Math.max(o,s):0,a="",l=""
for(r/=2;r--;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),l=i[e[e.length-1]][0].outerHTML+l
this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,n=0,o=0,s=[];++i<e;)n=s[i-1]||0,o=this._widths[this.relative(i)]+this.settings.margin,s.push(n+o*t)
this._coordinates=s}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""}
this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,n=this.$stage.children()
if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],n.eq(e).css(t.css)
else i&&(t.css.width=t.items.width,n.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,n,o=this.settings.rtl?1:-1,s=2*this.settings.stagePadding,r=this.coordinates(this.current())+s,a=r+this.width()*o,l=[]
for(i=0,n=this._coordinates.length;n>i;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+s*o,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&l.push(i)
this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],o.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var e,i,o
e=this.$element.find("img"),i=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:n,o=this.$element.children(i).width(),e.length&&0>=o&&this.preloadAutoWidthImages(e)}this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},o.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,n=-1,o=null
i?(t.each(i,function(t){e>=t&&t>n&&(n=+t)}),o=t.extend({},this.options,i[n]),"function"==typeof o.stagePadding&&(o.stagePadding=o.stagePadding()),delete o.responsive,o.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+n))):o=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:o}}),this._breakpoint=n,this.settings=o,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},o.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},o.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e})
return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},o.prototype.update=function(){for(var e=0,i=this._pipe.length,n=t.proxy(function(t){return this[t]},this._invalidated),o={};i>e;)(this._invalidated.all||t.grep(this._pipe[e].filter,n).length>0)&&this._pipe[e].run(o),e++
this._invalidated={},!this.is("valid")&&this.enter("valid")},o.prototype.width=function(t){switch(t=t||o.Width.Default){case o.Width.Inner:case o.Width.Outer:return this._width
default:return this._width-2*this.settings.stagePadding+this.settings.margin}},o.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},o.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},o.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.$element.is(":visible")?(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized"))):!1:!1},o.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},o.prototype.onDragStart=function(e){var n=null
3!==e.which&&(t.support.transform?(n=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),n={x:n[16===n.length?12:4],y:n[16===n.length?13:5]}):(n=this.$stage.position(),n={x:this.settings.rtl?n.left+this.$stage.width()-this.width()+this.settings.margin:n.left,y:n.top}),this.is("animating")&&(t.support.transform?this.animate(n.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=n,this._drag.stage.current=n,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var n=this.difference(this._drag.pointer,this.pointer(e))
t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(n.x)<Math.abs(n.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},o.prototype.onDragMove=function(t){var e=null,i=null,n=null,o=this.difference(this._drag.pointer,this.pointer(t)),s=this.difference(this._drag.stage.start,o)
this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,s.x=((s.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),n=this.settings.pullDrag?-1*o.x/5:0,s.x=Math.max(Math.min(s.x,e+n),i+n)),this._drag.stage.current=s,this.animate(s.x))},o.prototype.onDragEnd=function(e){var n=this.difference(this._drag.pointer,this.pointer(e)),o=this._drag.stage.current,s=n.x>0^this.settings.rtl?"left":"right"
t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==n.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(o.x,0!==n.x?s:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=s,(Math.abs(n.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},o.prototype.closest=function(e,i){var n=-1,o=30,s=this.width(),r=this.coordinates()
return this.settings.freeDrag||t.each(r,t.proxy(function(t,a){return"left"===i&&e>a-o&&a+o>e?n=t:"right"===i&&e>a-s-o&&a-s+o>e?n=t+1:this.op(e,"<",a)&&this.op(e,">",r[t+1]||a-s)&&(n="left"===i?t+1:t),-1===n},this)),this.settings.loop||(this.op(e,">",r[this.minimum()])?n=e=this.minimum():this.op(e,"<",r[this.maximum()])&&(n=e=this.maximum())),n},o.prototype.animate=function(e){var i=this.speed()>0
this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},o.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},o.prototype.current=function(t){if(t===n)return this._current
if(0===this._items.length)return n
if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}})
e.data!==n&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},o.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},o.prototype.reset=function(t){t=this.normalize(t),t!==n&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},o.prototype.normalize=function(t,e){var i=this._items.length,o=e?0:this._clones.length
return!this.isNumeric(t)||1>i?t=n:(0>t||t>=i+o)&&(t=((t-o/2)%i+i)%i+o/2),t},o.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},o.prototype.maximum=function(t){var e,i,n,o=this.settings,s=this._coordinates.length
if(o.loop)s=this._clones.length/2+this._items.length-1
else if(o.autoWidth||o.merge){for(e=this._items.length,i=this._items[--e].width(),n=this.$element.width();e--&&(i+=this._items[e].width()+this.settings.margin,!(i>n)););s=e+1}else s=o.center?this._items.length-1:this._items.length-o.items
return t&&(s-=this._clones.length/2),Math.max(s,0)},o.prototype.minimum=function(t){return t?0:this._clones.length/2},o.prototype.items=function(t){return t===n?this._items.slice():(t=this.normalize(t,!0),this._items[t])},o.prototype.mergers=function(t){return t===n?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},o.prototype.clones=function(e){var i=this._clones.length/2,o=i+this._items.length,s=function(t){return t%2===0?o+t/2:i-(t+1)/2}
return e===n?t.map(this._clones,function(t,e){return s(e)}):t.map(this._clones,function(t,i){return t===e?s(i):null})},o.prototype.speed=function(t){return t!==n&&(this._speed=t),this._speed},o.prototype.coordinates=function(e){var i,o=1,s=e-1
return e===n?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(o=-1,s=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[s]||0))/2*o):i=this._coordinates[s]||0,i=Math.ceil(i))},o.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},o.prototype.to=function(t,e){var i=this.current(),n=null,o=t-this.relative(i),s=(o>0)-(0>o),r=this._items.length,a=this.minimum(),l=this.maximum()
this.settings.loop?(!this.settings.rewind&&Math.abs(o)>r/2&&(o+=-1*s*r),t=i+o,n=((t-a)%r+r)%r+a,n!==t&&l>=n-o&&n-o>0&&(i=n-o,t=n,this.reset(i))):this.settings.rewind?(l+=1,t=(t%l+l)%l):t=Math.max(a,Math.min(l,t)),this.speed(this.duration(i,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},o.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},o.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},o.prototype.onTransitionEnd=function(t){return t!==n&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0))?!1:(this.leave("animating"),void this.trigger("translated"))},o.prototype.viewport=function(){var n
if(this.options.responsiveBaseElement!==e)n=t(this.options.responsiveBaseElement).width()
else if(e.innerWidth)n=e.innerWidth
else{if(!i.documentElement||!i.documentElement.clientWidth)throw"Can not detect viewport width."
n=i.documentElement.clientWidth}return n},o.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},o.prototype.add=function(e,i){var o=this.relative(this._current)
i=i===n?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[o]&&this.reset(this._items[o].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},o.prototype.remove=function(t){t=this.normalize(t,!0),t!==n&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},o.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},o.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),this.settings.responsive!==!1&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize))
for(var n in this._plugins)this._plugins[n].destroy()
this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},o.prototype.op=function(t,e,i){var n=this.settings.rtl
switch(e){case"<":return n?t>i:i>t
case">":return n?i>t:t>i
case">=":return n?i>=t:t>=i
case"<=":return n?t>=i:i>=t}},o.prototype.on=function(t,e,i,n){t.addEventListener?t.addEventListener(e,i,n):t.attachEvent&&t.attachEvent("on"+e,i)},o.prototype.off=function(t,e,i,n){t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent&&t.detachEvent("on"+e,i)},o.prototype.trigger=function(e,i,n,s,r){var a={item:{count:this._items.length,index:this.current()}},l=t.camelCase(t.grep(["on",e,n],function(t){return t}).join("-").toLowerCase()),c=t.Event([e,"owl",n||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i))
return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(c)}),this.register({type:o.Type.Event,name:e}),this.$element.trigger(c),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,c)),c},o.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]===n&&(this._states.current[e]=0),this._states.current[e]++},this))},o.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},o.prototype.register=function(e){if(e.type===o.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default
t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===o.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,n){return t.inArray(i,this._states.tags[e.name])===n},this)))},o.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},o.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},o.prototype.pointer=function(t){var i={x:null,y:null}
return t=t.originalEvent||t||e.event,t=t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,t.pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},o.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},o.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1)
return this.each(function(){var n=t(this),s=n.data("owl.carousel")
s||(s=new o(this,"object"==typeof e&&e),n.data("owl.carousel",s),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){s.register({type:o.Type.Event,name:i}),s.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),s[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},s))})),"string"==typeof e&&"_"!==e.charAt(0)&&s[e].apply(s,i)})},t.fn.owlCarousel.Constructor=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var o=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers)}
o.Defaults={autoRefresh:!0,autoRefreshInterval:500},o.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},o.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},o.prototype.destroy=function(){var t,i
e.clearInterval(this._interval)
for(t in this._handlers)this._core.$element.off(t,this._handlers[t])
for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var o=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var i=this._core.settings,o=i.center&&Math.ceil(i.items/2)||i.items,s=i.center&&-1*o||0,r=(e.property&&e.property.value!==n?e.property.value:this._core.current())+s,a=this._core.clones().length,l=t.proxy(function(t,e){this.load(e)},this);s++<o;)this.load(a/2+this._core.relative(r)),a&&t.each(this._core.clones(this._core.relative(r)),l),r++},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers)}
o.Defaults={lazyLoad:!1},o.prototype.load=function(i){var n=this._core.$stage.children().eq(i),o=n&&n.find(".owl-lazy")
!o||t.inArray(n.get(0),this._loaded)>-1||(o.each(t.proxy(function(i,n){var o,s=t(n),r=e.devicePixelRatio>1&&s.attr("data-src-retina")||s.attr("data-src")
this._core.trigger("load",{element:s,url:r},"lazy"),s.is("img")?s.one("load.owl.lazy",t.proxy(function(){s.css("opacity",1),this._core.trigger("loaded",{element:s,url:r},"lazy")},this)).attr("src",r):(o=new Image,o.onload=t.proxy(function(){s.css({"background-image":"url("+r+")",opacity:"1"}),this._core.trigger("loaded",{element:s,url:r},"lazy")},this),o.src=r)},this)),this._loaded.push(n.get(0)))},o.prototype.destroy=function(){var t,e
for(t in this.handlers)this._core.$element.off(t,this.handlers[t])
for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var o=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers)}
o.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},o.prototype.update=function(){var e=this._core._current,i=e+this._core.settings.items,n=this._core.$stage.children().toArray().slice(e,i),o=[],s=0
t.each(n,function(e,i){o.push(t(i).height())}),s=Math.max.apply(null,o),this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)},o.prototype.destroy=function(){var t,e
for(t in this._handlers)this._core.$element.off(t,this._handlers[t])
for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var o=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video")
i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))}
o.Defaults={video:!1,videoHeight:!1,videoWidth:!1},o.prototype.fetch=function(t,e){var i=function(){return t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube"}(),n=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),o=t.attr("data-width")||this._core.settings.videoWidth,s=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href")
if(!r)throw Error("Missing video URL.")
if(n=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),n[3].indexOf("youtu")>-1)i="youtube"
else if(n[3].indexOf("vimeo")>-1)i="vimeo"
else{if(!(n[3].indexOf("vzaar")>-1))throw Error("Video URL not supported.")
i="vzaar"}n=n[6],this._videos[r]={type:i,id:n,width:o,height:s},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},o.prototype.thumbnail=function(e,i){var n,o,s,r=i.width&&i.height?'style="width:'+i.width+"px;height:"+i.height+'px;"':"",a=e.find("img"),l="src",c="",h=this._core.settings,d=function(t){o='<div class="owl-video-play-icon"></div>',n=h.lazyLoad?'<div class="owl-video-tn '+c+'" '+l+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(n),e.after(o)}
return e.wrap('<div class="owl-video-wrapper"'+r+"></div>"),this._core.settings.lazyLoad&&(l="data-src",c="owl-lazy"),a.length?(d(a.attr(l)),a.remove(),!1):void("youtube"===i.type?(s="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",d(s)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){s=t[0].thumbnail_large,d(s)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){s=t.framegrab_url,d(s)}}))},o.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},o.prototype.play=function(e){var i,n=t(e.target),o=n.closest("."+this._core.settings.itemClass),s=this._videos[o.attr("data-video")],r=s.width||"100%",a=s.height||this._core.$stage.height()
this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),o=this._core.items(this._core.relative(o.index())),this._core.reset(o.index()),"youtube"===s.type?i='<iframe width="'+r+'" height="'+a+'" src="//www.youtube.com/embed/'+s.id+"?autoplay=1&v="+s.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===s.type?i='<iframe src="//player.vimeo.com/video/'+s.id+'?autoplay=1" width="'+r+'" height="'+a+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===s.type&&(i='<iframe frameborder="0"height="'+a+'"width="'+r+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+s.id+'/player?autoplay=true"></iframe>'),t('<div class="owl-video-frame">'+i+"</div>").insertAfter(o.find(".owl-video")),this._playing=o.addClass("owl-video-playing"))},o.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement
return e&&t(e).parent().hasClass("owl-video-frame")},o.prototype.destroy=function(){var t,e
this._core.$element.off("click.owl.video")
for(t in this._handlers)this._core.$element.off(t,this._handlers[t])
for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var o=function(e){this.core=e,this.core.options=t.extend({},o.Defaults,this.core.options),this.swapping=!0,this.previous=n,this.next=n,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)}
o.Defaults={animateOut:!1,animateIn:!1},o.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0)
var e,i=t.proxy(this.clear,this),n=this.core.$stage.children().eq(this.previous),o=this.core.$stage.children().eq(this.next),s=this.core.settings.animateIn,r=this.core.settings.animateOut
this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),n.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),s&&o.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(s))}},o.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},o.prototype.destroy=function(){var t,e
for(t in this.handlers)this.core.$element.off(t,this.handlers[t])
for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){var o=function(e){this._core=e,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},o.Defaults,this._core.options)}
o.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},o.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},o.prototype._getNextTimeout=function(n,o){return this._timeout&&e.clearTimeout(this._timeout),e.setTimeout(t.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||i.hidden||this._core.next(o||this._core.settings.autoplaySpeed)},this),n||this._core.settings.autoplayTimeout)},o.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},o.prototype.stop=function(){this._core.is("rotating")&&(e.clearTimeout(this._timeout),this._core.leave("rotating"))},o.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},o.prototype.destroy=function(){var t,e
this.stop()
for(t in this._handlers)this._core.$element.off(t,this._handlers[t])
for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){"use strict"
var o=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this.$element.on(this._handlers)}
o.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},o.prototype.initialize=function(){var e,i=this._core.settings
this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",t.proxy(function(e){var n=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index()
e.preventDefault(),this.to(n,i.dotsSpeed)},this))
for(e in this._overrides)this._core[e]=t.proxy(this[e],this)},o.prototype.destroy=function(){var t,e,i,n
for(t in this._handlers)this.$element.off(t,this._handlers[t])
for(e in this._controls)this._controls[e].remove()
for(n in this.overides)this._core[n]=this._overrides[n]
for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},o.prototype.update=function(){var t,e,i,n=this._core.clones().length/2,o=n+this._core.items().length,s=this._core.maximum(!0),r=this._core.settings,a=r.center||r.autoWidth||r.dotsData?1:r.dotsEach||r.items
if("page"!==r.slideBy&&(r.slideBy=Math.min(r.slideBy,r.items)),r.dots||"page"==r.slideBy)for(this._pages=[],t=n,e=0,i=0;o>t;t++){if(e>=a||0===e){if(this._pages.push({start:Math.min(s,t-n),end:t-n+a-1}),Math.min(s,t-n)===s)break
e=0,++i}e+=this._core.mergers(this._core.relative(t))}},o.prototype.draw=function(){var e,i=this._core.settings,n=this._core.items().length<=i.items,o=this._core.relative(this._core.current()),s=i.loop||i.rewind
this._controls.$relative.toggleClass("disabled",!i.nav||n),i.nav&&(this._controls.$previous.toggleClass("disabled",!s&&o<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!s&&o>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||n),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(Array(e+1).join(this._templates[0])):0>e&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},o.prototype.onTrigger=function(e){var i=this._core.settings
e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},o.prototype.current=function(){var e=this._core.relative(this._core.current())
return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},o.prototype.getPosition=function(e){var i,n,o=this._core.settings
return"page"==o.slideBy?(i=t.inArray(this.current(),this._pages),n=this._pages.length,e?++i:--i,i=this._pages[(i%n+n)%n].start):(i=this._core.relative(this._core.current()),n=this._core.items().length,e?i+=o.slideBy:i-=o.slideBy),i},o.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},o.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},o.prototype.to=function(e,i,n){var o
!n&&this._pages.length?(o=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%o+o)%o].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){"use strict"
var o=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")
if(!i)return
this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var n=this._core.items(this._core.relative(this._core.current())),o=t.map(this._hashes,function(t,e){return t===n?e:null}).join()
if(!o||e.location.hash.slice(1)===o)return
e.location.hash=o}},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),o=this._core.$stage.children(),s=this._hashes[i]&&o.index(this._hashes[i])
s!==n&&s!==this._core.current()&&this._core.to(this._core.relative(s),!1,!0)},this))}
o.Defaults={URLhashListener:!1},o.prototype.destroy=function(){var i,n
t(e).off("hashchange.owl.navigation")
for(i in this._handlers)this._core.$element.off(i,this._handlers[i])
for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=o}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){function o(e,i){var o=!1,s=e.charAt(0).toUpperCase()+e.slice(1)
return t.each((e+" "+a.join(s+" ")+s).split(" "),function(t,e){return r[e]!==n?(o=i?e:!0,!1):void 0}),o}function s(t){return o(t,!0)}var r=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},c={csstransforms:function(){return!!o("transform")},csstransforms3d:function(){return!!o("perspective")},csstransitions:function(){return!!o("transition")},cssanimations:function(){return!!o("animation")}}
c.csstransitions()&&(t.support.transition=new String(s("transition")),t.support.transition.end=l.transition.end[t.support.transition]),c.cssanimations()&&(t.support.animation=new String(s("animation")),t.support.animation.end=l.animation.end[t.support.animation]),c.csstransforms()&&(t.support.transform=new String(s("transform")),t.support.transform3d=c.csstransforms3d())}(window.Zepto||window.jQuery,window,document),!function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require
if(!a&&l)return l(r,!0)
if(s)return s(r,!0)
var c=Error("Cannot find module '"+r+"'")
throw c.code="MODULE_NOT_FOUND",c}var h=i[r]={exports:{}}
e[r][0].call(h.exports,function(t){var i=e[r][1][t]
return o(i?i:t)},h,h.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r])
return o}({1:[function(t,e,i){"use strict"
function n(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||void 0===t){var e=t
s.get(this)||o.initialize(this,e)}else{var i=t
"update"===i?o.update(this):"destroy"===i&&o.destroy(this)}})}}var o=t("../main"),s=t("../plugin/instances")
if("function"==typeof define&&define.amd)define(["jquery"],n)
else{var r=window.jQuery?window.jQuery:window.$
void 0!==r&&n(r)}e.exports=n},{"../main":7,"../plugin/instances":18}],2:[function(t,e,i){"use strict"
function n(t,e){var i=t.className.split(" ")
i.indexOf(e)<0&&i.push(e),t.className=i.join(" ")}function o(t,e){var i=t.className.split(" "),n=i.indexOf(e)
n>=0&&i.splice(n,1),t.className=i.join(" ")}i.add=function(t,e){t.classList?t.classList.add(e):n(t,e)},i.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},i.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,i){"use strict"
function n(t,e){return window.getComputedStyle(t)[e]}function o(t,e,i){return"number"==typeof i&&(i=""+i+"px"),t.style[e]=i,t}function s(t,e){for(var i in e){var n=e[i]
"number"==typeof n&&(n=""+n+"px"),t.style[i]=n}return t}var r={}
r.e=function(t,e){var i=document.createElement(t)
return i.className=e,i},r.appendTo=function(t,e){return e.appendChild(t),t},r.css=function(t,e,i){return"object"==typeof e?s(t,e):void 0===i?n(t,e):o(t,e,i)},r.matches=function(t,e){return void 0!==t.matches?t.matches(e):void 0!==t.matchesSelector?t.matchesSelector(e):void 0!==t.webkitMatchesSelector?t.webkitMatchesSelector(e):void 0!==t.mozMatchesSelector?t.mozMatchesSelector(e):void 0!==t.msMatchesSelector?t.msMatchesSelector(e):void 0},r.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},r.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return r.matches(t,e)})},e.exports=r},{}],4:[function(t,e,i){"use strict"
var n=function(t){this.element=t,this.events={}}
n.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},n.prototype.unbind=function(t,e){var i=void 0!==e
this.events[t]=this.events[t].filter(function(n){return i&&n!==e?!0:(this.element.removeEventListener(t,n,!1),!1)},this)},n.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)}
var o=function(){this.eventElements=[]}
o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0]
return void 0===e&&(e=new n(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},o.prototype.unbind=function(t,e,i){this.eventElement(t).unbind(e,i)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,i){var n=this.eventElement(t),o=function(t){n.unbind(e,o),i(t)}
n.bind(e,o)},e.exports=o},{}],5:[function(t,e,i){"use strict"
e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,i){"use strict"
var n=t("./class"),o=t("./dom"),s=i.toInt=function(t){return parseInt(t,10)||0},r=i.clone=function(t){if(null===t)return null
if(t.constructor===Array)return t.map(r)
if("object"==typeof t){var e={}
for(var i in t)e[i]=r(t[i])
return e}return t}
i.extend=function(t,e){var i=r(t)
for(var n in e)i[n]=r(e[n])
return i},i.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},i.removePsClasses=function(t){for(var e=n.list(t),i=0;i<e.length;i++){var o=e[i]
0===o.indexOf("ps-")&&n.remove(t,o)}},i.outerWidth=function(t){return s(o.css(t,"width"))+s(o.css(t,"paddingLeft"))+s(o.css(t,"paddingRight"))+s(o.css(t,"borderLeftWidth"))+s(o.css(t,"borderRightWidth"))},i.startScrolling=function(t,e){n.add(t,"ps-in-scrolling"),void 0!==e?n.add(t,"ps-"+e):(n.add(t,"ps-x"),n.add(t,"ps-y"))},i.stopScrolling=function(t,e){n.remove(t,"ps-in-scrolling"),void 0!==e?n.remove(t,"ps-"+e):(n.remove(t,"ps-x"),n.remove(t,"ps-y"))},i.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,i){"use strict"
var n=t("./plugin/destroy"),o=t("./plugin/initialize"),s=t("./plugin/update")
e.exports={initialize:o,update:s,destroy:n}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,i){"use strict"
e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,i){"use strict"
var n=t("../lib/helper"),o=t("../lib/dom"),s=t("./instances")
e.exports=function(t){var e=s.get(t)
e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),n.removePsClasses(t),s.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,i){"use strict"
function n(t,e){function i(t){return t.getBoundingClientRect()}var n=function(t){t.stopPropagation()}
e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",n),e.event.bind(e.scrollbarYRail,"click",function(n){var s=o.toInt(e.scrollbarYHeight/2),l=e.railYRatio*(n.pageY-window.pageYOffset-i(e.scrollbarYRail).top-s),c=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),h=l/c
0>h?h=0:h>1&&(h=1),a(t,"top",(e.contentHeight-e.containerHeight)*h),r(t),n.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",n),e.event.bind(e.scrollbarXRail,"click",function(n){var s=o.toInt(e.scrollbarXWidth/2),l=e.railXRatio*(n.pageX-window.pageXOffset-i(e.scrollbarXRail).left-s),c=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),h=l/c
0>h?h=0:h>1&&(h=1),a(t,"left",(e.contentWidth-e.containerWidth)*h-e.negativeScrollAdjustment),r(t),n.stopPropagation()})}var o=t("../../lib/helper"),s=t("../instances"),r=t("../update-geometry"),a=t("../update-scroll")
e.exports=function(t){var e=s.get(t)
n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,i){"use strict"
function n(t,e){function i(i){var o=n+i*e.railXRatio,r=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth)
0>o?e.scrollbarXLeft=0:o>r?e.scrollbarXLeft=r:e.scrollbarXLeft=o
var a=s.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment
c(t,"left",a)}var n=null,o=null,a=function(e){i(e.pageX-o),l(t),e.stopPropagation(),e.preventDefault()},h=function(){s.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)}
e.event.bind(e.scrollbarX,"mousedown",function(i){o=i.pageX,n=s.toInt(r.css(e.scrollbarX,"left"))*e.railXRatio,s.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",h),i.stopPropagation(),i.preventDefault()})}function o(t,e){function i(i){var o=n+i*e.railYRatio,r=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight)
0>o?e.scrollbarYTop=0:o>r?e.scrollbarYTop=r:e.scrollbarYTop=o
var a=s.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight))
c(t,"top",a)}var n=null,o=null,a=function(e){i(e.pageY-o),l(t),e.stopPropagation(),e.preventDefault()},h=function(){s.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)}
e.event.bind(e.scrollbarY,"mousedown",function(i){o=i.pageY,n=s.toInt(r.css(e.scrollbarY,"top"))*e.railYRatio,s.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",h),i.stopPropagation(),i.preventDefault()})}var s=t("../../lib/helper"),r=t("../../lib/dom"),a=t("../instances"),l=t("../update-geometry"),c=t("../update-scroll")
e.exports=function(t){var e=a.get(t)
n(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,i){"use strict"
function n(t,e){function i(i,n){var o=t.scrollTop
if(0===i){if(!e.scrollbarYActive)return!1
if(0===o&&n>0||o>=e.contentHeight-e.containerHeight&&0>n)return!e.settings.wheelPropagation}var s=t.scrollLeft
if(0===n){if(!e.scrollbarXActive)return!1
if(0===s&&0>i||s>=e.contentWidth-e.containerWidth&&i>0)return!e.settings.wheelPropagation}return!0}var n=!1
e.event.bind(t,"mouseenter",function(){n=!0}),e.event.bind(t,"mouseleave",function(){n=!1})
var r=!1
e.event.bind(e.ownerDocument,"keydown",function(c){if(!c.isDefaultPrevented||!c.isDefaultPrevented()){var h=s.matches(e.scrollbarX,":focus")||s.matches(e.scrollbarY,":focus")
if(n||h){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement
if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement
else for(;d.shadowRoot;)d=d.shadowRoot.activeElement
if(o.isEditable(d))return}var u=0,p=0
switch(c.which){case 37:u=-30
break
case 38:p=30
break
case 39:u=30
break
case 40:p=-30
break
case 33:p=90
break
case 32:p=c.shiftKey?90:-90
break
case 34:p=-90
break
case 35:p=c.ctrlKey?-e.contentHeight:-e.containerHeight
break
case 36:p=c.ctrlKey?t.scrollTop:e.containerHeight
break
default:return}l(t,"top",t.scrollTop-p),l(t,"left",t.scrollLeft+u),a(t),r=i(u,p),r&&c.preventDefault()}}})}var o=t("../../lib/helper"),s=t("../../lib/dom"),r=t("../instances"),a=t("../update-geometry"),l=t("../update-scroll")
e.exports=function(t){var e=r.get(t)
n(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,i){"use strict"
function n(t,e){function i(i,n){var o=t.scrollTop
if(0===i){if(!e.scrollbarYActive)return!1
if(0===o&&n>0||o>=e.contentHeight-e.containerHeight&&0>n)return!e.settings.wheelPropagation}var s=t.scrollLeft
if(0===n){if(!e.scrollbarXActive)return!1
if(0===s&&0>i||s>=e.contentWidth-e.containerWidth&&i>0)return!e.settings.wheelPropagation}return!0}function n(t){var e=t.deltaX,i=-1*t.deltaY
return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),[e,i]}function o(e,i){var n=t.querySelector("textarea:hover, .ps-child:hover")
if(n){if("TEXTAREA"!==n.tagName&&!window.getComputedStyle(n).overflow.match(/(scroll|auto)/))return!1
var o=n.scrollHeight-n.clientHeight
if(o>0&&!(0===n.scrollTop&&i>0||n.scrollTop===o&&0>i))return!0
var s=n.scrollLeft-n.clientWidth
if(s>0&&!(0===n.scrollLeft&&0>e||n.scrollLeft===s&&e>0))return!0}return!1}function a(a){var c=n(a),h=c[0],d=c[1]
o(h,d)||(l=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?r(t,"top",t.scrollTop-d*e.settings.wheelSpeed):r(t,"top",t.scrollTop+h*e.settings.wheelSpeed),l=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(h?r(t,"left",t.scrollLeft+h*e.settings.wheelSpeed):r(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),l=!0):(r(t,"top",t.scrollTop-d*e.settings.wheelSpeed),r(t,"left",t.scrollLeft+h*e.settings.wheelSpeed)),s(t),l=l||i(h,d),l&&(a.stopPropagation(),a.preventDefault()))}var l=!1
void 0!==window.onwheel?e.event.bind(t,"wheel",a):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",a)}var o=t("../instances"),s=t("../update-geometry"),r=t("../update-scroll")
e.exports=function(t){var e=o.get(t)
n(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,i){"use strict"
function n(t,e){e.event.bind(t,"scroll",function(){s(t)})}var o=t("../instances"),s=t("../update-geometry")
e.exports=function(t){var e=o.get(t)
n(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,i){"use strict"
function n(t,e){function i(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():""
return 0===(""+t).length?null:t.getRangeAt(0).commonAncestorContainer}function n(){c||(c=setInterval(function(){return s.get(t)?(a(t,"top",t.scrollTop+h.top),a(t,"left",t.scrollLeft+h.left),void r(t)):void clearInterval(c)},50))}function l(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,h={top:0,left:0},d=!1
e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(i())?d=!0:(d=!1,l())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,l())}),e.event.bind(window,"mousemove",function(e){if(d){var i={x:e.pageX,y:e.pageY},s={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight}
i.x<s.left+3?(h.left=-5,o.startScrolling(t,"x")):i.x>s.right-3?(h.left=5,o.startScrolling(t,"x")):h.left=0,i.y<s.top+3?(s.top+3-i.y<5?h.top=-5:h.top=-20,o.startScrolling(t,"y")):i.y>s.bottom-3?(i.y-s.bottom+3<5?h.top=5:h.top=20,o.startScrolling(t,"y")):h.top=0,0===h.top&&0===h.left?l():n()}})}var o=t("../../lib/helper"),s=t("../instances"),r=t("../update-geometry"),a=t("../update-scroll")
e.exports=function(t){var e=s.get(t)
n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,i){"use strict"
function n(t,e,i,n){function o(i,n){var o=t.scrollTop,s=t.scrollLeft,r=Math.abs(i),a=Math.abs(n)
if(a>r){if(0>n&&o===e.contentHeight-e.containerHeight||n>0&&0===o)return!e.settings.swipePropagation}else if(r>a&&(0>i&&s===e.contentWidth-e.containerWidth||i>0&&0===s))return!e.settings.swipePropagation
return!0}function l(e,i){a(t,"top",t.scrollTop-i),a(t,"left",t.scrollLeft-e),r(t)}function c(){w=!0}function h(){w=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function u(t){return t.targetTouches&&1===t.targetTouches.length?!0:!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function p(t){if(u(t)){x=!0
var e=d(t)
g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==b&&clearInterval(b),t.stopPropagation()}}function f(t){if(!x&&e.settings.swipePropagation&&p(t),!w&&x&&u(t)){var i=d(t),n={pageX:i.pageX,pageY:i.pageY},s=n.pageX-g.pageX,r=n.pageY-g.pageY
l(s,r),g=n
var a=(new Date).getTime(),c=a-v
c>0&&(y.x=s/c,y.y=r/c,v=a),o(s,r)&&(t.stopPropagation(),t.preventDefault())}}function m(){!w&&x&&(x=!1,clearInterval(b),b=setInterval(function(){return s.get(t)?Math.abs(y.x)<.01&&Math.abs(y.y)<.01?void clearInterval(b):(l(30*y.x,30*y.y),y.x*=.8,void(y.y*=.8)):void clearInterval(b)},10))}var g={},v=0,y={},b=null,w=!1,x=!1
i&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",h),e.event.bind(t,"touchstart",p),e.event.bind(t,"touchmove",f),e.event.bind(t,"touchend",m)),n&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",h),e.event.bind(t,"pointerdown",p),e.event.bind(t,"pointermove",f),e.event.bind(t,"pointerup",m)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",h),e.event.bind(t,"MSPointerDown",p),e.event.bind(t,"MSPointerMove",f),e.event.bind(t,"MSPointerUp",m)))}var o=t("../../lib/helper"),s=t("../instances"),r=t("../update-geometry"),a=t("../update-scroll")
e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=s.get(t)
n(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,i){"use strict"
var n=t("../lib/helper"),o=t("../lib/class"),s=t("./instances"),r=t("./update-geometry"),a={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},l=t("./handler/native-scroll")
e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container")
var i=s.add(t)
i.settings=n.extend(i.settings,e),o.add(t,"ps-theme-"+i.settings.theme),i.settings.handlers.forEach(function(e){a[e](t)}),l(t),r(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,i){"use strict"
function n(t){function e(){l.add(t,"ps-focus")}function i(){l.remove(t,"ps-focus")}var n=this
n.settings=a.clone(c),n.containerWidth=null,n.containerHeight=null,n.contentWidth=null,n.contentHeight=null,n.isRtl="rtl"===h.css(t,"direction"),n.isNegativeScroll=function(){var e=t.scrollLeft,i=null
return t.scrollLeft=-1,i=t.scrollLeft<0,t.scrollLeft=e,i}(),n.negativeScrollAdjustment=n.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.event=new d,n.ownerDocument=t.ownerDocument||document,n.scrollbarXRail=h.appendTo(h.e("div","ps-scrollbar-x-rail"),t),n.scrollbarX=h.appendTo(h.e("div","ps-scrollbar-x"),n.scrollbarXRail),n.scrollbarX.setAttribute("tabindex",0),n.event.bind(n.scrollbarX,"focus",e),n.event.bind(n.scrollbarX,"blur",i),n.scrollbarXActive=null,n.scrollbarXWidth=null,n.scrollbarXLeft=null,n.scrollbarXBottom=a.toInt(h.css(n.scrollbarXRail,"bottom")),n.isScrollbarXUsingBottom=n.scrollbarXBottom===n.scrollbarXBottom,n.scrollbarXTop=n.isScrollbarXUsingBottom?null:a.toInt(h.css(n.scrollbarXRail,"top")),n.railBorderXWidth=a.toInt(h.css(n.scrollbarXRail,"borderLeftWidth"))+a.toInt(h.css(n.scrollbarXRail,"borderRightWidth")),h.css(n.scrollbarXRail,"display","block"),n.railXMarginWidth=a.toInt(h.css(n.scrollbarXRail,"marginLeft"))+a.toInt(h.css(n.scrollbarXRail,"marginRight")),h.css(n.scrollbarXRail,"display",""),n.railXWidth=null,n.railXRatio=null,n.scrollbarYRail=h.appendTo(h.e("div","ps-scrollbar-y-rail"),t),n.scrollbarY=h.appendTo(h.e("div","ps-scrollbar-y"),n.scrollbarYRail),n.scrollbarY.setAttribute("tabindex",0),n.event.bind(n.scrollbarY,"focus",e),n.event.bind(n.scrollbarY,"blur",i),n.scrollbarYActive=null,n.scrollbarYHeight=null,n.scrollbarYTop=null,n.scrollbarYRight=a.toInt(h.css(n.scrollbarYRail,"right")),n.isScrollbarYUsingRight=n.scrollbarYRight===n.scrollbarYRight,n.scrollbarYLeft=n.isScrollbarYUsingRight?null:a.toInt(h.css(n.scrollbarYRail,"left")),n.scrollbarYOuterWidth=n.isRtl?a.outerWidth(n.scrollbarY):null,n.railBorderYWidth=a.toInt(h.css(n.scrollbarYRail,"borderTopWidth"))+a.toInt(h.css(n.scrollbarYRail,"borderBottomWidth")),h.css(n.scrollbarYRail,"display","block"),n.railYMarginHeight=a.toInt(h.css(n.scrollbarYRail,"marginTop"))+a.toInt(h.css(n.scrollbarYRail,"marginBottom")),h.css(n.scrollbarYRail,"display",""),n.railYHeight=null,n.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function s(t,e){t.setAttribute("data-ps-id",e)}function r(t){t.removeAttribute("data-ps-id")}var a=t("../lib/helper"),l=t("../lib/class"),c=t("./default-setting"),h=t("../lib/dom"),d=t("../lib/event-manager"),u=t("../lib/guid"),p={}
i.add=function(t){var e=u()
return s(t,e),p[e]=new n(t),p[e]},i.remove=function(t){delete p[o(t)],r(t)},i.get=function(t){return p[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,i){"use strict"
function n(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var i={width:e.railXWidth}
e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:i.left=t.scrollLeft,e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-t.scrollTop:i.top=e.scrollbarXTop+t.scrollTop,a.css(e.scrollbarXRail,i)
var n={top:t.scrollTop,height:e.railYHeight}
e.isScrollbarYUsingRight?e.isRtl?n.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:n.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:n.left=e.scrollbarYLeft+t.scrollLeft,a.css(e.scrollbarYRail,n),a.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),a.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var s=t("../lib/helper"),r=t("../lib/class"),a=t("../lib/dom"),l=t("./instances"),c=t("./update-scroll")
e.exports=function(t){var e=l.get(t)
e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight
var i
t.contains(e.scrollbarXRail)||(i=a.queryChildren(t,".ps-scrollbar-x-rail"),i.length>0&&i.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(i=a.queryChildren(t,".ps-scrollbar-y-rail"),i.length>0&&i.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=n(e,s.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=s.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=n(e,s.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=s.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?r.add(t,"ps-active-x"):(r.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?r.add(t,"ps-active-y"):(r.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,i){"use strict"
var n,o,s=t("./instances"),r=document.createEvent("Event"),a=document.createEvent("Event"),l=document.createEvent("Event"),c=document.createEvent("Event"),h=document.createEvent("Event"),d=document.createEvent("Event"),u=document.createEvent("Event"),p=document.createEvent("Event"),f=document.createEvent("Event"),m=document.createEvent("Event")
r.initEvent("ps-scroll-up",!0,!0),a.initEvent("ps-scroll-down",!0,!0),l.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),h.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),u.initEvent("ps-x-reach-start",!0,!0),p.initEvent("ps-x-reach-end",!0,!0),f.initEvent("ps-y-reach-start",!0,!0),m.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,i){if(void 0===t)throw"You must provide an element to the update-scroll function"
if(void 0===e)throw"You must provide an axis to the update-scroll function"
if(void 0===i)throw"You must provide a value to the update-scroll function"
"top"===e&&0>=i&&(t.scrollTop=i=0,t.dispatchEvent(f)),"left"===e&&0>=i&&(t.scrollLeft=i=0,t.dispatchEvent(u))
var g=s.get(t)
"top"===e&&i>=g.contentHeight-g.containerHeight&&(i=g.contentHeight-g.containerHeight,i-t.scrollTop<=1?i=t.scrollTop:t.scrollTop=i,t.dispatchEvent(m)),"left"===e&&i>=g.contentWidth-g.containerWidth&&(i=g.contentWidth-g.containerWidth,i-t.scrollLeft<=1?i=t.scrollLeft:t.scrollLeft=i,t.dispatchEvent(p)),n||(n=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n>i&&t.dispatchEvent(r),"top"===e&&i>n&&t.dispatchEvent(a),"left"===e&&o>i&&t.dispatchEvent(l),"left"===e&&i>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=n=i,t.dispatchEvent(h)),"left"===e&&(t.scrollLeft=o=i,t.dispatchEvent(d))}},{"./instances":18}],21:[function(t,e,i){"use strict"
var n=t("../lib/helper"),o=t("../lib/dom"),s=t("./instances"),r=t("./update-geometry"),a=t("./update-scroll")
e.exports=function(t){var e=s.get(t)
e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=n.toInt(o.css(e.scrollbarXRail,"marginLeft"))+n.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=n.toInt(o.css(e.scrollbarYRail,"marginTop"))+n.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),r(t),a(t,"top",t.scrollTop),a(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]),!function(t){t.fn.theiaStickySidebar=function(e){function i(e,i){var o=n(e,i)
o||(console.log("TST: Body width smaller than options.minWidth. Init is delayed."),t(document).scroll(function(e,i){return function(o){var s=n(e,i)
s&&t(this).unbind(o)}}(e,i)),t(window).resize(function(e,i){return function(o){var s=n(e,i)
s&&t(this).unbind(o)}}(e,i)))}function n(e,i){return e.initialized===!0||!(t("body").width()<e.minWidth)&&(o(e,i),!0)}function o(e,i){e.initialized=!0,t("head").append(t('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),i.each(function(){function i(){o.fixedScrollTop=0,o.sidebar.css({"min-height":"1px"}),o.stickySidebar.css({position:"static",width:""})}function n(e){var i=e.height()
return e.children().each(function(){i=Math.max(i,t(this).height())}),i}var o={}
if(o.sidebar=t(this),o.options=e||{},o.container=t(o.options.containerSelector),0==o.container.length&&(o.container=o.sidebar.parent()),o.sidebar.parents().css("-webkit-transform","none"),o.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),o.stickySidebar=o.sidebar.find(".theiaStickySidebar"),0==o.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i
o.sidebar.find("script").filter(function(t,e){return 0===e.type.length||e.type.match(s)}).remove(),o.stickySidebar=t("<div>").addClass("theiaStickySidebar").append(o.sidebar.children()),o.sidebar.append(o.stickySidebar)}o.marginTop=parseInt(o.sidebar.css("margin-top")),o.marginBottom=parseInt(o.sidebar.css("margin-bottom")),o.paddingTop=parseInt(o.sidebar.css("padding-top")),o.paddingBottom=parseInt(o.sidebar.css("padding-bottom"))
var r=o.stickySidebar.offset().top,a=o.stickySidebar.outerHeight()
o.stickySidebar.css("padding-top",1),o.stickySidebar.css("padding-bottom",1),r-=o.stickySidebar.offset().top,a=o.stickySidebar.outerHeight()-a-r,0==r?(o.stickySidebar.css("padding-top",0),o.stickySidebarPaddingTop=0):o.stickySidebarPaddingTop=1,0==a?(o.stickySidebar.css("padding-bottom",0),o.stickySidebarPaddingBottom=0):o.stickySidebarPaddingBottom=1,o.previousScrollTop=null,o.fixedScrollTop=0,i(),o.onScroll=function(o){if(o.stickySidebar.is(":visible")){if(t("body").width()<o.options.minWidth)return void i()
if(o.options.disableOnResponsiveLayouts){var s=o.sidebar.outerWidth("none"==o.sidebar.css("float"))
if(s+50>o.container.width())return void i()}var r=t(document).scrollTop(),a="static"
if(r>=o.container.offset().top+(o.paddingTop+o.marginTop-o.options.additionalMarginTop)){var l,c=o.paddingTop+o.marginTop+e.additionalMarginTop,h=o.paddingBottom+o.marginBottom+e.additionalMarginBottom,d=o.container.offset().top,u=o.container.offset().top+n(o.container),p=0+e.additionalMarginTop,f=o.stickySidebar.outerHeight()+c+h<t(window).height()
l=f?p+o.stickySidebar.outerHeight():t(window).height()-o.marginBottom-o.paddingBottom-e.additionalMarginBottom
var m=d-r+o.paddingTop+o.marginTop,g=u-r-o.paddingBottom-o.marginBottom,v=o.stickySidebar.offset().top-r,y=o.previousScrollTop-r
"fixed"==o.stickySidebar.css("position")&&"modern"==o.options.sidebarBehavior&&(v+=y),"stick-to-top"==o.options.sidebarBehavior&&(v=e.additionalMarginTop),"stick-to-bottom"==o.options.sidebarBehavior&&(v=l-o.stickySidebar.outerHeight()),v=y>0?Math.min(v,p):Math.max(v,l-o.stickySidebar.outerHeight()),v=Math.max(v,m),v=Math.min(v,g-o.stickySidebar.outerHeight())
var b=o.container.height()==o.stickySidebar.outerHeight()
a=!b&&v==p||!b&&v==l-o.stickySidebar.outerHeight()?"fixed":r+v-o.sidebar.offset().top-o.paddingTop<=e.additionalMarginTop?"static":"absolute"}if("fixed"==a)o.stickySidebar.css({position:"fixed",width:o.sidebar.width(),top:v,left:o.sidebar.offset().left+parseInt(o.sidebar.css("padding-left"))})
else if("absolute"==a){var w={}
"absolute"!=o.stickySidebar.css("position")&&(w.position="absolute",w.top=r+v-o.sidebar.offset().top-o.stickySidebarPaddingTop-o.stickySidebarPaddingBottom),w.width=o.sidebar.width(),w.left="",o.stickySidebar.css(w)}else"static"==a&&i()
"static"!=a&&1==o.options.updateSidebarHeight&&o.sidebar.css({"min-height":o.stickySidebar.outerHeight()+o.stickySidebar.offset().top-o.sidebar.offset().top+o.paddingBottom}),o.previousScrollTop=r}},o.onScroll(o),t(document).scroll(function(t){return function(){t.onScroll(t)}}(o)),t(window).resize(function(t){return function(){t.stickySidebar.css({position:"static"}),t.onScroll(t)}}(o))})}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"}
e=t.extend(s,e),e.additionalMarginTop=parseInt(e.additionalMarginTop)||0,e.additionalMarginBottom=parseInt(e.additionalMarginBottom)||0,i(e,this)}}(jQuery),function(t){var e,i,n
return e={speed:700,pause:4e3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1,autoAppend:!0},i={moveUp:function(t,e){return i.showNextItem(t,e,"up")},moveDown:function(t,e){return i.showNextItem(t,e,"down")},nextItemState:function(t,e){var i,n
return n=t.element.children("ul"),i=t.itemHeight,0<t.options.height&&(i=n.children("li:first").height()),i+=t.options.margin+2*t.options.padding,{height:i,options:t.options,el:t.element,obj:n,selector:"up"===e?"li:first":"li:last",dir:e}},showNextItem:function(t,e,n){var o
return o=i.nextItemState(t,n),o.el.trigger("vticker.beforeTick"),n=o.obj.children(o.selector).clone(!0),"down"===o.dir&&o.obj.css("top","-"+o.height+"px").prepend(n),e&&e.animate?t.animating||i.animateNextItem(o,t):i.nonAnimatedNextItem(o),"up"===o.dir&&t.options.autoAppend&&n.appendTo(o.obj),o.el.trigger("vticker.afterTick")},animateNextItem:function(e,i){return i.animating=!0,e.obj.animate("up"===e.dir?{top:"-="+e.height+"px"}:{top:0},i.options.speed,function(){return t(e.obj).children(e.selector).remove(),t(e.obj).css("top","0px"),i.animating=!1})},nonAnimatedNextItem:function(t){return t.obj.children(t.selector).remove(),t.obj.css("top","0px")},nextUsePause:function(){var e,o
return o=t(this).data("state"),e=o.options,o.isPaused||i.hasSingleItem(o)?void 0:n.next.call(this,{animate:e.animate})},startInterval:function(){var e,n
return n=t(this).data("state"),e=n.options,n.intervalId=setInterval(function(t){return function(){return i.nextUsePause.call(t)}}(this),e.pause)},stopInterval:function(){var e
return(e=t(this).data("state"))?(e.intervalId&&clearInterval(e.intervalId),e.intervalId=void 0):void 0},restartInterval:function(){return i.stopInterval.call(this),i.startInterval.call(this)},getState:function(e,i){var n
if(!(n=t(i).data("state")))throw Error("vTicker: No state available from "+e)
return n},isAnimatingOrSingleItem:function(t){return t.animating||this.hasSingleItem(t)},hasMultipleItems:function(t){return 1<t.itemCount},hasSingleItem:function(t){return!i.hasMultipleItems(t)},bindMousePausing:function(t){return function(t,e){return t.bind("mouseenter",function(){return e.isPaused?void 0:(e.pausedByCode=!0,i.stopInterval.call(this),n.pause.call(this,!0))}).bind("mouseleave",function(){return!e.isPaused||e.pausedByCode?(e.pausedByCode=!1,n.pause.call(this,!1),i.startInterval.call(this)):void 0})}}(this),setItemLayout:function(e,i,n){var o
return e.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:n.margin,padding:n.padding}),isNaN(n.height)||0===n.height?(e.children("ul").children("li").each(function(){return t(this).height()>i.itemHeight?i.itemHeight=t(this).height():void 0}),e.children("ul").children("li").each(function(){return t(this).height(i.itemHeight)}),o=n.margin+2*n.padding,e.height((i.itemHeight+o)*n.showItems+n.margin)):e.height(n.height)},defaultStateAttribs:function(t,e){return{itemCount:t.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:t,animating:!1,options:e,isPaused:e.startPaused,pausedByCode:!1}}},n={init:function(o){var s,r
return t(this).data("state")&&n.stop.call(this),s=jQuery.extend({},e),o=t.extend(s,o),s=t(this),r=i.defaultStateAttribs(s,o),t(this).data("state",r),i.setItemLayout(s,r,o),o.startPaused||i.startInterval.call(this),o.mousePause?i.bindMousePausing(s,r):void 0},pause:function(e){var n
return n=i.getState("pause",this),i.hasMultipleItems(n)?(n.isPaused=e,n=n.element,e?(t(this).addClass("paused"),n.trigger("vticker.pause")):(t(this).removeClass("paused"),n.trigger("vticker.resume"))):!1},next:function(t){var e
return e=i.getState("next",this),i.isAnimatingOrSingleItem(e)?!1:(i.restartInterval.call(this),i.moveUp(e,t))},prev:function(t){var e
return e=i.getState("prev",this),i.isAnimatingOrSingleItem(e)?!1:(i.restartInterval.call(this),i.moveDown(e,t))},stop:function(){return i.getState("stop",this),i.stopInterval.call(this)},remove:function(){var t
return t=i.getState("remove",this),i.stopInterval.call(this),t=t.element,t.unbind(),t.remove()}},t.fn.vTicker=function(e){return n[e]?n[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?t.error("Method "+e+" does not exist on jQuery.vTicker"):n.init.apply(this,arguments)}}(jQuery)