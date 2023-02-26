<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div class="container">
      <div class="block-heading block-heading--lg">
        <h4 class="block-heading__title">
          <span class="first-word">Trending</span> Posts
        </h4>
      </div>
      <div class="row row--space-between">
        <PartialsCardTranding
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
      query getLatestTrandingPosts {
        posts(first: 4, random: true) {
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