<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <MyLoading/>
  </div>
</template>

<script>
import { MyLoading } from "./components";
export default {
  components: {
    MyLoading
  }
};
</script>

<style lang="scss">
#nprogress .bar {
  //页面加载条
  background: #4caf50 !important;
}
</style>