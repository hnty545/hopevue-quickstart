<template>
  <div :class="_customClass" :style="customStyle">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { TITLE_HEIGHT } from "../../config/constants";
export default {
  name: "Container",
  props: {
    customClass: { type: String, default: null }
  },
  computed: {
    ...mapState("common", ["systemInfo"]),
    customStyle: function() {
      return (
        "margin-top:" +
        (this.systemInfo.statusBarHeight + 4 + TITLE_HEIGHT) +
        "px;"
      );
    },
    _customClass: function() {
      return this.customClass;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>