import logger from '../service/Logger';
import { ApiHttpError, ApiResultError } from '../net/Error';
import NotifyHelper from './NotifyHelper';

export default {
  TAG: 'LoadingTask',
  init(
    self,
    tag,
    failedMsg = '加载失败',
    isLoading = true,
    loadingMsg = '加载数据'
  ) {
    this.self = self;
    this.tag = tag;
    this.failedMsg = failedMsg;
    this.isLoading = isLoading;
    this.loadingMsg = loadingMsg;
    this.loading = v => self.$store.commit('common/setLoading', v);
    return this;
  },
  initNotify(Notify) {
    NotifyHelper.initNotify(Notify);
  },
  async execute(dist, params = {}, cb) {
    if (this.isLoading) {
      this.loading(true);
    }
    try {
      let ret = await dist(params);
      if (cb) {
        cb(ret);
      }
    } catch (e) {
      logger.error(this.tag ? this.tag : this.TAG, e);
      if (e instanceof ApiHttpError || e instanceof ApiResultError) {
        NotifyHelper.error(
          '[' + e.code + '] ' + (e.message ? e.message : this.failedMsg)
        );
        if (cb) {
          cb(e);
        }
      } else {
        NotifyHelper.error(this.failedMsg);
        if (cb) {
          cb(new Error({ code: '-1', message: this.failedMsg }));
        }
      }
    }
    if (this.isLoading) {
      this.loading(false);
    }
  }
};
