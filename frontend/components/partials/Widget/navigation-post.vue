<template>
  <div
    class="posts-navigation single-entry-section clearfix"
    v-if="store.relatedPosts.length > 2"
  >
    <div class="posts-navigation__prev">
      <article
        class="post--overlay post--overlay-bottom post--overlay-floorfade"
      >
        <div
          class="background-img"
          :style="{ backgroundImage: `url(${store.relatedPosts[0]?.poster})` }"
        ></div>
        <div class="post__text inverse-text">
          <div class="post__text-wrap">
            <div class="post__text-inner">
              <h3 class="post__title typescale-1">
                {{ store.relatedPosts[0]?.title }}
              </h3>
            </div>
          </div>
        </div>
        <NuxtLink
          :to="'/view/' + store.relatedPosts[0]?.slug"
          class="link-overlay"
        ></NuxtLink>
      </article>
      <NuxtLink
        :to="'/view/' + store.relatedPosts[0]?.slug"
        class="posts-navigation__label"
        ><span
          ><i class="mdicon mdicon-arrow_back"></i>Previous article</span
        ></NuxtLink
      >
    </div>
    <div class="posts-navigation__next">
      <article
        class="post--overlay post--overlay-bottom post--overlay-floorfade"
      >
        <div
          class="background-img"
          :style="{ backgroundImage: `url(${store.relatedPosts[1]?.poster})` }"
        ></div>
        <div class="post__text inverse-text">
          <div class="post__text-wrap">
            <div class="post__text-inner">
              <h3 class="post__title typescale-1">
                {{ store.relatedPosts[1]?.title }}
              </h3>
            </div>
          </div>
        </div>
        <NuxtLink
          :to="'/view/' + store.relatedPosts[1]?.slug"
          class="link-overlay"
        ></NuxtLink>
      </article>
      <NuxtLink
        :to="'/view/' + store.relatedPosts[1]?.slug"
        class="posts-navigation__label"
        ><span>Next article<i class="mdicon mdicon-arrow_forward"></i></span
      ></NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: Object,
});
const store = useWidgetStore();
store.getRelatedPosts(props?.category?.id);
</script>

<style lang="scss" scoped>
</style>