<template>
  <div class="site-content">
    <Title>Author List</Title>
    <div
      class="mnmd-block mnmd-block--fullwidth mnmd-block--contiguous page-heading page-heading--has-background page-heading--inverse"
    >
      <div class="background-img background-img--darkened">
        <div class="background-animes-pattern" style=""></div>
      </div>
      <div class="container">
        <h2 class="page-heading__title">Authors list</h2>
        <div class="page-heading__subtitle">
          The authors of the Aninewstage Anime Blogs <br /><br />
        </div>
      </div>
    </div>
    <div class="mnmd-block mnmd-block--fullwidth">
      <div class="container">
        <div class="row">
          <div class="mnmd-main-col" role="main">
            <div class="mnmd-block">
              <ul class="list-unstyled list-space-lg">
                <PartialsCardAuthor
                  v-for="{
                    id,
                    username,
                    email,
                    info,
                    created_at,
                  } in authors.data"
                  :key="id"
                  :id="id"
                  :info="info"
                  :username="username"
                  :email="email"
                  :created_at="created_at"
                />
                <Pagination
                  v-if="authors.length > 5"
                  :pagination="authors?.paginatorInfo"
                />
              </ul>
            </div>
            <!-- .mnmd-block -->
          </div>
          <!-- .mnmd-main-col -->
          <div
            class="mnmd-sub-col mnmd-sub-col--right sidebar js-sticky-sidebar"
            role="complementary"
          >
            <PartialsWidgetSearch />

            <PartialsWidgetRandomPost />
             
          </div>
          <!-- .mnmd-sub-col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .mnmd-block -->
  </div>
  <!-- .site-content -->
</template>
<script setup>
useServerSeoMeta({
  title: "Authors List",
  ogTitle: "Authors List",
  description: "This is the list of author at aninewstage blog",
  ogDescription: "This is the list of author at aninewstage blog",
  ogImage: "https://files.aninewstage.org/file/ans-assets/assets/logo.png",
  twitterCard: "summary_large_image",
});
const authors = ref({});
try {
  const { data } = await useNuxtApp().$apiFetch("/graphql", {
    body: JSON.stringify({
      query: `
      query getUsers {
        users(role: "author") {
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
            info {
              bio
              facebook
              telegram
              avatar
              name
              twitter
            }
            username
            email
            created_at
          }
        }
      }`,
    }),
  });
  authors.value = data?.users;
} catch (err) {
  console.log(err);
}
</script>