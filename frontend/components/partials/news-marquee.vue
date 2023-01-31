<script setup>
</script>
<template>
  <div class="container">
    <div class="mnmd-news-ticker">
      <div class="mnmd-news-ticker__inner">
        <div class="mnmd-news-ticker__heading hidden-xs">
          <span>Do not miss</span>
        </div>
        <div
          class="mnmd-news-ticker__content js-mnmd-news-ticker initialized"
          style="overflow: hidden; position: relative; height: 35px"
        >
          <ul style="position: absolute; margin: 0px; padding: 0px; top: 0px">
            <PartialsCardMarquee />
            <PartialsCardMarquee />
            <PartialsCardMarquee />
            <PartialsCardMarquee />
          </ul>
        </div>
        <div class="mnmd-news-ticker__control">
          <button class="mnmd-news-ticker__prev">
            <i class="mdicon mdicon-expand_less"></i>
          </button>
          <button class="mnmd-news-ticker__next">
            <i class="mdicon mdicon-expand_more"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>