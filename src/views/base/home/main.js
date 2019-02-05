import Vue from 'vue';
import App from './index-mp';
import MpvueRouterPatch from 'mpvue-router-patch';
import store from '@/store';
import NetHelper from '@/net/NetHelper';

NetHelper.init();
Vue.use(MpvueRouterPatch);

Vue.config.productionTip = false;
const app = new Vue({
  mpType: 'page',
  store,
  ...App
});
app.$mount();
