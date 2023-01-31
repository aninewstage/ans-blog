<script setup>
onMounted(() => {
  WebFont.load({
    google: {
      families: ["Rubik:300,400,700,900"],
    },
  });
});
</script>
<template>
  <div>
    <NuxtLoadingIndicator :color="'red'" :throttle="0" />
    <div class="site-wrapper">
      <PartialsHeader />
      <slot />
      <PartialsFooter />
      <PartialsOffcanvas />
      <PartialsStickyHeader />
      <PartialsModalLogin />
      <PartialsOffcanvas />
      <a href="#" class="mnmd-go-top btn btn-default hidden-xs js-go-top-el"
        ><i class="mdicon mdicon-arrow_upward"></i
      ></a>
    </div>
  </div>
</template>