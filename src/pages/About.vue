<template>
  <div class="flex flex-row justify-center w-full max-w-xl max-h-screen">
    <div class="my-10 markdown-body text-brand" v-html="aboutHtml"></div>
  </div>
</template>

<script setup lang="ts">
import marked from "./../components/marked.esm.js"
import aboutMD from './../markdown/About'

let aboutHtml = marked.parse(aboutMD, {
  breaks: true,
})
</script>