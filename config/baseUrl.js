/**
 * 多API配置
 */
module.exports = {
  api1: {
    name: 'api1', //与命名相同
    dev: '"http://api1"', //开发环境地址
    test: '"http://api1"', //测试环境地址
    prod: '"http://api1"', //生产环境地址
    debugApiPath: '"/api1"' //本地debug调试命名
  },
  api2: {
    name: 'api2',
    dev: '"http://api2"',
    test: '"http://api2"',
    prod: '"http://api2"',
    debugApiPath: '"/api2"'
  }
};
