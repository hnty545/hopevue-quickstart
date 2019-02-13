<template>
  <van-popup :show="show" :close-on-click-overlay="false" custom-class="loading-dialog">
    <van-loading color="white" custom-class="loading-spin"/>
    <div class="loading-text">{{loadingMsg}}</div>
  </van-popup>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "Loading",
  computed: {
    ...mapState("common", ["loadingCount", "loadingMsg"]),
    show: {
      get: function() {
        return this.loadingCount > 0;
      },
      set: function() {}
    }
  },
};
</script>

<style lang="scss">
.loading-dialog {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: hsla(0, 0%, 10%, 0.5) !important;
  border-radius: 5px;
}
.loading-spin {
  display: block !important;
  margin: 0 auto !important;
}
.loading-text {
  color: #eee;
  margin-top: 5px;
  font-size: 14px;
}
</style>
