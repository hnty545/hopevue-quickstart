<template>
  <van-nav-bar :title="title" :left-arrow="btnBack" @click-left="_goBack" :left-text="btnBackText">
    <van-icon
      slot="right"
      color="#fff"
      style="padding-top: 14px;padding-bottom:14px;padding-left:10px;padding-right:10px;"
      :name="item.icon"
      :key="index"
      v-for="(item, index) in btns"
      @click="_btnOnClick(item)"
    />
  </van-nav-bar>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
Vue.use(NavBar).use(Icon);
import logger from "../../service/Logger";
export default {
  name: "Title",
  props: {
    fixed: { type: Boolean, default: false },
    btnBack: { type: Boolean, default: false },
    btnBackText: { type: String, default: null },
    title: { type: String, default: null },
    btns: { type: Array, default: null }
  },
  methods: {
    _goBack() {
      this.$router.go(-1);
    },
    _btnOnClick(btn) {
      if (btn.onClick) {
        btn.onClick();
      } else {
        logger.warn(TAG, "无绑定事件");
      }
    }
  }
};
</script>

<style lang="scss">
</style>