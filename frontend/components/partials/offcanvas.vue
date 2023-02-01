<script setup>
function hasMenuItem(category) {
  if (!category.sub_categories.data) {
    return false;
  }
  return category.sub_categories.data.length > 0
    ? "menu-item-has-children"
    : "";
}
const categories = ref({});
const getCategories = gql`
  query getCategories {
    categories(parent_id: 0) {
      data {
        sub_categories(first: 10) {
          data {
            parent_id
            name
            slug
            id
          }
        }
        name
        slug
      }
    }
  }
`;
const { data } = await useAsyncQuery(getCategories);
categories.value = data.value?.categories?.data;
</script>

<template>
  <div
    id="mnmd-offcanvas-primary"
    class="mnmd-offcanvas js-mnmd-offcanvas js-perfect-scrollbar"
  >
    <div class="mnmd-offcanvas__title">
      <h2 class="site-logo">
        <a href="#"
          ><img
            src="https://files.aninewstage.org/file/ans-assets/assets/logo-bottom.png"
            alt="logo"
            width="100px"
            height="50px"
        /></a>
      </h2>
      <ul class="social-list list-horizontal">
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
        <li
          :class="hasMenuItem(category)"
          v-for="category in categories"
          :key="category.id"
        >
          <a href="#">{{ category.name }}</a>
          <ul class="sub-menu" v-if="hasMenuItem(category)">
            <li
              v-for="sub_category in category.sub_categories.data"
              :key="sub_category.name"
            >
              <NuxtLink :to="`/${category.name}/${sub_category.slug}`">{{
                capitalize(sub_category.name)
              }}</NuxtLink>
            </li>
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