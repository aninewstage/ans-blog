<template>
  <div class="col-xs-12 col-sm-4">
    <article class="cat-1">
      <div class="media">
        <div class="media-left"><span class="index">.</span></div>
        <div class="post__text media-body">
          <NuxtLink
            :to="hasParentCategory(props?.category)"
            class="post__cat cat-theme"
            >{{ props?.category?.name }}</NuxtLink
          >
          <h3 class="post__title typescale-2">
            <NuxtLink :to="'/view/' + props?.slug">{{
              props?.title.substring(0, 100)
            }}</NuxtLink>
          </h3>
          <div class="post__meta">
            <span>By {{ props?.author.username }}</span>
            <a href="#single-url"
              ><i class="fas fa-eye"></i>{{ props?.views ?? "0" }}</a
            >
          </div>
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
  views: String,
  category: Object,
  created_at: String,
});
</script>

<style lang="scss" scoped>
</style>