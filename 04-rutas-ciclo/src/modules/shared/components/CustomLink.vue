<template>
  <a v-if="isExternalLink" :href="link.to" target="_blank">{{ link.name }}</a>
  <router-link v-else :to="link.to" v-slot="{ href, isActive }">
    <a :href="href" :class="isActive ? 'active' : 'link'">{{ link.name }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scoped>
.active {
  color: #159147;
}
.link {
  color: #2a2a2a;
}
</style>
