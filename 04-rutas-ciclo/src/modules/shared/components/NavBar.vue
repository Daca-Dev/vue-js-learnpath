<template>
  <nav>
    <!-- el componente router-link es auto importado cunado usamos el router de vue-rotue -->
    <!-- <router-link active-class="active" :to="{ name: 'home' }"
      >Pokemon List</router-link
    >
    <router-link
      active-class="active"
      :to="{ name: 'pokemonId', params: { pokemonId: 10 } }"
      >Pokemon por ID</router-link
    >
    <router-link active-class="active" :to="{ name: 'about' }"
      >About</router-link
    > -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </nav>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  data() {
    return {
      links: [
        { to: "/", name: "Pokemons" },
        { to: "/pokemon/50", name: "Pokemon por ID" },
        { to: "/about", name: "Sobre Pokemons" },
        { to: "https://google.com", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
nav {
  padding: 0 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
</style>
