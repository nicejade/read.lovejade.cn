<template>
  <div class="flex flex-row justify-center w-full max-w-xl px-4">
    <div class="my-10 md:my-4 markdown-body text-brand" v-html="aboutHtml"></div>
  </div>
</template>

<script setup lang="ts">
import marked from "./../components/marked.esm.js"
import aboutMD from './../markdown/About'

let aboutHtml = marked.parse(aboutMD, {
  breaks: true,
})
</script>