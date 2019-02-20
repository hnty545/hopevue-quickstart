// import * as apis from '../../net/apis'
import * as utils from '../../utils';

export const common = {
  namespaced: true,
  //数据对象
  state: {
    systemInfo: { isIpx: false },
    uiInfo: { titleHeight: 0, containerHeight: 0 },
    today: utils.getFormatYYYY_MM_DDForDate(new Date()),
    loadingCount: 0,
    loadingMsg: '加载数据',
    location: ''
  },
  //数据改变
  mutations: {
    setSystemInfo(state, info) {
      state.systemInfo = { ...info };
    },
    setUiInfo(state, info) {
      state.uiInfo = { ...info };
    },
    setLoading(state, info) {
      if (typeof info === 'boolean') {
        if (info) {
          state.loadingCount++;
        } else {
          state.loadingCount--;
        }
      } else {
        if (info.add) {
          state.loadingCount++;
        } else {
          state.loadingCount--;
        }
        if (info.msg) {
          state.loadingMsg = info.msg;
        }
      }
    },
    setLocation(state, info) {
      state.location = { ...info };
    }
  },
  //数据逻辑
  actions: {},
  //数据获取
  getters: {
    getToday: (state, getters) => {
      return '今天：' + state.today;
    }
  }
};
