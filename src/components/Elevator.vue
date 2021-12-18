<template>
  <div class="elevator">
    <div class="tooltip">
      <div class="pannel">
        <div class="item">
          <img
            class="qrcode"
            src="https://image.nicelinks.site/%20%E6%9B%BC%E5%A6%99%E5%8F%A5%E5%AD%90.jpg"
            alt="曼妙句子-公众号"
          />
          <span class="text font-medium">曼妙句子</span>
          <span class="text">微信扫码关注</span>
        </div>
        <div class="item">
          <img
            class="qrcode"
            src="https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1"
            alt="倾城之链-小程序"
          />
          <span class="text font-medium">倾城之链</span>
          <span class="text">微信扫码体验</span>
        </div>
      </div>
      <div class="connect">
        <img
          class="qrcode"
          src="./../assets/images/qrcode.png"
          alt="曼妙句子-联系方式"
        />
      </div>
    </div>
    <div class="recommand">
      <a
        class="link font-medium text-rainbow"
        target="_blank"
        href="https://support.qq.com/products/368784"
        >投稿</a
      >
    </div>
    <div class="recommand">
      <button class="link font-medium" @click="onFriendsClick">友链</button>
    </div>
    <nut-dialog
      teleport="#app"
      title="友情链接"
      :no-cancel-btn="true"
      footer-direction="horizontal"
      :close-on-click-overlay="true"
      v-model:visible="isVisibleGialog"
    >
      <slot name="footer">
        <div class="content" name="footer">
          <a
            v-for="item in friendsArr"
            :key="item.link"
            :href="item.link"
            class="link"
            target="_blank"
          >
            {{ item.title }}
          </a>
        </div>
      </slot>
    </nut-dialog>
  </div>
</template>

<script>
export default {
  name: "FriendsLink",

  data() {
    return {
      isVisibleGialog: false,
      friendsArr: [
        {
          title: "倾城之链",
          link: "https://nicelinks.site/?ref=read.lovejade.cn",
        },
        {
          title: "清风明月阁",
          link: "https://wiki.lovejade.cn/?ref=read.lovejade.cn",
        },
        {
          title: "晚晴幽草轩",
          link: "https://www.jeffjade.com/?ref=read.lovejade.cn",
        },
        {
          title: "天意人间舫",
          link: "https://blog.lovejade.cn/?ref=read.lovejade.cn",
        },
        {
          title: "悠然宜想亭",
          link: "https://forum.lovejade.cn/?ref=read.lovejade.cn",
        },
        {
          title: "幽居空谷轩",
          link: "https://www.lovejade.cn/?ref=read.lovejade.cn",
        },
      ],
    };
  },

  methods: {
    onFriendsClick() {
      this.isVisibleGialog = true;
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";

:root {
  --rainbow-gradient: linear-gradient(-90deg,#adfbda 0,#35c3ff 30%,#fda399 50%,#76d880 70%,#ebf38b 90%,#adfbda 100%);
}
.text-rainbow {
  background-image: var(--rainbow-gradient, #fff);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  filter: drop-shadow(0 0 2rem #000);
  text-shadow: none!important;
}

.nut-dialog {
  width: 30rem;
  min-height: 12rem;
  padding: 2rem 3rem;
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: $white;
    .link {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      color: $brand;
      height: 2rem;
      line-height: 2rem;
    }
  }
}

.elevator {
  position: fixed;
  bottom: 16 * $factor;
  right: 4 * $factor;
  z-index: 100;
  .connect,
  .recommand {
    width: 6 * $factor;
    height: 6 * $factor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $white;
    border-radius: 50%;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
      animation: jelly 0.5s;
    }
  }
  .recommand {
    margin-top: 2 * $factor;
    .link {
      font-size: 1.6 * $factor;
      color: $common-link;
    }
  }
  .tooltip {
    position: relative;
    display: inline-block;
    &:hover {
      .pannel {
        visibility: visible;
      }
    }
    .pannel {
      position: absolute;
      bottom: -10.25 * $factor;
      right: 8 * $factor;
      z-index: 100;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: $white;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
      visibility: hidden;
      width: 40 * $factor;
      height: 26 * $factor;
      padding: 2 * $factor;
      border-radius: 2 * $factor;
      &:before {
        content: "";
        position: absolute;
        left: 100%;
        top: 12.5 * $factor;
        width: 0;
        height: 0;
        border-top: $factor solid transparent;
        border-left: $factor solid $white;
        border-bottom: $factor solid transparent;
      }
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 18 * $factor;
        height: 100%;
        .qrcode {
          width: 16 * $factor;
          height: 16 * $factor;
        }
        .text {
          font-size: 1.6 * $factor;
          color: $common-link;
        }
      }
    }
    .connect {
      .qrcode {
        width: 4 * $factor;
        height: 4 * $factor;
      }
    }
  }
}
@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
