<template>
  <button @click="showModal = true">Agregar movimiento</button>
  <teleport to="#app">
    <div v-show="showModal">
      <ActionModal @close="showModal = false">
        <ActionForm @submit-movement="submit"/>
      </ActionModal>
    </div>
  </teleport>
</template>

<script setup>
import ActionModal from './ActionModal.vue'
import ActionForm from './ActionForm.vue'

import { ref,defineEmits } from 'vue';

const emits = defineEmits(['submit-movement']);
const showModal = ref(false);

function submit(movement) {
  showModal.value = false;
  emits('submit-movement', movement)
}

</script>

<style scoped>
button {
  color: white;
  font-size: 1.25rem;
  background-color: var(--brand-blue);
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
}
</style>