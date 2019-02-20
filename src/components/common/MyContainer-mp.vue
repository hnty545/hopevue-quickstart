<template>
  <div :class="_class">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "Container",
  props: {
    customClass: { type: String, default: null }
  },
  computed: {
    ...mapState("common", ["systemInfo"]),
    _class: function() {
      return (
        (this.systemInfo.isIpx
          ? "ui-inner-container-ipx"
          : "ui-inner-container") +
        " " +
        this.customClass
      );
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.ui-inner-container {
  margin-top: 70px;
}
.ui-inner-container-ipx {
  margin-top: 90px;
}
</style>