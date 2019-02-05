// 电话号码格式化
export function phoneFormatter(value) {
  value =
    value.substring(0, 3) +
    ' ' +
    value.substring(3, 7) +
    ' ' +
    value.substring(7, value.length);
  return value;
}
// 电话号码加星格式化
export function phoneEncrypted(value) {
  value =
    value.substring(0, 3) +
    ' ' +
    value.substring(3, 7).replace(/\d+/, '****') +
    ' ' +
    value.substring(7, value.length);
  return value;
}
// 身份证号码格式化
export function idCardFormatter(value) {
  value =
    value.substring(0, 6) +
    ' ' +
    value.substring(6, 14) +
    ' ' +
    value.substring(14, value.length);
  return value;
}
// 身份证号码加星格式化
export function idCardEncrypted(value) {
  value =
    value.substring(0, 6) +
    ' ' +
    value.substring(6, 14).replace(/\d+/, '**** ****') +
    ' ' +
    value.substring(14, value.length);
  return value;
}
// 信用卡格式化
export function creditCardFormatter(value) {
  value =
    value.substring(0, 4) +
    ' ' +
    value.substring(4, 8) +
    ' ' +
    value.substring(8, 12) +
    ' ' +
    value.substring(12, value.length);
  return value;
}
// 信用卡加星格式化
export function creditCardEncrypted(value) {
  value =
    value.substring(0, 4) +
    ' ' +
    value.substring(4, 12).replace(/\d+/, '**** ****') +
    ' ' +
    value.substring(12, value.length);
  return value;
}
// 姓名加*
export function nameEncrypted(value) {
  const valueLength = value.length - 1;
  let valueEncrypted = value.substr(-1);
  for (let i = 0; i < valueLength; i++) {
    valueEncrypted = '*' + valueEncrypted;
  }
  return valueEncrypted;
}
// 金额加千分符
export function thousandSeparator(value) {
  if (value === undefined || value.length < 4) return;
  const intPart = Number(value).toFixed(0); // 获取整数部分
  const intPartFormat = intPart
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
  let floatPart = '.00'; // 预定义小数部分
  const value2Array = value.split('.');

  // =2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString(); // 拿到小数部分
    if (floatPart.length === 1) {
      // 补0,实际上用不着
      return `${intPartFormat}.${floatPart}0`; // 补上小数位
    } else {
      return `${intPartFormat}.${floatPart}`;
    }
  } else {
    return `${intPartFormat}${floatPart}`;
  }
}
