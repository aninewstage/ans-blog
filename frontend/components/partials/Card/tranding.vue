<template>
  <div class="col-xs-12 col-sm-6 col-md-3">
    <article
      class="post post--card post--card-sm cat-1 text-center shadow-hover-4"
    >
      <div class="post__thumb">
        <NuxtLink :to="'/view/' + props?.slug"
          ><div
            class="background-img"
            :style="{ backgroundImage: `url(${props?.poster})` }"
          ></div></NuxtLink
        ><NuxtLink
          :to="hasParentCategory(props?.category)"
          class="post__cat post__cat--bg post__cat--overlap cat-theme-bg"
          >{{ props?.category?.name }}</NuxtLink
        >
      </div>
      <div class="post__text">
        <h3 class="post__title typescale-1">
          <NuxtLink :to="'/view/' + props?.slug">{{
            props?.title?.substring(0, 100)
          }}</NuxtLink>
        </h3>
      </div>
      <div class="post__footer">
        <div class="post__meta">
          <time
            class="time published"
            datetime="2016-08-20T08:53+00:00"
            title="August 20, 2016 at 08:53 am"
            ><i class="mdicon mdicon-schedule"></i
            >{{ moment(props?.created_at).format("MMMM Do YYYY") }}</time
          >
          <a href="#single-url"
            ><i class="mdicon mdicon-chat_bubble_outline"></i>21</a
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
  category: Object,
  created_at: String,
});
</script>

<style lang="scss" scoped>
</style>