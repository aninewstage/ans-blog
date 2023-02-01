<template>
  <div class="site-content">
    <Title>{{ capitalize(category) }}</Title>
    <div
      class="
        mnmd-block mnmd-block--fullwidth mnmd-block--contiguous
        page-heading page-heading--has-background page-heading--inverse
      "
    >
      <div class="background-img background-img--darkened">
        <div class="background-animes-pattern" style=""></div>
      </div>
      <div class="container">
        <h2 class="page-heading__title">
          {{ category ?? "Nothing" }}
        </h2>
        <div class="page-heading__subtitle">
          a style of animation originating in Japan that is characterized by
          stark colorful graphics depicting vibrant characters in action-filled
          plots often with fantastic or futuristic themes
        </div>
      </div>
    </div>
    <div class="mnmd-block mnmd-block--fullwidth">
      <div class="container">
        <div class="posts-listing">
          <div class="row row--space-between">
            <PartialsCardPost
              v-for="{
                id,
                author,
                poster,
                title,
                slug,
                tags,
                body,
                views,
                category,
              } in posts"
              :key="id"
              :id="id"
              :author="author"
              :poster="poster"
              :title="title"
              :slug="slug"
              :tags="tags"
              :body="body"
              :views="views"
              :category="category"
            />
          </div>
        </div>
        <Pagination :pagination="pagination" v-if="pagination.total > 12" />
      </div>
    </div>
  </div>
  <!-- .site-content -->
</template>
<script setup>
const posts = ref({});
const category = ref("");
const pagination = ref({});
const route = useRoute();
const query = gql`
  query getPosts {
    categories(name: "${route.params?.category}") {
      data {
        name
        posts(first: 12, page: ${route.query.page ?? 1} ) {
          paginatorInfo {
            total
            lastItem
            lastPage
            perPage
            currentPage
            count
            hasMorePages
          }
          data {
            id
            author {
              id
              username
            }
            title
            slug
            category {
              name
            }
            poster
            tags
            body
            views
            created_at
            updated_at
          }
        }
      }
    }
  }
`;
const { data } = await useAsyncQuery(query);
posts.value = data.value?.categories?.data[0]?.posts?.data;
category.value = data.value?.categories?.data[0]?.name;
pagination.value = data.value?.categories?.data[0]?.posts?.paginatorInfo;

useServerSeoMeta({
  title: () => `${capitalize(category?.value)}`,
  ogTitle: () => `${capitalize(category?.value)} - ANS Blogs`,
  description: () => `List of ${category?.value} from aninewstage blog`,
  ogDescription: () => `List of ${category?.value} from aninewstage blog`,
  ogImage: () =>
    `https://files.aninewstage.org/file/ans-assets/assets/logo.png`,
  twitterCard: () => "summary_large_image",
});
</script>