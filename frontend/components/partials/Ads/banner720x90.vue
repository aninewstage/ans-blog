<script setup>
onMounted(() => {
  var div = document.getElementById("ads720x90");
  var s1 = document.createElement("script");
  s1.type = "text/javascript";
  s1.innerHTML =
    'atOptions = {key:"57639f9ab64255d51bc7beb7a787e28d",format: "iframe", height: 90, width: 728, params: {}};';
  var s2 = document.createElement("script");
  s2.type = "text/javascript";
  s2.src = "//silldisappoint.com/57639f9ab64255d51bc7beb7a787e28d/invoke.js";
  div.appendChild(s1);
  div.appendChild(s2);
  console.log("ads720x90 mounted");
});
</script>
<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div class="container">
      <div class="mnmd-ad-spot text-center" id="ads720x90"></div>
    </div>
    <!-- .container -->
  </div>
</template>

<style lang="scss" scoped>
</style>