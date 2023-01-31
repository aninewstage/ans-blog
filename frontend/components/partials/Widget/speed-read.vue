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
const query = gql`
  query getPosts {
    posts(first: 4, random: true) {
      data {
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