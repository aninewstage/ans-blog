<template>
  <div class="site-content single-entry">
    <Title>{{ post?.title }}</Title>
    <div class="mnmd-block mnmd-block--fullwidth single-entry-wrap">
      <div class="container">
        <div class="row">
          <div class="mnmd-main-col" role="main">
            <article
              class="mnmd-block post post--single post-10 type-post status-publish format-standard has-post-thumbnail hentry category-abroad tag-landscape cat-5"
              itemscope
              itemtype="http://schema.org/Article"
            >
              <!-- Schema meta -->
              <div class="page-schema-meta">
                <link itemprop="mainEntityOfPage" href="#single-url" />
                <meta
                  itemprop="headline"
                  content="Nintendo is reportedly bringing Zelda to your phone this year"
                />
                <meta itemprop="datePublished" content="2017-02-10" />
                <meta itemprop="dateModified" content="2017-02-10" />
                <meta itemprop="commentCount" content="24" />
                <div
                  itemprop="image"
                  itemscope
                  itemtype="https://schema.org/ImageObject"
                >
                  <meta itemprop="url" content="#image-url" />
                  <meta itemprop="width" content="1000" />
                  <meta itemprop="height" content="563" />
                </div>
                <div
                  itemscope
                  itemprop="author"
                  itemtype="http://schema.org/Person"
                >
                  <meta itemprop="name" content="Ryan Reynold" />
                </div>
                <div
                  itemprop="publisher"
                  itemscope
                  itemtype="http://schema.org/Organization"
                >
                  <meta itemprop="name" content="The Next Mag" />
                  <div
                    class="hidden"
                    itemprop="logo"
                    itemscope
                    itemtype="https://schema.org/ImageObject"
                  >
                    <meta itemprop="url" content="#logo-url" />
                    <meta itemprop="width" content="200" />
                    <meta itemprop="height" content="70" />
                  </div>
                </div>
              </div>
              <!-- Schema meta -->
              <div class="single-content">
                <header class="single-header">
                  <NuxtLink
                    :to="hasParentCategory(post?.category)"
                    class="entry-cat cat-theme cat-5"
                    >{{ post?.category?.name }}</NuxtLink
                  >
                  <h1 class="entry-title">
                    {{ post?.title }}
                  </h1>
                  <div class="entry-meta">
                    <span class="entry-author entry-author--with-ava"
                      ><img
                        alt="Ryan Reynold"
                        :src="
                          post.author?.info?.avatar ??
                          'https://f004.backblazeb2.com/file/ans-assets/assets/avatar.png'
                        "
                        class="entry-author__avatar"
                        height="34"
                        width="34"
                      />By
                      <NuxtLink
                        :to="'/author/' + `${post.author?.username}`"
                        class="entry-author__name"
                        title="Posts by Ryan Reynold"
                        rel="author"
                        >{{ post.author?.username }}</NuxtLink
                      > </span
                    ><time
                      class="entry-date published"
                      datetime="2016-03-25T17:37:06"
                      itemprop="datePublished"
                      title="March 25, 2016, 5:37 pm"
                      ><i class="mdicon mdicon-schedule"></i
                      >{{
                        moment(post?.created_at).format("MMMM Do YYYY")
                      }}</time
                    >
                    <time
                      class="updated"
                      datetime="2016-03-25T17:37:06"
                      title="March 25, 2016, 5:37 pm"
                      >{{
                        moment(post?.updated_at).format("MMMM Do YYYY")
                      }}</time
                    >
                  </div>
                </header>
                <div
                  class="entry-thumb single-entry-thumb"
                  bis_skin_checked="1"
                >
                  <img
                    width="800"
                    height="400"
                    :src="`${post?.poster}`"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
                <div v-html="post?.body"></div>
                <footer class="single-footer entry-footer">
                  <div class="entry-info">
                    <div class="row row--space-between grid-gutter-10">
                      <div class="entry-categories col-sm-6">
                        <ul>
                          <li class="entry-categories__icon">
                            <i class="mdicon mdicon-folder"></i
                            ><span class="sr-only">Posted in</span>
                          </li>
                          <li>
                            <NuxtLink
                              :to="`/${post.category?.parent_category?.name}`"
                              class="entry-cat cat-theme cat-2"
                              >{{
                                post?.category?.parent_category?.name
                              }}</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink
                              :to="hasParentCategory(post?.category)"
                              class="entry-cat cat-theme cat-3"
                              >{{ post?.category?.name }}</NuxtLink
                            >
                          </li>
                        </ul>
                      </div>
                      <div
                        class="entry-tags col-sm-6"
                        v-if="tags !== undefined"
                      >
                        <ul>
                          <li class="entry-tags__icon">
                            <i class="mdicon mdicon-local_offer"></i
                            ><span class="sr-only">Tagged with</span>
                          </li>
                          <li v-for="(tag, index) in tags" :key="index">
                            <a href="#" class="post-tag" rel="tag">{{ tag }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="entry-interaction entry-interaction--horizontal">
                    <div class="entry-interaction__left">
                      <div class="post-sharing post-sharing--simple">
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="sharing-btn sharing-btn-primary facebook-btn facebook-theme-bg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Facebook"
                              ><i class="mdicon mdicon-facebook"></i
                              ><span class="sharing-btn__text">Share</span></a
                            >
                          </li>
                          <!--
					-->
                          <li>
                            <a
                              href="#"
                              class="sharing-btn sharing-btn-primary twitter-btn twitter-theme-bg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Twitter"
                              ><i class="mdicon mdicon-twitter"></i
                              ><span class="sharing-btn__text">Tweet</span></a
                            >
                          </li>
                          <!--
					-->
                          <li>
                            <a
                              href="#"
                              class="sharing-btn pinterest-btn pinterest-theme-bg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Pinterest"
                              ><i class="mdicon mdicon-pinterest-p"></i
                            ></a>
                          </li>
                          <!--
					-->
                          <li>
                            <a
                              href="#"
                              class="sharing-btn googleplus-btn googleplus-theme-bg"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Share on Google+"
                              ><i class="mdicon mdicon-google-plus"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="entry-interaction__right">
                      <a
                        href="#comment"
                        class="comments-count entry-action-btn"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="17 comments"
                        ><i class="mdicon mdicon-chat_bubble"></i
                        ><span>17</span></a
                      >
                    </div>
                  </div>
                </footer>
              </div>
              <!-- .single-content -->
            </article>
            <!-- .post--single -->
            <PartialsCardAuthor
              v-if="post?.author?.info !== null"
              :id="post?.author?.id"
              :info="post?.author?.info"
              :username="post?.author?.username"
              :email="post?.author?.email"
              :created_at="post?.author?.created_at"
            />
            <!-- Posts navigation -->
            <PartialsWidgetNavigationPost :category="post?.category" />
            <!-- Posts navigation -->
            <!-- Comments section -->
            <PartialsWidgetComments />
            <!-- Comments section -->
          </div>
          <!-- .mnmd-main-col -->
          <div
            class="mnmd-sub-col mnmd-sub-col--right sidebar js-sticky-sidebar"
            role="complementary"
          >
            <PartialsWidgetSearch />

            <PartialsWidgetRandomPost />
            <!-- Widget Indexed posts C -->
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
import moment from "moment";
import { useWidgetStore } from "~~/stores/widget";
const store = useWidgetStore();
const post = ref({});
const route = useRoute();
const tags = ref();
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
      query getPosts {
        postResolver(slug: "${route.params?.slug}") {
          id
          title
          slug
          body
          tags
          poster
          author {
            username
            email
            info {
              bio
              avatar
              facebook
              twitter
              telegram
            }
          }
          category {
            parent_category{
              id
              name
              slug
            }
            id
            name
            sub_categories(first: 10) {
              data {
                name
                slug
              }
            }
            slug
          }
          views
          created_at
        }
      }`,
    }),
  });
  post.value = data?.postResolver;
  tags.value = post?.tags?.split(",");
} catch (err) {
  console.log(err);
}

store.getRandomPosts();

useServerSeoMeta({
  title: () => `${capitalize(post?.value?.title)}`,
  ogTitle: () => `${capitalize(post?.value?.title)} - ANS Blogs`,
  description: () => `${capitalize(post?.value?.body)}`,
  ogDescription: () => `${capitalize(post?.value?.body)}`,
  ogImage: () => `${post?.value?.poster}`,
  twitterCard: () => "summary_large_image",
});
</script>