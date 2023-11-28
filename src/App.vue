<template>
  <div class="relative flex flex-col items-center justify-start w-full h-full">
    <Header />
    <router-view></router-view>
    <Elevator v-if="!isMobile" />
  </div>
</template>

<script>
import Elevator from "./components/Elevator.vue"
import Header from './components/Header.vue'
// import * as Sentry from "@sentry/vue";
export default {
  name: "App",

  data() {
    return {
      isMobile: window.innerWidth <= 960,
    }
  },

  components: {
    Elevator,
    Header
  },

  created() { },

  mounted() {
    // this.wakeUpQuickapp();
  },

  // methods: {
  //   isAndroidSystem() {
  //     const ua = window.navigator.userAgent.toLowerCase();
  //     return ua.indexOf("android") > -1 || ua.indexOf("adr") > -1;
  //   },

  //   isWechatBrowser() {
  //     const ua = window.navigator.userAgent.toLowerCase();
  //     return ua.includes("wechat") || ua.includes("wexin");
  //   },

  //   wakeUpQuickappByDeeplink() {
  //     const protocol = this.isWechatBrowser()
  //       ? "http://hapjs.org/"
  //       : "http://hapjs.org/"; // 'hap://'
  //     const aNodeDom = document.createElement("a");
  //     aNodeDom.setAttribute(
  //       "href",
  //       `${protocol}app/com.graceful.sentences/pages/Main`
  //     );
  //     aNodeDom.setAttribute("target", "_self");
  //     aNodeDom.setAttribute("id", "open-in-quickapp");
  //     if (document.getElementById("open-in-quickapp")) {
  //       document.body.removeChild(document.getElementById("open-in-quickapp"));
  //     }
  //     document.body.appendChild(aNodeDom);
  //     setTimeout(() => {
  //       aNodeDom.click();
  //     }, 100);
  //   },

  //   wakeUpQuickappByUrl() {
  //     const random = Math.random();
  //     fetch(
  //       `http://v2.thefatherofsalmon.com/?i=com.graceful.sentences&random=${random}`
  //     )
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  //   },

  //   isVivoManufacturer(ua) {
  //     let tempArr =
  //       ua.match(/(vivo|iqoo|v\d{4}(?:a|t|ba|ca|bt|ct|et|ea|ga|dt|da|a0))/i) ||
  //       [];
  //     return tempArr.length > 1;
  //   },

  //   wakeUpQuickapp() {
  //     if (!this.isAndroidSystem()) return;

  //     const ua = window.navigator.userAgent.toLowerCase();
  //     const isVivoDevice = this.isVivoManufacturer(ua);
  //     const browserArr = ["ucbrowser", "mqqbrowser", "quark", "baidu"];
  //     const isSupportUrl = browserArr.some((elem) => {
  //       return ua.includes(elem);
  //     });

  //     if (this.isWechatBrowser()) {
  //       Sentry.captureMessage(`Wake Up Quickapp（Wechat）, UA: ${ua}.`);
  //       this.wakeUpQuickappByDeeplink();
  //     } else {
  //       if (isSupportUrl && isVivoDevice) {
  //         Sentry.captureMessage(`Wake Up Quickapp, UA: ${ua}.`);
  //         this.wakeUpQuickappByUrl();
  //       }
  //     }
  //   },
  // },
}
</script>

<style>
#app {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
