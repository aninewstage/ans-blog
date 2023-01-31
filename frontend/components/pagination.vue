<template>
  <nav class="mnmd-pagination">
    <h4 class="mnmd-pagination__title sr-only">Posts navigation</h4>
    <div class="mnmd-pagination__links text-center">
      <a
        class="mnmd-pagination__item mnmd-pagination__item-prev"
        :href="`?page=` + getPagination(props.pagination).prev"
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
        <a :href="`?page=${n}`">{{ n }}</a>
      </span>
      <a
        class="mnmd-pagination__item mnmd-pagination__item-next"
        :href="`?page=` + getPagination(props.pagination).next"
        ><i class="mdicon mdicon-arrow_forward"></i
      ></a>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  pagination: Object,
});
console.log(props.pagination);
// helper function to create pagination
const getPagination = ({ currentPage, count, total, lastPage }) => {
  // Get previous page number with `1` as the lowest
  let prev = Math.abs(currentPage - 1) > 0 ? Math.abs(currentPage - 1) : 1;
  // Get next page with number of total pages as highest
  let next = currentPage + 1 < total ? currentPage + 1 : total;
  console.log({ currentPage, prev, next });
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
    <!-- <template>
      <div class="pagination">
        <ul class="list">
          <li>
            <a :href="`?page=` + getPagination(pagination).prev">
              <button class="cta">Previous</button>
            </a>
          </li>
          <li v-for="n in getPagination(pagination).pageCount" :key="n">
            <a :href="`?page=${n}`">
              <button class="cta">
                {{ n }}
              </button>
            </a>
          </li>
          <li>
            <a :href="`?page=` + getPagination(pagination).next">
              <button class="cta">Next</button>
            </a>
          </li>
        </ul>
      </div>
    </template> -->
<!-- <script setup>
const props = defineProps({
  links: Object,
  current_page: Number,
  last_page: Number,
});
const emit = defineEmits(["update:pageNo"]);
function prn(val) {
  return Boolean(val.includes("Prev") || val.includes("Next"));
}
function getUrl(val) {
  if (useRoute().query.search) {
    return `?search=${useRoute().query.search}&page=${val.label}`;
  } else {
    return `?page=${val.label}`;
  }
}
function getPrevUrl(val) {
  if (useRoute().query.search) {
    return `?search=${useRoute().query.search}&page=${props.current_page - 1}`;
  } else {
    return `?page=${props.current_page - 1}`;
  }
}
function getNextUrl(val) {
  if (useRoute().query.search) {
    return `?search=${useRoute().query.search}&page=${props.current_page + 1}`;
  } else {
    return `?page=${props.current_page + 1}`;
  }
}
</script> -->

<style lang="scss" scoped>
</style>