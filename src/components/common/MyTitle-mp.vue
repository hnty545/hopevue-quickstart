<template>
  <van-nav-bar
    :fixed="fixed"
    :title="title"
    :left-arrow="btnBack"
    :left-text="btnBackText"
    :left-arrow-color="'#fff'"
    :custom-class="'ui-inner-nav-bar'"
    :custom-style="customStyle"
    @clickLeft="_goBack"
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
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import logger from "../../service/Logger";
export default {
  name: "Title",
  props: {
    fixed: { type: Boolean, default: true },
    btnBack: { type: Boolean, default: false },
    btnBackText: { type: String, default: null },
    title: { type: String, default: null },
    btns: { type: Array, default: null }
  },
  computed: {
    ...mapState("common", ["systemInfo"]),
    customStyle: function() {
      return "padding-top:" + (this.systemInfo.statusBarHeight + 4) + "px;";
    }
  },
  methods: {
    _goBack() {
      this.$router.back();
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
.ui-inner-nav-bar {
  background-color: #1989fa !important;
  color: #fff !important;
}
</style>