<template>
  <div class="comments-section single-entry-section">
    <div id="comments" class="comments-area">
      <h2 class="comments-title">Comments Area</h2>
    </div>
    <div id="disqus_thread"></div>
    <!-- #comments -->
  </div>
</template>

<script setup>
onMounted(() => {
  (function () {
    var disqus_config = function () {
      this.page.url = useRoute().fullPath;
      this.page.identifier = useRoute().params.slug;
    };
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");
    s.src = "https://ans-blogs.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
});
</script>

<style lang="scss" scoped>
</style>