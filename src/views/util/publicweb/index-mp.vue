<template>
  <web-view :src="url"></web-view>
</template>

<script>
import Vue from "vue";
export default {
  name: "publicweb",
  onLoad: function(options) {
    this.url = options.url;
    if (options.title) {
      wx.setNavigationBarTitle({ title: options.title });
    }
  },
  mounted() {},
  components: {},
  computed: {},
  data() {
    return {
      url: null
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
