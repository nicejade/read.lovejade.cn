<template>
  <div class="elevator">
    <div class="tooltip">
      <div class="pannel">
        <div class="item">
          <img class="qrcode" src="https://image.lovejade.cn/%20%E6%9B%BC%E5%A6%99%E5%8F%A5%E5%AD%90.jpg"
            alt="曼妙句子-公众号" />
          <span class="font-medium text">曼妙句子</span>
          <span class="text">微信扫码关注</span>
        </div>
        <div class="item">
          <img class="qrcode" src="https://lovejade.oss-cn-shenzhen.aliyuncs.com/wechat-article-qrcode.jpg"
            alt="倾城之链-小程序" />
          <span class="font-medium text">晚晴幽草轩</span>
          <span class="text">微信扫码关注</span>
        </div>
      </div>
      <div class="connect">
        <img class="qrcode" src="./../assets/images/qrcode.png" alt="曼妙句子-联系方式" />
      </div>
    </div>
    <div class="recommand">
      <a class="font-medium link" target="_blank" href="https://support.qq.com/products/368784">投稿</a>
    </div>
    <div class="recommand">
      <button class="font-medium link" @click="onFriendsClick">友链</button>
    </div>
    <FriendsLink v-model="isVisibleGialog" />
  </div>
</template>

<script>
import FriendsLink from "./FriendLink.vue"

export default {
  name: "Elevator",

  data() {
    return {
      isVisibleGialog: false,
    }
  },

  components: {
    FriendsLink,
  },

  methods: {
    onFriendsClick() {
      this.isVisibleGialog = true
    },
  },
}
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";

.elevator {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 4 * $factor;
  z-index: 100;
  height: 12rem;

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
