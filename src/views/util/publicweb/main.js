import Vue from 'vue';
import App from './index-mp';

Vue.config.productionTip = false;
const app = new Vue({
  mpType: 'page',
  ...App
});
app.$mount();
