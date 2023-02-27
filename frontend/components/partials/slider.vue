<template>
  <div class="container container--wide">
    <div class="row row--space-between">
      <div class="mosaic-item col-xs-12 col-lg-6">
        <PartialsCardSlider :post="posts?.[0]" />
      </div>
      <div class="mosaic-item col-xs-12 col-md-6 col-lg-3">
        <PartialsCardSlider :post="posts?.[1]" />
      </div>
      <div class="mosaic-item mosaic-item--half col-xs-12 col-sm-6 col-lg-3">
        <PartialsCardSlider :post="posts?.[2]" />
      </div>
      <div class="mosaic-item mosaic-item--half col-xs-12 col-sm-6 col-lg-3">
        <PartialsCardSlider :post="posts?.[3]" />
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = ref({});
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
        query getSliderPosts {
          posts(first: 4) {
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
              views
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