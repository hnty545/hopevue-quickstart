/**
 * APP发布
 * @author HOPE
 * @version 0.0.1
 */
import Vue from 'vue';
import App from './App';
import { createRouter, syncStore } from './router/router';
import store from './store';
import NetHelper from './net/NetHelper';
import * as filters from './utils/filter';
import VueCookies from 'vue-cookies';
import 'amfe-flexible';
import './style/normalize.css';
import './style/vant-var.less';

//是否允许调试工具
Vue.config.devtools = process.env.CUSTOM_PARAMS.DEBUG;

//注册全局方法
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

//加载cookies工具
Vue.use(VueCookies);

//DEBUG开启eruda调试工具
if (process.env.CUSTOM_PARAMS.DEBUG) {
  let eruda = require('eruda');
  eruda.init();
}

//初始化网络控件
NetHelper.init();

const router = createRouter();

syncStore(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
