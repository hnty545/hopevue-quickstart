function parseBaseUrlGroupByBuildType(root, buildType) {
  let ret = {};
  for (let api in root) {
    ret[api] = root[api][buildType];
  }
  return ret;
}
module.exports = {
  CUSTOM_PARAMS: {
    parseBaseUrlGroupByBuildType: parseBaseUrlGroupByBuildType,
    debugApiPath: {
      ...parseBaseUrlGroupByBuildType(require('./baseUrl'), 'debugApiPath')
    }
  }
};
