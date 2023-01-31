<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <article class="post post--vertical cat-1">
      <div class="post__thumb">
        <NuxtLink :to="'/view/' + props?.slug"
          ><img :src="`${props?.poster}`" /> </NuxtLink
        ><NuxtLink
          :to="hasParentCategory(props?.category)"
          class="post__cat post__cat--bg cat-theme-bg overlay-item--top-left"
          >{{ props?.category?.name }}</NuxtLink
        >
      </div>
      <div class="post__text">
        <h3 class="post__title typescale-2">
          <NuxtLink :to="'/view/' + props?.slug">{{ props.title }}</NuxtLink>
        </h3>
        <div class="post__excerpt">
          {{ props?.body.substring(0, 90) }}
        </div>
        <div class="post__meta">
          <span class="entry-author"
            >By
            <NuxtLink
              :to="'/author/' + props?.author?.username"
              class="entry-author__name"
              >{{ props?.author.username }}</NuxtLink
            ></span
          >
          <time
            class="time published"
            datetime="2016-08-20T08:53+00:00"
            title="August 20, 2016 at 08:53 am"
            ><i class="mdicon mdicon-schedule"></i
            >{{ moment(props?.created_at).format("MMMM Do YYYY") }}</time
          >
          <a href="#" title="21 comments"
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