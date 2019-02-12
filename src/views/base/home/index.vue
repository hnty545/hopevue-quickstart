<template>
  <div>
    <MyTitle title="主界面" :btns="[{icon:'arrow',onClick:goto}]"/>
    <div class="ui-container ui-form content">
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
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { Row, Col, Button, Notify } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Notify);
import { MyTitle } from "../../../components";
import NotifyHelper from "../../../plugins/NotifyHelper";
import LoadingTask from "../../../plugins/LoadingTask";
NotifyHelper.initNotify(Notify);
LoadingTask.initNotify(Notify);

export default {
  name: "home",
  mounted() {},
  components: {
    MyTitle
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
    goto() {
      window.open("https://baidu.com", "_blank");
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
