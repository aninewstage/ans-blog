<template>
  <div class="mnmd-widget-search mnmd-widget widget widget_search">
    <div class="widget__title">
      <h4 class="widget__title-text">Search</h4>
    </div>
    <form class="search-form search-form--btn-inside" method="get" action="#">
      <input
        type="text"
        name="s"
        class="search-form__input"
        placeholder="Search..."
        value=""
      />
      <button type="submit" class="search-form__submit">
        <i class="mdicon mdicon-search"></i>
      </button>
    </form>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>