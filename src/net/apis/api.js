import baseUrl from '../../../config/baseUrl';
import NetHelper from '../NetHelper';

/**
 * 获取app列表
 */
export const getApps = ({ api_token, page = 1 }) =>
  NetHelper.getApi(baseUrl.api1.name, '/apps', {
    page: page
  });
