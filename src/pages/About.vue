<template>
  <div id="about" class="flex flex-row justify-center w-full max-w-xl px-4">
    <div class="my-10 md:my-4 markdown text-brand" v-html="aboutHtml"></div>
  </div>
</template>

<script setup lang="ts">
import marked from "./../components/marked.esm.js"
import aboutMD from './../markdown/About'

let aboutHtml = marked.parse(aboutMD, {
  breaks: true,
})
</script>

<style lang="scss">
#about {
  .markdown h2 {
    font-size: 1.4rem;
  }
}
</style>