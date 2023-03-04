<template>
  <div>
    <svg
      :viewBox="`0 0 ${graphWidth} ${graphHeight}`"
      @touchstart="tap"
      @touchmove="tap"
      @touchend="untap"
    >
      <line
        stroke="#c4c4c4"
        stroke-width="2"
        x1="0"
        :y1="zeroYPoint"
        :x2="graphWidth"
        :y2="zeroYPoint"
      />
      <polyline
        stroke="#0689B0"
        fill="none"
        :points="graphPoints"
        stroke-width="2"
      />
      <line
        v-show="showPointer"
        stroke="#04b500"
        stroke-width="2"
        :x1="pointer"
        y1="0"
        :x2="pointer"
        :y2="graphHeight"
      />
    </svg>
    <p>Toos los resultados</p>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed, ref } from 'vue';

// variables
const props = defineProps({
  amounts: {
    require: true,
    type: Array,
  },
});

const { amounts } = toRefs(props);
const graphWidth = ref(300);
const graphHeight = ref(200);
const showPointer = ref(false);
const pointer = ref(0);

// functions
function calculateRangeAndMin(amount) {
  const maxValue = Math.max(...amount);
  const minValue = Math.min(...amount);
  const range = maxValue - minValue;

  return {
    minValue,
    range,
  };
}

function calculateYPoint(value, range) {
  return graphHeight.value - (value / range) * graphHeight.value;
}

function tap({ target, touches }) {
  showPointer.value = true;
  const elementWidth = target.getBoundingClientRect().width;
  const elementX = target.getBoundingClientRect().x;
  const touchX = touches[0].clientX;

  pointer.value = ((touchX - elementX) * graphWidth.value) / elementWidth;
}

function untap({ target, touches }) {
  console.log(`🚀 ~ untap ~ touches:`, touches);
  console.log(`🚀 ~ untap ~ target:`, target);
  showPointer.value = false;
}

// computed and logic
const zeroYPoint = computed(() => {
  const { minValue, range } = calculateRangeAndMin(amounts.value);

  return calculateYPoint(0 - minValue, range);
});

const graphPoints = computed(() => {
  const stepWidth = graphWidth.value / amounts.value.length;
  const { minValue, range } = calculateRangeAndMin(amounts.value);

  return amounts.value
    .map((value, idx) => [
      (idx + 1) * stepWidth,
      calculateYPoint(value - minValue, range),
    ])
    .reduce((acc, [x, y]) => `${acc} ${x},${y}`, `0, ${zeroYPoint.value}`);
});
</script>

<style scoped>
svg {
  width: 100%;
}

p {
  text-align: center;
}
</style>
