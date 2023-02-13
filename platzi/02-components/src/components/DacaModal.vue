<template>
  <button v-on:click="buttonHandler">
    {{ active ? "Desactivar" : "Activar" }}
  </button>
  <teleport to="body">
    <!-- DOCUMENTATION OF TRANSITION COMPONENT -->
    <!-- https://vuejs.org/guide/built-ins/transition.html#css-based-transitions -->
    <transition>
      <div v-show="active" class="modal">
        <h2>My modal</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          fugiat ea voluptatem praesentium suscipit esse omnis sequi accusamus
          dolorem consequuntur aperiam, consequatur numquam et maxime vero quod
          reprehenderit hic obcaecati?
        </p>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    buttonHandler(event) {
      console.log(`🚀 ~ buttonHandler ~ event`, event);
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
