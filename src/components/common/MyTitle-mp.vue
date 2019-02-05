<template>
  <van-nav-bar
    :title="title"
    :left-arrow="btnBack"
    :left-text="btnBackText"
    custom-class="nav-bar"
    @click-left="_goBack"
  >
    <van-icon
      slot="right"
      color="#fff"
      custom-style="padding-top: 14px;padding-bottom:14px;padding-left:10px;padding-right:10px;"
      :name="item.icon"
      :key="index"
      v-for="(item, index) in btns"
      @click="_btnOnClick(item)"
    />
  </van-nav-bar>
</template>

<script>
import Vue from "vue";
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
.nav-bar {
  background-color: #1989fa !important;
  color: #fff !important;
}
</style>