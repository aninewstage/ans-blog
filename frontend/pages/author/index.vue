<template>
  <div class="site-content">
    <div
      class="
        mnmd-block mnmd-block--fullwidth mnmd-block--contiguous
        page-heading page-heading--has-background page-heading--inverse
      "
    >
      <div class="background-img background-img--darkened">
        <div class="background-animes-pattern" style=""></div>
      </div>
      <div class="container">
        <h2 class="page-heading__title">Authors list</h2>
        <div class="page-heading__subtitle">
          The authors of the Aninewstage Anime Blogs <br /><br />
        </div>
      </div>
    </div>
    <div class="mnmd-block mnmd-block--fullwidth">
      <div class="container">
        <div class="row">
          <div class="mnmd-main-col" role="main">
            <div class="mnmd-block">
              <ul class="list-unstyled list-space-lg">
                <PartialsCardAuthor
                  v-for="{ id, username, email, info, created_at } in authors"
                  :key="id"
                  :id="id"
                  :info="info"
                  :username="username"
                  :email="email"
                  :created_at="created_at"
                />
                <Pagination v-if="authors.length > 5" />
              </ul>
            </div>
            <!-- .mnmd-block -->
          </div>
          <!-- .mnmd-main-col -->
          <div
            class="mnmd-sub-col mnmd-sub-col--right sidebar js-sticky-sidebar"
            role="complementary"
          >
            <div class="mnmd-widget-search mnmd-widget widget widget_search">
              <div class="widget__title">
                <h4 class="widget__title-text">Search</h4>
              </div>
              <form
                class="search-form search-form--btn-inside"
                method="get"
                action="#"
              >
                <input
                  type="text"
                  name="s"
                  class="search-form__input"
                  placeholder="Search..."
                  value=""
                />
                <button type="submit" class="search-form__submit">
                  <i class="mdicon mdicon-search"></i>
                </button>
              </form>
            </div>
            <div
              class="
                mnmd-widget
                widget widget-subscribe widget-subscribe--stack-bottom
              "
            >
              <div class="widget-subscribe__inner">
                <div class="subscribe-form subscribe-form--center">
                  <p><b class="typescale-3">Don't miss the new designs!</b></p>
                  <p>
                    Enter your email to receive daily round-up of most
                    submissions
                  </p>
                  <div class="subscribe-form__fields">
                    <p>
                      <label>Email address:</label
                      ><input
                        type="email"
                        name="EMAIL"
                        placeholder="Your email address"
                        required
                      />
                    </p>
                    <p>
                      <input
                        type="submit"
                        value="Subscribe"
                        class="btn-block"
                      />
                    </p>
                  </div>
                  <small>Don't worry, we don't spam</small>
                </div>
              </div>
            </div>
            <!-- .widget -->
            <div class="mnmd-widget-social-counter-counter mnmd-widget widget">
              <div class="mnmd-widget-social-counter__inner">
                <ul class="list-unstyled list-space-xs">
                  <li>
                    <a
                      href="#"
                      class="social-tile social-facebook facebook-theme-bg"
                    >
                      <div class="social-tile__icon">
                        <i class="mdicon mdicon-facebook"></i>
                      </div>
                      <div class="social-tile__inner flexbox">
                        <div class="social-tile__left flexbox__item">
                          <h5 class="social-tile__title meta-font">Facebook</h5>
                          <span class="social-tile__count">2.7k likes</span>
                        </div>
                        <div class="social-tile__right">
                          <i class="mdicon mdicon-arrow_forward"></i>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="social-tile social-twitter twitter-theme-bg"
                    >
                      <div class="social-tile__icon">
                        <i class="mdicon mdicon-twitter"></i>
                      </div>
                      <div class="social-tile__inner flexbox">
                        <div class="social-tile__left flexbox__item">
                          <h5 class="social-tile__title meta-font">Twitter</h5>
                          <span class="social-tile__count">1.2k followers</span>
                        </div>
                        <div class="social-tile__right">
                          <i class="mdicon mdicon-arrow_forward"></i>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="social-tile social-youtube youtube-theme-bg"
                    >
                      <div class="social-tile__icon">
                        <i class="mdicon mdicon-youtube"></i>
                      </div>
                      <div class="social-tile__inner flexbox">
                        <div class="social-tile__left flexbox__item">
                          <h5 class="social-tile__title meta-font">Youtube</h5>
                          <span class="social-tile__count"
                            >480k subscribers</span
                          >
                        </div>
                        <div class="social-tile__right">
                          <i class="mdicon mdicon-arrow_forward"></i>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- .widget -->
          </div>
          <!-- .mnmd-sub-col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .mnmd-block -->
  </div>
  <!-- .site-content -->
</template>
<script setup>
const authors = ref({});
const query = gql`
  query getUsers {
    users(role: "author") {
      data {
        id
        info {
          bio
          facebook
          avatar
          name
          twitter
        }
        username
        email
        created_at
      }
    }
  }
`;
const { data } = await useAsyncQuery(query);
authors.value = data.value?.users?.data;
</script>