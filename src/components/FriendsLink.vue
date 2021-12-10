<template>
  <div class="friends-link">
    <strong>友情链接：</strong>
    <a
      v-for="item in friendsArr"
      :key="item.link"
      :href="item.link"
      class="link"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "FriendsLink",

  data() {
    return {
      friendsArr: [
        {
          title: "倾城之链",
          link: "https://nicelinks.site/?ref=read.lovejade.cn",
        },
        {
          title: "晚晴幽草轩",
          link: "https://www.jeffjade.com/?ref=read.lovejade.cn",
        },
        {
          title: "静轩之别苑",
          link: "https://nicelinks.site/?ref=read.lovejade.cn",
        },
        {
          title: "清风明月阁",
          link: "https://wiki.lovejade.cn/?ref=read.lovejade.cn",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";
.friends-link {
  position: fixed;
  top: 2 * $factor;
  right: 2 * $factor;
  color: $common-link;
  font-size: 1.6 * $factor;
  .link {
    margin: 0 $factor;
  }
}
</style>
