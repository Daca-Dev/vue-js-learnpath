<template>
  <main>
    <p>{{ labelVisual }}</p>
    <h1>{{ amountVisual }}</h1>
    <div class="graphic">
      <slot name="graphic"></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: undefined,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    labelVisual() {
      return this.label
        ? this.label
        : "Ahorro Total";
    },
    amountVisual() {
      const amount = this.label ? this.amount : this.totalAmount;

      return amount.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP"
      });
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1,
p {
  margin: 0;
  text-align: center;
}

h1 {
  margin-top: 14px;
  color: var(--brand-green);
}

.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>
