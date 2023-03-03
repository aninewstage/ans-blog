<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div
      class="mnmd-ad-spot text-center"
      id="container-15b6b8a8f41af18c5074de85204b6abb"
    ></div>
  </div>
</template>
  
<script setup>
// onBeforeMount(() => {
//   const adsScripts = document.querySelectorAll(
//     'script[src^="//silldisappoint.com/15b6b8a8f41af18c5074de85204b6abb/invoke.js"]'
//   );
//   for (let i = 0; i < adsScripts.length; i += 1) {
//     adsScripts[i].parentElement.removeChild(adsScripts[i]);
//     console.log(adsScripts[i] + "was removed");
//   }
//   console.log("navtive ads unmounted", adsScripts);
// });

onMounted(() => {
  var s1 = document.createElement("script");
  s1.src = "//silldisappoint.com/15b6b8a8f41af18c5074de85204b6abb/invoke.js";
  document.head.appendChild(s1);
  console.log("navtive ads mounted");
});
</script>
  
<style lang="scss" scoped>
</style>