<template>
  <div class="flex flex-row max-w-xl justify-center max-h-screen w-screen">
    <AwesomeSentence />
  </div>
</template>

<script>
import AwesomeSentence from './components/AwesomeSentence.vue'

export default {
  name: 'App',

  data() {
    return {
    }
  },

  components: {
    AwesomeSentence
  },

  created() {
  }
}
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