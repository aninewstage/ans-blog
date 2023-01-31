<script setup>
</script>
<template>
  <div
    id="mnmd-offcanvas-primary"
    class="mnmd-offcanvas js-mnmd-offcanvas js-perfect-scrollbar"
  >
    <div class="mnmd-offcanvas__title">
      <h2 class="site-logo">
        <a href="#"><img src="img/logo-color.png" alt="logo" width="140" /></a>
      </h2>
      <ul class="social-list list-horizontal">
        <li>
          <a href="#"><i class="mdicon mdicon-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i class="mdicon mdicon-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="mdicon mdicon-youtube"></i></a>
        </li>
        <li>
          <a href="#"><i class="mdicon mdicon-google-plus"></i></a>
        </li>
      </ul>
      <a
        href="#mnmd-offcanvas-primary"
        class="mnmd-offcanvas-close js-mnmd-offcanvas-close"
        aria-label="Close"
        ><span aria-hidden="true">&#10005;</span></a
      >
    </div>
    <div class="mnmd-offcanvas__section mnmd-offcanvas__section-navigation">
      <ul id="menu-offcanvas-menu" class="navigation navigation--offcanvas">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li class="menu-item-has-children">
          <a href="#">Categories</a>
          <ul class="sub-menu">
            <li><NuxtLink to="/news">News</NuxtLink></li>
            <li><NuxtLink to="/facts">Facts</NuxtLink></li>
            <li><NuxtLink to="/reviews">Reviews</NuxtLink></li>
            <li><NuxtLink to="/recaps">Recaps</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/author">Authors</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
    <div class="mnmd-offcanvas__section visible-xs visible-sm">
      <div class="text-center">
        <a
          href="#login-modal"
          class="btn btn-default"
          data-toggle="modal"
          data-target="#login-modal"
          ><i class="mdicon mdicon-person mdicon--first"></i
          ><span>Login/Sign up</span></a
        >
      </div>
    </div>
  </div>
  <!-- Off-canvas menu -->
</template>

<style lang="scss" scoped>
</style>