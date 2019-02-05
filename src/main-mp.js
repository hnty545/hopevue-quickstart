/**
 * APP发布
 * @author HOPE
 * @version 0.0.1
 */
import Vue from 'vue';
import App from './App-mp';
import MpvueRouterPatch from 'mpvue-router-patch';
import store from './store';
import NetHelper from './net/NetHelper';

//初始化网络控件
NetHelper.init();

Vue.use(MpvueRouterPatch);

Vue.config.productionTip = false;

const app = new Vue({
  mpType: 'app',
  store,
  ...App
});
app.$mount();
