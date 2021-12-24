<template>
  <div class="flex flex-row max-w-xl justify-center max-h-screen w-screen">
    <AwesomeSentence />
    <Elevator v-if="!isMobile" />
    <nut-drag :style="{ right: '0px', bottom: '2rem' }" direction="y">
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
import Elevator from "../components/Elevator.vue";
import FriendsLink from "../components/FriendLink.vue";

export default {
  name: "Post",

  data() {
    return {
      isMobile: window.innerWidth <= 960,
      isOverlay: true,
      isVisibleGialog: false,
      visible: false,
      navList: [
        {
          id: 1,
          text: "列表",
        },
        {
          id: 2,
          text: "友链",
        },
      ],
    };
  },

  components: {
    AwesomeSentence,
    Elevator,
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
