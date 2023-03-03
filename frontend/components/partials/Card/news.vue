<template>
  <div class="list-item">
    <article class="post post--horizontal post--horizontal-sm cat-2">
      <div class="post__thumb">
        <NuxtLink :to="'/view/' + props?.slug"
          ><img :src="props?.poster"
        /></NuxtLink>
      </div>
      <div class="post__text">
        <NuxtLink
          :to="hasParentCategory(props?.category)"
          class="post__cat cat-theme"
          >{{ props?.category?.name }}</NuxtLink
        >
        <h3 class="post__title typescale-2">
          <NuxtLink :to="'/view/' + props?.slug">{{ props?.title }}</NuxtLink>
        </h3>
        <div class="post__excerpt">
          {{ removeTags(props?.body).substring(0, 100) }}
        </div>
        <div class="post__meta">
          <span class="entry-author"
            >By
            <NuxtLink
              :to="'/authors/' + props?.author?.username"
              class="entry-author__name"
              >{{ props?.author?.username }}</NuxtLink
            ></span
          >
          <time
            class="time published"
            datetime="2016-08-20T08:53+00:00"
            title="August 20, 2016 at 08:53 am"
            ><i class="mdicon mdicon-schedule"></i
            >{{ moment(props?.created_at).format("MMMM Do YYYY") }}</time
          >
          <a href="#" title="views"
            ><i class="fas fa-eye"></i>{{ props?.views ?? "0" }}</a
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import moment from "moment";
const props = defineProps({
  id: String,
  title: String,
  slug: String,
  author: Object,
  poster: String,
  tags: String,
  body: String,
  news: String,
  category: Object,
  views: String,
  created_at: String,
});
</script>

<style lang="scss" scoped>
</style>