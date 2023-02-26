<template>
  <div class="mnmd-widget-posts-list mnmd-widget--box mnmd-widget widget">
    <div class="widget__title">
      <h4 class="widget__title-text">
        <i class="mdicon mdicon-flash_on"></i
        ><span><span class="first-word">Speed</span> Reads</span>
      </h4>
    </div>
    <div class="widget__inner">
      <ul class="posts-list list-space-md list-seperated list-unstyled">
        <PartialsCardSpeedRead
          v-for="{ id, title, slug, poster, created_at } in posts"
          :key="id"
          :id="id"
          :poster="poster"
          :title="title"
          :slug="slug"
          :created_at="created_at"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
const posts = ref({});
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
      query getSpeedReadPosts {
        posts(first: 4, random: true) {
          data {
            id
            title
            slug
            poster
            created_at
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