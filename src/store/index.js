import Vue from 'vue';
import Vuex from 'vuex';
import * as modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.CUSTOM_PARAMS.DEBUG,
  modules: {
    ...modules
  }
});

export default store;
