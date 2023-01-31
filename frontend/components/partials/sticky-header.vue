<script setup>
</script>
<template>
  <div id="mnmd-sticky-header" class="sticky-header js-sticky-header">
    <!-- Navigation bar -->
    <nav
      class="
        navigation-bar navigation-bar--inverse navigation-bar--fullwidth
        hidden-xs hidden-sm
      "
    >
      <div class="navigation-bar__inner">
        <div class="navigation-bar__section">
          <a
            href="#mnmd-offcanvas-primary"
            class="
              offcanvas-menu-toggle
              navigation-bar-btn
              js-mnmd-offcanvas-toggle
            "
            ><i class="mdicon mdicon-menu icon--2x"></i
          ></a>
          <div class="site-logo header-logo">
            <a href="home-1.html"
              ><img src="img/logo-mark-color.png" alt="logo"
            /></a>
          </div>
        </div>
        <div class="navigation-wrapper navigation-bar__section js-priority-nav">
          <ul
            id="menu-main-menu-1"
            class="navigation navigation--main navigation--inline"
          >
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
        <div class="navigation-bar__section">
          <a
            href="#login-modal"
            class="navigation-bar__login-btn navigation-bar-btn"
            data-toggle="modal"
            data-target="#login-modal"
            ><i class="mdicon mdicon-person"></i
          ></a>
          <button
            type="submit"
            class="navigation-bar-btn js-search-dropdown-toggle"
          >
            <i class="mdicon mdicon-search"></i>
          </button>
        </div>
      </div>
      <!-- .navigation-bar__inner -->
    </nav>
    <!-- Navigation-bar -->
  </div>
  <!-- Sticky header -->
</template>

<style lang="scss" scoped>
</style>