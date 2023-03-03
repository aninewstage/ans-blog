<template>
  <div class="mnmd-block mnmd-block--fullwidth">
    <div class="mnmd-ad-spot text-center" id="ads160x300"></div>
  </div>
</template>
  
<script setup>
onMounted(() => {
  function ads() {
    var div = document.getElementById("ads160x300");
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.innerHTML =
      'atOptions = {key:"fe4a26a08415a21528b22bab78fdbe62",format: "iframe", height: 300, width: 160, params: {}};';
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "//silldisappoint.com/fe4a26a08415a21528b22bab78fdbe62/invoke.js";
    div.appendChild(s1);
    div.appendChild(s2);
    console.log("ads160x300 mounted");
  }
  ads();
});
</script>
  
  <style lang="scss" scoped>
</style>