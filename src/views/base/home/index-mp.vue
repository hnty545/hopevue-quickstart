<template>
  <div>
    <MyTitle title="主界面" :btns="[{icon:'arrow',onClick:goto}]"/>
    <div class="content">
      <van-row class="info-row">
        <van-col span="24">{{today}}</van-col>
      </van-row>
      <van-row class="info-row">
        <van-col span="24">{{getToday}}</van-col>
      </van-row>
      <van-row class="info-row">
        <van-col span="24">{{talk}}</van-col>
      </van-row>
      <van-button type="primary" @click="onSayHello" class="info-row">sayHello</van-button>
    </div>
    <van-notify id="van-notify"/>
    <MyLoading/>
  </div>
</template>

<script>
import Vue from "vue"; // eslint-disable-line
import { mapState, mapActions, mapMutations, mapGetters } from "vuex"; // eslint-disable-line
import MyTitle from "../../../components/common/MyTitle-mp";
import MyLoading from "../../../components/common/MyLoading-mp";
import Notify from "../../../../static/vant-weapp/notify/notify";
import NotifyHelper from "../../../plugins/NotifyHelper";
import LoadingTask from "../../../plugins/LoadingTask";
NotifyHelper.initNotify(Notify);
LoadingTask.initNotify(Notify);

export default {
  config: {
    navigationBarTitleText: "主界面"
  },
  name: "home",
  mounted() {},
  components: {
    MyTitle,
    MyLoading
  },
  computed: {
    ...mapState("common", ["today"]),
    ...mapState("hello", ["talk"]),
    ...mapGetters("common", ["getToday"])
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("hello", ["sayHello"]),
    goto(item) {
      this.$router.push({
        path: "/views/util/publicweb/main?url=https://baidu.com/&title=百度"
      });
    },
    onSayHello() {
      LoadingTask.init(this, this.$options.name).execute(
        this.sayHello,
        { name: "guys" },
        ret => {
          NotifyHelper.success(ret);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
.info-row {
  margin: 5px;
  font-size: 14px;
}
</style>
