<template>
  <div>
    <MyTitle title="主界面"/>
    <MyContainer custom-class="ui-form ui-inner-info-content">
      <van-row custom-class="ui-inner-info-row">
        <van-col span="24">{{today}}</van-col>
      </van-row>
      <van-row custom-class="ui-inner-info-row">
        <van-col span="24">{{getToday}}</van-col>
      </van-row>
      <van-row custom-class="ui-inner-info-row">
        <van-col span="24">{{talk}}</van-col>
      </van-row>
      <van-button type="primary" @click="onSayHello" custom-class="ui-inner-info-row">sayHello</van-button>
    </MyContainer>
    <MyLoading/>
    <MyNotify/>
    <MyFloatActionButton color="#fff" bgcolor="#1989fa" icon="arrow" @click="goto"/>
  </div>
</template>

<script>
import Vue from "vue"; // eslint-disable-line
import { mapState, mapActions, mapMutations, mapGetters } from "vuex"; // eslint-disable-line
import MyTitle from "../../../components/common/MyTitle-mp";
import MyContainer from "../../../components/common/MyContainer-mp";
import MyLoading from "../../../components/common/MyLoading-mp";
import MyFloatActionButton from "../../../components/common/MyFloatActionButton-mp";
import MyNotify from "../../../components/common/MyNotify-mp";
import Notify from "../../../../static/vant-weapp/notify/notify";
import NotifyHelper from "../../../plugins/NotifyHelper";
import LoadingTask from "../../../plugins/LoadingTask";
NotifyHelper.initNotify(MyNotify.Notify);
LoadingTask.initNotify(MyNotify.Notify);

export default {
  name: "home",
  mounted() {},
  components: {
    MyTitle,
    MyContainer,
    MyLoading,
    MyFloatActionButton,
    MyNotify
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

<style lang="scss">
.ui-inner-info-content {
  text-align: center;
}
.ui-inner-info-row {
  margin: 5px;
  font-size: 14px;
}
</style>
