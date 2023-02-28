<template>
  <article
    class="
      post post--overlay post--overlay-floorfade post--overlay-bottom
      cat-4
    "
  >
    <div
      class="background-img"
      :style="{ backgroundImage: `url(${props.post?.poster})` }"
    ></div>
    <div class="post__text inverse-text">
      <div class="post__text-wrap">
        <div class="post__text-inner">
          <h3 class="post__title typescale-2">
            {{ removeTags(props.post?.title ?? "Testing") }}
          </h3>
          <div class="post__meta">
            <span class="entry-author"
              >By
              <a
                :href="'/author/' + props.post?.author.id"
                class="entry-author__name"
                >{{ props.post?.author.username }}</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <NuxtLink :to="'/view/' + props.post?.slug" class="link-overlay"></NuxtLink>
    <NuxtLink
      :to="hasParentCategory(props?.category) || ''"
      class="post__cat post__cat--bg cat-theme-bg overlay-item--top-left"
      >{{ props.post?.category.name }}</NuxtLink
    >
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    required: true,
  },
});
</script>

<style scoped>
</style>