<template>
  <div class="site-content">
    <Title>Aninewstage Blogs</Title>
    <!-- Mosaic block-->
    <div
      class="
        mnmd-block mnmd-block--fullwidth mnmd-block--contiguous
        mnmd-mosaic mnmd-mosaic--gutter-10
        has-overlap-background
      "
    >
      <div class="overlap-background"></div>

      <PartialsSlider />
      <div class="spacer-xs"></div>
      <PartialsNewsMarquee />
    </div>
    <!-- .mnmd-block -->
    <PartialsAds1 />
    <!-- .mnmd-block -->
    <PartialsLatestNews />
    <!-- .mnmd-block -->
    <PartialsLatestTranding />
    <!-- .mnmd-block -->
    <PartialsMoreNews />
    <!-- .mnmd-block -->
    <PartialsMostRead />
  </div>
  <!-- .site-content -->
</template>

<script setup>
useServerSeoMeta({
  title: "Aniewnstage Blogs",
  ogTitle: "Aniewnstage Blogs",
  description: "First and biggest anime news blogs in myanmar.",
  ogDescription: "First and biggest anime news blogs in myanmar.",
  ogImage: "https://files.aninewstage.org/file/ans-assets/assets/logo.png",
  twitterCard: "summary_large_image",
});
</script>