<template>
  <div>{{ text }}</div>
  <p><b>counter:</b> {{ counter }}</p>
  <p><b>Computed:</b> {{ fullName }}</p>
  <p><b>Props:</b> {{ fullNameFromProps }}</p>
</template>

<script>
// before created and created life cycle is replaced by setup function
import { onMounted, ref, reactive, watch, computed, toRefs } from "vue";

export default {
  props: {
    firstName: String,
    lastName: String,
  },
  setup(props, context) {
    console.log(`🚀 ~ setup ~ context`, context);

    const { firstName, lastName } = toRefs(props);
    const fullNameFromProps = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    const text = ref("Hello world");
    const counter = ref(0);

    const obj = reactive({ firstNameIn: "David", lastNameIn: "Casas" });
    const fullName = computed(() => {
      return `${obj.firstNameIn} ${obj.lastNameIn}`;
    });

    setInterval(() => counter.value++, 1000);
    setTimeout(() => {
      obj.firstNameIn += " Alberto";
    }, 2000);
    // ( ref, callback )
    watch(counter, (value, preValue) => console.log(`${preValue} -> ${value}`));

    // ( reactive, callback )
    watch(
      () => obj.firstNameIn,
      (value, preValue) => console.log(`${preValue} -> ${value}`)
    );

    text.value = "this is how update the value";

    onMounted(() => {
      console.log("On mounted Home Component");
    });

    // return made available in all the component
    return {
      text,
      counter,
      obj,
      fullName,
      fullNameFromProps,
    };
  },
};
</script>
