<template>
  <div v-if="img" class="ui-inner-floatactionbutton" style="height:60px;width:60px;opacity:0.9;">
    <img style="height:60px;width:60px;" :src="img" @click="$emit('click')">
  </div>
  <div v-else class="ui-inner-floatactionbutton ui-inner-floatactionbutton-icon" :style="style">
    <van-icon :color="color" :name="icon" :size="size" @click="$emit('click')"/>
  </div>
</template>

<script>
import Vue from "vue";
import logger from "../../service/Logger";
export default {
  name: "FloatActionButton",
  props: {
    fixed: { type: Boolean, default: true },
    color: { type: String, default: "#000" },
    bgcolor: { type: String, default: "#fff" },
    icon: { type: String, default: "filter-o" },
    size: { type: String, default: "20px" },
    img: { type: String, default: null },
    click: { type: Function, default: null }
  },
  data() {
    return {
      style:
        "opacity:0.9;border-width:1px;background-color:" +
        this.bgcolor +
        ";height:" +
        this.size +
        ";width:" +
        this.size +
        ";border-color:" +
        this.color
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.ui-inner-floatactionbutton {
  position: fixed !important;
  left: 80% !important;
  top: 90% !important;
}
.ui-inner-floatactionbutton-icon {
  padding: 15px !important;
  border-radius: 50px !important;
}
</style>