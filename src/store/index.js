import Vue from 'vue';
import Vuex from 'vuex';
import * as modules from './modules';

Vue.use(Vuex);

//是否允许调试工具
Vue.config.devtools = process.env.CUSTOM_PARAMS.DEBUG;

const store = new Vuex.Store({
  strict: process.env.CUSTOM_PARAMS.DEBUG,
  modules: {
    ...modules
  }
});

export default store;
