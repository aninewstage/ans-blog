<script setup>
</script>

<template>
  <footer class="site-footer site-footer--inverse inverse-text">
    <div
      class="site-footer__section site-footer__section--seperated site-footer__section--bordered"
    >
      <div class="container">
        <nav class="footer-menu footer-menu--bold">
          <ul
            id="menu-footer-menu"
            class="navigation navigation--footer navigation--center"
          >
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li>
              <NuxtLink to="/privacy">Privacy</NuxtLink>
            </li>
            <li><NuxtLink to="/cookie">Cookie</NuxtLink></li>
            <li><NuxtLink to="/terms">Terms</NuxtLink></li>
            <li><a href="">FAQ</a></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="site-footer__section site-footer--inverse">
      <div class="container">
        <ul class="social-list social-list--lg list-center">
          <li>
            <a href="https://www.facebook.com/aninewstage"
              ><i class="mdicon mdicon-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/j6dr23n"
              ><i class="mdicon mdicon-twitter"></i
            ></a>
          </li>
          <li>
            <a href="mailto:j6dr23n@gmail.com"
              ><i class="mdicon mdicon-mail_outline"></i
            ></a>
          </li>
          <li>
            <a href="https://t.me/aninewstage"
              ><i class="fa fa-telegram" style="vertical-align: middle"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-footer__section">
      <div class="container">
        <div class="text-center">
          Aninewstage Blogs is the property of
          <a href="https://aninewstage.org" target="_blank">Aninewstage</a>
          ©2023 All Rights Reserved.
        </div>
        <div class="text-center">
          <p style="font-size: 10px" class="mt-4">
            Developed With <i class="fas fa-heart" style="color: red"></i> By
            <a href="https://www.facebook.com/jionsix.hacknh">j6dr23n</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!-- Sticky header -->
</template>