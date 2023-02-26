<template>
  <div>
    <NuxtLoadingIndicator :color="'red'" :throttle="0" />
    <div class="site-wrapper">
      <PartialsHeader />
      <slot />
      <PartialsFooter />
      <a href="#" class="mnmd-go-top btn btn-default hidden-xs js-go-top-el"
        ><i class="mdicon mdicon-arrow_upward"></i
      ></a>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  var i = $;
  var b = i("#header-search-dropdown");
  var n = i('<div class="mnmd-offcanvas-backdrop"></div>');
  b.on("click", function (i) {
    i.stopPropagation();
  }),
    i(".js-search-dropdown-toggle").on("click", function (e) {
      e.stopPropagation();
      var t = i(this),
        o = "";
      switch (
        ((o = t.hasClass("mobile-header-btn")
          ? "mobile"
          : t.parents(".sticky-header").length
          ? "sticky"
          : "navbar"),
        (b.hasClass("is-in-" + o) || !b.hasClass("is-active")) &&
          b.toggleClass("is-active"),
        o)
      ) {
        case "mobile":
          b.hasClass("is-in-mobile") ||
            (b.addClass("is-in-mobile"),
            b.removeClass("is-in-sticky"),
            b.removeClass("is-in-navbar"),
            b.appendTo("#mnmd-mobile-header"));
          break;
        case "sticky":
          b.hasClass("is-in-sticky") ||
            (b.addClass("is-in-sticky"),
            b.removeClass("is-in-mobile"),
            b.removeClass("is-in-navbar"),
            b.insertAfter(
              i("#mnmd-sticky-header").find(".navigation-bar__inner")
            ));
          break;
        default:
          b.hasClass("is-in-navbar") ||
            (b.addClass("is-in-navbar"),
            b.removeClass("is-in-sticky"),
            b.removeClass("is-in-mobile"),
            b.insertAfter(t.parents(".navigation-bar__inner")));
      }
      b.hasClass("is-active") &&
        setTimeout(function () {
          b.find(".search-form__input").focus();
        }, 200);
    }),
    i(document).on("click", function () {
      b.removeClass("is-active");
    }),
    i(window).on("stickyHeaderHidden", function () {
      b.hasClass("is-in-sticky") && b.removeClass("is-active");
    });
  n.on("click", function () {
    i(".js-mnmd-offcanvas").removeClass("is-active"),
      i(this).fadeOut(200, function () {
        i(this).detach();
      });
  }),
    i(".js-mnmd-offcanvas-toggle").on("click", function (e) {
      e.preventDefault();
      var t = i(this).attr("href"),
        o = i(t);
      o.toggleClass("is-active"), n.hide().appendTo(document.body).fadeIn(200);
    }),
    i(".js-mnmd-offcanvas-search-toggle").on("click", function (e) {
      e.preventDefault();
      var t = i(this).attr("href"),
        o = i(t);
      o.toggleClass("is-active"),
        n.hide().appendTo(document.body).fadeIn(200),
        o.find(".search-form__input").focus();
    }),
    i(".js-mnmd-offcanvas-close").on("click", function (e) {
      e.preventDefault();
      var t = i(this).attr("href"),
        o = i(t);
      o.removeClass("is-active"),
        n.fadeOut(200, function () {
          i(this).detach();
        });
    }),
    i.isFunction(i.fn.perfectScrollbar) &&
      i(".mnmd-offcanvas").perfectScrollbar(),
    i(".navigation--offcanvas")
      .find("li.menu-item-has-children > a")
      .append(function () {
        return i(
          '<div class="submenu-toggle"><i class="mdicon mdicon-expand_more"></i></div>'
        ).click(function (n) {
          n.preventDefault(),
            i(this).parent().siblings(".sub-menu").slideToggle(200);
        });
      });
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ANS Blogs` : "ANS Blogs";
  },
});
const route = useRoute();

onMounted(() => {
  if (route.query.s && !route.query.page) {
    useRouter().push(`/blogs?s=${route.query.s}`);
  }
  WebFont.load({
    google: {
      families: ["Rubik:300,400,700,900"],
    },
  });
});
</script>