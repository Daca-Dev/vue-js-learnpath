<template>
  <h3>{{ title }}</h3>
  <div class="box">
    <button v-on:click="increase">+ 1</button>
    <p data-testid="counter">{{ count }}</p>
    <button v-on:click="decrease">- 1</button>
    <p>{{ count }}<sup>2</sup> = {{ squareCount }}</p>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Counter",
        },
        startCount: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0;
            },
        },
    },
    data() {
        return {
            count: this.startCount,
        }
    },
    methods: {
        increase() {
            console.log('increase')
            this.count++;
        },
        decrease() {
            console.log('decrease')
            this.count--;
        },
    },
    computed: {
        squareCount() {
            return this.count * this.count;
        },
    }
}
</script>

<style>

.box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.box button, .box p {
    margin: 0 5px;
}

</style>