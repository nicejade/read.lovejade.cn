<template>
  <div class="flex flex-row max-w-xl justify-center max-h-screen w-screen">
    <AwesomeSentence />
    <Elevator v-if="!isMobile" />
  </div>
</template>

<script>
import AwesomeSentence from "../components/AwesomeSentence.vue";
import Elevator from "../components/Elevator.vue";

export default {
  name: "Post",

  data() {
    return {
      isMobile: window.innerWidth <= 960,
    };
  },

  components: {
    AwesomeSentence,
    Elevator,
  },

  created() {},
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
