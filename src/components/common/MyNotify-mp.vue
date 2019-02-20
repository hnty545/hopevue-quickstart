<template>
  <van-notify id="van-notify" :paddingTop="systemInfo.isIpx?'44px;':'24px;'"/>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Notify from "../../../static/vant-weapp/notify/notify";
export default {
  name: "Notify",
  props: {},
  computed: {
    ...mapState("common", ["systemInfo"])
  },
  methods: {},
  Notify: Notify
};
</script>

<style lang="scss">
</style>