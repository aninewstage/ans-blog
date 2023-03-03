<template>
  <li>
    <div class="author-box">
      <div class="author-box__image">
        <div class="author-avatar">
          <img
            alt="Ryan Reynold"
            :src="`${
              props.info?.avatar ??
              'https://f004.backblazeb2.com/file/ans-assets/assets/avatar.png'
            }`"
            class="avatar photo"
            height="80"
            width="80"
          />
        </div>
      </div>
      <div class="author-box__text">
        <div class="author-name meta-font">
          <NuxtLink
            :to="'/authors/' + `${props?.username}`"
            title="Posts by Ryan Reynold"
            rel="author"
            >{{ props?.username }}</NuxtLink
          >
        </div>
        <div class="author-bio">
          {{ props?.info?.bio }}
        </div>
        <div class="author-info">
          <div
            class="row row--space-between row--flex row--vertical-center grid-gutter-20"
          >
            <div class="author-socials col-xs-12 col-sm-6">
              <ul class="list-unstyled list-horizontal list-space-sm">
                <li>
                  <a :href="'mailto:' + `${props?.email}`"
                    ><i class="mdicon mdicon-mail_outline"></i
                    ><span class="sr-only">e-mail</span></a
                  >
                </li>
                <li>
                  <a :href="`${props?.info?.twitter}`"
                    ><i class="mdicon mdicon-twitter"></i
                    ><span class="sr-only">Twitter</span></a
                  >
                </li>
                <li>
                  <a :href="`${props?.info?.facebook}`"
                    ><i class="mdicon mdicon-facebook"></i
                    ><span class="sr-only">Facebook</span></a
                  >
                </li>
                <li>
                  <a
                    :href="`${props?.info?.telegram}`"
                    style="vertical-align: middle"
                    ><i class="fa fa-telegram"></i
                    ><span class="sr-only">Telegram</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  id: String,
  username: String,
  email: String,
  info: Object,
  created_at: String,
});
</script>

<style lang="scss" scoped>
</style>