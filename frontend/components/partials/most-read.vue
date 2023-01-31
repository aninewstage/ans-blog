<template>
  <div
    class="
      mnmd-block mnmd-block--fullwidth
      has-background
      mnmd-horizontal-list
      cat-1
    "
  >
    <div class="background-akatsuki-pattern"></div>
    <div class="container">
      <div class="block-heading block-heading--center block-heading--lg">
        <h4 class="block-heading__title">
          <span class="first-word">Most</span> Read
        </h4>
      </div>
      <div class="row row--space-between">
        <PartialsCardMostRead
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
const query = gql`
  query getPosts {
    posts(first: 3, random: true) {
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
  }
`;
const { data } = await useAsyncQuery(query);
posts.value = data.value?.posts.data;
</script>

<style lang="scss" scoped>
</style>