<template>
  <div class="movements">
    <h2 class="title">Historial</h2>
    <div class="content">
      <MovementDetail
        v-for="movement in movements"
        :key="movement.id"
        v-bind="{ ...movement }"
        @remove="remove"
      />
    </div>
  </div>
</template>

<script setup>
import MovementDetail from './MovementDetail.vue';
import { defineProps, toRefs } from 'vue';

const remove = (id) => {
  console.log(`🚀 ~ remove ~ id:`, id);
  // movements = movements.value.filter(movement => movement.id !== id);
};

const props = defineProps({
  movements: {
    type: Array,
    require: false,
    default: () => Array(),
  },
});
const { movements } = toRefs(props);
</script>

<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}
.title {
  margin: 8px 16px 24px 16px;
  color: var(--brand-blue);
}
.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>
