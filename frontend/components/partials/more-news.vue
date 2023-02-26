<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div class="container">
      <div class="row">
        <div class="mnmd-main-col has-left-sidebar" role="main">
          <div class="mnmd-block">
            <div class="block-heading block-heading--line-under">
              <h4 class="block-heading__title">
                <span class="first-word">More</span> News
              </h4>
            </div>
            <div
              class="js-ajax-load-post"
              data-offset="0"
              data-posts-to-load="6"
              data-layout="list"
            >
              <div class="posts-list list-space-lg">
                <PartialsCardNews
                  v-for="{
                    id,
                    author,
                    title,
                    slug,
                    category,
                    poster,
                    tags,
                    body,
                    created_at,
                  } in posts"
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
            </div>
          </div>
          <!-- .mnmd-block -->
        </div>
        <!-- .mnmd-main-col -->
        <div
          class="mnmd-sub-col mnmd-sub-col--right js-sticky-sidebar"
          role="complementary"
        >
          <!-- Widget Social counter -->
          <PartialsWidgetSocials />
          <!-- Widget Social counter -->
          <PartialsWidgetCategories />
          <!-- .widget -->
        </div>
        <!-- .mnmd-sub-col -->
      </div>
      <!-- .row -->
    </div>
    <!-- .container -->
  </div>
</template>

<script setup>
const posts = ref({});
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
      query getMoreNewsPosts {
        posts(
          orderBy: [{ column: CREATED_AT, order: DESC }]
          first: 4
          random: true
        ) {
          data {
            id
            author {
              id
              username
            }
            title
            slug
            category {
              name
              slug
              parent_category {
                name
                slug
              }
            }
            poster
            tags
            body
            created_at
            updated_at
          }
        }
      }`,
    }),
  });
  posts.value = data?.posts.data;
} catch (err) {
  console.log(err);
}
</script>

<style lang="scss" scoped>
</style>