<template>
  <Transition>
    <Suspense>
      <template #default>
        <HomeApp />
      </template>
      <template #fallback>
        <SplashScreen />
      </template>
    </Suspense>
  </Transition>
</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    SplashScreen,
    HomeApp: defineAsyncComponent(
      () =>
        new Promise((resolve, reject) => {
          try {
            setTimeout(() => {
              resolve(import("@/components/HomeApp.vue"));
            }, 1500);
          } catch (err) {
            console.log(err);
            reject(err);
          }
        })
    ),
  },
};
</script>

<style>
:root {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
