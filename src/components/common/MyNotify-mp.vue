<template>
  <van-notify id="van-notify" :custom-style="customStyle"/>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Notify from "../../../static/vant-weapp/notify/notify";
export default {
  name: "Notify",
  props: {},
  computed: {
    ...mapState("common", ["systemInfo"]),
    customStyle: function() {
      return "padding-top:" + (this.systemInfo.statusBarHeight + 10) + "px;";
    }
  },
  methods: {},
  Notify: Notify
};
</script>

<style lang="scss">
</style>