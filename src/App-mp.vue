<script>
import { TITLE_HEIGHT } from "./config/constants";
export default {
  config: {
    pages: ["views/base/home/main", "views/util/publicweb/main"],
    window: {
      navigationBarTitleText: "hopevue",
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTextStyle: "black",
      navigationStyle: "custom"
    },
    usingComponents: {
      "van-button": "/static/vant-weapp/button/index",
      "van-popup": "/static/vant-weapp/popup/index",
      "van-row": "/static/vant-weapp/row/index",
      "van-col": "/static/vant-weapp/col/index",
      "van-icon": "/static/vant-weapp/icon/index",
      "van-nav-bar": "/static/vant-weapp/nav-bar/index",
      "van-notify": "/static/vant-weapp/notify/index",
      "van-loading": "/static/vant-weapp/loading/index",
      "van-cell-group": "/static/vant-weapp/cell-group/index",
      "van-field": "/static/vant-weapp/field/index",
      "van-checkbox": "/static/vant-weapp/checkbox/index",
      "van-icon": "/static/vant-weapp/icon/index",
      "van-datetime-picker": "/static/vant-weapp/datetime-picker/index",
      "van-picker": "/static/vant-weapp/picker/index"
    }
  },
  created() {
    // // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync("logs") || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync("logs", logs);
    // // eslint-disable-next-line
    // console.log("app created and cache logs by setStorageSync");
    try {
      const res = wx.getSystemInfoSync();
      this.$store.commit("common/setSystemInfo", res);
      this.$store.commit("common/setUiInfo", {
        titleHeight: TITLE_HEIGHT,
        containerHeight: res.windowHeight - TITLE_HEIGHT
      });
    } catch (e) {
      console.log("getSystemInfoSync failed");
    }
  }
};
</script>

<style lang="scss">
</style>