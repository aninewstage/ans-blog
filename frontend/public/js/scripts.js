var MINIMALDOG = MINIMALDOG || {}
!function (i) {
    "use strict"
    MINIMALDOG.header = {
        init: function () { MINIMALDOG.header.ajaxSearch(), MINIMALDOG.header.loginForm(), MINIMALDOG.header.offCanvasMenu(), MINIMALDOG.header.priorityNavInit(), MINIMALDOG.header.searchToggle(), MINIMALDOG.header.smartAffix.init({ fixedHeader: ".js-sticky-header", headerPlaceHolder: ".js-sticky-header-holder" }), MINIMALDOG.header.stickyNavbarPadding() }, stickyNavbarPadding: function () {
            i(window).load(function () {
                var n = i.fn.modal.Constructor.prototype.setScrollbar
                i.fn.modal.Constructor.prototype.setScrollbar = function () { n.apply(this), this.bodyIsOverflowing && this.scrollbarWidth && i(".sticky-header .navigation-bar").css("padding-right", this.scrollbarWidth) }
                var e = i.fn.modal.Constructor.prototype.resetScrollbar
                i.fn.modal.Constructor.prototype.resetScrollbar = function () { e.apply(this), i(".sticky-header .navigation-bar").css("padding-right", "") }
            })
        }, searchToggle: function () {
            var n = i("#header-search-dropdown")
            n.on("click", function (i) { i.stopPropagation() }), i(".js-search-dropdown-toggle").on("click", function (e) {
                e.stopPropagation()
                var t = i(this), o = ""
                switch (o = t.hasClass("mobile-header-btn") ? "mobile" : t.parents(".sticky-header").length ? "sticky" : "navbar", (n.hasClass("is-in-" + o) || !n.hasClass("is-active")) && n.toggleClass("is-active"), o) {
                    case "mobile": n.hasClass("is-in-mobile") || (n.addClass("is-in-mobile"), n.removeClass("is-in-sticky"), n.removeClass("is-in-navbar"), n.appendTo("#mnmd-mobile-header"))
                        break
                    case "sticky": n.hasClass("is-in-sticky") || (n.addClass("is-in-sticky"), n.removeClass("is-in-mobile"), n.removeClass("is-in-navbar"), n.insertAfter(i("#mnmd-sticky-header").find(".navigation-bar__inner")))
                        break
                    default: n.hasClass("is-in-navbar") || (n.addClass("is-in-navbar"), n.removeClass("is-in-sticky"), n.removeClass("is-in-mobile"), n.insertAfter(t.parents(".navigation-bar__inner")))
                }n.hasClass("is-active") && setTimeout(function () { n.find(".search-form__input").focus() }, 200)
            }), i(document).on("click", function () { n.removeClass("is-active") }), i(window).on("stickyHeaderHidden", function () { n.hasClass("is-in-sticky") && n.removeClass("is-active") })
        }, ajaxSearch: function () {
            function n(n, s, c) {
                var r = i.ajax({ url: "http://localhost:4000/graphql", type: "post", dataType: "html", data: { searchTerm: n } })
                r.done(function (n) { e = i(n), t = "success", e.length || (e = o), c.html(e).css("opacity", 0).animate({ opacity: 1 }, 500) }), r.fail(function () { t = "failed", s.addClass("is-error"), e = a, c.html(e).css("opacity", 0).animate({ opacity: 1 }, 500) }), r.always(function () { s.removeClass("is-loading") })
            } var e = null, t = "", o = '<span class="noresult-text">There is no result.</span>', a = '<span class="error-text">There was some error.</span>'
            i(".js-ajax-search").each(function () {
                var e = i(this), o = e.find(".search-form__input"), a = e.find(".search-results"), s = e.find(".search-results__inner"), c = "", r = ""
                o.on("input", i.debounce(800, function () { c = o.val(), c.length > 0 ? (a.addClass("is-active"), (c != r || "failed" === t) && (a.removeClass("is-error").addClass("is-loading"), r = c, n(c, a, s))) : a.removeClass("is-active") }))
            })
        }, loginForm: function () { i(".js-login-form-tabs").find("a").click(function (n) { n.preventDefault(), i(this).tab("show") }) }, offCanvasMenu: function () {
            var n = i('<div class="mnmd-offcanvas-backdrop"></div>')
            n.on("click", function () { i(".js-mnmd-offcanvas").removeClass("is-active"), i(this).fadeOut(200, function () { i(this).detach() }) }), i(".js-mnmd-offcanvas-toggle").on("click", function (e) {
                e.preventDefault()
                var t = i(this).attr("href"), o = i(t)
                o.toggleClass("is-active"), n.hide().appendTo(document.body).fadeIn(200)
            }), i(".js-mnmd-offcanvas-search-toggle").on("click", function (e) {
                e.preventDefault()
                var t = i(this).attr("href"), o = i(t)
                o.toggleClass("is-active"), n.hide().appendTo(document.body).fadeIn(200), o.find(".search-form__input").focus()
            }), i(".js-mnmd-offcanvas-close").on("click", function (e) {
                e.preventDefault()
                var t = i(this).attr("href"), o = i(t)
                o.removeClass("is-active"), n.fadeOut(200, function () { i(this).detach() })
            }), i.isFunction(i.fn.perfectScrollbar) && i(".mnmd-offcanvas").perfectScrollbar(), i(".navigation--offcanvas").find("li.menu-item-has-children > a").append(function () { return i('<div class="submenu-toggle"><i class="mdicon mdicon-expand_more"></i></div>').click(function (n) { n.preventDefault(), i(this).parent().siblings(".sub-menu").slideToggle(200) }) })
        }, priorityNavInit: function () {
            var n = i(".js-priority-nav")
            n.each(function () { MINIMALDOG.priorityNav(i(this)) })
        }, smartAffix: {
            headerPlaceHolder: "", fixedHeader: "", isFixed: !1, isShown: !1, windowScrollTop: 0, lastWindowScrollTop: 0, offCheckpoint: 0, onCheckpoint: 0, init: function (n) { this.fixedHeader = n.fixedHeader, this.headerPlaceHolder = n.headerPlaceHolder, i(this.fixedHeader).length && (i(document).ready(function () { MINIMALDOG.header.smartAffix.compute() }), i(window).load(function () { MINIMALDOG.header.smartAffix.compute(), MINIMALDOG.header.smartAffix.updateState() })) }, compute: function () { i(this.headerPlaceHolder).length ? this.offCheckpoint = i(this.headerPlaceHolder).offset().top + 400 : this.offCheckpoint = 400, this.onCheckpoint = this.offCheckpoint + 500, this.windowScrollTop = i(window).scrollTop(), this.offCheckpoint < this.windowScrollTop && (this.isFixed = !0) }, updateState: function () { this.isFixed ? i(this.fixedHeader).addClass("is-fixed") : (i(this.fixedHeader).removeClass("is-fixed"), i(window).trigger("stickyHeaderHidden")), this.isShown ? i(this.fixedHeader).addClass("is-shown") : i(this.fixedHeader).removeClass("is-shown") }, eventScroll: function (i) {
                var n = "", e = 0
                i != this.lastWindowScrollTop && (n = i > this.lastWindowScrollTop ? "down" : "up", e = Math.abs(i - this.lastWindowScrollTop), this.lastWindowScrollTop = i, this.offCheckpoint < i ? this.isFixed = !0 : this.isFixed = !1, this.isFixed ? "down" == n && e > 14 ? this.isShown && (this.isShown = !1) : !this.isShown && e > 14 && this.onCheckpoint < i && (this.isShown = !0) : this.isShown = !1, this.updateState())
            }
        }
    }, MINIMALDOG.documentOnScroll = { ticking: !1, windowScrollTop: 0, init: function () { window.addEventListener("scroll", function (n) { MINIMALDOG.documentOnScroll.ticking || window.requestAnimationFrame(function () { MINIMALDOG.documentOnScroll.windowScrollTop = i(window).scrollTop(), MINIMALDOG.header.smartAffix.eventScroll(MINIMALDOG.documentOnScroll.windowScrollTop), MINIMALDOG.documentOnScroll.goToTopScroll(MINIMALDOG.documentOnScroll.windowScrollTop), MINIMALDOG.documentOnScroll.ticking = !1 }), MINIMALDOG.documentOnScroll.ticking = !0 }) }, goToTopScroll: function (i) { t.length && (i > 800 ? t.hasClass("is-active") || t.addClass("is-active") : t.removeClass("is-active")) } }, MINIMALDOG.documentOnResize = { ticking: !1, init: function () { window.addEventListener("resize", function (n) { MINIMALDOG.documentOnResize.ticking || window.requestAnimationFrame(function () { MINIMALDOG.documentOnResize.windowScrollTop = i(window).scrollTop(), MINIMALDOG.clippedBackground(), MINIMALDOG.documentOnResize.ticking = !1 }), MINIMALDOG.documentOnResize.ticking = !0 }) } }, MINIMALDOG.documentOnReady = {
        init: function () { MINIMALDOG.header.init(), MINIMALDOG.documentOnScroll.init(), MINIMALDOG.documentOnReady.ajaxLoadPost(), MINIMALDOG.documentOnReady.carousel_1i(), MINIMALDOG.documentOnReady.carousel_1i30m(), MINIMALDOG.documentOnReady.carousel_2i4m(), MINIMALDOG.documentOnReady.carousel_3i4m(), MINIMALDOG.documentOnReady.carousel_3i4m_small(), MINIMALDOG.documentOnReady.carousel_3i20m(), MINIMALDOG.documentOnReady.carousel_headingAside_3i(), MINIMALDOG.documentOnReady.carousel_4i(), MINIMALDOG.documentOnReady.carousel_4i20m(), MINIMALDOG.documentOnReady.carousel_overlap(), MINIMALDOG.documentOnReady.customCarouselNav(), MINIMALDOG.documentOnReady.countdown(), MINIMALDOG.documentOnReady.goToTop(), MINIMALDOG.documentOnReady.newsTicker(), MINIMALDOG.documentOnReady.lightBox(), MINIMALDOG.documentOnReady.perfectScrollbarInit(), MINIMALDOG.documentOnReady.tooltipInit() }, ajaxLoadPost: function () {
            function n(n, t) {
                var o = "", a = i.ajax({ url: "inc/ajax-load-post.html", type: "post", dataType: "html", data: { offset: n.offset, postsToLoad: n.postsToLoad } })
                a.done(function (n) { e = i(n), o = "success", e && e.appendTo(t).css("opacity", 0).animate({ opacity: 1 }, 500), i("html, body").animate({ scrollTop: i(window).scrollTop() + 1 }, 0).animate({ scrollTop: i(window).scrollTop() - 1 }, 0) }), a.fail(function () { o = "failed" }), a.always(function () { })
            } var e = null
            i(".js-ajax-load-post").each(function () {
                var e = i(this), t = e.find(".posts-list"), o = e.find(".js-ajax-load-post-trigger"), a = { offset: e.data("offset"), postsToLoad: e.data("posts-to-load"), layout: e.data("layout") }
                o.on("click", function () { n(a, t) })
            })
        }, carousel_1i: function () {
            var n = i(".js-mnmd-carousel-1i")
            n.each(function () { i(this).owlCarousel({ items: 1, margin: 0, nav: !0, dots: !0, autoHeight: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], smartSpeed: 500 }) })
        }, carousel_1i30m: function () {
            var n = i(".js-carousel-1i30m")
            n.each(function () { i(this).owlCarousel({ items: 1, margin: 30, loop: !0, nav: !0, dots: !0, autoHeight: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], smartSpeed: 500 }) })
        }, carousel_overlap: function () {
            var n = i(".js-mnmd-carousel-overlap")
            n.each(function () {
                var n = i(this)
                n.flickity({ wrapAround: !0 }), n.on("staticClick.flickity", function (i, e, t, o) { "number" == typeof o && n.data("flickity").selectedIndex != o && n.flickity("selectCell", o) })
            })
        }, carousel_2i4m: function () {
            var n = i(".js-carousel-2i4m")
            n.each(function () { i(this).owlCarousel({ items: 2, margin: 4, loop: !1, nav: !0, dots: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 } } }) })
        }, carousel_3i: function () {
            var n = i(".js-carousel-3i")
            n.each(function () { i(this).owlCarousel({ loop: !0, nav: !0, dots: !1, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } } }) })
        }, carousel_3i4m: function () {
            var n = i(".js-carousel-3i4m")
            n.each(function () { i(this).owlCarousel({ margin: 4, loop: !1, nav: !0, dots: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } } }) })
        }, carousel_3i4m_small: function () {
            var n = i(".js-carousel-3i4m-small")
            n.each(function () { i(this).owlCarousel({ margin: 4, loop: !1, nav: !0, dots: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], autoHeight: !0, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } } }) })
        }, carousel_3i20m: function () {
            var n = i(".js-carousel-3i20m")
            n.each(function () { i(this).owlCarousel({ margin: 20, loop: !0, nav: !0, dots: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } } }) })
        }, carousel_headingAside_3i: function () {
            var n = i(".js-mnmd-carousel-heading-aside-3i")
            n.each(function () { i(this).owlCarousel({ margin: 20, nav: !1, dots: !1, loop: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1, margin: 10, stagePadding: 40, loop: !1 }, 768: { items: 2 }, 992: { items: 3 } } }) })
        }, customCarouselNav: function () {
            if (i.isFunction(i.fn.owlCarousel)) {
                var n = i(".js-carousel-next")
                n.each(function () {
                    var n = i(this), e = n.parent(".mnmd-carousel-nav-custom-holder").attr("data-carouselID"), t = i("#" + e)
                    n.click(function () { t.trigger("next.owl.carousel") })
                })
                var e = i(".js-carousel-prev")
                e.each(function () {
                    var n = i(this), e = n.parent(".mnmd-carousel-nav-custom-holder").attr("data-carouselID"), t = i("#" + e)
                    n.click(function () { t.trigger("prev.owl.carousel") })
                })
            }
        }, carousel_4i: function () {
            var n = i(".js-carousel-4i")
            n.each(function () { i(this).owlCarousel({ loop: !0, nav: !0, dots: !1, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 4 } } }) })
        }, carousel_4i20m: function () {
            var n = i(".js-carousel-4i20m")
            n.each(function () { i(this).owlCarousel({ items: 4, margin: 20, loop: !1, nav: !0, dots: !0, navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'], responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1199: { items: 4 } } }) })
        }, countdown: function () {
            i.isFunction(i.fn.countdown) && i(".js-countdown").each(function () {
                var n = i(this), e = i(this).data("countdown")
                n.countdown(e, function (n) { i(this).html(n.strftime('<div class="countdown__section"><span class="countdown__digit">%-D</span><span class="countdown__text meta-font">day%!D</span></div><div class="countdown__section"><span class="countdown__digit">%H</span><span class="countdown__text meta-font">hr</span></div><div class="countdown__section"><span class="countdown__digit">%M</span><span class="countdown__text meta-font">min</span></div><div class="countdown__section"><span class="countdown__digit">%S</span><span class="countdown__text meta-font">sec</span></div>')) })
            })
        }, goToTop: function () { t.length && t.click(function () { return i("body,html").stop(!0).animate({ scrollTop: 0 }, 400), !1 }) }, newsTicker: function () {
            var n = i(".js-mnmd-news-ticker")
            n.each(function () {
                var n = i(this), e = n.siblings(".mnmd-news-ticker__control").find(".mnmd-news-ticker__next"), t = n.siblings(".mnmd-news-ticker__control").find(".mnmd-news-ticker__prev")
                n.addClass("initialized").vTicker("init", { speed: 300, pause: 3e3, showItems: 1 }), e.on("click", function () { n.vTicker("next", { animate: !0 }) }), t.on("click", function () { n.vTicker("prev", { animate: !0 }) })
            })
        }, lightBox: function () { i.isFunction(i.fn.magnificPopup) && (i(".js-mnmd-lightbox-image").magnificPopup({ type: "image", mainClass: "mfp-zoom-in", removalDelay: 80 }), i(".js-mnmd-lightbox-gallery").each(function () { i(this).magnificPopup({ delegate: ".gallery-icon > a", type: "image", gallery: { enabled: !0 }, mainClass: "mfp-zoom-in", removalDelay: 80 }) })) }, perfectScrollbarInit: function () { i.isFunction(i.fn.perfectScrollbar) && i(".js-perfect-scrollbar").perfectScrollbar({ wheelPropagation: !0 }) }, stickySidebar: function () {
            setTimeout(function () {
                var n = i(".js-sticky-sidebar"), e = i(".js-sticky-header"), t = e.length ? e.outerHeight() + 20 : 0
                i.isFunction(i.fn.theiaStickySidebar) && n.theiaStickySidebar({ additionalMarginTop: t, additionalMarginBottom: 20 })
            }, 250)
        }, tooltipInit: function () { i('[data-toggle="tooltip"]').tooltip() }
    }, MINIMALDOG.documentOnLoad = { init: function () { MINIMALDOG.clippedBackground(), MINIMALDOG.documentOnReady.stickySidebar() } }
    var n = i(window), e = i(document), t = i(".js-go-top-el")
    e.ready(MINIMALDOG.documentOnReady.init), n.load(MINIMALDOG.documentOnLoad.init), n.on("resize", MINIMALDOG.documentOnResize.init), MINIMALDOG.clippedBackground = function () {
        var n = i(".js-overlay-bg")
        n.each(function () {
            var n = i(this).find(".js-overlay-bg-main-area")
            n.length || (n = i(this))
            var e = i(this).find(".js-overlay-bg-sub-area"), t = i(this).find(".js-overlay-bg-sub")
            t.css("display", "block"), t.css("position", "absolute"), t.css("width", n.outerWidth() + "px"), t.css("height", n.outerHeight() + "px")
            var o = n.offset().left - e.offset().left, a = n.offset().top - e.offset().top
            t.css("left", o + "px"), t.css("top", a + "px")
        })
    }, MINIMALDOG.priorityNav = function (n) {
        function e() {
            if (0 != t[0].getBoundingClientRect().width) {
                var e = 0
                if (t.children("li").each(function () { e += i(this)[0].getBoundingClientRect().width }), o) {
                    var a = n.find(".priority-nav__more"), s = a[0].getBoundingClientRect().width, c = n[0].getBoundingClientRect().width
                    if (c -= parseInt(n.css("padding-left")) + parseInt(n.css("padding-right")), c -= n.outerWidth(!1) - n.innerWidth(), e > c) {
                        var r = t.children("li:not(.priority-nav__more)"), d = 1
                        i(r.get().reverse()).each(function (n) { return e -= i(this)[0].getBoundingClientRect().width, e > c ? void d++ : !1 })
                        var l = t.children("li:not(.priority-nav__more)").slice(-d)
                        l.each(function (n) { i(this).attr("data-width", i(this)[0].getBoundingClientRect().width) }), l.prependTo(a.children("ul"))
                    } else {
                        var u = a.children("ul").children("li"), m = 0
                        if (1 == u.length ? c >= e - s + u.first().data("width") && (m = 1) : u.each(function (n) { return e += i(this).data("width"), c >= e ? void m++ : !1 }), m > 0) {
                            var f = u.slice(0, m)
                            f.insertBefore(t.children(".priority-nav__more")), u = a.children("ul").children("li"), u.length <= 0 && (a.remove(), o = !1)
                        }
                    }
                } else {
                    var a = i('<li class="priority-nav__more"><a href="#"><span>More</span><i class="mdicon mdicon-more_vert"></i></a><ul class="sub-menu"></ul></li>'), c = n[0].getBoundingClientRect().width
                    if (c -= parseInt(n.css("padding-left")) + parseInt(n.css("padding-right")), c -= n.outerWidth(!1) - n.innerWidth(), e > c) {
                        var r = t.children("li"), d = 1
                        i(r.get().reverse()).each(function (n) { return e -= i(this)[0].getBoundingClientRect().width, e > c ? void d++ : !1 })
                        var l = t.children("li:not(.priority-nav__more)").slice(-d)
                        l.each(function (n) { i(this).attr("data-width", i(this)[0].getBoundingClientRect().width) }), l.prependTo(a.children("ul")), a.appendTo(t), o = !0
                    }
                }
            }
        } var t = (n.find("button"), n.find(".navigation")), o = !1
        t.length && (i(window).on("load", e), i(window).on("webfontLoaded", e), i(window).on("resize", i.throttle(100, e)))
    }
}(jQuery)