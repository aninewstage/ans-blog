<template>
  <div class="widget mnmd-widget widget_tag_cloud">
    <div class="widget__title"><h4 class="widget__title-text">Tags</h4></div>
    <div class="tagcloud">
      <NuxtLink
        :to="`/${tag.name}`"
        class="tag-link-77 tag-link-position-1"
        title="9 topics"
        v-for="tag in tags"
        :key="tag.id"
        >{{ tag?.name }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const tags = ref({});
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
      query getWidgetCategories {
        category(parent_id: 0) {
          id
          name
        }
      }`,
    }),
  });
  tags.value = data?.category;
} catch (err) {
  console.log(err);
}
</script>

<style lang="scss" scoped>
</style>