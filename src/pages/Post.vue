<template>
  <div class="flex flex-row max-w-xl justify-center max-h-screen w-screen">
    <AwesomeSentence />
    <nut-drag :style="{ right: '0px', bottom: '9rem' }" direction="y">
      <nut-fixednav
        v-model:visible="visible"
        un-active-text="曼妙导航"
        :overlay="isOverlay"
      >
        <template v-slot:list>
          <ul class="nut-fixednav__list">
            <li class="nut-fixednav__list-item">
              <router-link class="link" to="/list/"> 列表 </router-link>
            </li>
            <li class="nut-fixednav__list-item">
              <a class="link" href="https://forum.lovejade.cn/d/111">关于</a>
            </li>
            <li class="nut-fixednav__list-item" v-if="isMobile">
              <button class="link" @click="onFriendsClick">友链</button>
            </li>
          </ul>
        </template>
      </nut-fixednav>
    </nut-drag>
    <FriendsLink v-model="isVisibleGialog" />
  </div>
</template>

<script>
import AwesomeSentence from "../components/AwesomeSentence.vue";
import FriendsLink from "../components/FriendLink.vue";

export default {
  name: "Post",

  data() {
    return {
      isOverlay: true,
      isVisibleGialog: false,
      visible: false,
      isMobile: window.innerWidth <= 960
    };
  },

  components: {
    AwesomeSentence,
    FriendsLink,
  },

  created() {},

  methods: {
    onFriendsClick() {
      this.isVisibleGialog = true;
      this.isOverlay = false;
    },
  },
};
</script>

<style lang="scss">
.nut-drag {
  .nut-fixednav {
    height: 3rem;
    .nut-fixednav__btn {
      width: 7rem;
      padding-left: 0;
      .text {
        width: 2rem;
        line-height: 1rem;
        font-size: .9rem;
      }
    }
    .nut-fixednav__list {
      font-size: 1rem;
      padding-right: 7rem;
    }
  }
}
</style>
