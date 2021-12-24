<template>
  <div
    class="
      list-wrapper
      flex flex-row
      max-w-xl
      justify-center
      max-h-screen
      w-screen
    "
  >
    <ul class="container">
      <li class="list" v-for="item in awesomeSentencesList" :key="item._id">
        <a class="link" :href="'/p/' + item._id">
          {{ item.content }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import $apis from "./../helper/apis.js";
import marked from "./../components/marked.esm.js";

export default {
  name: "List",

  data() {
    return {
      isMobile: window.innerWidth <= 960,
      pageSize: 300,
      awesomeSentencesList: [
        {
          _id: "5b279f0f3bd7ef3847a3fadb",
          content:
            "我走过山时，山不说话，我路过海时，海不说话，小毛驴滴滴答答，倚天剑伴我走天涯。大家都说我因为爱着杨过大侠，才在峨嵋山上出了家，其实我只是爱上了峨嵋山上的云和霞，像极了十六岁那年的烟花。",
          type: "aestheticism",
          createdBy: "admin",
          modifyTime: "2018-06-18T11:58:03.164Z",
          createTime: "2018-06-18T11:58:03.164Z",
          active: true,
          __v: 0,
        },
      ],
    };
  },

  components: {},

  created() {
    this.requestSentencesList();
  },

  mounted() {
    this.$nextTick(() => {
      this.updateBodyBackgroundColor();
    });
  },

  methods: {
    updateBodyBackgroundColor() {
      const bodyNode = document.querySelector("body");
      bodyNode.classList = `amp-mode-mouse amp-mode-touch`;
    },

    requestSentencesList() {
      const params = {
        pageCount: 1,
        pageSize: this.pageSize,
        sortType: -1,
        sortTarget: "createTime",
        active: true,
      };
      $apis
        .getSentences(params)
        .then((result) => {
          this.asseembleSentencesList(result);
        })
        .catch((error) => {})
        .finally(() => {});
    },

    asseembleSentencesList(params) {
      this.awesomeSentencesList = params.map((item) => {
        return {
          _id: item._id,
          type: item.type,
          content: marked(item.content, {}).replace(/<[^>]*>/g, ""),
        };
      });
    },
  },
};
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
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
      border-radius: $factor;
      padding: $factor;
      background-color: $white-grey;
      .link {
        display: inline-block;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
