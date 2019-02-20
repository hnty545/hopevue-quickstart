<template>
  <van-popup :show="show" position="right">
    <slot></slot>
  </van-popup>
</template>

<script>
import Vue from "vue";
export default {
  name: "Drawer",
  props: {},
  data() {
    return {
      show: false
    };
  }
};
</script>
