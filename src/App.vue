<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },

  components: {},

  created() {},

  mounted() {
    this.wakeUpQuickapp();
  },

  methods: {
    isAndroidSystem() {
      const ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf("android") > -1 || ua.indexOf("adr") > -1;
    },

    isWechatBrowser() {
      const ua = window.navigator.userAgent.toLowerCase();
      return ua.includes("wechat") || ua.includes("wexin");
    },

    wakeUpQuickappByDeeplink() {
      const protocol = this.isWechatBrowser()
        ? "http://hapjs.org/"
        : "http://hapjs.org/"; // 'hap://'
      const aNodeDom = document.createElement("a");
      aNodeDom.setAttribute(
        "href",
        `${protocol}app/com.graceful.sentences/pages/Main`
      );
      aNodeDom.setAttribute("target", "_self");
      aNodeDom.setAttribute("id", "open-in-quickapp");
      if (document.getElementById("open-in-quickapp")) {
        document.body.removeChild(document.getElementById("open-in-quickapp"));
      }
      document.body.appendChild(aNodeDom);
      setTimeout(() => {
        aNodeDom.click();
      }, 100);
    },

    wakeUpQuickappByUrl() {
      const random = Math.random();
      fetch(
        `http://thefatherofsalmon.com/?i=com.graceful.sentences&random=${random}`
      )
        .then((res) => res.json())
        .then((res) => console.log(res));
    },

    wakeUpQuickapp() {
      if (!this.isAndroidSystem()) return;

      const ua = window.navigator.userAgent.toLowerCase();
      const browserArr = ["ucbrowser", "mqqbrowser", "quark", "baidu"];
      const isSupportUrl = browserArr.some((elem) => {
        return ua.includes(elem);
      });
      if (isSupportUrl) {
        this.wakeUpQuickappByUrl();
      } else {
        this.wakeUpQuickappByDeeplink();
      }
    },
  },
};
</script>
