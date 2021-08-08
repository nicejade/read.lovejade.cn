<template>
  <div id="awesome-sentence" class="awesome-sentence flex flex-col p-1 max-w-xl justify-center select-text mx-3">
    <div class="lined-paper" v-show="currentSentenceStr">
      <preview-md id="sentence" :value="currentSentenceStr || '曼妙句子'" />
    </div>
    <div class="flex flex-row justify-between mt-6">
      <button @click="onPreviousClick" class="bg-gray py-2 px-8 focus:outline-none text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75">
        回退
      </button>
      <button @click="onRandomClick" class="bg-gray py-2 px-8 focus:outline-none text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75">
        随机
      </button>
      <button @click="onCopy2ClipboardClick" class="bg-gray py-2 px-8 focus:outline-none text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75">
        复制
      </button>
    </div>
  </div>
</template>

<script>
import marked from './marked.esm.js'
import PreviewMd from './markdown/PreviewMd.vue'
import $apis from './../helper/apis.js'

export default {
  name: 'AwesomeSentence',

  data() {
    return {
      isLoading: false,
      isCanLookBack: false,
      sentence: {},
      lastSentenceStr: '',
      currentSentence: {},
    }
  },

  computed: {
    btnClassName() {
      const sentenceType = this.currentSentence.type
      return `${sentenceType}-colors`
    },
    currentSentenceStr() {
      return this.currentSentence.content || this.sentence.content
    },
  },

  components: {
    PreviewMd,
  },

  created() {
    $apis
      .getSysConf()
      .then((result) => {
        this.sentence = result.sentence || {}
        this.currentSentenceStr = sentence.content
        this.lastSentenceStr = sentence.content
      })
      .catch((error) => {
        console.error(`Something Error :`, error.message)
      })
  },

  mounted() {},

  methods: {
    copyToClipboard(content) {
      const el = document.createElement('textarea')
      el.value = content
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },

    copyToIosClipboard(content) {
      window.getSelection().removeAllRanges()
      const node = document.getElementById('sentence')
      const range = document.createRange()
      range.selectNode(node)
      window.getSelection().addRange(range)
      document.execCommand('copy')
      window.getSelection().removeAllRanges()
    },

    /* ---------------------Click Event--------------------- */
    onPreviousClick() {
      if (!this.isCanLookBack) {
        return this.$message({
          type: 'info',
          message: `错过，许是永恒，只可回首前一条`,
        })
      }
      this.currentSentenceStr = this.lastSentenceStr
      this.isCanLookBack = false
    },

    onRandomClick() {
      this.isLoading = true
      $apis
        .getRandomSentence()
        .then((result) => {
          this.lastSentenceStr = this.currentSentenceStr
          this.isCanLookBack = true
          this.currentSentence = result || {}
          this.currentSentenceStr = result.content
        })
        .catch((error) => {
          this.$message.error(`${error}`)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    updateSentence(index) {
      const params = {
        pageCount: index,
        pageSize: 1,
        sortType: 1,
        active: true,
        sortTarget: 'createTime',
      }
      $apis
        .getSentences(params)
        .then((result) => {
          if (!result || result.length === 0) return

          this.lastSentenceStr = this.currentSentenceStr
          this.isCanLookBack = true
          this.currentSentence = result[0] || {}
          this.currentSentenceStr = result[0].content
        })
        .catch((error) => {
          console.log(error)
          this.$message.error(`${error}`)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    onCopy2ClipboardClick() {
      const tempStr = marked(this.currentSentenceStr, {}) + `── 倾城之链 · 箴言锦语`
      const content = tempStr.replace(/<[^>]*>/g, '')
      this.$util.isIosSystem() ? this.copyToIosClipboard(content) : this.copyToClipboard(content)
      this.$message({
        type: 'success',
        message: `已将此条「锦语」复制到您的剪切板`,
      })
    },
  },
}
</script>

<style lang="scss">
@import './../assets/styles/variables.scss';

.awesome-sentence {
  margin: auto;
  .lined-paper {
    width: 100%;
    margin: 0 auto;
    padding: 6px 10px;
    position: relative;
    color: #444;
    text-align: left;
    line-height: 36px;

    background: #fff;
    background: -webkit-linear-gradient(top, $border-grey 0%, $white 6%) 0 6px;
    -webkit-background-size: 100% 36px;
    -moz-background-size: 100% 36px;
    -ms-background-size: 100% 36px;
    -o-background-size: 100% 36px;
    background-size: 100% 36px;
    div,
    p {
      line-height: 36px;
    }
    div:last-child,
    p:last-child {
      margin: 0;
    }
  }
}
</style>
