<template>
  <div class="posts-navigation single-entry-section clearfix">
    <div class="posts-navigation__prev">
      <article
        class="post--overlay post--overlay-bottom post--overlay-floorfade"
      >
        <div
          class="background-img"
          style="background-image: url('img/demo/life-3-16_9.jpg')"
        ></div>
        <div class="post__text inverse-text">
          <div class="post__text-wrap">
            <div class="post__text-inner">
              <h3 class="post__title typescale-1">
                Forces of Nature gather in a new fashion exhibition at FIT
              </h3>
            </div>
          </div>
        </div>
        <a href="#single-url" class="link-overlay"></a>
      </article>
      <a class="posts-navigation__label" href="#single-url"
        ><span
          ><i class="mdicon mdicon-arrow_back"></i>Previous article</span
        ></a
      >
    </div>
    <div class="posts-navigation__next">
      <article
        class="post--overlay post--overlay-bottom post--overlay-floorfade"
      >
        <div
          class="background-img"
          style="background-image: url('img/demo/life-2-16_9.jpg')"
        ></div>
        <div class="post__text inverse-text">
          <div class="post__text-wrap">
            <div class="post__text-inner">
              <h3 class="post__title typescale-1">
                Five bands to see at Pitchfork Music Festival 2017
              </h3>
            </div>
          </div>
        </div>
        <a href="#single-url" class="link-overlay"></a>
      </article>
      <a class="posts-navigation__label" href="#single-url"
        ><span>Next article<i class="mdicon mdicon-arrow_forward"></i></span
      ></a>
    </div>
  </div>
</template>

<script setup>
const posts = ref({});
const query = gql`
  query getPosts {
    posts(category_id: 1) {
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
        created_at
        updated_at
      }
    }
  }
`;
const { data } = await useAsyncQuery(query);
posts.value = data.value?.posts.data;
</script>

<style lang="scss" scoped>
</style>