<template>
  <van-popup v-model="show" position="right">
    <slot></slot>
  </van-popup>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
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
