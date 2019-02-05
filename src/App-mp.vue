<script>
export default {
  config: {
    pages: ["views/base/home/main", "views/util/publicweb/main"],
    window: {
      navigationBarTitleText: "小程序标题",
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTextStyle: "black"
    },
    usingComponents: {
      "van-button": "/static/vant-weapp/button/index",
      "van-popup": "/static/vant-weapp/popup/index",
      "van-row": "/static/vant-weapp/row/index",
      "van-col": "/static/vant-weapp/col/index",
      "van-icon": "/static/vant-weapp/icon/index",
      "van-nav-bar": "/static/vant-weapp/nav-bar/index",
      "van-notify": "/static/vant-weapp/notify/index",
      "van-loading": "/static/vant-weapp/loading/index"
    }
  },
  created() {
    // // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync("logs") || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync("logs", logs);
    // // eslint-disable-next-line
    // console.log("app created and cache logs by setStorageSync");
  }
};
</script>

<style lang="scss">
</style>