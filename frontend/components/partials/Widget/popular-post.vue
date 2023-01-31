<template>
  <div class="mnmd-widget-indexed-posts-b mnmd-widget widget">
    <div class="widget__title">
      <h4 class="widget__title-text">
        <span class="first-word">Popular</span> posts
      </h4>
    </div>
    <ol class="posts-list list-space-sm list-unstyled">
      <PartialsCardPopular
        v-for="{ id, title, slug, poster, category, created_at } in posts"
        :key="id"
        :id="id"
        :poster="poster"
        :title="title"
        :slug="slug"
        :category="category"
        :created_at="created_at"
      />
    </ol>
  </div>
</template>

<script setup>
const posts = ref({});
const query = gql`
  query getPosts {
    posts(random: true, first: 3) {
      data {
        category {
          id
          name
          slug
        }
        id
        title
        slug
        poster
        created_at
      }
    }
  }
`;
const { data } = await useAsyncQuery(query);
posts.value = data.value?.posts.data;
</script>

<style lang="scss" scoped>
</style>