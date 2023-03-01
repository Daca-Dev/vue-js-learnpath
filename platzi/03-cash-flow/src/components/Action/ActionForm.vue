<template>
  <form @submit.prevent="submit">
    <div class="field">
      <label for="title">Título</label>
      <input type="text" v-model="title" />
    </div>
    <div class="field">
      <label for="description">Monto</label>
      <input type="number" v-model="amount" />
    </div>
    <div class="field">
      <label for="description">Descripción</label>
      <textarea
        type="text"
        placeholder="movement"
        v-model="description"
        rows="4"
      ></textarea>
    </div>
    <div class="field">
      <label for="movement-type">Tipo de movimiento</label>
      <label class="radio-label">
        <input type="radio" v-model="movementType" value="income" />
        <span>Ingreso</span>
      </label>
      <label class="radio-label">
        <input type="radio" v-model="movementType" value="expense" />
        <span>Gasto</span>
      </label>
    </div>
    <div>
      <button class="action" type="submit">Agregar</button>
    </div>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['submit-movement']);

const title = ref('');
const amount = ref(0);
const description = ref('');
const movementType = ref('expense');

function submit() {
  const data = {
    title: title.value,
    amount: amount.value,
    description: description.value,
    movementType: movementType.value,
  };

  title.value = '';
  description.value = '';
  amount.value = 0;
  movementType.value = 'expense';

  emits('submit-movement', data);
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

form {
  font-size: 1.24rem;
  width: 100%;
}

form .action {
  padding: 12px 24px;
  display: block;
  width: 80%;
  margin: auto;
}

.field {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--brand-blue);
  border-radius: 8px;
  padding: 8px;
}

input[type='number'] {
  text-align: right;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}

input[type='radio'] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  border-radius: 50%;
}

input[type='radio']:checked {
  background-color: var(--brand-blue);
}
</style>
