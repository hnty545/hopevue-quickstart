import * as constants from '../config/constants';
/**
 * 转义商户类型
 */
export const getAreaType = areaType => {
  try {
    switch (areaType) {
      case 'OEM':
        return '机构';
      case 'PROVINCE':
        return '省代理';
      case 'CITY':
        return '市代理';
      case 'DISTRICT':
        return '区代理';
      case 'AGENT':
        return '代理';
      case 'INDUSTRY':
        return '行代理';
      default:
        return '未知';
    }
  } catch (e) {
    return '未知';
  }
};
/**
 * 转义商户类型
 */
export const getMerType = merType => {
  try {
    switch (merType) {
      case 'O':
        return '机构';
      case 'P':
        return '省代理';
      case 'C':
        return '市代理';
      case 'D':
        return '区代理';
      case 'A':
        return '代理';
      case 'I':
        return '行代理';
      default:
        return '未知';
    }
  } catch (e) {
    return '未知';
  }
};
/**
 * 计算总利润
 */
export const calcSumProfit = item => {
  if (item.list === undefined || item.list.length === 0) {
    return 0;
  } else {
    let sum = 0;
    item.list.forEach(item => {
      if (item.profit !== undefined) {
        sum += parseFloat(item.profit.cent);
      }
    });
    if (sum > 0) {
      sum = sum / 100;
    }
    return sum;
  }
};
/**
 * 终端状态
 */
export const getTermStatus = status => {
  try {
    switch (status) {
      case 'WAIT_ACTIVATION':
        return '未开通';
      case 'ACTIVATED':
        return '已开通';
      case 'LOG_OUT':
        return '已停用';
      default:
        break;
    }
  } catch (e) {
    return '未知';
  }
};
export const getTermModel = (terminalType, posModel) => {
  try {
    if (terminalType) {
      for (let key in terminalType) {
        let value = terminalType[key];
        if (value.id === posModel) {
          return value.name;
        }
      }
    }
    return '未知';
  } catch (e) {
    return '未知';
  }
};

export const getContentHeight = (document, { offset = 0 }) => {
  return (
    (document.documentElement.clientHeight || document.body.clientHeight) -
    constants.TITLE_HEIGHT +
    offset
  );
};
