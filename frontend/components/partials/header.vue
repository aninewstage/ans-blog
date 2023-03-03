<template>
  <header class="site-header site-header--inverse" role="banner">
    <!-- Header content -->
    <div class="header-main header-main--inverse hidden-xs hidden-sm">
      <div class="container">
        <div class="row row--flex row--vertical-center">
          <div class="col-xs-3 inverse-text">
            <ul class="social-list social-list--lg list-horizontal">
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
          <div class="col-xs-6">
            <div class="header-logo text-center">
              <a href="/"
                ><img
                  src="https://files.aninewstage.org/file/ans-assets/assets/logo-bottom.png"
                  alt="logo"
                  width="70px"
                  height="70px"
              /></a>
            </div>
          </div>
          <div class="col-xs-3 text-right">
            <a
              href="https://aninewstage.org"
              class="btn btn-default"
              data-toggle="modal"
              ><i class="mdicon mdicon-play_circle_filled mdicon--first"></i
              ><span>Movie Site</span></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Header content --><!-- Mobile header -->
    <div
      id="mnmd-mobile-header"
      class="mobile-header mobile-header--inverse visible-xs visible-sm"
    >
      <div class="mobile-header__inner mobile-header__inner--flex">
        <div
          class="header-branding header-branding--mobile mobile-header__section text-left"
        >
          <div class="header-logo header-logo--mobile flexbox__item text-left">
            <a href="/"
              ><img
                src="https://files.aninewstage.org/file/ans-assets/assets/logo-bottom.png"
                alt="logo"
                width="50px"
                height="50px"
            /></a>
          </div>
        </div>
        <div class="mobile-header__section text-right">
          <button
            type="submit"
            class="mobile-header-btn js-search-dropdown-toggle"
          >
            <span class="hidden-xs">Search</span
            ><i class="mdicon mdicon-search mdicon--last hidden-xs"></i
            ><i class="mdicon mdicon-search visible-xs-inline-block"></i>
          </button>
          <a
            href="#mnmd-offcanvas-primary"
            class="offcanvas-menu-toggle mobile-header-btn js-mnmd-offcanvas-toggle"
            ><span class="hidden-xs">Menu</span
            ><i class="mdicon mdicon-menu mdicon--last hidden-xs"></i
            ><i class="mdicon mdicon-menu visible-xs-inline-block"></i
          ></a>
        </div>
      </div>
    </div>
    <!-- Mobile header --><!-- Navigation bar -->
    <nav
      class="navigation-bar navigation-bar--inverse navigation-bar--fullwidth hidden-xs hidden-sm js-sticky-header-holder"
    >
      <div class="container">
        <div class="navigation-bar__inner">
          <div class="navigation-bar__section">
            <a
              href="#mnmd-offcanvas-primary"
              class="offcanvas-menu-toggle navigation-bar-btn js-mnmd-offcanvas-toggle"
              ><i class="mdicon mdicon-menu"></i
            ></a>
          </div>
          <div
            class="navigation-wrapper navigation-bar__section js-priority-nav"
          >
            <ul
              id="menu-main-menu"
              class="navigation navigation--main navigation--inline"
            >
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
              <li
                :class="hasMenuItem(category)"
                v-for="category in categories"
                :key="category.id"
              >
                <NuxtLink :to="`/${category.name}`">{{
                  category.name
                }}</NuxtLink>
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
              <li><NuxtLink to="/authors">Authors</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
          <div class="navigation-bar__section">
            <button
              type="submit"
              class="navigation-bar-btn js-search-dropdown-toggle"
            >
              <i class="mdicon mdicon-search"></i>
            </button>
          </div>
        </div>
        <!-- .navigation-bar__inner -->
        <div
          id="header-search-dropdown"
          class="header-search-dropdown ajax-search is-in-navbar js-ajax-search"
        >
          <div class="container container--narrow">
            <form
              class="search-form search-form--horizontal"
              method="get"
              action="#"
            >
              <div class="search-form__input-wrap">
                <input
                  type="text"
                  name="s"
                  class="search-form__input"
                  placeholder="Search"
                  value=""
                />
              </div>
              <div class="search-form__submit-wrap">
                <button
                  type="submit"
                  class="search-form__submit btn btn-primary"
                >
                  Search
                </button>
              </div>
            </form>
            <div class="search-results">
              <div class="typing-loader"></div>
              <div class="search-results__inner"></div>
            </div>
          </div>
        </div>
        <!-- .header-search-dropdown -->
      </div>
      <!-- .container -->
    </nav>
    <!-- Navigation-bar -->
  </header>
  <!-- Site header -->
</template>

<script setup>
onMounted(() => {
  var i = $;
  var n = i("#header-search-dropdown");
  n.on("click", function (i) {
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
        (n.hasClass("is-in-" + o) || !n.hasClass("is-active")) &&
          n.toggleClass("is-active"),
        o)
      ) {
        case "mobile":
          n.hasClass("is-in-mobile") ||
            (n.addClass("is-in-mobile"),
            n.removeClass("is-in-sticky"),
            n.removeClass("is-in-navbar"),
            n.appendTo("#mnmd-mobile-header"));
          break;
        case "sticky":
          n.hasClass("is-in-sticky") ||
            (n.addClass("is-in-sticky"),
            n.removeClass("is-in-mobile"),
            n.removeClass("is-in-navbar"),
            n.insertAfter(
              i("#mnmd-sticky-header").find(".navigation-bar__inner")
            ));
          break;
        default:
          n.hasClass("is-in-navbar") ||
            (n.addClass("is-in-navbar"),
            n.removeClass("is-in-sticky"),
            n.removeClass("is-in-mobile"),
            n.insertAfter(t.parents(".navigation-bar__inner")));
      }
      n.hasClass("is-active") &&
        setTimeout(function () {
          n.find(".search-form__input").focus();
        }, 200);
    }),
    i(document).on("click", function () {
      n.removeClass("is-active");
    }),
    i(window).on("stickyHeaderHidden", function () {
      n.hasClass("is-in-sticky") && n.removeClass("is-active");
    });
});
function hasMenuItem(category) {
  if (!category.sub_categories.data) {
    return false;
  }
  return category.sub_categories.data.length > 0
    ? "menu-item-has-children"
    : "";
}
const categories = ref({});
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
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
      }`,
    }),
  });
  categories.value = data?.categories.data;
} catch (err) {
  console.log(err);
}
</script>