<template>
  <div class="mnmd-widget-posts-list mnmd-widget widget">
    <div class="widget__title">
      <h4 class="widget__title-text">Random posts</h4>
    </div>
    <ol class="posts-list list-space-sm list-unstyled">
      <li v-for="(post, index) in store.randomPosts" :key="index">
        <article class="post post--overlay post--overlay-bottom cat-1">
          <div
            class="background-img background-img--darkened"
            :style="{ backgroundImage: `url(${post?.poster})` }"
          ></div>
          <div class="post__text inverse-text">
            <div class="post__text-inner">
              <NuxtLink
                :to="hasParentCategory(post?.category)"
                class="post__cat post__cat--bg cat-theme-bg"
                >{{ post?.category?.name }}</NuxtLink
              >
              <h3 class="post__title typescale-1">{{ post?.title }}</h3>
            </div>
          </div>
          <NuxtLink :to="'/view/' + post?.slug" class="link-overlay"></NuxtLink>
        </article>
      </li>
    </ol>
  </div>
</template>

<script setup>
const props = defineProps({
  category: Object,
});
const store = useWidgetStore();
store.getRandomPosts();
</script>

<style lang="scss" scoped>
</style>