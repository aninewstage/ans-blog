<template>
  <div class="site-content">
    <Title>{{ author?.username }}</Title>
    <div class="mnmd-block mnmd-block--fullwidth">
      <div class="container">
        <div class="row">
          <div class="mnmd-main-col" role="main">
            <div class="mnmd-block">
              <PartialsCardAuthor
                :id="author?.id"
                :info="author?.info"
                :username="author?.username"
                :email="author?.email"
                :created_at="author?.created_at"
              />
              <div class="spacer-lg"></div>
              <div class="posts-list list-unstyled list-space-lg">
                <PartialsCardNews
                  v-for="{
                    id,
                    title,
                    slug,
                    category,
                    poster,
                    body,
                    tags,
                    created_at,
                  } in author?.posts.data"
                  :key="id"
                  :id="id"
                  :author="author"
                  :poster="poster"
                  :title="title"
                  :slug="slug"
                  :tags="tags"
                  :body="body"
                  :category="category"
                  :created_at="created_at"
                />
              </div>
              <Pagination
                v-if="user?.posts.length > 10"
                :pagination="user?.posts?.paginatorInfo"
              />
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
const author = ref({});
const route = useRoute();
const query = gql`
  query getUser {
    user(username: "${route.params?.username}") {
      info {
        bio
        facebook
        avatar
        name
        telegram
        twitter
      }
      posts(first: 10) {
        paginatorInfo {
          count
          total
          lastItem
          lastPage
          perPage
          hasMorePages
          firstItem
        }
        data {
          id
          title
          slug
          category {
            name
          }
          poster
          tags
          body
          created_at
        }
      }
      username
      email
      created_at
    }
  }
`;
const { data } = await useAsyncQuery(query);
author.value = data.value?.user;

useServerSeoMeta({
  title: () => `${author?.username}`,
  ogTitle: () => `${author?.username} - ANS Blogs`,
  description: () => `${author?.username} from aninewstage blog`,
  ogDescription: () => `${author?.username} from aninewstage blog`,
  ogImage: () => `${author?.info?.avatar}`,
  twitterCard: () => "summary_large_image",
});
</script>