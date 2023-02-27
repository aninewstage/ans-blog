<template>
  <div>
    <NuxtLoadingIndicator :color="'red'" :throttle="0" />
    <div class="site-wrapper">
      <PartialsHeader />
      <slot />
      <PartialsFooter />
      <a href="#" class="mnmd-go-top btn btn-default hidden-xs js-go-top-el"
        ><i class="mdicon mdicon-arrow_upward"></i
      ></a>
      <PartialsOffcanvas />
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ANS Blogs` : "ANS Blogs";
  },
});
const route = useRoute();

onMounted(() => {
  if (route.query.s && !route.query.page) {
    useRouter().push(`/blogs?s=${route.query.s}`);
  }
  WebFont.load({
    google: {
      families: ["Rubik:300,400,700,900"],
    },
  });
});
</script>