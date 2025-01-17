<template>
  <nut-dialog teleport="#app" title="友情链接" :no-cancel-btn="true" footer-direction="horizontal"
    :close-on-click-overlay="true" v-model:visible.sync="isVisibleGialog">
    <slot name="footer">
      <div class="content" name="footer">
        <nav aria-label="友情链接">
          <ul>
            <li v-for="item in friendsArr" class="link" :key="item.link + '?ref=read.lovejade.cn'">
              <a :href="item.link" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </slot>
  </nut-dialog>
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
          link: "https://site.lovejade.cn/",
        },
        {
          title: "生财有迹",
          link: "https://fund.lovejade.cn/",
        },
        {
          title: "逍遥自在轩",
          link: "https://www.niceshare.site/",
        },
        {
          title: "清风明月轩",
          link: "https://www.thebettersites.com/",
        },
        {
          title: "晚晴幽草轩",
          link: "https://www.jeffjade.com/",
        },
        {
          title: "天意人间舫",
          link: "https://blog.lovejade.cn/",
        },
        {
          title: "缘知随心庭",
          link: "https://fine.niceshare.site/",
        },
        {
          title: "玉桃文飨轩",
          link: "https://share.lovejade.cn/",
        },
        {
          title: "悠然宜想亭",
          link: "https://forum.lovejade.cn/",
        },
        {
          title: "幽居空谷轩",
          link: "https://www.lovejade.cn/",
        },
      ],
    }
  },

  watch: {
    modelValue(val) {
      this.isVisibleGialog = val
    },
    isVisibleGialog(val) {
      this.$emit("update:modelValue", val)
    },
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";

.nut-dialog {
  width: 100%;
  max-width: 36rem;
  min-height: 36rem;
  padding: 2rem 3rem;

  .nut-dialog__header {
    font-size: 2.4 * $factor;
    font-weight: bold;
    height: 3 * $factor;
  }

  .nut-button {
    font-size: 1.8 * $factor;
  }

  .nut-button--small {
    height: 3.6 * $factor;
  }

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
      font-size: 1.6 * $factor;
      color: $brand;
      height: 2rem;
      line-height: 2rem;
      font-size: 1rem;

      &:hover {
        color: $jade;
        font-weight: 600;
      }
    }
  }
}

@media only screen and (max-width: 678px) {
  .nut-dialog {
    width: 20rem;
  }
}
</style>
