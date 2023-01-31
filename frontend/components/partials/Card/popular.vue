<template>
  <li>
    <article class="post post--vertical cat-4">
      <div class="post__thumb">
        <NuxtLink :to="'/view/' + props?.slug"
          ><img :src="props?.poster"
        /></NuxtLink>
      </div>
      <div class="post__text">
        <NuxtLink
          :to="hasParentCategory(props?.category)"
          class="post__cat cat-theme"
          >{{ category?.name }}</NuxtLink
        >
        <h3 class="post__title typescale-1">
          <NuxtLink :to="'/view/' + props?.slug"
            >{{ props?.title }} > {{ props?.title }}</NuxtLink
          >
        </h3>
        <div class="post__meta">
          <time
            class="time published"
            datetime="2016-08-20T08:53+00:00"
            title="August 20, 2016 at 08:53 am"
            ><i class="mdicon mdicon-schedule"></i
            >{{ moment(props?.created_at).format("MMMM Do YYYY") }}</time
          >
        </div>
      </div>
    </article>
  </li>
</template>

<script setup>
import moment from "moment";
const props = defineProps({
  id: String,
  title: String,
  slug: String,
  category: Object,
  poster: String,
  created_at: String,
});
</script>

<style lang="scss" scoped>
</style>