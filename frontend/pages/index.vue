<template>
  <div class="site-content">
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
</script>