<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div class="mnmd-ad-spot text-center" id="ads300x250"></div>
  </div>
</template>
  
<script setup>
onMounted(() => {
  var div = document.getElementById("ads300x250");
  var s1 = document.createElement("script");
  s1.type = "text/javascript";
  s1.innerHTML =
    'atOptions = {key:"2395d716ebf9f6ba55a536b5f078db99",format: "iframe", height: 250, width: 300, params: {}};';
  var s2 = document.createElement("script");
  s2.type = "text/javascript";
  s2.src = "//silldisappoint.com/2395d716ebf9f6ba55a536b5f078db99/invoke.js";
  div.appendChild(s1);
  div.appendChild(s2);
  console.log("ads300x250 mounted");
});
</script>
  
  <style lang="scss" scoped>
</style>