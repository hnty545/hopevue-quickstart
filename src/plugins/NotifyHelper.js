import { THEME } from '../config/constants';
export default {
  TAG: 'NotifyHelper',
  _Notify: null,
  initNotify(Notify) {
    if (Notify) {
      this._Notify = Notify;
    } else {
      console.warn('NotifyHelper init invalid');
    }
  },
  _config: {
    duration: 2000
  },
  config(config) {
    if (config) {
      this._config.duration = config.duration ? config.duration : 2000;
    }
  },
  error(message, duration) {
    if (this._Notify) {
      this._Notify({
        message: message,
        duration: duration | this._config.duration,
        background: THEME.error,
        text: message, //vant-weapp
        backgroundColor: THEME.error //vant-weapp
      });
    } else {
      console.warn('NotifyHelper no init');
    }
  },
  info(message, duration) {
    if (this._Notify) {
      this._Notify({
        message: message,
        duration: duration | this._config.duration,
        background: THEME.info,
        text: message, //vant-weapp
        backgroundColor: THEME.info //vant-weapp
      });
    } else {
      console.warn('NotifyHelper no init');
    }
  },
  success(message, duration) {
    if (this._Notify) {
      this._Notify({
        message: message,
        duration: duration | this._config.duration,
        background: THEME.success,
        text: message, //vant-weapp
        backgroundColor: THEME.success //vant-weapp
      });
    } else {
      console.warn('NotifyHelper no init');
    }
  },
  warning(message, duration) {
    if (this._Notify) {
      this._Notify({
        message: message,
        duration: duration | this._config.duration,
        background: THEME.warning,
        text: message, //vant-weapp
        backgroundColor: THEME.warning //vant-weapp
      });
    } else {
      console.warn('NotifyHelper no init');
    }
  }
};
