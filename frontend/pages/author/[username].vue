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
                :style="'list-style:none;'"
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
                    views,
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
                  :views="views"
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
            <PartialsWidgetSearch />

            <PartialsWidgetRandomPost />
             
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
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
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
              views
              tags
              body
              created_at
            }
          }
          username
          email
          created_at
        }
      }`,
    }),
  });
  author.value = data?.user;
} catch (err) {
  console.log(err);
}

useServerSeoMeta({
  title: () => `${author?.username}`,
  ogTitle: () => `${author?.username} - ANS Blogs`,
  description: () => `${author?.username} from aninewstage blog`,
  ogDescription: () => `${author?.username} from aninewstage blog`,
  ogImage: () => `${author?.info?.avatar}`,
  twitterCard: () => "summary_large_image",
});
</script>