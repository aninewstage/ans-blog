<template>
  <nav class="mnmd-pagination">
    <h4 class="mnmd-pagination__title sr-only">Posts navigation</h4>
    <div class="mnmd-pagination__links text-center">
      <a
        class="mnmd-pagination__item mnmd-pagination__item-prev"
        :href="
          `?s=${route.query.s}&page=` + getPagination(props.pagination).prev
        "
        v-if="route.query.s"
        ><i class="mdicon mdicon-arrow_back"></i
      ></a>
      <a
        class="mnmd-pagination__item mnmd-pagination__item-prev"
        :href="`?page=` + getPagination(props.pagination).prev"
        v-else
        ><i class="mdicon mdicon-arrow_back"></i
      ></a>
      <span
        :class="
          'mnmd-pagination__item ' +
          `${
            props.pagination.currentPage === n
              ? 'mnmd-pagination__item-current'
              : ''
          }`
        "
        v-for="n in getPagination(props.pagination).lastPage"
        :key="n"
      >
        <a :href="`?s=${route.query.s}&page=${n}`" v-if="route.query.s">{{
          n
        }}</a>
        <a :href="`?page=${n}`" v-else>{{ n }}</a>
      </span>
      <a
        class="mnmd-pagination__item mnmd-pagination__item-next"
        :href="`?page=` + getPagination(props.pagination).next"
        v-if="route.query.s && props.pagination.count > 20"
        ><i class="mdicon mdicon-arrow_forward"></i
      ></a>
      <a
        class="mnmd-pagination__item mnmd-pagination__item-next"
        v-if="props.pagination.count > 20"
        :href="
          `?s=${route.query.s}&page=` + getPagination(props.pagination).next
        "
        ><i class="mdicon mdicon-arrow_forward"></i
      ></a>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  pagination: Object,
});
const route = useRoute();
// helper function to create pagination
const getPagination = ({ currentPage, count, total, lastPage }) => {
  // Get previous page number with `1` as the lowest
  let prev = Math.abs(currentPage - 1) > 0 ? Math.abs(currentPage - 1) : 1;
  // Get next page with number of total pages as highest
  let next = currentPage + 1 < total ? currentPage + 1 : total;
  return {
    currentPage,
    lastPage,
    count,
    total,
    prev,
    next,
  };
};
</script>

<style lang="scss" scoped>
</style>