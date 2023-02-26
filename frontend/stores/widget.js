export const useWidgetStore = defineStore('widget', () => {
  const randomPosts = ref({});
  const relatedPosts = ref({});
  async function getRandomPosts() {
    try {
      const { data } = await useNuxtApp().$apiFetch("/graphql", {
        body: JSON.stringify({
          query: `
          query getRandomPosts {
            posts(random: true, first: 4) {
                data {
                    category {
                        id
                        name
                        slug
                    }
                    id
                    title
                    slug
                    poster
                    created_at
                }
            }
          }`,
        }),
      });
      randomPosts.value = data?.posts.data;
    } catch (err) {
      console.log(err);
    }
  }
  async function getRelatedPosts(category_id) {
    try {
      const { data } = await useNuxtApp().$apiFetch("/graphql", {
        body: JSON.stringify({
          query: `
          query getRelatedPosts {
            posts(category_id: ${category_id}) {
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
      relatedPosts.value = data?.posts.data;
    } catch (err) {
      console.log(err);
    }
  }

  return { getRelatedPosts, getRandomPosts, relatedPosts, randomPosts }
})