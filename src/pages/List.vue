<template>
  <div class="flex flex-row justify-center w-screen max-w-xl max-h-screen my-6 list-wrapper">
    <ul class="container">
      <li class="p-4 list" v-for="item in sentencesArr" :key="item._id">
        <a class="link" :href="'/p/' + item._id">
          {{ item.content }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, nextTick } from "vue"
import getSentences from "./getSentences"

export default {
  setup() {
    const pageSize = 300
    const { sentencesArr, loading, error, request, updateBgColor } =
      getSentences(pageSize)

    onBeforeMount(() => {
      request()
    })

    onMounted(() => {
      nextTick(() => {
        updateBgColor()
      })
    })

    return {
      loading,
      sentencesArr,
    }
  },
}
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";

.list-wrapper {
  padding: 2 * $factor;

  .container {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;

    .list {
      width: 100%;
      margin: $factor 0;
      box-shadow: 0 0 2px rgba(0, 0, 0, .4);
      border-radius: $factor;
      background-color: $white;

      &:hover {
        background-color: $white-grey;
      }

      .link {
        display: inline-block;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
