/* eslint-disable no-undef */
import axios from 'axios';
import querystring from 'querystring';
import { parse } from 'url';
import { ApiHttpError, ApiResultError } from './Error';
import logger from '../service/Logger';

let baseURL;
if (process.env.RUN_TYPE === 'dev') {
  baseURL = process.env.CUSTOM_PARAMS.debugApiPath;
} else {
  baseURL = process.env.CUSTOM_PARAMS.baseURL;
}
let wxAdapter;
if (process.env.TARGET_PLATFORM === 'mp') {
  wxAdapter = function(config) {
    return new Promise((resolve, reject) => {
      wx.request({
        method: config.method,
        header: config.headers,
        url: config.url,
        data: config.params,
        complete: response => {
          response = {
            ...response,
            config,
            status: response.statusCode
          };
          if (response.statusCode < 200 || response.statusCode > 300) {
            return reject(response || {});
          }
          return resolve(response || {});
        }
      });
    });
  };
}

let client;
/**
 * 网络处理
 * @author HOPE
 * @class NetHelper
 */
class NetHelper {
  TAG = 'NetHelper';
  client = {};
  init() {
    client = {};
    for (let api in baseURL) {
      let _client = axios.create({
        baseURL: baseURL[api],
        timeout: 5000,
        paramsSerializer: params => querystring.stringify(params),
        responseType: 'json',
        maxContentLength: Math.pow(1024, 2)
      });
      _client.interceptors.request.use(
        config => {
          // let { method, url, params, data, background } = config;
          // let _data = {};
          // if (data) {
          //   //POST
          //   for (let [k, v] of Object.entries(data)) {
          //     _data[k] = v;
          //   }
          // }
          // if (!background) {
          // store.dispatch(reducerLoadingStart());
          // }
          return config;
        },
        error => {
          logger.error(this.TAG, error);
          // store.dispatch(reducerResetLoading());
          return Promise.reject(new ApiHttpError(400, error.message));
        }
      );
      _client.interceptors.response.use(
        response => {
          let {
            status,
            data,
            // eslint-disable-next-line
            config: { url, background }
          } = response;
          let { path } = parse(url);
          logger.debug(
            this.TAG,
            `[resp][${response.config.apiName}]`,
            status,
            path,
            data
          );
          // if (!background) {
          // store.dispatch(reducerLoadingEnd());
          // }
          return response;
        },
        error => {
          logger.error(this.TAG, error);
          // store.dispatch(reducerResetLoading());
          if (error.response) {
            let { status, statusText } = error.response;
            if (statusText === undefined) {
              if (status === 200) {
                statusText = '成功';
              } else if (status === 400) {
                statusText = '请求不正确';
              } else if (status === 401) {
                statusText = '没有权限';
              } else if (status === 413) {
                statusText = '发送内容过大';
              } else if (status === 500) {
                statusText = '服务器内部错误';
              } else if (status === 502) {
                statusText = '服务暂时不可用';
              } else if (status === 504) {
                statusText = '服务器处理超时';
              } else {
                statusText = '请求服务出错';
              }
            }
            return Promise.reject(new ApiHttpError(status, statusText));
          } else {
            if (error.message.startsWith('timeout of ')) {
              return Promise.reject(new ApiHttpError(408, '请求超时'));
            } else {
              return Promise.reject(new ApiHttpError(500, error.message));
            }
          }
        }
      );
      client[api] = _client;
    }
  }

  getApi(
    apiName,
    url,
    params = null,
    options = {
      headers: null,
      timeout: 10000,
      background: false,
      onDownloadProgress: null,
      allowEmpty: false
    }
  ) {
    logger.debug(this.TAG, `[req][${apiName}]`, 'GET', url, params);
    return this._requestApi({
      apiName,
      url,
      method: 'GET',
      params,
      headers: options.headers,
      timeout: options.timeout,
      background: options.background,
      onDownloadProgress: options.onDownloadProgress,
      allowEmpty: options.allowEmpty
    });
  }

  postApi(
    apiName,
    url,
    data = null,
    options = {
      headers: null,
      timeout: 10000,
      background: false,
      onUploadProgress: null,
      allowEmpty: false
    }
  ) {
    logger.debug(this.TAG, `[req][${apiName}]`, 'POST', url, data);
    let formData = null;
    if (data) {
      formData = new FormData();
      for (let [k, v] of Object.entries(data)) {
        formData.append(k, v);
      }
    }
    return this._requestApi({
      apiName,
      url,
      method: 'POST',
      data: formData,
      headers: options.headers,
      timeout: options.timeout,
      background: options.background,
      onUploadProgress: options.onUploadProgress,
      allowEmpty: options.allowEmpty
    });
  }

  _requestApi(config) {
    if (wxAdapter) {
      config.adapter = wxAdapter; //小程序
    }
    return client[config.apiName].request(config).then(response => {
      if (response.data) {
        //Array instanceof Object = true，故把Array的判断放前面
        if (response.data instanceof Array) {
          //JsonArray
          if (response.data.length > 0) {
            return response.data;
          } else {
            return Promise.reject(
              new ApiResultError(Error.ERROR_CODE_DATA_NULL, '空数据', '')
            );
          }
        } else if (response.data instanceof Object) {
          //JsonObject
          if (!response.data.success || response.data.errors) {
            let { code, message, data } = {
              code: response.data.resultCode,
              message: response.data.resultMsg,
              data: response.data
            };
            return Promise.reject(new ApiResultError(code, message, data));
          } else {
            return response.data;
          }
        }
      } else if (response.config.allowEmpty) {
        return response;
      } else {
        return Promise.reject(
          new ApiResultError(Error.ERROR_CODE_DATA_NULL, '空数据', '')
        );
      }
    });
  }
}

export default new NetHelper();
