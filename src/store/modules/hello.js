// import * as apis from '../../net/apis'

export const hello = {
  namespaced: true,
  //数据对象
  state: {
    talk: ''
  },
  //数据改变
  mutations: {
    setTalk(state, info) {
      state.talk = info;
    }
  },
  //数据逻辑
  actions: {
    async sayHello({ dispatch, commit, state, rootState }, params) {
      let { name } = params;
      //TODO:await api
      return new Promise(resolve => {
        setTimeout(() => {
          let ret = 'hello ' + name;
          console.log('hello');
          resolve(ret);
        }, 3000);
      }).then(ret => {
        commit('setTalk', ret);
        return ret; //方便页面对接口返回做处理，此处可以返回结果
      });
    }
  },
  //数据获取
  getters: {}
};
