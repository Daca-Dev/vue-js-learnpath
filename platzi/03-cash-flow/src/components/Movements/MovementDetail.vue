<template>
  <div class="movement">
    <div class="content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="action">
      <img
        @click="remove(id)"
        src="@/assets/trash-iconsvg.svg"
        :alt="`Delete ${title} entry`"
      />
      <p :class="[isExpense ? 'red' : 'green']">
        {{ amountFormatted }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed, defineEmits } from 'vue';

const emitEvents = defineEmits(['remove']);

const remove = (id) => {
  emitEvents('remove', id);
};

const props = defineProps({
  id: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});
const { id, title, description, amount } = toRefs(props);
const amountFormatted = computed(() =>
  amount.value.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
  })
);
const isExpense = computed(() => amount.value < 0);
</script>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
