export const useWidgetStore = defineStore('widget', () => {
    const randomPosts = ref({});
    const relatedPosts = ref({});
    async function getRandomPosts() {
        const query = gql`
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
            }
        `;
        const { data } = await useAsyncQuery(query);
        randomPosts.value = data.value?.posts.data;
    }
    async function getRelatedPosts(category_id) {
        const query = gql`
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
        }
      `;
        const { data } = await useAsyncQuery(query);
        relatedPosts.value = data.value?.posts.data;
    }

    return { getRelatedPosts, getRandomPosts, relatedPosts, randomPosts }
})