<template>
  <component :is="'DacaModal'"></component>
  <HomeDaca first-name="David" last-name="Casas" />
</template>

<script>
import DacaModal from "./components/DacaModal.vue";
import HomeDaca from "./components/HomeDaca.vue";

export default {
  components: {
    DacaModal,
    HomeDaca,
  },
};
</script>

<style scoped></style>
