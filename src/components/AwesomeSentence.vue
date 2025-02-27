<template>
  <div id="awesome-sentence"
    class="flex flex-col justify-center max-w-xl min-w-full px-4 py-4 mx-3 select-text awesome-sentence">
    <div class="card" :class="awesomeCardBg">
      <div class="lmin-w-full" v-show="sentence.content">
        <preview-md id="sentence" :value="sentence.content || '曼妙句子'" />
      </div>
    </div>
    <div class="z-10 flex flex-row justify-between mt-6">
      <a @click="onPreviousClick"
        class="px-6 py-1 font-semibold text-white rounded-full shadow-md button bg-gray focus:outline-none focus:ring-2 focus:ring-opacity-75">
        回退
      </a>
      <a @click="onRandomClick"
        class="px-6 py-1 font-semibold text-white rounded-full shadow-md button bg-gray focus:outline-none focus:ring-2 focus:ring-opacity-75">
        随机
      </a>
      <a @click="onCopy2ClipboardClick"
        class="px-6 py-1 font-semibold text-white rounded-full shadow-md button bg-gray focus:outline-none focus:ring-2 focus:ring-opacity-75">
        复制
      </a>
    </div>
  </div>
</template>

<script>
import { Toast } from "@nutui/nutui"
import marked from "./marked.esm.js"
import PreviewMd from "./markdown/PreviewMd.vue"
import $apis from "./../helper/apis.js"
import $utils from "./../helper/util.js"

const gDefaultSentence =
  "我走过山时，山不说话，我路过海时，海不说话，小毛驴滴滴答答，倚天剑伴我走天涯。大家都说我因为爱着杨过大侠，才在峨嵋山上出了家，其实我只是爱上了峨嵋山上的云和霞，像极了十六岁那年的烟花。"

export default {
  name: "AwesomeSentence",

  data() {
    return {
      isLoading: false,
      isCanLookBack: false,
      lastSentence: {},
      sentence: {
        content: gDefaultSentence,
        type: "aestheticism",
        _id: "5b279f0f3bd7ef3847a3fadb",
      },
    }
  },

  computed: {
    awesomeCardBg() {
      return this.sentence.type
    },
  },

  components: {
    PreviewMd,
  },

  created() {
    const id = this.$route.params.id
    if (id) {
      this.getSpecificSentence(id)
    } else {
      this.getRandomSentence()
    }
  },

  mounted() { },

  watch: {
    sentence(objs) {
      this.updateDescMeta()
      this.addCanonicalForSEO(objs)
      this.updateStructuredData(objs)
    }
  },

  methods: {
    deepCloneObj(obj) {
      return JSON.parse(JSON.stringify(obj))
    },

    updateDescMeta() {
      const description = this.getCurrentDesc()
      if (!description) return

      const descNode = document.querySelector('meta[name="description"]')
      descNode.setAttribute("content", description)

      const tDescNode = document.querySelector('meta[name="twitter:description"]')
      tDescNode.setAttribute("content", description)

      const ogDescNode = document.querySelector('meta[property="og:description"]')
      ogDescNode.setAttribute("content", description)
    },

    addCanonicalForSEO(sentence) {
      let link = document.querySelector("link[rel='canonical']")
      link = !!link ? link : document.createElement('link')
      link.setAttribute('rel', 'canonical')
      link.setAttribute('href', `https://read.lovejade.cn/p/${sentence._id}`)
      document.head.appendChild(link)
    },

    updateStructuredData(sentence) {
      const description = this.getCurrentDesc()
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": document.title,
        "description": description || "",
        "url": `https://read.lovejade.cn/p/${sentence._id}`,
        "datePublished": new Date(sentence.modifyTime).toISOString()
      }

      let scriptNode = document.querySelector('script[type="application/ld+json"]')
      if (scriptNode) {
        scriptNode.textContent = JSON.stringify(structuredData)
      } else {
        scriptNode = document.createElement('script')
        scriptNode.setAttribute('type', 'application/ld+json')
        scriptNode.textContent = JSON.stringify(structuredData)
        document.head.appendChild(scriptNode)
      }
    },

    getSpecificSentence(id) {
      $apis
        .getSentencesById({ id })
        .then((result) => {
          this.lastSentence = this.deepCloneObj(this.sentence)
          this.sentence = (result && result[0]) || {}
          this.updateDescMeta()
          window.$currentSentenceStr = this.getCurrentDesc()
        })
        .catch((error) => {
          console.error(`Something Error :`, error.message)
        })
    },

    getRandomSentence() {
      $apis
        .getSysConf()
        .then((result) => {
          this.lastSentence = this.deepCloneObj(this.sentence)
          this.sentence = result.sentence || {}
        })
        .catch((error) => {
          console.error(`Something Error :`, error.message)
        })
    },

    copyToClipboard(content) {
      const el = document.createElement("textarea")
      el.value = content
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    },

    copyToIosClipboard(content) {
      let textarea
      let result

      try {
        textarea = document.createElement("textarea")
        textarea.setAttribute("readonly", true)
        textarea.setAttribute("contenteditable", true)
        textarea.style.position = "fixed"
        textarea.value = content
        document.body.appendChild(textarea)

        textarea.focus()
        textarea.select()

        const range = document.createRange()
        range.selectNodeContents(textarea)

        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)

        textarea.setSelectionRange(0, textarea.value.length)
        result = document.execCommand("copy")
      } catch (err) {
        console.error(err)
        result = null
      } finally {
        document.body.removeChild(textarea)
      }
      if (!result) {
        // manual copy fallback using prompt
      }
    },

    updateSentence(index) {
      const params = {
        pageCount: index,
        pageSize: 1,
        sortType: 1,
        active: true,
        sortTarget: "createTime",
      }
      $apis
        .getSentences(params)
        .then((result) => {
          if (!result || result.length === 0) return
          this.isCanLookBack = true
          this.lastSentence = this.deepCloneObj(this.sentence)
          this.sentence = result[0] || {}
        })
        .catch((error) => {
          console.log(error)
          this.$message.error(`${error}`)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    getCleanContent() {
      let content = marked(this.sentence.content, {})
      return content.replace(/<[^>]*>/g, "")
    },

    getCurrentDesc() {
      let content = this.getCleanContent()
      return content.replace("\n", "")
    },

    switchRoute() {
      window.$currentSentenceStr = this.getCurrentDesc()
      this.$router.push({
        path: `/p/${this.sentence._id}`,
      })
    },

    /* ---------------------Click Event--------------------- */
    onPreviousClick() {
      window.gtag("event", "btn_previous_click", {
        id: this.sentence._id,
      })

      if (!this.isCanLookBack) {
        Toast.warn("错过，许是永恒，只可回退到前一条", {
          center: false,
          bottom: "10%",
        })
        return
      }
      this.isCanLookBack = false
      this.sentence = this.deepCloneObj(this.lastSentence)
      this.switchRoute()
      Toast.success("已成功为您回退至上一条佳句", {
        center: false,
        bottom: "10%",
      })
    },

    onRandomClick() {
      window.gtag("event", "btn_random_click", {
        id: this.sentence._id,
      })

      this.isLoading = true
      $apis
        .getRandomSentence()
        .then((result) => {
          this.isCanLookBack = true
          this.lastSentence = this.deepCloneObj(this.sentence)
          this.sentence = result || {}
          Toast.success("已成功为您随机更新佳句", {
            center: false,
            bottom: "10%",
          })
          this.switchRoute()
        })
        .catch((error) => {
          this.$message.error(`${error}`)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    onCopy2ClipboardClick() {
      window.gtag("event", "btn_copy_click", {
        id: this.sentence._id,
      })

      const path = `https://read.lovejade.cn/p/${this.sentence._id}`
      const content = this.getCleanContent() + `\n ${path}`
      $utils.isIosSystem()
        ? this.copyToIosClipboard(content)
        : this.copyToClipboard(content)
      Toast.success("已将此条「锦语」复制到您的剪切板", {
        center: false,
        bottom: "10%",
      })
    },
  },
}
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";

@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("//at.alicdn.com/t/webfont_tts59m8038.eot");
  /* IE9*/
  src: url("//at.alicdn.com/t/webfont_tts59m8038.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */
    url("//at.alicdn.com/t/webfont_tts59m8038.woff2") format("woff2"),
    url("//at.alicdn.com/t/webfont_tts59m8038.woff") format("woff"),
    /* chrome、firefox */
    url("//at.alicdn.com/t/webfont_tts59m8038.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url("//at.alicdn.com/t/webfont_tts59m8038.svg#杨任东竹石体-Bold") format("svg");
  /* iOS 4.1- */
}

.nut-toast-inner {
  background-image: linear-gradient(120deg, #84fab0bb 0%, #8fd3f4cc 100%);
  max-width: 64rem;
}

.awesome-sentence {
  margin: auto;

  .card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.618);
    border-radius: 12px;
    padding: 1rem 2rem;
  }

  .button {
    font-family: "webfont";
    background-color: #e2e8f066;
    border: 1px solid #e2e8f0;
    cursor: pointer;
  }
}

@media only screen and (max-width: 678px) {
  .awesome-sentence {
    .card {
      padding: 1rem;
    }
  }
}
</style>
