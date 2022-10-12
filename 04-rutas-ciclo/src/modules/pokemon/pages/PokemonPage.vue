<template>
  <h1>Pokemon page</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: null,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((resp) => resp.json());

        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/");
        console.log("No hay nada que hacer aquí");
      }
    },
  },
  // esta propiedad nos permite agregar memos o seguidores a cambios de las propiedades reactivas del componente
  // pueden ser props o data
  watch: {
    id() {
      console.log(this.id);
      this.getPokemon();
    },
  },
};
</script>
