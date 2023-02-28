<template>
  <div class="site-content">
    <Title>Blogs</Title>
    <div
      class="mnmd-block mnmd-block--fullwidth mnmd-block--contiguous page-heading page-heading--has-background page-heading--inverse"
    >
      <div class="background-img background-img--darkened">
        <div class="background-animes-pattern" style=""></div>
      </div>
      <div class="container">
        <h2 class="page-heading__title">Blogs</h2>
        <div class="page-heading__subtitle">
          All of the latest blogs from aninewstage authors.
        </div>
      </div>
    </div>
    <div class="mnmd-block mnmd-block--fullwidth">
      <div class="container">
        <div class="posts-listing">
          <div class="row row--space-between" v-if="posts.length > 0">
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
          <div v-else-if="route.query.s" class="row" style="text-align: center">
            <h4>
              There is no blog for this search (
              <span style="color: red">{{ route.query.s }}</span> )
            </h4>
          </div>
          <div v-else class="row" style="text-align: center">
            <h4>
              Loading...
            </h4>
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
const pagination = ref({});
const route = useRoute();

onMounted(async () => {
  if (route.query.s) {
    useRouter().push(`/blogs?s=${route.query.s}&page=1`);
    window.stop();
    try {
      const { data } = await useNuxtApp().$apiFetch("/graphql", {
        body: JSON.stringify({
          query: `
            query getSearchPosts{
              postsResolver(search:"${route.query.s}",first:20,page:${
            route.query.page || 1
          }){
                paginatorInfo {
                  total
                  perPage
                  count
                  currentPage
                  lastItem
                  lastPage
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
                    slug
                    parent_category {
                      name
                      slug
                    }
                  }
                  poster
                  tags
                  body
                  views
                  created_at
                  updated_at
                }
              }
            }`,
        }),
      });
      posts.value = data?.postsResolver?.data;
      pagination.value = data?.postsResolver?.paginatorInfo;
      console.log(data, "from serach");
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const { data } = await useNuxtApp().$apiFetch("/graphql", {
        body: JSON.stringify({
          query: `
      query getLatestPosts {
        posts(orderBy: [{ column: CREATED_AT, order: ASC }], first: 20,page: ${
          route.query.page || 1
        }) {
          paginatorInfo {
            total
            perPage
            count
            currentPage
            lastItem
            lastPage
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
              slug
              parent_category {
                name
                slug
              }
            }
            poster
            tags
            body
            views
            created_at
            updated_at
          }
        }
      }`,
        }),
      });
      posts.value = data?.posts?.data;
      pagination.value = data?.posts?.paginatorInfo;
    } catch (err) {
      console.log(err);
    }
  }
});

useServerSeoMeta({
  title: () => `Blogs`,
  ogTitle: () => `Blogs - ANS Blogs`,
  description: () => `List of Blogs from aninewstage blog`,
  ogDescription: () => `List of Blogs from aninewstage blog`,
  ogImage: () =>
    `https://files.aninewstage.org/file/ans-assets/assets/logo.png`,
  twitterCard: () => "summary_large_image",
});
</script>