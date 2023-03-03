<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div class="mnmd-ad-spot text-center" id="ads160x600"></div>
  </div>
</template>

<script setup>
onMounted(() => {
  function ads() {
    var div = document.getElementById("ads160x600");
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.innerHTML =
      'atOptions = {key:"3be386a08438e9d1c04b965a29f252dd",format: "iframe", height: 600, width: 160, params: {}};';
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "//silldisappoint.com/3be386a08438e9d1c04b965a29f252dd/invoke.js";
    div.appendChild(s1);
    div.appendChild(s2);
    console.log("ads160x600 mounted");
  }
  ads();
});
</script>

<style lang="scss" scoped>
</style>