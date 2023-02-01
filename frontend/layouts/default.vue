<template>
  <div>
    <NuxtLoadingIndicator :color="'red'" :throttle="0" />
    <div class="site-wrapper">
      <PartialsHeader />
      <slot />
      <PartialsFooter />
      <PartialsOffcanvas />
      <a href="#" class="mnmd-go-top btn btn-default hidden-xs js-go-top-el"
        ><i class="mdicon mdicon-arrow_upward"></i
      ></a>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  var i = $;
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
})
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ANS Blogs` : "ANS Blogs";
  },
});
const route = useRoute();
onMounted(() => {
  WebFont.load({
    google: {
      families: ["Rubik:300,400,700,900"],
    },
  });
});
</script>